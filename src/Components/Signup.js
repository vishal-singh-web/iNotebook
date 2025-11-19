import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";

function Signup() {
    const [msg, setMsg] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [type, settype] = useState('success');
    const alert = (msg, condition) => {
        setMsg(msg);
        setShowAlert(true);
        settype(condition);
    }
    useEffect(() => {
        if (showAlert) {
            console.log("Alert called with message:", msg);
            const timeout = setTimeout(() => setShowAlert(false), 2000);
            return () => clearTimeout(timeout);
        }
    }, [showAlert]);
    const host = 'https://backend-aqdnyhrw6-vishalucifer-gmailcoms-projects.vercel.app'
    let navigate = useNavigate();
    const [form, setform] = useState({ name: '', email: '', password: '' })
    const onchange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }
    const handlesignup = async (e) => {
        e.preventDefault();
        try {
            const url = `${host}/api/auth/signup`
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name: form.name, email: form.email, password: form.password })
            });
            let data = await response.json()
            console.log(data);
            if (data.success) {
                localStorage.setItem('token', data.authtoken);
                alert('Registration Successful','success');
                setTimeout(() => {
                    navigate('/');
                }, 2000);
            }
            else{
                alert('Information not valid, Please try again', 'danger');
            }
        } catch (error) {
            console.error(error.message);
        }
    }
    return (
        <div className="container my-5">
            <div className="my-5">
                <h1>Create an account to use iNotebook</h1>
            </div>
            <div className={`alert alert-${type} alert-dismissible fade ${showAlert ? 'show' : ''} float-alert`} role="alert">
                {msg}
                <button type="button" className="btn-close" aria-label="Close" onClick={() => setShowAlert(false)}></button>
            </div>
            <form onSubmit={handlesignup}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text"minLength={3} name='name' onChange={onchange} className="form-control" id="name"></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" onChange={onchange} className="form-control" id="email" aria-describedby="emailHelp" name='email'></input>
                    
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" minLength={6}  name='password' onChange={onchange} className="form-control" id="password"></input>
                    <div id="emailHelp" className="form-text">We'll never share your information with anyone else.</div>
                </div>
                <button type="submit" className="btn btn-primary" >Signup</button>
            </form>
        </div>

    )
}

export default Signup