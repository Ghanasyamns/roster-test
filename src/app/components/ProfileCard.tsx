import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, ExternalLink, User } from "lucide-react";
import Link from "next/link";

interface Profile {
  id: string;
  profile: {
    name: string;
    image: string;
    designation: string;
    location: string;
  };
  profile_summary: string;
  experience: any[];
}

interface ProfileCardProps {
  profile: Profile;
  selectedDesign: string;
}

export default function ProfileCard({
  profile,
  selectedDesign,
}: ProfileCardProps) {
  return (
    <Card className="group bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      <CardContent className="p-6">
        {/* Profile Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="relative">
            <img
              src={profile.profile.image}
              alt={profile.profile.name}
              className="w-16 h-16 rounded-full object-cover ring-4 ring-white shadow-md"
            />
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white"></div>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-xl font-bold text-gray-800 truncate">
              {profile.profile.name}
            </h3>
            <p className="text-blue-600 font-medium flex items-center gap-1">
              <Briefcase className="w-4 h-4" />
              {profile.profile.designation}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <Link
            href={`/${profile.id}`}
            className="flex-1 bg-white/50 hover:bg-white/80 border-gray-200 hover:border-blue-300 transition-all duration-200"
          >
            <Button
              variant="outline"
              size="sm"
              className="flex-1 bg-white/50 hover:bg-white/80 border-gray-200 hover:border-blue-300 transition-all duration-200"
            >
              <User className="w-4 h-4 mr-2" />
              View Profile
            </Button>
          </Link>
          <Link className="flex-1  " href={`/${selectedDesign}/${profile.id}`}>
            <Button
              size="sm"
              className="flex-1   bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-md hover:shadow-lg transition-all duration-200"
              disabled={!selectedDesign}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              View Portfolio
            </Button>
          </Link>
        </div>

        {!selectedDesign && (
          <p className="text-xs text-amber-600 text-center mt-2 flex items-center justify-center gap-1">
            <span className="w-1 h-1 bg-amber-500 rounded-full"></span>
            Select a design to view portfolio
          </p>
        )}
      </CardContent>
    </Card>
  );
}
