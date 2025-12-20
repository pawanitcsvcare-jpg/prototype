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
    searchedBy: "supadmin",
  },
   {
    srno: 2,
    customerid: "13454",
    msisdn: "332-345-3435",
    sim: "89012802331621200034",
    searchedBy: "supadmin",
  },
   {
    srno: 3,
    customerid: "10546",
    msisdn: "332-280-1461",
    sim: "89012802331621200034",
    searchedBy: "supadmin",
  },
   {
    srno: 4,
    customerid: "10546",
    msisdn: "332-434-1461",
    sim: "89012802331621200034",
    searchedBy: "supadmin",
  },
   {
    srno: 5,
    customerid: "10546",
    msisdn: "332-280-1461",
    sim: "89012802331621200034",
    searchedBy: "supadmin",
  },
   {
    srno: 6,
    customerid: "10546",
    msisdn: "332-654-1461",
    sim: "89012802331621200034",
    searchedBy: "supadmin",
  },
   {
    srno: 7,
    customerid: "10598",
    msisdn: "546-234-1461",
    sim: "89012802331621200034",
    searchedBy: "supadmin",
  },
   {
    srno: 8,
    customerid: "13455",
    msisdn: "765-678-5465",
    sim: "89012802331621200034",
    searchedBy: "supadmin",
  },
     {
    srno: 9,
    customerid: "16767",
    msisdn: "234-756-7654",
    sim: "89012802331621200034",
    searchedBy: "supadmin",
  },
     {
    srno: 10,
    customerid: "14354",
    msisdn: "343-455-6768",
    sim: "89012802331621200034",
    searchedBy: "supadmin",
  },
  
]