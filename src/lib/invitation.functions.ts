import { createServerFn } from "@tanstack/react-start";
import { invitationSchema } from "./invitation-schema";

export const sendInvitation = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => invitationSchema.parse(input))
  .handler(async ({ data }) => {
    const { deliverForm, sendResendEmail, renderFormEmail, IVAN } = await import("./forms.server");
    await deliverForm("send-landing-invitation", data);
    const sender = process.env["FORM_SENDER_ADDRESS"];
    let copySent = false;
    if (sender) {
      try {
        await sendResendEmail({
          from: `Ravolution AB <${sender}>`, to: [data.email], reply_to: IVAN,
          subject: "Ravolution AB — Your message",
          html: renderFormEmail("Your message to Ravolution AB", data),
        });
        copySent = true;
      } catch { /* Owner delivery succeeded; do not encourage a duplicate submission. */ }
    }
    return { success: true, copySent } as const;
  });