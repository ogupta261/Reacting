import React, { useEffect } from 'react'
import Card from './Card'
import self from '../Images/om-gupta.jpeg'
import intraedge from '../Images/intraedge.png'
import wissen from '../Images/wissen.png'
import capgemini from '../Images/capgemini.png'


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
                        <p className="card-text fw-lighter">
                            <span className='fw-normal'>Phone :</span>
                            <a href="tel:+919839007747" style={{ color: props.secondary }}>+91 9839007747</a>
                            <br />
                            <span className='fw-normal'>Email :</span>
                            <a href="mailto:ogupta261@gmail.com?subject=Reacting%20%3A%20I%20am%20interested%20in%20your%20profile&body=Hi%20Om%2C%0A%0AThis%20is%20regarding%20%3Cyour_purpose%3E.%0A%3Cyour_content%3E%0A%0ARegards%2C%0A%3Cyour_name%3E%0A%3Cyour_contact%3E%0A%0A***%20P.S.%20%3A%20you%20can%20edit%20the%20whole%20thing%20too%20%3AP%20***" style={{ color: props.secondary }}>ogupta261@gmail.com</a>
                        </p>
                        <p className="card-text text-start mt-2" style={{ color: props.secondary }}>
                            <strong>About</strong>
                            <br />
                            I am Om Gupta, a Full Stack Software Engineer with experience building and delivering scalable, production-grade web and data platforms. Over the last several years I have designed and implemented microservice architectures, real-time data pipelines and user-facing applications using Java/Spring Boot, React/Angular, Apache Kafka, Apache Spark, and NiFi. I have worked across finance and logistics domains (Goldman Sachs, Citizens Bank, Kuehne + Nagel) on cross-functional teams to improve reliability, automate operational reporting, and deliver new product features. I enjoy designing pragmatic systems, optimizing data flows, and mentoring teammates — currently looking for opportunities to solve large-scale data and backend problems while continuing to build modern full-stack products.
                        </p>
                        <div className="mt-2">
                            <a href="/Om_New_CV.pdf" className="btn btn-outline-primary" download style={{ color: props.secondary, borderColor: props.secondary }}>Download CV</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card text-center mx-auto border-0 animate bg-transparent" style={{ color: props.secondary, backgroundColor: props.primary }}>
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
                                <Card url='#' type='icon' iconClass='fa-brands fa-square-js' primary={props.primary} secondary={props.secondary} title='TypeScript' />
                                <Card url='#' type='icon' iconClass='fa-brands fa-square-js' primary={props.primary} secondary={props.secondary} title='JavaScript' />
                                <Card url='#' type='icon' iconClass='fa-brands fa-python' primary={props.primary} secondary={props.secondary} title='Python' />
                                <Card url='#' type='icon' iconClass='fa-brands fa-groovy' primary={props.primary} secondary={props.secondary} title='Groovy' />
                                <Card url='#' type='icon' iconClass='fa-solid fa-diagram-project' primary={props.primary} secondary={props.secondary} title='GraphQL' />
                            </div>
                            <h3 className='mt-3 mb-2'>Frameworks and Libraries :</h3>
                            <div className="row g-2 justify-content-start align-items-center flex-wrap">
                                <Card url='#' type='icon' iconClass='fa-solid fa-leaf' primary={props.primary} secondary={props.secondary} title='Spring Boot' />
                                <Card url='#' type='icon' iconClass='fa-brands fa-angular' primary={props.primary} secondary={props.secondary} title='Angular' />
                                <Card url='#' type='icon' iconClass='fa-brands fa-react' primary={props.primary} secondary={props.secondary} title='React' />
                                <Card url='#' type='icon' iconClass='fa-solid fa-database' primary={props.primary} secondary={props.secondary} title='Hibernate' />
                                <Card url='#' type='icon' iconClass='fa-regular fa-star' primary={props.primary} secondary={props.secondary} title='Apache Spark' />
                                <Card url='#' type='icon' iconClass='fa-solid fa-share-nodes' primary={props.primary} secondary={props.secondary} title='Apache Kafka' />
                                <Card url='#' type='icon' iconClass='fa-solid fa-water' primary={props.primary} secondary={props.secondary} title='Apache NiFi' />
                                <Card url='#' type='icon' iconClass='fa-brands fa-react' primary={props.primary} secondary={props.secondary} title='React Native' />
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
                                <Card url='#' type='icon' iconClass='fa-brands fa-js' primary={props.primary} secondary={props.secondary} title='TypeScript' />
                                <Card url='#' type='icon' iconClass='fa-brands fa-react' primary={props.primary} secondary={props.secondary} title='React' />
                            </div>
                            <h3 className='mt-3 mb-2'>Database Management :</h3>
                            <div className="row g-2 justify-content-start align-items-center flex-wrap">
                                <Card url='#' type='icon' iconClass='fa-solid fa-database' primary={props.primary} secondary={props.secondary} title='MySQL' />
                                <Card url='#' type='icon' iconClass='fa-regular fa-snowflake' primary={props.primary} secondary={props.secondary} title='Snowflake' />
                                <Card url='#' type='icon' iconClass='fa-solid fa-database' primary={props.primary} secondary={props.secondary} title='Postgres' />
                            </div>
                            <h3 className='mt-3 mb-2'>Version Control & CI/CD :</h3>
                            <div className="row g-2 justify-content-start align-items-center flex-wrap">
                                <Card url='#' type='icon' iconClass='fa-brands fa-github' primary={props.primary} secondary={props.secondary} title='Github' />
                                <Card url='#' type='icon' iconClass='fa-brands fa-gitlab' primary={props.primary} secondary={props.secondary} title='GitLab' />
                                <Card url='#' type='icon' iconClass='fa-solid fa-wrench' primary={props.primary} secondary={props.secondary} title='Jenkins / CI' />
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
                        <button className="accordion-button collapsed fs-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="#collapseTwo">
                            Work
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={{ color: props.primary, backgroundColor: props.secondary }}>
                        <div className="accordion-body">
                            <div className="d-flex flex-column">
                                <div className="d-flex flex-row align-items-center flex-wrap">
                                    <Card url='#' image={wissen} primary={props.primary} secondary={props.secondary} title='Wissen Technology' caption='Feb-2024 TO Present' />
                                    <div className="p-2" style={{ maxWidth: '900px' }}>
                                        <h2>Sr. Software Engineer</h2>
                                        <h6>Client : Goldman Sachs</h6>
                                        <ol type='I'>
                                            <li><strong>Management Information Alerts</strong> - Automated delivery of operational metrics with Spark, Kafka, and NiFi, ensuring 100% accuracy, zero manual intervention and reduced SLA breaches by 40%.</li>
                                            <li><strong>Parameter Management System</strong> - Engineered a secure, multi-step workflow for managing business parameters with audit trails, improving change traceability and reducing parameter-related defects by 35%.</li>
                                            <li><strong>Org Chart</strong> - Built a custom multi-threaded solution for user onboarding, leveraging Excel-based bulk uploads, reducing onboarding time by 70% and eliminating manual errors.</li>
                                            <li><strong>WiseEngage</strong> - Developed a React Native social media app for localized employee engagement, improving internal adoption and communication.</li>
                                        </ol>
                                    </div>
                                </div>
                                <div className="d-flex flex-row align-items-center flex-wrap">
                                    <Card url='#' image={intraedge} primary={props.primary} secondary={props.secondary} title='Intraedge' caption='Jun-2023 TO Feb-2024' />
                                    <div className="p-2" style={{ maxWidth: '900px' }}>
                                        <h2>Sr. Software Engineer</h2>
                                        <h6>Client : Citizens Bank</h6>
                                        <ol type='I'>
                                            <li><strong>Student Loan Application</strong> - Delivered high performance student loan features using Angular, Java and Spring Boot in a microservices architecture, improving throughput and reducing latency.</li>
                                            <li>Collaborated closely with business teams <strong>reducing incident reports by 20%</strong>, performing detailed root cause analysis, and implementing durable fixes.</li>
                                            <li>Managed and monitored automated report generation jobs in coordination with the data team, <strong>ensuring 100% data accuracy</strong> and uninterrupted delivery of regulatory reports.</li>
                                        </ol>
                                    </div>
                                </div>
                                <div className="d-flex flex-row align-items-center flex-wrap">
                                    <Card url='#' image={wissen} primary={props.primary} secondary={props.secondary} title='Wissen Technology' caption='Jun-2022 TO May-2022' />
                                    <div className="p-2" style={{ maxWidth: '900px' }}>
                                        <h2>Associate Software Engineer</h2>
                                        <h6>Client : Goldman Sachs</h6>
                                        <ol type='I'>
                                            <li><strong>Post Trade Processing</strong> - Designed and implemented pipelines for <strong>processing large volumes of trading data</strong>, enhancing throughput and resiliency across downstream systems.</li>
                                            <li>Enhanced market data applications and optimized SQL queries, resolving system issues and improving data reliability.</li>
                                        </ol>
                                    </div>
                                </div>
                                <div className="d-flex flex-row align-items-center flex-wrap">
                                    <Card url='#' image={capgemini} primary={props.primary} secondary={props.secondary} title='Capgemini' caption='Sep-2020 TO May-2022' />
                                    <div className="p-2" style={{ maxWidth: '900px' }}>
                                        <h2>Associate Consultant</h2>
                                        <h6>Client : Kuehne + Nagel</h6>
                                        <ol type='I'>
                                            <li><strong>Logistics Management System</strong> - Designed and built a modern Angular UI web application ensuring seamless integration, deprecating older UIs and improving user experience.</li>
                                            <li>Honored with the <strong>2021 S.T.A.R. Award</strong> for successfully delivering high-quality application aligned with business goals and user experience.</li>
                                            <li>Resolved over 70+ critical bugs, <strong>improving overall system stability by 25%</strong>.</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed fs-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="#collapseThree">
                            Education
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={{ color: props.primary, backgroundColor: props.secondary }}>
                        <div className="accordion-body">
                            <div className="d-flex flex-row justify-content-evenly text-center flex-wrap">
                                <div className="d-flex flex-column p-3 border border-0 rounded my-2" style={{ boxShadow: `0px 0px 5px 0.5px ${props.primary}`, minWidth: '300px', backgroundColor: props.secondary }}>
                                    <h4><strong>Chandigarh University</strong></h4>
                                    <hr />
                                    <strong className='fs-5'>Bachelor of Engineering</strong>
                                    <h5>Major : Computer Science</h5>
                                    <h5>CGPA : 7.48</h5>
                                </div>
                                <div className="d-flex flex-column p-3 border border-0 rounded my-2" style={{ boxShadow: `0px 0px 5px 0.5px ${props.primary}`, minWidth: '300px', backgroundColor: props.secondary }}>
                                    <h4><strong>Dr. V.S.E.C.</strong></h4>
                                    <hr />
                                    <strong className='fs-5'>Intermediate</strong>
                                    <h5>Major : Science + Maths</h5>
                                    <h5>GPA : 9.2</h5>
                                </div>
                                <div className="d-flex flex-column p-3 border border-0 rounded my-2 justify-content-center" style={{ boxShadow: `0px 0px 5px 0.5px ${props.primary}`, minWidth: '300px', backgroundColor: props.secondary }}>
                                    <h4 id='hs-school'><strong>Dr. V.S.E.C.</strong></h4>
                                    <hr />
                                    <strong className='fs-5'>High School</strong>
                                    <h5>Major : Science</h5>
                                    <h5>GPA : 8.8</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
