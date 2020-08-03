import React, {useEffect , useState} from 'react';
import './App.css';
import Login from "./Login"
import {getTokenFromUrl} from "./spotify"
import SpotifyWebApi from "spotify-web-api-js"
import Player from "./Player"

const spotify = new SpotifyWebApi()

function App() {
  const [token, setToken] = useState(null)

  useEffect(() => {
      const hash = getTokenFromUrl()
      console.log("I HAVE A TOKE >>" , token)
      //We clean the URL for security
      window.location.hash = ""

      // _ is a standard
      const _token = hash.access_token
      if(_token){
        setToken(_token)
        //We pass the token to the API
        spotify.setAccessToken(_token)

        spotify.getMe().then(user => {
          console.log(' :star: ',user);
        })  
      }

  },[])

  return (
    <div className="App">
      {token ? <Player/> : 
          <Login />
      }

    </div>
  );
}

export default App;
