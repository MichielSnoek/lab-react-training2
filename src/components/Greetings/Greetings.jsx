import React from 'react'
import Border from '../Border/Border.jsx'

const greet = (lang) =>{
  let language = "hello"
  switch (lang) {
    case 'de'  : language ='Hallo';     break;
    case 'en'  : language ='Hello' ;    break;
    case 'es'  : language ='Hola' ;     break;
    case 'fr'  : language ='Bonjour';   break;
    case 'nl'  : language ='hello';     break;
    case 'port': language ='Ola';       break;
    default  : language   ='Hello' ; 
  }
  return language
}

export default function IdCard({lang, children}) {
    return (
        <React.Fragment>
       <Border>
        <div>
            <p>{greet(lang)} {children}</p>
        </div>
        </Border>
        </React.Fragment>
    )
}