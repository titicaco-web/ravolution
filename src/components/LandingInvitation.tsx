import { useEffect, useState, type FormEvent } from "react";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/i18n/LanguageContext";
import { useLangPath } from "@/hooks/use-lang-path";
import { invitationSchema, platformOptions, supportOptions } from "@/lib/invitation-schema";
import { sendInvitation } from "@/lib/invitation.functions";
import { invitationCopy } from "./invitation-copy";

export default function LandingInvitation() {
  const { language } = useLanguage();
  const lp = useLangPath();
  const c = invitationCopy[language];
  const [open, setOpen] = useState(false);
  const [interest, setInterest] = useState("invest");
  const [platforms, setPlatforms] = useState<string[]>([]);
  const [support, setSupport] = useState<string[]>([]);
  const [messages, setMessages] = useState({ invest: "", partner: "", other: "" });
  const [deck, setDeck] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [done, setDone] = useState<{ copySent: boolean } | null>(null);

  useEffect(() => { setOpen(true); }, []);

  const toggle = (value: string, values: string[], update: (next: string[]) => void) => {
    update(values.includes(value) ? values.filter(v => v !== value) : [...values, value]);
  };
  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (sending) return;
    setError("");
    const parsed = invitationSchema.safeParse({
      interest, platforms: interest === "invest" ? platforms : [], support: interest === "partner" ? support : [],
      message: interest === "invest" ? messages.invest : interest === "partner" ? messages.partner : messages.other,
      deck: interest === "partner" ? deck : "", name, company, email, consent, language,
    });
    if (!parsed.success) { setError(c.invalid); return; }
    setSending(true);
    try { const result = await sendInvitation({ data: parsed.data }); setDone({ copySent: result.copySent }); }
    catch { setError(c.error); }
    finally { setSending(false); }
  };

  return <>
    {!open && <Button className="invitation-reopen" onClick={() => setOpen(true)}>{c.involved}<ArrowRight /></Button>}
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="invitation-dialog translate-x-0 translate-y-0" onOpenAutoFocus={event => event.preventDefault()}>
        {done ? <div className="invitation-done">
          <div className="invitation-tick"><Check size={28} /></div>
          <DialogTitle>{c.done}</DialogTitle>
          <DialogDescription>{c.thanks} {done.copySent ? c.copy : ""}</DialogDescription>
          <Button className="invitation-send" onClick={() => setOpen(false)}>{c.close}</Button>
        </div> : <>
          <header>
            <div className="invitation-head"><span className="invitation-mark" aria-hidden="true">R</span><span className="invitation-label">{c.involved}</span></div>
            <DialogTitle className="invitation-title">{c.title}</DialogTitle>
            <DialogDescription className="invitation-intro">{c.intro}</DialogDescription>
          </header>
          <form onSubmit={submit} noValidate>
            <fieldset disabled={sending}>
              <Tabs value={interest} onValueChange={value => { setInterest(value); setError(""); }}>
                <TabsList className="invitation-tabs" aria-label={c.involved}>
                  {["invest", "partner", "other"].map((value, i) => <TabsTrigger className="invitation-tab" key={value} value={value}>{c.tabs[i]}</TabsTrigger>)}
                </TabsList>
                <TabsContent value="invest" className="invitation-panel">
                  <p className="invitation-lead">{c.invest}</p>
                  <div className="invitation-checks">
                    {platformOptions.map((value, i) => <label key={value} className="invitation-choice">
                      <Checkbox checked={platforms.includes(value)} onCheckedChange={() => toggle(value, platforms, setPlatforms)} />
                      <span><strong>{value === "Ravolution AB" ? c.companyChoice : value === "Not sure yet" ? c.unsure : value}</strong><small>{c.descriptions[i]}</small></span>
                    </label>)}
                  </div>
                  <label className="invitation-field" htmlFor="invitation-invest-message">{c.message}</label>
                  <Textarea id="invitation-invest-message" maxLength={3000} value={messages.invest} onChange={event => setMessages({ ...messages, invest: event.target.value })} />
                </TabsContent>
                <TabsContent value="partner" className="invitation-panel">
                  <p className="invitation-lead">{c.partner}</p>
                  <span className="invitation-field">{c.looking}</span>
                  <div className="invitation-checks">{supportOptions.map(value => <label key={value} className="invitation-choice">
                    <Checkbox checked={support.includes(value)} onCheckedChange={() => toggle(value, support, setSupport)} /><strong>{value}</strong>
                  </label>)}</div>
                  <label className="invitation-field" htmlFor="invitation-startup">{c.startup}</label>
                  <Textarea id="invitation-startup" maxLength={3000} value={messages.partner} onChange={event => setMessages({ ...messages, partner: event.target.value })} />
                  <label className="invitation-field" htmlFor="invitation-deck">{c.deck}</label>
                  <Input id="invitation-deck" type="url" maxLength={2048} placeholder="https://…" value={deck} onChange={event => setDeck(event.target.value)} />
                </TabsContent>
                <TabsContent value="other" className="invitation-panel">
                  <p className="invitation-lead">{c.other}</p>
                  <label className="invitation-field" htmlFor="invitation-other-message">{c.message}</label>
                  <Textarea id="invitation-other-message" maxLength={3000} value={messages.other} onChange={event => setMessages({ ...messages, other: event.target.value })} />
                </TabsContent>
              </Tabs>
              <div className="invitation-row">
                <div><label className="invitation-field" htmlFor="invitation-name">{c.name} *</label><Input id="invitation-name" autoComplete="name" required maxLength={100} value={name} onChange={event => setName(event.target.value)} /></div>
                <div><label className="invitation-field" htmlFor="invitation-company">{c.company}</label><Input id="invitation-company" autoComplete="organization" maxLength={150} value={company} onChange={event => setCompany(event.target.value)} /></div>
              </div>
              <label className="invitation-field" htmlFor="invitation-email">{c.email} *</label>
              <Input id="invitation-email" type="email" autoComplete="email" required maxLength={255} placeholder="you@company.com" value={email} onChange={event => setEmail(event.target.value)} />
              <div className="invitation-consent"><Checkbox id="invitation-consent" checked={consent} onCheckedChange={value => setConsent(value === true)} /><label htmlFor="invitation-consent">{c.consent} <a href={lp("/privacy-policy")}>{c.privacy}</a>.</label></div>
              {error && <p className="invitation-error" role="alert">{error}</p>}
              <Button type="submit" className="invitation-send" disabled={sending}>{sending ? <><Loader2 className="animate-spin" />{c.sending}</> : <>{c.send}<ArrowRight /></>}</Button>
              <p className="invitation-foot">{c.foot}</p>
            </fieldset>
          </form>
        </>}
      </DialogContent>
    </Dialog>
  </>;
}