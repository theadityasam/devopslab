import React from 'react';

// const Aditya=(props)=>{
//     return (
//         <div>
//             {props.name}
//         </div>
//     )
// }

class Aditya extends React.Component{

    state={
        age: 19
    }

    increaseAge=()=>{
        this.setState({
            age:this.state.age+1
        })
    }

    render(){
        return (
            <div>
                {this.props.name}
                {this.state.age}
                <br/>
                <button onClick={this.increaseAge}>Age</button>
            </div>
        )
    }
}

export default Aditya;