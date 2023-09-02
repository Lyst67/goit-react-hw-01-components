import css from './TransactionHistory.css'
import PropTypes from "prop-types";

export const TransactionHistory = ({items}) => {
    
    return (
        <table className={css.transaction_history}>
            <thead>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
            </thead>
            {items.map(({ id, type, amount, currency }) => (
                <tbody key={id}>
                   <tr>
                     <td>{type}</td>
                     <td>{amount}</td>
                     <td>{currency}</td>
                   </tr>
                </tbody>
            ))}
  
        </table>
    )
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};