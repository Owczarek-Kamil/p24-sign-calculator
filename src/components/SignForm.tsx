/** @format */

"use client";

import { useState, useEffect } from "react";
import DecorativeIcon from "./DecorativeIcon";
import FormHeader from "./FormHeader";
import OptionPicker from "./OptionPicker";
import CryptoJS from "crypto-js";

export type Endpoint = {
  name: string;
  endpoint: string;
};

const endpoints: Endpoint[] = [
  { name: "REST API - /transaction/register", endpoint: "/register" },
  { name: "REST API - /transaction/verify", endpoint: "/verify" },
  { name: "SOAP 3.2 - /trnRegister", endpoint: "/trnRegister" },
  { name: "SOAP 3.2 - /trnVerify", endpoint: "/trnVerify" },
];

const transactionRegister = {
  sessionId: "",
  merchantId: 0,
  amount: 0,
  currency: "",
  crc: "",
};

const transactionVerify = {
  sessionId: "",
  orderId: 0,
  amount: 0,
  currency: "",
  crc: "",
};

const trnRegister = {
  p24_session_id: "",
  p24_merchant_id: 0,
  p24_amount: 0,
  p24_currency: "",
  p24_crc: "",
};

const trnVerify = { p24_session_id: "", p24_order_id: 0, p24_amount: 0, p24_currency: "", p24_crc: "" };

const mapParamsToFormState = (params: { [key: string]: string | number }): { [key: string]: boolean } => {
  const formStateObject: { [key: string]: boolean } = {};
  const keys = Object.keys(params);
  keys.map((key) => {
    formStateObject[key] = Boolean(params[key]);
  });

  return formStateObject;
};

export default function SignForm() {
  const [selectedOption, setSelectedOption] = useState<Endpoint>(endpoints[0]);
  const [signParams, setSignParams] = useState<{ [key: string]: string | number }>({ ...transactionRegister });
  const [formState, setFormState] = useState<{ [key: string]: boolean }>(
    mapParamsToFormState({ ...transactionRegister }),
  );

  const changeHanlder: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const givenInput = event.target.name;
    setSignParams((prevState) => ({
      ...prevState,
      [givenInput]: ["merchantId", "orderId", "amount", "p24_merchant_id", "p24_order_id", "p24_amount"].includes(
        givenInput,
      )
        ? Number(event.target.value)
        : event.target.value,
    }));
    setFormState((prevState) => ({ ...prevState, [givenInput]: true }));
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
    <form className="relative min-h-[55rem] w-full max-w-layout rounded-lg bg-color-white px-6 pb-6 pt-11 drop-shadow-xl md:px-10.5 md:pb-10 md:pt-13">
      <DecorativeIcon />
      <FormHeader />
      <OptionPicker options={endpoints} selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
      <p className="mb-4 text-3.25/[1.4615em] font-bold -tracking-[0.181px] text-color-graphite transition-all md:text-3.5/[1.4286em] md:-tracking-[0.194px]">
        Sign Parameters
      </p>
      <div key={selectedOption.endpoint} className="mb-4 flex flex-col gap-4">
        {Object.keys(signParams).map((param) => (
          <input
            key={param}
            placeholder={param}
            name={param}
            onChange={changeHanlder}
            className="rounded px-4 pb-3.5 pt-3.75 text-3.25/[1.4615em] text-color-graphite transition-all placeholder:text-color-ash md:text-3.75/[1.4666em]"
          />
        ))}
      </div>
      <div className="mb-4 space-y-0.75 transition-all md:space-y-0.5">
        <p className="text-3.25/[1.4615em] font-bold -tracking-[0.181px] text-color-graphite transition-all md:text-3.5/[1.4286em] md:-tracking-[0.194px]">
          Control Sum
        </p>
        <p className="break-words text-3.25/[1.4615em] text-color-ash transition-all md:text-3.5/[1.4286em]">
          {["/register", "/verify"].includes(selectedOption.endpoint) && Object.keys(signParams)[0] === "sessionId" && (
            <>{JSON.stringify(signParams)}</>
          )}
          {["/trnRegister", "/trnVerify"].includes(selectedOption.endpoint) &&
            Object.keys(signParams)[0] === "p24_session_id" && <>{Object.values(signParams).join("|")}</>}
        </p>
      </div>
      {Object.values(formState).every((param) => param === true) && (
        <div className="mb-4 space-y-0.75 transition-all md:space-y-0.5">
          <p className="text-3.25/[1.4615em] font-bold -tracking-[0.181px] text-color-graphite transition-all md:text-3.5/[1.4286em] md:-tracking-[0.194px]">
            Sign
          </p>
          <p className="break-words text-3.25/[1.4615em] text-color-ash transition-all md:text-3.5/[1.4286em]">
            {["/register", "/verify"].includes(selectedOption.endpoint) && (
              <>{CryptoJS.SHA384(JSON.stringify(signParams)).toString()}</>
            )}
            {["/trnRegister", "/trnVerify"].includes(selectedOption.endpoint) && (
              <> {CryptoJS.MD5(Object.values(signParams).join("|")).toString()} </>
            )}
          </p>
        </div>
      )}
    </form>
  );
}
