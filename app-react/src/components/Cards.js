import React from 'react'

class Cards extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            
        }

    }

    render() {

        return <div className="container cards" >

            <img className="col-sm-offset-1 col-sm-2" src={this.props.card1}/>
            <img className="col-sm-2" src={this.props.card2}/>
            <img className="col-sm-2" src={this.props.card3}/>
            <img className="col-sm-2" src={this.props.card4}/>
            <img className="col-sm-2" src={this.props.card5}/>

        </div>
    }
}

export default Cards
