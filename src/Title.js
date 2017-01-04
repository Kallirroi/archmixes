import React from 'react';
import './App.css';
import './normalize.css';
import './skeleton.css';

class Title extends React.Component {
	render() {
		return (
        <div>
  			  <div className="row a" style={{marginLeft: '0%'}}> </div>
          <div className="row">
            <div className="one column fixed" id="titlestylz">
              <h1>Archmixes</h1>
            </div>
          </div>
        </div>
	    )
	}
}


export default Title;

