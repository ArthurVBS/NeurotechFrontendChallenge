export const validateName = (name: any) => {
  return String(name)
    .toLowerCase()
    .match(/^[a-zA-Z ]{2,150}$/)
}
