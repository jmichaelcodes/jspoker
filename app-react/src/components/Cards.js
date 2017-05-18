import React from 'react'

class Cards extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            
        }

    }

    render() {

        return <div className="container cards" >

            {/*<img className="col-sm-offset-1 col-sm-2" src={this.props.card1}/>*/}
            <img className="col-sm-offset-1 col-sm-2" src={"../img/cards/" + this.props.card1 + ".png"}/>
            <img className="col-sm-2" src={"../img/cards/" + this.props.card2 + ".png"}/>
            <img className="col-sm-2" src={"../img/cards/" + this.props.card3 + ".png"}/>
            <img className="col-sm-2" src={"../img/cards/" + this.props.card4 + ".png"}/>
            <img className="col-sm-2" src={"../img/cards/" + this.props.card5 + ".png"}/>

        </div>
    }
}

export default Cards
