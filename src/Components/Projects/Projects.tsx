import { FaExternalLinkAlt } from "react-icons/fa";
import { Box, Card, Group, Text, Image, Anchor, Space } from "@mantine/core";
export default function Projects() {
  const projects = [
    { title: "test1", imageSource: "/js.svg" },
    { title: "test2", imageSource: "/aws.svg" },
  ];
  return (
    <Box maw={1280} mx={"auto"}>
      <Text
        size={"10vw"}
        mx={"auto"}
        style={{
          fontWeight: "800",
          textAlign: "center",
        }}>
        PROJECTS
      </Text>
      <Space h="xl" />
      {projects.map((card) => (
        <Anchor underline="never">
          <Card withBorder radius="xl">
            <Card.Section withBorder inheritPadding py="lg">
              <Group justify="space-between">
                <Text fw={600} size="40px">
                  {card.title}
                </Text>
                <FaExternalLinkAlt size={32} />
              </Group>
            </Card.Section>
            <Card.Section>
              <Image src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-4.png" />
            </Card.Section>
          </Card>
        </Anchor>
      ))}
    </Box>
  );
}
