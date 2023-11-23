/** @format */

"use client";

import { useState } from "react";
import EndpointPicker from "./EndpointPicker";
import InputsController from "./InputsController";

export type Endpoint = {
  name: string;
  endpoint: string;
  hashAlgo: "SHA384" | "MD5";
};

const endpoints: Endpoint[] = [
  // { name: "REST API - /transaction/register", endpoint: "/register", hashAlgo: "SHA384" },
  // { name: "REST API - /transaction/verify", endpoint: "/verify", hashAlgo: "SHA384" },
  { name: "SOAP 3.2 - /trnRegister", endpoint: "/trnRegister", hashAlgo: "MD5" },
  { name: "SOAP 3.2 - /trnVerify", endpoint: "/trnVerify", hashAlgo: "MD5" },
];

export default function FormController() {
  const [selectedOption, setSelectedOption] = useState<Endpoint>(endpoints[0]);

  return (
    <div className="space-y-4">
      <EndpointPicker options={endpoints} selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
      {(() => {
        switch (selectedOption.endpoint) {
          case "/register":
            return (
              <InputsController
                key={selectedOption.endpoint}
                fields={{
                  sessionId: "text",
                  merchantId: "number",
                  amount: "number",
                  currency: "text",
                  crc: "text",
                }}
                hashAlgo={selectedOption.hashAlgo}
              />
            );
          case "/verify":
            return (
              <InputsController
                key={selectedOption.endpoint}
                fields={{
                  sessionId: "text",
                  orderId: "number",
                  amount: "number",
                  currency: "text",
                  crc: "text",
                }}
                hashAlgo={selectedOption.hashAlgo}
              />
            );
          case "/trnRegister":
            return (
              <InputsController
                key={selectedOption.endpoint}
                fields={{
                  p24_session_id: "text",
                  p24_merchant_id: "number",
                  p24_amount: "number",
                  p24_currency: "text",
                  p24_crc: "text",
                }}
                hashAlgo={selectedOption.hashAlgo}
              />
            );
          case "/trnVerify":
            return (
              <InputsController
                key={selectedOption.endpoint}
                fields={{
                  p24_session_id: "text",
                  p24_order_id: "number",
                  p24_amount: "number",
                  p24_currency: "text",
                  p24_crc: "text",
                }}
                hashAlgo={selectedOption.hashAlgo}
              />
            );
          default:
            return null;
        }
      })()}
    </div>
  );
}
