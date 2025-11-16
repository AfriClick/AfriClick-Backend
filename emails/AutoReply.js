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

const AutoReply = ({ name = "Friend" }) => {
  return React.createElement(
    Html,
    null,
    React.createElement(Head, null),
    React.createElement(
      Body,
      { className: "bg-gray-100 font-sans" },
      React.createElement(
        Tailwind,
        null,
        React.createElement(
          Container,
          { className: "max-w-lg mx-auto my-10 bg-white rounded-lg shadow-md overflow-hidden" },
          
          // Header
          React.createElement(
            Section,
            { className: "bg-sky-600 py-4 text-center" },
            React.createElement(Text, { className: "text-white text-xl font-semibold tracking-wide" }, "Thanks for Reaching Out!")
          ),

          // Greeting
          React.createElement(
            Section,
            { className: "px-6 py-6" },
            React.createElement(Text, { className: "text-base text-gray-700 leading-relaxed" },
              "Hi ", React.createElement("strong", null, name), ","
            ),
            React.createElement(Text, { className: "text-base text-gray-700 mt-3 leading-relaxed" },
              "Thanks for contacting us! This email is to confirm that we’ve received your message. We truly appreciate you taking the time to reach out."
            )
          ),

          // Response Note
          React.createElement(
            Section,
            { className: "px-6 pb-6" },
            React.createElement(Text, { className: "text-base text-gray-700 leading-relaxed" },
              "Our team will review your message and get back to you as soon as possible — usually within 24 to 48 hours."
            ),
            React.createElement(Text, { className: "text-base text-gray-700 mt-4 leading-relaxed" },
              "If your matter is urgent, feel free to reply directly to this email."
            )
          ),

          // Divider
          React.createElement(Section, { className: "border-t border-gray-200 my-6 mx-6" }),

          // Footer
          React.createElement(
            Section,
            { className: "px-6 pb-6 text-center" },
            React.createElement(Text, { className: "text-sm text-gray-600" },
              "Thank you once again for reaching out. We look forward to connecting with you soon!"
            ),
            React.createElement(Text, { className: "text-xs text-gray-400 mt-4" },
              "This is an automated confirmation message — no action is required."
            )
          )
        )
      )
    )
  );
};

export default AutoReply;
