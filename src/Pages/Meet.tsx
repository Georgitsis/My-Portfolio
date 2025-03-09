import { Text, Title } from "@mantine/core";
import StackContainer from "../Components/StackContainer/StackContainer";
import TechStack from "../Components/ProjectTechStack/ProjectTechStack";
import ProjectHeader from "../Components/ProjectHeader/ProjectHeader";
import ProjectShell from "../Components/ProjectShell/ProjectShell";
import ProjectLinks from "../Components/ProjectLinks/ProjectLinks";

export default function Meet() {
  const techStack = [
    {
      text: "The project's frontend is built with React, a JavaScript library for creating dynamic and reusable user interfaces.",
      src: "/skills_svgs/react.svg",
      label: "React",
    },
    {
      text: "OAuth 2.0 is a secure authorization framework that grants limited access via tokens without sharing credentials.",
      src: "/skills_svgs/oauth.svg",
      label: "Oauth 2.0",
    },
    {
      text: "AWS Lambda function runs the Python code that powers the APIs, offering a serverless approach for better scalability and performance.",
      src: "/skills_svgs/Lambda.svg",
      label: "AWS Lambda",
    },
    {
      text: "Google Cloud provides tools for integrating Google services, like Maps and Calendar, into applications, allowing access to data and features programmatically.",
      src: "/skills_svgs/google_cloud.svg",
      label: "Google Cloud",
    },
    {
      text: "Jest is a JavaScript testing framework designed to ensure correctness of any JavaScript codebase.",
      src: "/skills_svgs/jest.svg",
      label: "Jest",
    },
    {
      text: "Recharts is a React charting library built on D3.js, offering customizable and responsive charts.",
      src: "/skills_svgs/recharts.svg",
      label: "Rechart",
    },
  ];

  return (
    <ProjectShell>
      <ProjectHeader
        headerText="Meet"
        imageSrc="/meet/meet_1.png"></ProjectHeader>
      <ProjectLinks
        webSiteLink="https://georgitsis.github.io/meet/"
        gitHubLink="https://github.com/Georgitsis/meet"></ProjectLinks>
      <StackContainer>
        <Title size={"5vw"} style={{ textAlign: "center" }}>
          About the Project
        </Title>
        <Text style={{ textAlign: "justify", fontSize: "inherit" }}>
          Meet App is a React-based event-tracking Progressive Web App (PWA)
          designed to keep users updated on upcoming CareerFoundry events. Built
          using Test-Driven Development (TDD), it integrates with the Google
          Calendar API to fetch event details securely via an OAuth2
          authentication flow.
          <br />
          The app utilizes AWS Lambda for serverless functions and an
          authorization server to handle authentication. Data is fetched
          efficiently using React Axios with async/await, ensuring a smooth user
          experience. Additionally, Meet App features an alert system
          implemented using an object-oriented programming (OOP) approach,
          providing timely notifications about events.
        </Text>
      </StackContainer>

      <StackContainer>
        <TechStack techStack={techStack} />
      </StackContainer>
    </ProjectShell>
  );
}
