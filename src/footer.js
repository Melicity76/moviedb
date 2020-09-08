import React from "react";
import './index.css';
import reactLogo from './reactlogo.png';
export class Footer extends React.Component {
  render() {
    return (
      <div class="footer">
        <p class="footertext">&copy; 2020 | Created by <a class='footerlink' href="https://philforster.co.uk">P Forster</a> | Developed with React<img class="reactlogo" src={reactLogo} alt="React Logo" /> </p>
      </div>
    );
  }
}


