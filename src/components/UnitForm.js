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

const UnitForm = () => {
  const [originalUnit, setOriginalUnit] = useState('');
  const [convertedUnit, setConvertedUnit] = useState('');
  const [selectedFirstUnit, setSelectedFirstUnit] = useState('');
  const [selectedSecondUnit, setSelectedSecondUnit] = useState('');
  const [precision, setPrecision] = useState(2);

  useEffect(() => {
    setConvertedUnit('');
  }, [originalUnit, selectedFirstUnit, selectedSecondUnit]);

  let conversionRatio = 1.0;
  if (selectedFirstUnit === "inch") {
    if (selectedSecondUnit === "inch") {
      conversionRatio = 1.0;
    } else if (selectedSecondUnit === "foot") {
      conversionRatio = 1.0 / 12;
    } else if (selectedSecondUnit === "meter") {
      conversionRatio = 1 / 39.3701;
    } else if (selectedSecondUnit === "kilometer") {
      conversionRatio = 0.0000254;
    } else if (selectedSecondUnit === "centimeter") {
      conversionRatio = 2.54;
    } else if (selectedSecondUnit === "millimeter") {
      conversionRatio = 25.4;
    } else if (selectedSecondUnit === "micrometer") {
      conversionRatio = 25400;
    } else if (selectedSecondUnit === "nanometer") {
      conversionRatio = 25400000;
    } else if (selectedSecondUnit === "mile") {
      conversionRatio = 0.0000157828;
    } else if (selectedSecondUnit === "yard") {
      conversionRatio = 0.0277778;
    }
  } else if (selectedFirstUnit === "foot") {
    if (selectedSecondUnit === "inch") {
      conversionRatio = 12;
    } else if (selectedSecondUnit === "foot") {
      conversionRatio = 1.0;
    } else if (selectedSecondUnit === "meter") {
      conversionRatio = 0.3048;
    } else if (selectedSecondUnit === "kilometer") {
      conversionRatio = 0.0003048;
    } else if (selectedSecondUnit === "centimeter") {
      conversionRatio = 30.48;
    } else if (selectedSecondUnit === "millimeter") {
      conversionRatio = 304.8;
    } else if (selectedSecondUnit === "micrometer") {
      conversionRatio = 304800;
    } else if (selectedSecondUnit === "nanometer") {
      conversionRatio = 304800000;
    } else if (selectedSecondUnit === "mile") {
      conversionRatio = 0.000189394;
    } else if (selectedSecondUnit === "yard") {
      conversionRatio = 0.333333;
    }
  } else if (selectedFirstUnit === "meter") {
    if (selectedSecondUnit === "inch") {
      conversionRatio = 39.3701;
    } else if (selectedSecondUnit === "foot") {
      conversionRatio = 3.28084;
    } else if (selectedSecondUnit === "meter") {
      conversionRatio = 1;
    } else if (selectedSecondUnit === "kilometer") {
      conversionRatio = 0.001;
    } else if (selectedSecondUnit === "centimeter") {
      conversionRatio = 100;
    } else if (selectedSecondUnit === "millimeter") {
      conversionRatio = 1000;
    } else if (selectedSecondUnit === "micrometer") {
      conversionRatio = 1000000;
    } else if (selectedSecondUnit === "nanometer") {
      conversionRatio = 1000000000;
    } else if (selectedSecondUnit === "mile") {
      conversionRatio = 0.0000621371;
    } else if (selectedSecondUnit === "yard") {
      conversionRatio = 1.09361;
    }
  } else if (selectedFirstUnit === "kilometer") {
    if (selectedSecondUnit === "inch") {
      conversionRatio = 39370.1;
    } else if (selectedSecondUnit === "foot") {
      conversionRatio = 3280.84;
    } else if (selectedSecondUnit === "meter") {
      conversionRatio = 1000;
    } else if (selectedSecondUnit === "kilometer") {
      conversionRatio = 1;
    } else if (selectedSecondUnit === "centimeter") {
      conversionRatio = 100000;
    } else if (selectedSecondUnit === "millimeter") {
      conversionRatio = 1000000;
    } else if (selectedSecondUnit === "micrometer") {
      conversionRatio = 1000000000;
    } else if (selectedSecondUnit === "nanometer") {
      conversionRatio = 1000000000000;
    } else if (selectedSecondUnit === "mile") {
      conversionRatio = 0.621371;
    } else if (selectedSecondUnit === "yard") {
      conversionRatio = 1093.61;
    }
  } else if (selectedFirstUnit === "centimeter") {
    if (selectedSecondUnit === "inch") {
      conversionRatio = 0.393701;
    } else if (selectedSecondUnit === "foot") {
      conversionRatio = 0.0328084;
    } else if (selectedSecondUnit === "meter") {
      conversionRatio = 0.01;
    } else if (selectedSecondUnit === "kilometer") {
      conversionRatio = 0.00005;
    } else if (selectedSecondUnit === "centimeter") {
      conversionRatio = 1;
    } else if (selectedSecondUnit === "millimeter") {
      conversionRatio = 10;
    } else if (selectedSecondUnit === "micrometer") {
      conversionRatio = 10000;
    } else if (selectedSecondUnit === "nanometer") {
      conversionRatio = 10000000;
    } else if (selectedSecondUnit === "mile") {
      conversionRatio = 0.00000621371;
    } else if (selectedSecondUnit === "yard") {
      conversionRatio = 0.0109361;
    }
  } else if (selectedFirstUnit === "millimeter") {
    if (selectedSecondUnit === "inch") {
      conversionRatio = 0.0393701;
    } else if (selectedSecondUnit === "foot") {
      conversionRatio = 0.00328084;
    } else if (selectedSecondUnit === "meter") {
      conversionRatio = 0.001;
    } else if (selectedSecondUnit === "kilometer") {
      conversionRatio = 0.000006;
    } else if (selectedSecondUnit === "centimeter") {
      conversionRatio = 0.1;
    } else if (selectedSecondUnit === "millimeter") {
      conversionRatio = 1.0;
    } else if (selectedSecondUnit === "micrometer") {
      conversionRatio = 1000;
    } else if (selectedSecondUnit === "nanometer") {
      conversionRatio = 1000000;
    } else if (selectedSecondUnit === "mile") {
      conversionRatio = 0.000000621371;
    } else if (selectedSecondUnit === "yard") {
      conversionRatio = 0.00109361;
    }
  } else if (selectedFirstUnit === "micrometer") {
    if (selectedSecondUnit === "inch") {
      conversionRatio = 0.0000393701;
    } else if (selectedSecondUnit === "foot") {
      conversionRatio = 0.00000328084;
    } else if (selectedSecondUnit === "meter") {
      conversionRatio = 0.000001;
    } else if (selectedSecondUnit === "kilometer") {
      conversionRatio = 0.000000001;
    } else if (selectedSecondUnit === "centimeter") {
      conversionRatio = 0.0001;
    } else if (selectedSecondUnit === "millimeter") {
      conversionRatio = 0.001;
    } else if (selectedSecondUnit === "micrometer") {
      conversionRatio = 1;
    } else if (selectedSecondUnit === "nanometer") {
      conversionRatio = 1000;
    } else if (selectedSecondUnit === "mile") {
      conversionRatio = 0.000000000621371
    } else if (selectedSecondUnit === "yard") {
      conversionRatio = 0.00000109361;
    }
  } else if (selectedFirstUnit === "nanometer") {
    if (selectedSecondUnit === "inch") {
      conversionRatio = 0.0000000393701;
    } else if (selectedSecondUnit === "foot") {
      conversionRatio = 0.00000000328084;
    } else if (selectedSecondUnit === "meter") {
      conversionRatio = 0.000000001;
    } else if (selectedSecondUnit === "kilometer") {
      conversionRatio = 0.000000000001;
    } else if (selectedSecondUnit === "centimeter") {
      conversionRatio = 0.0000001;
    } else if (selectedSecondUnit === "millimeter") {
      conversionRatio = 0.000001;
    } else if (selectedSecondUnit === "micrometer") {
      conversionRatio = 0.001;
    } else if (selectedSecondUnit === "nanometer") {
      conversionRatio = 1;
    } else if (selectedSecondUnit === "mile") {
      conversionRatio = 0.000000000000621371;
    } else if (selectedSecondUnit === "yard") {
      conversionRatio = 0.00000000109361;
    }
  } else if (selectedFirstUnit === "mile") {
    if (selectedSecondUnit === "inch") {
      conversionRatio = 63360;
    } else if (selectedSecondUnit === "foot") {
      conversionRatio = 5280;
    } else if (selectedSecondUnit === "meter") {
      conversionRatio = 1609.34;
    } else if (selectedSecondUnit === "kilometer") {
      conversionRatio = 1.60934;
    } else if (selectedSecondUnit === "centimeter") {
      conversionRatio = 160934;
    } else if (selectedSecondUnit === "millimeter") {
      conversionRatio = 1609000;
    } else if (selectedSecondUnit === "micrometer") {
      conversionRatio = 1609000000;
    } else if (selectedSecondUnit === "nanometer") {
      conversionRatio = 1609000000000;
    } else if (selectedSecondUnit === "mile") {
      conversionRatio = 1.0;
    } else if (selectedSecondUnit === "yard") {
      conversionRatio = 1760;
    }
  } else if (selectedFirstUnit === "yard") {
    if (selectedSecondUnit === "inch") {
      conversionRatio = 36;
    } else if (selectedSecondUnit === "foot") {
      conversionRatio = 3;
    } else if (selectedSecondUnit === "meter") {
      conversionRatio = 0.9144;
    } else if (selectedSecondUnit === "kilometer") {
      conversionRatio = 0.0009144;
    } else if (selectedSecondUnit === "centimeter") {
      conversionRatio = 91.44;
    } else if (selectedSecondUnit === "millimeter") {
      conversionRatio = 914.4;
    } else if (selectedSecondUnit === "micrometer") {
      conversionRatio = 914400;
    } else if (selectedSecondUnit === "nanometer") {
      conversionRatio = 914400000;
    } else if (selectedSecondUnit === "mile") {
      conversionRatio = 0.000568182;
    } else if (selectedSecondUnit === "yard") {
      conversionRatio = 1.0;
    }
  }

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
