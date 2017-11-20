package com.prz.edu.checkyourspend.domain.shop.repository;

import com.prz.edu.checkyourspend.domain.shop.model.Shop;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ShopRepository extends JpaRepository<Shop, Long> {
}
