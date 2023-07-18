"use client";

import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { Button } from "./ui/Button";

interface CloseModalProps {}

const CloseModal: FC<CloseModalProps> = ({}) => {
  const router = useRouter();

  return (
    <Button
      variant="subtle"
      className="h-10 w-10 p-0 rounded-md"
      onClick={() => router.back()}
    >
      <X aria-label="close modal" className="h-5 w-5" />
    </Button>
  );
};

export default CloseModal;
