export const validateStreet = (street: string): string | null => {
  if (!street.trim()) {return 'La calle no puede estar vacía'}
  if (street.length < 3) {return 'El nombre de la calle es demasiado corto'}
  return null
}

export const validateStreetNumber = (number: string): string | null => {
  if (!/^[0-9]+$/.test(number)) {return 'El número de calle debe ser un valor numérico'}
  return null
}

export const validateCity = (city: string): string | null => {
  if (!city.trim()) {return 'La ciudad no puede estar vacía'}
  return null
}

export const validatePostalCode = (postalCode: string): string | null => {
  if (!/^[0-9]{4,6}$/.test(postalCode)) {return 'El código postal debe tener entre 4 y 6 dígitos'}
  return null
}

export const validateCuit = (cuit: string): string | null => {
  if (!/^[0-9]{11}$/.test(cuit)) {return 'El CUIT debe tener 11 dígitos numéricos'}
  return null
}

export const validateUserId = (userId: string): string | null => {
  if (!/^[0-9]+$/.test(userId)) {return 'El ID de usuario debe ser numérico'}
  return null
}

export const validateBirthdate = (birthdate: string): string | null => {
  if (!/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(birthdate)) {return 'Formato de fecha inválido (YYYY-MM-DD)'}
  return null
}

export const validatePhone = (phone: string): string | null => {
  if (!/^[0-9]{8,15}$/.test(phone)) {return 'El teléfono debe tener entre 8 y 15 dígitos'}
  return null
}
