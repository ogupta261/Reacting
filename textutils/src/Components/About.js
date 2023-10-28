import React, { useEffect } from 'react'

export default function About(props) {

    useEffect(() => {
        props.setActivePage('about-us')
    })

    return (
        <div>
            About
        </div>
    )
}
