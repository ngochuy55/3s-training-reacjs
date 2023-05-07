import { useState } from "react";
import { Login } from "../../template/Login";
import { useNavigate } from "react-router-dom";
import { isBlank, isEmail } from "../../ultis/functions";
import axios from "axios";
import { toast } from "react-toastify";

export default function LoginPage() {
  document.title = "Đăng nhập"
  const [, setAccount] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessages, setErrorMessages] = useState({});
  const navigate = useNavigate();

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

  //Render validate: Element sẽ được hiển thị lên giao diện
  const renderAlertMessage = (name) =>
    name === errorMessages.name && (
      <p className="l-[65px] m-0 text-[red] text-left mt-[6px]">{errorMessages.message}</p>
    );

  const handleChangeEmail = (e) => {
    e.preventDefault();
    const value = e.target.value;
    if (value && !isEmail(email)) {
      setErrorMessages({ name: "email", message: errors.email });
    } else if (!value) {
      setErrorMessages({ name: "email", message: errors.emailBlank });
    }
    else setErrorMessages(false);
    setEmail(value);
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
    const value = e.target.value;
    if (value && value.length < 8) {
      setErrorMessages({ name: "password", message: errors.lengthPass });
    } else if (!value) {
      setErrorMessages({ name: "password", message: errors.passBlank });
    }
    else setErrorMessages(false);
    setPassword(value);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isBlank(email, password)) {
      await axios
        .get("https://61bfdf3ab25c3a00173f4f15.mockapi.io/users")
        .then(function (res) {
          setAccount(res.data);
          const users = res.data.find((user) => user.email === email && user.password === password);
          const useremail = res.data.find((user) => user.email === email);
          const userpass = res.data.find((user) => user.password === password);
          if (users) {
            localStorage.setItem("user", JSON.stringify(users));
            toast.success("Đăng nhập thành công!", {
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
          }
          else {
            localStorage.setItem("user", JSON.stringify(users));
            toast.error("Đăng nhập thất bại!", {
              position: "top-center",
              autoClose: 1500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });

            if (!userpass) {
              setErrorMessages({ name: "password", message: errors.passwrong })
            }
            if (!useremail) {
              setErrorMessages({ name: "email", message: errors.emailwrong })
            }
          }

        })
        .catch(function (err) {
          console.log(err);
        })
        .finally(function () { });
    }
    else {
      if (password === "") {
        setErrorMessages({ name: "password", message: errors.passBlank });
      }
      if (email === "") {
        setErrorMessages({ name: "email", message: errors.emailBlank });
      }

    }
    // setErrorMessage({ name: "summary", message: errors.blank });
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
