import React, { Component } from 'react';

class NavSearch extends Component{
    render() {
        return (
            <nav className="navbar navbar-light bg-light">
              <form className="form-inline"  >
                  <input 
                    className="form-control mr-sm-2" 
                    type="search" 
                    placeholder="Search here..." 
                    value={this.props.value}
                    onChange={e => this.props.search(e.target.value)}
                  />
              </form>
          </nav>
        )
    }
}
export default NavSearch;