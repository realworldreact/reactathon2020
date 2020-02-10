export const getJobCompanyId = (company) => {
  if (!company) return null
  return company.toLowerCase().split(' ').join('-')
}
