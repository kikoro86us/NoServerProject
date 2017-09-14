import React, { Component } from 'react';
import myVid from "./../vid/25.webm";

export default class IntroVideo extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return(
            <div>
                 <video id='intro' autoPlay muted loop className="css-background-video" data-state="play">
                     <source src={myVid} type="video/mp4"/>
                 </video>
                 <h1 id='introwelcome'>Ready to Travel ?</h1>
            
            </div>
        );
    }
}

