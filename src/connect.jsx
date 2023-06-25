export function connect(emailValue, passwordValue, navigate) {
  fetch("https://reqres.in/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: emailValue,
      password: passwordValue,
    }),
  }).then((response) => {
    if (response.ok) {
      response
        .json()
        .then((data) => {
          localStorage.setItem("token", data["token"]);
          navigate(`../profile`);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      alert("invalid email or password");
    }
  });
}
