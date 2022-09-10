import { useSession } from "next-auth/react";


function Home() {
  const { isLoaded, data: session, status } = useSession({
  })

  if (status === "authenticated") {
    return <p>Signed in as {session.user.email}</p>
  }

  return (
    <main>
      This is the home page
    </main>
  );
}
