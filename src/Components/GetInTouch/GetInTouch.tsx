import { Box, Text, Stack, Anchor } from "@mantine/core";
import { useRef, useEffect, useState } from "react";
export default function GetInTouch() {
  const textRef = useRef<HTMLDivElement | null>(null);
  const anchorRef = useRef<HTMLAnchorElement | null>(null);

  const [textOfset, setTextOfset] = useState<number>(0);

  useEffect(() => {
    if (textRef.current) {
      const rect = textRef.current.getBoundingClientRect();
      setTextOfset(rect.height / 2);
    }
  });
  return (
    <Stack maw={1280} mx={"auto"} w="100%" gap={0}>
      <Box
        style={{
          height: "25vh",
          background: "var(--mantine-color-dark-6)",
          borderBottomLeftRadius: "var(--mantine-radius-xl)",
          borderBottomRightRadius: "var(--mantine-radius-xl)",
        }}></Box>
      <Text
        ref={textRef}
        style={{
          textAlign: "center",
          fontWeight: "800",
          fontSize: "clamp(1px, 12.5vw, 150px)",
          position: "relative",
          bottom: `${textOfset}px`,
          background: "linear-gradient(to bottom, white 50%, #aacdfc 50%)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
        }}>
        GET IN TOUCH
      </Text>{" "}
      <Anchor
        ref={anchorRef}
        href="mailto:georgitsis.theodoros@gmail.com"
        underline="never"
        px={"xl"}
        style={{
          width: "fit-content",
          color: "inherit",
          border: "solid 1px white",
          borderRadius: "1000px",
          display: "inline-flex",
          alignItems: "center",
          fontSize: "clamp(1px, 4vw, 50px)",
          whiteSpace: "nowrap",
          alignSelf: "center",
          position: "relative",
          bottom: `${textOfset}px`,
        }}>
        georgitsis.theodoros@gmail.com
      </Anchor>
    </Stack>
  );
}
