import { Experience } from "@/data/types/users";
import ProjectGrid from "./ProjectGrid";
import RoleBadge from "./RoleBadge";
import { convertDate } from "@/lib/utils";

export default function ExperienceTimeline({
  experiences,
}: {
  experiences: Experience[];
}) {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-12 relative">
        <span className="relative z-10 bg-background pr-4">
          Professional Journey
        </span>
        <span className="absolute left-0 top-1/2 w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent -z-0"></span>
      </h2>

      <div className="space-y-16 relative before:absolute before:left-7 before:top-0 before:h-full before:w-0.5 before:bg-muted md:before:left-1/2 md:before:-translate-x-1/2">
        {experiences.map((exp, index) => (
          <div
            key={exp.id}
            className={`relative flex flex-col ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } gap-8`}
          >
            <div className="md:w-1/2">
              <div className="bg-card p-6 rounded-xl border border-border shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold">{exp.employer_name}</h3>
                  <span className="text-sm bg-muted px-3 py-1 rounded-full">
                    {exp.subscriber_count}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  <RoleBadge>{exp.job_title}</RoleBadge>
                  <span className="text-sm bg-secondary text-secondary-foreground px-3 py-1 rounded-full">
                    {exp.job_type}
                  </span>
                </div>

                <p className="text-muted-foreground mb-4">{exp.job_summary}</p>

                <div className="text-sm text-muted-foreground">
                  {convertDate(exp.job_duration_start)} —{" "}
                  {convertDate(exp.job_duration_end)}
                </div>
              </div>
            </div>

            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-8 w-8 h-8 rounded-full bg-primary border-4 border-background z-10"></div>

            <div className="md:w-1/2">
              <ProjectGrid projects={exp.projects ?? []} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
