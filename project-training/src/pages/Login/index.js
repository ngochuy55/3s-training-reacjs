import { useState } from "react";
import { Login } from "../../template/Login";
import { useNavigate } from "react-router-dom";
import { alertToast, isBlank, isEmail } from "../../ultis/functions";
import axios from "axios";
import { toast } from "react-toastify";

const errors = {
  wrong: "Email or password are incorrect",
  emailwrong: "Email is incorrect",
  passwrong: "password is incorrect",
  lengthPass: "Password must be at least 8 character",
  blank: "Email and Password can not be blank",
  emailBlank: "Email cannot be blank",
  passBlank: "Password cannot be blank",
  email: "invalid email",
  pass: "invalid password",
};

export default function LoginPage() {
  const [, setAccount] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessages, setErrorMessages] = useState({});
  const navigate = useNavigate();


  //Render validate: Element sẽ được hiển thị lên giao diện
  const renderAlertMessage = (name) =>
    name === errorMessages.name && (
      <p className="l-[65px] m-0 text-[red] text-left mt-[6px]">
        {errorMessages.message}
      </p>
    );

  //handle change email input
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

  //handle change password input
  const handleChangePassword = (e) => {
    e.preventDefault();
    const value = e.target.value;
    if (value.length < 8)
      setErrorMessages({ name: "password", message: errors.lengthPass });
    else setErrorMessages(false);
    setPassword(value);
  };

  //handle submit login button
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isBlank(email, password)) {
      await axios
        .get("https://61bfdf3ab25c3a00173f4f15.mockapi.io/users")
        .then(function (res) {
          setAccount(res.data);
          const user = res.data.find((user) => user.email === email && user.password === password);
          if (user) {
            localStorage.setItem("user", JSON.stringify(user));
            alertToast(toast, "Đăng nhập thành công!", "success");
            navigate("/");
          } else {
            alertToast(toast, "Email hoặc mật khẩu sai!", "error")
          }
        })
        .catch(function (err) {
          console.log(err);
        })
        .finally(function () { });
    } else {
      if (email === "") {
        setErrorMessages({ name: "email", message: errors.emailBlank });
      } else if (password === "") {
        setErrorMessages({ name: "password", message: errors.passBlank });
      }
    }
  };

  return (
    <Login
      email={email}
      password={password}
      handleChangeEmail={handleChangeEmail}
      renderAlertMessage={renderAlertMessage}
      handleChangePassword={handleChangePassword}
      handleSubmit={handleSubmit}
    />
  );
}
