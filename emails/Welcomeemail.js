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
  name = " ",
  email = " ",
  phone = " ",
  businessWebsite = "https://example.com",
  message = "",
}) => {
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
          { className: "max-w-lg mx-auto my-8 bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200" },
          
   
          React.createElement(
            Section,
            { className: "bg-indigo-600 py-5 text-center" },
            React.createElement(Text, { className: "text-white text-xl font-bold tracking-wide" }, "New Contact Form Message"),
            React.createElement(Text, { className: "text-indigo-200 text-sm mt-1" }, "A visitor just contacted you from your website")
          ),

          React.createElement(
            Section,
            { className: "px-6 py-6" },
            React.createElement(Text, { className: "text-gray-700 text-base leading-relaxed" },
              "You have received a new message. Below are the details provided by the sender:"
            )
          ),
          React.createElement(
            Section,
            { className: "px-6 pb-4" },
            React.createElement(Text, { className: "text-sm text-gray-900 mb-2" },
              React.createElement("strong", null, "Name:"), " ", name
            ),
            React.createElement(Text, { className: "text-sm text-gray-900 mb-2" },
              React.createElement("strong", null, "Email:"), " ",
              React.createElement("a", { href: `mailto:${email}`, className: "text-indigo-600 underline" }, email)
            ),
            React.createElement(Text, { className: "text-sm text-gray-900 mb-2" },
              React.createElement("strong", null, "Phone:"), " ",
              React.createElement("a", { href: `tel:${phone}`, className: "text-indigo-600 underline" }, phone)
            ),
            React.createElement(Text, { className: "text-sm text-gray-900 mb-4" },
              React.createElement("strong", null, "Business Website:"), " ",
              React.createElement("a", { href: businessWebsite, className: "text-indigo-600 underline" }, businessWebsite)
            ),
            React.createElement(
              Section,
              { className: "bg-gray-50 p-4 rounded border border-gray-200" },
              React.createElement(Text, { className: "text-base text-gray-800 leading-relaxed" },
                React.createElement("strong", { className: "text-indigo-700" }, "Message:"), React.createElement("br", null),
                message
              )
            )
          ),

          React.createElement(Section, { className: "border-t border-gray-200 my-6 mx-6" }),

          React.createElement(
            Section,
            { className: "px-6 pb-6 text-center" },
            React.createElement(Text, { className: "text-sm text-gray-600" }, "This message was sent from your website’s contact form."),
            React.createElement(Text, { className: "text-xs text-gray-400 mt-3" }, "You are receiving this email because your email is set as the contact recipient.")
          )
        )
      )
    )
  );
};

export default Welcomeemail;
