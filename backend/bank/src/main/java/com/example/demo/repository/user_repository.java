package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.user_m;

@Repository
public interface user_repository extends JpaRepository<user_m,Integer>{

}
