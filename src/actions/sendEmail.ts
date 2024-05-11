"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
// import EmailTemplate from "@/components/EmailTemplate/EmailTemplate";
import { EmailFile } from "@/components/EmailFile/EmailFile";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  console.log('rrrrr server');
  
  
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");
  const usernName = formData.get("usernName");
  const companyName = formData.get("companyName");
  const phone = formData.get("phone");
  // console.log("senderEmail", formData.get("senderEmail"));
  // console.log("message", formData.get("message"));
  // console.log("name", formData.get("usernName"));
  // console.log("company", formData.get("companyName"));
  // console.log("tell", formData.get("phone"));
  

  // simple server-side validation
  if (!validateString(usernName, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(companyName, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(phone, 14)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "Portfolio Contact Form <onboarding@resend.dev>",
      to: "irynabugaichuk7@gmail.com",
      subject: "Message from portfolio contact form",
      reply_to: senderEmail as string,
      react: React.createElement(EmailFile, {
        message: message,
        senderEmail: senderEmail,
        usernName: usernName,
        companyName: companyName,
        phone: phone
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};