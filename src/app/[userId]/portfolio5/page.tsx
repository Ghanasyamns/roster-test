import { getUserData } from "@/lib/utils";
import CornerAccent from "./components/CornerAccent";
import FloatingNav from "./components/FloatingNav";
import ProfileIntro from "./components/ProfileIntro";
import ExperienceMosaic from "./components/ExperienceMosaic";

type Params = Promise<{ userId: string }>;

export default async function PortfolioPage({ params }: { params: Params }) {
  const { userId } = await params;
  const data = await getUserData(userId);

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 overflow-hidden">
      <CornerAccent />
      <FloatingNav />

      <div className="container py-12  relative z-10">
        <ProfileIntro profile={data.profile} summary={data.profile_summary} />

        <div className="mt-24">
          <ExperienceMosaic experiences={data.experience} />
        </div>
      </div>
    </div>
  );
}
