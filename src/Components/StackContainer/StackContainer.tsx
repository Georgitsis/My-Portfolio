import { Stack } from "@mantine/core";
import { ReactNode } from "react";

interface StackContainerProps {
  children: ReactNode;
  p?: string;
  mt?: string;
  style?: React.CSSProperties;
}

const StackContainer: React.FC<StackContainerProps> = ({
  children,
  p = "xl",
  mt = "20vh",
  style = {},
}) => {
  return (
    <Stack
      p={p}
      mt={mt}
      style={{
        background: "var(--mantine-color-dark-6)",
        borderRadius: "var(--mantine-radius-xl)",
        ...style,
      }}>
      {children}
    </Stack>
  );
};

export default StackContainer;
