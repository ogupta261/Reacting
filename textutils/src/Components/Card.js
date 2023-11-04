import React from 'react'
import noimage from '../Images/no-image.png'
import { Link } from 'react-router-dom'

export default function Card(props) {
    return (
        <>
            <div className="mx-2 my-2 rounded animate" style={{ width: !props.type ? "300px" : "fit-content", backgroundColor: props.primary, boxShadow: !props.type ? `0px 0px 5px 0px ${props.primary}` : `0px 0px 2px 0px ${props.primary}` }}>
                <div className="p-3">
                    <Link to={props.url}>
                        <figure className="figure">
                            {(!props.type || props.type === 'image') && <img src={props.image ? props.image : noimage} className="figure-img img-fluid rounded" style={{ maxHeight: "150px" }} alt={props.title ? props.title : 'No Image'} />}
                            {props.type === 'icon' && <i className={`p-2 ${props.iconClass}`} style={{ color: props.secondary, fontSize: "30px" }}></i>}
                            {props.title && <figcaption className="figure-caption text-center fw-bold animate text-wrap" style={{ color: props.secondary }}>{props.title}</figcaption>}
                            {props.caption && <figcaption className="figure-caption text-center lh-1 animate text-wrap" style={{ color: props.secondary }}>{props.caption}</figcaption>}
                        </figure>
                    </Link>
                </div>
            </div>
        </>
    )
}
