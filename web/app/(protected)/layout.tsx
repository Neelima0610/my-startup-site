import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../lib/auth";
import  UserNav  from "../../components/UserNav";
import UpgradeButton from "@/components/UpgradeButton";

export default async function ProtectedLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions);

  if (!session) redirect("/login");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh", // important for scroll
        width: "100%",
      }}
    >
        <header
          style={{
            padding: "1rem",
            borderBottom: "1px solid #eaeaea",
            marginBottom: "1rem",
          }}
        >
          <UserNav />
          <UpgradeButton />
        </header>
      {children}
    </div>
  );
}
