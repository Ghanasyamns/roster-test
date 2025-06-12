import { Card, CardContent } from "@/components/ui/card";

function About({ profile_summary }: { profile_summary: string }) {
  return (
    <section id="about" className="py-16 md:py-24 bg-gray-800">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-gray-900/50 border-gray-700 backdrop-blur-sm">
            <CardContent className="p-6 md:p-8">
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed text-center">
                {profile_summary}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default About;
