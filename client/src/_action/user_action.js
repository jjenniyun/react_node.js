import axios from "axios";
import { LOGIN_USER, REGISTER_USER, AUTH_USER } from "./types";

export function loginUser(dataToSubmit) {
  // 서버에 이메일과 비번 보내기
  const request = axios.post('/api/users/login', dataToSubmit)
    .then(response => response.data)

  return {
    type: LOGIN_USER,
    payload: request
  };
}

export function registerUser(dataToSubmit) {

  const request = axios.post('/api/users/register', dataToSubmit)
    .then(response => response.data)

  return {
    type: REGISTER_USER,
    payload: request
  };
}

export function Auth() {

  const request = axios.get('/api/users/register')
    .then(response => response.data)

  return {
    type: AUTH_USER,
    payload: request
  };
}

//Axios.post('/api/users/register', body)