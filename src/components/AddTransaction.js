import React, { useState, useContext } from 'react'
import { GlobalContext } from "../context/GlobalState"

export const AddTransaction = () => {
  const [text, setText] = useState('');
 const [amount, setAmount] = useState(0);

 const { addTransaction } = useContext(GlobalContext)

const onSubmit = e => {
  e.preventDefault();


  const newTransaction = {
    id: Math.floor(Math.random() * 1000),
    text,
    amount: +amount
  }
  addTransaction(newTransaction);
}
    return (
        <>
            <h3>Lägg till en transaktion</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Lägg till text..." />
        </div>

        <div className="form-control">
        <label htmlFor="amount">Belopp 
          <br />
            ("-" = Kostnad  &  "+" = Inkomst)
        </label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
        </div>
        <button className="btn">Lägg till transaktion</button>
      </form>
        </>
    )
}
