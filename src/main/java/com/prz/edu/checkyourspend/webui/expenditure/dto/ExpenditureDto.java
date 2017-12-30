package com.prz.edu.checkyourspend.webui.expenditure.dto;

import lombok.Data;

import java.util.Date;

@Data
public class ExpenditureDto {

    private Long id;

    private Double value;

    private String category;

    private String description;

    private Date date;
}
