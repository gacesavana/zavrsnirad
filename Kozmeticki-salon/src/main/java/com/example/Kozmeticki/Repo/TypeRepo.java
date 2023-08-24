package com.example.Kozmeticki.Repo;

import com.example.Kozmeticki.Entity.Reservation;
import com.example.Kozmeticki.Entity.Type;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@EnableJpaRepositories
@Repository
public interface TypeRepo extends JpaRepository<Type, Integer> {
    Type findByName(String name);
}
