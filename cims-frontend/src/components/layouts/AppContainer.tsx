import { Fragment } from "react";
import useConfig from "../../hooks/use-config";
import usePreference from "../../hooks/use-preference";

import AppBody from "./AppBody";
import AppDrawer from "./AppDrawer";
import AppHeader from "./AppHeader";

const AppContainer = () => {
  const {
    preference: { drawerMode },
    toggleDrawerMode,
  } = usePreference();

  const {
    drawerConfig: { drawerMinWidth, drawerMaxWidth },
  } = useConfig();

  const isDrawerCollapsed = drawerMode === "collapsed";

  return (
    <Fragment>
      <AppHeader
        shrink={!isDrawerCollapsed}
        onShrink={toggleDrawerMode}
        shrinkBy={drawerMaxWidth}
      />
      <AppDrawer
        collapse={isDrawerCollapsed}
        onCollapse={toggleDrawerMode}
        minWidth={drawerMinWidth}
        maxWidth={drawerMaxWidth}
      />
      <AppBody
        shrink={!isDrawerCollapsed}
        minShrinkBy={drawerMinWidth}
        maxShrinkBy={drawerMaxWidth}
      />
    </Fragment>
  );
};
export default AppContainer;
