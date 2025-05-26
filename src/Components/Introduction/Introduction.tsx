import { useRef, useEffect, useState } from "react";
import { Text, Stack } from "@mantine/core";
import { useViewportSize, useWindowScroll } from "@mantine/hooks";
import classes from "./Introduction.module.css";

export default function Introduction() {
  const { height } = useViewportSize();
  const [scroll] = useWindowScroll();
  const componentRef = useRef<HTMLDivElement | null>(null);
  const [fadeIn, setFadeIn] = useState<boolean>(false);
  const [fadeInSecondText, setFadeInSecondText] = useState<boolean>(false);
  const entireFirstTextToDisplayRef = useRef<string[]>([
    "Hi, ",
    "I'm ",
    "Theo, ",
    "a ",
    "web ",
    "developer ",
    "passionate ",
    "about ",
    "creating ",
    "meaningful ",
    "digital ",
    "experiences.",
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
    <Stack
      ref={componentRef}
      className={`${classes.IntroductionContainer} ${
        fadeIn ? classes.FadeInTransition : ""
      }`}
      align="stretch"
      justify="flex-start"
      maw={1280}
      mx={"auto"}
      gap={60}
      p={"xl"}
      style={{
        background: "var(--mantine-color-dark-6)",
        borderRadius: "var(--mantine-radius-xl)",
      }}>
      <Text className={classes.firstIntroText} style={{ textAlign: "center" }}>
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
        className={`${fadeInSecondText ? classes.fadeInSlow : ""} ${
          classes.secondIntroText
        }`}
        style={{
          textAlign: "justify",
          alignSelf: "flex-start",
          opacity: "0",
        }}>
        I'm focused on advancing my career in web development. While I'm still
        growing my experience, I've consistently met challenges head-on and
        brought ideas to life through functional, user-centered features. I'm
        driven by continuous learning, technical improvement, and delivering
        polished, purposeful solutions.
      </Text>
    </Stack>
  );
}
