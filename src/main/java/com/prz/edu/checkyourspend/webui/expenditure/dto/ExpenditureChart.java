package com.prz.edu.checkyourspend.webui.expenditure.dto;

import lombok.Data;

@Data
public class ExpenditureChart {

    private String name;
    private Double value;

    public ExpenditureChart(String name, Double value) {
        this.name = name;
        this.value = value;
    }


}
