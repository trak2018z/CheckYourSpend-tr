package com.prz.edu.checkyourspend.domain.category.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.prz.edu.checkyourspend.domain.user.model.User;
import lombok.Data;

import javax.persistence.*;

@Data
@Entity
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name;

    private String description;

    @JsonIgnore
    @ManyToOne
    private User user;
}
