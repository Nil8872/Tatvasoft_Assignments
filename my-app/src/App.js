import './App.css';
import Counter from './component/Counter';
import About from './pages/About';
import Home from './pages/Home';
import { Component } from 'react';

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
        {this.state.currentPage === "home" ? <Home /> : <About />}
        <nav>
          <button style={{ margin:'10px',padding:'10px', fontSize:'20px', borderRadius:'10px', cursor:'pointer'}} onClick={() => this.handlePageChange("home")}>Home</button>
          <button style={{margin:'10px',padding:'10px', fontSize:'20px', borderRadius:'10px', cursor:'pointer'}} onClick={() => this.handlePageChange("about")}>About</button>
        </nav>
      </div>
    );
  }
}

export default App;