import { useState } from "react";
import { Stack, Image, Text } from "@mantine/core";
import classes from "./ComponentStyles.module.css";

interface BannerComponentProps {
  startInitialTransitions: boolean;
  setStartInitialTransitions: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function BannerComponent({
  startInitialTransitions,
  setStartInitialTransitions,
}: BannerComponentProps) {
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);
  /*   useEffect(() => {
    console.log("useEffect");
    setTransitionClass(true);
  }, []); */

  return (
    <Stack align="center" justify="flex-start" maw={1280} mx={"auto"} gap="0px">
      <Image
        src="/Portrait.png"
        w={"40%"}
        onLoad={() => {
          setImageLoaded(true);
          setTimeout(() => {
            setStartInitialTransitions(true);
          }, 200);
        }}></Image>
      {imageLoaded && (
        <>
          <Text
            className={`${classes.BannerName} ${
              startInitialTransitions ? classes.BannerNameTransitioned : ""
            }`}>
            THEODOROS GEORGITSIS
          </Text>
          <Text
            className={`${classes.BannerSubText} ${
              startInitialTransitions ? classes.BannerSubTextTransitioned : ""
            }`}>
            Full Stack Developer
          </Text>
        </>
      )}
    </Stack>
  );
}
