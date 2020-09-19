import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './News.css'
import NavSearch from './NavSearch';
import NewsList from './NewsList';
import {newsArr} from './newsArr'

let addNews = JSON.parse(localStorage.getItem("addNews"));
let news = JSON.parse(localStorage.getItem("newsArr"));
if(news === null) localStorage.setItem("newsArr", JSON.stringify(newsArr));

class News extends Component{
  constructor(props) {
    super(props);
    this.state = {
      news : news,
      filtered : [],
    }
  }

  search = search => {
    let currentNews = [];
    let newList = [];
    if(search !== "") {
      currentNews = this.state.news;
      newList = currentNews.filter(newS => {
        const lc = newS.title.toLowerCase();
        const filter = search.toLowerCase();
        return lc.includes(filter);
      });
    } else {
      newList = this.state.news;
    }
    this.setState({filtered : newList});
  };

  componentDidMount() {
    this.setState({filtered : this.state.news});
  }
  componentWillUnmount() {
    if(news === null) setTimeout(()=>{window.location.reload()},0)
  }
 
  deleteNews = i =>{
    const newsArr = this.state.news
    newsArr.splice(i, 1);
    this.setState({news : newsArr})
    localStorage.setItem("newsArr", JSON.stringify(newsArr));
  }
  addNews = () => {
    let addedNews = this.state.news.concat(addNews)
    this.setState({news : addedNews})
    localStorage.setItem("newsArr", JSON.stringify(addedNews))
    localStorage.removeItem("addNews");
    window.location.reload();
  }
  render() {
    return (
      <section className="container news"> 
          <h1>Новости</h1>
          {this.props.addNews}
          <NavSearch value={this.state.value} search={this.search}/>
          <NewsList 
            news={this.state.filtered} 
            deleteNews={this.deleteNews} 
            onClick={this.addNews}
            addNews={addNews}
          />
      </section>
    );
  }
}

export default News;