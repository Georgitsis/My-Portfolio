import { Group, Text, Stack, Anchor } from "@mantine/core";
import { FaGithub } from "react-icons/fa";
import { TbFileTypeHtml } from "react-icons/tb";

interface ProjectLinksProps {
  WebSiteLink: string;
  GitHubLink: string;
  WebSiteInfo?: string;
  GitHubInfo?: string;
}

export default function ProjectLinks({
  WebSiteLink,
  GitHubLink,
  WebSiteInfo,
  GitHubInfo,
}: ProjectLinksProps) {
  return (
    <Stack mt="xl">
      <Group>
        <TbFileTypeHtml />
        <Anchor
          style={{ fontSize: "inherit", color: "inherit" }}
          href={WebSiteLink}
          target="_blank">
          <Text style={{ fontSize: "inherit" }}>Visit the web site</Text>
        </Anchor>
        {WebSiteInfo && <Text>{WebSiteInfo}</Text>}
      </Group>
      <Group>
        <FaGithub />
        <Anchor
          style={{ fontSize: "inherit", color: "inherit" }}
          href={GitHubLink}
          target="_blank">
          <Text style={{ fontSize: "inherit" }}>
            Checkout the Code on Github
          </Text>
        </Anchor>
        {GitHubInfo && <Text>{GitHubInfo}</Text>}
      </Group>
    </Stack>
  );
}
