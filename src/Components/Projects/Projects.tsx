import { FaExternalLinkAlt } from "react-icons/fa";
import { Stack, Card, Group, Text, Image, Anchor, Space } from "@mantine/core";
import { useElementSize } from "@mantine/hooks";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Projects() {
  const projects = [
    {
      title: "smartlittleboxes.com",
      imageSource: "/slb/slb_6.jpg",
      description:
        "An easy-to-use inventory management tool to track, organize, and manage your items efficiently.",
      projectLink: "/smartlittleboxes",
    },
    {
      title: "MyFlix React FE",
      imageSource: "/my_flix/my_flix_react_client.jpg",
      description:
        "MyFlix is a full-stack movie library app built with the MERN (MongoDB, Express, React, Node.js) stack. It allows users to register, search movies, view details, and curate a list of favorites.",
      projectLink: "/myflix_react",
    },
    {
      title: "MyFlix Angular FE",
      imageSource: "/my_flix/my_flix_angular_client.jpg",
      description:
        "MyFlix is a full-stack movie library app built with the MEAN (MongoDB, Express, Angular, Node.js) stack. It allows users to register, search movies, view details, and curate a list of favorites.",
      projectLink: "/myflix_angular",
    },
    {
      title: "MyFlix Back-end",
      imageSource: "/my_flix/my_flix_backend.jpg",
      description:
        "This is the backend for myFlix, built with Express.js and MongoDB. It provides secure API endpoints for retrieving movie and user data, managing accounts, and handling authentication with JWT tokens.",
      projectLink: "/myflix_backend",
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
      imageSource: "/chat/chat_app.png",
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
  const navigate = useNavigate();
  const { ref, width } = useElementSize();
  const [headerFontSize, setHeaderFontSize] = useState<string>();
  useEffect(() => {
    const widthString = (width * 0.08).toString().concat("px");
    setHeaderFontSize(widthString);
  }, [width]);
  return (
    <Anchor
      ref={ref}
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
        mah={`calc(100vh - 5vh - ${projectHeaderHeight}px)`}
        maw={"960px"}>
        <Card.Section withBorder inheritPadding py="lg">
          <Group justify="space-between">
            <Text fw={600} size={headerFontSize}>
              {projectTitle}
            </Text>
            <FaExternalLinkAlt size={32} />
          </Group>
          <Text mt="md" size="xl">
            {description}
          </Text>
        </Card.Section>
        <Card.Section>
          <Image src={imageScr} mx="auto" h="100%" w={"auto"} maw={"100%"} />
        </Card.Section>
      </Card>
    </Anchor>
  );
}
