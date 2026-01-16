// login.js

function login() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const role = document.getElementById("role").value;

    // Validation
    if (username === "" || password === "" || role === "") {
        alert("⚠ Please fill all fields");
        return;
    }

    // Dummy credentials (for demo)
    const users = {
        student: { user: "student", pass: "1234", redirect: "dashboard.html" },
        staff: { user: "staff", pass: "1234", redirect: "dashboard.html" },
        admin: { user: "admin", pass: "admin123", redirect: "settings.html" }
    };

    const selectedUser = users[role];

    if (
        username === selectedUser.user &&
        password === selectedUser.pass
    ) {
        // Save session
        localStorage.setItem("loggedInUser", JSON.stringify({
            username,
            role
        }));

        alert("✅ Login successful!");
        window.location.href = selectedUser.redirect;
    } else {
        alert("❌ Invalid credentials");
    }
}
