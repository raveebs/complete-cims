import { Fragment } from "react";
import useError from "../../hooks/use-error";
import ContainerProps from "../container-props";
import ErrorPage from "../widgets/ErrorPage";

interface ErrorHandlerProps extends ContainerProps {}

const ErrorHandler = ({ children }: ErrorHandlerProps) => {
  const { error } = useError();
  return (
    <Fragment>
      {error.error ? <ErrorPage message={error.message} /> : children}
    </Fragment>
  );
};

export default ErrorHandler;
