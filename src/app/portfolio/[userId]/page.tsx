import { ApiResponse } from "@/data/api";
import { User } from "@/data/users";
import { notFound } from "next/navigation";
import AboutMe from "./components/AboutMe";
import ContactSection from "./components/ContactSection";
import ExperienceSection from "./components/ExperienceSection";
import HeroSection from "./components/HeroSection";

type Params = Promise<{ userId: string }>;

const getUserData = async (userId: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/users/${userId}`,
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      }
    );
    const jsonResponse: Promise<ApiResponse<User>> = await response.json();
    const jsonData = await jsonResponse;
    if (!jsonData.success) return notFound();
    return jsonData.data!;
  } catch (error) {
    return notFound();
  }
};

async function page({ params }: { params: Params }) {
  const { userId } = await params;
  const userData = await getUserData(userId);
  const { profile, profile_summary, experience } = userData;
  const totalProjects = experience.reduce(
    (sum, exp) => sum + (exp.no_of_projects ?? 0),
    0
  );
  const totalSubscribers = experience.reduce((sum, exp) => {
    const count = exp?.subscriber_count?.replace(/[^\d.]/g, "") ?? "0";
    const multiplier = exp?.subscriber_count?.includes("M")
      ? 1000000
      : exp?.subscriber_count?.includes("K")
      ? 1000
      : 1;
    return sum + parseFloat(count) * multiplier;
  }, 0);

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
