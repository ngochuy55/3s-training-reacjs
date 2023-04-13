import '../../assets/css/Form.css'
import { Navbar } from '../../components/common/Navigation';

export function Login({
  handleChangeEmail,
  renderAlertMessage,
  handleChangePassword,
  handleSubmit,
  email,
  password
}
) {
  function Slider() {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');
    signUpButton.addEventListener('click', () => {
      container.classList.add("right-panel-active");
    });
    signInButton.addEventListener('click', () => {
      container.classList.remove("right-panel-active");
    });
  }
  return (
    <>
      <Navbar />
      <div className="container" id="container">
        <div className="form-container sign-up-container">
          <form action="#">
            <h1>Create Account</h1>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <h1 className='form-header'>Sign in</h1>
          <div className="sum-error">{renderAlertMessage("summary")}</div>
          <form >
            <input
              id='email'
              name='email'
              autoComplete="off"
              type="text"
              placeholder='Email'
              value={email}
              onChange={handleChangeEmail}
            />
            <div className="input-error">{renderAlertMessage("email")}</div>

            <input
              type="password"
              id='pass'
              name='pass'
              placeholder='Password'
              value={password}
              onChange={handleChangePassword}
            />
            <div className="input-error">{renderAlertMessage("password")}</div>

            <button onClick={handleSubmit}>Sign In</button>
          </form>
        </div>



        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-right">
              <h1>Don't have Account ?</h1>
              <button onClick={Slider} className="ghost" id="signUp">Sign Up</button>
            </div>
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>To keep connected with us please login with your personal info</p>
              <button onClick={Slider} className="ghost" id="signIn">Sign In</button>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

