package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.user_m;
import com.example.demo.service.user_service;

@RestController
@RequestMapping("/api/user")
public class user_controller {
	@Autowired
	private user_service user_service_provider;
	//get mappings start
	@GetMapping("/testing")
	public String test() {
		return "test successful";
	}
	@GetMapping("/getAll")
	public List<user_m> getAllLogin() {
		return user_service_provider.getAllLogin();
	}
	@GetMapping("/{id}")
	public Optional<user_m> getById(@PathVariable Integer id ){
		return user_service_provider.getById(id);
	}
	//get mappings end
	//post mappings start
	@PostMapping("/sendData")
	public String getData(@Validated @RequestBody user_m log_user){
		user_service_provider.saveLogin(log_user);
		return "Added Successfully";		
	}
	//post mappings end
	//update/put mappings start
	@PutMapping("/update/{id}")
	public ResponseEntity<user_m> update_user(@PathVariable int id, @RequestBody user_m user_details){
		user_m find_user = user_service_provider.getById(id).orElseThrow();
		find_user.setName(user_details.getName());
		find_user.setAddress(user_details.getAddress());
		user_m updated_user = user_service_provider.saveLogin(find_user);
		return ResponseEntity.ok(updated_user);
	}
	//update/put mappings end
	//delete mappings start
	@DeleteMapping("/remove/{id}")
	public String delete_user(@PathVariable int id){
		user_m find_user = user_service_provider.getById(id).orElseThrow();
		user_service_provider.remove_user(find_user);
		return "user deleted";
	}
	//delete mappings end
	
}






