package com.student.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.student.exception.UserNotFoundException;
import com.student.model.Student;
import com.student.repo.StudentRepo;

@Service
public class StudentServiceImp implements StudentService {
	
	@Autowired
	private StudentRepo repo;
	
	@Override
	public Student saveStudent(Student s) {
		Student ss = repo.save(s);
		return ss;
	}

	@Override
	public void deleteStudent(Integer sid) {
		if(repo.existsById(sid))
			repo.deleteById(sid);
		else
			throw new UserNotFoundException(sid);
	}

	@Override
	public Student updateStudent(Student std, Integer sid) {
		Student s = repo.findById(sid).orElseThrow(()-> new UserNotFoundException(sid));
		s.setName(std.getName());
		s.setCourse(std.getCourse());
		s.setAddr(std.getAddr());
		s.setPhNo(std.getPhNo());
		return repo.save(s);
	}

	@Override
	public Student getOneStudent(Integer sid) {
		return repo.findById(sid).orElseThrow(()-> new UserNotFoundException(sid));
	}

	@Override
	public List<Student> getAllStudents() {
		List<Student> list = repo.findAll();
		return list;
	}

}
