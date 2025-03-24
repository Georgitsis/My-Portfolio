import { Title, Grid, Tooltip, Image } from "@mantine/core";
import React from "react";
import { useViewportSize } from "@mantine/hooks";

interface TechStackProps {
  techStack: { label: string; src: string; text: string }[];
}

const TechStack: React.FC<TechStackProps> = ({ techStack }) => {
  const { width } = useViewportSize();
  console.log(width);
  return (
    <>
      <Title size={"5vw"} style={{ textAlign: "center" }}>
        The Project's Tech Stack
      </Title>
      <Grid
        mt={"xl"}
        align="center"
        gutter={{ base: "xl", xs: "xl", md: "xl", xl: 50 }}
        style={{ textAlign: "justify" }}>
        {techStack.map((tech, index) => (
          <React.Fragment key={`tech-${index}`}>
            <Grid.Col span={width > 768 ? 2 : 3}>
              <Tooltip label={tech.label}>
                <Image radius="md" src={tech.src} />
              </Tooltip>
            </Grid.Col>
            <Grid.Col span={width > 768 ? 10 : 9}>{tech.text}</Grid.Col>
          </React.Fragment>
        ))}
      </Grid>
    </>
  );
};

export default TechStack;
