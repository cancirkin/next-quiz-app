import Image from "next/image";

export default function Error() {
  return (
    <div className="flex items-center justify-center">
      <Image
        alt="Error Icon"
        src={"icons/icon-error.svg"}
        width={30}
        height={30}
      ></Image>
      <span className="text-danger ml-2">Please select an answer</span>
    </div>
  );
}
