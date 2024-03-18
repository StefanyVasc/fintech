export function getNDaysAgo(daysAgo: number) {
  // yyyy-mm-dd
  const date = new Date()
  date.setDate(date.getDate() - daysAgo)

  const dd = String(date.getDay()).padStart(2, '0')
  const mm = String(date.getMonth() + 1).padStart(2, '0')
  const yyyy = date.getFullYear()

  const formattedDate = `${yyyy}-${mm}-${dd}`

  return formattedDate
}
