import Education from "@/components/home/Education";
import Loading from "../loading";
import { Suspense } from "react";

export default function About() {
    return (
        <div className="min-h-screen wrap py-16 bg-[url('/docs/images/image.jpg')]">
        <Suspense fallback={<Loading />}>
          <Education />
        </Suspense>
      </div>
    );
}