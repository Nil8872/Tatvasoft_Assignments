import './App.css';
import Counter from './component/Counter';
import About from './pages/About';
import Home from './pages/Home';
import { Component, useState } from 'react';
import Clock from './component/Clock';
import UseEffect2 from './practice/UseEffect2';
import RefEffect1 from './practice/refEffect1';
import ClassUseRef from './practice/ClassUseRef';
import ParentFocus from './practice/ParentFocus';
import UseContext from './practice/UseContext/UseContext';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "home",
    };
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  handlePageChange(page) {
    this.setState({
      currentPage: page,
    });
  }

  render() {
    return (
      <div className="App">
        {/* {this.state.currentPage === "home" ? <Home /> : <About />}
        <nav>
          <button style={{ margin: '10px', padding: '10px', fontSize: '20px', borderRadius: '10px', cursor: 'pointer' }} onClick={() => this.handlePageChange("home")}>Home</button>
          <button style={{ margin: '10px', padding: '10px', fontSize: '20px', borderRadius: '10px', cursor: 'pointer' }} onClick={() => this.handlePageChange("about")}>About</button>
        </nav> */}
        {/* <Clock/> */}
        {/* <UseEffect2/> */}
        {/* <RefEffect1/>  */}
        {/* <ClassUseRef/> */}
        {/* <ParentFocus/> */}
        <UseContext/>
      </div>
    );
  }
}

export default App;
 
