import { AppShell, Stack } from "@mantine/core";
import { ReactNode, useEffect } from "react";
import classes from "./projects.module.css";

interface ProjectShellProps {
  children: ReactNode;
}

export default function ProjectShell({ children }: ProjectShellProps) {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);
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
