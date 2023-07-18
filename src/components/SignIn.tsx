import Link from "next/link";
import UserAuthForm from "@/components/UserAuthForm";

import { Icons } from "@/components/Icons";

const SignIn = () => {
  return (
    <div className="container mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px] bg-white px-8 py-12 rounded-md">
      <div className="flex flex-col space-y-2 text-center">
        <Icons.logo className="w-12 h-12 mx-auto" />
        <h1 className="text-3xl font-semibold tracking-tight">Welcome back</h1>
        <p className="max-w-xs mx-auto">
          By continuing, you are setting up a Breadit account and agree to our
          User Agreement and Privacy Policy.
        </p>
      </div>

      {/* Sign in form */}
      <UserAuthForm />

      {/* Footer */}
      <p className="px-8 text-center text-muted-foreground">
        New to Breadit?{" "}
        <Link
          href="/sign-up"
          className="underline hover:text-brand underline-offset-4"
        >
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default SignIn;
