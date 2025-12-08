import { FaChevronLeft } from "react-icons/fa";
import Link from "next/link";


export default function BackButton({ href }) {
  return (
    <Link href={href}>
      <div className="flex gap-2 rounded-lg w-[85px] text-black bg-secondary p-2 justify-center items-center cursor-pointer hover:bg-gray-200 transition">
        <FaChevronLeft />
        <p>Back</p>
      </div>
    </Link>
  );
}
