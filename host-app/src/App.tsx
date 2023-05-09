import { Box, CircularProgress, Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { TabPanel } from "./components/TabPanel";

// @ts-ignore
const Remote1App = React.lazy(() => import("remote_app_1/App"));

// @ts-ignore
const Remote2App = React.lazy(() => import("remote_app_2/App"));

export const App = () => {
  const [tab, setTab] = useState(0);

  return (
    <>
      <Typography variant="h4" sx={{ p: 1 }}>
        MFE Example: Host App
      </Typography>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={tab} onChange={(e, v) => setTab(v)}>
          <Tab label="Item One" />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
        </Tabs>
      </Box>
      <TabPanel value={tab} index={0}>
        <ErrorBoundary fallback={<Typography>Oops!</Typography>}>
          <React.Suspense fallback={<CircularProgress />}>
            <Remote1App />
          </React.Suspense>
        </ErrorBoundary>
      </TabPanel>
      <TabPanel value={tab} index={1}>
        <ErrorBoundary fallback={<Typography>Oops!</Typography>}>
          <React.Suspense fallback={<CircularProgress />}>
            <Remote2App />
          </React.Suspense>
        </ErrorBoundary>
      </TabPanel>
      <TabPanel value={tab} index={2}>
        <CircularProgress />
      </TabPanel>
    </>
  );
};
