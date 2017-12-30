package com.prz.edu.checkyourspend.domain.expenditure.repository;

import com.prz.edu.checkyourspend.domain.expenditure.model.Expenditure;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ExpenditureRepository extends JpaRepository<Expenditure, Long> {
    List<Expenditure> findByUserLogin(String username);
}
