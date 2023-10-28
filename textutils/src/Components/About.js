import React, { useEffect } from 'react'
import self from '../Images/om-gupta.jpg'

export default function About(props) {

    useEffect(() => {
        props.setActivePage('about-us')
    })

    return (
        <>
            <div className="d-flex justify-content-center align-items-center my-2">
                <img src={self} class="mx-2" style={{ maxHeight: "150px", borderRadius: "100%", border: "2px solid", borderColor: props.secondary }} alt="Om Gupta" />
                <div class="border-0 card mx-2" style={{ maxHeight: "130px", color: props.secondary, backgroundColor: props.primary }}>
                    <div class="card-body">
                        <h5 class="card-title">Om Gupta</h5>
                        <h6 class="card-subtitle mb-2">Full Stack Software Engineer</h6>
                        <p class="card-text">Phone : +91 9839007747<br />Email : ogupta261@gmail.com</p>
                        {/* <p class="card-text"></p> */}
                    </div>
                </div>
            </div>
            <div class="card text-center mx-auto border-0" style={{ color: props.secondary, backgroundColor: props.primary }}>
                {/* <div class="card-header">
                    Quote
                </div> */}
                <div class="card-body">
                    <blockquote class="blockquote mb-0">
                        <p>You always have a little left in you. Try and DO MORE!</p>
                        <footer class="blockquote-footer" style={{ color: props.secondary }}>Om Gupta in <cite title="Source Title">Full Senses</cite> #NoPun</footer>
                    </blockquote>
                </div>
            </div>
        </>
    )
}
