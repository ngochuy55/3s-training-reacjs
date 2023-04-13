import React from "react";
import '../assets/css/Home.css'
import Navbar from "../components/common/Navbar";
function Home() {
  document.title = "Home"
  // const user = localStorage.getItem('token-info')
  // JSON.parse(user)
  // console.log((user.username));
  return (
    <section>
      <Navbar />
      <main>
        <h1>This is Home Page</h1>
      </main>
    </section>
  )
}

export default Home;
