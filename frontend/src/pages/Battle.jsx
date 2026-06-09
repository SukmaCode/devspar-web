import React from "react";
import Layout from "../layouts/Layout";
import SelectMode from "../components/SelectMode";
import StartBattleButton from "../components/StartBattleButton";

export default function Practice() {
  return (
    <Layout className="w-full h-screen bg-linear-to-br from-[#1e1e1e] to-[#000f2d] flex flex-row">
      <div className="w-full flex flex-col justify-between overflow-y-auto">
        <SelectMode />
        <div className="">
          <StartBattleButton />
        </div>
      </div>
    </Layout>
  );
}
