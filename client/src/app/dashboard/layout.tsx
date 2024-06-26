"use client";
import { Inter } from "next/font/google";
import Image from "next/image";
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
    <html lang="en">
      <body className={inter.className}>
        {" "}
        <div >
          <header className="bg-white px-4 p-2 flex justify-between gray-border fixed top-0 left-0 w-full z-40">
            <div onClick={navigateToHome}>
            <Image
                src="/icons/Home.svg"
                alt=""
                width={24}
                height={24}
              ></Image>
            </div>

            <span className="poppins text-blue font-semibold text-xl">
              Course<span className="text-black">Fly</span>
            </span>
            <div className="flex gap-4" onClick={navigateToProfile}>

              <Image src="/icons/profile.svg" alt="" width={24} height={24} />
            </div>
          </header>
          <main className="overflow-scroll pt-10 w-full">{children}</main>
        </div>
      </body>
    </html>
  );
}
