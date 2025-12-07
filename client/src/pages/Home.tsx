import { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { ChevronDown, Search, BookOpen, Leaf } from 'lucide-react';
import { topics, type Topic } from '@/data';
const topicsData = topics;

export default function Home() {
  const [level, setLevel] = useState<string>('');
  const [university, setUniversity] = useState<string>('');
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [timeAvailable, setTimeAvailable] = useState<string>('');
  const [selectedResources, setSelectedResources] = useState<string[]>([]);
  const [location, setLocation] = useState<string>('');
  const [keywords, setKeywords] = useState<string>('');
  const [suggestedTopics, setSuggestedTopics] = useState<Topic[]>([]);
  const [showResults, setShowResults] = useState(false);

  const interestAreas = [
    'Ecology & Wildlife',
    'Parasitology',
    'Entomology',
    'Fisheries & Aquaculture',
    'Environmental Zoology',
    'Mammalogy',
    'Ornithology',
    'Herpetology',
    'Limnology',
    'Ethology',
    'Conservation Biology',
  ];

  const resources = [
    'Basic lab only (microscope, preservatives, field gear)',
    'No molecular lab',
    'Limited chemicals/budget',
    'Good field access',
    'GIS/software access',
    'No special equipment',
  ];

  const locations = [
    'Kathmandu Valley',
    'Pokhara',
    'Chitwan/Terai',
    'Mid-hills',
    'High mountains',
    'Eastern Nepal',
    'Western Nepal',
  ];

  const toggleInterest = (interest: string) => {
    setSelectedInterests((prev) =>
      prev.includes(interest) ? prev.filter((i) => i !== interest) : [...prev, interest]
    );
  };

  const toggleResource = (resource: string) => {
    setSelectedResources((prev) =>
      prev.includes(resource) ? prev.filter((r) => r !== resource) : [...prev, resource]
    );
  };

  const handleSuggestTopics = () => {
    const filtered = (topicsData as Topic[]).filter((topic) => {
      // Filter by level
      if (level && !topic.level.includes(level)) return false;

      // Filter by interest areas
      if (selectedInterests.length > 0) {
        const hasMatchingInterest = selectedInterests.some((interest) =>
          topic.interest_areas.includes(interest)
        );
        if (!hasMatchingInterest) return false;
      }

      // Filter by time available
      if (timeAvailable && topic.time_required !== timeAvailable) return false;

      // Filter by location
      if (location && !topic.location.includes(location)) return false;

      // Filter by resources
      if (selectedResources.length > 0) {
        const hasMatchingResource = selectedResources.some((resource) =>
          topic.methods_allowed.includes(resource)
        );
        if (!hasMatchingResource) return false;
      }

      // Filter by keywords
      if (keywords) {
        const keywordLower = keywords.toLowerCase();
        const titleMatch = topic.title.toLowerCase().includes(keywordLower);
        const descriptionMatch = topic.description.toLowerCase().includes(keywordLower);
        if (!titleMatch && !descriptionMatch) return false;
      }

      return true;
    });

    setSuggestedTopics(filtered.slice(0, 15));
    setShowResults(true);
  };

  const handleReset = () => {
    setLevel('');
    setUniversity('');
    setSelectedInterests([]);
    setTimeAvailable('');
    setSelectedResources([]);
    setLocation('');
    setKeywords('');
    setSuggestedTopics([]);
    setShowResults(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden">
        <div className="relative h-96 md:h-[500px] w-full">
          <img
            src="/images/himalayan-hero.png"
            alt="Himalayan landscape with Monal bird"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
              Nepal Zoology Thesis Hub
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl drop-shadow-md">
              Discover suitable thesis and case-study topics tailored to your research constraints
            </p>
          </div>
        </div>
      </section>

      {/* Leaf Divider */}
      <div className="w-full h-16 md:h-20 flex items-center justify-center bg-gradient-to-b from-background to-white">
        <img src="/images/leaf-divider.png" alt="Leaf divider" className="h-12 md:h-16 w-auto" />
      </div>

      {/* Main Content */}
      <section className="container py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Filter Panel */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4 shadow-lg">
              <CardHeader className="bg-primary text-primary-foreground rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  <Search className="w-5 h-5" />
                  Filters
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-6">
                {/* Level */}
                <div className="space-y-2">
                  <Label className="font-semibold text-foreground">Study Level</Label>
                  <Select value={level} onValueChange={setLevel}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="B.Sc">B.Sc</SelectItem>
                      <SelectItem value="M.Sc">M.Sc</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* University */}
                <div className="space-y-2">
                  <Label className="font-semibold text-foreground">University/College</Label>
                  <Select value={university} onValueChange={setUniversity}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select university" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tribhuvan">Tribhuvan University</SelectItem>
                      <SelectItem value="kathmandu">Kathmandu University</SelectItem>
                      <SelectItem value="pokhara">Pokhara University</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Time Available */}
                <div className="space-y-2">
                  <Label className="font-semibold text-foreground">Available Time</Label>
                  <Select value={timeAvailable} onValueChange={setTimeAvailable}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select timeframe" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="<6 months">&lt;6 months</SelectItem>
                      <SelectItem value="6-12 months">6-12 months</SelectItem>
                      <SelectItem value=">12 months">&gt;12 months</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Location */}
                <div className="space-y-2">
                  <Label className="font-semibold text-foreground">Preferred Location</Label>
                  <Select value={location} onValueChange={setLocation}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select location" />
                    </SelectTrigger>
                    <SelectContent>
                      {locations.map((loc) => (
                        <SelectItem key={loc} value={loc}>
                          {loc}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Keywords */}
                <div className="space-y-2">
                  <Label className="font-semibold text-foreground">Keywords (Optional)</Label>
                  <Input
                    placeholder="e.g., butterfly, water quality"
                    value={keywords}
                    onChange={(e) => setKeywords(e.target.value)}
                    className="border-border"
                  />
                </div>

                {/* Buttons */}
                <div className="flex gap-2 pt-4">
                  <Button
                    onClick={handleSuggestTopics}
                    className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    Suggest Topics
                  </Button>
                  <Button
                    onClick={handleReset}
                    variant="outline"
                    className="flex-1"
                  >
                    Reset
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Interest Areas & Resources */}
          <div className="lg:col-span-2 space-y-8">
            {/* Interest Areas */}
            <Card className="shadow-md">
              <CardHeader className="bg-accent text-accent-foreground rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  <Leaf className="w-5 h-5" />
                  Interest Areas
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {interestAreas.map((interest) => (
                    <div key={interest} className="flex items-center space-x-2">
                      <Checkbox
                        id={interest}
                        checked={selectedInterests.includes(interest)}
                        onCheckedChange={() => toggleInterest(interest)}
                      />
                      <Label htmlFor={interest} className="cursor-pointer text-sm">
                        {interest}
                      </Label>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Available Resources */}
            <Card className="shadow-md">
              <CardHeader className="bg-secondary text-secondary-foreground rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  Available Resources
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-3">
                  {resources.map((resource) => (
                    <div key={resource} className="flex items-start space-x-2">
                      <Checkbox
                        id={resource}
                        checked={selectedResources.includes(resource)}
                        onCheckedChange={() => toggleResource(resource)}
                      />
                      <Label htmlFor={resource} className="cursor-pointer text-sm leading-relaxed">
                        {resource}
                      </Label>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Results Section */}
      {showResults && (
        <section className="container py-12 md:py-16">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-2">
              Suggested Topics ({suggestedTopics.length})
            </h2>
            <p className="text-muted-foreground">
              {suggestedTopics.length === 0
                ? 'No topics match your criteria. Try adjusting your filters.'
                : 'Here are the most suitable topics based on your preferences:'}
            </p>
          </div>

          {suggestedTopics.length > 0 ? (
            <div className="grid grid-cols-1 gap-6">
              {suggestedTopics.map((topic) => (
                <Card key={topic.id} className="shadow-md hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">{topic.title}</CardTitle>
                    <CardDescription className="text-base mt-2">{topic.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-foreground text-sm mb-1">Why Suitable:</h4>
                        <p className="text-sm text-muted-foreground">{topic.suitability}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground text-sm mb-1">Main Methods:</h4>
                        <p className="text-sm text-muted-foreground">{topic.main_methods}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-foreground text-sm mb-1">Possible Study Sites:</h4>
                        <p className="text-sm text-muted-foreground">{topic.possible_sites}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground text-sm mb-1">Time Required:</h4>
                        <p className="text-sm text-muted-foreground">{topic.time_required}</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm mb-2">Key References:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {topic.key_references.map((ref, idx) => (
                          <li key={idx} className="list-disc list-inside">
                            {ref.title} - <em>{ref.source}</em>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="text-center py-12">
              <p className="text-muted-foreground">Try adjusting your filters to find more topics.</p>
            </Card>
          )}
        </section>
      )}
    </div>
  );
}
