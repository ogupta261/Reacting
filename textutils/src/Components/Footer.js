import React from 'react'
import logo from '../Images/favicon-16x16.png'

export default function Footer(props) {

    return (
        <>
            <footer className="d-flex flex-wrap py-3 my-4 justify-content-evenly align-items-center border-top align-self-bottom my-auto w-100" style={{ backgroundColor: props.secondary, marginTop: '50px', position: 'relative', bottom: 0, left: 0 }}>
                <div className="col-md-4 d-flex align-items-center">
                    <img className='rounded-circle mx-2' src={logo} alt="" />
                    <span className="mb-md-0" style={{ color: props.primary }}>© 2023 Company, Inc</span>
                </div>

                <ul className="nav col-md-4 justify-content-end align-items-center">
                    <li className="ms-3" >
                        <a href="#!" data-bs-toggle="popover" data-bs-placement="top" data-bs-trigger="hover focus" data-bs-content="Send your suggestions!">
                            <i className="fa-solid fa-pen-to-square p-2" style={{ color: props.primary, borderRadius: '100%', boxShadow: `0px 0px 2px 0px ${props.primary}` }} />
                        </a>
                    </li>
                    <li className="ms-3">
                        <a href="https://github.com/ogupta261" target='_main' data-bs-toggle="popover" data-bs-placement="top" data-bs-trigger="hover focus" data-bs-content="Fork Me!">
                            <i className="fa-brands fa-github p-2" style={{ color: props.primary, borderRadius: '100%', boxShadow: `0px 0px 2px 0px ${props.primary}` }} />
                        </a>
                    </li>
                    <li className="ms-3">
                        <a href="https://www.linkedin.com/in/ogupta261/" target='_main' data-bs-toggle="popover" data-bs-placement="top" data-bs-trigger="hover focus" data-bs-content="Let's Connect!">
                            <i className="fa-brands fa-linkedin-in p-2" style={{ color: props.primary, borderRadius: '100%', boxShadow: `0px 0px 2px 0px ${props.primary}` }} />
                        </a>
                    </li>
                    <li className="ms-3">
                        <a href="https://wa.me/919839007747?text=Hi%20Om%2C%0AI%20looked%20into%20your%20portfolio%20%22Reacting%22.%20%3Cyour%20message%3E%0A%0AThanks%2C%0A%3CYour%20Name%3E" target='_main' data-bs-toggle="popover" data-bs-placement="top" data-bs-trigger="hover focus" data-bs-content="Message Me!">
                            <i className="fa-brands fa-whatsapp p-2" style={{ color: props.primary, borderRadius: '100%', boxShadow: `0px 0px 2px 0px ${props.primary}` }} />
                        </a>
                    </li>
                </ul>
            </footer>
        </>
    )
}
