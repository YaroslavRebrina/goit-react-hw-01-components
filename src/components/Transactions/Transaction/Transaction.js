import css from './Transaction.module.css'

export const Transaction = ({ id, type, amount, currency }) => (
  <tr className={css.transactionItem} key={id}>
    <td className={css.type}>{type}</td>
    <td className={css.amount}>{amount}</td>
    <td className={css.currency}>{currency}</td>
  </tr>
);

