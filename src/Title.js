import React from 'react';
import { Link  } from 'react-router';

import './App.css';
import './normalize.css';
import './skeleton.css';

class Title extends React.Component {
	render() {
		return (
        <div className="Title">
          <div className="Links"><Link to="/">Archmixes</Link></div> 
        </div>
	    )
	}
}


export default Title;

