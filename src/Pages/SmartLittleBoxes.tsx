import {
  AppShell,
  Stack,
  Text,
  Title,
  Anchor,
  Group,
  BackgroundImage,
  Image,
  Grid,
  Tooltip,
  List,
} from "@mantine/core";
import { FaExternalLinkAlt } from "react-icons/fa";
import classes from "./projects.module.css";

export default function SmartLittleBoxes() {
  const techStack = [
    {
      text: "The project's frontend is built with React, a JavaScript library for creating dynamic and reusable user interfaces.",
      src: "/skills_svgs/react.svg",
      label: "React",
    },
    {
      text: "TypeScript is used for type safety.",
      src: "/skills_svgs/ts.svg",
      label: "TypeScript",
    },
    {
      text: "Mantine offers a comprehensive styling solution, a wide range of UI components, and a flexible design system for building modern and responsive interfaces.",
      src: "/skills_svgs/mantine-seeklogo.svg",
      label: "Mantine",
    },
    {
      text: "Cognito is used in the project for handling user authentication and managing access control.",
      src: "/skills_svgs/Cognito.svg",
      label: "Cognito",
    },
    {
      text: "A S3 Bucket is used to store static frontend assets, such as HTML, CSS, and JavaScript files.",
      src: "/skills_svgs/s3.svg",
      label: "S3",
    },
    {
      text: "Python's FastAPI is used in my project for building high-performance, asynchronous backend APIs.",
      src: "/skills_svgs/python.svg",
      label: "FastAPI",
    },
    {
      text: "AWS Lambda function runs the Python code that powers the APIs, offering a serverless approach for better scalability and performance.",
      src: "/skills_svgs/Lambda.svg",
      label: "AWS Lambda",
    },
    {
      text: "The project uses DynamoDB for scalable and fast data storage and retrieval.",
      src: "/skills_svgs/DynamoDB.svg",
      label: "DynamoDB",
    },
    {
      text: "Amazon Route 53 is used in my project for managing the DNS, ensuring reliable and efficient routing of traffic to the appropriate resources.",
      src: "/skills_svgs/route53.svg",
      label: "Route 53",
    },
    {
      text: "Amazon CloudFront is used as a content delivery network, optimizing the delivery of static assets like images, CSS, and JavaScript to users across the globe.",
      src: "/skills_svgs/CloudFront.svg",
      label: "CloudFront",
    },
    {
      text: "A CI/CD pipeline is implemented on Git to automate the process of testing, building, and deploying the project, ensuring faster and more reliable releases.",
      src: "/skills_svgs/ci-cd.svg",
      label: "CI/CD",
    },
  ];

  return (
    <AppShell padding="md" withBorder={false}>
      <AppShell.Main>
        <Stack maw={1280} mx={"auto"} className={classes.projectFont}>
          <BackgroundImage src="/slb/slb_4.png" radius="md">
            <Group justify="space-between" h={"400px"}>
              <Text
                size={"5vw"}
                w={"auto"}
                style={{
                  alignSelf: "flex-end",
                  fontWeight: "800",
                  background:
                    "linear-gradient(to bottom, white 50%, #aacdfc 50%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}>
                smartlittleboxes.com
              </Text>
              <FaExternalLinkAlt size={32} style={{ alignSelf: "flex-end" }} />
            </Group>
          </BackgroundImage>
          <Stack
            p={"xl"}
            style={{
              background: "var(--mantine-color-dark-6)",
              borderRadius: "var(--mantine-radius-xl)",
            }}
            className={classes.projectFont}>
            <Text style={{ textAlign: "justify", fontSize: "inherit" }}>
              Smartlittleboxes is a user-friendly inventory management tool
              designed to keep your belongings organized. Unable to find a
              suitable app, I built my own solution. What began as a personal
              project has evolved into a collaborative effort on Git,
              demonstrating my ability to work with others.
            </Text>
            <Text mt="xl" style={{ textAlign: "justify", fontSize: "inherit" }}>
              Feel free to visit the{" "}
              <Anchor
                href="https://smartlittleboxes.com"
                target="_blank"
                underline="not-hover"
                fw={700}
                style={{ color: "inherit", fontSize: "inherit" }}>
                smartlittleboxes.com
              </Anchor>
              , but please note that it's still in development, and registration
              isn't available yet. To explore, use the credentials: username:
              user1 and password: 123456
            </Text>
          </Stack>
          <Stack
            p={"xl"}
            mt={"20vh"}
            style={{
              background: "var(--mantine-color-dark-6)",
              borderRadius: "var(--mantine-radius-xl)",
            }}>
            <Title size={"5vw"} style={{ textAlign: "center" }}>
              The Projects Tech Stack
            </Title>
            <Grid
              mt={"xl"}
              align="center"
              gutter={{ base: "xl", xs: "xl", md: "xl", xl: 50 }}
              style={{ textAlign: "justify" }}>
              {techStack.map((tech) => (
                <>
                  <Grid.Col span={2}>
                    <Tooltip label={tech.label}>
                      <Image radius="md" src={tech.src} />
                    </Tooltip>
                  </Grid.Col>
                  <Grid.Col span={10}>{tech.text}</Grid.Col>
                </>
              ))}
            </Grid>
          </Stack>
          <Stack
            p={"xl"}
            mt={"20vh"}
            style={{
              background: "var(--mantine-color-dark-6)",
              borderRadius: "var(--mantine-radius-xl)",
            }}>
            <Title size={"5vw"} style={{ textAlign: "center" }}>
              What's Next?
            </Title>
            <List className={classes.projectFont}>
              <List.Item>
                Switching from DynamoDB for saving item data to NeptuneDB (graph
                data base)
              </List.Item>
              <List.Item>File and image upload</List.Item>
              <List.Item>Item categories</List.Item>
              <List.Item>AI powered item search</List.Item>
              <List.Item>AI powered item search</List.Item>
            </List>
          </Stack>
        </Stack>
      </AppShell.Main>
    </AppShell>
  );
}
