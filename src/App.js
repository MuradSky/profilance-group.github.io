import React, { Component } from 'react';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import News from './Components/News/News';
import Login  from './Components/Login/Login';
import AddNews from './Components/AddNews/AddNews';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
        user: "",
        btnClick : false,
        isLogin: false,
    }
  }

  componentDidMount() {
    let user = JSON.parse(localStorage.getItem("user"));
    if(user) this.setState({
      isLogin : user.isLogin,
      user: user.login
    });
  }

  handleLogin = () => {
    let user = JSON.parse(localStorage.getItem("user"));
      this.setState({
          btnClick: false,
          isLogin : user.isLogin,
          user : user.login
      })
  }
  render(){
    return (
      <div className="App">
        <Router>
          <Header 
            text={this.state.isLogin? "Выйти" : "Войти"}
            onClick={ this.state.isLogin ? 
                ()=> {
                      this.setState({
                      btnClick: false,
                      isLogin : false,
                      user: ""
                    })
                    localStorage.removeItem("user");
                    window.location.reload();
                    } :
                    ()=> this.setState({btnClick: true})
                }
          />
          <Switch>
            <Route exact path="/">
              <Main 
                handleLogin={this.handleLogin}
                text={this.state.user ? this.state.user :"Гость"}
              />
            </Route>
            <Route  path="/news">
              <News 
              addNews={
                this.state.isLogin ? 
                <Link to="/addnews">Добавить новость</Link> 
                : 
                <p>Для добавления новости авторизируйтесь</p> 
              }
              />
            </Route>
            <Route path="/addnews" component={AddNews}/>
          </Switch>
          <Login 
            handleLogin={this.handleLogin} 
            className={this.state.btnClick ? "popUp popUp_active" : "popUp"}
            onClick={()=> this.setState({btnClick: false})}
          />
        </Router>
      </div>
    );
  }  
}

export default App;