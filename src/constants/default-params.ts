/** @format */

import { SignParamsREST, SignParamsSOAP } from "@/types/sign-params";

export const transactionRegister: Omit<SignParamsREST, "orderId"> = {
  sessionId: "",
  merchantId: 0,
  amount: 0,
  currency: "",
  crc: "",
};

export const transactionVerify: Omit<SignParamsREST, "merchantId"> = {
  sessionId: "",
  orderId: 0,
  amount: 0,
  currency: "",
  crc: "",
};

export const trnRegister: Omit<SignParamsSOAP, "p24_order_id"> = {
  p24_session_id: "",
  p24_merchant_id: 0,
  p24_amount: 0,
  p24_currency: "",
  p24_crc: "",
};

export const trnVerify: Omit<SignParamsSOAP, "p24_merchant_id"> = {
  p24_session_id: "",
  p24_order_id: 0,
  p24_amount: 0,
  p24_currency: "",
  p24_crc: "",
};
