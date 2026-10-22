const SUBMISSION_KEY = "hardware-contact-submitted";
let submittedInThisPage = false;

export function rememberContactSubmission() {
  submittedInThisPage = true;
  try {
    window.sessionStorage.setItem(SUBMISSION_KEY, "1");
  } catch {
    // Keep the successful redirect working when browser storage is disabled.
  }
}

export function hasContactSubmission() {
  if (typeof window === "undefined") return false;
  if (submittedInThisPage) return true;
  try {
    return window.sessionStorage.getItem(SUBMISSION_KEY) === "1";
  } catch {
    return false;
  }
}
