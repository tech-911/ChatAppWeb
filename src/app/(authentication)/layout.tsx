import type { Metadata } from "next";
import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

export const metadata: Metadata = {
  title: "Authentication",
  description: "Create account with Data Table today",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-screen h-screen bg-[#F7F9FC]">
      <ScrollArea className="w-full h-full">{children}</ScrollArea>
    </div>
  );
}
