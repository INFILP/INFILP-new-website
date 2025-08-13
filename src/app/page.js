// app/page.js
import { redirect } from "next/navigation";

export default function HomePage() {
  // Immediately redirect to spotlight page
  redirect("/spotlight");
}
