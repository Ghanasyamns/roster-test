import { getUserData } from "@/lib/utils";
import ThemeToggle from "./components/ThemeToggle";
import ProfileHero from "./components/ProfileHero";
import ExperienceTimeline from "./components/ExperienceTimeline";

type Params = Promise<{ userId: string }>;

export default async function PortfolioPage({ params }: { params: Params }) {
  const { userId } = await params;
  const data = await getUserData(userId);

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <div className="container  py-8 ">
        <ThemeToggle />

        <ProfileHero profile={data.profile} summary={data.profile_summary} />

        <div className="mt-16">
          <ExperienceTimeline experiences={data.experience} />
        </div>
      </div>
    </div>
  );
}
