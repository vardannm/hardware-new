import { FaChevronLeft } from "react-icons/fa";

export default function BackButton() {
  return (
    <div className="flex gap-2 rounded-lg w-[85px] text-black bg-secondary p-2 justify-center items-center cursor-pointer">
      <FaChevronLeft/>
      <p>Back</p>
    </div>
  )
}
