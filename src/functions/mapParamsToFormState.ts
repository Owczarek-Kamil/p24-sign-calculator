/** @format */

export function mapParamsToFormState(params: { [key: string]: string | number }): { [key: string]: boolean } {
  const formStateObject: { [key: string]: boolean } = {};
  const keys = Object.keys(params);
  keys.map((key) => {
    formStateObject[`${key}WasTouched`] = Boolean(params[key]);
  });

  return formStateObject;
}
