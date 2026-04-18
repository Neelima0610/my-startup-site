import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import UserNav from "../../../components/UserNav";

export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  if (!session) redirect("/login");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        width: "100%",
        background: "#f8fafc",
      }}
    >      

      {/* MAIN CONTENT */}
      <div style={{ flex: 1 }}>{children}</div>

      {/* FOOTER */}
      <footer
        style={{
          borderTop: "1px solid #e5e7eb",
          padding: "16px",
          textAlign: "center",
          fontSize: "13px",
          color: "#6b7280",
          background: "#ffffff",
        }}
      >
        © {new Date().getFullYear()} IdeaVault Labs. All rights reserved.
        <br />
        <a href="/privacy" style={{ margin: "0 8px" }}>
          Privacy Policy
        </a>
        |
        <a href="/terms" style={{ margin: "0 8px" }}>
          Terms & Conditions
        </a>
        |
        <a href="/pricing" style={{ margin: "0 8px" }}>
          Pricing
        </a>
      </footer>
    </div>
  );
}