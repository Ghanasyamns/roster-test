import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Project } from "@/data/types/users";
import { ExternalLink, Play } from "lucide-react";
import Image from "next/image";
import React from "react";

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border border-gray-200 pt-0">
      <div className="relative overflow-hidden rounded-t-lg">
        <Image
          src={project.thumbnail}
          alt={project.title}
          width={400}
          height={225}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
          <Play className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>
      <CardContent className="p-4">
        <h5 className="font-bold text-gray-800 mb-2 line-clamp-2 min-h-[48px]">
          {project.title}
        </h5>
        <p className="text-sm text-gray-600 mb-3">{project.job_role}</p>
        <Button
          variant="outline"
          size="sm"
          className="w-full group-hover:bg-blue-50 transition-colors duration-300"
        >
          <ExternalLink className="w-4 h-4 mr-2" />
          View Project
        </Button>
      </CardContent>
    </Card>
  );
}

export default ProjectCard;
