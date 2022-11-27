import Button from "./Button";

const FlipButton = ({ selectedFirstUnit, selectedSecondUnit, setSelectedFirstUnit, setSelectedSecondUnit }) => {
  const handleFlipButton = () => {
    let firstUnit = selectedFirstUnit;
    let secondUnit = selectedSecondUnit;
    setSelectedFirstUnit(secondUnit);
    setSelectedSecondUnit(firstUnit);
  }

  return (
    <Button text="Flip" type="secondary" onClickHandler={handleFlipButton} />
  );
};

export default FlipButton;
