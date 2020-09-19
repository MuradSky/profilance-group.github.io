import React, { Component } from 'react';
import {Link, withRouter, Redirect} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './AddNews.css'

let addNews = JSON.parse(localStorage.getItem("addNews"));
let user = JSON.parse(localStorage.getItem("user"));

class AddNews extends Component{
    constructor(props){
        super(props);
        this.state = {
            title : "",
            text: "",
            date : "",
            isLogin: false,
        }
    }
    handleChange = event => {
        this.setState({[event.target.name] : event.target.value});
    }
    handleSubmit = event => {
        event.preventDefault();
        let {title, text, date } = this.state;
        let addNews = {
            title : this.state.title,
            text : this.state.text,
            date : this.state.date,
        }
        if(!title < 10 && !text < 50 && date !== "") {
            localStorage.setItem("addNews", JSON.stringify(addNews))
            this.props.history.push('/news');
            window.location.reload();
        }
    }
    render() {
        if(user === null || addNews) return <Redirect to="/news"/>
        return(
            <div className="addNews">
                <Link to="/news" className="addNews__link">Вернуться назад</Link>
                <form onSubmit={this.handleSubmit} className="addNews__form">
                    <div class="form-group">
                        <label for="name">Название </label>
                        <input type="text" class="form-control" 
                        id="name" name="title" 
                        onChange={this.handleChange} value={this.state.title}/>
                    </div>
                    <div class="form-group">
                        <label for="text">Текст для новостей</label>
                        <textarea class="form-control" 
                        id="text" name="text" rows="10" 
                        onChange={this.handleChange} value={this.state.text}></textarea>
                    </div>
                    <div class="form-group">
                        <label for="date">Дата публикации</label>
                        <input type="date" class="form-control" 
                        id="date" name="date" 
                        onChange={this.handleChange} value={this.state.date}/>
                    </div>
    
                    <button type="submit" class="btn btn-outline-info">Добавить</button>
                </form>
            </div>
        )
    }
};
export default AddNews;