document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form from submitting normally

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;

    if (!username || !password) {
      alert("Please fill in both fields.");
      return;
    }

    // Simulate sending data to backend (you'll replace this with a real API call)
    console.log("Logging in with:", { username, password });

    // Example fetch call (uncomment and update the URL when backend is ready)
    fetch("https://your-api-url.com/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          // Save token or redirect
          localStorage.setItem("token", data.token);
          window.location.href = "farmer.html";
        } else {
          alert("Login failed: " + data.message);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("An error occurred. Please try again.");
      });
  });
});
