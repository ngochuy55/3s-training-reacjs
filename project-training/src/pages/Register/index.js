import React, { useState } from "react";
import "../../assets/css/Form.css";
import { Register } from "../../template/Register";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { isEmail, isBlankValue, alertToast } from "../../ultis/functions";
import { toast } from "react-toastify";

const errors = {
  wrong: "Email or password are incorrect",
  emailwrong: "Email is incorrect",
  passwrong: "password is incorrect",
  lengthPass: "Password must be at least 8 character",
  blank: "Username, Email and Pass is empty",
  emailBlank: "Email cannot be blank",
  passBlank: "Password cannot be blank",
  confirmBlank: "confirm password cannot be blank",
  usernameBlank: "username cannot be blank",
  birthdayBlank: "birthday cannot be blank",
  email: "invalid email",
  pass: "invalid password",
  confirm: "confirm password are incorrect",
};

function RegisterPages() {
  document.title = "Đăng ký"
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("")
  const [username, setUsername] = useState("");
  const [birthday, setBirthday] = useState("");

  const navigate = useNavigate();
  const [errorMessages, setErrorMessages] = useState({});



  //Render validate: Element sẽ được hiển thị lên giao diện
  const renderAlertMessage = (name) =>
    name === errorMessages.name && (
      <p className="l-[65px] m-0 text-[red] text-left mt-[6px]">{errorMessages.message}</p>
    );

  //validate UserName: lấy dữ liệu ở input userName và kiểm tra
  const handleChangeUsername = (e) => {
    e.preventDefault();
    const value = e.target.value;
    if (!value) {
      setErrorMessages({ name: "username", message: errors.usernameBlank });
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
  // lấy dữ liệu ngày tháng
  const handleChangeBirthday = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setBirthday(value);
  };

  // validate length of pass: lấy dữ liệu ở input password và kiểm tra
  const handleChangePassword = (e) => {
    e.preventDefault();
    const value = e.target.value;
    if (value && value.length < 8) {
      setErrorMessages({ name: "password", message: errors.lengthPass });
    } else if (!value) {
      setErrorMessages({ name: "password", message: errors.passBlank });
    } else setErrorMessages(false);
    setPassword(value);
  };
  // validate confirm pass: kiểm tra nhập lại pass
  const handleChangeConfirm = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setConfirmPassword(value);
    if (value && value.length < 8) {
      setErrorMessages({ name: "comfirmpassword", message: errors.lengthPass });
    } else if (!value) {
      setErrorMessages({ name: "comfirmpassword", message: errors.confirmBlank });
    }
    else setErrorMessages(false);
  };

  //Validate when Submit Form
  const handleSubmit = async (e) => {
    e.preventDefault();
    let isValid = true;
    if (password !== confirmPassword) {
      setErrorMessages({ name: "confirmPassword", message: errors.confirm });
      isValid = false;
    }
    if (isValid && !isBlankValue(username)
      && !isBlankValue(email)
      && !isBlankValue(password)
      && !isBlankValue(birthday)
      && !isBlankValue(confirmPassword)) {
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
        .finally(function () {
        });
      alertToast(toast, "Đăng ký thành công!", "success");
    } else {
      if (username === "") {
        setErrorMessages({ name: "username", message: errors.usernameBlank });
      } else if (email === "") {
        setErrorMessages({ name: "email", message: errors.emailBlank });
      } else if (password === "") {
        setErrorMessages({ name: "password", message: errors.passBlank });
      } else if (birthday === "") {
        setErrorMessages({ name: "birthday", message: errors.birthdayBlank });
      } else if (confirmPassword === "") {
        setErrorMessages({ name: "comfirmpassword", message: errors.confirmBlank });
      } else if (confirmPassword !== password)
        setErrorMessages({ name: "comfirmpassword", message: errors.confirm });
    }

  };

  return (
    <Register
      renderAlertMessage={renderAlertMessage}
      email={email}
      password={password}
      handleSubmit={handleSubmit}
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
