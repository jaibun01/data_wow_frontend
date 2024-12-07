"use client";

import { ReactElement } from "react";

import React from "react";
import { Toaster } from "react-hot-toast";

// ==============================|| PROVIDER WRAPPER  ||============================== //

const ProviderWrapper = ({ children }: { children: ReactElement }) => {
  return (
    <>
      <Toaster />
      {children}
    </>
  );
};

export default ProviderWrapper;
