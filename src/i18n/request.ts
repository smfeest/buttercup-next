import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { getRequestConfig } from "next-intl/server";
import { headers } from "next/headers";

export default getRequestConfig(async () => {
  const requestHeaders = await headers();
  const languages = new Negotiator({
    headers: {
      "accept-language": requestHeaders.get("accept-language") ?? undefined,
    },
  }).languages();
  const locale = match(languages, ["en", "fr"], "en");

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
