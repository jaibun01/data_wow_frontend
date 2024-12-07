"use client";

import { IResGetProfile } from "@/features/form-signin/interfaces";
import { SignInMutation } from "@/features/form-signin/services";
import { optionsOnceTime } from "@/utils/axios";

// NEXT
import { usePathname, useRouter } from "next/navigation";

// TYPES
import React from "react";
import useSWR from "swr";
// ==============================|| AUTH GUARD ||============================== //
const signInMutation = new SignInMutation();
const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();

  const URL = [`/auth/profile`];
  const { data, isLoading } = useSWR<IResGetProfile>(
    URL,
    signInMutation.getProfile,
    {
      ...optionsOnceTime,
    }
  );

  if (isLoading) return <></>;

  if (!data) {
    if (pathname === "/our-blog") {
      router.push("/signin");
    }
  }
  return <>{children}</>;
};

export default AuthGuard;
