import { useState } from "react";
import { AppShell } from "@mantine/core";
import { useHeadroom } from "@mantine/hooks";
import HeaderComponent from "../Components/HeaderComponent";
import BannerComponent from "../Components/NameBanner";

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
      </AppShell.Main>
    </AppShell>
  );
}
