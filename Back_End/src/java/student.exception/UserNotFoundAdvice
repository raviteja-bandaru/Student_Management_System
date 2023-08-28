package com.student.exception;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

@ControllerAdvice
public class UserNotFoundAdvice {
	
	@ResponseBody
	@ExceptionHandler(UserNotFoundException.class)
	@ResponseStatus(HttpStatus.NOT_FOUND)
	public Map<String, String> exceptionHandler(UserNotFoundException except){
		Map <String, String> errorMap = new HashMap<>();
		errorMap.put("Got an Error", except.getMessage());
		return errorMap;
	}
}
