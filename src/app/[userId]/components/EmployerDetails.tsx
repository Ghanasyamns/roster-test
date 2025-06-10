import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Experience } from "@/data/users";

function EmployerDetails({ experience }: { experience: Experience }) {
  const {
    employer_name,
    subscriber_count,
    job_type,
    job_title,
    no_of_projects,
    job_duration,
    job_summary,
  } = experience;
  return (
    <div className="flex flex-1 flex-col gap-4">
      <div className="flex gap-5">
        <Avatar className="rounded-full w-12 h-12  overflow-hidden">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback></AvatarFallback>
        </Avatar>
        <div>
          <h4 className="font-semibold text-sm lg:text-lg">{employer_name}</h4>
          <p className="text-gray-600 text-sm">{subscriber_count} Subs</p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-4 justify-between w-full">
        <div className="flex gap-2 flex-wrap">
          <div className="px-2 py-1 border border-gray-300 rounded-2xl">
            {job_title}
          </div>
          <div className="px-2 py-1 border border-gray-300 rounded-2xl bg-gray-200">
            {job_type}
          </div>
          <div className="px-2 py-1 border border-gray-300 rounded-2xl bg-gray-200">
            {no_of_projects}
          </div>
        </div>
        <p className="text-gray-600 text-sm mt-2">{job_duration}</p>
      </div>
      <p className="text-gray-500">{job_summary}</p>
    </div>
  );
}

export default EmployerDetails;
