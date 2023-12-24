"use client";

import AddForm from "@/components/AddForm";
import LetterList from "@/components/LetterList";
import Tab from "@/components/Tab";
import Link from "next/link";
import { QueryClient, QueryClientProvider } from "react-query";

export default function Home() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <img src="/main.webp" className="mx-auto max-w-[600px]"></img>
      <Tab />
      <AddForm />
      <LetterList />
      <div></div>
    </QueryClientProvider>
  );
}
