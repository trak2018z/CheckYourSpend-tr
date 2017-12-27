package com.prz.edu.checkyourspend.webui.user.dto;

import lombok.Data;

@Data
public class AccountCredentialsDto {

    private String username;

    private String password;

    private String repeatedPassword;
}
