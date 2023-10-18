// NOTE: this needs to match the insert statement order
const keyOrder = ['id', 'title', 'year', 'rated', 'director', 'plot']

interface MovieRecord {
  id: string;
  title: string;
  year: number;
  rated: string;
  director: string;
  plot: string;
}

const movieRecords: MovieRecord[] = [
  {
      id: "4c1d488e-949c-49f1-941a-babeff2555c4",
      title: "The Godfather",
      year: 1972,
      rated: "",
      director: "",
      plot: ""
  },
  {
      id: "78fdee40-352f-4a3a-8401-bb71eb63f5f5",
      title: "500 Days of Summer",
      year: 2009,
      rated: "",
      director: "",
      plot: ""
  },
  {
      id: "e2b64f14-2997-4c3e-b09d-e8e2b490c8b0",
      title: "Baby Driver",
      year: 2017,
      rated: "",
      director: "",
      plot: ""
  },
  {
      id: "c751ee83-5d57-46b7-b831-0f27af200b83",
      title: "Saving Private Ryan",
      year: 1998,
      rated: "",
      director: "",
      plot: ""
  },
  {
      id: "e7dc6964-225e-498b-a39a-49db4775ed43",
      title: "Interstellar",
      year: 2014,
      rated: "",
      director: "",
      plot: ""
  },
  {
      id: "65f1c9fc-520c-48de-8401-41523d66e6b2",
      title: "Catch me if you can",
      year: 2002,
      rated: "",
      director: "",
      plot: ""
  },
  {
      id: "def8f838-e1c4-488b-b146-f0b159a03b06",
      title: "Silver Linings Playbook",
      year: 2012,
      rated: "",
      director: "",
      plot: ""
  },
  {
      id: "8161aa8a-2e4f-44de-aa2a-436b945bb3e4",
      title: " The Dark Knight",
      year: 2008,
      rated: "",
      director: "",
      plot: ""
  },
  {
      id: "5f0cce0b-0281-48f3-958c-af6020400df9",
      title: "Casino Royale",
      year: 2007,
      rated: "",
      director: "",
      plot: ""
  },
  {
      id: "703f5f1c-53c0-44a5-a3ce-f9eff01d9fd9",
      title: "Forrest Gump",
      year: 1994,
      rated: "PG-13",
      director: "",
      plot: ""
  },
  {
      id: "50804960-877b-4a17-ae35-a5b3dd6414b1",
      title: "The Devil Wears Prada",
      year: 2006,
      rated: "",
      director: "",
      plot: ""
  },
  {
      id: "eb02d851-82f7-4458-a633-df5fe5d8a274",
      title: "American History X",
      year: 1998,
      rated: "R",
      director: "",
      plot: ""
  },
  {
      id: "1fed00a7-ee12-4947-b6d8-c0e148a6b199",
      title: "The Prestige",
      year: 2006,
      rated: "",
      director: "",
      plot: ""
  },
  {
      id: "4a4efabd-138e-4534-8a06-4430361d28f1",
      title: "Donnie Darko",
      year: 2001,
      rated: "",
      director: "",
      plot: ""
  },
  {
      id: "43833943-8a9f-4d82-b1ad-3c0283b60638",
      title: "A League of Their Own",
      year: 1992,
      rated: "",
      director: "",
      plot: ""
  },
  {
      id: "fc0e3d5c-08bd-481b-ae80-45394958c408",
      title: "Zodiac",
      year: 2007,
      rated: "",
      director: "",
      plot: ""
  },
  {
      id: "33c1dda4-48c5-4c79-8299-dd7b5b7b0a97",
      title: "The Shawshank Redemption",
      year: 1994,
      rated: "R",
      director: "",
      plot: ""
  },
  {
      id: "bbc622a7-63ce-4f17-8667-98292dde831f",
      title: "Fight Club",
      year: 1999,
      rated: "",
      director: "",
      plot: ""
  },
  {
      id: "cead6c80-e3c1-4674-8a4a-f86e8db00c41",
      title: "The Matrix",
      year: 1999,
      rated: "",
      director: "",
      plot: ""
  },
  {
      id: "68f2338f-f09a-4855-9bd1-dba9eb31c041",
      title: "Inception",
      year: 2010,
      rated: "PG-13",
      director: "",
      plot: ""
  },
  {
      id: "24ba365f-fa51-45ad-8595-30c82658d6f8",
      title: "Goodfellas",
      year: 1990,
      rated: "",
      director: "",
      plot: ""
  },
  {
      id: "f02cc5e3-752d-4286-8a19-f73caad6c277",
      title: "It's a Wonderful Life",
      year: 1946,
      rated: "",
      director: "",
      plot: ""
  },
  {
      id: "2e46cbd8-5846-4a3d-8fc7-9f63de2915ac",
      title: "The Silence of the Lambs",
      year: 1991,
      rated: "",
      director: "",
      plot: ""
  },
  {
      id: "2e84c6da-6178-48ad-82c6-27ab7f450680",
      title: "Back to the Future",
      year: 1985,
      rated: "",
      director: "",
      plot: ""
  },
  {
      id: "d9384ca7-207e-4bfe-8c92-62ff23aa084f",
      title: "The Pianist",
      year: 2002,
      rated: "",
      director: "",
      plot: ""
  },
  {
      id: "7fbf9833-295e-4ea6-a62e-3a8750f2704e",
      title: "The Lion King",
      year: 1994,
      rated: "",
      director: "",
      plot: ""
  },
  {
      id: "31a27e1b-5ceb-4760-8a74-ba3f86398213",
      title: "Oppenheimer",
      year: 2023,
      rated: "",
      director: "",
      plot: ""
  },
  {
      id: "d442d526-341f-41db-b468-2d77c7ad4dfb",
      title: "Whiplash",
      year: 2014,
      rated: "",
      director: "",
      plot: ""
  },
  {
      id: "873b8d91-10ea-46f7-bc62-7e87b3dbaf43",
      title: "Casablanca",
      year: 1946,
      rated: "",
      director: "",
      plot: ""
  },
  {
      id: "6a108488-5390-4804-9eda-d6c4fb1eb34a",
      title: "The Shining",
      year: 1980,
      rated: "",
      director: "",
      plot: ""
  },
  {
      id: "bd2a9bb0-032c-484e-9346-70d769cd2365",
      title: "American Beauty",
      year: 1999,
      rated: "",
      director: "",
      plot: ""
  },
  {
      id: "e72e4a24-2e85-45a2-b83b-ca68b111d0c5",
      title: "Inglorious Basterds",
      year: 2009,
      rated: "",
      director: "",
      plot: ""
  },
  {
      id: "cc39cd23-bf72-46c1-977a-09f116172e74",
      title: "Amadeus",
      year: 1984,
      rated: "",
      director: "",
      plot: ""
  },
  {
      id: "61d1991d-8e79-44fb-8f33-908be5734c05",
      title: "Brave Heart",
      year: 1995,
      rated: "",
      director: "",
      plot: ""
  },
  {
      id: "fd5fb65d-2a3a-444d-84d7-12c33d80aef2",
      title: "Good Will Hunting",
      year: 1997,
      rated: "",
      director: "",
      plot: ""
  },
  {
      id: "b49a9371-77b6-499d-b756-75aff8b0f886",
      title: "Eternal Sunshine of the Spotless Mind",
      year: 2004,
      rated: "",
      director: "",
      plot: ""
  },
  {
      id: "d1587379-85ad-4cf2-8c17-9e1b5e9f2b52",
      title: "Reservoir Dogs",
      year: 1992,
      rated: "",
      director: "",
      plot: ""
  },
  {
      id: "0b938666-abb7-4caa-929e-3f27c157d4f0",
      title: "Die Hard",
      year: 1988,
      rated: "",
      director: "",
      plot: ""
  },
  {
      id: "434d9fd0-7bad-4620-b25c-24afba38c8e4",
      title: "1917",
      year: 2019,
      rated: "",
      director: "",
      plot: ""
  },
  {
      id: "12db0052-4142-4e9e-994a-116d2f528d33",
      title: "Batman Begins",
      year: 2005,
      rated: "",
      director: "",
      plot: ""
  },
  {
      id: "2a983386-a83c-47ec-b4ad-2e25c64310d5",
      title: "There Will be Blood",
      year: 2007,
      rated: "",
      director: "",
      plot: ""
  },
  {
      id: "2b877f1b-fd9f-43f1-b253-817c7c5f00ef",
      title: "Casino",
      year: 1995,
      rated: "",
      director: "",
      plot: ""
  },
  {
      id: "9c378fa9-5fe9-4f2d-89b8-fa56cdc337a9",
      title: "The Sixth Sense",
      year: 1999,
      rated: "",
      director: "",
      plot: ""
  },
  {
      id: "08f1e740-a65e-4122-9dd7-906382e86aeb",
      title: "Jurassic Park",
      year: 1993,
      rated: "",
      director: "",
      plot: ""
  },
  {
      id: "ccc6977c-7a80-44aa-838c-81275107ed60",
      title: "No Country for Old Men",
      year: 2007,
      rated: "",
      director: "",
      plot: ""
  },
  {
      id: "2ddf213b-1151-4d77-bcbf-badfcd71465a",
      title: "V for Vendetta",
      year: 2005,
      rated: "",
      director: "",
      plot: ""
  },
  {
      id: "797aa82e-ce87-4540-95a8-ef812f183d34",
      title: "Fargo",
      year: 1996,
      rated: "",
      director: "",
      plot: ""
  },
  {
      id: "2f3444ec-5465-47ec-949a-eb4046689d65",
      title: "Gran Torino",
      year: 2008,
      rated: "",
      director: "",
      plot: ""
  },
  {
      id: "f6dbd8ac-18d1-4085-9d67-2415220856aa",
      title: "Dead Poets Society",
      year: 1989,
      rated: "",
      director: "",
      plot: ""
  },
  {
      id: "3489d52f-f92e-4d6a-9970-bd59db7258c5",
      title: "Jaws",
      year: 1975,
      rated: "",
      director: "",
      plot: ""
  },
  {
      id: "9e2f7423-873c-4310-9acb-5ca9312efb0a",
      title: "Ford v Ferrari",
      year: 2019,
      rated: "",
      director: "",
      plot: ""
  },
  {
      id: "c409394c-84a2-4311-9cf8-5c2ee56eb314",
      title: "The Terminator",
      year: 1984,
      rated: "",
      director: "",
      plot: ""
  },
  {
      id: "e0c0b807-eb28-4819-9c30-37f248fca045",
      title: "Stand by Me",
      year: 1986,
      rated: "",
      director: "",
      plot: ""
  },
  {
      id: "b3771c8e-599c-4edc-bf07-a85e26669718",
      title: "The Incredibles",
      year: 2004,
      rated: "",
      director: "",
      plot: ""
  },
  {
      id: "3badcaea-6da0-4146-8c3d-898256c56969",
      title: "Groundhog Day",
      year: 1993,
      rated: "",
      director: "",
      plot: ""
  },
  {
      id: "54baedc0-2d4a-42eb-9385-8bd049a39d71",
      title: "Cool Hand Luke",
      year: 1967,
      rated: "",
      director: "",
      plot: ""
  }
]

const formattedRecords = movieRecords.map(record => {
  const recordGroup: any = []

  keyOrder.forEach(key => {

    const field = record[key as keyof typeof record]
    
    recordGroup.push(field)
  })

  return recordGroup
})

export default formattedRecords
