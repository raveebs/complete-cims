import { useReducer } from "react";

const useRefresher = () => {
  const [onRefresh, refresh] = useReducer((x) => x + 1, 0);

  return { onRefresh, refresh };
};

export default useRefresher;
