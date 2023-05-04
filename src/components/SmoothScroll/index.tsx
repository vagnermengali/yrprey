import { useRouter } from "next/router";
import { useEffect } from "react";
import { IChildren } from "@/interfaces/IChildren/IChildren";

const SmoothScroll = ({ children }: IChildren) => {
  const router = useRouter();
  useEffect(() => {
    if (router.asPath !== router.route) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [router.asPath, router.route]);
  return <>{children}</>;
};

export default SmoothScroll;