/* Shared bilingual navigation and source-language safeguards.
 * English source URLs are never presented as Arabic-language originals.
 */
(() => {
  const SOURCES = {
    georgetown:{url:"https://berkleycenter.georgetown.edu/interviews/a-discussion-with-imam-mohamed-magid-executive-imam-of-all-dulles-area-muslim-society-center",en:"A Discussion with Imam Mohamed Magid — Georgetown",ar:"حوار مع الإمام محمد ماجد — جامعة جورجتاون",summaryEn:"A first-person interview about childhood in Sudan, education, coming to America, and community leadership.",summaryAr:"حوار مع الإمام محمد ماجد عن طفولته في السودان وتعليمه وقدومه إلى الولايات المتحدة ومسيرته في خدمة المجتمع.",language:"en"},
    quranpod:{url:"https://www.daliamogahed.com/podcast",en:"Quran Conversations — Dalia Mogahed",ar:"حوارات قرآنية — داليا مجاهد",summaryEn:"The podcast's host page introduces conversations with Imam Mohamed Magid about understanding the Qur'an.",summaryAr:"صفحة التعريف بسلسلة حوارات قرآنية التي تستضيف الإمام محمد ماجد للحديث عن تدبر القرآن ومعانيه.",language:"en"},
    adamsvideo:{url:"https://adamscenter.org/live-tv/",en:"ADAMS Center video archive",ar:"مكتبة تسجيلات مركز آدامز",summaryEn:"An original publisher's media library, with recordings and programs in different languages. Check each video before viewing.",summaryAr:"مكتبة مرئية على الموقع الأصلي لمركز آدامز تضم برامج وتسجيلات بلغات مختلفة. يُرجى التحقق من لغة كل تسجيل قبل مشاهدته.",language:"mixed"},
    rfp:{url:"https://www.rfp.org/leadership_member/imam-mohamed-magid/",en:"Religions for Peace — Leadership profile",ar:"أديان من أجل السلام — السيرة القيادية",summaryEn:"An institutional profile describing Imam Magid's leadership in dialogue and peacebuilding.",summaryAr:"سيرة مؤسسية توضح أدوار الإمام ماجد في الحوار بين الأديان وبناء السلام.",language:"en"},
    byu:{url:"https://www.iclrs.org/blurb/mohamed-hag-magid/",en:"International Center for Law and Religion Studies",ar:"المركز الدولي لدراسات القانون والدين",summaryEn:"A brief institutional biography including selected book titles, leadership roles, and recognition.",summaryAr:"سيرة مؤسسية موجزة تتضمن بعض المؤلفات والأدوار القيادية وأوجه التقدير.",language:"en"},
    elhibribio:{url:"https://www.elhibrifoundation.org/board-of-trustees/mohamed-magid",en:"El-Hibri Foundation — Mohamed Magid",ar:"مؤسسة الحبري — محمد ماجد",summaryEn:"The El-Hibri Foundation's biography, documenting his ISNA presidency and related work.",summaryAr:"السيرة المنشورة لدى مؤسسة الحبري، وتشمل فترة رئاسته للجمعية الإسلامية لأمريكا الشمالية وأعمالاً أخرى.",language:"en"},
    elhibripast:{url:"https://www.elhibrifoundation.org/peaceawards-pastwinners",en:"El-Hibri Peace Prize — past recipients",ar:"جائزة الحبري للسلام — الفائزون السابقون",summaryEn:"The award organization's list confirms Mohamed Magid as the 2017 prize recipient.",summaryAr:"تُدرج الجهة المانحة محمد ماجد ضمن الحاصلين على الجائزة لعام ٢٠١٧.",language:"en"},
    uscirf:{url:"https://www.uscirf.gov/release-statements/uscirf-welcomes-president-joe-bidens-appointment-mohamed-hag-magid-us-commission",en:"USCIRF — Appointment announcement (2022)",ar:"اللجنة الأمريكية للحريات الدينية الدولية — إعلان التعيين (٢٠٢٢)",summaryEn:"The US Commission on International Religious Freedom announced Imam Magid's appointment in August 2022.",summaryAr:"أعلنت اللجنة الأمريكية للحريات الدينية الدولية تعيين الإمام محمد ماجد في أغسطس ٢٠٢٢.",language:"en"},
    families:{url:"https://adamscenter.org/event/prophetic-families-conference-2026-pre-registration/",en:"ADAMS — Prophetic Families Conference 2026",ar:"مركز آدامز — مؤتمر الأسرة النبوية ٢٠٢٦",summaryEn:"Official event details from ADAMS Center for the November 13–15 conference in Sterling, Virginia.",summaryAr:"تفاصيل رسمية من مركز آدامز عن مؤتمر الأسرة النبوية المنعقد من ١٣ إلى ١٥ نوفمبر ٢٠٢٦ في ستيرلينغ بفيرجينيا.",language:"en"},
    prophets:{url:"https://adamscenter.org/event/lives-of-the-prophets-weekly-revival-with-imam-mohamed-magid/",en:"ADAMS — Lives of the Prophets",ar:"مركز آدامز — سلسلة حياة الأنبياء",summaryEn:"The organizer's event listing for Imam Magid's recurring teaching series.",summaryAr:"صفحة الجهة المنظمة للسلسلة التعليمية الأسبوعية التي يقدمها الإمام ماجد عن حياة الأنبياء.",language:"en"},
    adamsprofile:{url:"https://adamscenter.org/imam-mohamed-magid/",en:"ADAMS Center — Scholar profile",ar:"مركز آدامز — سيرة العالم المقيم",summaryEn:"ADAMS Center identifies Imam Magid as its Resident Scholar and summarizes his work.",summaryAr:"يقدم مركز آدامز الإمام محمد ماجد بصفته العالم المقيم، مع نبذة عن أعماله وخدمته للمجتمع.",language:"en"},
    apple:{url:"https://podcasts.apple.com/ca/podcast/mohamed-magid/id1759561111",en:"Apple Podcasts — Mohamed Magid",ar:"آبل بودكاست — محمد ماجد",summaryEn:"A podcast directory listing. Individual episode language and recording dates have not been independently verified.",summaryAr:"فهرس حلقات صوتية على آبل بودكاست. لم تُراجع لغة كل حلقة أو تواريخ تسجيلها بصورة مستقلة.",language:"mixed"},
    reform:{url:"https://reformjudaism.org/author/imam-mohamed-magid",en:"Reform Judaism — author archive",ar:"أرشيف مقالات الإمام محمد ماجد",summaryEn:"The publisher's author archive includes co-authored commentary on interfaith understanding.",summaryAr:"أرشيف المؤلف لدى الناشر، ويضم مقالات مشتركة حول التفاهم بين الأديان.",language:"en"},
    adamsevents:{url:"https://adamscenter.org/events/",en:"ADAMS Center — Events calendar",ar:"مركز آدامز — تقويم الفعاليات",summaryEn:"The organizer's event calendar. Schedules and sessions may change.",summaryAr:"تقويم فعاليات مركز آدامز. قد تتغير مواعيد الفعاليات والجلسات، لذا يُرجى الرجوع للمصدر.",language:"en"}
  };
  const sourceByUrl = Object.fromEntries(Object.entries(SOURCES).map(([id,detail])=>[detail.url,id]));
  const arText = {
    "Home":"الرئيسية","His Life":"السيرة","Scholarship":"العلم","Scholarship & Media":"العلم والمكتبة الإعلامية",
    "Media Library":"المكتبة الإعلامية","Leadership":"القيادة","Events":"الفعاليات","News":"الأخبار","News & Press":"الأخبار والإعلام",
    "A life of faith,":"مسيرة إيمان", "Faith · Knowledge · Service":"الإيمان · العلم · العطاء",
    "His Life":"السيرة","Media":"المرئيات",
    "English":"الإنجليزية",
    "Return to homepage":"العودة إلى الصفحة الرئيسية",
    "Back to Home ↗":"العودة إلى الرئيسية ←","← Return to homepage":"← العودة إلى الرئيسية","← Home":"← الرئيسية",
    "Open the collection ↗":"تصفح المجموعة ↗",
    "Explore his teachings":"استكشف دروسه",
    "Lectures, interviews and published works from their original sources.":"محاضرات ومقابلات ومؤلفات من مصادرها الأصلية.",
    "Explore his teachings":"تصفح دروسه","CHAPTERS":"الفصول",
    "01 · Roots in Sudan":"٠١ · الجذور في السودان","02 · Learning & Purpose":"٠٢ · العلم والغاية",
    "03 · Journey to America":"٠٣ · الرحلة إلى أمريكا","04 · Community & ADAMS":"٠٤ · المجتمع ومركز آدامز",
    "05 · National Leadership":"٠٥ · القيادة الوطنية","06 · Global Dialogue":"٠٦ · الحوار الدولي",
    "07 · The Living Archive":"٠٧ · الأرشيف الحي",
    "Research sources":"مصادر البحث",
    "Public materials used to prepare this concept. Additional verification and approval are required before an official launch.":"مواد منشورة استُخدمت لإعداد هذا التصور، ولا يزال التحقق والموافقة مطلوبين قبل الإطلاق الرسمي.",
    "First-person source · Georgetown ↗":"المصدر الأصلي · جورجتاون ↗",
    "ADAMS Center profile ↗":"سيرة مركز آدامز ↗",
    "Religions for Peace profile ↗":"السيرة في أديان من أجل السلام ↗",
    "Georgetown Berkley Center — Interview (January 2022)":"مركز بيركلي بجامعة جورجتاون — مقابلة (يناير ٢٠٢٢)",
    "ADAMS Center — Resident Scholar profile":"مركز آدامز — سيرة العالم المقيم",
    "Religions for Peace — Leadership profile":"أديان من أجل السلام — السيرة القيادية",
    "International Center for Law and Religion Studies — Biography":"المركز الدولي لدراسات القانون والدين — السيرة",
    "Proposed personal website & living legacy archive · Not yet officially authorized.":"مقترح لموقع شخصي وأرشيف حي؛ لم يحصل بعد على اعتماد رسمي.",
    "Concept proposal for an official website and living legacy archive. Not authorized or endorsed.":"مقترح لموقع رسمي وأرشيف حي، لم تتم الموافقة عليه أو اعتماده بعد.",
    "A LIVING KNOWLEDGE ARCHIVE":"أرشيف معرفي حي",
    "THE LIVING KNOWLEDGE ARCHIVE":"الأرشيف المعرفي الحي",
    "All formats":"جميع الأنواع",
    "Interviews":"مقابلات","Audio & podcasts":"صوتيات وبودكاست","Video":"فيديو","Publications":"مؤلفات","Profiles":"سير مؤسسية",
    "PODCAST":"بودكاست","PODCAST SERIES":"سلسلة بودكاست","INTERVIEW · 2022":"مقابلة · ٢٠٢٢","AUDIO · PODCAST DIRECTORY":"الصوتيات · فهرس البودكاست",
    "VIDEO · COMMUNITY ARCHIVE":"فيديو · أرشيف مجتمعي","PUBLICATION · BIBLIOGRAPHY PENDING":"كتاب · بيانات النشر قيد التحقق",
    "INSTITUTIONAL PROFILE":"سيرة مؤسسية",
    "A Discussion with Imam Mohamed Magid":"حوار مع الإمام محمد ماجد",
    "Quran Conversations":"حوارات قرآنية",
    "Mohamed Magid Audio Collection":"مجموعة تسجيلات محمد ماجد",
    "ADAMS Center Video Archive":"مكتبة فيديو مركز آدامز",
    "Before You Tie the Knot":"قبل عقد القران",
    "Religions for Peace":"أديان من أجل السلام",
    "A Discussion with Imam Mohamed Magid":"حوار مع الإمام محمد ماجد",
    "First-person conversation about his early life, faith, migration, education, and community service.":"حوار شخصي عن النشأة والإيمان والهجرة والتعليم وخدمة المجتمع.",
    "Conversations about reflecting on the Qur'an. Explore the host's podcast index for the available episodes.":"حوارات حول تدبر القرآن. استكشف فهرس الحلقات المنشور لدى المضيفة.",
    "A public podcast listing of recorded talks; episode dates and originals require reconciliation.":"فهرس عام لمحاضرات مسجلة؛ يحتاج توثيق تواريخ الحلقات ومصادرها الأصلية.",
    "A source for public talks and community programming. Individual recordings will be cataloged after review.":"مصدر لمحاضرات وبرامج مجتمعية؛ ستفهرس التسجيلات بعد مراجعتها.",
    "A marriage preparation title attributed to Imam Magid in institutional profiles. Editions, authorship and publisher to be confirmed.":"كتاب عن الاستعداد للزواج، ورد اسمه في السير المؤسسية؛ تفاصيل الطبعة والتأليف والناشر بحاجة إلى توثيق.",
    "Public profile highlighting international dialogue and leadership activities.":"سيرة عامة تسلط الضوء على الحوار الدولي والأنشطة القيادية.",
    "Georgetown Berkley Center ↗":"مركز بيركلي بجامعة جورجتاون ↗",
    "Original podcast website ↗":"موقع البودكاست الأصلي ↗",
    "Apple Podcasts ↗":"آبل بودكاست ↗",
    "ADAMS Center ↗":"مركز آدامز ↗",
    "Institutional bibliography ↗":"قائمة المؤلفات المؤسسية ↗",
    "Original profile ↗":"السيرة الأصلية ↗",
    "View original source ↗":"الاطلاع على المصدر الأصلي ↗",
    "A co-authored article indexed by its original publisher.":"مقال مشترك مفهرس لدى الناشر الأصلي.",
    "Selected external links, not a complete archive.":"روابط مختارة وليست أرشيفاً كاملاً.",
    "No records match these filters.":"لا توجد سجلات مطابقة.",
    "Editorial standards:":"المعايير التحريرية:",
    "These are selected external links, not a claim to represent every article, podcast, lecture, or event. Official authorization, rights review, metadata verification, and carefully reviewed translations remain necessary before a full public archive.":"هذه روابط مختارة من مصادر خارجية، وليست حصرًا لكل المقالات والمحاضرات والفعاليات. يجب الحصول على الاعتماد الرسمي والتحقق من الحقوق والبيانات والترجمات قبل إطلاق الأرشيف.",
    "Research-stage content drawn from named source organizations. Dates and participation should be reconfirmed with organizers. This is not an official announcement channel.":"معلومات أولية من الجهات المنظمة. يجب تأكيد التواريخ والمشاركة مع المنظمين. ليست هذه قناة إعلانات رسمية.",
    "Read organizer's source ↗":"ملخص عربي للمصدر ↗",
    "Selected teaching programs and appearances from official organizer listings. Check the original event pages for final schedules.":"برامج تعليمية وفعاليات منتقاة من صفحات الجهات المنظمة. يُرجى مراجعة المواعيد الرسمية قبل الحضور.",
    "A curated press archive distinguishing official announcements, documented recognitions and independent reporting.":"أرشيف إعلامي منتقى يميز بين البيانات الرسمية والتكريمات الموثقة والتغطيات المستقلة.",
    "Events & Gatherings":"الفعاليات واللقاءات",
    "News & Press":"الأخبار والتغطيات الإعلامية",
    "UPCOMING & HISTORICAL PROGRAMS":"البرامج الحالية والسابقة",
    "MILESTONES & PUBLIC COVERAGE":"محطات وتغطيات إعلامية",
    "Prophetic Families Conference 2026":"مؤتمر الأسرة النبوية ٢٠٢٦",
    "Lives of the Prophets":"حياة الأنبياء",
    "Teachings from Imam al-Ghazali":"دروس من الإمام الغزالي",
    "2017 Peace Education Prize":"جائزة التربية من أجل السلام لعام ٢٠١٧",
    "Appointment to the U.S. Commission on International Religious Freedom":"التعيين في اللجنة الأمريكية للحريات الدينية الدولية",
    "Back to Home":"العودة إلى الرئيسية",
    "His Life ↗":"السيرة ↗","Scholarship & Media ↗":"العلم والمكتبة الإعلامية ↗",
    "Unofficial website proposal pending authorization. Linked materials belong to their original publishers.":"مقترح لموقع غير رسمي قيد الاعتماد. المحتوى المرتبط يعود لناشريه الأصليين.",
    "Explore his journey ↗":"استكشف مسيرته ↗","Explore news & milestones ↗":"الأخبار والمحطات ↗",
    "See the event archive ↗":"تصفح أرشيف الفعاليات ↗",
    "View all resources ↗":"عرض جميع المصادر ↗",
    "Explore the publications index ↗":"تصفح فهرس المنشورات ↗",
    "Browse the collection ↗":"تصفح المجموعة ↗",
    "FROM SUDAN TO NORTHERN VIRGINIA":"من السودان إلى شمال فيرجينيا",
    "FEATURED CONVERSATIONS":"حوارات مختارة",
    "THE JOURNEY CONTINUES":"المسيرة مستمرة",
    "A CONCEPT FOR THE FUTURE":"تصور للمستقبل",
    "FEATURED LIBRARY":"مكتبة مختارة",
    "Explore his leadership ↗":"استكشف قيادته ↗",
    "Discover the fuller story ↗":"اقرأ القصة الكاملة ↗",
    "Read his full biography ↗":"اقرأ سيرته الكاملة ↗",
    "Georgetown interview ↗":"مقابلة جورجتاون ↗",
    "Family":"الأسرة",
    "IMAM MOHAMED MAGID":"الإمام محمد ماجد"
  };
  const pathname = location.pathname.split("/").pop() || "index.html";
  const legacyButton = document.querySelector("#lang,#bio-lang,#resources-lang,#page-lang");
  const useSourcePage = pathname === "source.html";
  let locale = new URLSearchParams(location.search).get("lang")==="ar" ? "ar":"en";
  const originalText = new WeakMap();
  const savedLinks = new WeakMap();
  function translateText(ar) {
    const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
    const nodes=[];
    while(walker.nextNode()) {
      const node=walker.currentNode;
      if(!node.parentElement || /SCRIPT|STYLE|NOSCRIPT/.test(node.parentElement.tagName)) continue;
      nodes.push(node);
    }
    for(const node of nodes){
      if(!originalText.has(node)) originalText.set(node,node.nodeValue);
      const original=originalText.get(node);
      const trimmed=original.trim();
      if(!trimmed || !arText[trimmed]) {if(!ar && original!==node.nodeValue) node.nodeValue=original; continue;}
      const left=original.match(/^\s*/)[0],right=original.match(/\s*$/)[0];
      node.nodeValue=ar ? left+arText[trimmed]+right : original;
    }
  }
  function localHref(href,ar){
    if(href.startsWith("#")) return href;
    const u=new URL(href, location.href);
    if(ar)u.searchParams.set("lang","ar");else u.searchParams.delete("lang");
    return u.pathname.replace(/^\//,"")+u.search+u.hash;
  }
  function updateLinks(ar){
    for(const a of document.querySelectorAll('a[href]')){
      if(!savedLinks.has(a))savedLinks.set(a,{href:a.getAttribute("href"),target:a.getAttribute("target"),rel:a.getAttribute("rel")});
      const original=savedLinks.get(a);
      const href=original.href;
      if(/^https?:\/\//i.test(href)){
        const id=sourceByUrl[href];
        if(ar && id) {
          a.setAttribute("href","source.html?lang=ar&src="+encodeURIComponent(id));
          a.removeAttribute("target");
          a.removeAttribute("rel");
          a.setAttribute("aria-label",(SOURCES[id].ar)+" — ملخص باللغة العربية");
          a.setAttribute("data-source-summary","ar");
        }else{
          a.setAttribute("href",href);
          if(original.target)a.setAttribute("target",original.target);else a.removeAttribute("target");
          if(original.rel)a.setAttribute("rel",original.rel);else a.removeAttribute("rel");
          a.removeAttribute("aria-label");
          a.removeAttribute("data-source-summary");
        }
      }else if(!/^(mailto:|tel:|javascript:)/i.test(href)){
        a.setAttribute("href",localHref(href,ar));
      }
    }
  }
  function updateUrl(ar){
    const u=new URL(location.href);
    if(ar)u.searchParams.set("lang","ar");else u.searchParams.delete("lang");
    history.replaceState(null,"",u.pathname+u.search+u.hash);
  }
  function renderSource(){
    const id=new URLSearchParams(location.search).get("src");
    const s=SOURCES[id];
    if(!s){document.querySelector("#source-title").textContent=locale==="ar"?"مصدر غير معروف":"Unknown source";return;}
    document.querySelector("#source-title").textContent=locale==="ar"?s.ar:s.en;
    document.querySelector("#source-summary").textContent=locale==="ar"?s.summaryAr:s.summaryEn;
    document.querySelector("#source-label").textContent=locale==="ar"?"ملخص باللغة العربية للمصدر المنشور":"Source overview in English";
    document.querySelector("#source-note").textContent=locale==="ar"
      ?"هذا ملخص تعريفي مُعد للمقترح وليس ترجمة رسمية كاملة. المصدر الأصلي قد يكون باللغة الإنجليزية أو بلغات متعددة."
      :"This is an editorial overview, not a complete authorized translation of the publisher's content.";
    const link=document.querySelector("#source-original");
    link.href=s.url;link.target="_blank";link.rel="noopener noreferrer";
    link.textContent=locale==="ar"?(s.language==="mixed"?"فتح المصدر الأصلي (قد يختلف المحتوى لغوياً) ↗":"فتح المصدر الأصلي باللغة الإنجليزية ↗"):"Read the original publisher's page ↗";
    document.querySelector("#source-back").textContent=locale==="ar"?"العودة إلى الموقع ←":"← Back to website";
    document.querySelector("#source-back").href="index.html"+(locale==="ar"?"?lang=ar":"");
  }
  function apply(ar,modifyUrl=true){
    locale=ar?"ar":"en";
    document.documentElement.lang=locale;
    document.documentElement.dir=ar?"rtl":"ltr";
    if(useSourcePage)renderSource();
    else translateText(ar);
    updateLinks(ar);
    if(modifyUrl)updateUrl(ar);
    document.querySelectorAll(".lang-note").forEach(el=>el.remove());
    if(ar) {
      for(const a of document.querySelectorAll("a[data-source-summary='ar']")){
        // Disclose that source details are a summary, not translated original media.
        if(a.querySelector(".lang-note"))continue;
        const note=document.createElement("span");note.className="lang-note";note.textContent=" (ملخص عربي)";
        a.appendChild(note);
      }
    }
  }
  if(useSourcePage){
    const button=document.querySelector("#source-language");
    button.addEventListener("click",()=>{apply(locale!=="ar");button.textContent=locale==="ar"?"English":"العربية";});
    apply(locale==="ar",false);
    button.textContent=locale==="ar"?"English":"العربية";
  }else{
    // Use the page's existing button so its legacy data-i / data-en translation remains active.
    if(legacyButton) {
      legacyButton.addEventListener("click",()=>apply(document.documentElement.lang==="ar"));
      if(locale==="ar"){legacyButton.click();apply(true,false);}
      else apply(false,false);
    }else apply(locale==="ar",false);
  }
})();
