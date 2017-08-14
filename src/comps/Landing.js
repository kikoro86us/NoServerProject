import React, { Component } from 'react';
import Navbar from './Navbar'
import Footer from './Footer'
import IntroVideo from './IntroVideo'
import {DefaultPlayer as Video} from 'react-html5video'
import Slider from './../comps/Slider'

export default class Landing extends Component {

    render() {
        return (
            <div>
                <Navbar />
                
                <div id='introbg'>
                <IntroVideo />
                </div>
                
                <div id='travel1'>
                    <div>
                    <h1 id='t1'>1. TRAVEL MAKES YOU HEALTHIER</h1>
                    <p id='tp'>According to a joint study from the Global Commission on Aging and Transamerica Center for Retirement Studies, in partnership with the U.S. Travel Association, traveling actually keeps you healthier. The study found that women who vacation at least twice a year show a significantly lower risk of suffering a heart attack than those who only travel every six years or so.
                    The same is true for men. Men who do not take an annual vacation show a 20 percent higher risk of death and 30 percent greater risk of heart disease.</p>
                    </div>

                </div>
                
                <div id='travel2'>
                    <div>
                    <h1 id='t1'>2. TRAVEL RELIEVES STRESS</h1>
                    <p id='tp'>Although missing a connecting flight or losing baggage in a foreign airport is sure to boost your anxiety, traveling has been scientifically proven to lower stress levels, and rather dramatically. </p>
                    </div>
                </div>
                
                <div id='travel3'>
                    <div>
                    <h1 id='t1'>3. TRAVEL ENHANCES YOUR CREATIVITY</h1>
                    <p id='tp'>“Foreign experiences increase both cognitive flexibility and depth and integrativeness of thought, the ability to make deep connections between disparate forms,”explains Adam Galinsky, a professor at Columbia Business School who has authored a number of studies that investigate the concrete links between creativity and international travel.</p>
                    </div>
                </div>
                
                <div id='travel4'>
                    <div>
                    <h1 id='t1'>4. TRAVEL BOOSTS HAPPINESS AND SATISFACTION</h1>
                    <p id='tp'>Most people tend to be happier when they’re traveling and don’t have to worry about work, of course. However, one of the more interesting take aways from a Cornell University study is that people also experience a direct increase in happiness from just planning a trip. The study found that the anticipation of taking a vacation is far greater than the anticipation of acquiring a physical possession. Thus, the benefits of traveling abroad begin well before the trip does.</p>
                    </div>
                </div>

                <div id='travel5'>
                    <div>
                    <h1 id='t1'>5. TRAVEL LOWERS THE RISK OF DEPRESSION</h1>
                    <p id='tp'>While people tend to avoid the subject in our society, depression is unfortunately a major problem. Millions of Americans struggle with depression on a regular basis and it’s not uncommon for doctors to overprescribe medication for depression.

                    Luckily, healthier alternatives are available for escaping the hopelessness of a depressed state. According to research, travel may be one of them.

                    A study from the Marshfield Clinic in Wisconsin found that women who vacation at least twice a year are less likely to suffer from depression and chronic stress than women who vacation less than once every two years.</p>
                    </div>
                </div>




            </div>
        );
    }
}
