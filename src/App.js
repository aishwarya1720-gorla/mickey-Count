import React, { Component, StrictMode } from 'react';
import './Index.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0, // start with 0 clicks
    };
  }

  // Increment the clicks
  Increment = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  };

  // Decrement the clicks
  Decrement = () => {
    this.setState({ clicks: this.state.clicks - 1 });
  };

  // Reset the clicks to 0
  Reset = () => {
    this.setState({ clicks: 0 }); // reset to 0 instead of this.state.null
  };

  render() {
    return (
      <StrictMode>
        <div id="first">
          
          <button onClick={this.Increment} className="button1" id="but1">
            +
          </button>
          <button onClick={this.Reset} className="button1" id="but3">
            Reset
          </button>
          <button onClick={this.Decrement} className="button1" id="but2">
            -
          </button>
        </div>

        {/* Display the current clicks count */}
        <div>
          <h1>Mickey Count: {this.state.clicks}</h1>
          <div id="main"></div>
        </div>

        {/* Image */}
        <div>
          <img
            src="https://sc0.blr1.digitaloceanspaces.com/large/821812-wfwcabltfk-1479440864.jpg"
            alt="img"
            id="imgl"
          />
        </div>
      </StrictMode>
    );
  }
}
