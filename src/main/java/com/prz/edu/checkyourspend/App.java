package com.prz.edu.checkyourspend;

import com.prz.edu.checkyourspend.domain.category.model.Category;
import com.prz.edu.checkyourspend.domain.category.repository.CategoryRepository;
import com.prz.edu.checkyourspend.domain.expenditure.model.Expenditure;
import com.prz.edu.checkyourspend.domain.expenditure.repository.ExpenditureRepository;
import com.prz.edu.checkyourspend.domain.user.UserService;
import com.prz.edu.checkyourspend.domain.user.model.User;
import com.prz.edu.checkyourspend.domain.user.repository.UserRepository;
import com.prz.edu.checkyourspend.webui.user.dto.AccountCredentialsDto;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Bean;

import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.Random;

@EntityScan
@SpringBootApplication
public class App {

    public static void main(String[] args) throws Exception {
        SpringApplication.run(App.class, args);
    }

    @Bean
    public CommandLineRunner loadData(UserService userService, CategoryRepository categoryRepository
            , ExpenditureRepository expenditureRepository, UserRepository userRepository) {
        return (args) -> {
            AccountCredentialsDto accountCredentialsDto = new AccountCredentialsDto();
            accountCredentialsDto.setUsername("rad");
            accountCredentialsDto.setPassword("asd");
            accountCredentialsDto.setRepeatedPassword("asd");

            userService.addUser(accountCredentialsDto);

            User user = userRepository.findByLogin("rad");

            for (int i = 0; i < 10; i++) {
                Category category = new Category();
                category.setName("Category " + i);
                category.setDescription("Category " + i);
                category.setUser(user);
                categoryRepository.save(category);
            }

            Random random = new Random();
            List<Category> categories = categoryRepository.findByUserId(user.getId());
            Calendar calendar = Calendar.getInstance();
            for (int i = 0; i < 100; i++) {
                Expenditure expenditure = new Expenditure();
                expenditure.setUser(user);
                expenditure.setCategory(categories.get(random.nextInt(categories.size())));
                expenditure.setDescription("Expenditure " + i);
                calendar.clear();
                calendar.setTime(new Date());
                calendar.add(Calendar.DATE, -i);
                expenditure.setDate(calendar.getTime());
                expenditure.setValue(random.nextDouble() * 100);
                expenditureRepository.save(expenditure);
            }
        };
    }
}
