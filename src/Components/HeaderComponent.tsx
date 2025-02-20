import { Group, Stack, Text } from "@mantine/core";
import { FaRegMessage } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import classes from "./HeaderComponent.module.css";
import { useHover } from "@mantine/hooks";
export default function HeaderComponent() {
  return (
    <Group justify="space-between" h={"100%"} maw={1280} mx={"auto"} px="md" pb="md">
      <ProjectsNavBarComponet />
      <TakeContact />
    </Group>
  );
}

function TakeContact() {
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
}
