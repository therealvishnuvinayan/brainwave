import Image from "next/image";
import { loading } from "../../public/assets";

interface GeneratingProps {
  className: string;
}

const Generating: React.FC<GeneratingProps> = ({ className }) => {
  return (
    <div
      className={`${
        className || ""
      } flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem]`}
    >
      <Image src={loading} className="w-5 h-5 mr-4" alt="loader" />
      AI is generating
    </div>
  );
};

export default Generating;
