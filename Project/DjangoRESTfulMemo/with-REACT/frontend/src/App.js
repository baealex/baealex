import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

/*
const getItems = async(page) => {
  return await axios.get('http://localhost:3500/items/');
}

const postItem = async(content) => {
  return await axios.post('http://localhost:3500/items/', {"content":content})
}

function removeItem(url) {
  axios.delete(url)
  .then(insertItems)
  .catch()
}

function todoItem(props) {
  return(
    <li>{props.content}</li>
  )
}

function insertItems() {
  const items = getItems()
  let items_data = [];
  items.then(function(result) {
    for(let i=0; i<result.data.length; i++) {
      let item = result.data[i]
      items_data.push(<todoItem content={item.content} />)
    }
  console.log(items_data)
    document.getElementById('todo-list').innerHTML = items_data
  })
}

function getItem(pk) {
  axios
    .get('http://localhost:3500/items/'+pk+'/')
    .then( response => { return response } )
    .catch( response => { return response } );
}

class GetButton extends React.Component {
  constructor(props) {
    super(props)
    this.onClick = this.onClick.bind(this)
  }

  render() {
    return(
      <button onClick={this.onClick}>GET</button>
    )
  }

  onClick() {
    insertItems()
  }
}

class PostBox extends React.Component {
  constructor(props) {
    super(props)
    this.onClick = this.onClick.bind(this)
  }

  render() {
    return(
      <div>
        <input id="input_text"></input>
        <button onClick={this.onClick}>
          Append
        </button>
      </div>
    )
  }

  onClick() {
    let done = postItem(document.getElementById('input_text').value)
    done.then(
      insertItems(),
      document.getElementById('input_text').value = ''  
    )
  }
}

function App() {
  insertItems()
  return (
    <div className="App">
      <h2>투두리스트</h2>
      <ul id="todo-list">

      </ul>
      <PostBox/>
    </div>
  );
}
*/

function Item() {
  return(
    <li>asd</li>
  )
}

class InputBox extends React.Component {
  render() {
    return(
      <div>
        <input id="input_text"></input>
        <button onClick={this.onClick}>
          Append
        </button>
      </div>
    )
  }
}

class App extends React.Component {
  state = {
    item_list: [],
  }

  async getItems() {
    return await axios.get('http://localhost:3500/items/')
  }

  render() {
    this.getItems().then(
      this.setState(item_list: )
    )
    let items = []
    return(
      <div>
        <ul>
          { items }
        </ul>
        <InputBox/>
      </div>
    )
  }
}

export default App;