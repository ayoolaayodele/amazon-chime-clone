import React from "react";
import "./Feed.css";
import MinimizeIcon from "@material-ui/icons/Minimize";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import ClearIcon from "@material-ui/icons/Clear";

import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { Microphone } from "amazon-chime-sdk-component-library-react";
import { Camera } from "amazon-chime-sdk-component-library-react";
import { Laptop } from "amazon-chime-sdk-component-library-react";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Cog } from "amazon-chime-sdk-component-library-react";
import { Phone } from "amazon-chime-sdk-component-library-react";

import PersonAddIcon from "@material-ui/icons/PersonAdd";
import VideocamIcon from "@material-ui/icons/Videocam";
import ScreenShareIcon from "@material-ui/icons/ScreenShare";

function Feed() {
  return (
    <div className='Feed'>
      <div className='Feed__headerTop'>
        <div className='Feed__headerTopLeft'>
          <img
            src='  https://iconape.com/wp-content/png_logo_vector/amazon-chime-logo.png'
            alt=''
          />
        </div>

        <div className='Feed__headerTopMid'>
          <h4>Ayoola Ayodele Instant Meeting</h4>
        </div>

        <div className='Feed__headerTopRight'>
          <MinimizeIcon />
          <CheckBoxOutlineBlankIcon />
          <ClearIcon />
        </div>
      </div>

      <div className='Feed__headerBottom'>
        <div className='Feed__headerBottomLeft'>
          <p>Meeting ID: 2253 21 1340</p>
          <ArrowDropDownIcon />
        </div>

        <div className='Feed__headerBottomMid'>
          <div className='feed__icons'>
            <div className='icons'>
              <Microphone width='25px' />
              <span>Mute</span>
            </div>

            <div className='icons'>
              <Camera width='25px' />
              <span>Video</span>
            </div>

            <div className='icons'>
              <Laptop width='25px' />
              <span>Screen</span>
            </div>

            <div className='icons'>
              <MoreHorizIcon width='25px' />
              <span>More</span>
            </div>

            <div className='icons'>
              <Cog width='25px' />
              <span>Settings</span>
            </div>
            <div className='icons'>
              <Phone width='25px' color='red' />
              <span>End</span>
            </div>
          </div>
        </div>
      </div>

      <div className='Feed__details'>
        <div className='feed__detail'>
          <h4>Ayoola Ayodele Instant Meeting</h4>
          <h6>Your Meeting Has Started</h6>
        </div>

        <div className='Feed__detailsIcon'>
          <div className='feed__MeetingIcons'>
            <div className='Feedicons'>
              <PersonAddIcon />
              <p>Invite Others</p>
            </div>
            <div className='Feedicons'>
              <VideocamIcon />
              <p>Start Webcam</p>
            </div>
            <div className='Feedicons'>
              <ScreenShareIcon />
              <p>Share Screen</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feed;
