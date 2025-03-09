import { BackgroundImage, Group, Text } from "@mantine/core";

interface HeaderImageProps {
  headerText: string;
  imageSrc: string;
}

export default function ProjectHeader({
  headerText,
  imageSrc,
}: HeaderImageProps) {
  return (
    <BackgroundImage src={imageSrc} radius="md">
      <Group justify="space-between" h={"40vh"}>
        <Text
          size={"5vw"}
          w={"auto"}
          style={{
            alignSelf: "flex-end",
            fontWeight: "800",
            background: "linear-gradient(to bottom, white 50%, #aacdfc 50%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}>
          {headerText}
        </Text>
      </Group>
    </BackgroundImage>
  );
}
