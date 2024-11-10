import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Happy Birthday",
  description: "Happy Birthday to you!",
};

interface Props {
  children: ReactNode;
}

export default function LandingLayout({ children }: Props) {
  return <>{children}</>;
}
