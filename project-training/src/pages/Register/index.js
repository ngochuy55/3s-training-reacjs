import React, { useState } from "react";
import "../../assets/css/Form.css";
import { Register } from "../../template/Register";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { isEmail, isBlankValue } from "../../ultis/functions";
import { toast } from "react-toastify";

function RegisterPages() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [birthday, setBirthday] = useState("");

  const navigate = useNavigate();
  const [errorMessages, setErrorMessages] = useState({});

  const errors = {
    wrong: "Email or password are incorrect",
    lengthPass: "Password must be at least 8 character",
    blank: "Username, Email and Password is empty",
    emailBlank: "Email cannot be blank",
    passBlank: "Password cannot be blank",
    email: "invalid email",
    pass: "invalid password",
    username: "invalid username",
    confirm: "confirm password are incorrect",
  };

  //Render validate: Element sẽ được hiển thị lên giao diện
  const renderAlertMessage = (name) =>
    name === errorMessages.name && (
      <p className="err">{errorMessages.message}</p>
    );

  const handleChangeUsername = (e) => {
    e.preventDefault();
    const value = e.target.value;
    if (value && !isEmail(email)) {
      setErrorMessages({ name: "fullname", message: errors.username });
    } else setErrorMessages(false);
    setUsername(value);
  };

  //validate Email: lấy dữ liệu ở input email và kiểm tra
  const handleChangeEmail = (e) => {
    e.preventDefault();
    const value = e.target.value;
    if (value && !isEmail(email)) {
      setErrorMessages({ name: "email", message: errors.email });
    } else if (!value) {
      setErrorMessages({ name: "email", message: errors.emailBlank });
    } else setErrorMessages(false);
    setEmail(value);
  };

  const handleChangeBirthday = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setBirthday(value);
  };

  // validate length of pass: lấy dữ liệu ở input password và kiểm tra
  const handleChangePassword = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setPassword(value);
    if (value.length < 8)
      setErrorMessages({ name: "password", message: errors.lengthPass });
    else setErrorMessages(false);
  };
  const handleChangeConfirm = (e) => {
    e.preventDefault();
    const value = e.target.value;
    if (value !== password)
      setErrorMessages({ name: "confirm", message: errors.confirm });
    else setErrorMessages(false);
  };

  //Validate when Submit Form
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !isBlankValue(email) ||
      !isBlankValue(password) ||
      !isBlankValue(username)
    ) {
      const data = {
        fullName: username,
        email: email,
        password: password,
        birthDay: birthday,
      };
      await axios
        .post("https://61bfdf3ab25c3a00173f4f15.mockapi.io/users", data)
        .then(function (response) {
          console.log(response);

          navigate("/login");
        })
        .catch(function (error) {
          console.log(error);
        })
        .finally(function () {});
      toast.success("Đăng ký thành công!", {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else setErrorMessages({ name: "summary", message: errors.blank });
  };

  return (
    <Register
      renderAlertMessage={renderAlertMessage}
      email={email}
      password={password}
      handleSubmit={handleSubmit}
      // LoginPage={LoginPage}
      handleChangeEmail={handleChangeEmail}
      handleChangePassword={handleChangePassword}
      username={username}
      handleChangeBirthday={handleChangeBirthday}
      handleChangeConfirm={handleChangeConfirm}
      handleChangeUsername={handleChangeUsername}
    />
  );
}

export default RegisterPages;
