const Button = ({ text, type, onClickHandler, style }) => {
  const className = `btn btn-${type}`;

  return (
    <div>
      <button className={className} onClick={onClickHandler} style={style}>{text}</button>
    </div>
  )
};

export default Button;
