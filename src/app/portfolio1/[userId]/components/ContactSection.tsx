import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

function ContactSection() {
  return (
    <Card className="shadow-xl border-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <CardContent className="p-8 text-center">
        <h3 className="text-3xl font-bold mb-4">Ready to Collaborate?</h3>
        <p className="text-xl text-blue-100 mb-6">
          Let&apos;s create something amazing together. I&apos;m available for
          new opportunities and exciting projects.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button
            variant="secondary"
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100"
          >
            Contact Me
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white/10"
          >
            Download Resume
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default ContactSection;
