import React, { useContext, useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/TopBar";
import { SettingsContext } from "../contexts/SettingsContext";
import { StatsContext } from "../contexts/StatsContext";
import ProfileHeader from "../components/profile/ProfileHeader";
import SettingsCard from "../components/profile/SettingsCard";
import StatsCard from "../components/profile/StatsCard";
import HistoryCard from "../components/profile/HistoryCard";
import AvatarPickerModal from "../components/profile/AvatarPickerModal";
import Layout from "../layouts/Layout";

export default function Profile() {
  const {
    settings,
    updateSetting,
    loading: settingsLoading,
  } = useContext(SettingsContext);
  const {
    stats,
    updateStats,
    resetStats,
    loading: statsLoading,
  } = useContext(StatsContext);

  const [isAvatarPickerOpen, setIsAvatarPickerOpen] = useState(false);

  if (settingsLoading || statsLoading) {
    return (
      <div className="relative w-full h-screen flex items-center justify-center bg-[#1e1e1e] text-white">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
      </div>
    );
  }

  return (
    <Layout>
      <div className="max-w-6xl mx-auto w-full flex flex-col gap-6">
        {/* Header Section */}
        <ProfileHeader
          stats={stats}
          updateStats={updateStats}
          onOpenAvatarPicker={() => setIsAvatarPickerOpen(true)}
        />

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Stats & History */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <StatsCard stats={stats} onReset={resetStats} />
            <HistoryCard stats={stats} />
          </div>

          {/* Right Column - Settings */}
          <div className="lg:col-span-1">
            <SettingsCard settings={settings} updateSetting={updateSetting} />
          </div>
        </div>
      </div>

      {/* Avatar Picker Modal */}
      <AvatarPickerModal
        isOpen={isAvatarPickerOpen}
        onClose={() => setIsAvatarPickerOpen(false)}
        currentAvatarId={stats.avatarId}
        onSelectAvatar={(id) => {
          updateStats({ avatarId: id });
          setIsAvatarPickerOpen(false);
        }}
      />
    </Layout>
  );
}
