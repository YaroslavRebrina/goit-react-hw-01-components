import PropTypes from 'prop-types';
import { Transaction } from './Transaction/Transaction';

export const TransactionsHistory = ({ items }) => {
  const { id, type, amount, currency } = items;
  <table className="transaction-history">
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
    <tbody>
      {items.map(item => {
        return (
          <Transaction
            id={id}
            type={type}
            amount={amount}
            currency={currency}
          />
        );
      })}
    </tbody>
  </table>;
};
