package com.prz.edu.checkyourspend.domain.category.repository;

import com.prz.edu.checkyourspend.domain.category.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CategoryRepository extends JpaRepository<Category, Long> {
    Category findByName(String name);
    List<Category> findByUserId(Long id);
}
