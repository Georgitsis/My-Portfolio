import { AppShell, Stack } from "@mantine/core";
import { useHeadroom } from "@mantine/hooks";

export default function MainPage() {
  const pinned = useHeadroom({ fixedAt: 120 });
  return (
    <AppShell header={{ height: 60, collapsed: !pinned, offset: false }} padding="md">
      <AppShell.Header></AppShell.Header>
      <AppShell.Main>
        <Stack align="stretch" justify="flex-start" gap="xl"></Stack>
      </AppShell.Main>
    </AppShell>
  );
}
