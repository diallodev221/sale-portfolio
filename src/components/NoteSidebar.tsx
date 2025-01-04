import { FolderIcon, HashIcon, SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

const folders = [
  { id: "1", name: "Personal" },
  { id: "2", name: "Work" },
  { id: "3", name: "Projects" },
];

const tags = [
  { id: "1", name: "Important" },
  { id: "2", name: "Todo" },
  { id: "3", name: "Ideas" },
];

export function NoteSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <div className="p-4">
          <div className="relative">
            <SearchIcon className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search notes..." className="pl-8" />
          </div>
        </div>

        <SidebarGroup>
          <SidebarGroupLabel>Folders</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {folders.map((folder) => (
                <SidebarMenuItem key={folder.id}>
                  <SidebarMenuButton>
                    <FolderIcon className="h-4 w-4 mr-2" />
                    <span>{folder.name}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Tags</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {tags.map((tag) => (
                <SidebarMenuItem key={tag.id}>
                  <SidebarMenuButton>
                    <HashIcon className="h-4 w-4 mr-2" />
                    <span>{tag.name}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}