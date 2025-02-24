import { useEffect, useState } from "react";
import {
  Stack,
  Image,
  Text,
  Box,
  Center,
  Group,
  Anchor,
  Transition,
} from "@mantine/core";
import classes from "./ComponentStyles.module.css";
import { LiaHandPointRightSolid, LiaHandPointDownSolid } from "react-icons/lia";

interface BannerComponentProps {
  startInitialTransitions: boolean;
  setStartInitialTransitions: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function BannerComponent({
  startInitialTransitions,
  setStartInitialTransitions,
}: BannerComponentProps) {
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);
  const [showFirstPointer, setShowFirstPointer] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setShowFirstPointer(false);
    }, 3000);
  }, []);

  return (
    <Stack align="center" justify="flex-start" maw={1280} mx={"auto"} gap="0px">
      <Box className={classes.ProfileFotoContainer}>
        <Center>
          {" "}
          <Image
            src="/Portrait.png"
            w={"40%"}
            onLoad={() => {
              setImageLoaded(true);
              setTimeout(() => {
                setStartInitialTransitions(true);
              }, 200);
            }}></Image>
        </Center>
      </Box>

      {imageLoaded && (
        <>
          <Text
            className={`${classes.BannerName} ${
              startInitialTransitions ? classes.BannerNameTransitioned : ""
            }`}>
            THEODOROS GEORGITSIS
          </Text>
          <Transition
            mounted={startInitialTransitions}
            transition="slide-up"
            enterDelay={400}
            duration={800}>
            {(styles) => (
              <Group
                justify="space-between"
                w="100%"
                style={{
                  ...styles,
                  position: "relative",
                  top: "calc(-1 * clamp(1px, 3.75vw, 50px))",
                }}>
                <Text
                  className={`${classes.BannerSubText} ${
                    startInitialTransitions
                      ? classes.BannerSubTextTransitioned
                      : ""
                  }`}>
                  Full Stack Developer
                </Text>
                <Group>
                  <LiaHandPointRightSolid
                    className={`${classes.FingerToRight} ${
                      showFirstPointer ? "" : classes.FadeOutTransition
                    }`}
                  />
                  <Anchor
                    className={`${classes.BannerSubText}`}
                    href="mailto:georgitsis.theodoros@gmail.com"
                    underline="never"
                    px={"xs"}
                    style={{
                      color: "inherit",
                      border: "solid 1px white",
                      borderRadius: "var(--mantine-radius-xl)",
                      display: "inline-flex",
                      alignItems: "center",
                    }}>
                    Get in touch
                  </Anchor>
                </Group>
              </Group>
            )}
          </Transition>
        </>
      )}
      <LiaHandPointDownSolid
        className={`${classes.FingerToButtom} ${
          !showFirstPointer ? classes.FadeInTransition : ""
        }`}
      />
    </Stack>
  );
}

/*import { useRef } from 'react';
import { Button, Text, Group } from '@mantine/core';

function Demo() {
  const elementRef = useRef(null);

  const getElementPosition = () => {
    if (elementRef.current) {
      const rect = elementRef.current.getBoundingClientRect();
      console.log('Y Position:', rect.top); // Y position relative to the viewport
    }
  };

  return (
    <Group justify="center">
      <Text>
        Scroll position will be printed when button is clicked.
      </Text>
      <Button onClick={getElementPosition}>Get Element Y Position</Button>
      <div ref={elementRef} style={{ marginTop: '500px' }}>
        <Text>This is the element to check the Y position.</Text>
      </div>
    </Group>
  );
}
  
  https://mantine.dev/hooks/use-window-scroll/
  
  */
