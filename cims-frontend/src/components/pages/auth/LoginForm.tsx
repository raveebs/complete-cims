import { Typography, useTheme } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { login } from "../../../controllers/auth.controller";
import useAuth from "../../../hooks/use-auth";
import useError from "../../../hooks/use-error";
import useFormValidation from "../../../hooks/use-form-validation";
import useString from "../../../hooks/use-string";
import StyledBox from "../../lib/StyledBox";

interface LoginFormInputs {
  username: string;
  password: string;
  message: string;
}

const LoginForm = () => {
  const { refreshAuth } = useAuth();
  const { throwError } = useError();
  const { register, handleSubmit, setError, errors } =
    useFormValidation<LoginFormInputs>();
  const { $ } = useString();
  const theme = useTheme();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
    try {
      setIsLoading(true);
      await login(data.username, data.password);
      localStorage.setItem("_session", Date.now().toString());
      refreshAuth();
    } catch (error: any) {
      if (error.response && error.response.status === 401) {
        setError("message", {
          type: "custom",
          message: $("message_invalid_email_or_password"),
        });
      } else {
        throwError($("message_something_went_wrong"));
      }
    } finally {
      setIsLoading(false);
    }
  };

  const registerEmail = {
    ...register("username", {
      required: $("message_email_is_required"),
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "Invalid email address.",
      },
    }),
  };

  const registerPassword = {
    ...register("password", {
      required: $("message_password_is_required"),
    }),
  };

  const registerMessage = { ...register("message") };

  return (
    <StyledBox sx={{ background: theme.palette.primary.main }}>
      <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <Card>
          <CardHeader title="Sign In" />
          <CardContent>
            <div>
              <TextField
                {...registerEmail}
                error={!!errors.username?.message}
                helperText={errors.username?.message}
                fullWidth
                autoComplete="email"
                type="email"
                label="Email"
                margin="normal"
              />
              <TextField
                {...registerPassword}
                error={!!errors.password?.message}
                helperText={errors.password?.message}
                fullWidth
                autoComplete="current-password"
                id="password"
                type="password"
                label="Password"
                margin="normal"
              />
              <Button
                fullWidth
                variant="contained"
                size="large"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? "Logging in..." : "Log In"}
              </Button>
              {errors.message && (
                <Typography
                  {...registerMessage}
                  color={"error"}
                  sx={{ m: 1 }}
                  align="center"
                >
                  {errors.message.message}
                </Typography>
              )}
            </div>
          </CardContent>
        </Card>
      </form>
    </StyledBox>
  );
};

export default LoginForm;
