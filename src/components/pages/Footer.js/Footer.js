import React from 'react';
import './Footer.css';
import { Button } from '../../Button';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { RiBuilding2Fill } from 'react-icons/ri';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Connect with us.
        </p>
        <p className='footer-subscription-text'>
          Write your name, e-mail and message.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='name'
              type='name'
              placeholder='Your Name'
            />
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <input
              className='footer-input'
              name='message'
              type='message'
              placeholder='Your Message'
            />

            <Button buttonStyle='btn--outline'>Submit</Button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Products</h2>
            <Link to='/'>Category</Link>
            <Link to='/'>Quality</Link>
            <Link to='/'>Price</Link>
            <Link to='/'>Place</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Services</h2>
            <Link to='/'>Subscription</Link>
            <Link to='/'>Price</Link>
            <Link to='/'>Other Services</Link>
            <Link to='/'>Plans</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Contacts</h2>
            <Link to='/'>Email</Link>
            <Link to='/'>Phone</Link>
            <Link to='/'>Address</Link>
            <Link to='/'>City</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Twitter</Link>
            <Link to='/'>Youtube</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              <RiBuilding2Fill className='navbar-icon' />
              BLOCK
            </Link>
          </div>
          <small className='website-rights'>BLOCK © 2021</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <FaInstagram />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <FaFacebook />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <FaTwitter />
            </Link>
            <Link
              className='social-icon-link'
              to="/"
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
