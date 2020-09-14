import React, { Component } from "react"
import { v4 as uuidv4 } from "uuid";
import Card from "../Components/Card"
import styles from "../Components/index.module.css"
export default class Input extends Component{
    constructor(props){
        super(props)
        this.state={
            id:"",
            title:"",
            salary:"",
            companyName:"",
            location:"Bangalore",
            remote:false,
            data:[],
            date:"",
        Datevar:null,
           file:null
        }
       
    }
    handleChange = (e) => {
        var d = new Date();
        var n = d.getTime()
        let value = e.target.name === "remote" ? e.target.checked : e.target.value;
        this.setState({
          [e.target.name]: value,
         
        });
        this.setState({
            date:n,
        })
        
    }
    handleSubmit=(event)=>{
  
        event.preventDefault();
      
        const {
            id,
           title,salary,companyName,
           location,
           remote,file,data,date
          } = this.state;
      //console.log(date)
          let payload = {  id:uuidv4() ,title,date,  salary, companyName,location,remote,file, data };
          this.setState((prevState) => ({
            data: [...prevState.data, payload],
          }));
          console.log(this.state.date)
    this.resetValue();
    }
    resetValue() {
        this.setState({
          id: "",
          title: "",
          salary: "",
          companyName: "",
          location: "Bangalore",
          file: null,
          remote:false,
          FilterVar: "all",
          sortMethod: null,
          date:""
        });
      }
    handleChangeFile = (event) => {
        this.setState({
          file: URL.createObjectURL(event.target.files[0]),
         
        });
      };
      handleFilter = (value) => {
        console.log(value)
      let v=value=="all"?"all":value=="able to remote"?true:false
        this.setState({
            FilterVar: v
        })
    }
    handleSort = (value) => {
        this.setState({
            sortMethod: value
        })
    }
    handleDate=(value)=>{
        this.setState({
            Datevar:value
        })
    }
    render(){
        console.log(this.state)
        return(
            <>
            <div className={styles.mainCont}>
            <div>
            <form >
                <div><label>Title:<input type="text" placeholder="enter the title" name="title" value={this.state.title}  onChange={this.handleChange}/></label></div>
           <div><label>Salary:<input type="number" placeholder="enter the salary" name="salary" value={this.state.salary} onChange={this.handleChange}/></label></div>
           <div><label>Company Name:<input type="text" placeholder="enter the Company Name" name="companyName" value={this.state.companyName} onChange={this.handleChange}/></label></div>
           <div><label>Location<select
                name="location"
                value={this.state.location}
                onChange={this.handleChange}
              >
                <option value="Bangalore">Bangalore</option>
                <option value="Chennai">Chennai</option>
                <option value="Delhi">Delhi</option>
              </select></label></div>
              <div>
            <label>
              Remote:
              <input
                name="remote"
                type="checkbox"
                checked={this.state.remote}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div>
              <input type="file" onChange={this.handleChangeFile}  />
            </div>
            <div><button onClick={this.handleSubmit}>Submit</button></div>
            </form>
            </div>
            <div>
                <div>
            {
                this.state.data.length>0?<>
                <div><div><h2>Sort:</h2>{["asec","desc"].map((a)=><button  value={a} onClick={() => this.handleSort(a)}>{a}</button>)}</div>
            <div><h2>Filter:</h2>{["all","able to remote","unable to remote"].map((a)=><button  value={a} onClick={() => this.handleFilter(a)}>{a}</button>)}</div>
            <div><h2>Sort by Date:</h2>{["asec","desc"].map((a)=><button  value={a} onClick={() => this.handleDate(a)}>{a}</button>)}</div></div></>:<></>
            }
            </div>
                        </div>
            </div>
            {
                this.state.data.length>0? <div><Card data={this.state.data} Datevar={this.state.Datevar} FilterVar={this.state.FilterVar} handleSort={this.handleSort} handleFilter={this.handleFilter} sortMethod={this.state.sortMethod}/></div>:<></>
            }
           
            </>
        )
    }
}