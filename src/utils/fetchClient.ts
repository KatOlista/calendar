import { BASE_URL } from ".";

function request<T>(
  url: string,
): Promise<T> {
  return fetch(BASE_URL + url)
    .then(response => {
      if (!response.ok) {
        throw new Error();
      }

      return response.json();
    });
}

export const client = {
  getHolidays: <T>(url: string) => request<T>(url),
  getCountries: <T>(url: string) => request<T>(url),
};
