import { Experience } from "@/data/types/users";
import ExperienceCard from "./ExperienceCard";

export default function ExperienceSection({
  experiences,
}: {
  experiences: Experience[];
}) {
  return (
    <section className="py-10 px-6 sm:px-8">
      <h2 className="text-3xl font-bold mb-8 text-gray-800 border-b-2 border-indigo-200 pb-2">
        Work Experience
      </h2>

      <div className="space-y-12">
        {experiences.map((exp) => (
          <ExperienceCard key={exp.id} experience={exp} />
        ))}
      </div>
    </section>
  );
}
