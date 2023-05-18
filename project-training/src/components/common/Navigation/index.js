import React, { useEffect, useState } from "react";
import {
  faMagnifyingGlass,
  faCartShopping,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../../assets/css/Navigation.css";
import "../../../assets/css/Responsive.css";
import Navigation from "../../../template/Navigation";
import axios from "axios";
import { productActions, useProducts } from "../../../Store";
import { useLocation, useNavigate } from 'react-router-dom';
import { isEmail, alertToast } from "../../../ultis/functions/";
import { toast } from "react-toastify";
const errors = {
  wrong: "Email or password are incorrect",
  emailwrong: "Email is incorrect",
  passwrong: "password is incorrect",
  lengthPass: "Password must be at least 8 character",
  blank: "not blank",
  emailBlank: "Email cannot be blank",
  passBlank: "Password cannot be blank",
  confirmBlank: "confirm password cannot be blank",
  usernameBlank: "username cannot be blank",
  birthdayBlank: "birthday cannot be blank",
  email: "invalid email",
  pass: "invalid password",
  confirm: "confirm password are incorrect",
  passOld: "wrong old password",
  confirmNew: "confirm password new are incorrect",
};

export function Navbar({ cartItems, isproductDetail }) {
  const user = JSON.parse(localStorage.getItem("user"));
  const logo = require("../../../assets/images/logo-fix.png");
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [products, setproducts] = useState([]);
  const [productState, dispatch] = useProducts();
  const [total, setTotal] = useState(0);
  const [showCart, setShowCart] = useState(false);
  const [showBars, setShowbars] = useState(false);
  const [showInfor, setShowInfor] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();


  const [search, setSearchValue] = useState("");
  const { pathname } = useLocation();
  const isProductDetailPage = pathname.includes("/chi-tiet-san-pham/");

  const [email, setEmail] = useState(user?.email);
  const [username, setUsername] = useState(user?.fullName);
  const [birthday, setBirthday] = useState(user?.birthDay);
  const [password, setPassword] = useState(user?.password);
  // eslint-disable-next-line no-unused-vars
  const [avatar, setAvatar] = useState(user?.avatar);
  const [passwordNew, setPasswordNew] = useState("");
  const [confirmPasswordNew, setConfirmPasswordNew] = useState("")
  const [errorMessages, setErrorMessages] = useState({});
  //Render validate: Element sẽ được hiển thị lên giao diện
  const renderAlertMessage = (name) =>
    name === errorMessages.name && (
      <p className="l-[65px] m-0 text-[red] text-left mt-[6px]">{errorMessages.message}</p>
    );


  //fetch api product
  const fetchData = async () => {
    await axios
      .get("https://61bfdf3ab25c3a00173f4f15.mockapi.io/products")
      .then(function (res) {
        setproducts(res.data);
      })
      .catch(function (err) {
        console.log(err);
      })
      .finally(function () { });
  };
  useEffect(() => {
    fetchData();
  }, []);

  //handle Search submit
  function handleSearchClick() {
    dispatch(productActions.setSearchName(search));
    if (search === "") {
      dispatch(productActions.setSearchResult(products));

      return;
    }
    // eslint-disable-next-line array-callback-return
    const filterBySearch = products.filter((item) => {
      // console.log(item);
      if (item.productName.toLowerCase().includes(search.toLowerCase())) {
        return item;
      }
    });
    // setprodudicts(filterBySearch);
    dispatch(productActions.setSearchResult(filterBySearch));
    // console.log(filterBySearch);
  }

  //show cart
  const handleShowCart = () => {
    setShowCart(!showCart);
  };
  //show sidebar when responsive mode
  const handleShowSidebar = () => {
    setShowbars(!showBars);
  };

  //show popup information
  const handleshowinfo = () => {
    setShowbars(false);
    setShowPass(false);
    setShowInfor(!showInfor);
  };
  //show sidebar when responsive mode
  const handleShowChangePass = () => {
    setShowbars(false);
    setShowInfor(false);
    setShowPass(!showPass);
  };

  // submit info
  const submiteditinfo = async () => {
    let isValid = true;

    if (!isEmail(email) || email === "" || username === "") {
      isValid = false;
      alertToast(toast, "Sửa thông tin thất bại!", "error");
    } else
      alertToast(toast, "Sửa thông tin thành công!", "success");


    if (isValid) {
      const newData = {
        email: email,
        fullName: username,
        birthDay: birthday,
        // avatar: avatar,
      };

      try {
        // eslint-disable-next-line no-unused-vars
        const response = await axios.put(`https://61bfdf3ab25c3a00173f4f15.mockapi.io/users/${user.id}`, newData);
        // console.log('Updated data:', response.data);
        // Cập nhật localStorage mới sau khi thay đổi
        const updatedUser = { ...user, ...newData };
        localStorage.setItem('user', JSON.stringify(updatedUser));
      } catch (error) {
        console.log('Error:', error);
      }
    }
    setShowInfor(false);
  };

  // nhập dữ liệu name
  const handleInputname = (e) => {
    e.preventDefault();
    const value = e.target.value;
    // console.log("value", value);
    if (!value) {
      setErrorMessages({ name: "username", message: errors.usernameBlank });
    } else setErrorMessages(false);
    setUsername(value);
  }
  // nhập dữ liệu email
  const handleInputemail = (e) => {
    e.preventDefault();
    const value = e.target.value;
    if (value && !isEmail(email)) {
      setErrorMessages({ name: "email", message: errors.email });
    } else if (!value) {
      setErrorMessages({ name: "email", message: errors.emailBlank });
    } else setErrorMessages(false);
    setEmail(value);
  }

  // //nhập dữ liệu avatar
  // const handlePreviewAvatar = (e) => {
  //   // e.preventDefault();
  //   const file = e.target.file;
  //   console.log(file);
  //   file.preview = URL.createObjectURL(file);
  //   setAvatar(file);
  // }

  // useEffect(() => {
  //   return () => {
  //     avatar && URL.revokeObjectURL(avatar.preview)
  //   }
  // }, [avatar])

  //nhập dữ liệu birthday
  const handleInputBirthday = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setBirthday(value);
  }
  //nhập dữ liệu password cũ
  const handleInputPasswordOld = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setPassword(value);
    if (value && value.length < 8) {
      setErrorMessages({ name: "password_old", message: errors.lengthPass });
    } else if (!value) {
      setErrorMessages({ name: "password_old", message: errors.passBlank });
    }
    else setErrorMessages(false);

  };

  //nhập dữ liệu password mới
  const handleInputPasswordNew = (e) => {
    e.preventDefault();
    const value = e.target.value;
    if (value && value.length < 8) {
      setErrorMessages({ name: "password_new", message: errors.lengthPass });
    } else if (!value) {
      setErrorMessages({ name: "password_new", message: errors.passBlank });
    } else setErrorMessages(false);
    setPasswordNew(value);
  };

  //nhập dữ liệu confirm password
  const handleInputConfirmPasswordNew = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setConfirmPasswordNew(value);
    if (value && value.length < 8) {
      setErrorMessages({ name: "comfirmpassword_new", message: errors.lengthPass });
    } else if (!value) {
      setErrorMessages({ name: "comfirmpassword_new", message: errors.confirmBlank });
    }
    else setErrorMessages(false);
  };

  //Submit đổi mật khẩu
  const changePassword = async () => {
    let isValid = true;
    // Kiểm tra xác thực mật khẩu cũ và mới
    if (password === "" || passwordNew === "" || confirmPasswordNew === "") {
      isValid = false;
      alertToast(toast, "đổi mật khẩu thất bại, tất cả không được để trống!", "error");
    } else if (password !== user.password) {
      isValid = false;
      setErrorMessages({ name: "password_old", message: errors.passOld });
    } else if (passwordNew !== confirmPasswordNew) {
      isValid = false;
      setErrorMessages({ name: "comfirmpassword_new", message: errors.confirmNew });
    } else setErrorMessages(false)

    if (isValid) {
      try {
        // Tạo đối tượng chứa dữ liệu mới
        const updatedUser = { ...user, password: passwordNew };

        // Gửi yêu cầu cập nhật thông tin người dùng vào API sử dụng Axios
        // eslint-disable-next-line no-unused-vars
        const response = await axios.put(`https://61bfdf3ab25c3a00173f4f15.mockapi.io/users/${user.id}`, updatedUser);
        // console.log('Updated data:', response.data);
        alertToast(toast, "đổi mật khẩu thành công!", "success");
        setShowPass(false);
        navigate('/logout')

      }
      catch (error) {
        console.error(error);
        // Xử lý và hiển thị thông báo lỗi nếu cần
      }
    }
  };



  //Xoá sản phẩm khỏi giỏ hàng
  const handleDeleteProduct = (productId) => {
    const newCart = productState.cart.filter(
      (product) => product.id !== productId
    );
    // setCartItems(newCart);
    dispatch(productActions.setCart(newCart));
  };

  useEffect(() => {
    // console.log("type", typeof (cartItems));
    if (!cartItems.length !== 0) {
      const totalPrice = cartItems.reduce((sum, item) => {
        return sum + item.priceAfterDis * item.quantity;
      }, 0);
      setTotal(totalPrice);
    }
  }, [cartItems]);

  useEffect(() => {
    if (user === null) setIsLoggedin(false);
    else setIsLoggedin(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // / xóa từ tìm kiếm

  const handleClearSearch = () => {
    setSearchValue("");
    dispatch(productActions.setSearchResult(products));
    productState.searchName = false;
  };

  return (
    <Navigation
      isLoggedin={isLoggedin}
      logo={logo}
      FontAwesomeIcon={FontAwesomeIcon}
      faMagnifyingGlass={faMagnifyingGlass}
      faCartShopping={faCartShopping}
      faBars={faBars}
      setSearchValue={setSearchValue}
      products={products}
      handleSearchClick={handleSearchClick}
      search={search}
      handleShowSidebar={handleShowSidebar}
      total={total}
      handleShowCart={handleShowCart}
      showCart={showCart}
      showBars={showBars}
      cartItems={cartItems}
      handleDeleteProduct={handleDeleteProduct}
      isproductDetail={isproductDetail}
      handleshowinfo={handleshowinfo}
      showInfor={showInfor}
      user={user}
      handleShowChangePass={handleShowChangePass}
      showPass={showPass}
      isProductDetailPage={isProductDetailPage}

      submiteditinfo={submiteditinfo}
      handleInputname={handleInputname}
      handleInputemail={handleInputemail}
      renderAlertMessage={renderAlertMessage}
      handleInputPasswordOld={handleInputPasswordOld}
      handleInputConfirmPasswordNew={handleInputConfirmPasswordNew}
      password={password}
      handleInputPasswordNew={handleInputPasswordNew}
      changePassword={changePassword}
      handleInputBirthday={handleInputBirthday}
      handleClearSearch={handleClearSearch}
      // handlePreviewAvatar={handlePreviewAvatar}
      avatar={avatar}
    />
  );
}
