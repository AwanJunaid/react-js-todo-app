import React,{useState}  from 'react';
import CustomButton from '../login/custom-button';
import FormInput from '../login/form-input.component'
import image from '../login/image/image.png';
import './login.css';

const SignIn =()=> {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("")


    const handleSubmit=(event)=>{
        event.preventDefault();

        setEmail("");
        setPassword("");
    }
        return(
          
            <div className="sign-in">
                  <div className="flex-item-left">
                
                <form onSubmit={handleSubmit}>
                <label>EMAIL ADDRESS</label>
                    <input name="email" type="email"  value={email} onChange={(e)=>setEmail(e.target.value)}
                    placeholder="Email Address" required />
                   
                    <label>PASSWORD</label>

                    <input name="password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} 
                    placeholder='Password' required />
                    
                    
                    <CustomButton type='submit' value="Submit Form">LogIn</CustomButton>
                </form>

            </div>
            <div className="flex-item-right">
            <img  src={image} alt="login image"></img>
            </div>
            </div>
        )
    }

export default SignIn;