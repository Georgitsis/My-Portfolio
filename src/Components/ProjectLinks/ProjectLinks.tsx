import { Group, Text, Stack, Anchor } from "@mantine/core";
import { FaGithub } from "react-icons/fa";
import { TbFileTypeHtml } from "react-icons/tb";

interface ProjectLinksProps {
  webSiteLink: string;
  gitHubLink: string;
  webSiteInfo?: string;
  gitHubInfo?: string;
}

export default function ProjectLinks({
  webSiteLink,
  gitHubLink,
  webSiteInfo,
  gitHubInfo,
}: ProjectLinksProps) {
  return (
    <Stack>
      <Group>
        <TbFileTypeHtml />
        <Anchor
          style={{ fontSize: "inherit", color: "inherit" }}
          href={webSiteLink}
          target="_blank">
          <Text style={{ fontSize: "inherit" }}>Visit the web site</Text>
        </Anchor>
        {webSiteInfo && (
          <Text style={{ fontSize: "inherit" }}>{webSiteInfo}</Text>
        )}
      </Group>
      <Group>
        <FaGithub />
        <Anchor
          style={{ fontSize: "inherit", color: "inherit" }}
          href={gitHubLink}
          target="_blank">
          <Text style={{ fontSize: "inherit" }}>
            Checkout the Code on Github
          </Text>
        </Anchor>
        {gitHubInfo && (
          <Text style={{ fontSize: "inherit" }}>{gitHubInfo}</Text>
        )}
      </Group>
    </Stack>
  );
}
