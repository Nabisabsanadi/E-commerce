import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import BreadCrumbs from './BreadCrumbs'
import Meta from './Meta'
import Forgetpassword from './Forgetpassword';

const Login = () => {
    return (
        <>
            <Meta title={"Login"} />
            <BreadCrumbs title=" Login" />
            <div className="login-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="outh-card">
                                <h3 className='text-center mb-3'>Login</h3>
                                <form action="" className='d-flex flex-column gap-15'>
                                    <div className='mt-1'>
                                        <input type="email" name="email" className='form-control' placeholder='Enter Email' />
                                    </div>
                                    <div>
                                        <input type="password" name="password" className='form-control' placeholder='Enter Pasword' />
                                    </div>
                                    <div>
                                        <Link to="/forgotpassword">Forgetpassword</Link>
                                        <div className="mt-3 d-flex  justify-content-center gap-15 align-items-center">
                                            <button className='button border-0'>Login</button>
                                            <Link to="/signup" className="button signup">SignUp</Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
