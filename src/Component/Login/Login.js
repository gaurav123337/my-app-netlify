import React, {
  Component
} from "react";
import { Redirect } from 'react-router';
import Search from '../Search';

import {getAllStarwarsValue} from '../utility/utility';
import history from '../../history';
const URL = "https://swapi.dev/api/planets/";

class Login extends Component {
   constructor(props){
      super();
      this.state={
         isLoggedIn: false
      }
   }

login = async(e) =>{
  e.preventDefault();
  const {uname, pwd} = this.state;
  console.log(uname, 'uname', pwd, 'pwd')
  let dataVal = await getAllStarwarsValue(URL);
  console.log(dataVal, 'dataVal');
  let people = JSON.parse(localStorage.getItem('people'));

  dataVal.some((currVal) => {
     if(uname === currVal.name && pwd === currVal.birth_year ){
        // this.redirectToSearch();
        this.setState({
           isLoggedIn: true
        })
      }
  })
}

redirectToSearch = () => {
   console.log('Called search', history)
  history.push('/Search');
}

change =(e) => {
  this.setState({
    [e.target.name] : e.target.value
  })
}

  render() {
     console.log(this.state.isLoggedIn, 'isLoggedIn')
    return (
          <>
      <div className="sidenav">
         <div className="login-main-text">
            <h2>Application<br /> Login Page</h2>
            <p>Login or register from here to access.</p>
         </div>
      </div>
      <div className="main">
         <div className="col-md-6 col-sm-12">
            <div className="login-form">
               <form>
                  <div className="form-group">
                     <label>User Name</label>
                     <input type="text" className="form-control" name="uname" placeholder="User Name" onChange={(e) => this.change(e)}/>
                  </div>
                  <div className="form-group">
                     <label>Password</label>
                     <input type="password" className="form-control" name="pwd" placeholder="Password" onChange={(e) => this.change(e)}/>
                  </div>
                  <button type="submit" className="btn btn-black mr-2" onClick={this.login}>Login</button>
               </form>
            </div>
         </div>
         {
            this.state.isLoggedIn === true ?  <Redirect to="/Search" /> : null
         }
      </div>
      </>
    )
  }


}

export default Login;
