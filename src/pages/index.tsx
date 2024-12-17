import { NextPage } from "next";
import { useTranslation } from "react-i18next";

const HomePage: NextPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("welcome")}</h1>
    </div>
  );
};

export default HomePage;
