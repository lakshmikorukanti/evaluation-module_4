import React, { Component } from "react"
import axios from "axios";
import styles from "./App.module.css"
import DashBoard from "../Components/DasBoard"
import { AppContext } from "../Context/AppContext";
export default class Login extends Component{
constructor(props){
    super(props)
    this.state = {
        email: "",
        password: "",
        token: "",
        hide:true,
      };
    }
    handleChange = (e) => {
      let value = e.target.value;
      this.setState({
        [e.target.name]: value,
      });
    };
    handleLogout=()=>{
        this.setState({
            hide:true
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        axios("https://reqres.in/api/login", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      data: {
        email: this.state.email,
        password: this.state.password,
      },
    })
      .then((res) => this.mainHandleToken(res.data))
      .catch((err) => console.log(err));
      this.setState({
          hide:false
      })
  }
  mainHandleToken = (res) => {
      console.log(this.context)
    const { handleToken, handleEmail } = this.context;
    handleToken(res.token);
    handleEmail(this.state.email)
  };
render(){
    if (this.state.hide) {
    return(
        <><div>
        <form>
        <div>
                <label>
                  Email:
                  <input
                    type="email"
                    name="email"
                    placeholder="enter the email"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </label>
              </div>
              <div>
                <label>
                  Password:
                  <input
                    name="password"
                    type="password"
                    placeholder="enter the password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    required
                  />
                </label>
              </div>
              <button onClick={this.handleSubmit} className={styles.loginorRegisterButton}>Login</button>
        </form>
        </div>
        </>
    )
}
else{
        return (<><DashBoard />
        <button onClick={this.handleLogout} className={styles.logoutBtn}>Logout</button></>)

}
}
}
Login.contextType = AppContext;