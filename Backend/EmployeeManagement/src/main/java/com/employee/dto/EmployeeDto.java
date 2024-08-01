package com.employee.dto;
import jakarta.validation.constraints.*;
import lombok.*;
import java.time.LocalDate;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class EmployeeDto {

    private int empId;
    @NotEmpty(message = "Field should not be empty")
    @Size(min = 4,message = "Employee name must be at least 4 characters long")
    private String name;

    @NotNull(message = "Designation should not be Empty")
    private String designation;


    @NotNull(message = "Field should not be empty")
    @Pattern(regexp = "^\\d{10}$",message = "Phone Number is Not Correct ")
    private String mobileNo;

    @NotNull
    private LocalDate dob;

    @NotNull
    private String city;

}
