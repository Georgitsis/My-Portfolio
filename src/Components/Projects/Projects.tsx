import { FaExternalLinkAlt } from "react-icons/fa";
import { Box, Card, Group, Text, Image, Anchor } from "@mantine/core";
import classes from "./Projects.module.css";
import { useState, useRef, useEffect } from "react";

export default function Projects() {
  const projects = [
    { title: "test1", imageSource: "/js.svg" },
    { title: "test2", imageSource: "/aws.svg" },
    { title: "test3", imageSource: "/aws.svg" },
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
        style={{
          fontWeight: "800",
          textAlign: "center",
          position: "sticky",
          top: "15vh",
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
        top: `calc(15vh + ${projectHeaderHeight}px)`,
      }}
      //className={classes.fixedProjectsTitle}
    >
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
          <Image src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-4.png" />
        </Card.Section>
      </Card>
    </Anchor>
  );
}
