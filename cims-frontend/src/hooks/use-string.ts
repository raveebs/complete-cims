import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import en from "../assets/strings/strings.en.json";
import fr from "../assets/strings/strings.fr.json";

const resources = {
  en: {
    translation: en,
  },
  fr: {
    translation: fr,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});

const useString = () => {
  const { t } = useTranslation();

  const $ = (key: string) => {
    return t(key);
  };

  return { $ };
};

export default useString;
