type Props = {
  size?: number;
  className?: string;
};

export default function BookSvgIcon({ size = 16, className }: Props) {
  return (
    <img
      src="/images/open-book-com.svg"
      alt=""
      width={size}
      height={size}
      aria-hidden="true"
      className={`inline-block align-middle shrink-0 ${className ?? ""}`}
    />
  );
}
