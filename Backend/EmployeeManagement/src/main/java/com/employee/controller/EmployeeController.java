package com.employee.controller;

import com.employee.dto.EmployeeDto;
import com.employee.seviceInterface.EmployeeService;
import com.employee.structure.ApiResponse;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
//import for cros connection to react
import org.springframework.web.bind.annotation.CrossOrigin;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class EmployeeController {

    private final EmployeeService employeeService;

    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }


    //Adding Employee
    @PostMapping("/employees")
   public ResponseEntity<EmployeeDto> addEmployee(@Valid  @RequestBody EmployeeDto employeeDto){
        EmployeeDto addEmployeeDto= employeeService.addEmployee(employeeDto);
        return new ResponseEntity<>(addEmployeeDto, HttpStatus.CREATED);
    }


    //Getting Employee by using Employee Id or Designation or MobileNumber  or passing both parameters
    //or for Getting all Employee don't pass any parameters
    @GetMapping("/employees")
    public ResponseEntity<List<EmployeeDto>> getEmployeess(
            @RequestParam(value = "id", required = false) Integer id,
            @RequestParam(value = "designation", required = false) String designation,
           @RequestParam(required = false)  String mobileNumber) {
        List<EmployeeDto> employeeDtoList = employeeService.getEmployeess(id, designation, mobileNumber);
        return ResponseEntity.ok(employeeDtoList);
    }


    //Updating Employee by using Employee Id or Mobile Number  or passing both parameters
    @PutMapping("/employees")
    public  ResponseEntity<EmployeeDto> updateEmployee(@Valid @RequestBody EmployeeDto employeeDto,
                                             @RequestParam(value = "mobileNumber" , required = false) String mobileNumber,
                                             @RequestParam(value = "id" , required = false) Integer id   ){
        EmployeeDto updatedEmployeeDto = employeeService.updateEmployee(employeeDto,id,mobileNumber);
                return ResponseEntity.ok(updatedEmployeeDto);
    }


    //Deleting Employee by using Employee Id or Designation  or passing both parameters
    //or for deleting all Employee dont pass any parameters
    @DeleteMapping("/employees")
    public ResponseEntity<ApiResponse> deleteEmployee(@RequestParam(value = "id",required = false)Integer id,
                                                      @RequestParam(value = "designation" , required = false)String designation){
        employeeService.deleteEmployees(id,designation);
        ApiResponse apiResponse = new ApiResponse("Deleted successfully", true);
        return ResponseEntity.ok(apiResponse);
    }
}
