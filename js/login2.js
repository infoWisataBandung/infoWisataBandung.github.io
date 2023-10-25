// Mendapatkan elemen form
const loginForm = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const submitButton = document.getElementById("submit");

// Fungsi untuk mengecek apakah form telah diisi dengan benar
const validation = () => {
    const username = usernameInput.value;
    const pass = passwordInput.value;
    if (username !== "" && pass !== "") {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
};

// Panggil fungsi validation saat input berubah
usernameInput.addEventListener("input", validation);
passwordInput.addEventListener("input", validation);

// Handle form submission
loginForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const username = usernameInput.value;
    const password = passwordInput.value;

    // Kirim permintaan HTTP POST ke server Golang
    const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password })
    });

    if (response.ok) {
        const responseData = await response.json();
        if (responseData.success) {
            // Redirect user to user.html upon successful login
            window.location.href = "user.html";
        } else {
            // Handle failed login
            console.log("Login failed. Please check your username and password.");
        }
    } else {
        // Handle failed HTTP request
        console.log("Failed to send login request.");
    }
});
