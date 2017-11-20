package com.prz.edu.checkyourspend.domain.user.model;

import com.prz.edu.checkyourspend.domain.address.model.Address;
import com.prz.edu.checkyourspend.domain.expenditure.model.Expenditure;
import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String login;

    private String firstName;

    private String lastName;

    @OneToMany
    private List<Expenditure> expenditureList;

    @ManyToOne
    private Address address;
}
