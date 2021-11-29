// Get back data from config.json (development environment)
async function loadConfig(path) {
    let result = await fetch(path);
    return result.json();
}

let apiUrl = (location.hostname === "localhost" || location.hostname === "127.0.0.1") ? "http://localhost:3000":"https://orinoco-back-mb.herokuapp.com";

