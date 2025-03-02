import { useState } from "react";
import { AppShell, Stack, Space } from "@mantine/core";
import {
  useHeadroom /*useWindowScroll, useViewportSize*/,
} from "@mantine/hooks";
import HeaderComponent from "../Components/HeaderComponent";
import BannerComponent from "../Components/NameBanner/NameBanner";
import Introduction from "../Components/Introduction/Introduction";
import Skills from "../Components/Skills/SkillsTable";
import Projects from "../Components/Projects/Projects";
import GetInTouch from "../Components/GetInTouch/GetInTouch";

export default function MainPage() {
  const pinned = useHeadroom({ fixedAt: 120 });
  const [startInitialTransitions, setStartInitialTransitions] =
    useState<boolean>(false);
  return (
    <AppShell
      header={{ height: 100, collapsed: !pinned, offset: true }}
      padding="md"
      withBorder={false}>
      <AppShell.Header>
        <HeaderComponent startInitialTransitions={startInitialTransitions} />
      </AppShell.Header>
      <AppShell.Main>
        <BannerComponent
          startInitialTransitions={startInitialTransitions}
          setStartInitialTransitions={setStartInitialTransitions}
        />
        <Stack
          style={{
            marginTop: "40vh",
          }}>
          <Introduction />
          <Space h="20vh" />
          <Skills />
          <Space h="20vh" />
          <Projects />
          <Space h="20vh" />
          <GetInTouch />
          <Space h="20vh" />
        </Stack>
      </AppShell.Main>
    </AppShell>
  );
}
