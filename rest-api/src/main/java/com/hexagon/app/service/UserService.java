package com.hexagon.app.service;

import com.hexagon.app.model.User;
import com.hexagon.app.repository.IEntityRepository;
import com.hexagon.app.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collection;

@Service
public class UserService extends IEntityService<User> implements UserDetailsService {

    @Autowired
    private UserRepository repository;

    @Autowired
    private JwtTokenService jwtTokenService;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = repository.findByUsername(username);
        if(user==null) throw new UsernameNotFoundException("User Not found for username:"+username);
        return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(),new ArrayList<>());
    }

    public User findByUsername(String username){
        return repository.findByUsername(username);
    }

    @Override
    public IEntityRepository<User> getRepository() {
        return repository;
    }

    public String getUserToken(UserDetails userDetails) {
    return jwtTokenService.generateToken(userDetails);
    }
}
