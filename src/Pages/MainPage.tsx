import { useState } from "react";
import { AppShell, Stack } from "@mantine/core";
import {
  useHeadroom /*useWindowScroll, useViewportSize*/,
} from "@mantine/hooks";
import HeaderComponent from "../Components/HeaderComponent";
import BannerComponent from "../Components/NameBanner";
import Introduction from "../Components/Introduction/Introduction";
//import SkillSet from "../Components/SkillSet";

export default function MainPage() {
  const pinned = useHeadroom({ fixedAt: 120 });
  const [startInitialTransitions, setStartInitialTransitions] =
    useState<boolean>(false);
  //const [scroll, scrollTo] = useWindowScroll();
  //const { height } = useViewportSize();
  //const centerOfScreen = scroll.y + height;
  //console.log(centerOfScreen);
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
        </Stack>
      </AppShell.Main>
    </AppShell>
  );
}
