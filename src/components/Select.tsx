import { ChangeEvent } from "react";

export default function Select({
  value,
  onChange,
  options,
  label,
  isDisabled,
}: {
  value: number | string;
  label: string;
  options: { value: number | string; name: string }[];
  isDisabled: boolean;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}) {
  return (
    <div className="flex flex-col items-start gap-1">
      <label className="text-xs text-gray-500 ml-1" htmlFor={label}>
        {label}
      </label>
      <select
        disabled={isDisabled}
        className="bg-gray-200 disabled:pointer-events-none rounded-md cursor-pointer hover:bg-gray-200 transition ease-in active:ring-0 active:border-0 p-2 min-w-[200px] sm:min-w-full"
        id={label}
        value={value}
        onChange={onChange}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}
