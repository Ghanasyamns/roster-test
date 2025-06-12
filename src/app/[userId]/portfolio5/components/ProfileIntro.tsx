import Image from "next/image";
import { LocateIcon } from "lucide-react";
import { Profile } from "@/data/types/users";

export default function ProfileIntro({
  profile,
  summary,
}: {
  profile: Profile;
  summary: string;
}) {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
      <div className="lg:col-span-2 space-y-6">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-coral-500">
            {profile.name}
          </span>
          <br />
          <span className="text-stone-400">{profile.designation}</span>
        </h1>

        <div className="flex items-center gap-3 text-stone-500">
          <LocateIcon />
          <span>{profile.location}</span>
        </div>

        <p className="text-lg md:text-xl leading-relaxed max-w-2xl">
          {summary}
        </p>
      </div>

      <div className="relative h-64 w-64 lg:h-80 lg:w-80 justify-self-center lg:justify-self-end">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-coral-400 rounded-2xl -rotate-6"></div>
        <div className="absolute inset-0 bg-white rounded-2xl rotate-3 overflow-hidden border-4 border-white shadow-xl">
          <Image
            src={profile.image}
            alt={profile.name}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
