import React from 'react';
import { useState ,useEffect } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import { MapPinHouse } from 'lucide-react';

const HeaderTwo= () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const openMenu = () => {
        setIsMenuOpen(true);
      };
    const closeMenu = () => {
        setIsMenuOpen(false);
      };
    
   
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
          setWindowWidth(window.innerWidth);
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
    return (
        <>
            <header className="header-style-1"> 
                <div className="header-topbar topbar-style-1">
                    <div className="container">
                        <div className="row justify-content-between align-items-center">
                            <div className="col-xl-8 col-lg-8 col-sm-6">
                                <div className="header-contact text-center text-sm-start text-lg-start">
                                    <div className='text-white'>
                                    <MapPinHouse/> 1010 Moon ave, New Delhi, IND
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-4 col-lg-4 col-sm-6">
                                <div className="header-socials text-center text-lg-end">
                                    <ul className="list-inline">
                                        <li className="list-inline-item"><Link to=""><i className="fab fa-facebook-f"></i></Link></li>
                                        <li className="list-inline-item"><Link to="#"><i className="fab fa-twitter"></i></Link></li>
                                        <li className="list-inline-item"><Link to="#"><i className="fab fa-linkedin-in"></i></Link></li>
                                        <li className="list-inline-item"><Link to="#"><i className="fab fa-pinterest"></i></Link></li>
                                        <li className="list-inline-item"><Link to="#"><i className="fab fa-youtube"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <div className={`header-navbar navbar-sticky ${windowWidth <= 991 ? 'mobile-menu' : ''}`} >
                <div className="container height-200">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="site-logo">
                            <Link to="#">
                                <img src={`${process.env.PUBLIC_URL}/assets/images/logo.png`} alt="Course Thumb" class="img-fluid"/>
                            </Link>
                        </div>
            
                        <div className="offcanvas-icon d-block d-lg-none">
                            <a href="#" onClick={openMenu} className="nav-toggler"><i className="fal fa-bars"></i></a> 
                        </div>
            
                        <nav className={ `site-navbar ms-auto ${ isMenuOpen ? 'menu-on': ''}` }>
                            <Nav/>
            
                            {isMenuOpen && (
                                <a href="#" onClick={closeMenu}  className="nav-close"><i className="fal fa-times"></i></a>
                            )}
                        </nav>
            
                        {/* <div className="header-btn d-none d-xl-block">
                            <Link to="/login" className="login">Login</Link>
                            <Link to="/register" className="btn btn-main-2 btn-sm-2 rounded">Sign up</Link>
                        </div> */}
                    </div>
                </div>
            </div>
        </header>
        </>
    )
}

export default HeaderTwo;