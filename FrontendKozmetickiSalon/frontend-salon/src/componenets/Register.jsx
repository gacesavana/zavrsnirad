import {useState, useEffect} from "react";
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import { useUser } from '../UserContext';


function Register() {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate=useNavigate();
    const { user, setUser } = useUser();

    useEffect(() => {
      const loggedInUser = localStorage.getItem("korisnik");
      if (loggedInUser) {
          const foundUser = JSON.parse(loggedInUser);
          setUser(foundUser);
      } else{
        setUser(null);
      }
  }, [setUser]);

    // logout the user
  const handleLogout = () => {
    setUser(null);
    setUsername("");
    setPassword("");
    localStorage.clear();
    navigate('/login');
  };

    async function save(event) {
        event.preventDefault();
        try {
          await axios.post("http://localhost:8080/api/v1/user/save", {
          username: username,
          email: email,
          password: password,
          }).then((res) => 
            {
             console.log(res.data);
             
             if (res.data.status === false) 
             {
               alert(res.data.message);
             } else
             { 
              const userData={
                username: res.data.message
              }
              setUser(userData); // Postavljamo korisnika u kontekst
              localStorage.setItem("korisnik", JSON.stringify(userData));
              navigate('/home'); 
             } 
          }, fail => {
           console.error(fail); // Error!
  });
        } catch (err) {
          alert(err);
        }
      }



      if(user){
        return (
        
        <div>
         
          {user.username} is logged in
          <button onClick={handleLogout}>logout</button>
        </div>
          
        );
       
        
      }else{

    return (
        <div>
        <div class="container mt-4" >
        <div class="card">
                <h1>Registracija</h1>
        
        <form>
            <div class="form-group">
              <label>Korisničko ime</label>
              <input type="text"  class="form-control" id="username" placeholder="Unesi korisničko ime"
              
              value={username}
              onChange={(event) => {
                setUsername(event.target.value);
              }}
              />
            </div>
            <div class="form-group">
              <label>Email</label>
              <input type="email"  class="form-control" id="email" placeholder="Unesi e-mail"
              
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              
              />
     
            </div>
            <div class="form-group">
                <label>Lozinka</label>
                <input type="password"  class="form-control" id="password" placeholder="Unesi lozinku"
                
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
                
                />
              </div>
            <button type="submit" class="btn btn-primary mt-4" onClick={save} >Registriraj se</button>
           
          </form>
        </div>
        </div>
         </div>
    );
              };
  };
  
  export default Register;
  