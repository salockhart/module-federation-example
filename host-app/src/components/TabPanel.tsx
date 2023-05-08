import { Box } from "@mui/material";
import { PropsWithChildren } from "react";

interface Props {
  index: number;
  value: number;
}

export const TabPanel: React.FC<PropsWithChildren<Props>> = ({
  children,
  index,
  value,
}) => {
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
};
