import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Switcher from './Switcher.jsx';
import FlashMessageList from './FlashMessagesList.jsx';
import PreLoginNavbar from './PreLoginNavbar.jsx';
import LoginForm from './LoginForm.jsx';
import SignupForm from './SignupForm.jsx';
import ForgotPasswordForm from './ForgotPasswordForm.jsx';
import Burger from '../styles/images/burger.jpg';
import Thai from '../styles/images/Thai.jpg';
import chocolateBrownie
  from '../styles/images/brownie-desert-cake-smaller.jpeg';
import jollofRice from '../styles/images/Jollof-rice.png';

class LandingPage extends Component {
  constructor(props) {
    super(props);

    this.modal = React.createRef();
  }

  render() {
    const {
      isLoginSectionShown,
      isSignupSectionShown,
      isForgotPasswordSectionShown,
      isLoginRegistrationModalShown,
      onClickForgotPasswordLink,
      onClickLoginButton,
      onClickSignupButton,
      onClickLoginRegistrationNavLink,
      isInputFieldEmpty,
      handleOnChange,
      handleOnBlur,
      handleOutsideClick,
      handleOnInput,
      handleSignupOnBlur,
      handleSignupOnInput,
      onSubmit,
      loginErrors,
      signupErrors,
      isLoading
    } = this.props;
    return (
      <React.Fragment>
        <PreLoginNavbar
          onClickLoginRegistrationNavLink={onClickLoginRegistrationNavLink}
        />
        <FlashMessageList />

        <div
          className={`landingpage-modal ${isLoginRegistrationModalShown
            ? 'is-visible' : null}`}
          ref={(node) => { this.modal = node; }}
          onClick={handleOutsideClick}
        >
          <div className="landingpage-modal-container">
            <Switcher
              firstClassName={`cd-login
          ${isLoginSectionShown ? 'selected' : null}
          `
        }
              secondClassName={`cd-register ${isSignupSectionShown
                ? 'selected' : null}
            ${isLoginSectionShown ? null : 'selected'}
        `
          }
              firstValue="Login"
              secondValue="Register"
              listClass="switcher"
              onClickSecondSwitcher={onClickSignupButton}
              onClickFirstSwitcher={onClickLoginButton}
            />

            {isLoginSectionShown && (
            <LoginForm
              onClickForgotPasswordLink={onClickForgotPasswordLink}
              isInputFieldEmpty={isInputFieldEmpty}
              onChange={handleOnChange}
              onBlur={handleOnBlur}
              onInput={handleOnInput}
              onSubmit={onSubmit}
              loginErrors={loginErrors}
              isLoading={isLoading}
            />
            )}

            {isSignupSectionShown && (
            <SignupForm
              onChange={handleOnChange}
              onBlur={handleSignupOnBlur}
              onInput={handleSignupOnInput}
              signupErrors={signupErrors}
              isLoading={isLoading}
            />
            )}

            {isForgotPasswordSectionShown && (
            <ForgotPasswordForm
              onClickLoginButton={onClickLoginButton}
              onBlur={handleOnBlur}
              onChange={handleOnChange}
              isLoading={isLoading}
            />
            )}

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
              <img src={Burger} />
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
              <img src={Thai} />
            </aside>
          </section>
          <section id="pastries">
            <article className="cake-img">
              <img src={chocolateBrownie} />
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
              <img src={jollofRice} />
            </aside>
          </section>
        </section>
      </React.Fragment>
    );
  }
}

LandingPage.propTypes = {
  onClickLoginRegistrationNavLink: PropTypes.func.isRequired
};

export default LandingPage;
