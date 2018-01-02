package com.prz.edu.checkyourspend.domain.category;

import com.prz.edu.checkyourspend.domain.category.model.Category;
import com.prz.edu.checkyourspend.domain.category.repository.CategoryRepository;
import com.prz.edu.checkyourspend.domain.user.UserService;
import com.prz.edu.checkyourspend.domain.user.model.User;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService {

    private CategoryRepository categoryRepository;

    private UserService userService;

    public CategoryService(CategoryRepository categoryRepository, UserService userService) {
        this.categoryRepository = categoryRepository;
        this.userService = userService;
    }

    public Category save(Category category) {
        User user = userService.getCurrentUser();
        category.setUser(user);
        return categoryRepository.save(category);
    }

    public List<Category> getAllCategoriesForCurrentUser() {
        return categoryRepository.findByUserId(userService.getCurrentUser().getId());
    }
}
