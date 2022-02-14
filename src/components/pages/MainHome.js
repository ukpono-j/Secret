import React from 'react'
import { Link } from 'react-router-dom';
import "./MainHome.css"


function Home() {
    return (

        <>
            <nav className="main-menu">
                <div>
                    <a className="logo" href="#">
                    </a>
                </div>
                <div className="settings" />
                <div className="scrollbar" id="style-1">
                    <ul>
                    <li>
                            <a href="#">
                                <i class="fa-solid fa-heart"></i>
                                {/* <span className="nav-text">Home</span> */}
                                <Link to="/mainHome" className='nav-text'>Home</Link>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa fa-home fa-lg" />
                                {/* <span class="material-icons-outlined">
                                        feed
                                    </span> */}
                                {/* <span className="nav-text">SDC Feed</span> */}
                                <Link to="/feeds" className='nav-text'>SDC Feed</Link>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa fa-home fa-lg" />
                                <span className="nav-text">Mailbox</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="fa-brands fa-facebook-messenger"></i>
                                <span className="nav-text">Messenger</span>
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                <i class="fa-solid fa-video"></i>
                                <span className="nav-text">Live Cams</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="fa-brands fa-facebook-messenger"></i>
                                <span className="nav-text">Chatroom</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="fa-solid fa-user-group"></i>
                                <span className="nav-text">Groups</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="fa-solid fa-user-group"></i>
                                <span className="nav-text">Swingers</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="fa-solid fa-user-group"></i>
                                <span className="nav-text">Kink</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa fa-envelope-o fa-lg" />
                                <span className="nav-text">New Member</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="fa-solid fa-play"></i>
                                <span className="nav-text">Media</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa fa-envelope-o fa-lg" />
                                <span className="nav-text">Parties and Events</span>
                            </a>
                        </li>

                        <h1 className='main_sdc'>SDC</h1>
                        <li>
                            <a href="#">
                                <i class="fa-solid fa-shop"></i>
                                <span className="nav-text">SDC Shops</span>
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                <i class="fa-solid fa-address-book"></i>
                                <span className="nav-text">Contacts and Help</span>
                            </a>
                        </li>
                        <li>
                        <a href="#">
                                <i class="fa-solid fa-right-from-bracket"></i>
                                {/* <span className="nav-text">Logouts</span> */}
                                <Link className='nav-text' to="/login">Logouts</Link>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
            {/* ========================== MAIN CONTAINER ==================== */}
           <div className='main_container main-scrollbar'>
           Main Page
           </div>
        </>

    );
}

export default Home