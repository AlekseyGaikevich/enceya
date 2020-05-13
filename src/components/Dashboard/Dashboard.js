/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Dashboard.scss';
import '../../App.scss';
import logoFooter from '../../assets/img/logo_footer.svg';
import logoHeader from '../../assets/img/logo_header.svg';
import { Link } from 'react-router-dom';
import twitter from '../../assets/img/social_icons/twitter.svg';

const Dashboard = () => {
  return <div className="web">

    <section className="header">
      <div className="logotype">
        <img src={logoHeader} className="logo_enceya" alt="enceya" />
      </div>
      <div className="about">
        <p>We are an automated design studio</p>
        <p>We make modern website designs, applications,</p>
        <p>brands, and services</p>
      </div>
      <Link to="/login" className="btn_started">
        <span>Get started</span>
      </Link>
      <Link to="/login" className="link_sign_in">
        <span>Sign In</span>
      </Link>
    </section>

    <section className="what_we_do">
      <div className="gradient" />
      <div className="what_we_do__header">What we do</div>
      <div className="what_we_do__items">
        <p>Website design</p>
        <p>Apps design</p>
        <p>Logo design</p>
        <p>Service design</p>
        <p>System design</p>
        <p>Technical design</p>
        <p>Branding Naming</p>
      </div>
    </section>

    <section className="how_we_work">
      <div className="how_we_work__header">How we work</div>
      <div className="how_we_work__step1">
        <div className="stroke" />
        <p className="step1">STEP 1</p>
        <p className="name">
          Click the "Get started" button and fill out the form
          </p>
        <p className="form_name">
          In the form, you describe your project in detail and fill out all the necessary information
          </p>
        {/*<div className="img1"/>*/}
      </div>
      <div className="how_we_work__step2">
        <div className="stroke" />
        <p className="step1">STEP 2</p>
        <p className="name">
          You will be taken to your account with your projects
        </p>
        <p className="form_name">
          In your account you can monitor the progress of work, the amount of working time, the cost of work, as well as contact us directly
        </p>
        {/*<div className="img1"/>*/}
      </div>
      <div className="how_we_work__step3">
        <div className="stroke" />
        <p className="step1">STEP 3</p>
        <p className="name">
          Get your completed project
        </p>
        <p className="form_name">
          Get access to the finished project through your account
        </p>
        {/*<div className="img1"/>*/}
      </div>
    </section>

    <section className="helper">
      <div className="gradient" />
      <p className="helper_content">
        We help businesses, startups, and just people to order and get a unique, high-quality design easily and quickly
      </p>
      <Link to="/login" className="btn_started">
        <span>Get started</span>
      </Link>
    </section>

    <footer className="footer">
      <nav className="footer_social">
        <a className="twitter_icon" href="#" target="_blank" />
        <a className="inst_icon" href="#" target="_blank" />
        <a className="dribbble_icon" href="#" target="_blank" />
        <a className="behance_icon" href="#" target="_blank" />
        <a className="mail_icon" href="#" target="_blank" />
      </nav>
      <img src={logoFooter} className="footer_logotype" alt="enceya" />
      <div className="footer_year">2020</div>
    </footer>

  </div>;
};

export default Dashboard;
