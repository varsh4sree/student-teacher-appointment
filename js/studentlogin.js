// studentlogin.js
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

export function handleStudentLogin(auth, db) {
  const msg = document.getElementById("msg");

  document.getElementById("loginBtn").onclick = async () => {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!email || !password) {
      msg.textContent = "Please fill in both fields.";
      msg.style.color = "red";
      return;
    }

    try {
      const userCred = await signInWithEmailAndPassword(auth, email, password);
      const ref = doc(db, "students", userCred.user.uid);
      const snap = await getDoc(ref);

      if (!snap.exists()) {
        msg.textContent = "No student record found.";
        msg.style.color = "red";
        return;
      }

      const data = snap.data();
      if (data.role !== "student") {
        msg.textContent = "Access denied: not a student.";
        msg.style.color = "red";
      } else if (!data.approved) {
        msg.textContent = "Not approved yet. Please wait for admin.";
        msg.style.color = "orange";
      } else {
        window.location.href = "studentdash.html";
      }
    } catch (err) {
      msg.textContent = "Error: " + err.message;
      msg.style.color = "red";
    }
  };
}
