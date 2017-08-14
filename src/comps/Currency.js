import React, { Component } from 'react';
import Navbar from './Navbar'
import Slider from './../comps/Slider'

import {findCurrency} from './../utils/api'

export default class Currency extends Component {
    constructor(){
        super();
        this.state={
             "base": "USD",
             "rates": null,
        }
    
        this.handleClick=this.handleClick.bind(this)
        this.handleChange=this.handleChange.bind(this)
      }

    handleClick(){
        findCurrency(this.state.base).then(response=>{
            let rates=[]
            for(let key in response){
                rates.push(`${key}: ${response[key]}`)
            }
            this.setState({
                rates: rates
            })
        })
    }

    handleChange(event) {
        this.setState({
          base: event.target.value
        })
      }

    render() {
        // console.log(this.state.rates)
        return (
            <div>
                <Navbar />
            
            <div id='currency'>
                <h1 id='crh1'>Currency</h1>
                <div id='searchbox'>
                <button id='button' onClick={this.handleClick}>Find Currency based on</button>
                <input value={this.state.base} onChange={this.handleChange} 
                type="text"/>
                </div>
                <div className='resultbox'>{this.state.rates && this.state.rates.map((x, i)=>(
                        <div id='result' key={i}>{x}</div>
                    ))}</div>

                {/* <Slider /> */}

            </div>
            {/* <p>
AUD Australian dollar
BGN Bulgarian lev
BRL Brazilian real
CAD Canadian dollar
CHF Swiss franc
CNY Chinese Yuan Renminbi
CZK Czech koruna
DKK Danish krone
GBP Pound sterling
HKD Hong Kong dollar
HRK Croatian kuna
HUF Hungarian forint
IDR Indonesian rupiah
ILS Israeli new shekel
INR Indian rupee
JPY Japanese yen
KRW Korean won
MXN Mexican peso
MYR Malaysian ringgit
NOK Norwegian krone
NZD New Zealand dollar
PHP Philippine peso
PLN Polish zloty
RON Romanian leu
RUB Russian ruble
SEK Swedish krona
SGD Singapore dollar
THB Thai baht
TRY Turkish lira
ZAR South African rand
EUR European euro
</p> */}
            
        </div>
   
        );
    }
}
