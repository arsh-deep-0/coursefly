"use client";
import { Inter } from "next/font/google";
import { useRouter } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const navigateToHome = () => {
    router.push("/");
  };
  const navigateToProfile = () => {
    router.push("/dashboard");
  };
  
  return (
    <div className="">
      <header className="bg-white px-4 p-2 flex justify-between gray-border fixed top-0 left-0 w-full ">
        <div onClick={navigateToHome}>
          <img src="/icons/Home.svg" alt="" />
        </div>

        <span className="poppins text-blue font-semibold text-xl">
          Course<span className="text-black">Fly</span>
        </span>
        <div className="flex gap-4">
        
          <img onClick={navigateToProfile} src="/icons/profile.svg" alt="" />
        </div>
      </header>
      <main className="overflow-scroll pt-10 w-full">{children}</main>
    </div>
  );
}
