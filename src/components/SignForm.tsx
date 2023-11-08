/** @format */

"use client";

import { useState, useEffect } from "react";
import DecorativeIcon from "./DecorativeIcon";
import FormHeader from "./FormHeader";
import OptionPicker from "./OptionPicker";
import SignDisplayer from "./SignDisplayer";
import ControlSumDisplayer from "./ControlSumDisplayer";
import { mapParamsToFormState } from "@/functions/mapParamsToFormState";
import { inputIsNumberType } from "@/functions/inputIsNumberType";
import { everyInputWasTouched } from "@/functions/everyInputWasTouched";
import { transactionRegister, transactionVerify, trnRegister, trnVerify } from "@/constants/default-params";

export type Endpoint = {
  name: string;
  endpoint: string;
  hashAlgo: "SHA384" | "MD5";
};

const endpoints: Endpoint[] = [
  { name: "REST API - /transaction/register", endpoint: "/register", hashAlgo: "SHA384" },
  { name: "REST API - /transaction/verify", endpoint: "/verify", hashAlgo: "SHA384" },
  { name: "SOAP 3.2 - /trnRegister", endpoint: "/trnRegister", hashAlgo: "MD5" },
  { name: "SOAP 3.2 - /trnVerify", endpoint: "/trnVerify", hashAlgo: "MD5" },
];

export default function SignForm() {
  const [selectedOption, setSelectedOption] = useState<Endpoint>(endpoints[0]);
  const [signParams, setSignParams] = useState<{ [key: string]: string | number }>({ ...transactionRegister });
  const [formState, setFormState] = useState<{ [key: string]: boolean }>(
    mapParamsToFormState({ ...transactionRegister }),
  );

  const changeHanlder: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const currentInputName = event.target.name;
    const currentInputValue = event.target.value;

    setSignParams((prevState) => ({
      ...prevState,
      [currentInputName]: inputIsNumberType(currentInputName) ? Number(currentInputValue) : currentInputValue,
    }));
    setFormState((prevState) => ({ ...prevState, [`${currentInputName}WasTouched`]: true }));
  };

  useEffect(() => {
    switch (selectedOption.endpoint) {
      case "/register": {
        setSignParams({ ...transactionRegister });
        setFormState(mapParamsToFormState({ ...transactionRegister }));
        break;
      }
      case "/verify": {
        setSignParams({ ...transactionVerify });
        setFormState(mapParamsToFormState({ ...transactionVerify }));
        break;
      }
      case "/trnRegister": {
        setSignParams({ ...trnRegister });
        setFormState(mapParamsToFormState({ ...trnRegister }));
        break;
      }
      case "/trnVerify": {
        setSignParams({ ...trnVerify });
        setFormState(mapParamsToFormState({ ...trnVerify }));
        break;
      }
      default:
        setSignParams({});
        break;
    }
  }, [selectedOption]);

  return (
    <form className="relative min-h-[51.75rem] w-full max-w-layout rounded-lg bg-color-white px-6 pb-6 pt-11 drop-shadow-xl md:px-10.5 md:pb-10 md:pt-13">
      <DecorativeIcon />
      <FormHeader />
      <OptionPicker options={endpoints} selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
      <p className="mb-4 text-3.25/[1.4615em] font-bold -tracking-[0.181px] text-color-graphite transition-all md:text-3.5/[1.4286em] md:-tracking-[0.194px]">
        Sign Parameters
      </p>
      <div className="mb-4 flex flex-col gap-4">
        {Object.keys(signParams).map((param) => (
          <input
            key={param}
            value={formState[`${param}WasTouched`] ? signParams[param] : ""}
            placeholder={param}
            name={param}
            type={typeof signParams[param] === "string" ? "text" : "number"}
            onChange={changeHanlder}
            className="appearance-none rounded bg-color-pearl px-4 pb-3.5 pt-3.75 text-3.25/[1.4615em] text-color-graphite outline-none transition-all placeholder:text-color-ash focus-visible:outline-color-purple md:text-3.75/[1.4666em]"
          />
        ))}
      </div>
      <ControlSumDisplayer hashAlgo={selectedOption.hashAlgo} signParams={signParams} />
      {everyInputWasTouched(formState) && <SignDisplayer hashAlgo={selectedOption.hashAlgo} signParams={signParams} />}
    </form>
  );
}
