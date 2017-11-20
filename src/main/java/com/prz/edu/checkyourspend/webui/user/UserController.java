package com.prz.edu.checkyourspend.webui.user;

import com.prz.edu.checkyourspend.domain.user.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class UserController {

    @Autowired
    UserService userService;
    @GetMapping
    ResponseEntity getUsers(){
        return ResponseEntity.ok(userService.getAll());
    }
}
