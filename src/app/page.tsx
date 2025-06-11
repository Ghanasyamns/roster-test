"use client";
import { users } from "@/data/types/users";
import DesignSelector from "./components/DesignSelector";
import ProfileCard from "./components/ProfileCard";
import { useState } from "react";
interface DesignOption {
  value: string;
  label: string;
  description: string;
}

const designOptions: DesignOption[] = [
  {
    value: "portfolio1",
    label: "Modern Minimalist",
    description: "Clean and professional layout",
  },
  {
    value: "portfolio2",
    label: "Creative Showcase",
    description: "Bold and artistic presentation",
  },
  // {
  //   value: "design3",
  //   label: "Corporate Elite",
  //   description: "Sophisticated business style",
  // },
  // {
  //   value: "design4",
  //   label: "Tech Innovator",
  //   description: "Futuristic and dynamic design",
  // },
  // {
  //   value: "design5",
  //   label: "Artistic Flair",
  //   description: "Vibrant and expressive layout",
  // },
];
export default function Home() {
  const [selectedDesign, setSelectedDesign] = useState<string>(
    designOptions[0].value || "portfolio1"
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            Creative Professionals
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover talented creators and explore their portfolios with our
            customizable design templates
          </p>
        </div>
        <DesignSelector
          designOptions={designOptions}
          selectedDesign={selectedDesign}
          onChange={(value: string) => setSelectedDesign(value)}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {users.map((profile) => (
            <ProfileCard
              key={profile.id}
              profile={profile}
              selectedDesign={selectedDesign}
            />
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-16">
          <p className="text-gray-500 text-sm">
            Showcase your creative work with our customizable portfolio designs
          </p>
        </div>
      </div>
    </div>
  );
}
