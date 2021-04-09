import './App.css';
import {unmarked} from './unmarked.js';
import Preview from './Preview.js'
import Editor from './Editor.js'
import React from "react"

class App extends React.Component {
	constructor(props)	{
    super(props);
    this.state = {input: unmarked};
	}

	handleChange(event)	{
    this.setState({input: event.target.value});
	}

	render() {
		return (
      <div>
        <h2>This demo uses the markdown parser from <a href="https://cdnjs.com/libraries/marked">https://cdnjs.com/libraries/marked</a>.</h2>
        <div class="grid-container">
          <Editor onChange={this.handleChange.bind(this)} value={this.state.input}/>
          <Preview value={this.state.input}/>
        </div>
      </div>
    );
	}
}

export default App;
