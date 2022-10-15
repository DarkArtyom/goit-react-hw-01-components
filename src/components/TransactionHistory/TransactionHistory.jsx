import PropTypes from 'prop-types';
import {
  TableHeader,
  TableItemList,
  TableItem,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <TableHeader>Type</TableHeader>
          <TableHeader>Amount</TableHeader>
          <TableHeader>Currency</TableHeader>
        </tr>
      </thead>
      <tbody>
        {items.map(item => {
          return (
            <TableItemList key={item.id}>
              <TableItem>{item.type}</TableItem>
              <TableItem>{item.amount}</TableItem>
              <TableItem>{item.currency}</TableItem>
            </TableItemList>
          );
        })}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    })
  ),
};
