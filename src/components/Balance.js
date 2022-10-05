import React from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Balance = () => {
  const {transactions}= useContext(GlobalContext);

  return (
    <div>
        <h4> Your Balance</h4>
        <h1>R$0,00</h1>
    </div>
  )
}
