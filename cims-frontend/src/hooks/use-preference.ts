import { useDispatch, useSelector } from "react-redux";
import { preferenceActions, PreferenceState } from "../store/preference.slice";

const usePreference = () => {
  const preference: PreferenceState = useSelector(
    (state: any) => state.preference
  );
  const dispatch = useDispatch();

  const togglePaletteMode = () => {
    dispatch(preferenceActions.togglePaletteMode());
  };

  const toggleDrawerMode = () => {
    dispatch(preferenceActions.toggleDrawerMode());
  };

  return { preference, togglePaletteMode, toggleDrawerMode };
};

export default usePreference;
