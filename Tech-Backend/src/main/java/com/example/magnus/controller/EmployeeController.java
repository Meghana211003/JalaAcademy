package com.example.magnus.controller;

import com.example.magnus.model.Employee;
import com.example.magnus.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/employees")
@CrossOrigin(origins = "*")
public class EmployeeController {

    @Autowired
    private EmployeeRepository repository;

    @GetMapping
    public List<Employee> getAll() {
        return repository.findAll();
    }

    @PostMapping
    public Employee create(@RequestBody Employee emp) {
        return repository.save(emp);
    }

    @PutMapping("/{id}")
    public Employee update(@PathVariable Long id, @RequestBody Employee emp) {
        emp.setId(id);
        return repository.save(emp);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        repository.deleteById(id);
    }

    @GetMapping("/{id}")
    public Employee getById(@PathVariable Long id) {
        return repository.findById(id).orElse(null);
    }
}