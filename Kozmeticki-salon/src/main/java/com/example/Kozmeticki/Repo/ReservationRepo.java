package com.example.Kozmeticki.Repo;

import com.example.Kozmeticki.Entity.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@EnableJpaRepositories
@Repository
public interface ReservationRepo extends JpaRepository<Reservation, Integer>{

    List<Reservation> findAll();

    Reservation findByUsernameAndStartAndEnd(String username, LocalDateTime start, LocalDateTime end);

}


