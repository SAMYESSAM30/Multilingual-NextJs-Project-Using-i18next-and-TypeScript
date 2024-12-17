import { FC } from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher: FC = () => {
  const { i18n } = useTranslation();

  const switchLanguage = (lng: "en" | "ar") => {
    i18n.changeLanguage(lng);
    console.log("first", lng);
  };

  return (
    <div>
      <button onClick={() => switchLanguage("en")}>English</button>
      <button onClick={() => switchLanguage("ar")}>Arabic</button>
    </div>
  );
};

export default LanguageSwitcher;
