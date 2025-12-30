'use client';

import { FaChevronLeft } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="flex gap-2 rounded-lg w-[85px] text-black bg-secondary p-2 justify-center items-center cursor-pointer hover:bg-gray-200 transition"
    >
      <FaChevronLeft />
      <p>Back</p>
    </button>
  );
}
