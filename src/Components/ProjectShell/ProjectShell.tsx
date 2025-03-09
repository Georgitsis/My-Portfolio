import { AppShell, Stack } from "@mantine/core";
import { ReactNode } from "react";
import classes from "./projects.module.css";

interface ProjectShellProps {
  children: ReactNode;
}

export default function ProjectShell({ children }: ProjectShellProps) {
  return (
    <AppShell padding="md" withBorder={false}>
      <AppShell.Main>
        <Stack maw={1280} mx="auto" className={classes.projectFont}>
          {children}
        </Stack>
      </AppShell.Main>
    </AppShell>
  );
}
