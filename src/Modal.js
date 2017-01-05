import React from 'react';
import './App.css';
import './normalize.css';
import './skeleton.css';


class Modal extends React.Component {
	render() {
		return (
			<div className="Modal">
					<div id="myModal" className="modal">
				        <div className="modal-content">
				          <span className="close">×</span>
				          <iframe width={960} height={630} src="https://www.youtube.com/embed/4JipHEz53sU" frameBorder={0} allowFullScreen />
				        </div>
			      </div>
	    	</div>
	    )
	}
}


export default Modal;

