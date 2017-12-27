package com.prz.edu.checkyourspend.core.authentication.model;

import com.prz.edu.checkyourspend.domain.user.model.User;
import lombok.Data;

import javax.persistence.*;

@Data
@Entity
public class AccountCredentials {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String username;

    private String password;

    @OneToOne
    private User user;
}
