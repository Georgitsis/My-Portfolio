import { useRef, useEffect, useState } from "react";
import { Group, Text } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import classes from "./Introduction.module.css";

export default function Introduction() {
  const { height, width } = useViewportSize();
  const componentRef = useRef<HTMLDivElement | null>(null);
  const [fadeIn, setFadeIn] = useState<boolean>(false);

  useEffect(() => {
    if (componentRef.current) {
      const rect = componentRef.current.getBoundingClientRect();
      if (rect.y / height < 0.75) setFadeIn(true);
    }
  });
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
        Hi, I'm Theo, a full-stack developer based in Norway.
      </Text>
      <Text style={{ alignSelf: "flex-start", fontSize: "1.75em" }}>
        Although new in the field of digital development, I'm eager to
        contribute my skills and help create impactful digital experiences that
        engage and inspire users.
      </Text>
    </Group>
  );
}
