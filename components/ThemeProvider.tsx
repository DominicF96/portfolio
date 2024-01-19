"use client"; // OK, but not ideal
// https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns#supported-pattern-passing-server-components-to-client-components-as-props:~:text=To%20fix%20this%2C%20create%20your%20context%20and%20render%20its%20provider%20inside%20of%20a%20Client%20Component%3A
// https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns#supported-pattern-passing-server-components-to-client-components-as-props:~:text=%7D-,%3CClientComponent%3E,will%20eventually%20be%20placed.,-In%20a%20parent
import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
