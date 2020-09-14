import React, { Component } from "react";

import axios from "axios";
import { AppContext } from "../Context/AppContext";
import styles from "./App.module.css"
export default class DashBoard extends Component{
    constructor(props){
        super(props)
        this.state={
            data:[]
        }
    }
    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/posts").then((res) =>
          this.setState({
            data: res.data,
          })
        );
      }
    render(){
        const { email, token } = this.context;
        console.log(email,token,this.state.data)
        return(
            <>
                <div className={styles.DashBoardCont}>
                    <div className={styles.emailWrapper}>
        <div><h4>Email:{email}</h4></div>
        <div style={{marginLeft:"20px"}}><h4>token:{token}</h4></div>
        </div>
                </div>
                {this.state.data.map((item) => (
            <div className={styles.CardWrapper}>
             <div>Id:{item.id}</div>
                <div>Title:{item.title}</div>
                <div>Body:{item.body}</div>
            </div>
          ))}
        
            </>
        )
    }
}
DashBoard.contextType = AppContext;