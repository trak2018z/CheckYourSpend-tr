package com.prz.edu.checkyourspend.domain.expenditure.model;

import com.prz.edu.checkyourspend.domain.category.model.Category;
import com.prz.edu.checkyourspend.domain.shop.model.Shop;
import com.prz.edu.checkyourspend.domain.user.model.User;
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
    private Category category;

    private String description;

    private Date date;

    @ManyToOne
    private User user;
}
