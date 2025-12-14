import Image from "next/image";

export default function Filter() {
  return (
    <div className="flex flex-row gap-2 justify-between font-serif max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
      <div className="flex flex-row gap-5">
        <span className="inline-flex items-center gap-2">
          Availability{" "}
          <span>
            <Image
              src={"/down.png"}
              alt="Dropdown"
              width={15}
              height={15}
              className="rotate-90"
            />
          </span>
        </span>
        <span className="inline-flex items-center gap-2">
          Price{" "}
          <span>
            <Image
              src={"/down.png"}
              alt="Dropdown"
              width={15}
              height={15}
              className="rotate-90"
            />
          </span>
        </span>
        <span className="inline-flex items-center gap-2">
          Color{" "}
          <span>
            <Image
              src={"/down.png"}
              alt="Dropdown"
              width={15}
              height={15}
              className="rotate-90"
            />
          </span>
        </span>
        <span className="inline-flex items-center gap-2">
          Size{" "}
          <span>
            <Image
              src={"/down.png"}
              alt="Dropdown"
              width={15}
              height={15}
              className="rotate-90"
            />
          </span>
        </span>
        <span className="inline-flex items-center gap-2">
          Fabric{" "}
          <span>
            <Image
              src={"/down.png"}
              alt="Dropdown"
              width={15}
              height={15}
              className="rotate-90"
            />
          </span>
        </span>
      </div>
      <div className="flex gap-5 items-center">
        <span>Results</span>
        <span>|</span>
        <span className="inline-flex items-center gap-2">
          Sort{" "}
          <span>
            <Image
              src={"/down.png"}
              alt="Dropdown"
              width={15}
              height={15}
              className="rotate-90"
            />
          </span>
        </span>
      </div>
    </div>
  );
}
