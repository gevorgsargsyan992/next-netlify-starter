import Image from "next/image";
import svgIcon from "../../public/next.svg";

export default function Home() {
  return (
    <div className="w-full h-full">
      <Image
        src={svgIcon}
        layout="fill"
        objectFit="cover"
        quality={100}
        alt="Under Construction"
        className="w-full h-full object-cover object-center"
      />
    </div>
  );
}
