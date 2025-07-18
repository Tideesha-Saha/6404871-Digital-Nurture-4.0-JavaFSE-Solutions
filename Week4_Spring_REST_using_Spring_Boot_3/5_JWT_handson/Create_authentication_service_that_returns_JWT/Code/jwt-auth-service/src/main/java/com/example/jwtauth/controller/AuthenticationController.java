package com.example.jwtauth.controller;

import com.example.jwtauth.model.TokenResponse;
import com.example.jwtauth.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import jakarta.servlet.http.HttpServletRequest;
import java.util.Base64;

@RestController
public class AuthenticationController {
    
    @Autowired
    private AuthenticationManager authenticationManager;
    
    @Autowired
    private JwtUtil jwtUtil;
    
    @PostMapping("/authenticate")
    public ResponseEntity<?> authenticate(HttpServletRequest request) {
        try {
            // Step 2: Read Authorization header and decode username and password
            String authHeader = request.getHeader("Authorization");
            
            if (authHeader == null || !authHeader.startsWith("Basic ")) {
                return ResponseEntity.badRequest().body("{\"error\":\"Missing or invalid Authorization header\"}");
            }
            
            // Decode Basic Authentication
            String base64Credentials = authHeader.substring("Basic ".length());
            String credentials = new String(Base64.getDecoder().decode(base64Credentials));
            String[] parts = credentials.split(":", 2);
            
            if (parts.length != 2) {
                return ResponseEntity.badRequest().body("{\"error\":\"Invalid credentials format\"}");
            }
            
            String username = parts[0];
            String password = parts[1];
            
            // Authenticate user
            Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(username, password)
            );
            
            // Step 3: Generate token based on the authenticated user
            String token = jwtUtil.generateToken(username);
            
            return ResponseEntity.ok(new TokenResponse(token));
            
        } catch (BadCredentialsException e) {
            return ResponseEntity.badRequest().body("{\"error\":\"Invalid credentials\"}");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("{\"error\":\"Authentication failed: " + e.getMessage() + "\"}");
        }
    }
}

