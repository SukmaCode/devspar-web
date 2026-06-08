import React, { createContext, useState, useEffect } from "react";

// Mimicking AsyncStorage for React Web since requested in prompt
const AsyncStorage = {
  getItem: async (key) => localStorage.getItem(key),
  setItem: async (key, value) => localStorage.setItem(key, value),
};

export const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
  const [settings, setSettings] = useState({
    theme: "dark", // 'dark' | 'light'
    sound: true,
    music: true,
    language: "en",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadSettings = async () => {
      try {
        const storedSettings = await AsyncStorage.getItem("@codecrack_settings");
        if (storedSettings) {
          setSettings(JSON.parse(storedSettings));
        }
      } catch (error) {
        console.error("Failed to load settings", error);
      } finally {
        setLoading(false);
      }
    };
    loadSettings();
  }, []);

  const updateSetting = async (key, value) => {
    try {
      const newSettings = { ...settings, [key]: value };
      setSettings(newSettings);
      await AsyncStorage.setItem("@codecrack_settings", JSON.stringify(newSettings));
    } catch (error) {
      console.error("Failed to save settings", error);
    }
  };

  return (
    <SettingsContext.Provider value={{ settings, updateSetting, loading }}>
      {children}
    </SettingsContext.Provider>
  );
};
