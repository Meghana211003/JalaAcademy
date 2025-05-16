package com.example.magnus.controller;

import com.example.magnus.model.MoreMenuItem;
import com.example.magnus.repository.MoreMenuRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/moremenu")
@CrossOrigin(origins = "*")
public class MoreMenuController {

    @Autowired
    private MoreMenuRepository repository;

    @GetMapping
    public List<MoreMenuItem> getAll() {
        return repository.findAll();
    }

    @PostMapping
    public MoreMenuItem create(@RequestBody MoreMenuItem item) {
        return repository.save(item);
    }

    @PutMapping("/{id}")
    public MoreMenuItem update(@PathVariable Long id, @RequestBody MoreMenuItem item) {
        item.setId(id);
        return repository.save(item);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        repository.deleteById(id);
    }

    @GetMapping("/{id}")
    public MoreMenuItem getById(@PathVariable Long id) {
        return repository.findById(id).orElse(null);
    }
}