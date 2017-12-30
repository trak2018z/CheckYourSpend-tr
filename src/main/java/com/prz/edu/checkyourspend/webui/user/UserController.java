package com.prz.edu.checkyourspend.webui.user;

import com.prz.edu.checkyourspend.core.authentication.model.AccountCredentials;
import com.prz.edu.checkyourspend.domain.user.UserService;
import com.prz.edu.checkyourspend.webui.user.dto.AccountCredentialsDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping(value = "/user")
public class UserController {

    UserService userService;

    public UserController(UserService userService){
        this.userService = userService;
    }

    @GetMapping
    ResponseEntity getUsers(){
        return ResponseEntity.ok(userService.getAll());
    }


    @PostMapping(value = "/sign-up")
    ResponseEntity signUp(@RequestBody AccountCredentialsDto accountCredentialsDto){
        return ResponseEntity.ok(userService.addUser(accountCredentialsDto));
    }

}
