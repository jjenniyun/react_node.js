//import axios from "axios";
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser, Auth } from '../../../_action/user_action';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };

  const onPassHandler = (event) => {
    setPassword(event.currentTarget.value);
  };

  const onSubmitHandler = (event) => {
    // 페이지가 refresh되는 것을 막아주기 위해서
    event.preventDefault();

    let body = {
      email: Email,
      password: Password
    }

    dispatch(loginUser(body))
    .then(response => {
      if (response.payload.loginSuccess) {
        //alert("로그인이 완료되었습니다.");
        navigate("/");
        //react router 업데이트 : props.history.push("/"); useNavigate변경
      } else {
        alert("로그인 중 오류가 발생하였습니다.");
      }
    });
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={onSubmitHandler}>
        <label>Email</label>
        <input type="email" value={Email} onChange={onEmailHandler} />
        <label>Password</label>
        <input type="password" value={Password} onChange={onPassHandler} />

        <br />
        <button type='submit'>Login</button>
      </form>
    </div>
  );
}
//Auth(false)
export default Auth(LoginPage, false);