import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';


import Header from './components/layout/Header';
import NavBar from './components/layout/NavBar';
//importing Routes
import About from './components/pages/About';
import Login from './components/pages/Login';
import Karte from './components/pages/Karte';

//importing components
import Events from './components/events/Events';


import './App.css';

class App extends Component {
  state = {
    events: [
      {
        id: '1',
        title: '80er Parteeyyyy',
        date: '25-11-2020',
        descr: 'Partyy hardd',
        info_url: '',
        img_url: '',
      },
      {
        id: '2',
        title: 'Coronoaparty',
        date: '25-11-2020',
        descr: 'Partyy harder',
        info_url: '',
      },
      {
        id: '3',
        title: 'Kirschblütenfest',
        date: '25-11-2020',
        descr: 'Gratis Wein und gute Laune',
        info_url: '',
      }
    ]
  }

  render(){
    return (
      <Router>
        <div className="App">
          <Header/>
          <Route exact path="/" render={props =>(
            <React.Fragment>
              <NavBar/>
                <div className='container'>
                  <div className='eventliste'>
                    <h1>Events und Veranstaltungen</h1>
                    <Events events={this.state.events}/>
                  </div>
                  <div className='calendar'>
                    <p>Kalendar</p>
                  </div>
                </div>
              
            </React.Fragment>
          )} />

          <Route path="/login" render={props =>(
            <React.Fragment>
              <Login/>
            </React.Fragment>
          )} />

          <Route path="/map" render={props =>(
            <React.Fragment>
              <Karte/>
            </React.Fragment>
          )} />

          <Route path="/about" component={About} />  
      
        </div>
      </Router>
    );
  }
}



export default App;
