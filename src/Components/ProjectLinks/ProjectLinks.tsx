import { Group, Text, Stack, Anchor } from "@mantine/core";
import { FaGithub } from "react-icons/fa";
import { FaRegFilePdf } from "react-icons/fa6";
import { TbFileTypeHtml } from "react-icons/tb";

interface ProjectLinksProps {
  webSiteLink?: string;
  caseStudyLink?: string;
  gitHubLink: string;
  webSiteInfo?: string;
  gitHubInfo?: string;
}

export default function ProjectLinks({
  webSiteLink,
  caseStudyLink,
  gitHubLink,
  webSiteInfo,
  gitHubInfo,
}: ProjectLinksProps) {
  return (
    <Stack>
      {webSiteLink && (
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
      )}
      {caseStudyLink && (
        <Group>
          <FaRegFilePdf />
          <Anchor
            style={{ fontSize: "inherit", color: "inherit" }}
            href={caseStudyLink}
            target="_blank">
            <Text style={{ fontSize: "inherit" }}>Read the case study</Text>
          </Anchor>
          {webSiteInfo && (
            <Text style={{ fontSize: "inherit" }}>{webSiteInfo}</Text>
          )}
        </Group>
      )}
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
