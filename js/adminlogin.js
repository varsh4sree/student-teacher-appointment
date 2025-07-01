
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

export function handleAdminLogin(auth) {
  document.getElementById("login").addEventListener("click", async () => {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorDiv = document.getElementById("error");
    errorDiv.textContent = "";

    if (!email || !password) {
      errorDiv.textContent = "Please enter email and password.";
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      window.location.href = "admindash.html";
    } catch (err) {
      errorDiv.textContent = "Login failed: " + err.message;
      console.error(err);
    }
  });
}
