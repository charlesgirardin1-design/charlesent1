export type ConsentChoice = "accepted" | "rejected";

const STORAGE_KEY = "kodarium-cookie-consent";
export const OPEN_SETTINGS_EVENT = "kodarium:open-cookie-settings";
export const CONSENT_CHANGE_EVENT = "kodarium:cookie-consent-change";

export function getStoredConsent(): ConsentChoice | null {
  if (typeof window === "undefined") return null;
  const value = window.localStorage.getItem(STORAGE_KEY);
  return value === "accepted" || value === "rejected" ? value : null;
}

export function setStoredConsent(choice: ConsentChoice) {
  window.localStorage.setItem(STORAGE_KEY, choice);
  window.dispatchEvent(new CustomEvent(CONSENT_CHANGE_EVENT, { detail: choice }));
}

export function clearStoredConsent() {
  window.localStorage.removeItem(STORAGE_KEY);
}
