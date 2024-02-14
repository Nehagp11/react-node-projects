
import React from "react"

class CardGame extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            cards : [0, 0, 1, 1, 0, 1, 0, 0, 1],
            selectedCard : [],
        };
    }

    selectCard = (e) => {
        console.log(this.state.selectedCard);
        this.state.selectedCard.push({card : e.target, val : e.target.innerText});
        if(this.state.selectedCard.length == 2){
            if(this.state.selectedCard[0].val == this.state.selectedCard[1].val){
                this.state.selectedCard[0].card.classList.add("open");
                this.state.selectedCard[1].card.classList.add("open");
                this.setState({selectedCard : []});
            } else {
                setTimeout(()=> {
                    this.state.selectedCard[0].card.classList.add("closed");
                    this.state.selectedCard[1].card.classList.add("closed");
                    this.setState({selectedCard : []});
                }, 500)
            }
        }
    }

    render(){
        return (<>
        {this.state.cards.map((ele, index) => <div className="tile closed" data-key={index} onClick={this.selectCard}>{ele}</div> )}
        </>)
    }
}

export default CardGame;