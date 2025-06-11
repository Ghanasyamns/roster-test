import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function AboutMe({ profile_summary }: { profile_summary: string }) {
  return (
    <Card className="mb-12 shadow-xl border-0 bg-white/80 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-3xl font-bold text-gray-800">
          About Me
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-lg text-gray-700 leading-relaxed">
          {profile_summary}
        </p>
      </CardContent>
    </Card>
  );
}

export default AboutMe;
