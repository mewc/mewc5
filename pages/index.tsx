import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { button as buttonStyles } from "@nextui-org/theme";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Chip } from "@nextui-org/chip";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";

type Project = {
  title: string;
  description: string;
  tags: string[];
  website?: string;
};

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-xl text-center justify-center">
          <div className="mb-6 text-xl homemade-apple-regular">
            Hi, I&apos;m Michael <span className="wave">👋</span>
          </div>
          <span className={title()}>Building&nbsp;</span>
          <span className={title({ color: "blue" })}>Products&nbsp;</span>
          <br />
          <span className={title()}>people want.</span>
          <span className={title({ color: "yellow" })}>&nbsp;Fast. &nbsp;</span>
          <div className={subtitle({ class: "mt-4" })}>Get in touch.</div>
        </div>

        <div className="flex gap-3">
          <Link
            isExternal
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href={siteConfig.links.github}
          >
            <GithubIcon size={20} />
            GitHub
          </Link>
          <Link
            isExternal
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href={siteConfig.links.linkedin}
          >
            <LinkedinIcon size={20} />
            LinkedIn
          </Link>
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <Snippet hideCopyButton hideSymbol variant="bordered">
            <span>Product Engineering.</span>
          </Snippet>
          <Snippet hideCopyButton hideSymbol variant="bordered">
            <span>Data Platforms.</span>
          </Snippet>
          <Snippet hideCopyButton hideSymbol variant="bordered">
            <span>Integrating AI into products.</span>
          </Snippet>
          <Snippet hideCopyButton hideSymbol variant="bordered">
            <span>Industrialising selfserve saas.</span>
          </Snippet>
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className={title({ size: "sm" })}>Projects</h2>
        <div className="w-full overflow-x-auto pr-8">
          <div className="flex flex-row gap-4 pb-4 px-8">
            {projects.map((project) => (
              <Card
                key={project.title}
                className="min-w-[300px] max-w-[400px]  my-8 mr-4"
              >
                <CardHeader className="flex justify-between items-start">
                  <h3 className="font-semibold">{project.title}</h3>
                  {project.tags.includes("founder") && (
                    <Chip color="primary" size="sm" variant="flat">
                      founder
                    </Chip>
                  )}
                  {project.tags.includes("cofounder") && (
                    <Chip color="primary" size="sm" variant="flat">
                      cofounder
                    </Chip>
                  )}
                </CardHeader>
                <CardBody className="flex flex-col gap-4">
                  <p className="text-sm text-default-500">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags
                      .filter((tag) => tag !== "founder")
                      .map((tag) => (
                        <Chip
                          key={tag}
                          color="default"
                          size="sm"
                          variant="flat"
                        >
                          {tag}
                        </Chip>
                      ))}
                  </div>
                  {project.website && (
                    <Link
                      isExternal
                      className={buttonStyles({
                        variant: "bordered",
                        radius: "full",
                        size: "sm",
                      })}
                      href={project.website}
                    >
                      View Project
                    </Link>
                  )}
                </CardBody>
              </Card>
            ))}
            <div className="w-16">&nbsp;</div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}

const projects: Project[] = [
  {
    title: "chartcastr",
    tags: ["founder", "saas", "ai", "integrations", "BI", "rag"],
    website: "https://chartcastr.com",
    description:
      "Data BI tool connecting charts from BI sources (gsheets, etc), integrating in contextual meaning (what does this chart mean? whats the history?), then delivering messages (slack, msteams, etc.) and facilitating discussions on the topic.",
  },
  {
    title: "trendii",
    website: "https://trendii.com",
    tags: [
      "ai",
      "advertising",
      "data platforms",
      "self-serve",
      "saas",
      "high-volume",
      "devops/sre",
    ],
    description:
      "Custom AI models matching images on articles to live products on ecommerce fashion & homeware retailers.",
  },
  {
    title: "bagstashhh",
    tags: ["founder", "saas", "ai", "partnerships", "data platforms"],
    website: "https://bagstashhh.com",
    description:
      "Luxury fashion collection management system, incl. public profiles, authenticity verification, buy/sell network effects, insurance, and luxury item metadata index (imdb for luxury goods)",
  },
  {
    title: "linktree",
    tags: ["saas", "growth", "engineering", "high-volume"],
    website: "https://linktr.ee",
    description:
      "One of australias most recent Unicorn startups, as employee 14. Head of Growth Engineering during the hyper-growth phase to 300 people and from 1 to 30 million users.",
  },
  {
    title: "clearcalcs",
    tags: ["saas", "growth", "data platforms", "customer analytics"],
    website: "https://clearcalcs.com",
    description:
      "Setting up data platforms, integrating data sources and making available data for internal BI & customer facing analytics (freelance work)",
  },
  {
    title: "secret project 1",
    tags: ["hardware", "ai", "saas", "self-serve", "data platforms"],
    description:
      "Ingest wifi signal to event data, integrate with AI models, provide insights into customer movements in physical stores. Integrated with retail ops platform for task & comms in retail networks.",
  },
  {
    title: "various insuretech startups",
    tags: ["saas", "insurance", "data platforms", "devops/sre"],
    description:
      "Staff Eng & Head Of Eng in a series of insuretech startups integrating with carriers, PAS, and building on inhouse insurance mgmt + distribution systems.",
  },
  {
    title: "marketing technology agency",
    tags: ["saas", "fintech", "data platforms", "devops/sre"],
    description:
      "Working with the biggest brands in Australia to integrate martech solutions, experimentation, analytics, and increment the product for mature companies",
  },
  {
    title: "Defence contracting",
    tags: ["engineering", "devops/sre"],
    description: "Can't say much here lol.",
  },
  {
    title:
      "Various freelance engineering, website/ecomm, online marketing, data, ",
    tags: ["data platforms", "engineering", "devops/sre"],
    description: "Helping out people here and there in need",
  },
];
