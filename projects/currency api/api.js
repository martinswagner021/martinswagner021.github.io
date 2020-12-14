document.addEventListener("DOMContentLoaded", () => {
    const submit = document.querySelector(".submit-currency")
    
    submit.onclick = async function doCurrency(){
        //variables
        const currency_p = document.querySelector(".currency")
        const convert_to = document.querySelector("#convert-to").value

        //fetch
        function findCurrency () {
            const base = document.getElementById("base").value
            return fetch(`https://api.exchangeratesapi.io/latest?base=${base}`)
        }

        //await or then to convert the data
        try{
            const findCurrencyResponse = await findCurrency()
            const currencyData = await findCurrencyResponse.json()
            const convertion = currencyData.rates[convert_to]
            currency_p.innerHTML = `${convertion.toFixed(2)}`
        }
        catch(error) {
            console.log(error)
        }
    }

})