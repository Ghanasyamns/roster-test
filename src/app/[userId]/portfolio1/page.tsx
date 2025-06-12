import {
  calcTotalProjects,
  calcTotalSubscribers,
  getUserData,
} from "@/lib/utils";
import AboutMe from "./components/AboutMe";
import ContactSection from "./components/ContactSection";
import ExperienceSection from "./components/ExperienceSection";
import HeroSection from "./components/HeroSection";

type Params = Promise<{ userId: string }>;

async function page({ params }: { params: Params }) {
  const { userId } = await params;
  const userData = await getUserData(userId);
  const { profile, profile_summary, experience } = userData;
  const totalProjects = calcTotalProjects(experience);
  const totalSubscribers = calcTotalSubscribers(experience);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-100">
      {/* Hero Section */}
      <HeroSection
        profile={profile}
        totalSubscribers={totalSubscribers}
        totalProjects={totalProjects}
      />
      {/* About Section */}
      <div className="container py-16">
        <AboutMe profile_summary={profile_summary} />
        {/* Experience Section */}
        <ExperienceSection experience={experience} />
        {/* Contact Section */}
        <ContactSection />
      </div>
    </div>
  );
}

export default page;
