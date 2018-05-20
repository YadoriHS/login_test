import React from 'react';
import {render} from 'react-dom';

export class Thanks extends React.Component {
  render() {
    return (
      <div class="container">
	        <div class="row">
			    <div class="col-md-5 mx-auto">
				    <div id="first">
				        <div class="myform form ">
				            <div class="logo mb-3">
					            <div class="col-md-12 text-center">
					            	<h1>登録ありがとうございました。</h1>
					            </div>
				        	</div>               
				        </div>
				    </div>
			    </div>
			</div>
		</div>
    );
  }
}

Thanks.contextTypes = {router:()=> React.PropTypes.func.isRequired };

export default Thanks;