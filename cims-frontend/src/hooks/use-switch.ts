import { useState } from "react";

const useSwitch = (
  initialValue = false,
  setValue = true,
  resetValue = false
) => {
  const [switchState, setSwitchState] = useState(initialValue);

  const set = () => {
    setSwitchState(setValue);
  };

  const reset = () => {
    setSwitchState(resetValue);
  };

  const toggle = () => {
    setSwitchState((currentSwitchState) => {
      return currentSwitchState === setValue ? resetValue : setValue;
    });
  };

  return { isSet: switchState, set, reset, toggle };
};

export default useSwitch;
