const API_URL = "http://localhost:300"

async function LoadUsers () {
    const response = await fetch(`${API_URL}/users`);
    const users = await response.json();
    console.log(users);
}

LoadUsers();