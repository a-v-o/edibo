export default function FeatureCard({
  Icon,
  header,
  text,
}: {
  Icon: React.ReactNode;
  header: string;
  text: string;
}) {
  return (
    <div className="bg-white drop-shadow-md rounded-3xl flex flex-col gap-3 h-[205px] px-5 py-10">
      <div className="flex flex-row items-center gap-x-2">
        <div className="bg-linkbg flex justify-center items-center rounded-xl p-2 h-10 w-10 text-white">
          {Icon}
        </div>
        <p className="font-bold text-[16px]">{header}</p>
      </div>
      <p className="text-[14px] text-left">{text}</p>
    </div>
  );
}
