import { notFound } from "next/navigation";
import BasicInfo from "./components/BasicInfo";
import WorkInfo from "./components/WorkInfo";
import { User } from "@/data/types/users";
import { ApiResponse } from "@/data/api";
import Navbar from "@/components/Navbar";

export const revalidate = 300;
export const dynamicParams = true;

export async function generateStaticParams() {
  return [];
}

type Params = Promise<{ userId: string }>;

const getUserData = async (userId: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/users/${userId}`,
      {
        next: { revalidate: 60 },
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
  } catch (_) {
    return notFound();
  }
};

async function page({ params }: { params: Params }) {
  const { userId } = await params;
  const userData = await getUserData(userId);
  console.log(userData);

  return (
    <>
      <Navbar />
      <div className="container grid grid-cols-1 lg:grid-cols-[17.5rem_1fr] items-start gap-5 lg:gap-20 mt-5 lg:mt-10">
        <BasicInfo profile={userData?.profile} />
        <WorkInfo data={userData} />
      </div>
    </>
  );
}

export default page;
