//free code camp project 
// https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-25--5-clock
/*
 Copyright 2020 jadon belezos

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
  }


  function 
  render() {
	return (
		<div id="clock25add5">
			<p id="break-label">Break Length:<span id="break-label-value">5</span></p>
			<p id="session-label">Session length: <span id="session-length-value">25</span></p>
			<p id="timer-label">Session</p>
		</div>
	  );
  }
}

document.addEventListener("DOMContentLoaded", function(){
  const domContainer = document.querySelector('#app-source');
	ReactDOM.render(e(LikeButton), domContainer);
});
