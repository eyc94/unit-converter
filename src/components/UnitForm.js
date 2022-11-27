import { useEffect, useState } from "react";
import ReactTooltip from "react-tooltip";
import 'react-confirm-alert/src/react-confirm-alert.css';
import LinkBox from "./LinkBox";
import PrecisionBox from "./PrecisionBox";
import ConvertButton from "./ConvertButton";
import ResetButton from "./ResetButton";
import UnitSelectForm from "./UnitSelectForm";
import UnitInputForm from "./UnitInputForm";
import FlipButton from "./FlipButton";
import conversionRatioFetcher from "../utils/ratio";

const UnitForm = () => {
  const [originalUnit, setOriginalUnit] = useState('');
  const [convertedUnit, setConvertedUnit] = useState('');
  const [selectedFirstUnit, setSelectedFirstUnit] = useState('');
  const [selectedSecondUnit, setSelectedSecondUnit] = useState('');
  const [precision, setPrecision] = useState(2);

  useEffect(() => {
    setConvertedUnit('');
  }, [originalUnit, selectedFirstUnit, selectedSecondUnit]);

  let conversionRatio = conversionRatioFetcher.getConversionRatio(selectedFirstUnit, selectedSecondUnit);

  const handleUnitValueChange = (event) => {
    setOriginalUnit(event.target.value);
  };

  const handleFirstUnitChange = (event) => {
    setSelectedFirstUnit(event.target.value);
  };

  const handleSecondUnitChange = (event) => {
    setSelectedSecondUnit(event.target.value);
  };

  const firstRowStyle = {
    'marginBottom': 20
  };

  const secondColStyle = {
    'marginTop': 22
  };

  return (
    <div className="container">
      <PrecisionBox precision={precision} setPrecision={setPrecision} />

      <div className="row" style={firstRowStyle}>
        <div className="col-md-3">
          <label>From:</label>
          <div>
            <UnitInputForm tooltipId="convertForm" unitValue={originalUnit} unitValueHandler={handleUnitValueChange} readyOnly={false} />
            <ReactTooltip id="convertFrom" place="top" effect="solid">
              Convert From
            </ReactTooltip>
            <UnitSelectForm unitValue={selectedFirstUnit} changeHandler={handleFirstUnitChange} />
          </div>
          <LinkBox selectedUnit={selectedFirstUnit} />
        </div>

        <div className="col-md-3 text-center align-middle" style={secondColStyle}>
          <FlipButton selectedFirstUnit={selectedFirstUnit} selectedSecondUnit={selectedSecondUnit} setSelectedFirstUnit={setSelectedFirstUnit} setSelectedSecondUnit={setSelectedSecondUnit} />
        </div>

        <div className="col-md-3">
          <label>To:</label>
          <div>
            <UnitInputForm tooltipId="convertTo" unitValue={convertedUnit} readyOnly={true} />
            <ReactTooltip id="convertTo" place="top" effect="solid">
              Result of conversion
            </ReactTooltip>
            <UnitSelectForm unitValue={selectedSecondUnit} changeHandler={handleSecondUnitChange} />
          </div>
          <LinkBox selectedUnit={selectedSecondUnit} />
        </div>
      </div>
      <ConvertButton setConvertedUnit={setConvertedUnit} originalUnit={originalUnit} conversionRatio={conversionRatio} precision={precision} />
      <ResetButton setOriginalUnit={setOriginalUnit} setConvertedUnit={setConvertedUnit} />
    </div>
  );
};

export default UnitForm;
