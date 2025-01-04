import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Clock, Calendar, User, Activity, AlertCircle, Search, Filter } from "lucide-react";
import { useState } from "react";

const Index = () => {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");

  const handleTicketSubmit = () => {
    toast({
      title: "Ticket Created",
      description: "Your ticket has been successfully created. A healthcare provider will attend to you shortly.",
      duration: 3000,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center space-x-2">
              <Activity className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                HealthCare Portal
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="text-gray-600">
                Help
                <AlertCircle className="ml-1 h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-600">
                Profile
                <User className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Search and Filter Section */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search tickets..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            Filter
          </Button>
        </div>

        {/* Create Ticket Section */}
        <Card className="mb-8 border-2 border-blue-100 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl">Create New Ticket</CardTitle>
            <CardDescription>Request medical assistance or consultation</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="department">Department</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select department" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="emergency">Emergency</SelectItem>
                  <SelectItem value="general">General Practice</SelectItem>
                  <SelectItem value="pediatrics">Pediatrics</SelectItem>
                  <SelectItem value="cardiology">Cardiology</SelectItem>
                  <SelectItem value="orthopedics">Orthopedics</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="symptoms">Symptoms</Label>
              <Input id="symptoms" placeholder="Describe your symptoms" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="priority">Priority</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="high">High - Urgent Care Needed</SelectItem>
                  <SelectItem value="medium">Medium - Moderate Concern</SelectItem>
                  <SelectItem value="low">Low - Regular Checkup</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={handleTicketSubmit} className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
              Submit Ticket
            </Button>
          </CardFooter>
        </Card>

        {/* Active Tickets Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900">Active Tickets</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tickets.map((ticket) => (
              <Card key={ticket.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex justify-between items-center">
                    <span className="text-lg">{ticket.department}</span>
                    <span className={`px-3 py-1 rounded-full text-sm ${getPriorityClass(ticket.priority)}`}>
                      {ticket.priority}
                    </span>
                  </CardTitle>
                  <CardDescription>{ticket.symptoms}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{ticket.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{ticket.date}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">View Details</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

// Sample data for tickets
const tickets = [
  {
    id: 1,
    department: "Emergency",
    symptoms: "Severe headache and dizziness",
    priority: "high",
    time: "10:30 AM",
    date: "2024-03-15",
  },
  {
    id: 2,
    department: "General Practice",
    symptoms: "Persistent cough and fever",
    priority: "medium",
    time: "11:45 AM",
    date: "2024-03-15",
  },
  {
    id: 3,
    department: "Pediatrics",
    symptoms: "Regular checkup",
    priority: "low",
    time: "2:15 PM",
    date: "2024-03-15",
  },
];

// Utility function for priority styling
const getPriorityClass = (priority: string) => {
  switch (priority) {
    case "high":
      return "bg-red-100 text-red-800";
    case "medium":
      return "bg-yellow-100 text-yellow-800";
    case "low":
      return "bg-green-100 text-green-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

export default Index;