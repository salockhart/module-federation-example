import { CircularProgress, Typography } from "@mui/material";
import React from "react";
import { ErrorBoundary } from "react-error-boundary";

// @ts-ignore
const Remote2App = React.lazy(() => import("remote_app_2/App"));

export const Remote2AppPage = () => {
  return (
    <ErrorBoundary fallback={<Typography>Oops!</Typography>}>
      <React.Suspense fallback={<CircularProgress />}>
        <Remote2App />
      </React.Suspense>
    </ErrorBoundary>
  );
};
