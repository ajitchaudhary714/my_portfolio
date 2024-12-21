import React from "react";
import { MapPin, Phone, Mail, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";

const ContactSection = () => {
  return (
    <section className="relative py-20 px-4 overflow-hidden bg-gradient-to-b from-black via-purple-950 to-black">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-purple-600/10 blur-3xl" />
        <div className="absolute -right-40 -bottom-40 h-80 w-80 rounded-full bg-purple-600/10 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-purple-300 via-purple-200 to-purple-300 bg-clip-text text-transparent mb-6">
            Let's Connect
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-purple-300 mx-auto mb-6" />
          <p className="text-gray-300 max-w-xl mx-auto text-lg">
            Ready to start a conversation? Reach out through any of these
            channels
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Location Card */}
          <Card className="group bg-gray-900/40 border-purple-500/20 hover:border-purple-500/40 backdrop-blur-sm transition-all duration-500">
            <CardContent className="p-8">
              <div className="mb-6 relative">
                <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500" />
                <div className="relative bg-gray-900 rounded-full p-4 w-16 h-16 flex items-center justify-center">
                  <MapPin className="h-8 w-8 text-purple-400" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">
                Our Location
              </h3>
              <div className="space-y-2 text-gray-300">
                <p className="text-lg">Lucknow</p>
                <p>Uttar Pradesh, India</p>
                <div className="pt-4">
                  <button className="text-purple-400 hover:text-purple-300 flex items-center gap-2 text-sm">
                    View on map <ExternalLink className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Phone Card */}
          <Card className="group bg-gray-900/40 border-purple-500/20 hover:border-purple-500/40 backdrop-blur-sm transition-all duration-500">
            <CardContent className="p-8">
              <div className="mb-6 relative">
                <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500" />
                <div className="relative bg-gray-900 rounded-full p-4 w-16 h-16 flex items-center justify-center">
                  <Phone className="h-8 w-8 text-purple-400" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">
                Phone
              </h3>
              <div className="space-y-2 text-gray-300">
                <p className="text-lg">Mobile Number:</p>
                <p className="text-purple-400 hover:text-purple-300 transition-colors">
                  +91 9026029479
                </p>
                <div className="pt-4">
                  <button className="text-purple-400 hover:text-purple-300 flex items-center gap-2 text-sm">
                    Save contact <ExternalLink className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Email Card */}
          <Card className="group bg-gray-900/40 border-purple-500/20 hover:border-purple-500/40 backdrop-blur-sm transition-all duration-500">
            <CardContent className="p-8">
              <div className="mb-6 relative">
                <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500" />
                <div className="relative bg-gray-900 rounded-full p-4 w-16 h-16 flex items-center justify-center">
                  <Mail className="h-8 w-8 text-purple-400" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">
                Email
              </h3>
              <div className="space-y-2 text-gray-300">
                <p className="text-lg">Personal Email:</p>
                <p className="text-purple-400 hover:text-purple-300 transition-colors break-all">
                  ajitchaudhary714@gmail.com
                </p>
                <div className="pt-4">
                  <button className="text-purple-400 hover:text-purple-300 flex items-center gap-2 text-sm">
                    Send email <ExternalLink className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
