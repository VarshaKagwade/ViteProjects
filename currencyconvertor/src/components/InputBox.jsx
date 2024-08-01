import React, { useState } from 'react'


const InputBox = ({ label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false, }) => {

  return (
      <div>
          <div className='flex bg-white p-3 rounded-lg text-sm'>
              <div className='w-1/2'>
                  <label className='text-black/40 mb-2 inline-block'>{label}</label>
                   <input type="number" placeholder="Amount" className='outline-none w-full bg-transparent py-1.5'
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}/>
              
              </div>
            
             <div className='w-1/2 flex flex-wrap justify-end text-right'> <label className='text-black/40 mb-2 w-full'>Currency Type</label>
             <select  value={selectCurrency} className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none'
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}>    {currencyOptions&&currencyOptions.map((currency) => (
                            <option key={currency} value={currency}>
                            {currency}
                            </option>
                        ))}</select>
              </div>
              </div>

          <div className='flex justify-between'>
              <div>
                 
             
              </div>
             <div> 
              </div>
              </div>
              </div>
         

  )
}

export default InputBox