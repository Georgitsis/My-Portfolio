import { useRef, useEffect, useState } from "react";
import { Group, Text } from "@mantine/core";
import { useViewportSize, useWindowScroll } from "@mantine/hooks";
import classes from "./Introduction.module.css";

export default function Introduction() {
  const { height, width } = useViewportSize();
  const [scroll] = useWindowScroll();
  const componentRef = useRef<HTMLDivElement | null>(null);
  const [fadeIn, setFadeIn] = useState<boolean>(false);
  const [fadeInSecondText, setFadeInSecondText] = useState<boolean>(false);
  const entireFirstTextToDisplayRef = useRef<string[]>([
    "Hi, ",
    "I'm ",
    "Theo ",
    "a ",
    "full-",
    "stack ",
    "developer ",
    "based ",
    "in ",
    "Norway.",
  ]);
  const [animatedSpans, setAnimatedSpans] = useState<string[]>([]);

  useEffect(() => {
    if (componentRef.current) {
      const rect = componentRef.current.getBoundingClientRect();
      if (rect.y / height < 0.65 && scroll.y > 0) setFadeIn(true);
    }
  });

  useEffect(() => {
    if (fadeIn) {
      setTimeout(() => {
        if (entireFirstTextToDisplayRef.current.length > 0) {
          const stringToAdd = entireFirstTextToDisplayRef.current.shift()!;
          setAnimatedSpans([...animatedSpans, stringToAdd]);
          if (animatedSpans.length === 9) {
            setFadeInSecondText(true);
          }
        }
      }, 150);
    }
  }, [fadeIn, animatedSpans]);

  return (
    <Group
      ref={componentRef}
      className={`${classes.IntroductionContainer} ${
        fadeIn ? classes.FadeInTransition : ""
      }`}
      align="center"
      justify="flex-start"
      maw={1280}
      mx={"auto"}
      gap={60}
      p={"xl"}
      grow={width > 992 ? true : false}
      style={{
        background: "var(--mantine-color-dark-6)",
        borderRadius: "var(--mantine-radius-xl)",
      }}>
      <Text style={{ alignSelf: "flex-start", fontSize: "3em" }}>
        {animatedSpans.map((spanText, index) => (
          <span
            key={index}
            className={`${
              index === animatedSpans.length - 1 ? classes.fadeIn : ""
            }`}>
            {spanText}
          </span>
        ))}
      </Text>
      <Text
        className={fadeInSecondText ? classes.fadeInSlow : ""}
        style={{ alignSelf: "flex-start", fontSize: "1.75em", opacity: "0" }}>
        I'm driven by my newly discovered passion for digital development and
        eager to contribute my skills in creating impactful digital experiences
        that engage and inspire users.
      </Text>
    </Group>
  );
}
