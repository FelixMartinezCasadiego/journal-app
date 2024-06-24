import { Box } from "@mui/material";
import { NavBar } from "../components";

interface Props {
  children: JSX.Element | JSX.Element[];
}

const drawerWidth = 240;

export const JournalLayout = ({ children }: Props) => {
  return (
    <Box display={"flex"}>
      <NavBar drawerWidth={drawerWidth} />
      <Box component={"main"} flexGrow={1} p={3}>
        {children}
      </Box>
    </Box>
  );
};
