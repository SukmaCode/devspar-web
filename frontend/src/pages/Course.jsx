import React from "react";
import SelectCourse from "./courses/SelectCourse";
import Topbar from "../components/TopBar";
import Layout from "../layouts/Layout";

export default function Course() {
  return (
    <Layout>
      <Topbar />
      <div className="mt-16">
        <SelectCourse />
      </div>
    </Layout>
  );
}
