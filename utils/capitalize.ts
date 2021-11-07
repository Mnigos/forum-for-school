export const capitalize = (value: string) =>
  value.trim().replace(/^\w/, c => c.toUpperCase())
