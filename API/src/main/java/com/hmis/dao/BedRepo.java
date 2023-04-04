package com.hmis.dao;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.hmis.domain.Bed;


public interface BedRepo extends MongoRepository<Bed, String> {

	public List<Bed> findByWardId(int wardId);
	
	public Bed findByBedId(String id);
	
	public List<Bed> findByDeptId(int deptId);
	
}
