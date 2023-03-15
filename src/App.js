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

    </div>
  );
}

export default App;
