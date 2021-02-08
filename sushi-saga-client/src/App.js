import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

const API = "http://localhost:3000/sushis"
//DONE- Only see 4 sushis on the server at a time 
//DONE- MoreSushi button will show the next 4 (onClick EventListener)
//DONE- Click on sushi plate to eat sushi
//DONE- Automattically charge customer to eat sushi 
//--budget (should decrease when sushi is eaten)
//--display budget num in the Table Component(you decide)
//--customers cannot eat any sushi that exceeds their budget

class App extends Component {
  state = {
    sushi: [],
    limit: 0, //limit on page
    eaten: [], //array o all eaten sushi
    budget: 150
  }

  componentDidMount(){
    fetch(API)
    .then(res => res.json())
    .then(sushiData => this.setState({sushi: sushiData})) 
  }

  sliceSushi = () => {
    this.setState({
                  limit: this.state.limit + 4
                  }) 
  }

  eatSushi = (sushi) => {
    if (this.state.budget >= sushi.price) {
      this.setState({
        eaten: [...this.state.eaten, sushi],
        budget: this.state.budget - sushi.price
      })
    } 
  }


  render() {
   
    return (
      <div className="app">
        <SushiContainer eaten={this.state.eaten} eatSushi={this.eatSushi} sliceSushi={this.sliceSushi} sushi ={this.state.sushi.slice(this.state.limit, this.state.limit + 4)}/>
        <Table budget={this.state.budget} eaten={this.state.eaten}/>
      </div>
    );
  }
}

export default App;