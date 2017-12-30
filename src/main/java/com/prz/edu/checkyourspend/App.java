package com.prz.edu.checkyourspend;

import com.prz.edu.checkyourspend.domain.user.UserService;
import com.prz.edu.checkyourspend.domain.user.model.User;
import com.prz.edu.checkyourspend.domain.user.repository.UserRepository;
import com.prz.edu.checkyourspend.webui.user.dto.AccountCredentialsDto;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Bean;

@EntityScan
@SpringBootApplication
public class App {

    public static void main(String[] args) throws Exception {
        SpringApplication.run(App.class, args);
    }

    @Bean
    public CommandLineRunner loadData(UserService userService){
        return (args) ->{
            AccountCredentialsDto accountCredentialsDto = new AccountCredentialsDto();
            accountCredentialsDto.setUsername("rad");
            accountCredentialsDto.setPassword("asd");
            accountCredentialsDto.setRepeatedPassword("asd");

            userService.addUser(accountCredentialsDto);
        };
    }
}
