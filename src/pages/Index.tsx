import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { ChevronRight, HelpCircle, Info, ShieldCheck, Lock, CheckCircle2 } from "lucide-react";
import { useState } from "react";

const Index = () => {
  const { toast } = useToast();
  const [selectedCandidate, setSelectedCandidate] = useState("");

  const handleVoteSubmit = () => {
    if (!selectedCandidate) {
      toast({
        title: "Please select a candidate",
        description: "You must select a candidate before submitting your vote.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Vote Submitted Successfully",
      description: "Your vote has been securely recorded.",
      duration: 3000,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center space-x-2">
              <ShieldCheck className="h-8 w-8 text-purple-600" />
              <span className="text-xl font-semibold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                SecureVote
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="text-gray-600">
                Help
                <HelpCircle className="ml-1 h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-600">
                About
                <Info className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="space-y-8">
          {/* Election Info */}
          <div className="text-center space-y-3">
            <h1 className="text-4xl font-bold text-gray-900">2024 General Election</h1>
            <p className="text-gray-600 text-lg">Cast your vote securely and confidentially</p>
          </div>

          {/* Voting Card */}
          <Card className="w-full border-2 border-purple-100 shadow-lg">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl">Presidential Election</CardTitle>
              <CardDescription>Select one candidate to cast your vote</CardDescription>
            </CardHeader>
            <CardContent>
              <RadioGroup
                value={selectedCandidate}
                onValueChange={setSelectedCandidate}
                className="space-y-4"
              >
                {candidates.map((candidate) => (
                  <div
                    key={candidate.id}
                    className="flex items-center space-x-2 p-4 rounded-lg hover:bg-purple-50 transition-colors"
                  >
                    <RadioGroupItem value={candidate.id} id={candidate.id} />
                    <Label htmlFor={candidate.id} className="flex-1 cursor-pointer">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium text-gray-900">{candidate.name}</p>
                          <p className="text-sm text-gray-500">{candidate.party}</p>
                        </div>
                        {selectedCandidate === candidate.id && (
                          <CheckCircle2 className="h-5 w-5 text-purple-600" />
                        )}
                      </div>
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </CardContent>
            <CardFooter className="flex justify-between items-center border-t bg-gray-50/50 p-6">
              <div className="flex items-center text-sm text-gray-500">
                <Lock className="h-4 w-4 mr-2" />
                <p>Your vote is secure and anonymous</p>
              </div>
              <Button
                onClick={handleVoteSubmit}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              >
                Submit Vote
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>

          {/* Security Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {securityFeatures.map((feature) => (
              <Card key={feature.title} className="bg-white/80 backdrop-blur-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900">{feature.title}</CardTitle>
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