import React, { Component } from 'react';
import Navbar from './Navbar'
import Slider from './../comps/Slider'
// import Footer from './Footer'

import germany from "../img/passportrank/Germany 1.png";
import singapore from "../img/passportrank/Singapore 1.png";

import southkorea from "../img/passportrank/South Korea 2.png";
import sweden from "../img/passportrank/Sweden 2.png";

import denmark from "../img/passportrank/Denmark 3.png";
import finland from "../img/passportrank/Finland 3.png";
import france from "../img/passportrank/France 3.png";
import italy from "../img/passportrank/Italy 3.png";
import japan from "../img/passportrank/Japan 3.png";
import norway from "../img/passportrank/Norway 3.png";
import spain from "../img/passportrank/Spain 3.png";
import uk from "../img/passportrank/UnitedKingdom 3.png";
import usa from "../img/passportrank/USA 3.png";

import austria from "../img/passportrank/4 austria.png";
import belgium from "../img/passportrank/4 belgium.png";
import luxembourg from "../img/passportrank/4 luxembourg .png";
import netherlands from "../img/passportrank/4 netherlands.png";
import portugal from "../img/passportrank/4 portugal.png";
import switzerland from "../img/passportrank/4 switzerland.png";

import canada from "../img/passportrank/5 canada.png";
import ireland from "../img/passportrank/5 ireland.png";
import malaysia from "../img/passportrank/5 malaysia.png";

import australia from "../img/passportrank/6 australia.png";
import greece from "../img/passportrank/6 greece.png";
import newzealand from "../img/passportrank/6 newzealand.png";






export default class Passport extends Component {
    // constructor(){
    //     super();
    //     this.state={
    //         bool : true
    //     }

    // this.handleClick=this.handleClick.bind(this)
    // }

//     handleClick(){
//             this.setState({bool:!this.state.bool})
// }


    render() {
        return (
            <div>
                <Navbar />
            
            <div className='passport'>

                <div>
                <h1 id='passportrank'>Check your passport power!</h1>
                {/* <button className='passportbt'>Flip them again</button> */}
                </div>

                <div className='one'>

                    <div>
                    <img id='r1' className='r1' width="200" height="289" src={germany}/>
                    <div className="legend">Germany #1</div>
                    <div className="legend">Visa-free score : 158</div> 
                    </div>

                    <div>
                    <img id='r2' width="200" height="289" src={singapore}/>
                    <div className="legend">Singapore #1</div>
                    <div className="legend">Visa-free score : 158</div>
                    </div>

                </div>


                <div className='two'>
                    <div>
                    <img id='r3' width="200" height="289" src={southkorea}/>
                    <div className="legend">South Korea #2</div>
                    <div className="legend">Visa-free score :157</div>

                    </div>

                    <div>
                    <img id='r4' width="200" height="289" src={sweden}/>
                    <div className="legend">Sweden #2</div>
                    <div className="legend">Visa-free score :157</div>
                    </div>
                </div>

                <div className='three'>
                    <div>
                    <img id='r5' width="200" height="289" src={denmark}/>
                    <div className="legend">Denmark #3</div>
                    <div className="legend">Visa-free score :156</div>
                    </div>

                    <div>
                    <img id='r6' width="200" height="289" src={finland}/>
                    <div className="legend">Finland #3</div>
                    <div className="legend">Visa-free score :156</div>
                    </div>

                    <div>
                    <img id='r7' width="200" height="289" src={france}/>
                    <div className="legend">France #3</div>
                    <div className="legend">Visa-free score :156</div>
                    </div>

                    <div>
                    <img id='r8'width="200" height="289" src={italy}/>
                    <div className="legend">Italy #3</div>
                    <div className="legend">Visa-free score :156</div>
                    </div>

                    <div>
                    <img id='r9'width="200" height="289" src={usa}/>
                    <div className="legend">USA #3</div>
                    <div className="legend">Visa-free score :156</div>
                    </div>

                    <div>
                    <img id='r10'width="200" height="289" src={uk}/>
                    <div className="legend">UK #3</div>
                    <div className="legend">Visa-free score :156</div>
                    </div>

                    <div>
                    <img id='r11' width="200" height="289" src={norway}/>
                    <div className="legend">Norway #3</div>
                    <div className="legend">Visa-free score :156</div>
                    </div>

                    <div>
                    <img id='r12' width="200" height="289" src={japan}/>
                    <div className="legend">Japan #3</div>
                    <div className="legend">Visa-free score :156</div>
                    </div>

                    <div>
                    <img id='r13' width="200" height="289" src={spain}/>
                    <div className="legend">Spain #3</div>
                    <div className="legend">Visa-free score :156</div>
                    </div>

                </div>

                <div className='four'>
                    <div>
                    <img id='r14' width="200" height="289" src={austria}/>
                    <div className="legend">Austria #4</div>
                    <div className="legend">Visa-free score :155</div>
                    </div>

                    <div>
                    <img id='r15' width="200" height="289" src={belgium}/>
                    <div className="legend">Belgium #4</div>
                    <div className="legend">Visa-free score :155</div>
                    </div>

                    <div>
                    <img id='r16' width="200" height="289" src={luxembourg}/>
                    <div className="legend">Luxembourg #4</div>
                    <div className="legend">Visa-free score :155</div>
                    </div>

                    <div>
                    <img id='r17' width="200" height="289" src={netherlands}/>
                    <div className="legend">Netherlands #4</div>
                    <div className="legend">Visa-free score :155</div>
                    </div>

                    <div>
                    <img id='r18' width="200" height="289" src={portugal}/>
                    <div className="legend">Portugal #4</div>
                    <div className="legend">Visa-free score :155</div>
                    </div>

                    <div>
                    <img id='r19' width="200" height="289" src={switzerland}/>
                    <div className="legend">Switzerland #4</div>
                    <div className="legend">Visa-free score :155</div>
                    </div>
                </div>

                <div className='five'>
                    <div>
                    <img id='r20' width="200" height="289" src={canada}/>
                    <div className="legend">Canada #5</div>
                    <div className="legend">Visa-free score :154</div>
                    </div>

                    <div>
                    <img id='r21' width="200" height="289" src={ireland}/>
                    <div className="legend">Ireland #5</div>
                    <div className="legend">Visa-free score :154</div>
                    </div>

                    <div>
                    <img id='r22' width="200" height="289" src={malaysia}/>
                    <div className="legend">Malaysia #5</div>
                    <div className="legend">Visa-free score :154</div>
                    </div>
                </div>

                <div className='six'>
                    <div>
                    <img id='r23' width="200" height="289" src={australia}/>
                    <div className="legend">Australia #6</div>
                    <div className="legend">Visa-free score :153</div>
                    </div>

                    <div>
                    <img id='r24' width="200" height="289" src={greece}/>
                    <div className="legend">Greece #6</div>
                    <div className="legend">Visa-free score :153</div>
                    </div>

                    <div>
                    <img id='r25' width="200" height="289" src={newzealand}/>
                    <div className="legend">New Zealand #6</div>
                    <div className="legend">Visa-free score :153</div>
                    </div>

                </div>





                </div>
        </div>
   
        );
    }
}
