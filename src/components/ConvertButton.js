import Button from "./Button";

const ConvertButton = ({ setConvertedUnit, originalUnit, conversionRatio, precision }) => {
  const convertUnit = () => {
    let converted = originalUnit * conversionRatio;
    converted = converted.toFixed(precision);
    setConvertedUnit(converted);
  };

  const convertButtonStyle = {
    'marginBottom': 5
  };

  return (
    <Button text="Convert" type="success" onClickHandler={convertUnit} style={convertButtonStyle} />
  );
};

export default ConvertButton;
