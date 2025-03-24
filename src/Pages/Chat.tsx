import { Text, Title } from "@mantine/core";
import StackContainer from "../Components/StackContainer/StackContainer";
import TechStack from "../Components/ProjectTechStack/ProjectTechStack";
import ProjectHeader from "../Components/ProjectHeader/ProjectHeader";
import ProjectShell from "../Components/ProjectShell/ProjectShell";
import ProjectLinks from "../Components/ProjectLinks/ProjectLinks";

export default function Chat() {
  const techStack = [
    {
      text: "The project is  realized with React Native a framework for building cross-platform mobile apps using JavaScript and React.",
      src: "/skills/react.svg",
      label: "React Native",
    },
    {
      text: "Gifted Chat was used to create a customizable chat interface with real-time messaging, including message bubbles, avatars, and quick replies.",
      src: "/skills/gifted_chat.svg",
      label: "Gifted Chat",
    },
    {
      text: "Cloud Firestore is a NoSQL database by Google Firebase, that I used for storing and syncing data in real-time for web and mobile apps.",
      src: "/skills/firebase.svg",
      label: "Cloud Firestore",
    },
    {
      text: "Android Studio Emulator is a tool for simulating Android devices on a computer, that allowed me to test the Android app without needing several physical devices.",
      src: "/skills/androidstudio.svg",
      label: "Android Studio Emulator",
    },
    {
      text: "Expo and the accompanying Expo Go were used in my app to simplify development and testing. Expo provided the tools for building, while Expo Go allowed quick previewing and testing on real devices.",
      src: "/skills/expo.svg",
      label: "Expo",
    },
  ];

  return (
    <ProjectShell>
      <ProjectHeader
        headerText="Chat App"
        imageSrc="/chat/ChatApp.png"></ProjectHeader>
      <ProjectLinks
        caseStudyLink="/files/CaseStudy.pdf"
        gitHubLink="https://github.com/Georgitsis/chat-app"></ProjectLinks>
      <StackContainer>
        <Title size={"5vw"} style={{ textAlign: "center" }}>
          About the Project
        </Title>
        <Text style={{ textAlign: "justify", fontSize: "inherit" }}>
          ChatApp is a mobile application, written in React Native in
          combination with the popular open-source library Gifted Chat. The app
          allows users to log in anonymously and chat with others in real-time.
          It also enables users to send pictures from their mobile device's
          library, access the camera to take new pictures, and share their
          locations. To install the app on a mobile phone, the Expo software was
          utilized.
        </Text>
      </StackContainer>

      <StackContainer>
        <TechStack techStack={techStack} />
      </StackContainer>
    </ProjectShell>
  );
}
