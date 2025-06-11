import { notFound } from "next/navigation";
import BasicInfo from "./components/BasicInfo";
import WorkInfo from "./components/WorkInfo";
import { User } from "@/data/users";
import { ApiResponse } from "@/data/api";

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
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[17.5rem_1fr] items-start gap-5 lg:gap-20 mt-5 lg:mt-10">
      <BasicInfo profile={userData?.profile} />
      <WorkInfo data={userData} />
    </div>
  );
}

export default page;
