import React, { useState } from "react";
import "./CSS/loginsignup.css";

const LoginSignup = () => {
    const [state, setState] = useState("Login");
    const [formData, setFormData] = useState({
        name: "",
        password: "",
        email: ""
    })

    const changeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const login = async () => {
        console.log("login fuction excuted", formData);

        let responseDate;
        await fetch('http://localhost:4000/login', {
            method: 'POST',
            headers: {
                Accept: 'application/form-data',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        }).then((response) => response.json()).then((data) => responseDate = data)

        if (responseDate.success) {
            localStorage.setItem('auth-token', responseDate.token);
            window.location.replace("/");
        }
        else {
            alert(responseDate.errors)
        }
    }

    const signup = async () => {
        console.log("sign up fuction excuted", formData);
        if (formData.password.length < 8 || formData.password.length > 20) {
            alert("Password should contain 8 - 20 characters");
            return;
        } else {
            let responseDate;
            await fetch('http://localhost:4000/signup', {
                method: 'POST',
                headers: {
                    Accept: 'application/form-data',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            }).then((response) => response.json()).then((data) => responseDate = data)

            if (responseDate.success) {
                localStorage.setItem('auth-token', responseDate.token);
                window.location.replace("/");
            }
            else {
                alert(responseDate.errors)
            }
        }
    }

    return (
        <div className="signup">
            <div className="signup-container">
                <form>
                    <h1>{state}</h1>
                    <div className="signup-field">
                        {state === "Sign Up" ? <input name='name' value={formData.name} onChange={changeHandler} type="text" placeholder="Your Name" /> : <></>}
                        <input name='email' value={formData.email} onChange={changeHandler} type="email" placeholder="Email Address" />
                        <input name='password' value={formData.password} onChange={changeHandler} type="password" placeholder="password" autoComplete="off" />
                        {state === "Sign Up" ? <span><small>Password should contain 8 - 20 characters </small></span> : <></>}
                    </div>
                    {state === "Sign Up" ?
                        <div className="signup-agree">
                            <input type="checkbox" />
                            <p>By continuing, i agree to the terms of use & privacy policy</p>
                        </div> : <></>}
                    <button onClick={() => { state === "Login" ? login() : signup() }}>Continue</button>

                    {state === "Sign Up" ?
                        <p className="login">Already have an account? <span onClick={() => { setState("Login") }}>Login here</span></p>
                        : <p className="login">Create an account <span onClick={() => { setState("Sign Up") }}>Click here</span></p>}
                </form>
            </div>
        </div>
    );
}

export default LoginSignup;