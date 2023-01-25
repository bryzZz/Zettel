import React from "react";

import { observer } from "mobx-react-lite";
import { useForm } from "react-hook-form";

import { useStore } from "hooks/useStore";
import { LoginData } from "types";

export const Login: React.FC = observer(() => {
  const { userStore } = useStore();

  const { register, handleSubmit } = useForm<LoginData>();

  const onSubmit = handleSubmit((data) => {
    userStore.login(data);
  });

  return (
    <div className="mx-auto mt-16 max-w-md overflow-hidden rounded-2xl border shadow-xl">
      <div className="flex flex-col items-center justify-center space-y-3 border-b px-4 py-6 pt-8 text-center sm:px-16">
        <h3 className="text-xl font-semibold">Login</h3>
        <p className="text-sm">Use your email and password to sign in</p>
      </div>
      <form className="flex flex-col" onSubmit={onSubmit}>
        <input
          className="bg-transparent p-2"
          placeholder="Email"
          type="email"
          {...register("email", { required: true })}
        />
        <input
          className="bg-transparent p-2"
          placeholder="Password"
          type="password"
          {...register("password", { required: true })}
        />
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
});
