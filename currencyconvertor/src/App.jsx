import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo';
function App() {
 
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [options, setOptions] = useState([]);
  const [isloading, setIsloading] = useState(true);

  const currencyInfo = useCurrencyInfo(from);
  console.log("currencyInfo",currencyInfo)
  
  useEffect(() => {
   
      if (currencyInfo) {
       
        setOptions(() => Object.keys(currencyInfo));
        setIsloading(false);
      } else {
        setIsloading(true);
      }
  
  },[currencyInfo])
   
  const swap = () => {
      console.log("in swap")
        const to1 = to;
    const from1 = from;
    console.log(from1,to1)
        setFrom(to1);
        setTo(from1);
        setConvertedAmount(amount* currencyInfo[to])
  }
   const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    
      <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat flex  w-screen"
        style={{
            backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg')`,
        }}
      >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          {isloading ? "Loading..." : (
            <form onSubmit={(e) => { e.preventDefault(); convert() }}>
         <div className="w-full mb-4">
          <InputBox label={from} currencyOptions={options} amount={amount} onCurrencncyChange={(currency) => setFrom(currency)} selectCurrency={from} onAmountChange={(amount)=>setAmount(amount)} />
      </div>
        <div className="relative w-full h-0.5 mt-1">
                        <button
                            type="button"
                            className="absolute left-1/2  mt-2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
      <div className="w-full mt-1 mb-4"><InputBox   label={to}
                            amount={convertedAmount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setTo(currency)}
                            selectCurrency={to}
            amountDisable /></div>
        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
          </form>
        
      )}
          </div>
        </div>
      </div>
  // <div class="flex max-w-screen-xl min-w-full w-screen">
  // <div class="w-1/2 ... ">w-1/2</div>
  // <div class="w-1/2 ... ">w-1/2</div>
// </div>
  
  )
}

export default App
