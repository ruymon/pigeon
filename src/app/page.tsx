import { Button } from "@/components/Button"
import { GridContainer } from "@/components/GridContainer"
import { Navbar } from "@/components/Navbar"

export const metadata = {
  title: 'Pigeon | Create',
}


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-8">
      <Navbar />
      <GridContainer>
        <div className="w-full flex flex-col">
          <h1 className="text-4xl font-bold">Create convincing messages in on click!</h1>
          <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus ratione explicabo, voluptatum sint iure blanditiis exercitationem.</span>

          <Button>
            Create a message
          </Button>
        </div>
      </GridContainer>
    </main>
  )
}
