import { useState } from "react";
import { Login } from "../../template/Login";
import { useNavigate } from "react-router-dom";
import { isBlank, isEmail } from "../../ultis/functions";
import axios from "axios";
import { toast } from "react-toastify";

export default function LoginPage() {
  const [account, setAccount] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessages, setErrorMessage] = useState({});
  const navigate = useNavigate();

  const errors = {
    wrong: "Email or password are incorrect",
    lengthPass: "Password must be at least 8 character",
    blank: "Email and Password can not be blank",
    emailBlank: "Email cannot be blank",
    passBlank: "Password cannot be blank",
    email: "invalid email",
    pass: "invalid password",
  };

  //Render validate: Element sẽ được hiển thị lên giao diện
  const renderAlertMessage = (name) =>
    name === errorMessages.name && (
      <p className="error">{errorMessages.message}</p>
    );

  const handleChangeEmail = (e) => {
    e.preventDefault();
    const value = e.target.value;
    if (value && !isEmail(email)) {
      setErrorMessage({ name: "email", message: errors.email });
    } else if (!value) {
      setErrorMessage({ name: "email", message: errors.emailBlank });
    } else setErrorMessage(false);
    setEmail(value);
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
    const value = e.target.value;
    if (value.length < 8)
      setErrorMessage({ name: "password", message: errors.lengthPass });
    else setErrorMessage(false);
    setPassword(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isBlank(email, password)) {
      await axios
        .get("https://61bfdf3ab25c3a00173f4f15.mockapi.io/users")
        .then(function (res) {
          setAccount(res.data);
          const user = res.data.find(
            (user) => user.email === email && user.password === password
          );
          if (user) {
            localStorage.setItem("user", JSON.stringify(res.data));
            toast.success(" Đăng nhập thành công !!", {
              position: "top-center",
              autoClose: 1500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
            navigate("/");
          } else setErrorMessage({ name: "summary", message: errors.wrong });
        })
        .catch(function (err) {
          console.log(err);
        })
        .finally(function () {});
    } else {
      setErrorMessage({ name: "summary", message: errors.blank });
      toast.error("Email hoặc mật khẩu không đúng", {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
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
