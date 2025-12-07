import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertCircle, CheckCircle2, FileText } from 'lucide-react';

export default function ThesisFormatGuide() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-12 md:py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Thesis Format Guidelines</h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl">
            Tribhuvan University IOST standards for M.Sc and Ph.D thesis formatting and submission requirements.
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
                <CardTitle className="text-lg">Quick Navigation</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <nav className="space-y-2 text-sm">
                  <a href="#page-setup" className="block hover:text-accent transition-colors">Page Setup</a>
                  <a href="#typography" className="block hover:text-accent transition-colors">Typography</a>
                  <a href="#structure" className="block hover:text-accent transition-colors">Thesis Structure</a>
                  <a href="#figures-tables" className="block hover:text-accent transition-colors">Figures & Tables</a>
                  <a href="#references" className="block hover:text-accent transition-colors">References</a>
                  <a href="#submission" className="block hover:text-accent transition-colors">Submission</a>
                </nav>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Page Setup */}
            <Card id="page-setup" className="shadow-md">
              <CardHeader className="bg-secondary text-secondary-foreground rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Page Setup & Margins
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Paper Size:</h4>
                    <p className="text-sm text-muted-foreground">A4 (210 × 297 mm)</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Margins:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                      <li>Top: 1 inch (2.54 cm)</li>
                      <li>Bottom: 1 inch (2.54 cm)</li>
                      <li>Left: 1.5 inches (3.81 cm)</li>
                      <li>Right: 1 inch (2.54 cm)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Line Spacing:</h4>
                    <p className="text-sm text-muted-foreground">1.5 lines throughout the thesis</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Page Numbering:</h4>
                    <p className="text-sm text-muted-foreground">Arabic numerals starting from the Introduction chapter (bottom center or bottom right)</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Typography */}
            <Card id="typography" className="shadow-md">
              <CardHeader className="bg-secondary text-secondary-foreground rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  Typography
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Font Type:</h4>
                    <p className="text-sm text-muted-foreground">Times New Roman or Calibri (standard serif or sans-serif fonts)</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Font Size:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                      <li>Body text: 12 pt</li>
                      <li>Chapter titles: 14 pt (bold)</li>
                      <li>Section headings: 13 pt (bold)</li>
                      <li>Subsection headings: 12 pt (bold)</li>
                      <li>Footnotes: 10 pt</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Text Alignment:</h4>
                    <p className="text-sm text-muted-foreground">Justified alignment for body text</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Thesis Structure */}
            <Card id="structure" className="shadow-md">
              <CardHeader className="bg-secondary text-secondary-foreground rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  Thesis Structure
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <p className="text-sm text-muted-foreground">A complete thesis should include the following components in order:</p>
                <div className="space-y-2 text-sm">
                  <div className="flex gap-3">
                    <span className="font-semibold text-primary min-w-fit">1. Title Page</span>
                    <span className="text-muted-foreground">University logo, thesis title, author name, degree, department, and year</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="font-semibold text-primary min-w-fit">2. Declaration</span>
                    <span className="text-muted-foreground">Statement that the thesis is original work not submitted elsewhere</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="font-semibold text-primary min-w-fit">3. Approval Sheet</span>
                    <span className="text-muted-foreground">Signatures of supervisor(s) and examiner(s)</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="font-semibold text-primary min-w-fit">4. Acknowledgments</span>
                    <span className="text-muted-foreground">Optional: Thank advisors, funding sources, and contributors</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="font-semibold text-primary min-w-fit">5. Abstract</span>
                    <span className="text-muted-foreground">250-300 words summarizing objectives, methods, results, and conclusions</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="font-semibold text-primary min-w-fit">6. Table of Contents</span>
                    <span className="text-muted-foreground">List all chapters, sections, figures, and tables with page numbers</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="font-semibold text-primary min-w-fit">7. List of Figures</span>
                    <span className="text-muted-foreground">All figures with captions and page numbers</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="font-semibold text-primary min-w-fit">8. List of Tables</span>
                    <span className="text-muted-foreground">All tables with captions and page numbers</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="font-semibold text-primary min-w-fit">9. Main Chapters</span>
                    <span className="text-muted-foreground">Introduction, Literature Review, Methodology, Results, Discussion, Conclusion</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="font-semibold text-primary min-w-fit">10. References</span>
                    <span className="text-muted-foreground">Complete bibliography in standard format (APA or Harvard)</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="font-semibold text-primary min-w-fit">11. Appendices</span>
                    <span className="text-muted-foreground">Optional: Supplementary data, questionnaires, detailed calculations</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Figures and Tables */}
            <Card id="figures-tables" className="shadow-md">
              <CardHeader className="bg-secondary text-secondary-foreground rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  Figures & Tables
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Figure Requirements:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                      <li>High resolution (minimum 300 DPI for print)</li>
                      <li>Clear, legible labels and legends</li>
                      <li>Figure captions below the figure (centered, 10-11 pt)</li>
                      <li>Numbered sequentially (Figure 1, Figure 2, etc.)</li>
                      <li>Referenced in text before appearance</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Table Requirements:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                      <li>Table captions above the table (centered, 10-11 pt)</li>
                      <li>Clear column and row headers</li>
                      <li>Numbered sequentially (Table 1, Table 2, etc.)</li>
                      <li>Referenced in text before appearance</li>
                      <li>Consistent formatting throughout</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* References */}
            <Card id="references" className="shadow-md">
              <CardHeader className="bg-secondary text-secondary-foreground rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  Citation & References
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Recommended Citation Format: APA (6th or 7th Edition)</h4>
                    <div className="bg-muted/50 p-3 rounded-lg text-sm text-muted-foreground space-y-2">
                      <p><strong>Journal Article:</strong></p>
                      <p className="italic">Author(s) (Year). Title of article. Journal Name, Volume(Issue), Pages.</p>
                      <p><strong>Book:</strong></p>
                      <p className="italic">Author(s) (Year). Title of book. Publisher.</p>
                      <p><strong>Thesis:</strong></p>
                      <p className="italic">Author (Year). Title of thesis (Unpublished master's/doctoral thesis). University Name.</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Reference List Guidelines:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                      <li>Alphabetically arranged by author surname</li>
                      <li>Hanging indent for each entry</li>
                      <li>Double-spaced</li>
                      <li>Include all sources cited in the text</li>
                      <li>Use consistent formatting</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Submission Requirements */}
            <Card id="submission" className="shadow-md border-2 border-accent">
              <CardHeader className="bg-accent text-accent-foreground rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle className="w-5 h-5" />
                  Submission Requirements
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Physical Copies:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                      <li>Submit 4 copies of the thesis (spiral bound)</li>
                      <li>High-quality printing on white A4 paper</li>
                      <li>All pages numbered correctly</li>
                      <li>All figures and tables included</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Digital Copy:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                      <li>Submit soft copy in PDF format</li>
                      <li>File size should not exceed 10 MB</li>
                      <li>Ensure all links and references are functional</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Submission Timeline:</h4>
                    <p className="text-sm text-muted-foreground">Submit thesis within one year of proposal approval (or as per department guidelines)</p>
                  </div>
                  <div className="bg-amber-50 border border-amber-200 p-3 rounded-lg">
                    <p className="text-sm text-amber-800">
                      <strong>Note:</strong> Consult your department for specific submission deadlines and any additional requirements not covered here.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Checklist */}
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
                    <span className="text-sm">All pages have correct margins (1.5" left, 1" others)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded border border-foreground mt-0.5 flex-shrink-0"></div>
                    <span className="text-sm">Font is 12 pt Times New Roman or Calibri throughout</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded border border-foreground mt-0.5 flex-shrink-0"></div>
                    <span className="text-sm">Line spacing is 1.5 throughout</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded border border-foreground mt-0.5 flex-shrink-0"></div>
                    <span className="text-sm">All chapters, sections, figures, and tables are in Table of Contents</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded border border-foreground mt-0.5 flex-shrink-0"></div>
                    <span className="text-sm">Page numbers are correct and consistent</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded border border-foreground mt-0.5 flex-shrink-0"></div>
                    <span className="text-sm">All figures and tables are numbered and captioned</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded border border-foreground mt-0.5 flex-shrink-0"></div>
                    <span className="text-sm">All references are cited in text and listed in References</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded border border-foreground mt-0.5 flex-shrink-0"></div>
                    <span className="text-sm">References follow APA format consistently</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded border border-foreground mt-0.5 flex-shrink-0"></div>
                    <span className="text-sm">Thesis has been proofread for spelling and grammar</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded border border-foreground mt-0.5 flex-shrink-0"></div>
                    <span className="text-sm">Declaration and approval sheets are signed</span>
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
