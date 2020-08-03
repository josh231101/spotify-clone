import React from 'react'
import "./Login.css"
import {loginUrl} from "./spotify.js"

function Login() {
    return (
        <div className="login">
        {/*Spotify Logo*/}
        {/**Login with Spotify */}
            <img
            src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
            alt=""
            />
            <a href={loginUrl}>Log In with Spotify</a>
            
        </div>
    )
}

export default Login
