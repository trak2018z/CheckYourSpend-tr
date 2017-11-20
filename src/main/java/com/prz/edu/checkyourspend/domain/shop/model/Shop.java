package com.prz.edu.checkyourspend.domain.shop.model;

import com.prz.edu.checkyourspend.domain.address.model.Address;
import lombok.Data;

import javax.persistence.*;

@Data
@Entity
public class Shop {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name;

    @ManyToOne
    private Address address;
}
