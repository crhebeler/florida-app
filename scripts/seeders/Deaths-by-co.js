const mongoose = require("mongoose");
const db = require("../../models");

// This file empties the Deaths collection and inserts the deaths data below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/location_db"
);

const DeathsSeed = [{
    "2008": "1,635",
    "2009": "1,685",
    "2010": "1,717",
    "2011": "1,723",
    "2012": "1,703",
    "2013": "1,799",
    "2014": "1,832",
    "2015": "1,882",
    "2016": "1,946",
    "2017": "1,936",
    "County": "Alachua",
    "2018 (So far this year)": "1,009",

  },
  {
    "2008": 236,
    "2009": 213,
    "2010": 230,
    "2011": 222,
    "2012": 235,
    "2013": 228,
    "2014": 213,
    "2015": 236,
    "2016": 247,
    "2017": 270,
    "County": "Baker",
    "2018 (So far this year)": 131,
    "": ""
  },
  {
    "2008": "1,533",
    "2009": "1,599",
    "2010": "1,622",
    "2011": "1,559",
    "2012": "1,633",
    "2013": "1,808",
    "2014": "1,897",
    "2015": "1,866",
    "2016": "1,923",
    "2017": "2,060",
    "County": "Bay",
    "2018 (So far this year)": "1,022",
    "": ""
  },
  {
    "2008": 281,
    "2009": 308,
    "2010": 270,
    "2011": 268,
    "2012": 278,
    "2013": 292,
    "2014": 288,
    "2015": 300,
    "2016": 311,
    "2017": 345,
    "County": "Bradford",
    "2018 (So far this year)": 164,
    "": ""
  },
  {
    "2008": "5,711",
    "2009": "5,757",
    "2010": "6,027",
    "2011": "6,117",
    "2012": "6,260",
    "2013": "6,481",
    "2014": "6,693",
    "2015": "6,945",
    "2016": "7,313",
    "2017": "7,604",
    "County": "Brevard",
    "2018 (So far this year)": "3,866",
    "": ""
  },
  {
    "2008": "14,629",
    "2009": "14,335",
    "2010": "14,603",
    "2011": "14,123",
    "2012": "14,299",
    "2013": "14,144",
    "2014": "14,344",
    "2015": "14,654",
    "2016": "15,272",
    "2017": "15,406",
    "County": "Broward",
    "2018 (So far this year)": "7,687",
    "": ""
  },
  {
    "2008": 160,
    "2009": 152,
    "2010": 151,
    "2011": 160,
    "2012": 139,
    "2013": 150,
    "2014": 175,
    "2015": 161,
    "2016": 184,
    "2017": 186,
    "County": "Calhoun",
    "2018 (So far this year)": 103,
    "": ""
  },
  {
    "2008": "2,116",
    "2009": "2,190",
    "2010": "2,249",
    "2011": "2,261",
    "2012": "2,239",
    "2013": "2,355",
    "2014": "2,410",
    "2015": "2,582",
    "2016": "2,563",
    "2017": "2,732",
    "County": "Charlotte",
    "2018 (So far this year)": "1,469",
    "": ""
  },
  {
    "2008": "2,321",
    "2009": "2,308",
    "2010": "2,263",
    "2011": "2,308",
    "2012": "2,342",
    "2013": "2,338",
    "2014": "2,565",
    "2015": "2,546",
    "2016": "2,503",
    "2017": "2,583",
    "County": "Citrus",
    "2018 (So far this year)": "1,440",
    "": ""
  },
  {
    "2008": "1,347",
    "2009": "1,356",
    "2010": "1,392",
    "2011": "1,486",
    "2012": "1,471",
    "2013": "1,589",
    "2014": "1,564",
    "2015": "1,722",
    "2016": "1,749",
    "2017": "1,826",
    "County": "Clay",
    "2018 (So far this year)": 958,
    "": ""
  },
  {
    "2008": "2,707",
    "2009": "2,693",
    "2010": "2,861",
    "2011": "2,871",
    "2012": "2,917",
    "2013": "2,909",
    "2014": "3,062",
    "2015": "3,151",
    "2016": "3,270",
    "2017": "3,508",
    "County": "Collier",
    "2018 (So far this year)": "1,798",
    "": ""
  },
  {
    "2008": 706,
    "2009": 694,
    "2010": 716,
    "2011": 742,
    "2012": 730,
    "2013": 783,
    "2014": 778,
    "2015": 752,
    "2016": 773,
    "2017": 852,
    "County": "Columbia",
    "2018 (So far this year)": 408,
    "": ""
  },
  {
    "2008": "17,989",
    "2009": "17,814",
    "2010": "18,018",
    "2011": "17,992",
    "2012": "18,580",
    "2013": "18,440",
    "2014": "18,846",
    "2015": "19,395",
    "2016": "20,136",
    "2017": "20,575",
    "County": "Miami-Dade",
    "2018 (So far this year)": "10,160",
    "": ""
  },
  {
    "2008": 274,
    "2009": 271,
    "2010": 311,
    "2011": 299,
    "2012": 275,
    "2013": 297,
    "2014": 274,
    "2015": 343,
    "2016": 333,
    "2017": 379,
    "County": "Desoto",
    "2018 (So far this year)": 216,
    "": ""
  },
  {
    "2008": 181,
    "2009": 193,
    "2010": 179,
    "2011": 200,
    "2012": 198,
    "2013": 211,
    "2014": 234,
    "2015": 230,
    "2016": 204,
    "2017": 240,
    "County": "Dixie",
    "2018 (So far this year)": 125,
    "": ""
  },
  {
    "2008": "7,192",
    "2009": "7,102",
    "2010": "6,946",
    "2011": "7,254",
    "2012": "7,266",
    "2013": "7,630",
    "2014": "7,519",
    "2015": "7,815",
    "2016": "8,059",
    "2017": "8,554",
    "County": "Duval",
    "2018 (So far this year)": "4,388",
    "": ""
  },
  {
    "2008": "2,967",
    "2009": "3,024",
    "2010": "2,991",
    "2011": "2,964",
    "2012": "3,086",
    "2013": "3,125",
    "2014": "3,187",
    "2015": "3,311",
    "2016": "3,300",
    "2017": "3,407",
    "County": "Escambia",
    "2018 (So far this year)": "1,746",
    "": ""
  },
  {
    "2008": 972,
    "2009": 940,
    "2010": "1,033",
    "2011": "1,055",
    "2012": "1,163",
    "2013": "1,162",
    "2014": "1,226",
    "2015": "1,224",
    "2016": "1,280",
    "2017": "1,334",
    "County": "Flagler",
    "2018 (So far this year)": 699,
    "": ""
  },
  {
    "2008": 116,
    "2009": 100,
    "2010": 126,
    "2011": 119,
    "2012": 117,
    "2013": 128,
    "2014": 149,
    "2015": 126,
    "2016": 145,
    "2017": 115,
    "County": "Franklin",
    "2018 (So far this year)": 63,
    "": ""
  },
  {
    "2008": 445,
    "2009": 435,
    "2010": 446,
    "2011": 458,
    "2012": 446,
    "2013": 496,
    "2014": 445,
    "2015": 468,
    "2016": 463,
    "2017": 450,
    "County": "Gadsden",
    "2018 (So far this year)": 250,
    "": ""
  },
  {
    "2008": 157,
    "2009": 169,
    "2010": 161,
    "2011": 177,
    "2012": 198,
    "2013": 184,
    "2014": 183,
    "2015": 203,
    "2016": 163,
    "2017": 215,
    "County": "Gilchrist",
    "2018 (So far this year)": 113,
    "": ""
  },
  {
    "2008": 92,
    "2009": 111,
    "2010": 110,
    "2011": 97,
    "2012": 106,
    "2013": 108,
    "2014": 91,
    "2015": 134,
    "2016": 119,
    "2017": 115,
    "County": "Glades",
    "2018 (So far this year)": 66,
    "": ""
  },
  {
    "2008": 172,
    "2009": 169,
    "2010": 144,
    "2011": 156,
    "2012": 205,
    "2013": 154,
    "2014": 195,
    "2015": 172,
    "2016": 183,
    "2017": 195,
    "County": "Gulf",
    "2018 (So far this year)": 102,
    "": ""
  },
  {
    "2008": 127,
    "2009": 113,
    "2010": 120,
    "2011": 128,
    "2012": 140,
    "2013": 138,
    "2014": 153,
    "2015": 143,
    "2016": 130,
    "2017": 177,
    "County": "Hamilton",
    "2018 (So far this year)": 81,
    "": ""
  },
  {
    "2008": 211,
    "2009": 193,
    "2010": 204,
    "2011": 200,
    "2012": 195,
    "2013": 180,
    "2014": 227,
    "2015": 201,
    "2016": 229,
    "2017": 224,
    "County": "Hardee",
    "2018 (So far this year)": 117,
    "": ""
  },
  {
    "2008": 283,
    "2009": 296,
    "2010": 289,
    "2011": 247,
    "2012": 242,
    "2013": 285,
    "2014": 282,
    "2015": 278,
    "2016": 311,
    "2017": 291,
    "County": "Hendry",
    "2018 (So far this year)": 181,
    "": ""
  },
  {
    "2008": "2,446",
    "2009": "2,492",
    "2010": "2,421",
    "2011": "2,491",
    "2012": "2,493",
    "2013": "2,456",
    "2014": "2,437",
    "2015": "2,599",
    "2016": "2,737",
    "2017": "2,779",
    "County": "Hernando",
    "2018 (So far this year)": "1,491",
    "": ""
  },
  {
    "2008": "1,249",
    "2009": "1,372",
    "2010": "1,447",
    "2011": "1,339",
    "2012": "1,463",
    "2013": "1,480",
    "2014": "1,425",
    "2015": "1,422",
    "2016": "1,574",
    "2017": "1,699",
    "County": "Highlands",
    "2018 (So far this year)": 854,
    "": ""
  },
  {
    "2008": "9,179",
    "2009": "9,197",
    "2010": "9,040",
    "2011": "9,056",
    "2012": "9,436",
    "2013": "9,740",
    "2014": "9,950",
    "2015": "10,319",
    "2016": "10,639",
    "2017": "10,610",
    "County": "Hillsborough",
    "2018 (So far this year)": "5,646",
    "": ""
  },
  {
    "2008": 257,
    "2009": 221,
    "2010": 263,
    "2011": 232,
    "2012": 249,
    "2013": 250,
    "2014": 248,
    "2015": 273,
    "2016": 258,
    "2017": 242,
    "County": "Holmes",
    "2018 (So far this year)": 155,
    "": ""
  },
  {
    "2008": "1,734",
    "2009": "1,719",
    "2010": "1,709",
    "2011": "1,751",
    "2012": "1,752",
    "2013": "1,802",
    "2014": "2,033",
    "2015": "1,966",
    "2016": "2,071",
    "2017": "1,983",
    "County": "Indian River",
    "2018 (So far this year)": "1,060",
    "": ""
  },
  {
    "2008": 530,
    "2009": 543,
    "2010": 532,
    "2011": 577,
    "2012": 505,
    "2013": 562,
    "2014": 592,
    "2015": 629,
    "2016": 610,
    "2017": 641,
    "County": "Jackson",
    "2018 (So far this year)": 338,
    "": ""
  },
  {
    "2008": 153,
    "2009": 132,
    "2010": 160,
    "2011": 173,
    "2012": 139,
    "2013": 147,
    "2014": 153,
    "2015": 156,
    "2016": 191,
    "2017": 175,
    "County": "Jefferson",
    "2018 (So far this year)": 78,
    "": ""
  },
  {
    "2008": 76,
    "2009": 72,
    "2010": 68,
    "2011": 78,
    "2012": 72,
    "2013": 75,
    "2014": 58,
    "2015": 68,
    "2016": 75,
    "2017": 96,
    "County": "Lafayette",
    "2018 (So far this year)": 46,
    "": ""
  },
  {
    "2008": "3,305",
    "2009": "3,400",
    "2010": "3,423",
    "2011": "3,337",
    "2012": "3,326",
    "2013": "3,565",
    "2014": "3,722",
    "2015": "3,985",
    "2016": "4,106",
    "2017": "4,367",
    "County": "Lake",
    "2018 (So far this year)": "2,263",
    "": ""
  },
  {
    "2008": "5,675",
    "2009": "5,734",
    "2010": "5,965",
    "2011": "6,012",
    "2012": "5,946",
    "2013": "6,216",
    "2014": "6,489",
    "2015": "6,832",
    "2016": "6,943",
    "2017": "7,505",
    "County": "Lee",
    "2018 (So far this year)": "3,687",
    "": ""
  },
  {
    "2008": "1,573",
    "2009": "1,578",
    "2010": "1,651",
    "2011": "1,619",
    "2012": "1,797",
    "2013": "1,781",
    "2014": "1,750",
    "2015": "1,760",
    "2016": "1,801",
    "2017": "2,010",
    "County": "Leon",
    "2018 (So far this year)": 968,
    "": ""
  },
  {
    "2008": 486,
    "2009": 477,
    "2010": 513,
    "2011": 522,
    "2012": 498,
    "2013": 495,
    "2014": 532,
    "2015": 554,
    "2016": 562,
    "2017": 561,
    "County": "Levy",
    "2018 (So far this year)": 275,
    "": ""
  },
  {
    "2008": 52,
    "2009": 72,
    "2010": 71,
    "2011": 71,
    "2012": 60,
    "2013": 51,
    "2014": 79,
    "2015": 57,
    "2016": 59,
    "2017": 73,
    "County": "Liberty",
    "2018 (So far this year)": 41,
    "": ""
  },
  {
    "2008": 226,
    "2009": 206,
    "2010": 201,
    "2011": 214,
    "2012": 219,
    "2013": 229,
    "2014": 242,
    "2015": 234,
    "2016": 230,
    "2017": 198,
    "County": "Madison",
    "2018 (So far this year)": 116,
    "": ""
  },
  {
    "2008": "3,375",
    "2009": "3,229",
    "2010": "3,361",
    "2011": "3,452",
    "2012": "3,368",
    "2013": "3,498",
    "2014": "3,668",
    "2015": "3,848",
    "2016": "4,047",
    "2017": "4,037",
    "County": "Manatee",
    "2018 (So far this year)": "2,154",
    "": ""
  },
  {
    "2008": "4,147",
    "2009": "4,077",
    "2010": "4,292",
    "2011": "4,423",
    "2012": "4,427",
    "2013": "4,716",
    "2014": "4,621",
    "2015": "4,801",
    "2016": "5,095",
    "2017": "5,112",
    "County": "Marion",
    "2018 (So far this year)": "2,703",
    "": ""
  },
  {
    "2008": "1,695",
    "2009": "1,699",
    "2010": "1,673",
    "2011": "1,674",
    "2012": "1,703",
    "2013": "1,877",
    "2014": "1,851",
    "2015": "1,869",
    "2016": "1,988",
    "2017": "1,992",
    "County": "Martin",
    "2018 (So far this year)": "1,008",
    "": ""
  },
  {
    "2008": 647,
    "2009": 624,
    "2010": 676,
    "2011": 628,
    "2012": 622,
    "2013": 664,
    "2014": 691,
    "2015": 781,
    "2016": 744,
    "2017": 753,
    "County": "Monroe",
    "2018 (So far this year)": 370,
    "": ""
  },
  {
    "2008": 603,
    "2009": 682,
    "2010": 652,
    "2011": 694,
    "2012": 654,
    "2013": 753,
    "2014": 756,
    "2015": 777,
    "2016": 839,
    "2017": 937,
    "County": "Nassau",
    "2018 (So far this year)": 495,
    "": ""
  },
  {
    "2008": "1,471",
    "2009": "1,520",
    "2010": "1,478",
    "2011": "1,531",
    "2012": "1,545",
    "2013": "1,583",
    "2014": "1,679",
    "2015": "1,839",
    "2016": "1,738",
    "2017": "1,862",
    "County": "Okaloosa",
    "2018 (So far this year)": 949,
    "": ""
  },
  {
    "2008": 404,
    "2009": 377,
    "2010": 426,
    "2011": 376,
    "2012": 405,
    "2013": 415,
    "2014": 422,
    "2015": 422,
    "2016": 469,
    "2017": 496,
    "County": "Okeechobee",
    "2018 (So far this year)": 233,
    "": ""
  },
  {
    "2008": "6,696",
    "2009": "6,501",
    "2010": "6,755",
    "2011": "6,716",
    "2012": "7,020",
    "2013": "7,143",
    "2014": "7,214",
    "2015": "7,696",
    "2016": "7,958",
    "2017": "8,196",
    "County": "Orange",
    "2018 (So far this year)": "4,374",
    "": ""
  },
  {
    "2008": "1,553",
    "2009": "1,569",
    "2010": "1,669",
    "2011": "1,686",
    "2012": "1,791",
    "2013": "1,943",
    "2014": "1,958",
    "2015": "2,078",
    "2016": "2,166",
    "2017": "2,406",
    "County": "Osceola",
    "2018 (So far this year)": "1,305",
    "": ""
  },
  {
    "2008": "13,160",
    "2009": "13,000",
    "2010": "12,999",
    "2011": "12,941",
    "2012": "13,234",
    "2013": "13,515",
    "2014": "13,922",
    "2015": "14,431",
    "2016": "14,646",
    "2017": "14,944",
    "County": "Palm Beach",
    "2018 (So far this year)": "7,485",
    "": ""
  },
  {
    "2008": "5,467",
    "2009": "5,319",
    "2010": "5,386",
    "2011": "5,456",
    "2012": "5,527",
    "2013": "5,574",
    "2014": "5,674",
    "2015": "5,891",
    "2016": "6,024",
    "2017": "6,188",
    "County": "Pasco",
    "2018 (So far this year)": "3,347",
    "": ""
  },
  {
    "2008": "11,268",
    "2009": "11,434",
    "2010": "11,282",
    "2011": "11,107",
    "2012": "11,107",
    "2013": "11,340",
    "2014": "11,490",
    "2015": "11,658",
    "2016": "11,840",
    "2017": "12,062",
    "County": "Pinellas",
    "2018 (So far this year)": "6,218",
    "": ""
  },
  {
    "2008": "5,548",
    "2009": "5,621",
    "2010": "5,830",
    "2011": "5,781",
    "2012": "5,962",
    "2013": "6,053",
    "2014": "6,399",
    "2015": "6,652",
    "2016": "6,696",
    "2017": "6,966",
    "County": "Polk",
    "2018 (So far this year)": "3,651",
    "": ""
  },
  {
    "2008": 883,
    "2009": 862,
    "2010": 984,
    "2011": 941,
    "2012": 890,
    "2013": 933,
    "2014": 985,
    "2015": 966,
    "2016": 963,
    "2017": "1,025",
    "County": "Putnam",
    "2018 (So far this year)": 540,
    "": ""
  },
  {
    "2008": "1,432",
    "2009": "1,386",
    "2010": "1,473",
    "2011": "1,466",
    "2012": "1,582",
    "2013": "1,639",
    "2014": "1,790",
    "2015": "1,887",
    "2016": "1,926",
    "2017": "2,018",
    "County": "Saint Johns",
    "2018 (So far this year)": "1,082",
    "": ""
  },
  {
    "2008": "2,580",
    "2009": "2,690",
    "2010": "2,723",
    "2011": "2,702",
    "2012": "2,761",
    "2013": "2,866",
    "2014": "3,009",
    "2015": "3,103",
    "2016": "3,228",
    "2017": "3,262",
    "County": "Saint Lucie",
    "2018 (So far this year)": "1,667",
    "": ""
  },
  {
    "2008": "1,091",
    "2009": "1,171",
    "2010": "1,149",
    "2011": "1,282",
    "2012": "1,205",
    "2013": "1,309",
    "2014": "1,251",
    "2015": "1,343",
    "2016": "1,446",
    "2017": "1,526",
    "County": "Santa Rosa",
    "2018 (So far this year)": 892,
    "": ""
  },
  {
    "2008": "4,996",
    "2009": "4,926",
    "2010": "4,952",
    "2011": "4,913",
    "2012": "5,005",
    "2013": "5,078",
    "2014": "5,265",
    "2015": "5,494",
    "2016": "5,690",
    "2017": "5,641",
    "County": "Sarasota",
    "2018 (So far this year)": "3,025",
    "": ""
  },
  {
    "2008": "2,769",
    "2009": "2,866",
    "2010": "2,845",
    "2011": "2,836",
    "2012": "2,989",
    "2013": "2,976",
    "2014": "3,197",
    "2015": "3,351",
    "2016": "3,431",
    "2017": "3,594",
    "County": "Seminole",
    "2018 (So far this year)": "1,869",
    "": ""
  },
  {
    "2008": "1,013",
    "2009": "1,064",
    "2010": "1,162",
    "2011": "1,237",
    "2012": "1,288",
    "2013": "1,404",
    "2014": "1,530",
    "2015": "1,694",
    "2016": "1,847",
    "2017": "1,921",
    "County": "Sumter",
    "2018 (So far this year)": "1,030",
    "": ""
  },
  {
    "2008": 502,
    "2009": 477,
    "2010": 470,
    "2011": 526,
    "2012": 542,
    "2013": 513,
    "2014": 576,
    "2015": 572,
    "2016": 558,
    "2017": 611,
    "County": "Suwannee",
    "2018 (So far this year)": 267,
    "": ""
  },
  {
    "2008": 245,
    "2009": 213,
    "2010": 214,
    "2011": 219,
    "2012": 249,
    "2013": 234,
    "2014": 242,
    "2015": 253,
    "2016": 280,
    "2017": 238,
    "County": "Taylor",
    "2018 (So far this year)": 160,
    "": ""
  },
  {
    "2008": 231,
    "2009": 181,
    "2010": 199,
    "2011": 183,
    "2012": 176,
    "2013": 221,
    "2014": 223,
    "2015": 253,
    "2016": 234,
    "2017": 240,
    "County": "Union",
    "2018 (So far this year)": 122,
    "": ""
  },
  {
    "2008": "6,040",
    "2009": "5,884",
    "2010": "6,104",
    "2011": "6,018",
    "2012": "6,290",
    "2013": "6,347",
    "2014": "6,695",
    "2015": "6,885",
    "2016": "7,008",
    "2017": "7,445",
    "County": "Volusia",
    "2018 (So far this year)": "3,782",
    "": ""
  },
  {
    "2008": 256,
    "2009": 212,
    "2010": 207,
    "2011": 246,
    "2012": 239,
    "2013": 257,
    "2014": 260,
    "2015": 245,
    "2016": 304,
    "2017": 284,
    "County": "Wakulla",
    "2018 (So far this year)": 148,
    "": ""
  },
  {
    "2008": 541,
    "2009": 494,
    "2010": 523,
    "2011": 516,
    "2012": 518,
    "2013": 568,
    "2014": 578,
    "2015": 576,
    "2016": 636,
    "2017": 669,
    "County": "Walton",
    "2018 (So far this year)": 369,
    "": ""
  },
  {
    "2008": 273,
    "2009": 276,
    "2010": 295,
    "2011": 268,
    "2012": 250,
    "2013": 263,
    "2014": 278,
    "2015": 288,
    "2016": 331,
    "2017": 326,
    "County": "Washington",
    "2018 (So far this year)": 171,
    "": ""
  },
  {
    "2008": 86,
    "2009": 65,
    "2010": 87,
    "2011": 380,
    "2012": 82,
    "2013": 69,
    "2014": 272,
    "2015": 141,
    "2016": 139,
    "2017": 84,
    "County": "Unknown",
    "2018 (So far this year)": 37,
    "": ""
  },
  {
    "2008": "",
    "2009": "",
    "2010": "",
    "2011": "",
    "2012": "",
    "2013": "",
    "2014": "",
    "2015": "",
    "2016": "",
    "2017": "",
    "County": "",
    "2018 (So far this year)": "",
    "": ""
  }
]

db.Deaths
  .remove({})
  .then(() => db.Deaths.collection.insertMany(DeathsSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });