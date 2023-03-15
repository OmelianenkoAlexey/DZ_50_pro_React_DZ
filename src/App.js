import { useState } from 'react';
import './App.css';
import Header from './pages/Header';
import Left from './pages/Left';
import UsersList from './pages/UsersList';
import Footer from './pages/Footer';




function App() {
  // // let counter = 0;

  // let [counter, setCounter] = useState(0);
  // let [showModal, setshowModal] = useState(false);

  // // ! так под капотом в чистом js
  // // function useState(value) {
  // //   return [value, (newValue) => value = newValue]
  // // };

  // const hadleClickCounter = () => {
  //   setCounter(++counter);
  //   console.log(counter);
  // };

  // const hadleShowModel = () => {
  //   setshowModal(!showModal)
  // };

  // const someStyles = {
  //   width: "200px",
  //   height: "200px",
  //   backgroundColor: "green",
  //   color: "white",
  //   fontSize: "25px",
  //   display: showModal ? "block" : "none",
  // }

  return (
    <div className="App">

      <Header />
      
      <div className='container'>
        <Left />
        <UsersList />
      </div>

      <Footer />


      {/*  <p>Counter:</p>
      <p>
        <b>{counter}</b>
      </p>
      <button onClick={hadleClickCounter}>Click to me</button>
      <button onClick={hadleShowModel}>Show Modal</button>

      {
        showModal
          ? <div style={{
            width: "100px",
            height: "100px",
            backgroundColor: "yellow",
          }}>
            Here is Modal
          </div>
          : <div style={{
            width: "100px",
            height: "100px",
            backgroundColor: "blue",
          }}>
            Here is Modal
          </div>
      }

      {
        showModal
        && <div style={{
          width: "200px",
          height: "200px",
          backgroundColor: "red",
          color: "white",
          fontSize: "25px",
        }}>
          Here is Modal
        </div>
      }

      <div style={someStyles}>
        Here is Modal
      </div> */}



      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
