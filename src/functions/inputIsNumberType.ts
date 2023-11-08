/** @format */

export function inputIsNumberType(inputName: string): boolean {
  return ["merchantId", "orderId", "amount", "p24_merchant_id", "p24_order_id", "p24_amount"].includes(inputName);
}
