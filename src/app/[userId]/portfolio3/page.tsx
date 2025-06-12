import { getUserData } from "@/lib/utils";
import ProfileHeader from "./components/ProfileHeader";
import ExperienceSection from "./components/ExperienceSection";

type Params = Promise<{ userId: string }>;

async function page({ params }: { params: Params }) {
  const { userId } = await params;
  const data = await getUserData(userId);
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12">
      <div className="container ">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <ProfileHeader
            profile={data.profile}
            summary={data.profile_summary}
          />
          <ExperienceSection experiences={data.experience} />
        </div>
      </div>
    </main>
  );
}

export default page;
