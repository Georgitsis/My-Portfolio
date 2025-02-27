import { Group, Image, Text, Stack, Tooltip } from "@mantine/core";
import { useRef, useEffect, useState } from "react";
import { useViewportSize, useWindowScroll } from "@mantine/hooks";
import classes from "./Skills.module.css";
export default function Skills() {
  const { height } = useViewportSize();
  const [scroll] = useWindowScroll();
  const componentRef = useRef<HTMLDivElement | null>(null);
  const [fadeIn, setFadeIn] = useState<boolean>(false);

  const techStack = [
    { label: "JavaScript", src: "/js.svg" },
    { label: "TypeScript", src: "/ts.svg" },
    { label: "React", src: "/react.svg" },
    { label: "Angular", src: "/angular.svg" },
    { label: "Node.js", src: "/nodejs.svg" },
    { label: "C++", src: "/C++.svg" },
    { label: "AWS", src: "/aws.svg" },
    { label: "Docker", src: "/docker.svg" },
    { label: "MongoDB", src: "/mongodb.svg" },
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
      const delayTimeout = setTimeout(() => {
        const interval = setInterval(() => {
          setIndexCounter((prev) => {
            if (prev + 1 >= techStack.length) {
              clearInterval(interval);
              return techStack.length;
            }
            return prev + 1;
          });
        }, 400);

        return () => clearInterval(interval);
      }, 1200); // 1.2 seconds delay before starting the interval

      return () => clearTimeout(delayTimeout); // Clear the timeout if the component is unmounted or fadeIn changes
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
        //marginTop: "40vh",
      }}>
      <Text
        className={`${classes.SkillsContainerText} ${
          fadeIn ? classes.FadeInTransition : ""
        }`}
        style={{ alignSelf: "center", fontSize: "2em" }}>
        As of now, I have hands-on experience with
      </Text>
      <Group grow wrap={"nowrap"} justify="center" gap="lg">
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
                  : classes.imageInvisible
              }
            />
          </Tooltip>
        ))}
      </Group>
    </Stack>
  );
}
