import React, { Component } from "react";
import Title from "./Title";
import Photowall from "./photowall";
import AddPhoto from "./AddPhoto";
import { Route } from "react-router-dom";
import {removePost}  from '../redux/actions'
import {Link} from 'react-router-dom';

class Main extends Component {
  constructor() {
    super();
    console.log("constructor");
  }  

  
  render() {
    console.log("render");
    console.log(this.props)
    return (
      <div>
        <h1>
          <Link to="/">Photowall</Link>
        </h1>
        <Route exact path="/" render={() => (
            <div>
              
              <Photowall {...this.props}/>
            </div>
        )}
        />
        <Route exact path="/AddPhoto" render = {({history}) => (
          <AddPhoto {...this.props} onHistory={history}/>
        )}/>
      </div>
    );
  }
}



export default Main
