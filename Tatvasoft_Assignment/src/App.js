import "./App.css";
import Counter from "./component/Counter";
import About from "./pages/About";
import Home from "./pages/Home";
import React , {useReducer } from "react";
import Title from "./component/Title";
import LoginForm from "./component/LoginForm";
import InputRef from "./component/InputRef";
import FocusInput from "./component/FocusInput";
import UserList from "./component/UserList";
import RenderPropsComponents from "./component/RenderPropsComponents";
import ComA from "./component/ComA";
import { UserNameProvider } from "./component/UserNameContex";
import Users from "./component/Users";
import Post from "./component/Post";
import CounterHook from "./component/CounterHook";
import LoginFormHook from "./component/LoginFormHook";
import UserDetail from "./component/UserDetail";
import PostDetail from "./component/PostDetail";
import CounterIncUseReduce from "./component/CounterIncUseReduce";
import {initialState , reducer } from './component/ReducerCounter'
import UsersClone from './component/UsersClone'
import RegisterUser from "./component/RegisterUser";
import CustomHook from "./practice/CustomHook";
import CustomHook2 from "./practice/CustomHook2";
import RenderOne from "./component/RenderOne";


export const GlobalCounter = React.createContext();
function App() {
  
  // ***************8 Toggle About and Home Page ************8
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     currentPage: true,
  //   };
  //   this.handlePageChange = this.handlePageChange.bind(this);
  // }

  // handlePageChange(currentPage) {
  //   this.setState({
  //     currentPage: !currentPage,
  //   });
  // }

  
  // render() {
    // ************* For Counter  Day - 19 **************
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
      <div className="App">
        {/*
        {this.state.currentPage  ? <Home /> : <About />}
        <nav>
          <button style={{ margin: '10px', padding: '10px', fontSize: '20px', borderRadius: '10px', cursor: 'pointer' }} onClick={() => this.handlePageChange(this.state.currentPage)}>Home</button>
          <button style={{ margin: '10px', padding: '10px', fontSize: '20px', borderRadius: '10px', cursor: 'pointer' }} onClick={() => this.handlePageChange("about")}>About</button> 
        </nav>
         */}

        {/* Week-2 */}

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

        {/* Week-3 */}

        {/* Day - 11 */}
        {/* <Users/> */}

        {/* Day - 12 */}
        {/* <Post/> */}

        {/* Day - 13 */}
        {/* <CounterHook/> */}

        {/* Day - 14 */}
        {/* <LoginFormHook/> */}

        {/* Day - 15 */}
        {/* <Users/> */}

        {/* Week-3 */}

        {/* Day - 17 */}
        {/* <PostDetail/> */}

        {/* Day - 18  */}
        {/* <UserNameProvider value={"Nilesh"}>
            <ComA/>
          </UserNameProvider> */}

        {/* <CounterIncUseReduce/> */}

        {/* <GlobalCounter.Provider
          value={{ Counterdispatch: dispatch, counterState: state }}>
          <div className="countValue">
            <h1>{state.count}</h1>
          </div>
          <CounterIncUseReduce />
        </GlobalCounter.Provider> */}

        {/* <UsersClone/> */}

         {/* Day - 19  */}
        {/* <RegisterUser/> */}

        {/* Day - 20 */}
        <RenderOne/>

     
      </div>
    );
  // }
}

export default App;
