import { FieldValues, useForm } from "react-hook-form";

const useFormValidation = <T extends FieldValues>() => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<T>({
    mode: "onBlur",
  });

  return { register, handleSubmit, setError, errors };
};

export default useFormValidation;
