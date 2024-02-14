import { Component } from "react"
import React from "react";
import { render } from "@testing-library/react";

class AutoComplete extends React.Component{
    constructor(props){
        super(props);
        this.state = { query: "", suggestions : [] };
    }

    getUpdatedList = (e) => {
        let text = e.target.value.trim();
        this.setState({query : text});
        if(text.length >= 3){
            fetch("https://searchcode.com/api/codesearch_I/?q="+text).then((response) => response.json()).then((response) => {
                let results = response.results;
                console.log(response.results);
                this.setState({suggestions : response.results});
            });
        }
    }

    clearSeach = () => {
        this.setState({query : "", suggestions: []});
    }

    render() {
        let suggestions = this.state.suggestions;
        return ( <div className="container">
            <input type="text" value={this.state.query} onChange={this.getUpdatedList} />
            <ul className="ul-list">
                {suggestions.map((item) => {
                    return <li> <a href={item.url} key={item.name} target="_blank">{item.name}</a> </li>
                })}
            </ul>
            <button className="btn" onClick={this.clearSeach}> Clear Suggestions</button>
        </div>);
    }
}

export default AutoComplete;


// Create an autocomplete widget which:
// 1. Fetches data from an API 
// 2. render suggestions
// 3. On clicking takes to a dummy page, pass a parameter to the URL which opens when you select an option

// Open Search API: https://searchcode.com/api/codesearch_I/?q=sabc&src=2