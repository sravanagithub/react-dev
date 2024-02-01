import { useState } from "react"
import { Link,useNavigate } from 'react-router-dom'
import './Login.css'


export default function Login(){

  const navigate = useNavigate()
  const[email, setEmail]= useState('')
  const[password, setPassword]=useState('')
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
   
      try {
        const response = await fetch('https://reqres.in/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });
  
        if (!response.ok) {
        setError('Login failed');
        }
  if(response.ok){
        console.log('Login successful');
        // Redirect to Dashboard upon successful login
        alert("login successful")
       navigate("/dashboard")
  }
      } catch (error) {
        console.error('Login failed:', error);
        setError('Invalid email or password');
      }
    };
  

    return(
        <>
         <div className='container-fluid  main'>
           <div className='container minimain'>
            <div className='row'>
                <div className='col-lg-12 col-md-12 col-sm-12'>
                    <div className='card'>
                    <div class="card-body p-5 text-center">
                      <form  onSubmit={handleLogin}> 
            <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
              <p class=" mb-5">Please enter your login and password!</p>
              <div class="form-outline  mb-2 text-start ">
              <label class="form-label ms-2" for="typeEmailX">Email</label>
                <input type="email" id="typeEmailX" value={email} onChange={(e)=>setEmail(e.target.value)} class="form-control form-control-lg" />
               
              </div>
              <div class="form-outline  mb-4 text-start ">
              <label class="form-label ms-2" for="typePsswrd">Password</label>
                <input type="password" id="typePsswrd" value={password} onChange={(e)=>setPassword(e.target.value)} class="form-control form-control-lg" />
                </div>
                <button class="btn btn-secondary btn-lg px-5" style={{width:"100%"}} type="submit">Login</button>
{error}
               
            </form>
            </div>
            </div>
            </div>
            </div>
           </div>

        </div>
      </>
    )
}