package com.prz.edu.checkyourspend.core.authentication;

import com.prz.edu.checkyourspend.core.authentication.model.AccountCredentials;
import com.prz.edu.checkyourspend.core.authentication.model.AccountCredentialsRepository;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collections;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    private AccountCredentialsRepository accountCredentialsRepository;

    public UserDetailsServiceImpl(AccountCredentialsRepository accountCredentialsRepository) {
        this.accountCredentialsRepository = accountCredentialsRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        AccountCredentials accountCredentials = accountCredentialsRepository.findByUsername(username);
        if (accountCredentials == null) {
            throw new UsernameNotFoundException(username);
        }
        return new User(accountCredentials.getUsername(), accountCredentials.getPassword(), Collections.emptyList());
    }

    public String getUsernameFromToken(){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if(authentication != null)
            return authentication.getName();
        return null;
    }
}
