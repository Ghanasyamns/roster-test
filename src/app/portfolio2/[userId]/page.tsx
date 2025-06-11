import {
  calcTotalProjects,
  calcTotalSubscribers,
  getUserData,
} from "@/lib/utils";
import About from "./components/About";
import Contact from "./components/Contact";
import ExperienceSection from "./components/ExperienceSection";
import Footer from "./components/Footer";
import HeroImageSection from "./components/HeroImageSection";
import Navbar from "./components/Navbar";

type Params = Promise<{ userId: string }>;

async function page({ params }: { params: Params }) {
  const { userId } = await params;
  const userData = await getUserData(userId);
  const { profile, profile_summary, experience } = userData;

  const totalProjects = calcTotalProjects(experience);
  const totalSubscribers = calcTotalSubscribers(experience);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar profile={profile} />
      <HeroImageSection
        profile={profile}
        totalProjects={totalProjects}
        totalSubscribers={totalSubscribers}
      />
      <About profile_summary={profile_summary} />
      <ExperienceSection experiences={experience} />
      <Contact />
      <Footer name={profile.name} />
    </div>
  );
}

export default page;
