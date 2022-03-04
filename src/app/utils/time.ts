export const daysInMonth = (year: number, month: number): number => {
  return new Date(year, month + 1, 0).getDate();
};

export const nextYear = (now: Date, index: number = 0): Date => {
  return new Date(
    now.getFullYear() + index,
    now.getMonth(),
    now.getDate(),
    now.getHours(),
    now.getMinutes(),
    now.getSeconds()
  );
};

export const nextMonth = (now: Date, index: number = 0): Date => {
  const year = now.getFullYear();
  const month = now.getMonth() + index;
  const dayOfMonth = Math.min(now.getDate(), daysInMonth(year, month));
  const date = new Date(
    year,
    month,
    dayOfMonth,
    now.getHours(),
    now.getMinutes(),
    now.getSeconds()
  );
  return date;
};

export const nextDate = (now: Date, index: number = 0): Date => {
  return new Date(now.getTime() + index * 24 * 60 * 60 * 1000);
};

export const nextHour = (now: Date, index: number = 0): Date => {
  return new Date(now.getTime() + index * 60 * 60 * 1000);
};

export const nextMinute = (now: Date, index: number = 0): Date => {
  return new Date(now.getTime() + index * 60 * 1000);
};

export const nextSecond = (now: Date, index: number = 0): Date => {
  return new Date(now.getTime() + index * 1000);
};
