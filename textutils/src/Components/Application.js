import React from 'react'
import noimage from '../Images/no-image.png'
import { Link } from 'react-router-dom'

export default function Application(props) {
    return (
        <div className="col-3 mx-2 my-2 rounded" style={{ width: "300px", borderColor: props.primary, backgroundColor: props.primary, boxShadow: `1px 1px 10px 0px ${props.secondary}` }}>
            <div className="p-3">
                <Link to={props.url}>
                    <figure className="figure">
                        <img src={props.image ? props.image : noimage} className="figure-img img-fluid rounded" style={{maxHeight: "150px"}} alt={props.title ? props.title : 'No Image'} />
                        {props.title && <figcaption className="figure-caption text-center fw-bold" style={{ color: props.secondary }}>{props.title}</figcaption>}
                        {props.caption && <figcaption className="figure-caption text-center lh-1" style={{ color: props.secondary }}>{props.caption}</figcaption>}
                    </figure>
                </Link>
            </div>
        </div>
    )
}
