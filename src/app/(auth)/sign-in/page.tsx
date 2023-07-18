import SignIn from "@/components/SignIn";
import { buttonVariants } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { FC } from "react";

const SignInPage: FC = () => {
  return (
    <div className="absolute inset-0 bg-zinc-50">
      <div className="flex flex-col items-center justify-center h-full max-w-2xl gap-20 mx-auto">
        <Link
          href="/"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "self-start -mt-20"
          )}
        >
          <ChevronLeft className="w-4 h-4 mr-2" />
          Home
        </Link>

        <div className="border border-zinc-200 rounded-md">
          <SignIn />
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
