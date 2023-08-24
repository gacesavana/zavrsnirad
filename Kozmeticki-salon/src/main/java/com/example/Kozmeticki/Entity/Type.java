package com.example.Kozmeticki.Entity;

import jakarta.persistence.*;

import java.time.Duration;

@Entity
@Table(name="type")
public class Type {

    @Id
    @Column(name="type_id", length = 45)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int typeid;

    @Column(name="name", length = 255, unique = true)
    private String name;
    @Column(name = "duration", nullable = false)
    private int duration; // broj minuta
    @Column(name = "price", nullable = false)
    private Integer price;


    public Type(String name, int duration, Integer price) {
        this.name = name;
        this.duration = duration;
        this.price = price;
    }

    public Type() {
    }

    public int getTypeid() {
        return typeid;
    }

    public void setTypeid(int typeid) {
        this.typeid = typeid;
    }

    public String getType_name() {
        return name;
    }

    public void setType_name(String type_name) {
        this.name = type_name;
    }

    public int getDuration() {
        return duration;
    }

    public void setDuration(int duration) {
        this.duration = duration;
    }

    public Integer getPrice() {
        return price;
    }

    public void setPrice(Integer price) {
        this.price = price;
    }

    @Override
    public String toString() {
        return "Type{" +
                "typeid=" + typeid +
                ", type_name='" + name + '\'' +
                ", duration=" + duration +
                ", price=" + price +
                '}';
    }
}


