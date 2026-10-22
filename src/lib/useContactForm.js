"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { trackMetaEvent } from "@/lib/meta";
import { rememberContactSubmission } from "@/lib/contactSession";

export function useContactForm(source) {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState("");
  const [sending, setSending] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const pending = useRef(false);

  async function handleSend(event) {
    event.preventDefault();
    if (pending.current) return;
    pending.current = true;
    setSending(true);
    setFeedback(null);

    try {
      const response = await fetch("/api/contact.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, website }),
        signal: AbortSignal.timeout(20000),
      });
      const result = await response.json();
      if (!response.ok || !result.success) {
        throw new Error(result.error || "We couldn't send your message. Please try again.");
      }

      setFeedback({ success: true, text: "Thank you! Your message has been submitted." });
      const [firstName, ...rest] = name.trim().split(/\s+/);
      try {
        trackMetaEvent("Lead", {
          customData: { content_name: source, content_category: "Contact" },
          userData: { email: email.trim(), firstName, lastName: rest.join(" ") },
        });
      } catch {
        // Analytics must not change the result of a successful submission.
      }
      setName("");
      setEmail("");
      setMessage("");
      rememberContactSubmission();
      router.push("/thank-you/");
    } catch (error) {
      setFeedback({
        success: false,
        text: error.name === "TimeoutError"
          ? "Sending timed out. Please contact info@hardwarehouses.com if you need help."
          : error instanceof SyntaxError || error instanceof TypeError
            ? "We couldn't send your message. Please try again or email info@hardwarehouses.com."
            : error.message,
      });
    } finally {
      pending.current = false;
      setSending(false);
    }
  }

  return { name, setName, email, setEmail, message, setMessage, website, setWebsite, sending, feedback, handleSend };
}
