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

const Welcomeemail = ({
  name = "John Doe",
  email = "johndoe@example.com",
  phone = "+1 (555) 123-4567",
  businessWebsite = "https://example.com",
  message = "Hello, I’d love to work with you on a new project!",
}) => {
  return (
    <Html>
      <Head />
      <Body className="bg-gray-100 font-sans">
        <Tailwind>
          <Container className="max-w-lg mx-auto my-8 bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">

            {/* Header */}
            <Section className="bg-indigo-600 py-5 text-center">
              <Text className="text-white text-xl font-bold tracking-wide">
                New Contact Form Message
              </Text>
              <Text className="text-indigo-200 text-sm mt-1">
                A visitor just contacted you from your website
              </Text>
            </Section>

            {/* Intro */}
            <Section className="px-6 py-6">
              <Text className="text-gray-700 text-base leading-relaxed">
                You have received a new message. Below are the details provided by the sender:
              </Text>
            </Section>

            {/* User Details */}
            <Section className="px-6 pb-4">
              <Text className="text-sm text-gray-900 mb-2">
                <strong>Name:</strong> {name}
              </Text>

              <Text className="text-sm text-gray-900 mb-2">
                <strong>Email:</strong>{" "}
                <a href={`mailto:${email}`} className="text-indigo-600 underline">
                  {email}
                </a>
              </Text>

              <Text className="text-sm text-gray-900 mb-2">
                <strong>Phone:</strong>{" "}
                <a href={`tel:${phone}`} className="text-indigo-600 underline">
                  {phone}
                </a>
              </Text>

              <Text className="text-sm text-gray-900 mb-4">
                <strong>Business Website:</strong>{" "}
                <a
                  href={businessWebsite}
                  className="text-indigo-600 underline"
                >
                  {businessWebsite}
                </a>
              </Text>

              {/* Message Box */}
              <Section className="bg-gray-50 p-4 rounded border border-gray-200">
                <Text className="text-base text-gray-800 leading-relaxed">
                  <strong className="text-indigo-700">Message:</strong>
                  <br />
                  {message}
                </Text>
              </Section>
            </Section>

            {/* Divider */}
            <Section className="border-t border-gray-200 my-6 mx-6" />

            {/* Footer */}
            <Section className="px-6 pb-6 text-center">
              <Text className="text-sm text-gray-600">
                This message was sent from your website’s contact form.
              </Text>
              <Text className="text-xs text-gray-400 mt-3">
                You are receiving this email because your email is set as the contact recipient.
              </Text>
            </Section>

          </Container>
        </Tailwind>
      </Body>
    </Html>
  );
};

export default Welcomeemail;
