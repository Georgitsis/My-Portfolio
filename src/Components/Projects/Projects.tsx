import { FaExternalLinkAlt } from "react-icons/fa";
import { Box, Card, Group, Text, Image, Anchor } from "@mantine/core";
import { useState, useRef, useEffect } from "react";

export default function Projects() {
  const projects = [
    {
      title: "smartlittleboxes.com",
      imageSource:
        "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-4.png",
    },
    {
      title: "test2",
      imageSource:
        "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-4.png",
    },
    {
      title: "test3",
      imageSource:
        "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-4.png",
    },
  ];

  const projectsHeaderRef = useRef<HTMLDivElement>(null);
  const [projectHeaderHeight, setProjectHeaderHeight] = useState<number>(0);

  useEffect(() => {
    if (projectsHeaderRef.current) {
      const rect = projectsHeaderRef.current.getBoundingClientRect();
      setProjectHeaderHeight(rect.height);
    }
  });

  return (
    <Box maw={1280} mx={"auto"}>
      <Text
        size={"10vw"}
        mx={"auto"}
        ref={projectsHeaderRef}
        mb={"xl"}
        style={{
          fontWeight: "800",
          textAlign: "center",
          position: "sticky",
          top: "5vh",
          background: "linear-gradient(to bottom, white 50%, #aacdfc 50%)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
        }}>
        PROJECTS
      </Text>
      {projects.map((card, index) => (
        <ProjectCard
          key={`ProjectCard-${index}`}
          projectTitle={card.title}
          imageScr={card.imageSource}
          projectHeaderHeight={projectHeaderHeight}></ProjectCard>
      ))}
    </Box>
  );
}

interface ProjectCardPropsType {
  projectTitle: string;
  imageScr: string;
  projectHeaderHeight: number;
}

function ProjectCard({
  projectTitle,
  imageScr,
  projectHeaderHeight,
}: ProjectCardPropsType) {
  const componentRef = useRef<HTMLAnchorElement | null>(null);
  return (
    <Anchor
      ref={componentRef}
      underline="never"
      style={{
        position: "sticky",
        top: `calc(10vh + ${projectHeaderHeight}px)`,
      }}>
      <Card withBorder radius="xl">
        <Card.Section withBorder inheritPadding py="lg">
          <Group justify="space-between">
            <Text fw={600} size="40px">
              {projectTitle}
            </Text>
            <FaExternalLinkAlt size={32} />
          </Group>
        </Card.Section>
        <Card.Section>
          <Image src={imageScr} />
        </Card.Section>
      </Card>
    </Anchor>
  );
}
