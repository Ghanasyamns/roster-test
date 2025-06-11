import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Experience } from "@/data/users";
import { Briefcase, Calendar, ExternalLink, Play, Users } from "lucide-react";
import Image from "next/image";
import ProjectCard from "./ProjectCard";

function ExperienceSection({ experience }: { experience: Experience[] }) {
  return (
    <div className="mb-12">
      <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
        Experience
      </h2>
      <div className="space-y-8">
        {experience.map((exp, index) => (
          <Card
            key={exp.id}
            className="shadow-xl border-0 bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300"
          >
            <CardHeader className="border-b border-gray-100">
              <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                <div>
                  <CardTitle className="text-2xl font-bold text-gray-800">
                    {exp.job_title}
                  </CardTitle>
                  <CardDescription className="text-lg text-gray-600">
                    {exp.employer_name}
                  </CardDescription>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge
                    variant="secondary"
                    className="bg-blue-100 text-blue-800"
                  >
                    <Users className="w-4 h-4 mr-1" />
                    {exp.subscriber_count}
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-green-300 text-green-700"
                  >
                    {exp.job_type}
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-purple-300 text-purple-700"
                  >
                    <Briefcase className="w-4 h-4 mr-1" />
                    {exp.no_of_projects} Projects
                  </Badge>
                </div>
              </div>
              <div className="flex items-center gap-2 text-gray-500 mt-2">
                <Calendar className="w-4 h-4" />
                <span>
                  {exp.job_duration_start} - {exp.job_duration_end}
                </span>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-gray-700 mb-6 leading-relaxed">
                {exp.job_summary}
              </p>

              {exp.projects && exp.projects.length > 0 && (
                <div>
                  <h4 className="text-xl font-bold text-gray-800 mb-4">
                    Featured Projects
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {exp.projects.map((project, projectIndex) => (
                      <ProjectCard key={projectIndex} project={project} />
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default ExperienceSection;
