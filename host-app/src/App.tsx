import { Box, CircularProgress, Tab, Tabs, Typography } from "@mui/material";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { Remote1AppPage } from "./pages/Remote1AppPage";
import { Remote2AppPage } from "./pages/Remote2AppPage";

export const App = () => {
  const { pathname, search } = useLocation();
  const navigate = useNavigate();

  const query = new URLSearchParams(search);
  const spin = query.get("spin");

  return (
    <>
      <Typography variant="h4" sx={{ p: 1 }}>
        MFE Example: Host App
      </Typography>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={pathname.slice(1)} onChange={(e, v) => navigate(v)}>
          <Tab label="Item One" value="remote1" />
          <Tab label="Item Two" value="remote2" />
          <Tab label="Item Three" value="mix" />
        </Tabs>
      </Box>
      <Box sx={{ p: 2 }}>
        <Routes>
          <Route
            path="/remote1"
            element={spin ? <CircularProgress /> : <Remote1AppPage />}
          />
          <Route
            path="/remote2"
            element={spin ? <CircularProgress /> : <Remote2AppPage />}
          />
          <Route path="/mix" element={<CircularProgress />} />
          <Route index element={<Navigate to="remote1" />} />
        </Routes>
      </Box>
    </>
  );
};
