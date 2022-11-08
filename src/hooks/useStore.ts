import { useRootStoreContext } from "../context/RootStoreContext";

export const useStore = () => {
  const context = useRootStoreContext();

  if (!context) {
    throw new Error("useStore was used outside of its Provider");
  }

  return context;
};
