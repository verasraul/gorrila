import React, { useState } from 'react';
// import Records from "./Records";
import receipts from "./Records";



function Receipts({person, order, paid}) {
    const [satisfied, setSatisfied] = useState(paid);

    const checkPayment = () => {
        setSatisfied((bill) => (bill ? "satisfied" : "notSatisfied" ));
    }

    const {sauce, main, protein, rice, cost, drink, toppings} = order;
    

    return (
    <div>
        <div>
            <h2>My Receipts!</h2>
        </div>

        <button className='payment Button' onClick={checkPayment}>Check Payment</button>

        <div className="receiptCard">
            <p>Person: {person}</p>
                <p>Order: {sauce}</p>
                <p>Order: {main}</p>
                <p>Order: {protein}</p>
                <p>Order: {rice}</p>
                <p>Order: {cost}</p>
                <p>Order: {drink}</p>
                <p>Order: {toppings}</p>
            <p>Paid: {paid}</p>
        </div>

        <h3>{ satisfied }</h3>
    </div>
    );

};

export default Receipts;