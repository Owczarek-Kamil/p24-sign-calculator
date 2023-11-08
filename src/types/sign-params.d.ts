/** @format */

export type SignParamsREST = {
  sessionId: string;
  merchantId: number;
  amount: number;
  currency: string;
  crc: string;
  orderId: number;
};

export type SignParamsSOAP = {
  p24_session_id: string;
  p24_merchant_id: number;
  p24_amount: number;
  p24_currency: string;
  p24_crc: string;
  p24_order_id: number;
};
