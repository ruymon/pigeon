import { Button } from "@/components/Button";

interface ISearchParams {
  title: string;
  heading: string;
  description: string;
  accentColor: string;
};

interface ViewPageProps {
  searchParams: ISearchParams;
};

export async function generateMetadata({ searchParams }: { searchParams: ISearchParams }) {
  const { title } = searchParams;

  return {
    title: title || 'Pigeon | View',
  };
}


export default function ViewPage({searchParams}: ViewPageProps) {
  const { heading, description, accentColor } = searchParams;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8">
      <div className="flex flex-col gap-2 text-center">
        <h1 className="text-3xl font-bold">{heading || 'Main Header'}</h1>
        <span className="text-zinc-500 text-lg">{description || 'Description'}</span>
      </div>

      <div className="flex items-center gap-4">
        <Button>Sim</Button>
        <Button>Não</Button>
      </div>
    </main>
  );
}