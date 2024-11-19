// app/providers.tsx

import { NextUIProvider } from "@nextui-org/react";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

export async function Providers({ children }: { children: React.ReactNode }) {
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <NextUIProvider>{children}</NextUIProvider>
    </NextIntlClientProvider>
  );
}
