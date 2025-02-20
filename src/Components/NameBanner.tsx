import { useEffect, useState } from "react";
import { Stack, Image, Text } from "@mantine/core";
import classes from "./ComponentStyles.module.css";

export default function BannerComponent() {
  const [transitionClass, setTransitionClass] = useState<boolean>(false);

  useEffect(() => {
    setTransitionClass(true);
  }, []);

  return (
    <Stack align="center" justify="flex-start" maw={1280} mx={"auto"} gap="0px">
      <Image src="/Portrait.png" w={"50%"}></Image>
      <Text className={`${classes.BannerName} ${transitionClass ? classes.BannerNameTransitioned : ""}`}>THEODOROS GEORGITSIS</Text>
      <Text className={classes.BannerSubText}>Full Stack Developer</Text>
    </Stack>
  );
}
