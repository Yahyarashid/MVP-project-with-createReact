import React, { Component } from 'react';
import $ from 'jquery';
import List from './components/List.js';
import Listitem from './components/Listitem.js';
import Search from './components/search.js'
import Nav from './components/nav.js';
import './App.css';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: []
    }
  }

  delete(id){
    let context = this;
    console.log(id);
        $.ajax({
      type:'POST',
      url:'/delete',
      data:{id:id},
      success: function(){
        $.ajax({
          type: 'GET',
          url: '/h', 
          success: (data) => {
                 $.ajax({
          type: 'GET',
          url: '/h', 
          success: (data) => {
            context.setState({
              items: data
            })
          },
          error: (err) => {
            console.log('err', err);
          }
            });
          },
          error: (err) => {
            console.log('err', err);
          }
        });
        console.log('success')
      }
    });

  }
  search (term) {
    console.log(`${term} was searched`);
    // TODO
     let context = this;
    $.ajax({
      type:'POST',
      url:'/h',
      data:{message:term},
      success: function(){
        $.ajax({
          type: 'GET',
          url: '/h', 
          success: (data) => {
            context.setState({
              items: data
            })
          },
          error: (err) => {
            console.log('err', err);
          }
        });
        console.log('success')
      }
    });
  }

  componentDidMount() {
    $.ajax({
      type: 'GET',
      url: '/h', 
      success: (data) => {
        this.setState({
          items: data
        })
        console.log(this.state.items)
      },
      error: (err) => {
        console.log('err', err);
      }
    });

  }

render() {
    return (
      <Router>
      <span>
      <Route path='/' render={Nav} />
      <div className="App" className='container'>
      <Route path='/' exact restrict render = {
        () => {
          return (
            <div>
            <h1>Welcome to blogger</h1>
            <Search onSearch={this.search.bind(this)}/>
            </div>
          )
        }
      }/>

      <Route path='/create' render = {
        () => {
          return (
            <div>
            <List delete={this.delete.bind(this)} items={this.state.items}/>
            </div>
            
          )
        }
      } />
      

      </div>
      </span>
      </Router>

    );

  }
}
export default App;