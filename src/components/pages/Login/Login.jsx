import "./Login.css";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/LoginReducer/login-action";
import { register } from "../../redux/RegisterReducer/Register-action";
import { store } from "../../redux/store";
import { Navigate, useNavigate } from "react-router";
import { getuserbyID } from "../../redux/getuser/getuser-action";

const Login = () => {
  const [form, setform] = useState({});
  const reuder = store.getState();
  const [count, setcount] = useState(0);
  const { token, error } = useSelector((store) => store.login);
  const { user } = useSelector((store) => store.getuser);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setform({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(login(form));
    setcount(count + 1);
    console.log(error);
    if (count === 0) {
      alert("Please tap on Login again for Authentication");
      return;
    }

    if (error === false && count === 1) {
      dispatch(getuserbyID(form.username, token.token));
      alert("Logged In");
      navigate("/");
      window.location.reload()
      return ;
    }

    if (error) {
      alert("User not Found");
      return;
    }
  };

  return (
    <div className="login-div">
      <form action="" className="login-form" onSubmit={handleSubmit}>
        <h1 className="login-heading">Login</h1>
        <label htmlFor="" className="resgister-label">
          👤 UserName
        </label>
        <input
          required={true}
          onChange={handleChange}
          type="text"
          name="username"
          className="username"
          placeholder="Write Your UserName"
        />

        <label htmlFor="" className="resgister-label">
          🔑 Password
        </label>
        <input
          required={true}
          onChange={handleChange}
          type="password"
          name="password"
          className="password"
          placeholder="Enter Password"
        />
        <div className="btn-div">
          <input type="submit" className="pointer" value={"Login"} />

          <input
            type="submit"
            className="pointer"
            onClick={() => {
              navigate("/register");
            }}
            value={"Register"}
          />
        </div>
      </form>
    </div>
  );
};

export default Login;
