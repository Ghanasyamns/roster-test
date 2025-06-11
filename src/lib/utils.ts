import { ApiResponse } from "@/data/api";
import { Experience, User } from "@/data/users";
import { clsx, type ClassValue } from "clsx";
import { notFound } from "next/navigation";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function convertDate(dateString: string) {
  const date = new Date(dateString);
  const formatter = new Intl.DateTimeFormat("en-US", {
    month: "short",
    year: "numeric",
  });
  return formatter.format(date);
}
export const formatSubscribers = (num: number): string => {
  if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
  if (num >= 1000) return `${(num / 1000).toFixed(0)}K`;
  return num.toString();
};

export const calcTotalProjects = (experience: Experience[]) =>
  experience.reduce((sum, exp) => sum + (exp.no_of_projects ?? 0), 0);

export const calcTotalSubscribers = (experience: Experience[]) =>
  experience.reduce((sum, exp) => {
    const count = exp?.subscriber_count?.replace(/[^\d.]/g, "") ?? "0";
    const multiplier = exp?.subscriber_count?.includes("M")
      ? 1000000
      : exp?.subscriber_count?.includes("K")
      ? 1000
      : 1;
    return sum + parseFloat(count) * multiplier;
  }, 0);

export const getUserData = async (userId: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/users/${userId}`,
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      }
    );
    const jsonResponse: Promise<ApiResponse<User>> = await response.json();
    const jsonData = await jsonResponse;
    if (!jsonData.success) return notFound();
    return jsonData.data!;
  } catch (error) {
    return notFound();
  }
};
