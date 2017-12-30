package com.prz.edu.checkyourspend.assembler;

import com.prz.edu.checkyourspend.domain.category.model.Category;
import com.prz.edu.checkyourspend.domain.category.repository.CategoryRepository;
import com.prz.edu.checkyourspend.domain.expenditure.model.Expenditure;
import com.prz.edu.checkyourspend.webui.expenditure.dto.ExpenditureDto;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Component
public class ExpenditureAssembler {

    private CategoryRepository categoryRepository;

    public ExpenditureAssembler(CategoryRepository categoryRepository){
        this.categoryRepository = categoryRepository;
    }
    public Expenditure map(ExpenditureDto expenditureDto) {
        Category category = categoryRepository.findByName(expenditureDto.getCategory());

        Expenditure expenditure = new Expenditure();

        expenditure.setId(expenditureDto.getId());
        expenditure.setValue(expenditureDto.getValue());
        expenditure.setDate(expenditureDto.getDate());
        expenditure.setDescription(expenditureDto.getDescription());
        expenditure.setCategory(category);
        return expenditure;
    }

    public ExpenditureDto map(Expenditure expenditure) {
        ExpenditureDto expenditureDto = new ExpenditureDto();

        expenditureDto.setId(expenditure.getId());
        expenditureDto.setValue(expenditure.getValue());
        expenditureDto.setDate(expenditure.getDate());
        expenditureDto.setDescription(expenditure.getDescription());
        expenditureDto.setCategory(Optional.ofNullable(expenditure.getCategory()).orElse(new Category()).getName());
        return expenditureDto;
    }

    public List<ExpenditureDto> map(List<Expenditure> expenditures) {
        return expenditures.stream().map(this::map).collect(Collectors.toList());
    }
}
