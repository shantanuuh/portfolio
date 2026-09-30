"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider
      {...props}
      scriptProps={{
        // Tells Next.js compiler to treat the injected inline script tag as safe
        "data-cfasync": "false",
      }}
    >
      {children}
    </NextThemesProvider>
  );
}