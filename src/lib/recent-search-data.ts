export type RecentSearchRow = {
  srno: number
  customerid: string
  msisdn: string
  sim: string
  searchedBy: string
}

export const recentSearchDataColumns: {
  label: string
  key: keyof RecentSearchRow
}[] = [
  { label: "Sr No", key: "srno" },
  { label: "Customer ID", key: "customerid" },
  { label: "MSISDN", key: "msisdn" },
  { label: "SIM", key: "sim" },
  { label: "Searched By", key: "searchedBy" },
]

export const recentSearchData: RecentSearchRow[] = [
  {
    srno: 1,
    customerid: "10546",
    msisdn: "332-280-1461",
    sim: "89012802331621200034",
    searchedBy: "System",
  },
]