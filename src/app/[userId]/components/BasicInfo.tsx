import { Profile } from "@/data/users";
import Image from "next/image";

function BasicInfo({ profile }: { profile: Profile }) {
  const { name, image, designation, location } = profile;
  return (
    <section className="flex flex-col gap-3 mx-auto w-full justify-center lg:sticky lg:top-[calc(70px+1rem)]">
      <div className="w-[200px] h-[220px] lg:w-[280px] lg:h-[350px] relative  mx-auto">
        <Image
          fill
          sizes="100%"
          priority
          className="w-full h-full  object-cover  rounded-lg"
          src={image}
          alt="profile pic"
        />
      </div>
      <h3 className=" text-xl lg:text-2xl font-semibold text-center lg:text-left">
        {name}
      </h3>
      <h6 className="text-sm lg:text-xl text-gray-600 text-center lg:text-left">
        {designation}
      </h6>
      <div className="p-4 lg:p-6 rounded-lg border border-gray-300 w-full flex flex-col gap-3">
        <p className="text-sm lg:text-lg text-gray-500">Location</p>
        <p className="text-sm lg:text-lg text-gray-500">{location}</p>
      </div>
    </section>
  );
}

export default BasicInfo;
