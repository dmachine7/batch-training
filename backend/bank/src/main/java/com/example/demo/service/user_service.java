package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import com.example.demo.model.user_m;

public interface user_service {
	public user_m saveLogin(user_m login);
	public List<user_m> getAllLogin();
	public Optional<user_m> getById(int id);
	public void remove_user(user_m user);
	//public String insertData(login_m user_data);
}
