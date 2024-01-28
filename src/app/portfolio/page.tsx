import Card from "@/components/Portfolio/Card";
import { projects } from "@/fakedata/data";
import { ReactNode } from "react";

export default function page() {
  return (
    <main className="mt-[50px] mb-[100vh] my-auto">
      {projects.map((project, index): ReactNode => {
        return <Card key={index} {...project} />;
      })}
    </main>
  );
}
