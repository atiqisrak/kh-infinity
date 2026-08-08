export function getProductTheme(isImport: boolean) {
  const primaryColor = isImport ? 'green' : 'orange'
  return {
    primaryColor,
    textColor: primaryColor === 'green' ? 'text-green-600' : 'text-orange-600',
    textColorStrong:
      primaryColor === 'green' ? 'text-green-700' : 'text-orange-700',
    bgColor: primaryColor === 'green' ? 'bg-green-500' : 'bg-orange-500',
    bgColorHover:
      primaryColor === 'green' ? 'bg-green-600' : 'bg-orange-600',
    bgColorLight:
      primaryColor === 'green' ? 'bg-green-50' : 'bg-orange-50',
    borderColor:
      primaryColor === 'green' ? 'border-green-500' : 'border-orange-500',
    iconColor:
      primaryColor === 'green' ? 'text-green-500' : 'text-orange-500',
    iconColorHover:
      primaryColor === 'green' ? 'text-green-600' : 'text-orange-600',
    ringColor:
      primaryColor === 'green' ? 'ring-green-500' : 'ring-orange-500',
  }
}

export type ProductTheme = ReturnType<typeof getProductTheme>
