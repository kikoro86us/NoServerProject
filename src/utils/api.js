import axios from 'axios'

export function findCurrency(rates){
    // console.log(rates)
    return axios.get(`http://api.fixer.io/latest?base=${rates}`).then(function(response){
        console.log(response.data)
         return response.data.rates
    })
}