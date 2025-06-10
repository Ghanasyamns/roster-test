import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function Navbar() {
  return (
    <div className="flex justify-between items-center h-[70px] border-b border-b-gray-200 sticky top-0 bg-white z-50">
      <h1 className="text-2xl lg:text-4xl font-bold text-[#171717">roster</h1>
      <div className="  gap-3 hidden lg:flex">
        <p className="text-sm lg:text-lg font-medium text-gray-500">
          My activities{" "}
        </p>
        <p className="text-sm lg:text-lg font-medium text-gray-500">Discover</p>
      </div>
      <Avatar className="rounded-lg  overflow-hidden">
        <AvatarImage
          className="w-8 h-8"
          src="https://github.com/shadcn.png"
          alt="@shadcn"
        />
        <AvatarFallback>Profile</AvatarFallback>
      </Avatar>
    </div>
  );
}

export default Navbar;
