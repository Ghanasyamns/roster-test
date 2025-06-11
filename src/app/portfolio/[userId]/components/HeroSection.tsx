import { Profile } from "@/data/users";
import { formatSubscribers } from "@/lib/utils";
import { MapPin } from "lucide-react";
import Image from "next/image";
type Props = {
  profile: Profile;
  totalSubscribers: number;
  totalProjects: number;
};
function HeroSection({ profile, totalSubscribers, totalProjects }: Props) {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative container py-16">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="relative">
            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl">
              <Image
                src={profile.image}
                alt={profile.name}
                width={160}
                height={160}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-green-500 w-8 h-8 rounded-full border-4 border-white"></div>
          </div>
          <div className="text-center lg:text-left flex-1">
            <h1 className="text-5xl font-bold mb-2">{profile.name}</h1>
            <p className="text-xl text-blue-100 mb-4">{profile.designation}</p>
            <div className="flex items-center justify-center lg:justify-start gap-2 text-blue-100 mb-6">
              <MapPin className="w-5 h-5" />
              <span>{profile.location}</span>
            </div>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <div className="text-2xl font-bold">
                  {formatSubscribers(totalSubscribers)}
                </div>
                <div className="text-sm text-blue-100">Subscribers Helped</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <div className="text-2xl font-bold">{totalProjects}</div>
                <div className="text-sm text-blue-100">Projects Completed</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <div className="text-2xl font-bold">12</div>
                <div className="text-sm text-blue-100">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
