package com.prz.edu.checkyourspend.domain.expenditure;

import com.prz.edu.checkyourspend.assembler.ExpenditureAssembler;
import com.prz.edu.checkyourspend.domain.category.repository.CategoryRepository;
import com.prz.edu.checkyourspend.domain.expenditure.model.Expenditure;
import com.prz.edu.checkyourspend.domain.expenditure.repository.ExpenditureRepository;
import com.prz.edu.checkyourspend.domain.user.UserService;
import com.prz.edu.checkyourspend.domain.user.model.User;
import com.prz.edu.checkyourspend.webui.expenditure.dto.ExpenditureChart;
import com.prz.edu.checkyourspend.webui.expenditure.dto.ExpenditureDto;
import com.prz.edu.checkyourspend.webui.expenditure.model.ChartRange;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

@Service
public class ExpenditureService {

    private ExpenditureAssembler expenditureAssembler;
    private ExpenditureRepository expenditureRepository;
    private UserService userService;
    private CategoryRepository categoryRepository;

    public ExpenditureService(ExpenditureAssembler expenditureAssembler, ExpenditureRepository expenditureRepository, UserService userService, CategoryRepository categoryRepository) {
        this.expenditureAssembler = expenditureAssembler;
        this.expenditureRepository = expenditureRepository;
        this.userService = userService;
        this.categoryRepository = categoryRepository;
    }

    public ExpenditureDto save(ExpenditureDto expenditureDto) {
        Expenditure expenditure = expenditureAssembler.map(expenditureDto);

        User user = userService.getCurrentUser();
        expenditure.setUser(user);

        expenditure = expenditureRepository.save(expenditure);
        return expenditureAssembler.map(expenditure);
    }

    public List<ExpenditureDto> getAllExpenditureForCurrentUser() {
        List<Expenditure> expenditures = expenditureRepository.findByUserId(userService.getCurrentUser().getId());
        return expenditureAssembler.map(expenditures);
    }

    public Page<ExpenditureDto> getExpenditureForCurrentUser(Long page, Long pageSize) {
        Page<Expenditure> expenditurePage = expenditureRepository.findByUserId(userService.getCurrentUser().getId(),
                new PageRequest(page.intValue(), pageSize.intValue(), new Sort(Sort.Direction.DESC, "date", "id")));
        return expenditurePage.map(expenditureAssembler::map);
    }

    public List<ExpenditureChart> getExpenditureForChartGroupByCategory(ChartRange chartRange) {
        Calendar calendar = Calendar.getInstance();
        switch (chartRange) {
            case LAST_10:
                return getExpenditureGroupByCategoryLast10();
            case ALL:
                return expenditureRepository.findAllAndGroupByCategory(userService.getCurrentUser().getId());
            case LAST_WEEK:
            case LAST_MONTH:
            case LAST_YEAR: {
                calendar.add(Calendar.DATE, chartRange.getValue());
                return getExpenditureGroupByCategoryDate(calendar.getTime());
            }
        }
        return new ArrayList<>();
    }

    public List<ExpenditureChart> getExpenditureForChartGroupByExpenditure(ChartRange chartRange) {
        Calendar calendar = Calendar.getInstance();
        switch (chartRange) {
            case LAST_10:
                return expenditureAssembler.mapToExpenditureChart(expenditureRepository.findTop10ByUserIdOrderByDateDesc(userService.getCurrentUser().getId()));
            case ALL:
                return expenditureAssembler.mapToExpenditureChart(expenditureRepository.findByUserId(userService.getCurrentUser().getId()));
            case LAST_WEEK:
            case LAST_MONTH:
            case LAST_YEAR: {
                calendar.add(Calendar.DATE, chartRange.getValue());
                return expenditureAssembler.mapToExpenditureChart(
                        expenditureRepository.findByUserIdAndDateGreaterThanOrderByDateDesc(userService.getCurrentUser().getId(), calendar.getTime()));
            }
        }
        return new ArrayList<>();
    }

    private List<ExpenditureChart> getExpenditureGroupByCategoryLast10() {
        List<ExpenditureChart> expenditureByCategories = new ArrayList<>();
        categoryRepository.findByUserId(userService.getCurrentUser().getId()).forEach(category -> {
            List<Expenditure> expenditures = expenditureRepository.findTop10ByUserIdAndCategoryIdOrderByDateDesc(userService.getCurrentUser().getId(), category.getId());
            ExpenditureChart expenditureChart = new ExpenditureChart(category.getName(), expenditures.stream().mapToDouble(Expenditure::getValue).sum());
            expenditureByCategories.add(expenditureChart);
        });

        return expenditureByCategories;
    }

    private List<ExpenditureChart> getExpenditureGroupByCategoryDate(Date date) {
        List<ExpenditureChart> expenditureByCategories = new ArrayList<>();
        categoryRepository.findByUserId(userService.getCurrentUser().getId()).forEach(category -> {
            List<Expenditure> expenditures = expenditureRepository.findByUserIdAndCategoryIdAndDateGreaterThanOrderByDateDesc(userService.getCurrentUser().getId(), category.getId(), date);
            ExpenditureChart expenditureChart = new ExpenditureChart(category.getName(), expenditures.stream().mapToDouble(Expenditure::getValue).sum());
            expenditureByCategories.add(expenditureChart);
        });

        return expenditureByCategories;
    }
}
