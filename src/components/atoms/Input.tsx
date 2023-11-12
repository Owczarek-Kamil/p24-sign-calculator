/** @format */

import {
  FieldValues,
  UseFormRegister,
  Path,
  UseFormSetValue,
  UseFormSetError,
  UseFormClearErrors,
} from "react-hook-form";

export type FormFields = {
  [key: string]: string | number;
};

export type InputProps<T extends FormFields> = {
  id: keyof T;
  type: "text" | "number";
  register: UseFormRegister<T>;
  setValue: UseFormSetValue<T>;
  setError: UseFormSetError<T>;
  clearErrors: UseFormClearErrors<T>;
};

export default function Input<T extends FieldValues>({
  id,
  type,
  register,
  setValue,
  setError,
  clearErrors,
}: InputProps<T>) {
  return (
    <input
      {...register(id as Path<T>, {
        pattern: {
          value: /^[^\s]*$/,
          message: "Input contains whitespace",
        },
      })}
      id={id as string}
      placeholder={id as string}
      type={type}
      onInput={(e) => {
        const { value, valueAsNumber } = e.target as HTMLInputElement;

        setTimeout(() => {
          const hasNoWhitespace = /^[^\s]*$/.test(value);
          if (hasNoWhitespace) {
            clearErrors(id as Path<T>);
          } else {
            setError(id as Path<T>, { type: "pattern", message: "Input contains whitespace" });
            return;
          }

          if (value === "" && type === "number") {
            setError(id as Path<T>, { type: "custom", message: "Provided value does not satisfy number type" });
            return;
          }

          if (value !== "") {
            clearErrors(id as Path<T>);

            if (type === "number") {
              if (!isNaN(valueAsNumber)) {
                setValue(id as Path<T>, valueAsNumber as T[typeof id]);
              } else {
                setValue(id as Path<T>, parseFloat(value) as T[typeof id]);
              }
            }

            if ((id === "currency" || id === "p24_currency") && !/^[A-Z]{3}$/.test(value)) {
              setError(id as Path<T>, { type: "pattern", message: "Input should be exactly 3 uppercase letters" });
              return;
            }
          }
        }, 0);
      }}
      className="w-full appearance-none rounded bg-color-pearl px-4 pb-3.5 pt-3.75 text-3.25/[1.4615em] text-color-graphite outline-none transition-all placeholder:text-color-ash focus-visible:outline-color-purple md:text-3.75/[1.4666em]"
    />
  );
}
