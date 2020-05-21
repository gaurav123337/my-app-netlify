import React, {
  Component
} from "react";

import {getAllStarwarsValue} from '../utility/utility';
import history from '../../history';

const URL = "http://swapi.dev/api/planets/";


class Search extends Component {
  constructor(props){
    super(props);
    this.state ={
      allPlanet:[],
      details:''
    }
  }


search = () =>{
  const {search} = this.state;
  console.log(URL, 'url')
  if(search) {
    getAllStarwarsValue(URL);
    let planets = JSON.parse(localStorage.getItem('planets'));
    let str1 = search;
    let re = new RegExp(str1, "g");
    let allSearch = planets.filter((planet, index) => planet.name.match(re) && planet);
    this.setState({
      allPlanet: allSearch
    })
  } else {
    this.setState({
      allPlanet: []
    })
  }

}

change =(e) => {
  this.setState({
    [e.target.name] : e.target.value
  }, () => {
    this.search();
  })
}

getDetail = (planet) => {
  // let html = '';
  //  for(item in detailItem){
  //     html = <li><span>{item}:</span><span>detailItem[item]</span></li>
  //   }
  //   return html;
  console.log(planet, 'planet');
  this.renderDes(planet)
}

renderDes = (detailItem) => {
  let html = '';
   for(let item in detailItem){
      html = html+`<li class="list-group-item"><span class="badge badge-primary badge-pill">${item}:</span><span style="word-break: break-all;"> ${detailItem[item]}</span></li>`;
    }
    console.log(html, 'html');
    this.setState({
      details: html,
      allPlanet: []
    });


}

  render() {
    const {allPlanet, details} = this.state;
    return (
      <>
      <form style={{textAlign: "end"}}>
<button type="submit" className="btn btn-black mr-2" onClick={() => history.push('/')}>Logout</button>
      </form>

        <div className="main">
          <div className="col-md-6 col-sm-12">
              <div className="login-form">
                <div className="form-group mb-0">
                    <input type="text" className="form-control" name="search" placeholder="Search ... " onChange={(e) => this.change(e)}/>
                </div>
                <div className="dropdown" >
                <div id="myDropdown" className="dropdown-content">
                  {
                    allPlanet.length > 0 && allPlanet.map((planet, index) => {
                        return (
                          <a href="#about" style={
                            { fontWeight: parseInt(planet.population)>1000000 ? 600 : 100 }}
                            key={index} onClick={() => this.getDetail(planet)}> {planet.name}
                          </a>
                        )
                      })
                  }

                </div>
                <div style={{margin: "10px"}}>
                  <h3>Planet detail:</h3>
                  <ul className="list-group" dangerouslySetInnerHTML={{__html: details}}></ul>
                </div>

                </div>
              </div>
          </div>
        </div>
      </>
    )
  }


}

export default Search;
