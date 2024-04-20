import React from 'react'
import './style.scss'
import loginPage from '../../assets/imgs/loginPage.svg'
import google from '../../assets/icons/google.svg'


const LoginPage = () => {
  return (
    <div className='login-form'>
        <div className="right-sec">
            <div className="bigBox">
                <div className="txt-sec">
                    <h1>Sign In</h1>
                    <p>Enter your email and password to sign in!</p>
                </div>
                <div className="googleBtn">
                    <img src={google} alt="" />
                    <button>
                        Sign in with Google
                    </button>
                </div>

                <p>------------------------  or  --------------------------</p>

                <div className="form-sec">
                    <div className="email">
                        <h3>Email*</h3>
                        <input type="email" placeholder='mail@simmmple.com'/>
                    </div>
                    <div className="password">
                        <h3>Password*</h3>
                        <input type="password" placeholder='Min. 8 characters'/>
                    </div>
                    <div className="check">
                        <div className="input-box">
                            <input type="checkbox" />
                            <h3>Keep me logged in</h3>
                        </div>
                        <span>Forget password?</span>
                    </div>
                    <button>Sign In</button>
                    <h4>Not registered yet? <span>Create an Account</span></h4>
                </div>
            </div>

        </div>
        <div className="left-sec">
            <img src={loginPage} alt="" />
        </div>

    </div>
  )
}

export default LoginPage