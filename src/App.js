import { useState } from 'react';
import './App.css';
import Header from './pages/Header';
import Left from './pages/Left';
// import UsersList from './pages/UsersList';
import Footer from './pages/Footer';
import Main from './pages/Main';


function App() {
  // // let counter = 0;

  // let [counter, setCounter] = useState(0);
  // let [showModal, setshowModal] = useState(false);



  // const hadleClickCounter = () => {
  //   setCounter(++counter);
  //   console.log(counter);
  // };

  // const hadleShowModel = () => {
  //   setshowModal(!showModal)
  // };


  return (
    <div className="App">

      <Header />

      <div className='container'>
        <Left />
        <Main />
      </div>
      
      <Footer />

    </div>
  );
}

export default App;
