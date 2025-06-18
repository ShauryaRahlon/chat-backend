import { resend } from "@/lib/resend";
import VerificationEmail from "../../emails/VerificationEmail";
import { ApiResponse } from "@/type/ApiResponse";

export async function sendVerificationEmail(
  email: string,
  username: string,
  verifyCode: string
): Promise<ApiResponse> {
  try {
    await resend.emails.send({
      //sending here
      from: "onboarding@resend.dev",
      to: email,
      subject: "verification code from my next app",
      react: VerificationEmail({ username, otp: verifyCode }),
    });
    return {
      success: true,
      message: "Verification email sent successfully",
    };
  } catch (err) {
    console.error("Error in sending email", err);
    return {
      success: false,
      message: "Failed to send email",
    };
  }
}
