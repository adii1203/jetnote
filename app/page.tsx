import SignInButton from "@/components/sign-in-button";

export default async function Home() {
  return (
    <div>
      <header className="border h-12 px-2 py-1 flex justify-end">
        <SignInButton />
      </header>
      <h1>jet notes</h1>
    </div>
  );
}
