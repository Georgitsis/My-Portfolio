import { Group, Image, Text, Stack, Tooltip, Space } from "@mantine/core";
import { useRef, useEffect, useState } from "react";
import { useViewportSize, useWindowScroll } from "@mantine/hooks";
import classes from "./Skills.module.css";
export default function Skills() {
  const { height } = useViewportSize();
  const [scroll] = useWindowScroll();
  const componentRef = useRef<HTMLDivElement | null>(null);
  const [fadeIn, setFadeIn] = useState<boolean>(false);

  const techStack1 = [
    { label: "Git Version Control", src: "/skills_svgs/git.svg" },
    { label: "JavaScript", src: "/skills_svgs/js.svg" },
    { label: "TypeScript", src: "/skills_svgs/ts.svg" },
    { label: "React", src: "/skills_svgs/react.svg" },
    { label: "Angular", src: "/skills_svgs/angular.svg" },
  ];
  const techStack2 = [
    { label: "Node.js", src: "/skills_svgs/nodejs.svg" },
    { label: "C++", src: "/skills_svgs/C++.svg" },
    { label: "AWS", src: "/skills_svgs/aws.svg" },
    { label: "Docker", src: "/skills_svgs/docker.svg" },
    { label: "MongoDB", src: "/skills_svgs/mongodb.svg" },
  ];

  const [indexCounter, setIndexCounter] = useState(-1);

  useEffect(() => {
    if (componentRef.current) {
      const rect = componentRef.current.getBoundingClientRect();
      if (rect.y / height < 0.75 && scroll.y > 0) setFadeIn(true);
    }
  });

  useEffect(() => {
    if (fadeIn) {
      const counterLength = techStack1.length + techStack2.length;
      const delayTimeout = setTimeout(() => {
        const interval = setInterval(() => {
          setIndexCounter((prev) => {
            if (prev + 1 >= counterLength) {
              clearInterval(interval);
              return counterLength;
            }
            return prev + 1;
          });
        }, 400);

        return () => clearInterval(interval);
      }, 1200);

      return () => clearTimeout(delayTimeout);
    }
  }, [fadeIn]);

  return (
    <Stack
      className={`${classes.SkillsContainer} ${
        fadeIn ? classes.FadeInTransition : ""
      }`}
      ref={componentRef}
      align="center"
      justify="flex-start"
      maw={1280}
      mx={"auto"}
      gap={"xl"}
      p={"xl"}
      style={{
        background: "var(--mantine-color-dark-6)",
        borderRadius: "var(--mantine-radius-xl)",
      }}>
      <Text
        className={`${classes.SkillsContainerText} ${
          fadeIn ? classes.FadeInTransition : ""
        } ${classes.firstSkillsText}`}
        style={{
          textAlign: "center",
          alignSelf: "center",
        }}>
        Full-Stack Mastery: A Balance of Depth & Breadth
      </Text>
      <Space h="md" />
      <Group grow justify="center" gap="lg">
        {techStack1.map((tech, index) => (
          <Tooltip key={tech.label} label={tech.label}>
            <Image
              radius="md"
              src={tech.src}
              className={
                index < indexCounter
                  ? ""
                  : index === indexCounter
                  ? classes.imageAnimation
                  : classes.imageInvisible
              }
            />
          </Tooltip>
        ))}
      </Group>{" "}
      <Group grow justify="center" gap="lg">
        {techStack2.map((tech, index) => (
          <Tooltip key={tech.label} label={tech.label}>
            <Image
              radius="md"
              src={tech.src}
              className={
                index + 5 < indexCounter
                  ? ""
                  : index + 5 === indexCounter
                  ? classes.imageAnimation
                  : classes.imageInvisible
              }
            />
          </Tooltip>
        ))}
      </Group>
      <Space h="md" />
      <Text
        className={`${classes.SkillsContainerText} ${
          fadeIn ? classes.FadeInTransition : ""
        } ${classes.secondSkillsText}`}
        fs="italic"
        style={{ textAlign: "justify", alignSelf: "center" }}>
        "A jack of all trades is a master of none, but oftentimes better than
        master of one."
      </Text>
    </Stack>
  );
}
