// LOGIN
function login() {
  auth.signInWithEmailAndPassword(
    email.value, password.value
  ).then(() => {
    window.location.href = "dashboard.html";
  }).catch(err => alert(err.message));
}

// SIGNUP
function signup() {
  auth.createUserWithEmailAndPassword(
    email.value, password.value
  ).then(() => {
    window.location.href = "dashboard.html";
  }).catch(err => alert(err.message));
}

// GOOGLE LOGIN
function googleLogin() {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider)
    .then(() => window.location.href = "dashboard.html")
    .catch(err => alert(err.message));
}

// FORGOT PASSWORD
function resetPassword() {
  auth.sendPasswordResetEmail(email.value)
    .then(() => alert("Reset email sent"))
    .catch(err => alert(err.message));
}

// LOGOUT
function logout() {
  auth.signOut().then(() => {
    window.location.href = "index.html";
  });
}
