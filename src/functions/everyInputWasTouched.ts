/** @format */

export function everyInputWasTouched(formState: { [key: string]: boolean }): boolean {
  return Object.values(formState).every((param) => param === true);
}
