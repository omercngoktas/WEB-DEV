import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
    return (
        <div className="expense-item">
            <ExpenseDate month={props.month} year={props.year} day={props.day}/>
            <div className="expense-item__description">
                <h2 className="expense-item__title">{props.title}</h2>
                <div className="expense-item__price">${props.price}</div>
            </div>
        </div>
    );
};

export default ExpenseItem;