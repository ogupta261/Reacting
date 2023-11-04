import React, { useEffect } from 'react'
import Card from './Card'
import self from '../Images/om-gupta.jpeg'

export default function About(props) {

    useEffect(() => {
        props.setActivePage('about-us')
    })

    return (
        <div className='row' style={{ color: props.secondary }}>
            <div className="d-flex justify-content-center align-items-center flex-wrap my-2 animate">
                <img src={self} className="mx-2" style={{ maxHeight: "150px", borderRadius: "100%", border: "2px solid", borderColor: props.primary, boxShadow: `1px 1px 10px 0px ${props.secondary}` }} alt="Om Gupta" />
                <div className="border-0 card mx-2 my-2" style={{ height: "fit-content", color: props.secondary, background: 'transparent' }}>
                    <div className="card-body">
                        <h5 className="card-title">Om Gupta</h5>
                        <h6 className="card-subtitle mb-2">Full Stack Software Engineer</h6>
                        <p className="card-text fw-lighter"><span className='fw-normal'>Phone :</span> <a href="tel:+919839007747" style={{ color: props.secondary }}>+91 9839007747</a><br /><span className='fw-normal'>Email :</span> <a href="mailto:ogupta261@gmail.com?subject=Reacting%20%3A%20I%20am%20interested%20in%20your%20profile&body=Hi%20Om%2C%0A%0AThis%20is%20regarding%20%3Cyour_purpose%3E.%0A%3Cyour_content%3E%0A%0ARegards%2C%0A%3Cyour_name%3E%0A%3Cyour_contact%3E%0A%0A***%20P.S.%20%3A%20you%20can%20edit%20the%20whole%20thing%20too%20%3AP%20***" style={{ color: props.secondary }}>ogupta261@gmail.com</a></p>
                        {/* <p className="card-text"></p> */}
                    </div>
                </div>
            </div>
            <div className="card text-center mx-auto border-0 animate bg-transparent" style={{ color: props.secondary, backgroundColor: props.primary }}>
               {/* <div className="card-header">
                    Quote
                </div> */}
                <div className="card-body">
                    <blockquote className="blockquote mb-0">
                        <p>You always have a little left in you. Try and DO MORE!</p>
                        <footer className="blockquote-footer animate" style={{ color: props.secondary }}>Om Gupta in <cite title="Source Title">Full Senses</cite> #NoPun</footer>
                    </blockquote>
                </div>
            </div>
            <div className="accordion my-3" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button fs-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne" style={{ color: props.primary, backgroundColor: props.secondary }}>
                            Skills
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={{ color: props.primary, backgroundColor: props.secondary }}>
                        <div className="accordion-body">
                            <h3 className='mt-3 mb-2'>Programming Languages :</h3>
                            <div className="row g-2 justify-content-start align-items-center flex-wrap">
                                <Card url='#' type='icon' iconClass='fa-brands fa-java' primary={props.primary} secondary={props.secondary} title='Java' />
                                <Card url='#' type='icon' iconClass='fa-brands fa-square-js' primary={props.primary} secondary={props.secondary} title='JavaScript' />
                                <Card url='#' type='icon' iconClass='fa-brands fa-glide-g' primary={props.primary} secondary={props.secondary} title='Groovy' />
                                <Card url='#' type='icon' iconClass='fa-solid fa-diagram-project' primary={props.primary} secondary={props.secondary} title='GraphQL' />
                            </div>
                            <h3 className='mt-3 mb-2'>Frameworks and Libraries :</h3>
                            <div className="row g-2 justify-content-start align-items-center flex-wrap">
                                <Card url='#' type='icon' iconClass='fa-solid fa-leaf' primary={props.primary} secondary={props.secondary} title='Spring Boot' />
                                <Card url='#' type='icon' iconClass='fa-brands fa-angular' primary={props.primary} secondary={props.secondary} title='Angular' />
                                <Card url='#' type='icon' iconClass='fa-brands fa-react' primary={props.primary} secondary={props.secondary} title='React' />
                                <Card url='#' type='icon' iconClass='fa-solid fa-database' primary={props.primary} secondary={props.secondary} title='Hibernate' />
                                <Card url='#' type='icon' iconClass='fa-regular fa-star' primary={props.primary} secondary={props.secondary} title='Spark' />
                                <Card url='#' type='icon' iconClass='fa-solid fa-share-nodes' primary={props.primary} secondary={props.secondary} title='Kafka' />
                            </div>
                            <h3 className='mt-3 mb-2'>Methodologies and Design Patterns :</h3>
                            <div className="row g-2 justify-content-start align-items-center flex-wrap">
                                <Card url='#' type='icon' iconClass='fa-solid fa-gears' primary={props.primary} secondary={props.secondary} title='Microservices' />
                                <Card url='#' type='icon' iconClass='fa-solid fa-arrows-spin' primary={props.primary} secondary={props.secondary} title='Agile' />
                                <Card url='#' type='icon' iconClass='fa-solid fa-wind fa-rotate-90' primary={props.primary} secondary={props.secondary} title='Waterfall' />
                            </div>
                            <h3 className='mt-3 mb-2'>Web Development :</h3>
                            <div className="row g-2 justify-content-start align-items-center flex-wrap">
                                <Card url='#' type='icon' iconClass='fa-brands fa-html5' primary={props.primary} secondary={props.secondary} title='Html' />
                                <Card url='#' type='icon' iconClass='fa-brands fa-css3-alt' primary={props.primary} secondary={props.secondary} title='CSS' />
                                <Card url='#' type='icon' iconClass='fa-brands fa-node' primary={props.primary} secondary={props.secondary} title='Node.js' />
                            </div>
                            <h3 className='mt-3 mb-2'>Database Management :</h3>
                            <div className="row g-2 justify-content-start align-items-center flex-wrap">
                                <Card url='#' type='icon' iconClass='fa-solid fa-database' primary={props.primary} secondary={props.secondary} title='MySQL' />
                                <Card url='#' type='icon' iconClass='fa-regular fa-snowflake' primary={props.primary} secondary={props.secondary} title='Snowflake' />
                            </div>
                            <h3 className='mt-3 mb-2'>Version Control :</h3>
                            <div className="row g-2 justify-content-start align-items-center flex-wrap">
                                <Card url='#' type='icon' iconClass='fa-brands fa-github' primary={props.primary} secondary={props.secondary} title='Github' />
                                <Card url='#' type='icon' iconClass='fa-brands fa-gitlab' primary={props.primary} secondary={props.secondary} title='Github' />
                            </div>
                            <h3 className='mt-3 mb-2'>Testing and Debugging :</h3>
                            <div className="row g-2 justify-content-start align-items-center flex-wrap">
                                <Card url='#' type='icon' iconClass='fa-brands fa-maxcdn' primary={props.primary} secondary={props.secondary} title='Mockito' />
                                <Card url='#' type='icon' iconClass='fa-brands fa-java' primary={props.primary} secondary={props.secondary} title='JUnit' />
                                <Card url='#' type='icon' iconClass='fa-solid fa-j' primary={props.primary} secondary={props.secondary} title='Jest' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed fs-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{ color: props.primary, backgroundColor: props.secondary }}>
                            Work
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={{ color: props.primary, backgroundColor: props.secondary }}>
                        <div className="accordion-body">
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed fs-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{ color: props.primary, backgroundColor: props.secondary }}>
                            Education
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={{ color: props.primary, backgroundColor: props.secondary }}>
                        <div className="accordion-body">
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
