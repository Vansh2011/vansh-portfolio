/** Text-only project row, used for confidential work with no screenshots. */
export function WorkRow({ title, body }: { title: string; body: string }) {
  return (
    <div className="flex flex-wrap gap-x-8 gap-y-2 border-b border-line py-5.5">
      <h4 className="m-0 flex-[1_1_260px] text-[17px] font-semibold">{title}</h4>
      <p className="m-0 min-w-0 flex-[2_1_380px] text-[15px] leading-relaxed text-fg-muted">{body}</p>
    </div>
  );
}
