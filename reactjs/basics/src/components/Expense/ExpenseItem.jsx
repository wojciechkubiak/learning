import "./ExpenseItem.css";

const ExpenseItem = () => {
  return (
    <div className="expense-item">
      <div className="expense-item__date">March 28th 2021</div>
      <div className="expense-item__description">
        <h2 className="expense-item__type">Car Insurance</h2>
        <h2 className="expense-item__price">$294.45</h2>
      </div>
    </div>
  );
};

export default ExpenseItem;
