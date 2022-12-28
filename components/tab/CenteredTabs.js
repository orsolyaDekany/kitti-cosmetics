import * as React from "react";
import { Tab, Tabs } from "@mui/material";
import Box from "@mui/material";

function CenteredTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Szemöldök" />
        <Tab label="Szemhéj" />
        <Tab label="Ajak" />
      </Tabs>
    </Box>
  );
}

export default CenteredTabs;
