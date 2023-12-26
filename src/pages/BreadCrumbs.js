import React from 'react'
import { NavLink, Link } from 'react-router-dom';

const BreadCrumbs = (props) => {
    const{title}=props;
  return (
    <div className='bfreadcrumb py-4 mb-0'>
      <div className="container-xxl">
        <div className="row">
            <div className="col-12">
                <p className='text-center mb-0'>
                    <Link to="/" className="text-dark">Home</Link> /{title}
                </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default BreadCrumbs
