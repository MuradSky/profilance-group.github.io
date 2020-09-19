import React, { Component }from 'react';
import auth from './auth';
import validAuth from './validAuth'
import './Login.css'
class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            login : "",
            password : "",
            users : [
                {id:"user", login: "user", password: "user"},
                {id:"admin", login: "admin", password: "admin"},
            ],
            isSuccess: false,
            isAuth: false,
            isLoginErr: false,
            isPassError: false,
        }
    }
    handleChange = event => {
        this.setState({[event.target.name] : event.target.value});
    }
    
    handleSubmit = event => {
        event.preventDefault();
        const {login, password, users} = this.state;
        auth(login, password, users, this);
        validAuth(login, password, this);
    }
    render() {
        return(
            <div className={this.props.className}>
                    <button 
                        type="button " 
                        className="close button_close" 
                        aria-label="Close" 
                        onClick={this.props.onClick}>
                        <span aria-hidden="true">&times;</span>
                    </button>

                    <form className="form" onSubmit={this.handleSubmit}> 
                            { this.state.isSuccess ? 
                                <div className="form__error">Неверный логин или пароль</div> : null
                            }
                        <div className="form-group">
                            <label for="login">Login</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="login" 
                                placeholder="Enter login" 
                                name="login"
                                value={this.state.login}
                                onChange={this.handleChange}
                            />
                            { this.state.isLoginErr ? 
                                <div className="form__error">Заполните поле логин корректно</div> : null
                            }
                        </div>
                        <div className="form-group">
                            <label for="password">Password</label>
                            <input 
                                type="password" 
                                className="form-control" 
                                id="password" 
                                placeholder="Password"
                                name="password"
                                value={this.state.password}
                                onChange={this.handleChange}
                            />
                            { this.state.isPassError ? 
                                <div className="form__error"> Заполните поле пароль корректно</div> : null
                            }
                        </div>
                        <button type="submit" className="btn btn-outline-info">Вход</button>
                    </form>
            </div>
        )
    }
}

export default Login;