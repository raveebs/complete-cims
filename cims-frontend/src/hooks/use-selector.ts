import { useState } from "react";

const useSelector = <T>(initialValue: T) => {
  const [selectedState, setSelectedState] = useState<T>(initialValue);

  const isSelected = (selection: T) => {
    return selectedState === selection;
  };
  const select = (selection: T) => {
    setSelectedState(selection);
  };

  return { select, selected: selectedState, isSelected };
};

export default useSelector;
