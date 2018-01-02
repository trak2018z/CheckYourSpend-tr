package com.prz.edu.checkyourspend.domain.expenditure.repository;

import com.prz.edu.checkyourspend.domain.expenditure.model.Expenditure;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ExpenditureRepository extends JpaRepository<Expenditure, Long> {
    List<Expenditure> findByUserId(Long id);

    Page<Expenditure> findByUserId(Long id, Pageable pageable);
}
