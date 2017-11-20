package com.prz.edu.checkyourspend.domain.expenditure.model;

import com.prz.edu.checkyourspend.domain.shop.model.Shop;
import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Data
@Entity
public class Expenditure {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private Double value;

    @ManyToOne
    private Shop shop;

    private String description;

    private Date date;

    private String transactionType;

    private String currency;

}
