import PropTypes from 'prop-types';
import { Transaction } from './Transaction/Transaction';
import css from './Transactions.module.css';

export const TransactionsHistory = ({ transactions }) => (
  <table className="transaction-history">
    <thead>
      <tr className={css.tableHeaders}>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
    <tbody>
      {transactions.map(({ id, type, amount, currency }) => {
        return (
          <Transaction
            key={id}
            type={type}
            amount={amount}
            currency={currency}
          />
        );
      })}
    </tbody>
  </table>
);

TransactionsHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
