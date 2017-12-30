package com.prz.edu.checkyourspend.domain.user;

import com.prz.edu.checkyourspend.core.authentication.UserDetailsServiceImpl;
import com.prz.edu.checkyourspend.core.authentication.model.AccountCredentials;
import com.prz.edu.checkyourspend.core.authentication.model.AccountCredentialsRepository;
import com.prz.edu.checkyourspend.domain.user.model.User;
import com.prz.edu.checkyourspend.domain.user.repository.UserRepository;
import com.prz.edu.checkyourspend.webui.user.dto.AccountCredentialsDto;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    private UserRepository userRepository;

    private AccountCredentialsRepository accountCredentialsRepository;

    private BCryptPasswordEncoder bCryptPasswordEncoder;

    private UserDetailsServiceImpl userDetailsService;

    public UserService(UserRepository userRepository, AccountCredentialsRepository accountCredentialsRepository, BCryptPasswordEncoder bCryptPasswordEncoder, UserDetailsServiceImpl userDetailsService) {
        this.userRepository = userRepository;
        this.accountCredentialsRepository = accountCredentialsRepository;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
        this.userDetailsService = userDetailsService;
    }

    public List<User> getAll() {
        return userRepository.findAll();
    }

    public Boolean addUser(AccountCredentialsDto accountCredentialsDto) {
        if (accountCredentialsDto != null && accountCredentialsDto.getUsername() != null && accountCredentialsDto.getPassword() != null
                && accountCredentialsDto.getRepeatedPassword() != null && accountCredentialsDto.getPassword().equals(accountCredentialsDto.getRepeatedPassword())
                && accountCredentialsRepository.findByUsername(accountCredentialsDto.getUsername()) == null) {

            User user = new User();
            user.setLogin(accountCredentialsDto.getUsername());
            user = userRepository.save(user);

            AccountCredentials accountCredentials = new AccountCredentials();
            accountCredentials.setUser(user);
            accountCredentials.setUsername(accountCredentialsDto.getUsername());
            accountCredentials.setPassword(bCryptPasswordEncoder.encode(accountCredentialsDto.getPassword()));
            accountCredentialsRepository.save(accountCredentials);
            return true;
        }

        return false;
    }

    public User getCurrentUser() {
        return userRepository.findByLogin(userDetailsService.getUsernameFromToken());
    }
}
