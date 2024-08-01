package com.employee.seviceInterface;

import com.employee.dto.EmployeeDto;

import java.util.List;

public interface EmployeeService {

     EmployeeDto addEmployee(EmployeeDto employeeDto);

     List<EmployeeDto> getEmployeess(Integer id, String designation, String mobileNumber);

     EmployeeDto updateEmployee(EmployeeDto employeeDto,Integer id ,String mobileNumber);

     void deleteEmployees(Integer id, String designation);

    }
