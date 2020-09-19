import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

let user = JSON.parse(localStorage.getItem("user"));

class NewsList extends Component{
    constructor(props){
      super(props);
      this.state = {
        authId: null,
      } 
    }
    componentDidMount() {
      const authId = JSON.parse(localStorage.getItem('user'))
      if(authId) this.setState({authId : authId.id});
    }
    render() {
        const adminAuth = this.state.authId === "admin";
        return(
            <ul className="news">
                {
                  this.props.news.map((item, i )=> {
                    return (
                      <li key={i} className="news__list">
                        <div>
                          <h4 className="news__title">{item.title}</h4>
                          <p className="news__text">{item.text}</p>
                          <span className="news__date">{item.date}</span>
                        </div>
                        
                        { adminAuth ? 
                          <button
                            type="button" 
                            className="btn btn-danger"
                            onClick={() => this.props.deleteNews(i)}
                          >Удалить</button> : null}
                      </li>
                    )
                  })
                }
                {
                  this.props.addNews !== null ? 
                  <li className={user == null ? "news__list news__list_none":"news__list"}>
                    <div>
                      <h4 className="news__title">{this.props.addNews.title}</h4>
                      <p className="news__text">{this.props.addNews.text}</p>
                      <span className="news__date">{this.props.addNews.date}</span>
                      <span className="news__msg">На одобрении</span>
                    </div> 
                    { adminAuth ? 
                      <button 
                        type="button" 
                        className="btn btn-success"
                        onClick={()=> this.props.onClick()}
                      >Одобрить</button> : null} 
                  </li> : null
                }
          </ul>
        )
    }
}
export default NewsList;