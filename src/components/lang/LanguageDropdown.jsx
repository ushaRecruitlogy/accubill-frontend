import { useState } from "react";
import { Check } from "lucide-react";
import { LiaLanguageSolid } from "react-icons/lia";

const languages = [
  { code: "EN", name: "English", country: "us" },
  { code: "FR", name: "Français", country: "fr" },
  { code: "ES", name: "Español", country: "es" },
  { code: "DE", name: "Deutsch", country: "de" },
  { code: "IT", name: "Italiano", country: "it" },
  { code: "PT", name: "Português", country: "pt" },
  { code: "RU", name: "Русский", country: "ru" },
  { code: "ZH", name: "中文", country: "cn" },
  { code: "JA", name: "日本語", country: "jp" },
  { code: "HI", name: "हिन्दी", country: "in" },
];

export default function LanguageDropdown() {
  const [language, setLanguage] = useState("EN");
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (code) => {
    setLanguage(code);
    setIsOpen(false);
  };

  const getCountryCode = (code) =>
    languages.find((lang) => lang.code === code)?.country;

  return (
    <div
      className="relative inline-block transition"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Button */}
      <button className="border border-gray-300 px-3 py-2 rounded-full text-sm bg-white text-gray-700 flex items-center gap-2">
        <img
          src={`https://flagcdn.com/w40/${getCountryCode(language)}.png`}
          alt={language}
          className="w-5 h-5 rounded-full object-cover"
        />
        <LiaLanguageSolid className="text-lg" />
      </button>

      {/* Dropdown */}
      <div
        className={`absolute top-full left-0 mt-1 w-52 bg-white border border-gray-300 rounded-md shadow-lg z-10 transition-all duration-200 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <ul>
          {languages.map((lang) => (
            <li
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className="flex items-center justify-between gap-2 px-3 py-2 hover:bg-gray-100 cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <img
                  src={`https://flagcdn.com/w40/${lang.country}.png`}
                  alt={lang.name}
                  className="w-5 h-5 rounded-full object-cover"
                />
                <span>{lang.name}</span>
              </div>
              {language === lang.code && (
                <Check className="w-4 h-4 text-[var(--color-blue)]" />
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
