import { Suspense } from "react";
import type { Metadata } from "next";
import { redirect } from "next/navigation";
import Link from "next/link";
import { LoginForm } from "@/app/(landing)/login/LoginForm";
import { auth } from "@/app/api/auth/[...nextauth]/auth";
import AutoLogOut from "@/app/(landing)/login/error/AutoLogOut";
import { AlertBasic } from "@/components/Alert";
import { env } from "@/env";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";

export const metadata: Metadata = {
  title: "Log in | Tradiemate AI",
  description: "Log in to Tradiemate AI.",
  alternates: { canonical: "/login" },
};

export default async function AuthenticationPage(props: {
  searchParams?: Promise<Record<string, string>>;
}) {
  const searchParams = await props.searchParams;
  const session = await auth();
  if (session?.user && !searchParams?.error) {
    if (searchParams?.next) {
      redirect(searchParams?.next);
    } else {
      redirect("/welcome");
    }
  }

  return (
    <div className="flex h-screen flex-col justify-center bg-gray-900 text-foreground">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6">
            <Logo />
          </div>
          <h1 className="font-cal text-2xl text-white">Sign In</h1>
          <p className="mt-4 text-gray-300">
            Your AI personal assistant for email management.
          </p>
        </div>
        <div className="mt-4">
          <Suspense>
            <LoginForm />
          </Suspense>
        </div>

        {searchParams?.error && (
          <ErrorAlert error={searchParams?.error} loggedIn={!!session?.user} />
        )}
      </div>
    </div>
  );
}

function ErrorAlert({ error, loggedIn }: { error: string; loggedIn: boolean }) {
  if (error === "RequiresReconsent") return null;

  if (error === "OAuthAccountNotLinked") {
    return (
      <AlertBasic
        variant="destructive"
        title="Account already attached to another user"
        description={
          <>
            <span>You can merge accounts instead.</span>
            <Button asChild className="mt-2">
              <Link href="/accounts">Merge accounts</Link>
            </Button>
          </>
        }
      />
    );
  }

  return (
    <>
      <AlertBasic
        variant="destructive"
        title="Error logging in"
        description={`There was an error logging in. Please try log in again. If this error persists please contact support at ${env.NEXT_PUBLIC_SUPPORT_EMAIL}`}
      />
      <AutoLogOut loggedIn={loggedIn} />
    </>
  );
}
