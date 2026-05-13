import { notFound } from "next/navigation";
import CaseStudyCard from "components/home/CaseStudyCard";
import PageBanner from "components/shared/PageBanner";
import { caseStudies, getCaseStudy } from "data/caseStudies";
import LetsTalkSection from "components/shared/LetsTalkSection";

type CaseStudyDetailsPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export function generateMetadata({ params }: CaseStudyDetailsPageProps) {
  const study = getCaseStudy(params.slug);

  if (!study) {
    return {
      title: "Case Study Not Found | DXG Digital",
    };
  }

  return {
    title: `${study.title} ${study.highlight} | DXG Digital`,
    description: study.subtitle,
  };
}

export default function CaseStudyDetailsPage({
  params,
}: CaseStudyDetailsPageProps) {
  const study = getCaseStudy(params.slug);

  if (!study) {
    notFound();
  }

  return (
    <div className="bg-black">
      <PageBanner
        title={`${study.title} ${study.highlight}`}
        backgroundImage={study.image}
        breadcrumbParent={{
          label: "Experiences We've Created",
          path: "/experiences-created",
        }}
      />
      <CaseStudyCard data={study} />
      <LetsTalkSection />
    </div>
  );
}
