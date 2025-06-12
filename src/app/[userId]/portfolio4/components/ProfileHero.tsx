import Image from "next/image";
import RoleBadge from "./RoleBadge";
import { LocateIcon } from "lucide-react";
import { Profile } from "@/data/types/users";

export default function ProfileHero({
  profile,
  summary,
}: {
  profile: Profile;
  summary: string;
}) {
  return (
    <section className="flex flex-col lg:flex-row gap-8 items-center">
      <div className="relative w-48 h-48 rounded-full border-4 border-primary overflow-hidden shadow-lg">
        <Image
          src={profile.image}
          alt={profile.name}
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="flex-1">
        <div className="flex flex-wrap items-center gap-3 mb-2">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            {profile.name}
          </h1>
          <RoleBadge>{profile.designation}</RoleBadge>
        </div>

        <div className="flex items-center gap-2 text-muted-foreground mb-4">
          <LocateIcon />
          <span>{profile.location}</span>
        </div>

        <p className="text-lg leading-relaxed max-w-3xl bg-muted/50 p-6 rounded-xl">
          {summary}
        </p>
      </div>
    </section>
  );
}
