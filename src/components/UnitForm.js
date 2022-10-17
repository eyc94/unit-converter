import { useState } from "react";
import { confirmAlert } from 'react-confirm-alert';
import ReactTooltip from "react-tooltip";
import 'react-confirm-alert/src/react-confirm-alert.css';

const UnitForm = () => {
  const [originalUnit, setOriginalUnit] = useState('');
  const [convertedUnit, setConvertedUnit] = useState('');
  const [selectedFirstUnit, setSelectedFirstUnit] = useState('');
  const [selectedSecondUnit, setSelectedSecondUnit] = useState('');

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

  const convertUnit = (event) => {
    event.preventDefault();
    const converted = originalUnit * conversionRatio;
    setConvertedUnit(converted);
  };

  const handleUnitConvert = (event) => {
    setOriginalUnit(event.target.value);
  };

  const handleResetButton = (event) => {
    event.preventDefault();
    confirmAlert({
      title: 'Confirm To Reset',
      message: 'Are you sure you want to reset your input?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            setOriginalUnit('');
            setConvertedUnit('');
          }
        },
        {
          label: 'No'
        }
      ]
    });
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

  const firstButtonStyle = {
    'marginBottom': 5
  };

  return(
    <div className="container">
      <div className="row" style={firstRowStyle}>
        <div className="col-md-6">
          <label>From:</label>
          <div>
            <input
              data-tip
              data-for="convertFrom"
              value={originalUnit}
              onChange={handleUnitConvert}
            />
            <ReactTooltip id="convertFrom" place="top" effect="solid">
              Choose unit to convert from
            </ReactTooltip>
            <select value={selectedFirstUnit} onChange={handleFirstUnitChange} className="form-select-sm mb-3">
              <option value="" defaultChecked>Choose Unit</option>
              <option value="inch">inch</option>
              <option value="foot">foot</option>
              <option value="meter">meter</option>
              <option value="kilometer">kilometer</option>
              <option value="centimeter">centimeter</option>
              <option value="millimeter">millimeter</option>
              <option value="micrometer">micrometer</option>
              <option value="nanometer">nanometer</option>
              <option value="mile">mile</option>
              <option value="yard">yard</option>
            </select>
          </div>
        </div>

        <div className="col-md-6">
          <label>To:</label>
          <div>
            <input
              data-tip
              data-for="convertTo"
              value={convertedUnit}
              readOnly={true}
            />
            <ReactTooltip id="convertTo" place="top" effect="solid">
              Result of conversion
            </ReactTooltip>
            <select value={selectedSecondUnit} onChange={handleSecondUnitChange} className="form-select-sm mb-3">
              <option value="" defaultChecked>Choose Unit</option>
              <option value="inch">inch</option>
              <option value="foot">foot</option>
              <option value="meter">meter</option>
              <option value="kilometer">kilometer</option>
              <option value="centimeter">centimeter</option>
              <option value="millimeter">millimeter</option>
              <option value="micrometer">micrometer</option>
              <option value="nanometer">nanometer</option>
              <option value="mile">mile</option>
              <option value="yard">yard</option>
            </select>
          </div>
        </div>
      </div>
      
      <div style={firstButtonStyle}>
        <button className="btn btn-success" onClick={convertUnit}>Convert</button>
      </div>
      <div>
        <button type="button" className="btn btn-warning" onClick={handleResetButton}>Reset</button>
      </div>
    </div>
  );
};

export default UnitForm;
