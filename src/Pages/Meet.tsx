import {
  AppShell,
  Stack,
  Text,
  Title,
  Anchor,
  Group,
  BackgroundImage,
  Image,
  Grid,
  Tooltip,
  List,
} from "@mantine/core";
import classes from "./projects.module.css";
export default function Meet() {
  return (
    <AppShell padding="md" withBorder={false}>
      <AppShell.Main>
        <Stack maw={1280} mx={"auto"} className={classes.projectFont}></Stack>
      </AppShell.Main>
    </AppShell>
  );
}
