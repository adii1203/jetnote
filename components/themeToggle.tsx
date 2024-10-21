"use client";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <ToggleGroup
      type="single"
      size="sm"
      onValueChange={setTheme}
      value={theme}
      className="flex items-center justify-end">
      <ToggleGroupItem
        value="light"
        aria-label="Light"
        className="rounded-full">
        <SunIcon size={14} />
      </ToggleGroupItem>
      <ToggleGroupItem value="dark" aria-label="Dark" className="rounded-full">
        <MoonIcon size={14} />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
