import { Image, Text, Stack, Tooltip, Space, SimpleGrid } from "@mantine/core";
import { useRef, useEffect, useState } from "react";
import { useViewportSize, useWindowScroll } from "@mantine/hooks";
import classes from "./Skills.module.css";
export default function Skills() {
  const { height } = useViewportSize();
  const [scroll] = useWindowScroll();
  const componentRef = useRef<HTMLDivElement | null>(null);
  const [fadeIn, setFadeIn] = useState<boolean>(false);
  const [secondFadeIn, setSecondFadeIn] = useState<boolean>(false);

  const techStack = [
    { label: "Git Version Control", src: "/skills/git.svg" },
    { label: "JavaScript", src: "/skills/js.svg" },
    { label: "TypeScript", src: "/skills/ts.svg" },
    { label: "React", src: "/skills/react.svg" },
    { label: "Angular", src: "/skills/angular.svg" },
    { label: "Node.js", src: "/skills/nodejs.svg" },
    { label: "C++", src: "/skills/C++.svg" },
    { label: "AWS", src: "/skills/aws.svg" },
    { label: "Docker", src: "/skills/docker.svg" },
    { label: "MongoDB", src: "/skills/mongodb.svg" },
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
      const counterLength = techStack.length;
      const delayTimeout = setTimeout(() => {
        const interval = setInterval(() => {
          setIndexCounter((prev) => {
            if (prev + 1 >= counterLength) {
              clearInterval(interval);
              setSecondFadeIn(true);
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
      <SimpleGrid
        cols={5}
        spacing={{ base: 10, sm: "xl" }}
        verticalSpacing={{ base: 10, sm: "xl" }}>
        {" "}
        {techStack.map((tech, index) => (
          <Tooltip key={tech.label} label={tech.label}>
            <Image
              radius="md"
              src={tech.src}
              className={
                index < indexCounter
                  ? ""
                  : index === indexCounter
                  ? classes.imageAnimation
                  : classes.invisible
              }
            />
          </Tooltip>
        ))}
      </SimpleGrid>

      <Space h="md" />
      <Text
        className={`${classes.SkillsContainerText} ${
          secondFadeIn ? classes.FadeInTransition : ""
        } ${classes.secondSkillsText}`}
        fs="italic"
        style={{ textAlign: "justify", alignSelf: "center" }}>
        "A jack of all trades is a master of none, but oftentimes better than
        master of one."
      </Text>
    </Stack>
  );
}
