package com.employee.exception;

public class MissingParameterException extends RuntimeException{

    public MissingParameterException(String s){
        super(s);
    }
}
