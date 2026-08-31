"use client";

import React, { PropsWithChildren, FC } from "react";
import { Header } from "@/components/layouts/Header/Header";
import { Footer } from "@/components/layouts/Footer/Footer";
import { Sidebar } from "@/components/layouts/Sidebar/Sidebar";
import { Stack } from "@mui/material";
import { usePathname } from "next/navigation";

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  const path = usePathname();
  const decodedPath = decodeURIComponent(path);
  const isProductPath = /^\/shop\/[^/]+\/product\/[^/]+$/.test(decodedPath);

  if (isProductPath) {
    return (
      <html lang="en">
        <body>
          <Header />
          <Stack
            direction="row"
            alignItems="flex-start"
            justifyContent="flex-start"
            spacing={2}
            style={{ marginTop: "54px" }}
          >
            {children}
          </Stack>
          <Footer />
        </body>
      </html>
    );
  }

  return (
    <html lang="en">
      <body>
        <Header />
        <Stack
          direction="row"
          alignItems="flex-start"
          justifyContent="flex-start"
          spacing={2}
          style={{ marginTop: "54px" }}
        >
          <Sidebar />
          {children}
        </Stack>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;

