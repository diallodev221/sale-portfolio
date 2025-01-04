import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { ChevronRight, HelpCircle, Info, ShieldCheck } from "lucide-react";

const Index = () => {
  const { toast } = useToast();

  const handleVoteSubmit = () => {
    toast({
      title: "Vote Submitted",
      description: "Your vote has been securely recorded.",
      duration: 3000,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <ShieldCheck className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-semibold">SecureVote</span>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                Help
                <HelpCircle className="ml-1 h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                About
                <Info className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="space-y-8">
          {/* Election Info */}
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold text-gray-900">2024 General Election</h1>
            <p className="text-gray-600">Please select your preferred candidate below</p>
          </div>

          {/* Voting Card */}
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Presidential Election</CardTitle>
              <CardDescription>Select one candidate</CardDescription>
            </CardHeader>
            <CardContent>
              <RadioGroup defaultValue="candidate1" className="space-y-4">
                {candidates.map((candidate) => (
                  <div key={candidate.id} className="flex items-center space-x-2">
                    <RadioGroupItem value={candidate.id} id={candidate.id} />
                    <Label htmlFor={candidate.id} className="flex-1">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium">{candidate.name}</p>
                          <p className="text-sm text-gray-500">{candidate.party}</p>
                        </div>
                      </div>
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
              <p className="text-sm text-gray-500">Your vote is secure and anonymous</p>
              <Button onClick={handleVoteSubmit}>
                Submit Vote
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>

          {/* Security Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {securityFeatures.map((feature) => (
              <Card key={feature.title} className="bg-white">
                <CardHeader>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

// Sample data
const candidates = [
  { id: "candidate1", name: "John Smith", party: "Progressive Party" },
  { id: "candidate2", name: "Sarah Johnson", party: "Conservative Party" },
  { id: "candidate3", name: "Michael Brown", party: "Independent" },
];

const securityFeatures = [
  {
    title: "Secure Encryption",
    description: "Your vote is encrypted end-to-end and cannot be tampered with.",
  },
  {
    title: "Anonymous Voting",
    description: "Your identity is protected and your vote remains completely anonymous.",
  },
  {
    title: "Verified Results",
    description: "Results are automatically verified through blockchain technology.",
  },
];

export default Index;