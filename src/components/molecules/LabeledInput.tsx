/** @format */

import { FieldError, FieldValues, UseFormSetError, UseFormClearErrors } from "react-hook-form";
import Input, { InputProps } from "../atoms/Input";
import Label from "./Label";
import InputAlert from "./InputAlert";

export type LabeledInputProps<T extends FieldValues> = InputProps<T> & {
  error: FieldError | undefined;
  setError: UseFormSetError<T>;
  clearErrors: UseFormClearErrors<T>;
};

export default function LabeledInput<T extends FieldValues>({
  id,
  type,
  register,
  setValue,
  error,
  setError,
  clearErrors,
}: LabeledInputProps<T>) {
  return (
    <div className="relative flex flex-col gap-2">
      <Label label={id as string} htmlFor={id as string} />
      <Input<T>
        id={id as keyof T}
        type={type}
        register={register}
        setValue={setValue}
        setError={setError}
        clearErrors={clearErrors}
      />
      {error && error.message && <InputAlert textContent={error.message} />}
    </div>
  );
}
