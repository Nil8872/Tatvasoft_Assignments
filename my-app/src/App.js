import './App.css';
import Counter from './component/Counter';
import About from './pages/About';
import Home from './pages/Home';
import { Component } from 'react';
import Title from './component/Title';
import LoginForm from './component/LoginForm';
import InputRef from './component/InputRef';
import FocusInput from './component/FocusInput'; 
import UserList from './component/UserList';
import RenderPropsComponents from './component/RenderPropsComponents';
import ComA from './component/ComA';
import { UserNameProvider } from './component/UserNameContex';
 
 
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

        {/* Day - 6  */}
         {/* <Title/> */}

        {/* Day - 7 */}
        {/* <LoginForm/> */}

        {/* Day - 8 */}
        {/* <FocusInput/> */}

        {/* Day - 9 */}
         {/* <Home/> */}
         {/* <RenderPropsComponents rander={()=><h3>I am coming from render props</h3>}/> */}
         
        {/* Day - 10 */}
        
        {/* <UserNameProvider value={"Nilesh"}>
          <ComA/>
        </UserNameProvider> */}
       


      </div>
    );
  }
}

export default App;
 
