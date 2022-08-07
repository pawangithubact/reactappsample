import React from "react";

class CntCounter extends React.Component{
    constructor()
    {
        super()
        this.state={
            counter:0

        }

        this.increaseCounter=this.increaseCounter.bind(this)
    }
    increaseCounter()
    {
        this.setState({counter:this.state.counter+1})
    }

    render()
    {
        return (
            <div>
                <button onClick={this.increaseCounter}>Click Me</button>
                {this.state.counter}
            </div>
        )
    }
}

export default CntCounter