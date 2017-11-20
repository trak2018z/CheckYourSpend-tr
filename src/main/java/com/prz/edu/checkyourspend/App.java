package com.prz.edu.checkyourspend;

import com.prz.edu.checkyourspend.domain.user.model.User;
import com.prz.edu.checkyourspend.domain.user.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Controller;

@Controller
@EnableAutoConfiguration
@ComponentScan
@EntityScan
public class App {

    public static void main(String[] args) throws Exception {
        SpringApplication.run(App.class, args);
    }

    @Bean
    public CommandLineRunner loadData(UserRepository userRepository){
        return (args) ->{
            User user = new User();
            user.setLogin("rad1317");
            userRepository.save(user);
        };
    }
}
