import React from "react";

import { Box, Button, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import { useForm } from "react-hook-form";

import { TrimInput } from "components/shared";
import { useStore } from "hooks/useStore";
import { LoginData } from "types";

export const Login: React.FC = observer(() => {
  const { userStore } = useStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>();

  const onSubmit = handleSubmit((data) => {
    userStore.login(data);
  });

  return (
    <Box width="100%" maxWidth="1200px" m="0 auto" p="1rem">
      <Typography sx={{ mb: "2rem" }}>Login</Typography>
      <form onSubmit={onSubmit}>
        <Box display="flex" flexDirection="column" gap="1rem" maxWidth="400px">
          <TrimInput
            variant="standard"
            label="Email"
            {...register("email", { required: true })}
            error={!!errors.email}
          />
          <TrimInput
            variant="standard"
            label="Password"
            type="password"
            {...register("password", { required: true })}
            error={!!errors.password}
          />
          {userStore.loading ? (
            "Loading..."
          ) : (
            <Button variant="contained" type="submit">
              Submit
            </Button>
          )}
        </Box>
      </form>
    </Box>
  );
});
