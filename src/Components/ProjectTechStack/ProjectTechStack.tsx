import { Title, Grid, Tooltip, Image } from "@mantine/core";
import React from "react";

interface TechStackProps {
  techStack: { label: string; src: string; text: string }[];
}

const TechStack: React.FC<TechStackProps> = ({ techStack }) => {
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
            <Grid.Col span={2}>
              <Tooltip label={tech.label}>
                <Image radius="md" src={tech.src} />
              </Tooltip>
            </Grid.Col>
            <Grid.Col span={10}>{tech.text}</Grid.Col>
          </React.Fragment>
        ))}
      </Grid>
    </>
  );
};

export default TechStack;
