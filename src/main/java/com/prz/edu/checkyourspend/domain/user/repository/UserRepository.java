package com.prz.edu.checkyourspend.domain.user.repository;

import com.prz.edu.checkyourspend.domain.user.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

    User findByLogin(String login);
}
