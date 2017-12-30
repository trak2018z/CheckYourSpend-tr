package com.prz.edu.checkyourspend.webui.expenditure;

import com.prz.edu.checkyourspend.domain.expenditure.ExpenditureService;
import com.prz.edu.checkyourspend.webui.expenditure.dto.ExpenditureDto;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping(value = "/expenditure")
public class ExpenditureController {

    private ExpenditureService expenditureService;

    public ExpenditureController(ExpenditureService expenditureService){
        this.expenditureService = expenditureService;
    }

    @PostMapping(value = "/save")
    public ResponseEntity addNewExpenditure(@RequestBody ExpenditureDto expenditureDto){
        return ResponseEntity.ok(expenditureService.save(expenditureDto));
    }

    @GetMapping(value = "/getAll")
    public ResponseEntity getAllExpenditure(){
        return ResponseEntity.ok(expenditureService.getAllExpenditureForCurrentUser());
    }
}
