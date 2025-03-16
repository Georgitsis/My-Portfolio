import { Group, Anchor, Transition, Image } from "@mantine/core";
import { useHover, useViewportSize } from "@mantine/hooks";
import { FaRegMessage } from "react-icons/fa6";
import classes from "./ComponentStyles.module.css";
import { TbFileCv } from "react-icons/tb";

interface HeaderComponentProps {
  startInitialTransitions: boolean;
}
export default function HeaderComponent({
  startInitialTransitions,
}: HeaderComponentProps) {
  const { width } = useViewportSize();
  return (
    <Transition
      mounted={startInitialTransitions}
      transition={"slide-down"}
      duration={800}
      enterDelay={400}>
      {(styles) => (
        <Group
          style={styles}
          className={`${classes.NavBarElement} ${
            startInitialTransitions ? classes.NavBarElementTransitioned : ""
          }`}
          justify="space-between"
          h={"100%"}
          maw={1280}
          mx={"auto"}
          px="md"
          pb="md">
          <CvFileHeaderComponent />

          <Anchor
            href="mailto:georgitsis.theodoros@gmail.com"
            style={{
              color: "inherit",
            }}>
            <FaRegMessage size={width > 576 ? "48" : "32"} />
          </Anchor>
        </Group>
      )}
    </Transition>
  );
}

function CvFileHeaderComponent() {
  const { hovered, ref } = useHover();
  const { width } = useViewportSize();
  console.log(width);
  console.log(typeof width);

  return (
    <Group ref={ref}>
      <TbFileCv size={width > 576 ? "48" : "32"} />
      <Transition
        mounted={hovered}
        transition="fade-right"
        duration={400}
        timingFunction="ease">
        {(styles) => (
          <Group style={styles}>
            <Anchor
              href="/files/CV_eng.pdf"
              target="_blank"
              underline="never"
              style={{ color: "inherit" }}
              size="xl">
              <Image w="32px" src="/flags/eng_flag.svg" />
            </Anchor>
            <Anchor
              href="/files/CV_ger.pdf"
              target="_blank"
              underline="never"
              style={{ color: "inherit" }}
              size="xl">
              <Image w="32px" src="/flags/ger_flag.svg" />
            </Anchor>
            <Anchor
              href="/files/CV_nor.pdf"
              target="_blank"
              underline="never"
              style={{ color: "inherit" }}
              size="xl">
              <Image w="32px" src="/flags/nor_flag.svg" />
            </Anchor>
          </Group>
        )}
      </Transition>
    </Group>
  );
}
