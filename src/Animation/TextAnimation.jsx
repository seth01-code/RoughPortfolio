import React, { useCallback, useEffect, useState } from "react";
import './TextAnimation.css'

export default function TextAnimation(){
    const names = ['Web Developer', ' FrontEnd Developer', ' BackEnd Developer'
    ]

    const [currentName, setCurrentName] = useState(names[0]);

    function setRandomName() {
      const index = Math.floor(Math.random() * names.length);
      let newName = names[index]
      if (newName == currentName) { setRandomName() }
      else { setCurrentName(newName) }
      return
    }
  
    useEffect(() => {
      setTimeout(() => {
        setRandomName()
      }, 6000);
    }, [currentName])

    return <div className="wrapper">A {currentName}</div>
}

