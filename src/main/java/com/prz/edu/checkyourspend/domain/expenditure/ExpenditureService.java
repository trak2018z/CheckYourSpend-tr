package com.prz.edu.checkyourspend.domain.expenditure;

import com.prz.edu.checkyourspend.assembler.ExpenditureAssembler;
import com.prz.edu.checkyourspend.domain.expenditure.model.Expenditure;
import com.prz.edu.checkyourspend.domain.expenditure.repository.ExpenditureRepository;
import com.prz.edu.checkyourspend.domain.user.UserService;
import com.prz.edu.checkyourspend.domain.user.model.User;
import com.prz.edu.checkyourspend.webui.expenditure.dto.ExpenditureDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ExpenditureService {

    private ExpenditureAssembler expenditureAssembler;
    private ExpenditureRepository expenditureRepository;
    private UserService userService;

    public ExpenditureService(ExpenditureAssembler expenditureAssembler, ExpenditureRepository expenditureRepository, UserService userService) {
        this.expenditureAssembler = expenditureAssembler;
        this.expenditureRepository = expenditureRepository;
        this.userService = userService;
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

    public Page<ExpenditureDto> getAExpenditureForCurrentUser(Long page, Long pageSize) {
        Page<Expenditure> expenditurePage = expenditureRepository.findByUserId(userService.getCurrentUser().getId(),
                new PageRequest(page.intValue(), pageSize.intValue(), new Sort(Sort.Direction.DESC, "date", "id")));
        return expenditurePage.map(expenditureAssembler::map);
    }
}
