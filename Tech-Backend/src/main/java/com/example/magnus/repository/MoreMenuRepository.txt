package com.example.magnus.repository;

import com.example.magnus.model.MoreMenuItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MoreMenuRepository extends JpaRepository<MoreMenuItem, Long> {
}