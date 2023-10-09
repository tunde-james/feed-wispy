import Image from "next/image";
import Link from "next/link";

function LoginPage() {
  return (
    <main className="items center flex h-[calc(100vh-6rem)] justify-center p-4 md:h-[calc(100vh-9rem)]">
      {/* Box */}
      <section className="flex h-full flex-col rounded-md shadow-2xl md:h-[70%] md:w-full md:flex-row lg:w-[60%] 2xl:w-1/2">
        {/* Image Container */}
        <div className="relative h-1/3 w-full md:h-full md:w-1/2">
          <Image
            src="/loginBg.png"
            alt=""
            fill
            className="object-cover"
          />
        </div>

        {/* Form Container */}
        <div className="flex flex-col gap-8 p-10 md:w-1/2">
          <h1 className="text-xl font-bold xl:text-3xl">Welcome</h1>
          <p>Log into your account or create a new one using social buttons</p>
          <button className="flex gap-4 rounded-md p-4 ring-1 ring-orange-100">
            <Image
              src="/google.png"
              alt=""
              width={20}
              height={20}
              className="object-contain"
            />
            <span>Sign in with Google</span>
          </button>
          <button className="flex gap-4 rounded-md p-4 ring-1 ring-orange-100">
            <Image
              src="/facebook.png"
              alt=""
              width={20}
              height={20}
              className="object-contain"
            />
            <span>Sign in with Facebook</span>
          </button>

          <p className="text-sm">
            Have a problem?{" "}
            <Link href="/" className="underline">
              Contact us
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}

export default LoginPage;
