package com.employee.repository;

import com.employee.entity.Employee;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface EmployeeRepository extends JpaRepository<Employee,Integer> {

    @Query("SELECT e FROM Employee e WHERE " +
            "(:empId IS NULL OR e.empId = :empId) AND " +
            "(:designation IS NULL OR e.designation = :designation) AND " +
            "(:mobileNo IS NULL OR e.mobileNo = :mobileNo)")
    List<Employee> findEmployees(@Param("empId") Integer empId,
                                 @Param("designation") String designation,
                                 @Param("mobileNo") String mobileNo);


    @Query("SELECT e FROM Employee e WHERE "
            + "(:empId IS NULL OR e.empId = :empId) AND "
            + "(:mobileNo IS NULL OR e.mobileNo = :mobileNo)")
    Employee findEmployeeByCriteria(@Param("empId") Integer empId,
                                    @Param("mobileNo") String mobileNo);

 @Modifying
   @Transactional
    @Query("DELETE FROM Employee e WHERE (:empId IS NULL OR e.empId = :empId) AND"+
            " (:designation IS NULL OR e.designation = :designation)")
    void deleteByParams(@Param("empId") Integer empId, @Param("designation") String designation);




}
