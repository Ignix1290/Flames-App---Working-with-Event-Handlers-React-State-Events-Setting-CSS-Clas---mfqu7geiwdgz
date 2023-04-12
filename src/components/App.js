import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {

    // const [inputs , setInputs] = useState();
    // function handleChange(e) {
    //     setInputs(e.target.value);
    // }
    render() {

        return(
            <div id="main">
               {/* Do not remove the main div */}
               <input data-testid="input1" onChange={handleChange}>First Name</input>
               <input data-testid="input2" onChange={handleChange}>Second Name</input>
               <button data-testid="calculate_relationship">Calculate Relationship Future</button>
               <button data-testid="clear">Clear</button>
               <h3 data-testid="answer"></h3>
            </div>
        )
    }
}


export default App;
