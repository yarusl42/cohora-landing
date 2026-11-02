export type SendLeadResult = {
  ok: boolean;
  errorCode?: "empty_phone" | "invalid_phone" | "request_failed" | "network";
};

// Shared helper to send lead phone to backend (same endpoint as chat widget)
export const sendLead = async (
  phoneRaw: string,
  offer: string,
): Promise<SendLeadResult> => {
  const phone = phoneRaw.trim();
  if (!phone) {
    return { ok: false, errorCode: "empty_phone" };
  }

  const phoneClean = phone.replace(/[^0-9+]/g, "");
  const phoneDigits = phoneClean.replace(/\D/g, "");
  const phoneValid = phoneDigits.length >= 7;

  if (!phoneValid) {
    return {
      ok: false,
      errorCode: "invalid_phone",
    };
  }

  try {
    const res = await fetch(
      "https://notify.futuretechschool.org/api/notify/skynex",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone, offer, source: "skynex 2" }),
      },
    );

    if (!res.ok) {
      return {
        ok: false,
        errorCode: "request_failed",
      };
    }

    return { ok: true };
  } catch (e) {
    return {
      ok: false,
      errorCode: "network",
    };
  }
};
