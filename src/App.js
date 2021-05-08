import './App.css';
import React, { useState } from 'react';
import firebase from 'firebase';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; 

function App() {
  //var firebase = require('firebase');
  const firebaseConfig = {
    apiKey: "AIzaSyBaGPozC5MBfdRYzgr3PZGQbYpBGzMixoo",
    authDomain: "hack-be1db.firebaseapp.com",
    databaseURL: "https://hack-be1db-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "hack-be1db",
    storageBucket: "hack-be1db.appspot.com",
    messagingSenderId: "472477155034",
    appId: "1:472477155034:web:d55b05cd850ca34af92fe3",
    measurementId: "G-4ZVM01QMJE"
  };
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  const db = firebase.app();
  const dateRef = db.database().ref("dates"); 

  // const [firstName, setFirstName] = useState();
  // const [lastName, setLastName] = useState();
  // const [select, setSelect] = useState();
  // const handleChange = (e) => {
  //   this.setState({select: e.target.value});
  // }
  // function firstChange(e) {
  //   setFirstName(e.target.value);
  // }
  // function lastChange(e) {
  //   setLastName(e.target.value);
  // } 
  const [startDate, setStartDate] = useState(new Date());
  let children = 0;
  let now = new Date();
  now.setDate(now.getDate() + 14);

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{color: '#000' }}>
      <img src="logo.png" alt="logo" style={{width: '200px', height: '200px;'}}></img>
        <div className="container-fluid">
          
        </div>
      </nav>
      <h1>Store</h1>
      <div className="container-sm"> 
        <div className="mb-3 row">
            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">First Name</label>
            <div className="col-sm-10">
              <input className="form-control" id="first" name="first-name" type="text"></input>
            </div>
        </div>
        <div className="mb-3 row">
            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Last Name</label>
            <div className="col-sm-10">
              <input className="form-control" id="last" name="last-name" type="text"></input>
            </div>
        </div>
        <select htmlFor="time" id="drop">
          <option value="09:00 - 09:30">09:00 - 09:30</option>
          <option value="09:30 - 10:00">09:30 - 10:00</option>
          <option value="10:00 - 10:30">10:00 - 10:30</option>
          <option value="10:30 - 11:00">10:30 - 11:00</option>
          <option value="11:00 - 11:30">11:00 - 11:30</option>
          <option value="11:30 - 12:00">11:30 - 12:00</option>
          <option value="12:00 - 12:30">12:00 - 12:30</option>
          <option value="12:30 - 13:00">12:30 - 13:00</option>
          <option value="13:00 - 13:30">13:00 - 13:30</option>
          <option value="13:30 - 14:00">13:30 - 14:00</option>
          <option value="14:00 - 14:30">14:00 - 14:30</option>
          <option value="14:30 - 15:00">14:30 - 15:00</option>
          <option value="15:00 - 15:30">15:00 - 15:30</option>
          <option value="15:30 - 16:00">15:30 - 16:00</option>
          <option value="16:00 - 16:30">16:00 - 16:30</option>
          <option value="16:30 - 17:00">16:30 - 17:00</option>
          <option value="17:00 - 17:30">17:00 - 17:30</option>
          <option value="17:30 - 18:00">17:30 - 18:00</option>
          <option value="18:00 - 18:30">18:00 - 18:30</option>
          <option value="18:30 - 19:00">18:30 - 19:00</option>
          <option value="19:00 - 19:30">19:00 - 19:30</option>
          <option value="19:30 - 20:00">19:30 - 20:00</option>
          <option value="20:00 - 20:30">20:00 - 20:30</option>
          <option value="20:30 - 21:00">20:30 - 21:00</option>
          <option value="21:00 - 21:30">21:00 - 21:30</option>
        </select><br></br>
          <DatePicker 
          selected={startDate}
          onChange={date => setStartDate(date)} 
          dateFormat="dd/MM/yyyy" 
          id="date-picker"
          minDate={new Date()}
          maxDate={now}>
          </DatePicker><br></br>
          <button className="btn btn-success" onClick={(e) => {
            e.preventDefault();
            let hourValue = document.getElementById("drop").value;
            let dateValue = document.getElementById("date-picker").value;
            let firstName = document.getElementById("first").value;
            let lastName = document.getElementById("last").value;
            const dateSelect = db.database().ref("dates/" + startDate.toDateString()).child(hourValue);
            dateSelect.on("value", function(snapshot) {children = snapshot.numChildren();});
            if (children > 10) {
              console.log(children);
              alert("Too many people at that hour. Please select another hour");
              return;
            }
            else {
              const datePush = dateSelect.push();
              datePush.set({
                first_name : firstName,
                last_name : lastName
              });
              alert("Scheduled an a visit for " + startDate.toDateString() + " at " + hourValue);
            }
        }}>
          Submit</button>
      </div>
    </div>
  );
}

export default App;
