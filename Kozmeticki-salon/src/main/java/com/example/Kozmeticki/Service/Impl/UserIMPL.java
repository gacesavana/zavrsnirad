package com.example.Kozmeticki.Service.Impl;

import com.example.Kozmeticki.DTO.LoginDTO;
import com.example.Kozmeticki.DTO.UserDTO;
import com.example.Kozmeticki.Entity.Reservation;
import com.example.Kozmeticki.Entity.Type;
import com.example.Kozmeticki.Entity.User;
import com.example.Kozmeticki.Repo.ReservationRepo;
import com.example.Kozmeticki.Repo.TypeRepo;
import com.example.Kozmeticki.Repo.UserRepo;
import com.example.Kozmeticki.Service.UserService;
import com.example.Kozmeticki.response.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class UserIMPL implements UserService {

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private ReservationRepo reservationRepo;

    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private TypeRepo typeRepo;


    @Override
    public Response addUser(UserDTO userDTO) {
        String password = userDTO.getPassword();

        if (password.length() < 8) {
            return new Response("Lozinka mora biti dugačka barem 8 znakova.", false);
        }
        User user = new User(
                userDTO.getUsername(),
                userDTO.getEmail(),
                this.passwordEncoder.encode(userDTO.getPassword())
        );
        try{
            userRepo.save(user);
        }
        catch(Exception e){
            return new Response("Korisnik već postoji", false);
        }
        return new Response("" + user.getUsername(), true);
    }

    @Override
    public Response loginUser(LoginDTO loginDTO) {
        String msg = "";
        User user1 = userRepo.findByUsername(loginDTO.getUsername());
        if(user1 == null){
            return new Response("Korisnik ne postoji", false);
        }
        else{
            String password = loginDTO.getPassword();
            String encodedPassword = user1.getPassword();
            Boolean isPwdRight = passwordEncoder.matches(password, encodedPassword);
            if (isPwdRight) {
                return new Response("" + user1.getUsername(), true);
            }
            else {
                return new Response("Kriva lozinka", false);
            }
        }
    }

    @Override
    public String reserve(Reservation reservation) {

        if (!isValidReservation(reservation)) {
            return "Rezervacija nije valjana. Provjerite unesene podatke.";
        }

        if (!isAvailable(reservation)) {
            return "Termin je već rezerviran. Molimo odaberite drugi termin.";
        }

        // Spremi rezervaciju u bazu podataka
        reservationRepo.save(reservation);

        return "Uspješno ste rezervirali termin!";
    }

    private boolean isValidReservation(Reservation reservation) {
        LocalDateTime currentDateTime = LocalDateTime.now();
        LocalDateTime reservationDateTime = reservation.getStart();
        if (reservationDateTime.isBefore(currentDateTime)) {
            return false;
        }
        String username = reservation.getUsername();
        if (username == null || username.isEmpty()) {
            return false;
        }
        return true;
    }
    //TODO: PROVJERA USERNAME-A

    private boolean isAvailable(Reservation reservation) {
        LocalDateTime start = reservation.getStart();
        LocalDateTime end = reservation.getEnd();

        // Dohvati sve postojeće rezervacije koje se preklapaju s novom rezervacijom
        List<Reservation> existingReservations = reservationRepo.findAll();

        for(Reservation r: existingReservations){
            LocalDateTime e_start = r.getStart();
            LocalDateTime e_end = r.getEnd();
            if((e_start.isAfter(start) && e_start.isBefore(end)) || (e_end.isAfter(start) && e_end.isBefore(end)) ||  e_start.isEqual(start) || e_end.isEqual(end)){
                return false;
            }
        }
        return true;


    }



    @Override
    public List<Reservation> getAllReservations() {

        return reservationRepo.findAll();
    }

    @Override
    public Response deleteReservation(Reservation reservation) {
        Reservation resInDatabase = reservationRepo.findByUsernameAndStartAndEnd(reservation.getUsername(), reservation.getStart(), reservation.getEnd());
        try{
            reservationRepo.delete(resInDatabase);
            return new Response("Uspješno brisanje", true);
        }
        catch (Exception e){
            return new Response("Neuspješno brisanje", false);
        }
    }

    @Override
    public List<Type> getAllTypes() {
        return typeRepo.findAll();
    }

    @Override
    public Type getType(String name) {
        Type type = typeRepo.findByName(name);
        if(type==null){
            return null;
        }
        return type;

    }
}
