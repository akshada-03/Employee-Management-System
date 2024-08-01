package com.employee.exception;

public class NotSavedException extends RuntimeException{

    @Override
    public String getMessage() {
        return "Entity Not Saved";
    }
}
