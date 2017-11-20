package com.prz.edu.checkyourspend.domain.user;

import com.prz.edu.checkyourspend.domain.user.model.User;
import com.prz.edu.checkyourspend.domain.user.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    public List<User> getAll() {
        return userRepository.findAll();
    }
}
