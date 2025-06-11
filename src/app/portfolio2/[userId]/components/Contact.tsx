import { Button } from "@/components/ui/button";
import { ExternalLink, Mail } from "lucide-react";

function Contact() {
  return (
    <section
      id="contact"
      className="py-16 md:py-24 bg-gradient-to-r from-emerald-600 to-cyan-600"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          Let&apos;s Work Together
        </h2>
        <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
          Ready to bring your vision to life? Let's discuss how we can create
          something extraordinary together.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-white text-emerald-600 hover:bg-gray-100"
          >
            <Mail className="w-5 h-5 mr-2" />
            Start a Conversation
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white/10"
          >
            <ExternalLink className="w-5 h-5 mr-2" />
            View My Work
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Contact;
