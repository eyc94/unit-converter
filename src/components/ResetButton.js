import { confirmAlert } from "react-confirm-alert";
import Button from "./Button";

const ResetButton = ({ setOriginalUnit, setConvertedUnit }) => {

  const handleResetButton = () => {
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

  return (
    <Button text="Reset" type="warning" onClickHandler={handleResetButton} />
  );
};

export default ResetButton;
