package com.bankapp.app.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


@Entity
@Table(name = "tbl_account")
public class account_m {
	@Id
	@GeneratedValue(strategy =  GenerationType.SEQUENCE)
	@Column(name = "acc_no",nullable = false)
	private int acc_no;
	@Column(name = "user_id",nullable = false)
	private String user_id;
	@Column(name = "customer_id",nullable = false)
	private int customer_id;
	@Column(name = "log_pass",nullable = false)
	private String log_pass;
	@Column(name = "trans_pass",nullable = false)
	private String trans_pass;
	public int getAcc_no() {
		return acc_no;
	}
	public void setAcc_no(int acc_no) {
		this.acc_no = acc_no;
	}
	public String getUser_id() {
		return user_id;
	}
	public void setUser_id(String user_id) {
		this.user_id = user_id;
	}
	public int getCustomer_id() {
		return customer_id;
	}
	public void setCustomer_id(int customer_id) {
		this.customer_id = customer_id;
	}
	public String getLog_pass() {
		return log_pass;
	}
	public void setLog_pass(String log_pass) {
		this.log_pass = log_pass;
	}
	public String getTrans_pass() {
		return trans_pass;
	}
	public void setTrans_pass(String trans_pass) {
		this.trans_pass = trans_pass;
	}
	

}