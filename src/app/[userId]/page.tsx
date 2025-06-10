import Navbar from "@/components/Navbar";
import BasicInfo from "./components/BasicInfo";
import WorkInfo from "./components/WorkInfo";
import { User } from "@/data/users";

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
    const jsonData: Promise<{ data: User }> = await response.json();
    return (await jsonData).data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

async function page({ params }: { params: Params }) {
  const { userId } = await params;
  const userData = await getUserData(userId);
  console.log(userData);
  return (
    <main className="container">
      <Navbar />
      <div className="grid grid-cols-1 lg:grid-cols-[17.5rem_1fr] items-start gap-5 lg:gap-20 mt-5 lg:mt-10">
        <BasicInfo profile={userData?.profile} />
        <WorkInfo data={userData} />
      </div>
    </main>
  );
}

export default page;
