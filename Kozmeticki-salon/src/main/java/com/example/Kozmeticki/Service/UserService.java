package com.example.Kozmeticki.Service;

import com.example.Kozmeticki.DTO.LoginDTO;
import com.example.Kozmeticki.DTO.UserDTO;
import com.example.Kozmeticki.Entity.Reservation;
import com.example.Kozmeticki.Entity.Type;
import com.example.Kozmeticki.response.Response;

import java.util.List;

public interface UserService {

    Response addUser(UserDTO userDTO);

    Response loginUser(LoginDTO loginDTO);

    String reserve(Reservation reservation);

    List<Reservation> getAllReservations();

    Response deleteReservation(Reservation reservation);

    List<Type> getAllTypes();

    Type getType(String name);

}
