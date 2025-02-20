import { AppShell, Stack } from "@mantine/core";
import { useHeadroom } from "@mantine/hooks";
import HeaderComponent from "../Components/HeaderComponent";

export default function MainPage() {
  const pinned = useHeadroom({ fixedAt: 120 });
  return (
    <AppShell header={{ height: 100, collapsed: !pinned, offset: false }} padding="md" withBorder={false}>
      <AppShell.Header>
        <HeaderComponent />
      </AppShell.Header>
      <AppShell.Main>
        <Stack align="stretch" justify="flex-start" gap="xl"></Stack>
      </AppShell.Main>
    </AppShell>
  );
}
