import { FaExternalLinkAlt } from "react-icons/fa";
import { Stack, Card, Group, Text, Image, Anchor, Space } from "@mantine/core";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Projects() {
  const projects = [
    {
      title: "smartlittleboxes.com",
      imageSource: "/slb/slb_3.png",
      description:
        "An easy-to-use inventory management tool to track, organize, and manage your items efficiently.",
      projectLink: "/smartlittleboxes",
    },
    {
      title: "MyFlix",
      imageSource: "/my_flix/my_flix_react_client.png",
      description:
        "Meet App helps users stay updated on upcoming CareerFoundry events. It leverages OAuth 2.0 for authentication and the Google API to pull events directly from a connected calendar.",
      projectLink: "/meet",
    },
    {
      title: "Meet",
      imageSource: "/meet/meet_2.png",
      description:
        "Meet App helps users stay updated on upcoming CareerFoundry events. It leverages OAuth 2.0 for authentication and the Google API to pull events directly from a connected calendar.",
      projectLink: "/meet",
    },
    {
      title: "Chat App",
      imageSource: "/chat/ChatApp.png",
      description:
        "ChatApp is a React Native mobile app built with Gifted Chat, allowing users to log in anonymously and chat in real-time. It supports sending pictures, taking new photos, and sharing locations, with installation via Expo.",
      projectLink: "/chatapp",
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
    <Stack maw={1280} mx={"auto"}>
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
          projectHeaderHeight={projectHeaderHeight}
          projectLink={card.projectLink}></ProjectCard>
      ))}
      <Space h={"xl"} />
    </Stack>
  );
}

interface ProjectCardPropsType {
  projectTitle: string;
  imageScr: string;
  description: string;
  projectHeaderHeight: number;
  projectLink: string;
}

function ProjectCard({
  projectTitle,
  imageScr,
  description,
  projectHeaderHeight,
  projectLink,
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
      onClick={() => {
        navigate(projectLink);
      }}>
      <Card
        withBorder
        radius="xl"
        h={`calc(100vh - 5vh - ${projectHeaderHeight}px)`}>
        <Card.Section withBorder inheritPadding py="lg">
          <Group justify="space-between">
            <Text fw={600} size="7vw">
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
              width: "100%",
            }}
          />
        </Card.Section>
      </Card>
    </Anchor>
  );
}
