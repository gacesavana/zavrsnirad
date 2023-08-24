package com.example.Kozmeticki.Entity;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@Table(name="rezervations")
public class Reservation {

    @Id
    @Column(name="reservation_id", length = 45)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int reservationid;


    @Column(name="user_name", length = 255)
    private String username;
    @Column(name = "start", nullable = false, unique=true)
    private LocalDateTime start;
    @Column(name = "end", nullable = false, unique=true)
    private LocalDateTime end;
    @Column(name = "type", nullable = false)
    private String type;

    public Reservation(String username, LocalDateTime start, LocalDateTime end, String type) {

        this.username = username;
        this.start = start;
        this.end = end;
        this.type= type;
    }

    public Reservation() {
    }

    public int getReservationid() {
        return reservationid;
    }

    public void setReservationid(int reservationid) {
        this.reservationid = reservationid;
    }



    public String getUsername() {
        return username;
    }

    @Override
    public String toString() {
        return "Reservation{" +
                "reservationid=" + reservationid +
                ", username='" + username + '\'' +
                ", start=" + start +
                ", end=" + end +
                ", type="+type +
                '}';
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public LocalDateTime getStart() {
        return start;
    }

    public void setStart(LocalDateTime start) {
        this.start = start;
    }

    public LocalDateTime getEnd() {
        return end;
    }

    public void setEnd(LocalDateTime end) {
        this.end = end;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

}
