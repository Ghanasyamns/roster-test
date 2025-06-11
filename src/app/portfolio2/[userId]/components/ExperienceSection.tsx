import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Experience } from "@/data/types/users";
import { Award, Calendar, Play, Star, TrendingUp, Users } from "lucide-react";
import Image from "next/image";

function ExperienceSection({ experiences }: { experiences: Experience[] }) {
  return (
    <section id="experience" className="py-16 md:py-24 bg-gray-900">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={exp.id}
              className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300"
            >
              <CardContent className="p-6 md:p-8">
                {/* Experience Header */}
                <div className="flex flex-col lg:flex-row justify-between items-start gap-4 mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-lg flex items-center justify-center">
                        <Award className="w-6 h-6 text-gray-900" />
                      </div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-white">
                          {exp.job_title}
                        </h3>
                        <p className="text-emerald-400 font-medium">
                          {exp.employer_name}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 mb-4">
                      <Calendar className="w-4 h-4" />
                      <span>
                        {exp.job_duration_start} - {exp.job_duration_end}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30">
                      <Users className="w-3 h-3 mr-1" />
                      {exp.subscriber_count}
                    </Badge>
                    <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30">
                      {exp.job_type}
                    </Badge>
                    <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      {exp.no_of_projects} Projects
                    </Badge>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {exp.job_summary}
                </p>

                {/* Projects Grid */}
                {exp.projects && exp.projects.length > 0 && (
                  <div>
                    <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                      <Star className="w-5 h-5 text-emerald-400" />
                      Featured Projects
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {exp.projects.map((project, projectIndex) => (
                        <Card
                          key={projectIndex}
                          className="group bg-gray-900/50 border-gray-600 hover:border-emerald-500/50 transition-all duration-300 overflow-hidden"
                        >
                          <div className="relative">
                            <Image
                              src={project.thumbnail}
                              alt={project.title}
                              width={400}
                              height={225}
                              className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <div className="absolute bottom-2 left-2 right-2">
                                <Button
                                  size="sm"
                                  className="w-full bg-emerald-500 hover:bg-emerald-600"
                                >
                                  <Play className="w-4 h-4 mr-2" />
                                  Watch
                                </Button>
                              </div>
                            </div>
                          </div>
                          <CardContent className="p-4">
                            <h5 className="font-bold text-white mb-2 line-clamp-2 text-sm">
                              {project.title}
                            </h5>
                            <p className="text-xs text-gray-400 line-clamp-1">
                              {project.job_role}
                            </p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
