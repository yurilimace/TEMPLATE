export function getFromLocalStorage<T extends object>(value: string): T | null {
  const result = localStorage.getItem(value);
  try {
    if (typeof result === "string") {
      return JSON.parse(result);
    }
  } catch {}

  return null;
}
