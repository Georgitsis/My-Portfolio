import { Text, Title, List } from "@mantine/core";
import StackContainer from "../Components/StackContainer/StackContainer";
import TechStack from "../Components/ProjectTechStack/ProjectTechStack";
import ProjectHeader from "../Components/ProjectHeader/ProjectHeader";
import ProjectShell from "../Components/ProjectShell/ProjectShell";
import ProjectLinks from "../Components/ProjectLinks/ProjectLinks";

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
    <ProjectShell>
      <ProjectHeader
        headerText="smartlittleboxes.com"
        imageSrc="/slb/slb_7.png"></ProjectHeader>
      <ProjectLinks
        webSiteLink="https://smartlittleboxes.com"
        gitHubLink="https://github.com/0hh/where-is-my-shit-24"
        webSiteInfo="(username: user1, password: 123456. Registration isn not available yet.)"></ProjectLinks>
      <StackContainer>
        <Title size={"5vw"} style={{ textAlign: "center" }}>
          About the Project
        </Title>
        <Text style={{ textAlign: "justify", fontSize: "inherit" }}>
          Smartlittleboxes is a user-friendly inventory management tool designed
          to keep your belongings organized. Unable to find a suitable app, I
          built my own solution. What began as a personal project has evolved
          into a collaborative effort on Git, demonstrating my ability to work
          with others.
        </Text>
      </StackContainer>

      <StackContainer>
        <TechStack techStack={techStack} />
      </StackContainer>
      <StackContainer>
        <Title size={"5vw"} style={{ textAlign: "center" }}>
          What's Next?
        </Title>
        <List style={{ fontSize: "inherit" }}>
          <List.Item key="To-Do-1">
            Switching from DynamoDB for saving item data to NeptuneDB
          </List.Item>
          <List.Item key="To-Do-2">File and image upload</List.Item>
          <List.Item key="To-Do-3">Item categories</List.Item>
          <List.Item key="To-Do-4">AI powered item search</List.Item>
        </List>
      </StackContainer>
    </ProjectShell>
  );
}
