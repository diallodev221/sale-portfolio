import { useState } from "react";
import { NoteSidebar } from "@/components/NoteSidebar";
import { NoteEditor } from "@/components/NoteEditor";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

const Index = () => {
  const [content, setContent] = useState("# Welcome to your notes\n\nStart writing in Markdown!");

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <NoteSidebar />
        <main className="flex-1 p-4">
          <div className="mb-4">
            <SidebarTrigger />
          </div>
          <NoteEditor content={content} onChange={setContent} />
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;