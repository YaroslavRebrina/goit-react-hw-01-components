export const Transaction = ({ id, type, amount, currency }) => (
  <tr id={id}>
    <td>{type}</td>
    <td>{amount}</td>
    <td>{currency}</td>
  </tr>
);
