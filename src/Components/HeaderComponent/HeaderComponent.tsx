import { Group, Anchor, Transition } from "@mantine/core";
import { FaRegMessage } from "react-icons/fa6";
import classes from "./ComponentStyles.module.css";
import { TbFileCv } from "react-icons/tb";

interface HeaderComponentProps {
  startInitialTransitions: boolean;
}
export default function HeaderComponent({
  startInitialTransitions,
}: HeaderComponentProps) {
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
          <Group>
            <TbFileCv size="48" />
            <Anchor
              href="/files/CV_eng.pdf"
              target="_blank"
              underline="never"
              style={{ color: "inherit" }}
              size="xl">
              eng
            </Anchor>
            <Anchor
              href="/files/CV_ger.pdf"
              target="_blank"
              underline="never"
              style={{ color: "inherit" }}
              size="xl">
              deu
            </Anchor>
            <Anchor
              href="/files/CV_nor.pdf"
              target="_blank"
              underline="never"
              style={{ color: "inherit" }}
              size="xl">
              nor
            </Anchor>
          </Group>

          <Anchor
            href="mailto:georgitsis.theodoros@gmail.com"
            style={{
              color: "inherit",
            }}>
            <FaRegMessage size="48" />
          </Anchor>
        </Group>
      )}
    </Transition>
  );
}
/*          <Anchor underline="never" style={{ color: "inherit" }} size="xl">
            <TbFileCv size="48" />
          </Anchor>*/
