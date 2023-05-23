import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

export class App extends Component {
  pagesize=10;
  render() {
    return (
      <div>
       <Router>
        <Navbar/>   
        <Routes>      
        {/* key="" element me use kia hai bcz react mount ni kr raha i mean update ni krega component jab tak unique keynaa do usko lgega same component hai toh dusri category k liye ku mount toh
        toh dusre link per click krne k  baad bi news category update hokrshow ni hogi like agr sports se science per tap kia toh without key sports news wala hi show hoga  jbki url chngehoga but contentni without key
        */} 
        <Route path="/" element={ <News key="general" pageSize={this.pagesize} country="in" category="general"/> } /> 
        <Route path="/sports" element={ <News key="sports" pageSize={this.pagesize} country="in" category="sports"/> } />
        <Route path="/science" element={ <News key="science" pageSize={this.pagesize} country="in" category="science"/>} />
        <Route path="/business" element={ <News key="business" pageSize={this.pagesize} country="in" category="business"/> } />
        <Route path="/entertainment" element={ <News key="entertainment" pageSize={this.pagesize} country="in" category="entertainment"/> } />
        <Route path="/health" element={ <News key="health" pageSize={this.pagesize} country="in" category="health"/> } />
        <Route path="/technology" element={ <News key="technology" pageSize={this.pagesize} country="in" category="technology"/> } />
       </Routes>
       </Router>
      </div>
    )
  }
}

export default App

