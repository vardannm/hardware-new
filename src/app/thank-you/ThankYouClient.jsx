"use client";

import { useEffect, useSyncExternalStore } from "react";
import { useRouter } from "next/navigation";
import ContactSuccess from "@/components/ui/ContactSuccess";
import { hasContactSubmission } from "@/lib/contactSession";

// The submission marker is written before navigating here and stays valid
// for this tab's session, so no ongoing subscription is needed.
const subscribe = () => () => {};
const serverSnapshot = () => false;

export default function ThankYouClient() {
  const router = useRouter();
  const allowed = useSyncExternalStore(subscribe, hasContactSubmission, serverSnapshot);

  useEffect(() => {
    if (!hasContactSubmission()) {
      router.replace("/contact-us/");
    }
  }, [router]);

  return allowed ? <ContactSuccess /> : null;
}
