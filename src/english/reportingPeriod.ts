export function formatCurrentMonth(date = new Date()) {
  return new Intl.DateTimeFormat("en", {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}

export function formatCurrentYearMonth(date = new Date()) {
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  return `${year}-${month}`;
}

export const currentMonth = formatCurrentMonth();
export const currentYearMonth = formatCurrentYearMonth();
