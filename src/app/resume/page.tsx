import { SimplePage } from '@/components/simple-page';
import { resumeConfig } from '@/config/Resume';
import { site } from '@/lib/site';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Resume — ${site.name}`,
  description: site.bio,
};

export default function ResumePage() {
  return (
    <SimplePage
      title="Resume"
      description="AI/ML Engineer — production iOS apps, full-stack AI/fintech platforms, and autonomous trading systems."
    >
      <iframe
        src={resumeConfig.url}
        title="Resume"
        className="border-border min-h-[80vh] w-full rounded-lg border"
      />
    </SimplePage>
  );
}
