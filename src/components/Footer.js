import React from 'react'
import { Link } from 'react-router-dom';
import {BsLinkedin,BsGithub,BsYoutube,BsInstagram} from 'react-icons/bs';
const Footer = () => {
  return (
    <>
      <footer className='py-4'>
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex align-items-center gap-30">
                <img src="images/newsletter.png" alt="newsletter" />
                <h2 className='text-white mb-0'>Sign up for Newsletter</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input type="text" className='form-control py-1'
                  placeholder='Your Email Address'
                  aria-label='Your Email Address'
                  aria-describedby='Basic-addon2'
                />
                <span className='input-group-text p-2' id='basic-addon2'>
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className="container-xxl">
          <div className="row d-flex align-items-center">
            <div className="col-4">
              <h4 className='text-white mb-4'>Contact  Us</h4>
              <div>
                <address className='text-white fs-7'>
                  Hno:455 Near Rahim Nagar Vijayapur, <br/>Vijayapur, Karnataka<br/>
                  Pincode:131100
                </address>
                <a href="tell:+91 8618158494" className='mt-4 d-block mb-3 text-white'>+91 9900990002</a>
                <a href="mailto:demoxyz4@gmail.com" className='mt-2 d-block mb-1  text-white'>demoxyz4@gmail.com</a>
                <div className="social-icons  d-flex align-items-center gap-15  mt-4">
                  <a href="#"  className='text-white fs-4'><BsLinkedin/></a>
                  <a href="#"  className='text-white fs-4'><BsGithub /></a>
                  <a href="#"  className='text-white fs-4'><BsYoutube/></a>
                  <a href="#"  className='text-white fs-4'><BsInstagram/></a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4  className='text-white mb-4'>Information</h4>
              <div className='footer-links d-flex flex-column'>
                <Link className="text-white mb-1 py-2">Privacy policy</Link>
                <Link className="text-white mb-1 py-2">Refund Policy</Link>
                <Link className="text-white mb-1 py-2">Shipping Policy</Link>
                <Link className="text-white mb-1 py-2">Terms & Conditions</Link>
                <Link className="text-white mb-1 py-2">Blogs</Link >
              </div>
            </div>
            <div className="col-3">
              <h4  className='text-white mb-4'>Acount</h4>
              <div className='footer-links d-flex flex-column'>
                <Link className="text-white mb-1 py-2">Search</Link>
                <Link className="text-white mb-1 py-2">About Us</Link>
                <Link className="text-white mb-1 py-2">Faq</Link>
                <Link className="text-white mb-1 py-2">Contact</Link>
                <Link className="text-white mb-1 py-2">Size Chart</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className='text-white mb-4'>Quick-Links</h4>
              <div className='footer-links d-flex flex-column'>
                <Link className="text-white mb-1 py-2">Laptop</Link>
                <Link className="text-white mb-1 py-2">Headphones</Link>
                <Link className="text-white mb-1 py-2">Tablets</Link>
                <Link className="text-white mb-1 py-2">Watch</Link>
              </div>
            </div>
          </div>
        </div>

      </footer>
      <footer className='py-4'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className='text-center mb-0 text-white'>&copy;{new Date().getFullYear()};Powered By Nabisab Sanadi</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer
