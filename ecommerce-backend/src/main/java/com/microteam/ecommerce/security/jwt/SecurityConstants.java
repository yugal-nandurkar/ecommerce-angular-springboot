package com.microteam.ecommerce.security.jwt;

public class SecurityConstants {
    public static final String SECRET = "YourSecretKey";
    public static final long EXPIRATION_TIME = 864_000_000; // 10 days
    public static final String TOKEN_PREFIX = "Bearer ";
    public static final String HEADER_STRING = "Authorization";
}
