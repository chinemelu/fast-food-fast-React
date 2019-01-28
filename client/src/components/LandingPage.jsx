import { Component } from 'react';
import TextFieldGroup from './TextFieldGroup';
import FlashMessageList from './FlashMessagesList';
class LandingPage extends Component {
  render() {
    return (
      <div className="landingpage-modal">
        <div className="landingpage-modal-container">
          <ul className="switcher">
            <li><Link href="#" className="cd-login">Login</Link></li>
            <li><Link href="#" className="cd-register">Register</Link></li>
          </ul>

          <section id="login-section">
            <FlashMessageList />
            <form className="cd-form" autocomplete="off">
              <TextFieldGroup
                error={errors && errors.email}
                labelValue="Email"
                labelClass="input-label"
                labelFor="login-username-email"
                field="email"
                value={email}
                onChange={onChange}
                onBlur={onBlur}
                errorFeedbackClass="login-invalid-feedback"
                validFeedbackClass="login-valid-feedback"
                errorId="login-email-error"
                feedbackClass=""
                className="input-field"
                id="login-email"
                inputContainerClass="input-container"
              />

              <TextFieldGroup
                error={errors && errors.password}
                type="password"
                labelValue="Password"
                labelClass="input-label"
                labelFor="login-password"
                field="email"
                value={password}
                onChange={onChange}
                onBlur={onBlur}
                errorFeedbackClass="login-invalid-feedback"
                validFeedbackClass="login-valid-feedback"
                errorId="login-email-error"
                feedbackClass=""
                className="input-field"
                id="login-password"
                inputContainerClass="input-container"
              />

              {/* <p className="cd-error-message" id="login-form-error"></p>
              <div className="input-container">
                <input type="text" className="input-field" id="login-email" />
                <label className="input-label" for="login-username-email">Email</label>
                <p className="cd-error-message" id="login-email-error"></p>
              </div>
              <div className="input-container">
                <input type="password" className="input-field" id="login-password" />
                <label className="input-label" for="login-password">Password</label>
                <p className="cd-error-message" id="login-password-error"></p>
              </div> */}
              <div className="input-container">
                <input type="checkbox" id="remember-me" checked />
                <label>Remember me</label>
              </div>
              <div className="input-container">
                <input type="submit" value="LOGIN" className="submit-form-btn" id="login-form-btn" />
              </div>
              <Link id="forgot-password" href="#">Forgot password?</Link>
            </form>
          </section>


          <section id="register-section">
            <form className="cd-form" autocomplete="off">
              <p className="cd-error-message" id="reg-form-error"></p>
              <div className="input-container">
                <input type="text" className="input-field" id="register-firstname" />
                <label className="input-label" for="register-firstname">First name</label>
                <p className="cd-error-message" id="register-firstname-error"></p>
              </div>
              <div className="input-container">
                <input type="text" className="input-field" id="register-lastname" />
                <label className="input-label" for="register-lastname">Last name</label>
                <p className="cd-error-message" id="register-lastname-error"></p>
              </div>
              <div className="input-container">
                <input type="text" className="input-field" id="register-email" />
                <label className="input-label" for="register-email">Email</label>
                <p className="cd-error-message" id="register-email-error"></p>
              </div>
              <div className="input-container">
                <input type="password" className="input-field" id="register-password" />
                <label className="input-label" for="register-password">Password</label>
                <p className="cd-error-message" id="register-password-error"></p>
              </div>
              <div className="input-container">
                <input type="password" className="input-field" id="register-confirm-password" />
                <label className="input-label" for="register-confirm-password">Confirm Password</label>
                <p className="cd-error-message" id="register-confirm-password-error"></p>
              </div>
              <div className="input-container">
                <input type="submit" value="Create account" className="submit-form-btn" id="signup-form-btn" />
              </div>
            </form>
          </section>

          <section id="forgot-password-section">
            <form className="cd-form" autocomplete="off">
              <div className="input-container">
                <p className="forgot-password-header">A reset link will be sent to your email</p>
              </div>
              <div className="input-container">
                <input type="text" className="input-field" id="forgot-password-email" />
                <label className="input-label" for="forgot-password-email">Email</label>
              </div>
              <div className="input-container">
                <input type="submit" value="Send" className="submit-form-btn" />
              </div>
              <Link id="back-to-login" href="#">Back to Login</Link>
            </form>
          </section>

        </div>
      </div>


      <section id="background-image">
        <div className="background-image-text">
          <h1>We deliver your favourite meals to your doorstep</h1>
        </div>
      </section>
      <section id="products">
        <section id="breakfast">
          <article className="breakfast-img">
            <img src="./images/burger.jpg" />
          </article>
          <aside className="breakfast-text-container">
            <p className="breakfast-text">Delicious inter-continental Fast Food</p>
          </aside>
        </section>
        <section id="asian">
          <article className="asian-text-container">
            <h1 className="asian-text">Sumptuous Asian Cuisine</h1>
          </article>
          <aside className="asian-img">
            <img src="./images/Thai.jpg" />
          </aside>
        </section>
        <section id="pastries">
          <article className="cake-img">
            <img src="images/brownie-desert-cake-smaller.jpeg" />
          </article>
          <aside className="pastries-text-container">
            <h1 className="pastries-text">Yummy pastries & Snacks</h1>
          </aside>
        </section>
        <section id="african">
          <article className="african-text-container">
            <h1 className="african-text">Tantalising African Cuisine</h1>
          </article>
          <aside className="african-img">
            <img src="./images/Jollof-rice.png" />
          </aside>
        </section>
      </section>

      <div id="spinner" className="hide">
        <img id="img-spinner" src="./images/ajax-loader.gif" alt="loading" />
      </div>

      <footer className="footer">
        <p>Food Direct &copy; 2018</p>
      </footer>
  )
  }
}

export default LandingPage;
