import { Text, Image, Box } from "@mantine/core";
import { useElementSize } from "@mantine/hooks";
import { useEffect, useState } from "react";

interface HeaderImageProps {
  headerText: string;
  imageSrc: string;
}

export default function ProjectHeader({
  headerText,
  imageSrc,
}: HeaderImageProps) {
  const { ref, width } = useElementSize();
  const [headerFontSize, setHeaderFontSize] = useState<string>();

  useEffect(() => {
    const widthString = (width * 0.08).toString().concat("px");
    setHeaderFontSize(widthString);
  }, [width]);
  return (
    <Box ref={ref}>
      <Image src={imageSrc} radius="xl"></Image>
      <Text
        size={headerFontSize}
        style={{
          fontWeight: "800",
          background: "linear-gradient(to bottom, white 50%, #aacdfc 50%)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
        }}>
        {headerText}
      </Text>
    </Box>
  );
}
