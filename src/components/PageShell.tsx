import type { ReactNode } from "react";
import Footer from "./Footer";

type PageShellProps = {
  children: ReactNode;
  paddedTop?: boolean;
};

export default function PageShell({ children, paddedTop = true }: PageShellProps) {
  return (
    <>
      <main className={paddedTop ? "pt-20" : undefined}>{children}</main>
      <Footer />
    </>
  );
}
