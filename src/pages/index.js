import Image from "next/image";
import harddiesel from "../assets/harddiesel.png";
import Link from "next/link";

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between pt-16 `}
    >
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-gray-900 text-5xl font-bold drop-shadow-md">RAPICANN</h1>
        <p className="text-gray-600">Elige tu sepa favorita</p>
      </div>
      <Link href="/store" className="bg-gray-900 text-gray-50 px-6 py-3 rounded-2xl font-bold tracking-wider text-xl shadow-md">TIENDA</Link>
      <div className=" w-screen h-[55vh] ">
        <Image src={harddiesel} alt="sepa de muestra" className="w-full drop-shadow-xl" />
      </div>
    </main>
  );
}
