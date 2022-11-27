const PrecisionBox = ({ precision, setPrecision }) => {
  const precisionBoxStyle = {
    'width': 50
  };

  const precisionChangeHandler = (event) => {
    setPrecision(event.target.value);
  }

  return (
    <div className="row">
      <div className="col">
        Precision: <input value={precision} type="number" onChange={precisionChangeHandler} className="mb-3" style={precisionBoxStyle} />
      </div>
    </div>
  );
 
};

export default PrecisionBox;
