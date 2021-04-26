import React from "react";
import "./Sidebar.css";
import CallIcon from "@material-ui/icons/Call";
import { Meeting } from "amazon-chime-sdk-component-library-react";
import MoreVertIcon from "@material-ui/icons/MoreVert";

function Sidebar(props) {
  return (
    <div>
      <div className='home__Sidebar'>
        <div className='heading'>
          <Meeting width='15px' />
          <h4>Calls and Meeting</h4>
        </div>
        <div className='paragraph'>
          <p>Ayoola Ayodele Instant Meeting</p>
          <CallIcon className='callIcon' />
          <MoreVertIcon className='callIcon' />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
