export type JournalBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "lead"; text: string }
  | { type: "quote"; text: string };

export interface JournalArticle {
  slug: string;
  kicker: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  lang: string;
  metaTitle: string;
  metaDescription: string;
  body: JournalBlock[];
}

export const journalArticles: JournalArticle[] = [
  {
    slug: "bizmeet-natverkande-fore-under-efter",
    kicker: "BizMeet",
    title: "Sextio ytliga hälsningar bygger ingenting",
    excerpt:
      "Nätverkande på event är oftast slump med mingel som metod. BizMeet flyttar arbetet dit det hör hemma — före eventet.",
    date: "2026-08-18",
    readingTime: "4 min",
    lang: "sv",
    metaTitle: "Sextio ytliga hälsningar bygger ingenting — BizMeet | Ravolution AB",
    metaDescription:
      "Nätverkande på event är slump med mingel som metod. Så flyttar BizMeet arbetet till före eventet — matchning, bokade samtal och en relation som lever vidare efteråt.",
    body: [
      {
        type: "lead",
        text: "Du står i lokalen med en kaffe i handen. Någonstans i rummet finns de tre personer som skulle kunna förändra ditt kvartal.",
      },
      { type: "p", text: "Du vet inte vilka de är." },
      {
        type: "p",
        text: "Så du gör det alla gör. Presenterar dig för den som står närmast. Utbyter artigheter, kort, ett vagt \u201Dvi hörs\u201D. Går vidare. Efter två timmar har du pratat med elva personer, kommer ihåg fyra — och de tre du faktiskt borde ha träffat gick hem innan mingelpausen.",
      },
      { type: "quote", text: "Det är inte nätverkande. Det är slump, med mingel som metod." },
      { type: "p", text: "BizMeet flyttar arbetet dit det hör hemma: före eventet." },
      { type: "h2", text: "Före" },
      {
        type: "p",
        text: "Du ser vilka som kommer. Inte en deltagarlista i efterhand, utan profiler med roll, bolag och vad personen faktiskt arbetar med just nu. Du markerar de fem du vill träffa. De ser att du vill träffa dem. Är intresset ömsesidigt öppnas kontakten, och ni bokar in ett samtal — i kalendern, före du ens har lämnat kontoret.",
      },
      {
        type: "p",
        text: "Du kommer inte till eventet för att leta. Du kommer dit för att träffa någon du redan har stämt av med.",
      },
      { type: "h2", text: "Under" },
      {
        type: "p",
        text: "Tiden i lokalen slutar handla om att hitta rätt person och börjar handla om samtalet. Du har läst på. Motparten har läst på. Ni börjar i sakfrågan i stället för i \u201Dvad är det du gör, sa du?\u201D.",
      },
      {
        type: "p",
        text: "Skillnaden märks i vad som händer efteråt. Ett samtal som börjar i rätt fråga leder till ett nästa steg. Ett samtal som börjar i artigheter leder till ett visitkort.",
      },
      { type: "h2", text: "Efter" },
      {
        type: "p",
        text: "Det är här de flesta event tar slut, och det är där affärer normalt uppstår. Kontakten finns kvar i plattformen. Diskussionen fortsätter. Innehållet från eventet — samtalen, slutsatserna, materialet — ligger kvar och går att återkomma till, både för dig och för den du träffade.",
      },
      {
        type: "p",
        text: "Relationen har en plats att bo på i stället för i en mejltråd som dör efter tre svar.",
      },
      { type: "h2", text: "Det handlar inte om fler kontakter" },
      { type: "p", text: "Det handlar om färre och rätt." },
      {
        type: "p",
        text: "Sextio ytliga hälsningar bygger ingenting. Tre förberedda samtal med personer som har ett skäl att prata med dig bygger en pipeline. Samma event, samma lokal, samma två timmar — men helt olika utfall.",
      },
      {
        type: "p",
        text: "Vi har byggt BizMeet för att kvaliteten på ett nätverk inte avgörs av hur många som var i rummet, utan av hur många av rätt samtal som faktiskt blev av.",
      },
      {
        type: "p",
        text: "BizMeet är en del av Ravolution Platform. Vill du se hur det fungerar för din community eller ditt eventbolag — hör av dig.",
      },
    ],
  },
];

export const getJournalArticle = (slug?: string) =>
  journalArticles.find((a) => a.slug === slug);
