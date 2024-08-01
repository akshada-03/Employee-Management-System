package com.employee.serviceImplementations;


import com.employee.dto.EmployeeDto;
import com.employee.entity.Employee;
import com.employee.exception.NotFoundException;
import com.employee.exception.NotSavedException;
import com.employee.repository.EmployeeRepository;
import com.employee.seviceInterface.EmployeeService;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.stream.Collectors;

@Service
public class EmployeeServiceImpl implements EmployeeService {


    @Autowired
    private EmployeeRepository employeeRepository;

    @Autowired
    private ModelMapper modelMapper;


    //Adding Employee
    @Override
    public EmployeeDto addEmployee(EmployeeDto employeeDto) {

        // Map DTO to entity
        Employee employee = modelMapper.map(employeeDto,Employee.class);
        Employee saveEmployee = employeeRepository.save(employee);
        if(saveEmployee == null){throw new NotSavedException();}

        // Map saved entity back to DTO
        return modelMapper.map(saveEmployee,EmployeeDto.class);
    }


    //Getting Employee by using Employee Id or Designation or MobileNumber  or passing both parameters
    //or for Getting all Employee dont pass any parameters
    @Override
    public List<EmployeeDto> getEmployeess(Integer id, String designation, String mobileNumber) {

        if(id == null && designation == null && mobileNumber == null){
            List<Employee> employees = employeeRepository.findAll();
        }

        List<Employee> employees = employeeRepository.findEmployees(id, designation, mobileNumber);
        if (employees.isEmpty()){
            throw new NotFoundException("No Such Employee Found.");
        }

        return employees.stream()
                .map(employee -> modelMapper.map(employee, EmployeeDto.class))
                .collect(Collectors.toList());
    }

    //Updating Employee by using Employee Id or Mobile Number  or passing both parameters
    @Override
    public EmployeeDto updateEmployee(EmployeeDto employeeDto,Integer id, String mobileNumber) {
        Employee existingEmployee = employeeRepository.findEmployeeByCriteria(id, mobileNumber);
        if (existingEmployee == null) {
            throw new NotFoundException("Employee Not Found");
        }
        employeeDto.setEmpId(existingEmployee.getEmpId());
        modelMapper.map(employeeDto, existingEmployee);
        employeeRepository.save(existingEmployee);
        return modelMapper.map(existingEmployee, EmployeeDto.class);
     }


    //Deleting Employee by using Employee Id or Designation  or passing both parameters
    //or for deleting all Employee dont pass any parameters
    @Override
    @Transactional
    public void deleteEmployees(Integer id, String designation) {

       List<Employee> exisitingUser = employeeRepository.findEmployees(id,designation,null);

        if (exisitingUser.isEmpty() || employeeRepository.count()==0) {
            throw new NotFoundException("No Such Employee Found.");
        }
        if (id == null && designation == null) {
             employeeRepository.deleteAll();
        } else if (exisitingUser != null) {
            employeeRepository.deleteByParams(id, designation);
        }
    }

}
