// Because this is a literal single page application
// we detect a callback from Spotify by checking for the hash fragment
import * as dotenv from 'dotenv';

 // Replace with your client id
const params = new URLSearchParams(window.location.hash.substring(1));
const code = params.get("access_token");
dotenv.config();
const clientId = process.env.API_ID;



if (!code) {

    redirectToAuthCodeFlow(clientId);

} else {
    const profile = await fetchProfile(code);
    populateUI(profile);

    const top_tracks = await fetchTracks(code);
    populateTracks(top_tracks);
    
}

async function redirectToAuthCodeFlow(clientId: string) {
    const params = new URLSearchParams();
    params.append("client_id", clientId);
    params.append("response_type", "token");
    params.append("redirect_uri", "http://localhost:5173/callback");
    params.append("scope", "user-read-private user-read-email");

    document.location = `https://accounts.spotify.com/authorize?${params.toString()}`;
}

async function fetchProfile(code: string): Promise<UserProfile> {
    const result = await fetch("https://api.spotify.com/v1/me", {
        method: "GET", headers: { Authorization: `Bearer ${code}` }
    });

    return await result.json();
}

async function fetchTracks(code: string): Promise<TopTracks> {
    const result = await fetch("https://api.spotify.com/v1/me/top/tracks", {
        
        method: "GET", headers: { Authorization: `Bearer ${code}` } 

    });
    
    return await result.json();
}

function populateUI(profile: UserProfile) {
    document.getElementById("displayName")!.innerText = profile.display_name;
    document.getElementById("avatar")!.setAttribute("src", profile.images[0].url)
    document.getElementById("followers")!.innerText = profile.followers.total.toString();
    document.getElementById("country")!.innerText = profile.country;
    document.getElementById("id")!.innerText = profile.id;
    document.getElementById("email")!.innerText = profile.email;
    document.getElementById("uri")!.innerText = profile.uri;
    document.getElementById("uri")!.setAttribute("href", profile.external_urls.spotify);
    document.getElementById("url")!.innerText = profile.href;
    document.getElementById("url")!.setAttribute("href", profile.href);
    document.getElementById("imgUrl")!.innerText = profile.images[0].url;
}

function populateTracks(top_tracks: TopTracks) {
    document.getElementById("track_name")!.innerText = top_tracks.track_name;
    document.getElementById("artist")!.innerText = top_tracks.artist;
}

export { };
