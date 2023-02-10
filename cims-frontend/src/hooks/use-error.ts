import { useDispatch, useSelector } from "react-redux";
import { errorActions, ErrorState } from "../store/error.slice";

const useError = () => {
  const error: ErrorState = useSelector((state: any) => state.error);
  const dispatch = useDispatch();

  const throwError = (message: string) => {
    dispatch(errorActions.throwError({ message }));
  };

  const clearError = () => {
    dispatch(errorActions.clearError());
  };

  return { error, throwError, clearError };
};

export default useError;
