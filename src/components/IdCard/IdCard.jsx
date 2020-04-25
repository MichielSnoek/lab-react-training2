import React from 'react'
import './IdCard.css';
import Border from '../Border/Border.jsx'

export default function IdCard({firstName, lastName, country, isStudent, img}) {
    return (
        <React.Fragment>
            <Border>
        <div className="idcard">
            <img src={img} alt="" />
            <div className="idcard__info"> 
            <p><em>First name:</em> {firstName}</p>
            <p><em>Last name:</em> {lastName}</p>
            <p><em>Country:</em> {country}</p>
            <p><em>Student:</em> {isStudent}</p>
            </div>
        </div>
        </Border>
        </React.Fragment>
    )
}