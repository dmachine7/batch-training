package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.user_m;
import com.example.demo.repository.user_repository;

@Service
public class user_implementation implements user_service {
	
	@Autowired
	private user_repository login_repo;
	@Override
	public user_m saveLogin(user_m login) {
		
		return login_repo.save(login);
	}
	@Override
	public List<user_m> getAllLogin() {
		
		return login_repo.findAll();
	}
	@Override
	public Optional<user_m> getById(int id) {
		
		return login_repo.findById(id);
	}
	@Override
	public void remove_user(user_m to_be_deleted) {
		login_repo.delete(to_be_deleted);
	}

}
