import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { button as buttonStyles } from "@nextui-org/theme";
import { Card, CardHeader } from "@nextui-org/react";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import { CardBody } from "@nextui-org/card";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-xl text-center justify-center">
          <span className={title()}>Make&nbsp;</span>
          <span className={title({ color: "violet" })}>beautiful&nbsp;</span>
          <br />
          <span className={title()}>
            websites regardless of your design experience.
          </span>
          <div className={subtitle({ class: "mt-4" })}>
            Beautiful, fast and modern React UI library.
          </div>
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

        <div className="mt-8">
          <Snippet hideCopyButton hideSymbol variant="bordered">
            <span>Product Engineering.</span>
          </Snippet>
        </div>
      </section>
      <h2>Projects</h2>
      <Card>
        <CardHeader>
          </CardHeader>
          <CardBody>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quos.
            </p>
          </CardBody>
        </Card>
    </DefaultLayout>
  );
}

const projects = [
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
      "Custom AI models matching images on articles to live products on ecommerce fashion & homeware retailers. ",
  },
  {
    title: "bagstashhh",
    tags: ["founder", "saas", "ai", "NFT", "data platforms"],
    website: "https://bagstashhh.com",
    description:
      "Luxury fashion collection management system, incl. public profiles, authenticity verification, buy/sell network effects, insurance, and luxury item metadata index (imdb for luxury goods)",
  },
  {
    title: "secret project 1",
    tags: [
      "hardware",
      "ai",
      "cofounder",
      "saas",
      "self-serve",
      "data platforms",
    ],
    description:
      "custom built hardware off ESP32 to ingest wifi probe requests, integrate with AI models to provide insights into customer movements in physical stores. Integrated with retail OPs platform for task & comms in retail networks.",
  },
  {
    title: "linktree",
    tags: ["saas", "growth", "engineering"],
    website: "https://linktr.ee",
    description:
      "One of australias most recent Unicorn startups, as employee 13. Head of Growth Engineering during the hyper-growth phase to 300 people and from 1 to 30 million users.",
  },
  {
    title: "various insuretech startups",
    tags: ["saas", "insurance", "data platforms", "devops/sre"],
    description:
      "Head of Engineering in a series of insuretech startups integrating with carriers, PAS, and building on inhouse quote engines ",
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
    description: "Helping out people here and there in need.",
  },
];
