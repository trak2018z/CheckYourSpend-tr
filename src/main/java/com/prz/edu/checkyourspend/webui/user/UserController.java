package com.prz.edu.checkyourspend.webui.user;

import com.prz.edu.checkyourspend.domain.user.UserService;
import com.prz.edu.checkyourspend.webui.user.dto.AccountCredentialsDto;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/api/user")
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
