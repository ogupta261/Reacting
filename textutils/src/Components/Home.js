import React, { useEffect } from 'react'
import textUtilsImage from '../Images/text-utils.png'
import comingSoonImage from '../Images/more.gif'
import Application from './Application'

export default function Home(props) {

    useEffect(() => {
        props.setActivePage('')
    })

    return (
        <div className='text-center' style={{ color: props.secondary, backgroundColor: props.primary }}>
            <h1>Our Applications</h1>
            <div className="container my-3">
                <div className="row g-2">
                    <Application url='/text-utils' image={textUtilsImage} primary = {props.secondary} secondary={props.primary} title='Text Utils' caption='Word Counter, Case Changing, Mutiple theme options'></Application>
                    <Application url='#' image={comingSoonImage} primary = {props.secondary} secondary={props.primary} title='More Coming Soon!' ></Application>
                </div>
            </div>
        </div>
    )
}
