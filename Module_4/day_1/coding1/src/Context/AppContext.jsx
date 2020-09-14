import React from "react";
export const AppContext = React.createContext();
class AppContextProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      token: "",
    };
  }
  handleEmail = (email) => {
    this.setState({ email: email });
  };

  handleToken = (token) => {
    this.setState({ token: token });
  };

  render() {
    console.log(this.state);
    const { email, token, isAuth } = this.state;
    const { handleToken, handleEmail } = this;
    console.log(token)
    return (
      <div>
        <AppContext.Provider
          value={{ isAuth, email, token, handleToken, handleEmail }}
        >
          {this.props.children}
        </AppContext.Provider>
      </div>
    );
  }
}
export default AppContextProvider;