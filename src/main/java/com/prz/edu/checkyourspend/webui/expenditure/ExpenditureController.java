package com.prz.edu.checkyourspend.webui.expenditure;

import com.prz.edu.checkyourspend.domain.expenditure.ExpenditureService;
import com.prz.edu.checkyourspend.webui.expenditure.dto.ExpenditureDto;
import com.prz.edu.checkyourspend.webui.expenditure.model.ChartGroupBy;
import com.prz.edu.checkyourspend.webui.expenditure.model.ChartRange;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping(value = "/api/expenditure")
public class ExpenditureController {

    private ExpenditureService expenditureService;

    public ExpenditureController(ExpenditureService expenditureService) {
        this.expenditureService = expenditureService;
    }

    @PostMapping(value = "/save")
    public ResponseEntity addNewExpenditure(@RequestBody ExpenditureDto expenditureDto) {
        return ResponseEntity.ok(expenditureService.save(expenditureDto));
    }

    @GetMapping(value = "/getAll")
    public ResponseEntity getAllExpenditure() {
        return ResponseEntity.ok(expenditureService.getAllExpenditureForCurrentUser());
    }

    @GetMapping(value = "/get", params = {"page", "pageSize"})
    public ResponseEntity getExpenditure(@RequestParam Long page, @RequestParam Long pageSize) {
        return ResponseEntity.ok(expenditureService.getExpenditureForCurrentUser(page, pageSize));
    }

    @GetMapping(value = "/get/chart", params = {"groupBy", "range"})
    public ResponseEntity getExpenditureForChart(@RequestParam(value = "groupBy") ChartGroupBy chartGroupBy, @RequestParam(value = "range") ChartRange chartRange) {
        switch (chartGroupBy){
            case CATEGORY: return ResponseEntity.ok(expenditureService.getExpenditureForChartGroupByCategory(chartRange));
            case EXPENDITURE: return ResponseEntity.ok(expenditureService.getExpenditureForChartGroupByExpenditure(chartRange));
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Group not found");
    }
}
