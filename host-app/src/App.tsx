import { Box, CircularProgress, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";
import { TabPanel } from "./components/TabPanel";

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
        <CircularProgress />
      </TabPanel>
      <TabPanel value={tab} index={1}>
        <CircularProgress />
      </TabPanel>
      <TabPanel value={tab} index={2}>
        <CircularProgress />
      </TabPanel>
    </>
  );
};
