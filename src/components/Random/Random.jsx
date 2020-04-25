import React from 'react'
import Border from '../Border/Border.jsx'


const getRndInteger = (min, max) =>  Math.floor(Math.random() * (max - min + 1) ) + min



export default function Random({min, max}) {
    return (
        <div>
                <Border>
                    Random value between {min} and {max} => {getRndInteger(min, max)}
                </Border> 
        </div>
    )
}
