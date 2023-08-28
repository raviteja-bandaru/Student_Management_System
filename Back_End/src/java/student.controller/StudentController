package com.student.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.student.model.Student;
import com.student.service.StudentService;

@RestController
@CrossOrigin(value="http://localhost:3000/")
public class StudentController {
	@Autowired
	private StudentService service;
	
	@PostMapping("/save")
	public Student saveStudent(@RequestBody Student s) {
		Student ss = service.saveStudent(s);
		return ss;
	}
	@GetMapping("/get/{sid}")
	public Student getOneStudent(@PathVariable Integer sid) {
		return service.getOneStudent(sid);
	}
	@GetMapping("/getAll")
	public List<Student> getAllStudents() {
		List<Student> list = service.getAllStudents();
		return list;
	}
	@DeleteMapping("/delete/{sid}")
	public String deleteStudent(@PathVariable Integer sid) {
		service.deleteStudent(sid);
		return "Deleted " + sid +" Student Successfully";
	}
	@PutMapping("/editStudent/{sid}")
	public Student updateStudent(@RequestBody Student std, @PathVariable Integer sid) {
		return service.updateStudent(std, sid);
	}
}
