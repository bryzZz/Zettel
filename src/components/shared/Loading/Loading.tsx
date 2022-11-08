import { ReactElement } from "react";

import { Box, CircularProgress, styled } from "@mui/material";

const LoaderWrapper = styled(Box)(() => ({
  position: "absolute",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  zIndex: 9999,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

interface LoadingProps {
  loading: boolean;
  children: ReactElement<any, any> | null;
  cover?: boolean;
}

export const Loading: React.FC<LoadingProps> = ({
  loading,
  children,
  cover,
}) => {
  if (cover) {
    return (
      <Box sx={{ position: "relative" }}>
        {loading && (
          <LoaderWrapper>
            <CircularProgress />
          </LoaderWrapper>
        )}
        {children}
      </Box>
    );
  }

  return loading ? (
    <LoaderWrapper>
      <CircularProgress />
    </LoaderWrapper>
  ) : (
    children
  );
};
