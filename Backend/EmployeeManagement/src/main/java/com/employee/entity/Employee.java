package com.employee.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;


@Entity
@Table(name = "Employee_Tb")
@AllArgsConstructor
@NoArgsConstructor
@Data
@Getter
@Setter
public class Employee {

    @Id
    @Column(name = "Employee_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int empId;
    private String name;
    private String designation;
    @Column(unique = true)
    private String mobileNo;
    private LocalDate dob;
    private String city;



}
