import { EmailFileProps } from "@/utils/types";
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";


export const EmailFile: React.FC<EmailFileProps> = ({
  senderEmail,
  message,
  usernName,
  companyName,
  phone,
}) => {
  return (
    <Html>
      <Head />
      <Preview>New message from your portfolio site</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
                <Heading className="leading-tight">You received the following message from the contact form</Heading>
                <Text>My name is name{usernName}  my phone is: tel{phone} </Text>
                <Hr />
                <Text>We are company{companyName}</Text>
                <Text>{message}</Text>
                <Hr />
                <Text>The sender`s email is: {senderEmail}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};
