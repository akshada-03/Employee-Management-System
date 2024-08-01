package com.employee.exception;


import com.employee.structure.ApiResponse;
import jakarta.validation.UnexpectedTypeException;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.validation.FieldError;
import org.springframework.web.HttpRequestMethodNotSupportedException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.method.annotation.MethodArgumentTypeMismatchException;
import org.springframework.web.servlet.resource.NoResourceFoundException;

import java.util.HashMap;
import java.util.Map;

@RestControllerAdvice
public class GlobalExceptionHandler
{

    @ExceptionHandler(NotFoundException.class)
    public ResponseEntity<ApiResponse> NotFoundHandler(NotFoundException ex){

       // String message = ex.getMessage();
        ApiResponse apiResponse = new ApiResponse(ex.getMessage(),false);

        return new ResponseEntity<>(apiResponse, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(MissingParameterException.class)
    public ResponseEntity<ApiResponse> missingParameterException(MissingParameterException ex){

        // String message = ex.getMessage();
        ApiResponse apiResponse = new ApiResponse(ex.getMessage(),false);

        return new ResponseEntity<>(apiResponse, HttpStatus.NOT_FOUND);
    }


    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<Map<String,String>> handleMethodArgNotValidException(MethodArgumentNotValidException ex){

        Map<String,String> response= new HashMap<>();

        ex.getBindingResult().getAllErrors().forEach((error) ->{
                String fieldName = ((FieldError)error).getField();
                String messege = error.getDefaultMessage();
                response.put(fieldName,messege);
        });

        return new ResponseEntity<>(response,HttpStatus.METHOD_NOT_ALLOWED);


    }

    @ExceptionHandler({UnexpectedTypeException.class})
    public ResponseEntity<String> unexpectedTypeException(UnexpectedTypeException ex){

        return new ResponseEntity<>("Enter The Correct Format",HttpStatus.BAD_REQUEST);

    }


    @ExceptionHandler({MethodArgumentTypeMismatchException.class})
    public ResponseEntity<String> methodArgumentTypeMismatchException(MethodArgumentTypeMismatchException ex){

        return new ResponseEntity<>("Enter The Correct Format",HttpStatus.BAD_REQUEST);

    }

    @ExceptionHandler({NoResourceFoundException.class})
    public ResponseEntity<String> unexpectedTypeException(NoResourceFoundException ex){

        return new ResponseEntity<>("Enter The Correct Url",HttpStatus.BAD_REQUEST);

    }

    @ExceptionHandler({HttpRequestMethodNotSupportedException.class})
    public ResponseEntity<String> httpRequestMethodNotSupportedException(HttpRequestMethodNotSupportedException ex){

        return new ResponseEntity<>("Enter The Correct URL",HttpStatus.BAD_REQUEST);

    }
    @ExceptionHandler({HttpMessageNotReadableException.class})
    public ResponseEntity<String> httpMessageNotReadableException(HttpMessageNotReadableException ex){

        return new ResponseEntity<>("Pass the Proper Body",HttpStatus.BAD_REQUEST);

    }
    @ExceptionHandler(NotSavedException.class)
    public ResponseEntity<ApiResponse> entityNotSavedHandler(NotSavedException ex){

        ApiResponse apiResponse = new ApiResponse(ex.getMessage(),false);

        return new ResponseEntity<>(apiResponse, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(DataIntegrityViolationException.class)
    public ResponseEntity<String> dataIntegrityViolationException(DataIntegrityViolationException ex){

        return new ResponseEntity<>("Entered Mobile Number Is Already Registered",HttpStatus.BAD_REQUEST);

    }




}
