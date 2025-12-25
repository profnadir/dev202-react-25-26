import React, { Component } from 'react';

class Compteur extends Component {
    constructor(props){
        console.log("constructor");
        console.log("------------");
        super(props);
        this.state= {
            compteur : 0,
            term: ""
        }
    }
    componentDidMount(){
        console.log("component est monté");
        console.log("------------");
        //getPosts(); 
    }
    componentDidUpdate(){
        console.log("component est modifié");
        console.log("------------");
    }
    componentWillUnmount(){
        console.log("component est demonté");
        console.log("------------");
    }
    render() {
        console.log("render");
        console.log("------------");
       
        return (
            <div style={{background:"yellow"}}>
                <input type="text" 
                    value={this.state.term}
                    onChange={e => this.setState({term : e.target.value})}
                />
                <p>{this.state.compteur}</p>
                <button onClick={() => this.setState({compteur : this.state.compteur + 1})}>+</button>
                <button onClick={() => this.setState({compteur : this.state.compteur - 1})}>-</button>
            </div>
        );
    }
}

export default Compteur;
