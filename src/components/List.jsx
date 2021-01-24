import React from 'react';

const List = ({total, expenses}) => {
    return ( 
        <div className="list">
          <h1 className="total">Total: {total}$</h1>
          {expenses && expenses.map(expense => (
            <div className="card" key={expenses.indexOf(expense)}>
                <span className="card__text">{expense.name}</span>
                <span className={`card__amount card__amount--${(expense.amount > 0)? 'in' : 'out' }`}>
                    {expense.amount} $
                </span>
            </div>))}
        </div>
    );
}
 
export default List;