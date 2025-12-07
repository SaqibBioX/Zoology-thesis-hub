import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, AlertCircle, BookOpen, FileText, ExternalLink, Download } from 'lucide-react';

export default function ProposalGuide() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-accent text-accent-foreground py-12 md:py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">How to Write a Thesis Proposal</h1>
          <p className="text-lg text-accent-foreground/90 max-w-2xl">
            A step-by-step guide to help you develop a strong research proposal for your B.Sc or M.Sc zoology thesis.
          </p>
        </div>
      </section>

      {/* Official Format Guidelines Banner */}
      <section className="container py-6">
        <Card className="border-2 border-primary shadow-lg">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <FileText className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2">Official Tribhuvan University Format Guidelines</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Before you start writing, download the official thesis format guidelines from Central Department of Zoology, Tribhuvan University.
                </p>
                <a 
                  href="https://www.cdztu.edu.np/wp-content/uploads/2018/12/Dissertation-Guidelines-2015.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors text-sm font-medium"
                >
                  <Download className="w-4 h-4" />
                  Download M.Sc. Thesis Format Guidelines (PDF)
                  <ExternalLink className="w-3 h-3" />
                </a>
                <p className="text-xs text-muted-foreground mt-3">
                  Source: Central Department of Zoology, Tribhuvan University (2015)
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Main Content */}
      <section className="container py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4 shadow-md">
              <CardHeader className="bg-primary text-primary-foreground rounded-t-lg">
                <CardTitle className="text-lg">Sections</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <nav className="space-y-2 text-sm">
                  <a href="#title" className="block hover:text-accent transition-colors">Title</a>
                  <a href="#background" className="block hover:text-accent transition-colors">Background & Literature</a>
                  <a href="#objectives" className="block hover:text-accent transition-colors">Objectives</a>
                  <a href="#methodology" className="block hover:text-accent transition-colors">Methodology</a>
                  <a href="#timeline" className="block hover:text-accent transition-colors">Timeline</a>
                  <a href="#budget" className="block hover:text-accent transition-colors">Budget & Resources</a>
                  <a href="#references" className="block hover:text-accent transition-colors">References</a>
                </nav>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Important Note */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
              <div className="flex gap-3">
                <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-blue-900">
                  <p className="font-semibold mb-1">Important:</p>
                  <p>Always follow the official format guidelines provided by your department. The information below is a general guide. For M.Sc. students at TU, refer to the official PDF document linked above.</p>
                </div>
              </div>
            </div>

            {/* Title Section */}
            <Card id="title" className="shadow-md">
              <CardHeader className="bg-secondary text-secondary-foreground rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  1. Title
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <p className="text-muted-foreground">
                  Your title should be clear, concise, and descriptive. It should indicate what you plan to study and where (if location-specific).
                </p>
                <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                  <p className="font-semibold text-sm">Example Titles:</p>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                    <li>Diversity and habitat preference of butterflies in Shivapuri-Nagarjun National Park, Kathmandu</li>
                    <li>Assessment of water quality and macro-invertebrate diversity in the Bagmati River</li>
                    <li>Prevalence of gastrointestinal parasites in domestic dogs of Pokhara Metropolitan City</li>
                  </ul>
                </div>
                <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg flex gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-amber-800">
                    <p className="font-semibold mb-1">Tip:</p>
                    <p>Avoid vague titles. Instead of "A study of insects," use "Diversity of aquatic insects in the streams of Dhulikhel."</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Background Section */}
            <Card id="background" className="shadow-md">
              <CardHeader className="bg-secondary text-secondary-foreground rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  2. Background & Literature Review
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <p className="text-muted-foreground">
                  Provide context for your research. Explain why your topic is important and what is already known about it.
                </p>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Key Points to Include:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                      <li>General background on the organism/ecosystem you're studying</li>
                      <li>Current knowledge gaps or unanswered questions</li>
                      <li>Previous studies in Nepal or similar regions</li>
                      <li>Why your study is needed (conservation, management, or scientific value)</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="font-semibold text-sm mb-2">Typical Length:</p>
                  <p className="text-sm text-muted-foreground">2-4 pages for B.Sc, 5-8 pages for M.Sc</p>
                </div>
              </CardContent>
            </Card>

            {/* Objectives Section */}
            <Card id="objectives" className="shadow-md">
              <CardHeader className="bg-secondary text-secondary-foreground rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  3. Research Objectives
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <p className="text-muted-foreground">
                  Clearly state what you aim to achieve. Objectives should be specific, measurable, and achievable within your timeframe.
                </p>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">General Objective:</h4>
                    <p className="text-sm text-muted-foreground italic">
                      "To assess the diversity and distribution of butterflies in Shivapuri-Nagarjun National Park."
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Specific Objectives:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1 list-decimal list-inside">
                      <li>To identify and document all butterfly species present in the park</li>
                      <li>To determine the relative abundance of each species</li>
                      <li>To analyze habitat preferences of common species</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg flex gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-amber-800">
                    <p className="font-semibold mb-1">Tip:</p>
                    <p>Use action verbs: identify, assess, determine, compare, analyze. Avoid vague terms like "study" or "understand."</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Methodology Section */}
            <Card id="methodology" className="shadow-md">
              <CardHeader className="bg-secondary text-secondary-foreground rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  4. Methodology
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <p className="text-muted-foreground">
                  Describe how you will conduct your research. Be specific about study sites, methods, and sample sizes.
                </p>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Include:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                      <li><strong>Study Area:</strong> Location, size, habitat type, accessibility</li>
                      <li><strong>Study Period:</strong> Duration and season(s)</li>
                      <li><strong>Sampling Methods:</strong> How will you collect data? (e.g., line transect, pitfall traps)</li>
                      <li><strong>Sample Size:</strong> How many samples/observations?</li>
                      <li><strong>Data Analysis:</strong> How will you analyze the data? (e.g., species richness indices, statistical tests)</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="font-semibold text-sm mb-2">Example Methodology Section (Brief):</p>
                  <p className="text-sm text-muted-foreground italic">
                    "The study will be conducted in Shivapuri-Nagarjun National Park for 6 months (March-August). Butterflies will be sampled using line transect method (500m transects) and Pollard walk. Sampling will occur twice weekly during favorable weather. Species will be identified using field guides and reference collections. Data will be analyzed using species richness indices and habitat preference analysis."
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Timeline Section */}
            <Card id="timeline" className="shadow-md">
              <CardHeader className="bg-secondary text-secondary-foreground rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  5. Timeline
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <p className="text-muted-foreground">
                  Create a realistic timeline for your project. Break it down into phases (literature review, fieldwork, analysis, writing).
                </p>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="font-semibold text-sm mb-3">Example Timeline (6-month project):</p>
                  <div className="text-sm text-muted-foreground space-y-2">
                    <div className="flex justify-between">
                      <span>Month 1:</span>
                      <span>Literature review, permit applications</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Months 2-4:</span>
                      <span>Fieldwork, data collection</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Month 5:</span>
                      <span>Data analysis, writing</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Month 6:</span>
                      <span>Final revisions, submission</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Budget Section */}
            <Card id="budget" className="shadow-md">
              <CardHeader className="bg-secondary text-secondary-foreground rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  6. Budget & Resources
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <p className="text-muted-foreground">
                  List the resources and equipment you'll need. Be realistic about costs and availability.
                </p>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Typical Budget Items:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                      <li>Field equipment (nets, traps, GPS, camera)</li>
                      <li>Lab supplies (preservatives, slides, chemicals)</li>
                      <li>Transportation and accommodation</li>
                      <li>Reference materials (books, journals)</li>
                      <li>Data analysis software</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg flex gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-amber-800">
                    <p className="font-semibold mb-1">Tip:</p>
                    <p>If you have limited budget, focus on low-cost methods (observation, surveys, basic lab work) rather than expensive equipment.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* References Section */}
            <Card id="references" className="shadow-md">
              <CardHeader className="bg-secondary text-secondary-foreground rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  7. References
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <p className="text-muted-foreground">
                  Cite all sources you've referenced in your proposal. Use a consistent citation format (typically APA or Harvard).
                </p>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Citation Format (APA):</h4>
                    <p className="text-sm text-muted-foreground italic">
                      Author(s) (Year). Title of article. <em>Journal Name</em>, Volume(Issue), Pages.
                    </p>
                  </div>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <p className="font-semibold text-sm mb-2">Example:</p>
                    <p className="text-sm text-muted-foreground italic">
                      Sharma, H. P., & Poudel, B. S. (2021). Mammalian fauna and conservation status in Nepal. <em>Journal of Threatened Taxa</em>, 13(5), 18234-18245.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Checklist */}
            <Card className="shadow-md border-2 border-accent">
              <CardHeader className="bg-accent text-accent-foreground rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  Final Checklist
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded border border-foreground mt-0.5 flex-shrink-0"></div>
                    <span className="text-sm">Title is clear and descriptive</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded border border-foreground mt-0.5 flex-shrink-0"></div>
                    <span className="text-sm">Background section includes relevant literature</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded border border-foreground mt-0.5 flex-shrink-0"></div>
                    <span className="text-sm">Objectives are specific and measurable</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded border border-foreground mt-0.5 flex-shrink-0"></div>
                    <span className="text-sm">Methodology is detailed and feasible</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded border border-foreground mt-0.5 flex-shrink-0"></div>
                    <span className="text-sm">Timeline is realistic</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded border border-foreground mt-0.5 flex-shrink-0"></div>
                    <span className="text-sm">Budget is reasonable and justified</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded border border-foreground mt-0.5 flex-shrink-0"></div>
                    <span className="text-sm">All references are properly cited</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded border border-foreground mt-0.5 flex-shrink-0"></div>
                    <span className="text-sm">Document is proofread and formatted correctly</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded border border-foreground mt-0.5 flex-shrink-0"></div>
                    <span className="text-sm">Follows official TU format guidelines (for M.Sc. students)</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}