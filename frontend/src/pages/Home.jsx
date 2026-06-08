import React from "react";
import Sidebar from "../components/Sidebar";
import Announcement from "../components/Announcement";
import ContinueLevel from "../components/ContinueLevel";
import QuestCard from "../components/QuestCard";
import Layout from "../layouts/Layout";
import Topbar from "../components/TopBar";

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col gap-4">
        <Announcement />
        <div className="flex flex-col md:flex-row gap-4">
          <ContinueLevel />
          <QuestCard />
        </div>
      </div>
    </Layout>
  );
}
