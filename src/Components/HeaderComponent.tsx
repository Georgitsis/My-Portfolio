import { Group, Stack, Anchor } from "@mantine/core";
import { FaRegMessage } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import classes from "./ComponentStyles.module.css";
//import classes from "./ComponentStyles.module.css";
//import { useHover } from "@mantine/hooks";

interface HeaderComponentProps {
  startInitialTransitions: boolean;
}
export default function HeaderComponent({
  startInitialTransitions,
}: HeaderComponentProps) {
  return (
    <Group
      className={`${classes.NavBarElement} ${
        startInitialTransitions ? classes.NavBarElementTransitioned : ""
      }`}
      justify="space-between"
      h={"100%"}
      maw={1280}
      mx={"auto"}
      px="md"
      pb="md">
      <Stack align="center" justify="flex-end" h={"100%"} p="sm">
        <Group>
          <FaRegUser size="32" />
        </Group>
      </Stack>
      <Stack
        align="center"
        justify="flex-end"
        h={"100%"}
        p="sm"
        style={{
          background: "var(--mantine-color-dark-6)",
          borderBottomLeftRadius: "var(--mantine-radius-md)",
          borderBottomRightRadius: "var(--mantine-radius-md)",
        }}>
        <Anchor
          href="mailto:georgitsis.theodoros@gmail.com"
          style={{
            color: "inherit",
            display: "inline-flex",
            alignItems: "center",
          }}>
          <FaRegMessage size="32" />
        </Anchor>
      </Stack>
    </Group>
  );
}
/* 
function TakeContact(startInitialTransitions: boolean) {
  return (
    <Stack align="center" justify="flex-end" h={"100%"} p="md">
      <FaRegMessage size="32" />
    </Stack>
  );
}

function ProjectsNavBarComponet() {
  const { hovered, ref } = useHover();
  return (
    <Stack align="center" justify="flex-end" h={"100%"} p="sm" ref={ref}>
      <Group>
        <FaRegUser size="32" />
      </Group>
    </Stack>
  );
} */
