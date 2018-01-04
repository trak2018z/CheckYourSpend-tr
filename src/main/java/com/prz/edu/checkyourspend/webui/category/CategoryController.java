package com.prz.edu.checkyourspend.webui.category;

import com.prz.edu.checkyourspend.domain.category.CategoryService;
import com.prz.edu.checkyourspend.domain.category.model.Category;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping(value = "/api/category")
public class CategoryController {

    private CategoryService categoryService;

    public CategoryController(CategoryService categoryService){
        this.categoryService = categoryService;
    }

    @PostMapping(value = "/save")
    public ResponseEntity save(@RequestBody Category category){
        return ResponseEntity.ok(categoryService.save(category));
    }

    @GetMapping(value = "/getAllCategories")
    public ResponseEntity getAllCategoriesForCurrentUser(){
        return ResponseEntity.ok(categoryService.getAllCategoriesForCurrentUser());
    }
}
