import { caseStudies } from "data/caseStudies";
import CaseStudyCard from "./CaseStudyCard";

export default function DifferentCard() {
  return (
    <>
      {caseStudies.map((study) => (
        <CaseStudyCard key={study.id} data={study} />
      ))}
    </>
  );
}
