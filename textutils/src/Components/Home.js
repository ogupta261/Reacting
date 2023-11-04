import React, { useEffect } from 'react'
import textUtilsImage from '../Images/text-utils.png'
import comingSoonImage from '../Images/more.gif'
import Card from './Card'

export default function Home(props) {

    useEffect(() => {
        props.setActivePage('')
    })

    return (
        <div className='text-center animate bg-transparent' style={{ color: props.secondary, backgroundColor: props.primary }}>
            <h1>Our Applications</h1>
            <div className="row g-2 justify-content-center align-items-center flex-wrap my-3">
                <Card url='/text-utils' image={textUtilsImage} primary={props.secondary} secondary={props.primary} title='Text Utils' caption='Word Counter, Case Changing, Mutiple theme options'></Card>
                <Card url='#' image={comingSoonImage} primary={props.secondary} secondary={props.primary} title='More Coming Soon!' ></Card>
            </div>
        </div>
    )
}
