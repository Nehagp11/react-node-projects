import React, { useEffect, useState } from "react";

class ClickCount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        clicks: 0
      };
      this.clickHandler = this.clickHandler.bind(this);
    }
  
    componentDidMount() {
      this.refs.myComponentDiv.addEventListener('click', this.clickHandler);
    }
  
    componentWillUnmount() {
      this.refs.myComponentDiv.removeEventListener('click', this.clickHandler);
    }
  
    clickHandler() {
      this.setState({
        clicks: this.state.clicks + 1
      });
    }
  
    render() {
      let children = this.props.children;
  
      return (
        <div className="my-component" ref="myComponentDiv">
        <h2>My Component ({this.state.clicks} clicks)</h2>
        <h3>{this.props.headerText}</h3>
      {children}
      </div>
      );
    }
  }

  export default ClickCount;

