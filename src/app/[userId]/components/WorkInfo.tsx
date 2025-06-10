import { User } from "@/data/users";
import AboutMe from "./AboutMe";
import Experience from "./Experience";

function WorkInfo({ data }: { data: User }) {
  return (
    <section className="flex flex-col gap-5">
      <AboutMe summary={data?.profile_summary} />
      <Experience experience={data.experience} />
    </section>
  );
}

export default WorkInfo;
