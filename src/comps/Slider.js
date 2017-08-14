import React, { Component } from 'react'



import Slider from 'react-slick'
import austria from "../img/passport/at.png";
import belgium from "../img/passport/be.png";
import denmark from "../img/passport/de.png";
import france from "../img/passport/fr.png";
import ireland from "../img/passport/ireland.png";
import netherlands from "../img/passport/netherlands.png";

// import ReactBootstrapSlider from 'react-bootstrap-slider';

// // import "bootstrap/dist/css/bootstrap.css"

export default class Carousel extends Component {
//     constructor(){
//         super()
//         this.state={
//             // photos: [austria, belgium, denmark, france, ireland, netherlands]
//             step: ,
//             max: ,
//             min: ,
//             value: 
//         }
//     }
    
    render() {
            const settings = {
                dots: true,
                infinite: true,
                speed: 800,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 5000,
                arrows: false
              };

            return (
              <Slider {...settings}>
                <div>
                    <img src={austria} />
                    <p className="legend">Austria</p>
                </div>

                <div>
                    <img src={belgium}/>
                    <p className="legend">Belgium</p>
                </div>

                <div>
                    <img src={denmark}/>
                    <p className="legend">Denmark</p>
                </div>

                <div>
                    <img src={france} />
                    <p className="legend">Frace</p>
                </div>

                <div>
                    <img src={ireland}/>
                    <p className="legend">Ireland</p>
                </div>

                <div>
                    <img src={netherlands}/>
                    <p className="legend">Netherlands</p>
                </div>

              </Slider>
            );


            // <ReactBootstrapSlider
            // value={this.state.currentValue}
            // change={this.changeValue}
            // slideStop={this.changeValue}
            // step={this.state.step}
            // max={this.state.max}
            // min={this.state.min}
            // orientation="vertical"
            // reversed={true}
            // disabled="disabled" />

          }
        
    }







// // import React, { Component } from 'react'
// // import ReactDom from 'react-dom'
// // import {Carousel} from 'react-responsive-carousel'
// // import austria from "../img/passport/at.png";
// // import belgium from "../img/passport/be.png";
// // import denmark from "../img/passport/de.png";
// // import france from "../img/passport/fr.png";
// // import ireland from "../img/passport/ireland.png";
// // import netherlands from "../img/passport/netherlands.png";


// // export default class Slider extends Component {
// //     render() {
// //         return(
// //         <Carousel showArrows={false} autoPlay interval={3000} infiniteLoop>
// //         <div>
// //             <img src={austria} />
// //             <p className="legend">Austria</p>
// //         </div>
// //         <div>
// //             <img src={belgium}/>
// //             <p className="legend">Belgium</p>
// //         </div>
// //         <div>
// //             <img src={denmark}/>
// //             <p className="legend">Denmark</p>
// //         </div>
// //         <div>
// //             <img src={france} />
// //             <p className="legend">Frace</p>
// //         </div>
// //         <div>
// //             <img src={ireland}/>
// //             <p className="legend">Ireland</p>
// //         </div>
// //         <div>
// //             <img src={netherlands}/>
// //             <p className="legend">Netherlands</p>
// //         </div>
// //     </Carousel>
// //         )
// //     }
// // }

// // Don't forget to include the css in your page 
// // <link rel="stylesheet" href="carousel.css"/>
// // Begin DemoSliderControls



