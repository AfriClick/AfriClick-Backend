import React from "react";
import {
  Html,
  Head,
  Tailwind,
  Body,
  Container,
  Section,
  Text,
} from "@react-email/components";

const AutoReply = ({
  name = "Friend",
}) => {
  return (
    <Html>
      <Head />
      <Body className="bg-gray-100 font-sans">
        <Tailwind>
          <Container className="max-w-lg mx-auto my-10 bg-white rounded-lg shadow-md overflow-hidden">

            {/* Header */}
            <Section className="bg-sky-600 py-4 text-center">
              <Text className="text-white text-xl font-semibold tracking-wide">
                Thanks for Reaching Out!
              </Text>
            </Section>

            {/* Greeting */}
            <Section className="px-6 py-6">
              <Text className="text-base text-gray-700 leading-relaxed">
                Hi <strong>{name}</strong>,
              </Text>

              <Text className="text-base text-gray-700 mt-3 leading-relaxed">
                Thanks for contacting us! This email is to confirm that we’ve
                received your message. We truly appreciate you taking the time to
                reach out.
              </Text>
            </Section>

            {/* Response Note */}
            <Section className="px-6 pb-6">
              <Text className="text-base text-gray-700 leading-relaxed">
                Our team will review your message and get back to you as soon as
                possible — usually within 24 to 48 hours.
              </Text>

              <Text className="text-base text-gray-700 mt-4 leading-relaxed">
                If your matter is urgent, feel free to reply directly to this email.
              </Text>
            </Section>

            {/* Divider */}
            <Section className="border-t border-gray-200 my-6 mx-6" />

            {/* Footer */}
            <Section className="px-6 pb-6 text-center">
              <Text className="text-sm text-gray-600">
                Thank you once again for reaching out.  
                We look forward to connecting with you soon!
              </Text>

              <Text className="text-xs text-gray-400 mt-4">
                This is an automated confirmation message — no action is required.
              </Text>
            </Section>

          </Container>
        </Tailwind>
      </Body>
    </Html>
  );
};

export default AutoReply;
