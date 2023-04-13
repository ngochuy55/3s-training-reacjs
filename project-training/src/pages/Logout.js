import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  localStorage.clear();
  window.location.href = '/login'
}
export default Logout;