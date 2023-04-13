import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginTemplate from '../template/LoginTemplate';
import { isEmail, isBlank } from '../ultis/functions';
import axios from 'axios';

export default function LoginPage() {
  const [account, setAccount] = useState({})
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate();
  const [errorMessages, setErrorMessages] = useState({});

  useEffect(() => {
    let isLoggedin = localStorage.getItem('token-info')
    if (isLoggedin === 'true') {
      navigate('/');
    }
  })

  // const user = [
  //   {
  //     email: "nhan@gmail.com",
  //     password: "12345678"
  //   },
  //   {
  //     email: "nhan2@gmail.com",
  //     password: "12345678"
  //   },
  // ]

  //error code : chứa các thông báo sẽ được hiển thị
  const errors = {
    wrong: "Email or password are incorrect",
    lengthPass: "Password must be at least 8 character",
    blank: "Email and Password can not be blank",
    emailBlank: "Email cannot be blank",
    passBlank: "Password cannot be blank",
    email: "invalid email",
    pass: "invalid password"
  };


  //Render validate: Element sẽ được hiển thị lên giao diện
  const renderAlertMessage = (name) =>
    name === errorMessages.name && (
      <p className="error">
        {errorMessages.message}
      </p>
    )


  //validate Email: lấy dữ liệu ở input email và kiểm tra 
  const onChangeEmail = e => {
    e.preventDefault();
    const value = e.target.value;
    if (value && !isEmail(email)) {
      setErrorMessages({ name: "email", message: errors.email })
    }
    else if (!value) {
      setErrorMessages({ name: "email", message: errors.emailBlank })
    }
    else
      setErrorMessages(false)
    setEmail(value);
  }

  // validate length of pass: lấy dữ liệu ở input password và kiểm tra
  const onChangePassword = e => {
    e.preventDefault();
    const value = e.target.value;
    setPassword(value);
    if (value.length < 8)
      setErrorMessages({ name: "password", message: errors.lengthPass })
    else setErrorMessages(false)
  }

  //Validate when Submit Form
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isBlank(email, password)) {
      await axios
        .get("https://61bfdf3ab25c3a00173f4f15.mockapi.io/users")
        .then(function (response) {
          setAccount(response.data);
          const userdata = response.data.find(user => user.email === email && user.password === password)
          if (userdata) {
            localStorage.setItem('token-info', JSON.stringify(response.data));
            navigate('/')
          }
          else
            setErrorMessages({ name: "summary", message: errors.wrong })
        })
        .catch(function (error) {
          console.log(error);
        })
        .finally(function () {
        });
    }

    else setErrorMessages({ name: "summary", message: errors.blank })
  }


  // useEffect(() => {
  //   handleSubmit();
  // }, [account]);

  return (
    <LoginTemplate
      renderAlertMessage={renderAlertMessage}
      email={email}
      password={password}
      handleSubmit={handleSubmit}
      LoginPage={LoginPage}
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
    />
  )
}