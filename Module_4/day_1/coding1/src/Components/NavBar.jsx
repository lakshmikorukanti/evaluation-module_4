import React, { Component } from "react"
import styles from "./App.module.css"
import Login from "../Components/Login"
export default class NavBar extends Component{
    constructor(props){
        super(props)
        this.state={
                show:true
        }
    }
    handleLogin=()=>{
        this.setState({
            show:true
        })
    }
    handleRegister=()=>{
        this.setState({
            show:false
        })
    }
    render(){
        return(
            <div>
                <div className={styles.navBarWrapper}>
                    <div className={styles.buttonCont}>
                    <button onClick={this.handleRegister} className={styles.loginButton}>Login</button>
                <button onClick={this.handleLogin} className={styles.loginButton}>Register</button>
          
            </div >
            <div className={styles.loginFormWrapper}>
            {
                this.state.show?<div><Login/></div>:<></>
            }
            </div>
                </div>
            </div>
        )
    }
}