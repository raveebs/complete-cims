import ContainerProps from "../container-props";
import StyledConatiner from "../lib/StyledContainer";

interface ResponsiveContainerProps extends ContainerProps {
  shrink: boolean;
  minShrinkBy: string;
  maxShrinkBy: number;
}

const ResponsiveContainer = ({
  shrink,
  minShrinkBy,
  maxShrinkBy,
  children,
}: ResponsiveContainerProps) => {
  return (
    <StyledConatiner
      shrink={shrink}
      minShrinkBy={minShrinkBy}
      maxShrinkBy={maxShrinkBy}
    >
      {children}
    </StyledConatiner>
  );
};

export default ResponsiveContainer;
