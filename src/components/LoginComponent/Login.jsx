import  './Login.scss'


function Login(){
    const handleOnClick = () => {
        const clientID = '4aea9f722a9b4474936acca5e9b2fe06'
        const redirectUrl = 'http://localhost:3001/'
        const apiUrl = 'http://accounts.spotify.com/authorize'
        const scope = [
            'user-read-email',
            'user-read-private',
            'user-read-playback-state',
            'user-modify-playback-state',
            'user-read-currently-playing',
            'user-read-playback-position',
            'user-top-read',
            'user-read-recently-played',
            "user-read-recently-played",           
            "user-top-read",            
            "playlist-read-private",          
            "playlist-read-collaborative",
        ]
        window.location.href = `${apiUrl}?client_id=${clientID}&redirect_uri=${redirectUrl}&scope=${scope.join(' ')}&response_type=token&show_daialog=true`

    }
    return (
        <div className="container-login">
            <img className="img-logo" src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png" alt="logo-spotify" />
            <button className="btn-login" onClick={handleOnClick}>Connect with spotify</button>
        </div>
    )
}

export default Login;