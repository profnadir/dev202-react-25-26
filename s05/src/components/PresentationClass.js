import { Component } from "react";

class PresentationClass extends Component{
    constructor(){
        super()
        //this.props.groupe = "dev206";

        
    }
    render(){
        return (
            <div>
                <h1>hi {this.props.groupe}</h1>
                <h2>centre {this.props.centre}</h2>
                <h3>{this.props.children}</h3>
                {this.state}
            </div>
        )
    }
}

export default PresentationClass;