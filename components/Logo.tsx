import Image from "next/image";

type Props = {
  className?: string;
  width?: number;
  height?: number;
  variant?: "default" | "light";
  priority?: boolean;
};

export default function Logo({
  className,
  width = 720,
  height = 160,
  variant = "default",
  priority = false,
}: Props) {
  return (
    <Image
      src="/nhboost-logo-couleur.png"
      alt="NHBoost"
      width={width}
      height={height}
      priority={priority}
      className={className}
      data-variant={variant}
    />
  );
}
