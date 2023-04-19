import { Link } from "react-router-dom";

import './Page.css';

function Page() {
    return (
        <div>
            <div class="container-fluid">
                <nav>
                    <div class="logo">
                        <a href="#">Gundam<span>Info.</span></a>
                    </div>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="testing.html" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Series
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="testing.html">Main Timeline</a></li>
                                <li><a class="dropdown-item" href="testing.html">Alternative Timeline </a></li>
                            </ul>
                        </li>
                        <li><a href="#">Movies</a></li>
                    </ul>
                    <div class="buttons">
                        <a href="#" class="login" data-bs-toggle="modal" data-bs-target="#signInModal">Log in</a>
                        <a class="btn" data-bs-toggle="modal" data-bs-target="#contactUsModal">Contact Us</a>
                    </div>
                </nav>
                <div class="content">
                    <h2>Mobile Suit Gundam<br/>Witch From Mercury</h2>
                    <p>This Witch Rides a Gundam<br/>Simulcast planned for outside Japan from April</p>
                </div>
                <div class="link">
                    <Link to="/testing" className="seeMore" >See More</Link>
                </div>
            </div>
            {/* modal Login */}
            <div class="modal fade" id="signInModal" tabindex="-1" aria-labelledby="signInModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <button type="button" class="btn-close btn-close-signin-modal" data-bs-dismiss="modal" aria-label="Close"></button>
                    <div class="signin">
                        <div class="pb_41" style={{color: "azure"}}>Sign in</div>
                        <div>
                        <input
                            class="form-control input_email"
                            type="email"
                            id="email"
                            placeholder="Enter phone number or email address"
                        />
                        </div>
                        <div
                        class="form-check form-switch d-flex justify-content-center align-items-center mt_24"
                        >
                        <input
                            class="form-check-input"
                            type="checkbox"
                            role="switch"
                            id="flexSwitchCheckDefault"
                            style={{margin : 0}}
                        />
                        <label
                            class="form-check-label or_text"
                            for="flexSwitchCheckDefault"
                            >Keep me signed in</label
                        >
                        </div>
                
                        <div class="d-flex flex-column">
                        <button type="button" class="btn btn-warning mt_24 btn_signin">
                            Sign In
                        </button>
                        <button type="button" class="btn btn-link mt_24 btn_signup">
                            Sign Up
                        </button>
                        </div>
                
                        <div class="or_text mt_24" style={{textAlign : "center"}}>or</div>
                
                        <div class="d-flex flex-column mt_24" style={{gap : "12px"}}>
                        <button type="button" class="btn btn-light btn_sosmed" style={{color: "black"}}>
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-google"
                            viewBox="0 0 16 16"
                            >
                            <path
                                d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"
                            />
                            </svg>
                            Continue with Google
                        </button>
                        <button type="button" class="btn btn-light btn_sosmed" style={{color: "black"}}>
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="#1976D2"
                            class="bi bi-facebook"
                            viewBox="0 0 16 16"
                            >
                            <path
                                d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
                            />
                            </svg>
                            Continue with Facebook
                        </button>
                        <button type="button" class="btn btn-light btn_sosmed" style={{color: "black"}}>
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-apple"
                            viewBox="0 0 16 16"
                            >
                            <path
                                d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z"
                            />
                            <path
                                d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z"
                            />
                            </svg>
                            Continue with Apple
                        </button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            {/* modal contact us */}
            <div class="modal fade" id="contactUsModal" tabindex="-1" aria-labelledby="contactUsModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <button type="button" class="btn-close btn-close-signin-modal" data-bs-dismiss="modal" aria-label="Close"></button>
                    <div class="background">
                        <div class="container">
                        <div class="screen">
                            <div class="screen-header">
                            <div class="screen-header-left">
                                <div class="screen-header-button close"></div>
                                <div class="screen-header-button maximize"></div>
                                <div class="screen-header-button minimize"></div>
                            </div>
                            <div class="screen-header-right">
                                <div class="screen-header-ellipsis"></div>
                                <div class="screen-header-ellipsis"></div>
                                <div class="screen-header-ellipsis"></div>
                            </div>
                            </div>
                            <div class="screen-body">
                            <div class="screen-body-item left">
                                <div class="app-title">
                                <span>CONTACT</span>
                                <span>US</span>
                                </div>
                                <div class="app-contact">CONTACT INFO : ridhoputra34@gmail.com</div>
                            </div>
                            <div class="screen-body-item">
                                <div class="app-form">
                                <div class="app-form-group">
                                    <input class="app-form-control" placeholder="NAME" value="Insert Name"/>
                                </div>
                                <div class="app-form-group">
                                    <input class="app-form-control" placeholder="EMAIL"/>
                                </div>
                                <div class="app-form-group">
                                    <input class="app-form-control" placeholder="CONTACT NO"/>
                                </div>
                                <div class="app-form-group message">
                                    <input class="app-form-control" placeholder="MESSAGE"/>
                                </div>
                                <div class="app-form-group buttons">
                                    <button class="app-form-button">CANCEL</button>
                                    <button class="app-form-button">SEND</button>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    
                    </div>
                </div>
            </div>
        </div>
    );   
}

export default Page;
