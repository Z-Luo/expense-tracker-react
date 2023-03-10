export const Transaction = (props) => {
  const sign = props.transaction.amount > 0 ? "+" : "-";
  return (
    <li className={props.transaction.amount > 0 ? "plus" : "minus"}>
      {props.transaction.text}
      <span>
        {sign}${Math.abs(props.transaction.amount)}
      </span>
      <button className="delete-btn">X</button>
    </li>
  );
};
