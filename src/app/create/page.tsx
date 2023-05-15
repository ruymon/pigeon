import { BrowserPreview } from "@/components/BrowserPreview";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";

interface CreatePageProps {};

export default function CreatePage({}: CreatePageProps) {
  return (
    <section className="flex justify-between gap-16 h-full">
      <div className="w-full max-w-md flex flex-col gap-8">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-semibold text-zinc-50">Create a message</h1>
          <span className="text-zinc-400">Fill out the form below to create a message.</span>
        </div>

        <form action="#" className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <span className="text-sm text-zinc-400 font-medium">Page Title:</span>
            <Input labelText="Page Title Input" placeholder="My Secret Message" />
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-sm text-zinc-400 font-medium">Heading:</span>
            <Input labelText="Heading Input" placeholder="Can I take the day off?" />
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-sm text-zinc-400 font-medium">Description:</span>
            <Input labelText="Description Input" placeholder="I am a nice person... Please" />
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-sm text-zinc-400 font-medium">Accent Color:</span>
            <div className="flex items-center gap-2">
              <div className="p-4 rounded bg-red-600"></div>
              <Input type="text" labelText="Page Title Input" placeholder="#FF5100" />
            </div>
          </div>
        </form>

        <Button >
          Create Message
        </Button>

      </div>

      <BrowserPreview>
        <div className="h-full w-full flex flex-col gap-4 items-center justify-center">
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl font-semibold text-zinc-50">Heading</h1>
            <span className="text-zinc-400">Description</span>
          </div>

          <div className="flex items-center gap-4">
            <Button>Yes</Button>

            <Button>No</Button>
          </div>

        </div>
      </BrowserPreview>
    </section>
  );
};
