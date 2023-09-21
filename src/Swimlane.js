import './Swimlane.css';
import React from "react";
import Card from "./Card";
import Board from "./Board";
import Dragula from "dragula";
import "dragula/dist/dragula.css";
import "./Swimlane.css";

export default class Swimlane extends React.Component {
  componentDidMount() {
    Dragula([
      document.getElementById("backlog"),
      document.getElementById("process"),
      document.getElementById("complete"),
    ])

      .on("drag", function (e) {
        e.className += " ";
        e.status += " ";
        console.log("drag", e.status)
      })

      .on("drop", function (e) {
        const test = document.querySelectorAll("div#backlog>div")
        console.log(e.attributes[2].textContent);

        // test.forEach((el)=>{
        //   console.log(el.attributes[2].textContent)
        // })

        if (e.className === "Card Card-grey" && e.attributes[2].textContent === "backlog" ) {
          e.className = e.className.replace("Card Card-grey", "Card Card-blue");
          
        }  

  });

  }

  render() {
    const cards = this.props.clients.map(client => {
      return (
        <Card
          key={client.id}
          id={client.id}
          name={client.name}
          description={client.description}
          status={client.status}
        />
      );
    });

    const dragcolumn = (internldata) => {
      return (
        <div
          className="Swimlane-dragColumn"
          id={internldata}
          ref={this.props.dragulaRef}
        >
          {cards}
        </div>
      );
    };

    return (
      <div className="Swimlane-column">
        <div className="Swimlane-title">{this.props.name}</div>
        {this.props.name === "Backlog" ? dragcolumn("backlog") : null}
        {this.props.name === "In Progress" ? dragcolumn("process") : null}
        {this.props.name === "Complete" ? dragcolumn("complete") : null}
      </div>
    );
  }
}


