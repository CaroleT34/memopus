import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [authenticationResult, setAuthenticationResult] = useState("");

  const users: any = useLoaderData();
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(login, users[0].username);
    console.log(password, users[0].pwd);
    if (login === users[0].username && password === users[0].pwd) {
      navigate("/home");
    } else {
      setAuthenticationResult("Error");
    }
  };

  return (
    <div className="container">
      <div className="row d-flex align-items-center justify-content-center">
        <h1 className="row d-flex justify-content-center m-2">
          Page de connexion
        </h1>
        <form
          className="d-flex justify-content-center flex-column col-4"
          onSubmit={(event) => handleSubmit(event)}
        >
          <input
            type="text"
            className="form-control my-3"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
          <input
            type="password"
            className="form-control my-3"
            placeholder="Password"
            aria-label="Password"
            aria-describedby="basic-addon1"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="btn btn-outline-secondary my-3" type="submit">
            Connexion
          </button>
          {authenticationResult === "Error" && (
          <div className="alert alert-danger" role="alert">
            Échec de l'authentification. Veuillez réessayer.
          </div>
        )}
        </form>
      </div>
    </div>
  );
};

export default Login;
