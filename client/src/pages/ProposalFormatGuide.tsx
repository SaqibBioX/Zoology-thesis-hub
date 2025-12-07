import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertCircle, CheckCircle2, FileText, Clock } from 'lucide-react';

export default function ProposalFormatGuide() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-accent text-accent-foreground py-12 md:py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Proposal Format Guidelines</h1>
          <p className="text-lg text-accent-foreground/90 max-w-2xl">
            Tribhuvan University IOST standards for M.Sc research proposal writing and submission.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4 shadow-md">
              <CardHeader className="bg-primary text-primary-foreground rounded-t-lg">
                <CardTitle className="text-lg">Quick Links</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <nav className="space-y-2 text-sm">
                  <a href="#overview" className="block hover:text-accent transition-colors">Overview</a>
                  <a href="#requirements" className="block hover:text-accent transition-colors">Requirements</a>
                  <a href="#structure" className="block hover:text-accent transition-colors">Structure</a>
                  <a href="#format" className="block hover:text-accent transition-colors">Format</a>
                  <a href="#submission" className="block hover:text-accent transition-colors">Submission</a>
                  <a href="#evaluation" className="block hover:text-accent transition-colors">Evaluation</a>
                </nav>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <Card id="overview" className="shadow-md">
              <CardHeader className="bg-secondary text-secondary-foreground rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Proposal Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    The <strong>Dissertation Proposal & Seminar</strong> is a compulsory component of the M.Sc Zoology program at Tribhuvan University. It carries <strong>1 credit with full marks of 25</strong> and pass marks of <strong>12.5</strong>.
                  </p>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Purpose of the Proposal:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                      <li>Demonstrate understanding of the research problem</li>
                      <li>Show familiarity with relevant literature</li>
                      <li>Outline feasible research methodology</li>
                      <li>Establish clear research objectives</li>
                      <li>Obtain departmental approval before commencing research</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 p-3 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <strong>Note:</strong> The research proposal will be used as the foundation for the dissertation work in the 4th semester.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Requirements */}
            <Card id="requirements" className="shadow-md">
              <CardHeader className="bg-secondary text-secondary-foreground rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  Key Requirements
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">General Requirements:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                      <li>Proposal must be for <strong>original research work</strong></li>
                      <li>No duplication or repetition of previous research</li>
                      <li>Topic must be related to your special/elective paper</li>
                      <li>Developed under guidance of your department supervisor</li>
                      <li>Joint supervisor may be from another department if needed</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Topic Selection Guidelines:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                      <li>Conduct critical literature review of the research area</li>
                      <li>Discuss with colleagues, supervisors, and experts</li>
                      <li>Identify specific research problem</li>
                      <li>Ensure feasibility within available time and resources</li>
                      <li>Consider field work, observational, or experimental approaches</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Submission Timeline:</h4>
                    <p className="text-sm text-muted-foreground">
                      Submit proposal to the department <strong>within the first three months of the 3rd semester</strong> or as per department head's timeline.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Proposal Structure */}
            <Card id="structure" className="shadow-md">
              <CardHeader className="bg-secondary text-secondary-foreground rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  Proposal Structure
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <p className="text-sm text-muted-foreground mb-4">Your proposal should include the following sections:</p>
                <div className="space-y-3">
                  <div className="border-l-4 border-accent pl-4">
                    <h4 className="font-semibold text-sm mb-1">1. Title</h4>
                    <p className="text-sm text-muted-foreground">Clear, concise, and descriptive title of your research</p>
                  </div>
                  <div className="border-l-4 border-accent pl-4">
                    <h4 className="font-semibold text-sm mb-1">2. Introduction & Background</h4>
                    <p className="text-sm text-muted-foreground">
                      General background on the topic, significance of the study, and why the research is needed. Include recent literature and current knowledge gaps.
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-4">
                    <h4 className="font-semibold text-sm mb-1">3. Literature Review</h4>
                    <p className="text-sm text-muted-foreground">
                      Comprehensive review of relevant literature. Emphasize latest research and findings. Identify gaps and justify your research question.
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-4">
                    <h4 className="font-semibold text-sm mb-1">4. Research Objectives</h4>
                    <p className="text-sm text-muted-foreground">
                      Clear general objective and 2-4 specific objectives. Use action verbs (identify, assess, determine, compare, analyze).
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-4">
                    <h4 className="font-semibold text-sm mb-1">5. Methodology</h4>
                    <p className="text-sm text-muted-foreground">
                      Detailed description of study area, study period, sampling methods, sample size, and data analysis procedures. Must be feasible within constraints.
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-4">
                    <h4 className="font-semibold text-sm mb-1">6. Expected Outcomes</h4>
                    <p className="text-sm text-muted-foreground">
                      Anticipated results and their significance for zoology, conservation, or management.
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-4">
                    <h4 className="font-semibold text-sm mb-1">7. Timeline</h4>
                    <p className="text-sm text-muted-foreground">
                      Realistic schedule for proposal defense, fieldwork, analysis, and writing phases.
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-4">
                    <h4 className="font-semibold text-sm mb-1">8. Budget</h4>
                    <p className="text-sm text-muted-foreground">
                      Estimated costs for equipment, materials, transportation, and other expenses. Show how you'll manage resource constraints.
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-4">
                    <h4 className="font-semibold text-sm mb-1">9. References</h4>
                    <p className="text-sm text-muted-foreground">
                      Complete bibliography in APA or Harvard format. Include all sources cited in the proposal.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Format Requirements */}
            <Card id="format" className="shadow-md">
              <CardHeader className="bg-secondary text-secondary-foreground rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Format Requirements
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Page Setup:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                      <li>Paper size: A4 (210 × 297 mm)</li>
                      <li>Margins: 1 inch on all sides (or 1.5" left, 1" others)</li>
                      <li>Line spacing: 1.5 lines</li>
                      <li>Font: Times New Roman or Calibri, 12 pt</li>
                      <li>Text alignment: Justified</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Length:</h4>
                    <p className="text-sm text-muted-foreground">
                      <strong>8-15 pages</strong> (excluding references and appendices)
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Additional Elements:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                      <li>Title page with university logo</li>
                      <li>Table of contents</li>
                      <li>Page numbers (bottom center or right)</li>
                      <li>Figures and tables with captions</li>
                      <li>Appendices if needed</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Submission Process */}
            <Card id="submission" className="shadow-md">
              <CardHeader className="bg-secondary text-secondary-foreground rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Submission Process
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Step 1: Prepare Proposal</h4>
                    <p className="text-sm text-muted-foreground">
                      Develop proposal following all guidelines with supervisor guidance.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Step 2: Submit to Department</h4>
                    <p className="text-sm text-muted-foreground">
                      Submit <strong>one printed copy</strong> to the department within the first three months of 3rd semester.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Step 3: Proposal Defense</h4>
                    <p className="text-sm text-muted-foreground">
                      Department will call for open defense. The evaluation committee includes the Head of Department, Campus Chief, and appointed faculty members.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Step 4: Corrections (if needed)</h4>
                    <p className="text-sm text-muted-foreground">
                      If required, make corrections and amendments before final approval.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Step 5: Final Approval</h4>
                    <p className="text-sm text-muted-foreground">
                      Receive approval to proceed with dissertation work in the 4th semester.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Evaluation Criteria */}
            <Card id="evaluation" className="shadow-md border-2 border-accent">
              <CardHeader className="bg-accent text-accent-foreground rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle className="w-5 h-5" />
                  Evaluation Criteria
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <p className="text-sm text-muted-foreground mb-3">Your proposal will be evaluated on:</p>
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Literature review and background knowledge</span>
                    <span className="font-semibold text-primary">25%</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Clarity and feasibility of objectives</span>
                    <span className="font-semibold text-primary">25%</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Appropriateness of methodology</span>
                    <span className="font-semibold text-primary">25%</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Presentation and writing quality</span>
                    <span className="font-semibold text-primary">15%</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Seminar presentation and Q&A</span>
                    <span className="font-semibold text-primary">10%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Final Checklist */}
            <Card className="shadow-md border-2 border-primary">
              <CardHeader className="bg-primary text-primary-foreground rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  Pre-Submission Checklist
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded border border-foreground mt-0.5 flex-shrink-0"></div>
                    <span className="text-sm">Proposal is 8-15 pages (excluding references)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded border border-foreground mt-0.5 flex-shrink-0"></div>
                    <span className="text-sm">All required sections are included</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded border border-foreground mt-0.5 flex-shrink-0"></div>
                    <span className="text-sm">Font is 12 pt Times New Roman or Calibri</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded border border-foreground mt-0.5 flex-shrink-0"></div>
                    <span className="text-sm">Line spacing is 1.5 throughout</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded border border-foreground mt-0.5 flex-shrink-0"></div>
                    <span className="text-sm">Margins are correct (1.5" left, 1" others)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded border border-foreground mt-0.5 flex-shrink-0"></div>
                    <span className="text-sm">Research is original and not duplicated</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded border border-foreground mt-0.5 flex-shrink-0"></div>
                    <span className="text-sm">Objectives are clear and specific</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded border border-foreground mt-0.5 flex-shrink-0"></div>
                    <span className="text-sm">Methodology is feasible and detailed</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded border border-foreground mt-0.5 flex-shrink-0"></div>
                    <span className="text-sm">All references are cited and properly formatted</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded border border-foreground mt-0.5 flex-shrink-0"></div>
                    <span className="text-sm">Proposal has been proofread for errors</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded border border-foreground mt-0.5 flex-shrink-0"></div>
                    <span className="text-sm">Supervisor has reviewed and approved</span>
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
