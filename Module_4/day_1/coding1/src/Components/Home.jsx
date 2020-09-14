import React, { Component } from "react"
import styles from "../Components/App.module.css"
import NavBar from "../Components/NavBar"
export default class Home extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    render(){
        return(
            <div>
                <div >
                    <NavBar/>
                </div>
            </div>
        )
    }
}