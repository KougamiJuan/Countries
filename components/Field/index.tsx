export default function Field({
  title,
  value,
}: {
  title: string
  value: string | string[]
}) {
  return (
    <div className="my-1 flex whitespace-pre text-sm">
      <p className="font-semibold capitalize">{title}: </p>
      <p className="font-light">{value}</p>
    </div>
  )
}
