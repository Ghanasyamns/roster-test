import { Button } from "@/components/ui/button";
import { Profile } from "@/data/types/users";
import { formatSubscribers } from "@/lib/utils";
import { Download, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import React from "react";
interface Props {
  profile: Profile;
  totalProjects: number;
  totalSubscribers: number;
}
function HeroImageSection({ profile, totalProjects, totalSubscribers }: Props) {
  return (
    <div className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900">
      <div className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left: Profile Info */}
          <div className="space-y-6 text-center lg:text-left order-2 lg:order-1">
            <div className="space-y-4">
              <div className="inline-block bg-emerald-500/10 text-emerald-400 px-4 py-2 rounded-full text-sm font-medium">
                Available for Opportunities
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Hi, I&apos;m{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                  {profile.name}
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300">
                {profile.designation}
              </p>
              <div className="flex items-center justify-center lg:justify-start gap-2 text-gray-400">
                <MapPin className="w-5 h-5" />
                <span>{profile.location}</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-emerald-500 hover:bg-emerald-600 text-white"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-gray-600 text-gray-300 hover:bg-gray-800"
              >
                <Download className="w-5 h-5 mr-2" />
                Download CV
              </Button>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-emerald-400">
                  {formatSubscribers(totalSubscribers)}
                </div>
                <div className="text-sm text-gray-400">Subscribers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-emerald-400">
                  {totalProjects}
                </div>
                <div className="text-sm text-gray-400">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-emerald-400">
                  12
                </div>
                <div className="text-sm text-gray-400">Years</div>
              </div>
            </div>
          </div>

          {/* Right: Profile Image */}
          <div className="flex justify-center order-1 lg:order-2">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border-4 border-emerald-500/20 shadow-2xl">
                <Image
                  src={profile.image}
                  alt={profile.name}
                  width={384}
                  height={384}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-emerald-500/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-cyan-500/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroImageSection;
