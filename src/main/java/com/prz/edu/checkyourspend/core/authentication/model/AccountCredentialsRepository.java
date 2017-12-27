package com.prz.edu.checkyourspend.core.authentication.model;

import org.springframework.data.jpa.repository.JpaRepository;

public interface AccountCredentialsRepository extends JpaRepository<AccountCredentials, Long> {

    AccountCredentials findByUsername(String username);
}
