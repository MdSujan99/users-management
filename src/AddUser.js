import { useRef } from "react";

import classes from "./AddUser.module.css";

function AddUser() {
  const emailRef = useRef();
  const fnameRef = useRef();
  const lnameRef = useRef();
  const pwdRef = useRef();
  const usernameRef = useRef();

  function submitForm(event) {
    event.preventDefault();

    const newUser = {
      email: emailRef.current.value,
      fist_name: fnameRef.current.value,
      last_name: lnameRef.current.value,
      pwd: pwdRef.current.value,
      username: usernameRef.current.value,
    };
    console.log(newUser);

    fetch("http://3.6.93.159:7883/machstatz/add_new_user", {
      method: "POST",
      body: JSON.stringify(newUser),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        emailRef.current.value = "";
        fnameRef.current.value = "";
        lnameRef.current.value = "";
        pwdRef.current.value = "";
        usernameRef.current.value = "";
      })
      .catch((error) => console.error("Error:", error));
  }

  return (
    <div className={classes.container}>
      <form className={classes.myForm} onSubmit={submitForm}>
        <input
          type="text"
          id="email"
          placeholder="email"
          ref={emailRef}
          required
        ></input>
        <input
          type="text"
          id="fname"
          placeholder="first name"
          ref={fnameRef}
        ></input>
        <input
          type="text"
          id="lname"
          placeholder="last name"
          ref={lnameRef}
        ></input>
        <input
          type="password"
          id="pwd"
          placeholder="password"
          ref={pwdRef}
          required
        ></input>
        <input
          type="text"
          id="username"
          placeholder="username"
          ref={usernameRef}
          required
        ></input>
        <div className={classes.btn}>
          <button>Add this user</button>
        </div>
      </form>
    </div>
  );
}

export default AddUser;
