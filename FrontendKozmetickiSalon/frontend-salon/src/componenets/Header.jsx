import { useUser } from '../UserContext';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';



function Header(){
 
  const { user, setUser } = useUser(); 
  const navigate = useNavigate();
   // logout the user
   const handleLogout = () => {
    setUser(null);
    localStorage.clear();
    navigate('/login');
  };
  
  return(
    <div class="header-content">
        
      <h1>Frizerski salon "Angel's"</h1>
      <nav>
        <ul class="menu">
           {/* Prikaz gumba "Rezervacija" samo za prijavljene korisnike */}
          {user && <li><a href="/reservation" id="reservation">Rezervacije</a></li>}
           {/* Prikaz gumba "Prijava" samo za neprijavljene korisnike */}
          {!user && <li><a href="/login" id="reservation">Prijava</a></li>}
          {!user && <li><a href="/register" id="reservation">Registracija</a></li>}
        </ul>
      </nav>
      <div className="logout">
        <div class="centered-content">
          {user ? (
            <li class="user-info">
              <FontAwesomeIcon icon={faUser} className="user-icon" />
              <span class="username">{user.username}</span>
              <button onClick={handleLogout} class="logout-button">Odjavi se</button>
            </li>
          ) : null}  
        </div> 
      </div>
    </div>
          
      
       
  )
};
export default Header;