export default function ContactPage() {
  return (
    <div className="container-narrow py-12">
      <h1 className="section-title">Contact</h1>
      <p className="mt-4 muted">아래 섹션에 Google Form을 연결할 예정입니다. (임시 자리표시)</p>

      <div className="mt-8 rounded-xl border border-dashed border-brand-300 p-6 bg-brand-50/40">
        <p className="text-ink-700">
          Google Forms 삽입 코드(iframe)를 여기에 붙여넣으면 됩니다.
        </p>
        <pre className="mt-3 text-xs bg-white p-3 rounded-md overflow-x-auto">
{`<iframe src="https://docs.google.com/forms/d/e/FORM_ID/viewform?embedded=true" width="100%" height="900" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>`}
        </pre>
        <div className="mt-6">
          <a href="https://forms.gle/" target="_blank" className="inline-block px-4 py-2 rounded-md bg-brand-500 hover:bg-brand-600 text-white font-semibold">Brief me (3문항)</a>
        </div>
      </div>
    </div>
  )
}


