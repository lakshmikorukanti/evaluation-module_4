import React from "react"
import { Component } from "react";
import styles from "../Components/index.module.css"

export default class Card extends Component{
    constructor(props){
        super(props)
    }
    render(){
        
const {data,FilterVar,sortMethod,Datevar}=this.props

console.log(FilterVar)
        return(
            <>
             <div className={styles.cardMainWrapper}>
            {
                data.filter(({ remote}) => {
                    if (FilterVar ==="all") {
                        return data;
                    } else {
                        return remote=== FilterVar;
                    }
                }).sort((a, b) => {
                    if (sortMethod ===null) {
                        if (a.companyName> b.companyName) {
                            return 1;
                          }
                          if (a.companyName=== b.companyName) {
                            return a.companyName - b.companyName;
                          }
                          if (b.companyName> a.companyName) {
                            return -1;
                          }
                          return 0;
                        
                }
                    if (sortMethod ==="asec") {
                        return a.salary - b.salary;
                    }
                    if (sortMethod === "desc") {
                        return b.salary - a.salary;
                    }
                }).sort((a,b)=>{
                    if(Datevar===null){
                        return data
                    }
                    if(Datevar==="asec"){
                    return a.date-b.date
                    }
                    if(Datevar==="desc"){
                        return b.date-a.date
                    }
                }).map((a)=>(
                        <div className={styles.cardWrapper}  key={a.id}>
                        <div>
                    <img src={a.file} alt={a.title}/>
                    </div>
                    <div>
                <h1>{a.companyName}</h1></div>
                <div>
                {/* <div>{a.id}</div> */}
                <h4>{a.title}</h4></div>
                <div>
                {/* <div>{a.date.toLocaleDateString()}</div> */}
                <h4>{a.salary}</h4></div>
                <div>
                <h4>{a.location}</h4></div>
                <div> 
                {
                    a.remote?<div className={styles.classGreen}></div>:<div className={styles.classRed}></div>
                }
                </div>
                </div>
                ))
            }
            </div>
            </>
        )
    }
}