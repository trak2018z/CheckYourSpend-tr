package com.prz.edu.checkyourspend.domain.address.repository;

import com.prz.edu.checkyourspend.domain.address.model.Address;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AddressRepository extends JpaRepository<Address, Long> {
}
