/** @format */

import { useForm } from "react-hook-form";
import LabeledInput from "../molecules/LabeledInput";
import Hash from "../molecules/Hash";
import ControlSumLabel from "../molecules/ControlSumLabel";

type FormRESTRegisterProps = {
  fields: { [key: string]: "text" | "number" };
  hashAlgo: "SHA384" | "MD5";
};

export default function InputsController({ fields, hashAlgo }: FormRESTRegisterProps) {
  const {
    register,
    watch,
    setValue,
    setError,
    clearErrors,
    formState: { errors, dirtyFields },
  } = useForm({
    defaultValues: Object.keys(fields).reduce((obj: Record<string, string>, key) => {
      obj[key] = "";
      return obj;
    }, {}),
  });

  const values = watch();
  const parsedValues = Object.entries(values).reduce((obj: Record<string, string | number>, [key, value]) => {
    obj[key] = fields[key] === "number" ? parseFloat(value) || "" : value;
    return obj;
  }, {});

  return (
    <>
      {Object.entries(fields).map(([id, type]) => (
        <LabeledInput
          key={id}
          id={id}
          type={type}
          register={register}
          setValue={setValue}
          error={errors[id]}
          setError={setError}
          clearErrors={clearErrors}
        />
      ))}

      <ControlSumLabel signParams={parsedValues} hashAlgo={hashAlgo} />
      <Hash signParams={hashAlgo === "SHA384" ? parsedValues : watch()} hashAlgo={hashAlgo} />
    </>
  );
}
