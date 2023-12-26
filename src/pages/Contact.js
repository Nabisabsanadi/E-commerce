import React from 'react';
import BreadCrumbs from './BreadCrumbs';
import Meta from './Meta';
import { IoHomeOutline } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { IoMailUnreadOutline } from "react-icons/io5";
import { LuInfo } from "react-icons/lu";

const Contact = () => {
  return (
    <>
      <Meta title={"Contact Us"} />
      <BreadCrumbs title=" Contact Us" />
      <div className="contact-wrapper py5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61102.863562926344!2d75.67633746451938!3d16.829879351845427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc6557d98aa706f%3A0xedd4a1794e8fe8d2!2sVijayapura%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700672454667!5m2!1sen!2sin" width="600" height="450"
                className="border-0  w-100"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
            <div className="col-12 mt-5">
              <div className="contact-inner-wrapper d-flex justify-content-between">
                <div>
                  <h1 className="contact-title mb-4">Contact</h1>
                  <form action="" className='d-flex flex-column gap-15'>
                    <div>
                      <input type="text" className='form-control' placeholder='Name'/>
                    </div>
                    <div>
                      <input type="email" className='form-control' placeholder='Email'/>
                    </div>
                    <div>
                      <input type="tel" className='form-control' placeholder='Mobile Number'/>
                    </div>
                    <div>
                      <textarea name="" id="" cols="30" rows="4" placeholder='Comments' className='form-control'>

                      </textarea>
                    </div>
                    <button className="button border-0">Submit</button>
                  </form>
                </div>
                <div>
                  <h1 className="contact-title mb-4">Get in touch with us</h1>
                  <div>
                    <ul className='ps-0'>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                      <IoHomeOutline className='fs-5'/>
                      <address className='mb-0'>Hno:123, Near Ganesh Medical Ramnagar vijayapur-01</address>
                      </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                      <FiPhoneCall className='fs-5'/>
                      <a href="tel:+91 9900990099">+91 9900990099</a>
                      </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                      <IoMailUnreadOutline className='fs-5'/>
                      <a href="mailto:abc@gmail.com">abc@gmail.com</a>
                      </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                      <LuInfo className='fs-5'/>
                      <p  className='mb-0'>Monday - Friday 9 AM to 6 PM</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
