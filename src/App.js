import UnitConverterBox from "./components/UnitConverterBox";
import Title from "./components/Title";
import {Alert} from "@mui/material";

const App = () => {
  return(
    <div>
      <Title />
      <Alert severity="info">
        You can now clear your input and result boxes. Try it below!
      </Alert>
      <UnitConverterBox />
    </div>
  );
};

export default App;
