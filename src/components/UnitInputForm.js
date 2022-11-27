const UnitInputForm = ({ tooltipId, unitValue, unitValueHandler, readyOnly }) => {
  return (
    <input
      data-tip
      data-for={tooltipId}
      value={unitValue}
      onChange={unitValueHandler}
      readOnly={readyOnly}
    />
  );
};

export default UnitInputForm;
