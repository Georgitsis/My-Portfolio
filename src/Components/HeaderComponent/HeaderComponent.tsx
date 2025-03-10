import { Group, Stack, Anchor, Transition } from "@mantine/core";
import { FaRegMessage } from "react-icons/fa6";
//import { FaRegUser } from "react-icons/fa";
import classes from "./ComponentStyles.module.css";
import { TbFileCv } from "react-icons/tb";
//import { useHover } from "@mantine/hooks";

interface HeaderComponentProps {
  startInitialTransitions: boolean;
}
export default function HeaderComponent({
  startInitialTransitions,
}: HeaderComponentProps) {
  //const { hovered, ref } = useHover();
  // const [];
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
          <Anchor underline="never" style={{ color: "inherit" }} size="xl">
            <TbFileCv size="48" />
          </Anchor>

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
