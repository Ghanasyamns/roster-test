import Image from "next/image";
import { MapPin } from "lucide-react";
import { Profile } from "@/data/types/users";

export default function ProfileHeader({
  profile,
  summary,
}: {
  profile: Profile;
  summary: string;
}) {
  return (
    <div className="relative bg-gradient-to-r from-indigo-500 to-purple-600 pt-16 pb-24 px-6 sm:px-8">
      <div className="absolute top-4 right-6 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-white">
        Available for work
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="relative h-40 w-40 rounded-2xl border-4 border-white shadow-lg">
          <Image
            src={profile.image}
            alt={profile.name}
            fill
            className="rounded-xl object-cover"
          />
        </div>

        <div className="text-white flex-1">
          <h1 className="text-4xl font-bold">{profile.name}</h1>
          <div className="flex flex-wrap items-center gap-3 mt-2">
            <span className="bg-white/20 px-3 py-1 rounded-full">
              {profile.designation}
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              {profile.location}
            </span>
          </div>
          <p className="mt-4 text-lg max-w-3xl bg-white/10 backdrop-blur-sm p-4 rounded-xl">
            {summary}
          </p>
        </div>
      </div>
    </div>
  );
}
