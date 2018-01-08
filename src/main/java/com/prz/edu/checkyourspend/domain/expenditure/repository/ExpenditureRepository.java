package com.prz.edu.checkyourspend.domain.expenditure.repository;

import com.prz.edu.checkyourspend.domain.expenditure.model.Expenditure;
import com.prz.edu.checkyourspend.webui.expenditure.dto.ExpenditureChart;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Date;
import java.util.List;

public interface ExpenditureRepository extends JpaRepository<Expenditure, Long> {
    List<Expenditure> findByUserId(Long id);

    Page<Expenditure> findByUserId(Long id, Pageable pageable);

    @Query(value = "select new com.prz.edu.checkyourspend.webui.expenditure.dto.ExpenditureChart(e.category.name, sum(e.value)) from Expenditure e where e.user.id = ?1 group by e.category")
    List<ExpenditureChart> findAllAndGroupByCategory(Long id);

    List<Expenditure> findTop10ByUserIdOrderByDateDesc(Long id);

    List<Expenditure> findTop10ByUserIdAndCategoryIdOrderByDateDesc(Long id, Long categoryId);

    List<Expenditure> findByUserIdAndDateGreaterThanOrderByDateDesc(Long id, Date date);

    List<Expenditure> findByUserIdAndCategoryIdAndDateGreaterThanOrderByDateDesc(Long id, Long categoryId, Date date);
}
