//func check blank of email and password: hàm kiểm tra 2 ô input không được nhập
export function isBlank(email, pass) {
  // return ((email === '' && pass === '') || (email === undefined && pass === undefined))
  return (!email || !pass || email.length === 0 || pass.length === 0);
}
//func validate Email: hàm xác định component là email
export function isEmail(email) {
  // eslint-disable-next-line no-useless-escape
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return regex.test(email);
}

export function isBlankValue(email) {
  // return ((email === '' && pass === '') || (email === undefined && pass === undefined))
  return (!email || email.length === 0);
}

export function alertToast(toast, title, type) {
  toast[type](title, {
    position: "top-center",
    autoClose: 1500,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
}
