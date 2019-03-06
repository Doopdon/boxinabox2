import React, { Component } from 'react';
import Text from './TextComponent'
import TextComponent from './TextComponent';

class DefaultComponent extends Component { 
  
  constructor(props){
    super(props);
    this.state = {};
  }

  addContainer=()=>{
    console.log(this);
    var items = this && this.state && this.state.textItems || [];
    items.push(<DefaultComponent title="container"/>);
    this.setState({textItems : items});
  }

  addTxt=()=>{
    console.log(this,'text');
    var items = this && this.state && this.state.textItems || [];
    items.push(<TextComponent title="text"/>);
    this.setState({textItems : items});
  }

  render() {
    let inner = [];
    this.state && this.state.textItems && this.state.textItems.forEach((textItem)=>{
      inner.push(textItem)
    });
    return (
      <div className="outer-container">
        <div className="title-div">
          <div className="text"><h1>{this.props.title}</h1></div>
          <div className="button" onClick={this.addContainer}><h1>Add container</h1></div>
          <div className="button" onClick={this.addTxt}><h1>Add Text</h1></div>
        </div>
        <div className="inner-container">
          {inner}
        </div>
      </div>
    );
  }
}

export default DefaultComponent;
