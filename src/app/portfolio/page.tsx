import Card from "@/components/Portfolio/Card";
import { projects } from "@/fakedata/data";
import { ReactNode } from "react";
import styles from "./page.module.css";
import CardForMobile from "@/components/Portfolio/CardForMobile";
export default function page() {
  return (
    <main className="mt-[50px] mb-[100vh]">
      {projects.map((project, index): ReactNode => {
        return <Card key={index} {...project} />;
      })}
    </main>
  );
}
