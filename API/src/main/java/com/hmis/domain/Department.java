package com.hmis.domain;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document
public class Department {
	
	@Transient
	public static final String  idgen="deptid_seq";

	@Id
	private int deptId;
	private String deptName;
	
	@Transient
	private List<Unit> units;
}
