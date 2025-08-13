"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/Button";

export function LoginForm() {
  const searchParams = useSearchParams();
  const next = searchParams?.get("next");
  const error = searchParams?.get("error");

  const [loadingGoogle, setLoadingGoogle] = useState(false);

  return (
    <div className="flex flex-col justify-center gap-2 px-4 sm:px-16">
      <Button
        size="2xl"
        loading={loadingGoogle}
        onClick={() => {
          setLoadingGoogle(true);
          signIn(
            "google",
            {
              ...(next && next.length > 0
                ? { callbackUrl: next }
                : { callbackUrl: "/welcome" }),
            },
            error === "RequiresReconsent" ? { consent: true } : undefined,
          );
        }}
      >
        <span className="flex items-center justify-center">
          <Image
            src="/images/google.svg"
            alt=""
            width={24}
            height={24}
            unoptimized
          />
          <span className="ml-2">Sign in with Google</span>
        </span>
      </Button>
    </div>
  );
}
