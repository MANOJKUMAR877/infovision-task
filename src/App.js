import React, { Component } from 'react'
import './App.css'
import Child from './Child'
export default class App extends Component {
  state = {
    item: [],
    value: 0
  }
  componentDidMount = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then(response => response.json())
      .then(json => this.setState({ item: json }))
  }
  render() {

    return (
      <div>

        <div className="container">
          {
            this.state.item.map(items => (

              <ul key={items.id}>
                <li className="list" onClick={() => { alert(items.id + " " + items.body) }}>
                  {items.id} - {items.title}
                </li>
              </ul>
            ))
          }
        </div>
        <button onClick={() => { this.setState({ value: this.state.value + 1 }) }}>Here to Add</button>
        <button onClick={() => { this.setState({ value: this.state.value - 1 }) }}>Here to Minus</button>
        <Child value={this.state.value}/>
      </div>
    )
  }
}
