import React, { Component } from 'react'
import Counter from './counter/Counter';
import { Button } from 'react-bootstrap';


import './App.css';

 class App extends Component {
   state = {
     visibility: false,
   };

   handelChange = () => this.setState({ visibility: !this.state.visibility });

   render() {
     return (
       <div className="App">
        {/* <HookCoun/> */}
         <h5>Show the counter and start counting , press the button below :</h5>
          <Button
           className="butto"
           variant="outline-info"
           onClick={this.handelChange}
         >
            {this.state.visibility ? "hide" : "shwo"}
          </Button>

         {this.state.visibility === true && <Counter />}


       </div>
     );
   }
 }

export default App;