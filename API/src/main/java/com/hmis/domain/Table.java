package com.hmis.domain;

import java.util.ArrayList;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Table {

	private String tableName;
	private ArrayList<String> columnName;
	private ArrayList<String> columnData;
}
