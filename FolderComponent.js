import { Component } from "react"
import React from "react";
import { render } from "@testing-library/react";

class FolderCompnent extends React.Component{
    constructor(props){
        super(props);
        // this.state = { query: "", suggestions : [] };
    }

    TABS = [
        {
          name: "public",
          files: [
            "index.js",
            "public.js",
            { name: "Components", files: ["Component1.js", "Component2.js"] }
          ]
        },
        { name: "src", files: ["index.js", "App.js"] },
        "package.json"
    ];

    render() {
        let fileList = this.props.files;
        return ( <div className="container">
            <h2 className="name-field">{this.props.name} </h2>
            <ul className="ul-list">
                {fileList.map((item) => {
                    return typeof item == "string" ? <li key={item}> {item} </li> : <FolderCompnent files={item.files} name={item.name} />
                })}
            </ul>
        </div>);
    }
}

export default FolderCompnent;


// Create an autocomplete widget which:
// 1. Fetches data from an API 
// 2. render suggestions
// 3. On clicking takes to a dummy page, pass a parameter to the URL which opens when you select an option

// Open Search API: https://searchcode.com/api/codesearch_I/?q=sabc&src=2