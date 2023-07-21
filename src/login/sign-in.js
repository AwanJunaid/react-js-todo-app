import React,{useState}  from 'react';
import CustomButton from './custom-button';
import FormInput from './form-input.component';
import image from './image/image.png';
import './sign-in.css';

const SignIn =()=>{
   
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    handleSubmit=event=>{
        event.preventDefault();

        setEmail(email="");
        setPassword(password="");

    }

    handleChange=event=>{
        const {value,name}=event.target;

        setEmail({[name]:value})

    }
        return(
          
            <div className="sign-in">
                  <div className="flex-item-left">
                
                <form onSubmit={this.handleSubmit}>
                <label>EMAIL ADDRESS</label>
                    <FormInput name="email" type="email" handleChange={handleChange} value={email}
                    placeholder="Email Address" required />
                   
                    <label>PASSWORD</label>

                    <FormInput name="password" type="password" value={password} handleChange={handleChange} 
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

export default SignIn ;