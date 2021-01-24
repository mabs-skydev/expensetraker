import React, { useState } from 'react';

const Menu = ({addExpence}) => {

    const [amount, setAmount] = useState(0);
    const [name, setName] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        const parsedAmount = parseInt(amount);
        addExpence({name, amount: parsedAmount});
        setAmount(0);
        setName("");
    }

    return ( 
        <div className="menu">
          <form className="form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              className="form__input"
              placeholder="Label..."
              value={name}
              onChange={e => setName(e.target.value)}
            />

            <input
              type="number"
              className="form__input"
              placeholder="Amount..."
              value={amount}
              onChange={e => setAmount(e.target.value)}
            />

            <button className="button"
            disabled={amount === 0 || name === ""}>
                Add
            </button>
          </form>
        </div>
    );
}
 
export default Menu;