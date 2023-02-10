import { Header } from "../widgets/Header";
import HeaderActions from "../HeaderActions";
import ResponsiveAppBar from "../widgets/ResponsiveAppBar";
import useString from "../../hooks/use-string";

export interface AppHeaderProps {
  shrink: boolean;
  onShrink: () => void;
  shrinkBy: number;
}

const AppHeader = ({
  shrink,
  onShrink,
  shrinkBy,
  ...props
}: AppHeaderProps) => {
  const { $ } = useString();

  return (
    <ResponsiveAppBar
      shrink={shrink}
      onShrink={onShrink}
      shrinkBy={shrinkBy}
      {...props}
    >
      <Header>{$("app_name")}</Header>
      <HeaderActions />
    </ResponsiveAppBar>
  );
};

export default AppHeader;
