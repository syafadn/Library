import "../Login/login.css"
import { Link, useNavigate } from "react-router-dom"
import Gambar from "../../assets/logo/5836.png"
import React, { useState } from "react"
import { useDispatch } from "react-redux"
import userSlice from "../../store/userSlice"

const Login = () => {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        dispatch(
            userSlice.actions.login(name, password)
        )

        dispatch(
            userSlice.actions.setisLoggedIn (true)
        )

        navigate("/dashboard")

    };

    return(
        <>
            <div className="body">
                <div className="container">
                    <div className="login">
                        <form className="form" 
                        onSubmit={(e) => handleSubmit(e)} >
                            <h1>Login</h1>
                            <hr />
                            <label htmlFor="">Username</label>
                            <input 
                                type="text" 
                                placeholder="Username"
                                name="username"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <label htmlFor="">Password</label>
                            <input 
                                type="password" 
                                placeholder="Password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            /><br/><br/>
                            <button>Login</button>
                        </form>
                    </div>

                    <div className="right">
                        <img src={Gambar} alt="image" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login