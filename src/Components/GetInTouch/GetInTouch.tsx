import { Box, Text, Stack, Group } from "@mantine/core";
import { useRef, useEffect, useState } from "react";
export default function GetInTouch() {
  const componentRef = useRef<HTMLDivElement | null>(null);
  const [textOfset, setTextOfset] = useState<number>(0);
  useEffect(() => {
    if (componentRef.current) {
      const rect = componentRef.current.getBoundingClientRect();
      setTextOfset(rect.height / 2);
      console.log(textOfset);
    }
  });
  return (
    <Stack maw={1280} mx={"auto"} w="100%" gap={0}>
      <Group
        style={{
          height: "25vh",
          background: "var(--mantine-color-dark-6)",
          borderBottomLeftRadius: "var(--mantine-radius-xl)",
          borderBottomRightRadius: "var(--mantine-radius-xl)",
        }}></Group>
      <Box
        style={{
          background: "#aacdfc",
          backgroundClip: "text",
          color: "transparent",
          overflow: "visible",
        }}>
        <Text
          ref={componentRef}
          style={{
            textAlign: "center",
            fontWeight: "800",
            fontSize: "clamp(1px, 7.5vw, 100px)",
            zIndex: 10,
            position: "relative",
            bottom: `${textOfset}px`,
            border: "1px solid black",
          }}>
          GET IN TOUCH
        </Text>
      </Box>
    </Stack>
  );
}
