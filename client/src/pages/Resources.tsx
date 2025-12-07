import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, BookOpen, Link as LinkIcon } from 'lucide-react';

export default function Resources() {
  const resources = [
    {
      category: 'Thesis Repositories',
      items: [
        {
          title: 'Tribhuvan University Central Department of Zoology',
          description: 'Access M.Sc. dissertations and Ph.D. abstracts from TU Zoology.',
          url: 'https://www.cdztu.edu.np/',
        },
        {
          title: 'Tribhuvan University E-Library',
          description: 'Search for theses and dissertations from all TU departments.',
          url: 'https://elibrary.tucl.edu.np/',
        },
        {
          title: 'Kathmandu University Library',
          description: 'Access KU thesis collection and research resources.',
          url: 'https://library.ku.edu.np/',
        },
      ],
    },
    {
      category: 'Open Access Journals',
      items: [
        {
          title: 'Nepalese Journal of Zoology (NJZ)',
          description: 'Open-access journal publishing zoology research from Nepal.',
          url: 'https://www.cdztu.edu.np/njz/',
        },
        {
          title: 'Nepal Journal of Science and Technology',
          description: 'Multidisciplinary open-access journal with zoology articles.',
          url: 'https://www.nepjol.info/index.php/NJST',
        },
        {
          title: 'Journal of Threatened Taxa',
          description: 'Open-access journal focusing on conservation and biodiversity.',
          url: 'https://www.threatenedtaxa.org/',
        },
      ],
    },
    {
      category: 'Field Guides & References',
      items: [
        {
          title: 'Bats of Nepal - Field Guide',
          description: 'Comprehensive field guide for bat identification in Nepal.',
          url: 'https://researchportal.helsinki.fi/en/publications/bats-of-nepal-a-field-guide',
        },
        {
          title: 'Amphibians and Reptiles of Nepal',
          description: 'Biology, systematics, and field guide for herpetofauna.',
          url: 'https://repository.si.edu/',
        },
        {
          title: 'Google Scholar',
          description: 'Search for peer-reviewed articles and citations on zoology topics.',
          url: 'https://scholar.google.com/',
        },
      ],
    },
    {
      category: 'Research Databases',
      items: [
        {
          title: 'NepJOL (Nepal Journals Online)',
          description: 'Portal for Nepalese academic journals and research.',
          url: 'https://www.nepjol.info/',
        },
        {
          title: 'ResearchGate',
          description: 'Connect with researchers and access published papers.',
          url: 'https://www.researchgate.net/',
        },
        {
          title: 'Web of Science',
          description: 'Comprehensive citation database (access via university library).',
          url: 'https://www.webofscience.com/',
        },
      ],
    },
    {
      category: 'Conservation & Biodiversity',
      items: [
        {
          title: 'IUCN Red List',
          description: 'Global assessment of species conservation status.',
          url: 'https://www.iucnredlist.org/',
        },
        {
          title: 'Nepal Biodiversity Portal',
          description: 'Information on Nepal\'s flora and fauna.',
          url: 'https://www.nast.gov.np/biological-resource',
        },
        {
          title: 'Chitwan National Park',
          description: 'Information on Nepal\'s flagship conservation area.',
          url: 'https://www.chitwannationalpark.gov.np/',
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-12 md:py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Useful Resources</h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl">
            A curated collection of links to thesis repositories, open-access journals, field guides, and research databases to support your zoology research.
          </p>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8">
          {resources.map((section, idx) => (
            <div key={idx}>
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-accent" />
                {section.category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.items.map((item, itemIdx) => (
                  <Card key={itemIdx} className="shadow-md hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg text-primary">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                      <Button
                        asChild
                        variant="outline"
                        className="w-full gap-2"
                      >
                        <a href={item.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                          Visit Resource
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tips Section */}
      <section className="bg-muted/50 py-12 md:py-16">
        <div className="container">
          <h2 className="text-2xl font-bold text-foreground mb-8">Tips for Using These Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="text-lg">Accessing Theses</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-3">
                <p>
                  Most university theses are available through institutional repositories. Check your university library for access credentials.
                </p>
                <p>
                  Contact the Central Department of Zoology directly if you need access to specific dissertations.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="text-lg">Finding Open-Access Articles</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-3">
                <p>
                  Use Google Scholar and filter results to show only free, full-text articles.
                </p>
                <p>
                  Many researchers share their work on ResearchGate—don't hesitate to request a copy directly.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="text-lg">Field Identification</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-3">
                <p>
                  Download field guides in PDF format and save them offline for use during fieldwork.
                </p>
                <p>
                  Many guides are available through university libraries or can be purchased affordably.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="text-lg">Citation Management</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-3">
                <p>
                  Use free tools like Zotero or Mendeley to organize and cite your references.
                </p>
                <p>
                  Most journals have citation styles available—check your university's guidelines.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
