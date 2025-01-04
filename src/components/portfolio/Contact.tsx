import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Get in <span className="text-purple-600">Touch</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-purple-600" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-600">your.email@example.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-purple-600" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-gray-600">+1 234 567 890</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-purple-600" />
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p className="text-gray-600">San Francisco, CA</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="flex space-x-4">
              <Button variant="outline" size="icon">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>
          <Card>
            <CardContent className="p-6">
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  />
                </div>
                <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};