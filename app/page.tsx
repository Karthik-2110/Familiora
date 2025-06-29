import { Button } from "@/components/ui/button"
import { signIn } from "@/auth"

export default function Home() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("google", {
          redirectTo: "/home",
        })
      }}
    >
      <Button type="submit" variant="outline">Signin with Google</Button>
    </form>
  )
}