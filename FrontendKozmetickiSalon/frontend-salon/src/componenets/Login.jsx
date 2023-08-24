import {  useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useUser } from "../UserContext"; 


function Login() {
    
    
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const {user, setUser}=useUser();

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

    async function login(event) {
        event.preventDefault();
        try {
            await axios.post("http://localhost:8080/api/v1/user/login", {
            username:username,
            password: password,
            }).then((res) => 
            {
              
             console.log(res.data);
             
             if (res.data.status === false) {
               alert(res.data.message);
             } else { 
              const userData={
                username: res.data.message
              }
              setUser(userData);
              localStorage.setItem("korisnik", JSON.stringify(userData));
              navigate('/home'); 
              } 
          }, fail => {
           console.error(fail); // Error!
  });
        }
 
         catch (err) {
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
    
      return(
        <div>
        <div class="container">
        
         <div class="row">
         <div class="col-sm-6">
         <h1>Prijava</h1>
        <form>
    <div class="form-group">
      <label>Korisničko ime</label>
      <input type="username"  class="form-control" id="username" placeholder="Unesi korisničko ime"
      
      value={username}
      onChange={(event) => {
        setUsername(event.target.value);
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
              <button type="submit" class="btn btn-primary" onClick={login} >Prijavi se</button>
          </form>
        </div>
        </div>
        </div>
 </div>
    
      );
 };
 
};
  export default Login;
      