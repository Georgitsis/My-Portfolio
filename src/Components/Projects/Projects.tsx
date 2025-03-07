import { FaExternalLinkAlt } from "react-icons/fa";
import { Box, Card, Group, Text, Image, Anchor } from "@mantine/core";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Projects() {
  const projects = [
    {
      title: "smartlittleboxes.com",
      imageSource: "/slb/slb_3.png",
      description:
        "An easy-to-use inventory management tool to track, organize, and manage your items efficiently.",
    },
    {
      title: "test2",
      imageSource:
        "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-4.png",
      description:
        "An easy-to-use inventory management tool to track, organize, and manage your items efficiently.",
    },
    {
      title: "test3",
      imageSource:
        "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-4.png",
      description:
        "An easy-to-use inventory management tool to track, organize, and manage your items efficiently.",
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
          top: "2vh",
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
          description={card.description}
          projectHeaderHeight={projectHeaderHeight}></ProjectCard>
      ))}
    </Box>
  );
}

interface ProjectCardPropsType {
  projectTitle: string;
  imageScr: string;
  description: string;
  projectHeaderHeight: number;
}

function ProjectCard({
  projectTitle,
  imageScr,
  description,
  projectHeaderHeight,
}: ProjectCardPropsType) {
  const componentRef = useRef<HTMLAnchorElement | null>(null);
  const navigate = useNavigate();
  return (
    <Anchor
      ref={componentRef}
      underline="never"
      style={{
        position: "sticky",
        top: `calc(2.5vh + ${projectHeaderHeight}px)`,
      }}
      href="#"
      onClick={() => {
        navigate("/smartlittleboxes");
      }}>
      <Card
        withBorder
        radius="xl"
        mah={`calc(100vh - 5vh - ${projectHeaderHeight}px)`}>
        <Card.Section withBorder inheritPadding py="lg">
          <Group justify="space-between">
            <Text fw={600} size="40px">
              {projectTitle}
            </Text>
            <FaExternalLinkAlt size={32} />
          </Group>
          <Text mt="md" size="xl">
            {description}
          </Text>
        </Card.Section>
        <Card.Section>
          <Image
            src={imageScr}
            style={{
              objectFit: "unset",
              objectPosition: "right bottom",
              width: "100%",
            }}
          />
        </Card.Section>
      </Card>
    </Anchor>
  );
}
