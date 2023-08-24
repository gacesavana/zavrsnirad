package com.example.Kozmeticki.UserController;

import com.example.Kozmeticki.DTO.LoginDTO;
import com.example.Kozmeticki.DTO.UserDTO;
import com.example.Kozmeticki.Entity.Reservation;
import com.example.Kozmeticki.Entity.Type;
import com.example.Kozmeticki.Service.UserService;
import com.example.Kozmeticki.response.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/v1/user")

public class UserController {

    @Autowired
    private UserService userService;
    @PostMapping(path = "/save")
    public ResponseEntity<?> saveUser(@RequestBody UserDTO userDTO)
    {
        Response response = userService.addUser(userDTO);
        return ResponseEntity.ok(response);
    }

    @PostMapping(path = "/login")
    public ResponseEntity<?> loginUser(@RequestBody LoginDTO loginDTO)
    {
        Response response = userService.loginUser(loginDTO);
        return ResponseEntity.ok(response);
    }

    @PostMapping(path = "/reserve")
    public ResponseEntity<?> reserve(@RequestBody Reservation reservation)
    {
        String rezultat = userService.reserve(reservation);
        return  ResponseEntity.ok(rezultat);
    }


    @GetMapping(path = "/reserve")
    public List<Reservation> getAllReservations()
    {
        List<Reservation> reservations = userService.getAllReservations();
        return reservations;
    }

    @PostMapping(path= "/delete")
    public ResponseEntity<?> deleteReservation(@RequestBody Reservation reservation)
    {
        Response response = userService.deleteReservation(reservation);
        return ResponseEntity.ok(response);
    }

    @GetMapping(path="/types")
    public List<Type> getAllTypes()
    {
        List<Type> types=userService.getAllTypes();
        return types;
    }

    @GetMapping(path="/type")
    public Type getType(@RequestParam("name") String name)
    {
        Type type = userService.getType(name);
        return type;
    }


}
