package com.hexagon.app.controller;

import com.hexagon.app.model.AuthenticationRequest;
import com.hexagon.app.model.AuthenticationResponse;
import com.hexagon.app.service.JwtTokenService;
import com.hexagon.app.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthenticationController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserService userService;


    @PostMapping("/authenticate")
    public AuthenticationResponse authorize(@RequestBody AuthenticationRequest request) throws Exception {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword()));
        } catch (Exception e) {
            throw new Exception("Incorrect Username/Password");
        }
        UserDetails userDetails = userService.loadUserByUsername(request.getUsername());
        return new AuthenticationResponse(userService.getUserToken(userDetails));
    }
}
