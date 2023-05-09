import { CircularProgress, Typography } from "@mui/material";
import React from "react";
import { ErrorBoundary } from "react-error-boundary";

// @ts-ignore
const Remote1App = React.lazy(() => import("remote_app_1/App"));

export const Remote1AppPage = () => {
  return (
    <ErrorBoundary fallback={<Typography>Oops!</Typography>}>
      <React.Suspense fallback={<CircularProgress />}>
        <Remote1App />
      </React.Suspense>
    </ErrorBoundary>
  );
};
