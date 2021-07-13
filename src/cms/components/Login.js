import React, { useState } from "react";

//History
import { useHistory } from "react-router";

//Context
import { post } from "../../Context/Context";

const Login = () => {

    const [user, setUser] = useState();
    const history = useHistory();

    const handleCHange = (event) => {
        event.persist();

        setUser(prevState => ({
            ...prevState,
            [event.target.id]: event.target.value
        }));
    }

    const handleLogin = (event) => {
        event.preventDefault();

        post("users/validate", user).then(response => {
            if (response?.id){
                localStorage.setItem("user", JSON.stringify(response));
                history.push("/cms");
            }
            
        });
    }

    return (
        <>
            <main className="container p-5">
                <form>
                    <h1>Login</h1>
                    <hr />
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" required className="form-control" id="email" aria-describedby="emailHelp" onChange={handleCHange} />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" required className="form-control" id="password" onChange={handleCHange} />
                    </div>
                    <button className="btn btn-primary" onClick={handleLogin}>Submit</button>
                </form>
            </main>

        </>
    )
}

export default Login;