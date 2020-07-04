import React from "react";
import Button from "@material-ui/core/Button";

const LightDarkMode = (props) => {
  const { setDarkState } = props;
  return <Button onClick={setDarkState}>Button Content </Button>;
};

export default LightDarkMode;
