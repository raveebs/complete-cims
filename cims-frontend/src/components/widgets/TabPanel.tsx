import { Box } from "@mui/system";
import ContainerProps from "../container-props";

interface TabPanelProps extends ContainerProps {
  value: number;
  index: number;
}

const TabPanel = ({ children, value, index, ...other }: TabPanelProps) => {
  return (
    <div hidden={value !== index} {...other}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
};

export default TabPanel;
