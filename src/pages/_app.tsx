import { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import LanguageSwitcher from "../../components/LanguageSwitcher";
import "../../i18n"; // Import i18n configuration

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <LanguageSwitcher />
      <Component {...pageProps} />
    </>
  );
};

export default appWithTranslation(MyApp);
