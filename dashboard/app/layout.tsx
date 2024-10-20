import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";
import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import Navbar from "@/components/common/Navbar";
import Sidebar from "@/components/common/Sidebar";
import BreadCrumb from "@/components/reuseableComponent/BreadCrumb";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen w-full antialiased",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div>
            <main className="flex w-[100%] justify-between">
              <div className="hidden sm:block">
                <Sidebar />
              </div>

              <div className="w-[100%] overflow-x-hidden ">
                <div>
                  <Navbar />
                </div>
                <div> <BreadCrumb /> </div>
                <div>{children}</div>
              </div>
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
