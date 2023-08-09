import React, { useState } from 'react'

export default function About() {
    const [mystyle,setmyStyle]= useState({
        color:'red',
        backgroundColor:'blue'
    })
    const  [button,setmybutton]= useState({
    
        color:'white',
        backgroundColor:'black'
    })
     const toggleStyle = ()=>{
        if(setmybutton.color=='black'){
            setmybutton({
                color:'white',
                backgroundColor:'black'
            })
        }
        else{
            setmybutton({
                color:'black',
                backgroundColor:'white'
            })
        }
    }
  return (
    <div className='container' style={mystyle}>
        <div className="alert alert-primary" role="alert">
    A simple primary alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
    </div>
    <div className="alert alert-secondary" role="alert">
    A simple secondary alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
    </div>
    <div className="alert alert-success" role="alert">
    A simple success alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
    </div>
    <div className="alert alert-danger" role="alert">
    A simple danger alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
    </div>
    <div className="alert alert-warning" role="alert">
    A simple warning alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
    </div>
    <div className="alert alert-info" role="alert">
    A simple info alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
    </div>
    <div className="alert alert-light" role="alert">
    A simple light alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
    </div>
    <div className="alert alert-dark" role="alert">
    A simple dark alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
    </div>
    <div className="container">
    <button onClick={toggleStyle} type="button" style={button}>click me</button>
    </div>
    </div>
  )
}
