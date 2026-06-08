import React, { createContext, useState, useEffect } from "react";

const AsyncStorage = {
  getItem: async (key) => localStorage.getItem(key),
  setItem: async (key, value) => localStorage.setItem(key, value),
};

export const StatsContext = createContext();

const initialStats = {
  username: "Guest_001",
  avatarId: 1, // Let's assume 1-6 are available avatars
  level: 1,
  xp: 0,
  lastLogin: new Date().toISOString(),
  totalPlayTimeMinutes: 0,
  totalWins: 0,
  totalFails: 0,
  recentMatches: [],
  lastPlayedMode: "-",
  lastSelectedCategory: "-",
};

export const StatsProvider = ({ children }) => {
  const [stats, setStats] = useState(initialStats);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadStats = async () => {
      try {
        const storedStats = await AsyncStorage.getItem("@codecrack_stats");
        if (storedStats) {
          const parsed = JSON.parse(storedStats);
          // Update last login on load
          const newStats = { ...initialStats, ...parsed, lastLogin: new Date().toISOString() };
          setStats(newStats);
          await AsyncStorage.setItem("@codecrack_stats", JSON.stringify(newStats));
        } else {
          await AsyncStorage.setItem("@codecrack_stats", JSON.stringify(initialStats));
        }
      } catch (error) {
        console.error("Failed to load stats", error);
      } finally {
        setLoading(false);
      }
    };
    loadStats();
  }, []);

  const updateStats = async (updates) => {
    try {
      const newStats = typeof updates === "function" ? updates(stats) : { ...stats, ...updates };
      setStats(newStats);
      await AsyncStorage.setItem("@codecrack_stats", JSON.stringify(newStats));
    } catch (error) {
      console.error("Failed to save stats", error);
    }
  };

  const resetStats = async () => {
    try {
      setStats(initialStats);
      await AsyncStorage.setItem("@codecrack_stats", JSON.stringify(initialStats));
    } catch (error) {
      console.error("Failed to reset stats", error);
    }
  };

  return (
    <StatsContext.Provider value={{ stats, updateStats, resetStats, loading }}>
      {children}
    </StatsContext.Provider>
  );
};
