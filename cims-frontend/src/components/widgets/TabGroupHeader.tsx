import { Box, Tabs } from "@mui/material";
import ContainerProps from "../container-props";

interface TabGroupHeaderProps<T> extends ContainerProps {
  selectedTab: T;
  setSelectedTab: (value: T) => void;
}

const TabGroupHeader = <T,>({
  selectedTab,
  setSelectedTab,
  children,
}: TabGroupHeaderProps<T>) => {
  return (
    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
      <Tabs
        value={selectedTab}
        onChange={(_, value) => {
          setSelectedTab(value);
        }}
      >
        {children}
      </Tabs>
    </Box>
  );
};

export default TabGroupHeader;
