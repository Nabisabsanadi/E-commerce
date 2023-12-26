import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import BreadCrumbs from './BreadCrumbs'
import Meta from './Meta'

const Forgetpassword = () => {
    return (
        <>
            <Meta title={"Forgot password"} />
            <BreadCrumbs title=" Forgot password" />
            <div className="row">
                        <div className="col-12">
                            <div className="outh-card shadow-sm border border border-dark">
                                <h3 className='text-center mb-3'>Reset Your Password</h3>
                                <p className="text-center mt-2 mb-2">We will send you an email to reset your password</p>
                                <form action=""  className='d-flex flex-column gap-15'>
                                    <div className='mt-1'>
                                        <input type="email" name="email" className='form-control' placeholder='Enter Email' />
                                    </div>
                                    <div>
                                        
                                        <div className="mt-3 d-flex  justify-content-center gap-15 align-items-center flex-column">
                                            <button className='button border-0' type='submit'>Submit</button>
                                            <Link to="/login">Cancel</Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

        </>
    )
}

export default Forgetpassword
