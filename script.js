const menu=document.querySelector('#menu'),nav=document.querySelector('#nav');menu?.addEventListener('click',()=>{const opened=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(opened))});document.querySelectorAll('#nav a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu?.setAttribute('aria-expanded','false')}));const strings={navLife:'سيرته',navTeachings:'العلم',navMedia:'المرئيات',navImpact:'الأثر',navEvents:'الفعاليات',navArchive:'الأرشيف',eyebrow:'عالم · مربٍّ · قائد مجتمعي',heroTitle:'مسيرة في الإيمان والعلم وخدمة المجتمع',heroText:'تعرّف على رحلة الإمام محمد ماجد وعلمه وإسهاماته، من نشأته في السودان إلى عقود من خدمة المجتمعات في أمريكا والعالم.',journeyBtn:'اكتشف مسيرته ↗',teachingsBtn:'اكتشف علمه',heroFoot:'أرشيف حيّ للعلم والقيادة والإرث',storyOverline:'٠١ — سيرته',storyTitle:'جذور راسخة في العلم وخدمة الناس',storyCopy:'نشأ الإمام محمد ماجد في السودان في أسرة ارتبطت بالعلم وخدمة المجتمع، ثم أصبح معلماً وقائداً مجتمعياً في الولايات المتحدة.',storyCopy2:'تجمع مسيرته بين العلم الشرعي والتربية وخدمة المجتمع وبناء جسور التفاهم.',storyLink:'استكشف محطات حياته ↗',sudan:'السودان',sudanDesc:'النشأة والتكوين العلمي على ضفاف النيل.',americaDesc:'الوصول إلى الولايات المتحدة وبداية فصل جديد.',adamsDesc:'بدء مسيرته الطويلة مع مركز آدامز.',isnaDesc:'انتخابه رئيساً للجمعية الإسلامية لأمريكا الشمالية.',teachingOverline:'٠٢ — العلم',teachingTitle:'علم يلهم الحياة اليومية',teachingIntro:'مجموعة متنامية من المحاضرات والمقالات والحوارات والتأملات.',topic1:'القرآن والتدبر',topic2:'الزواج والأسرة',topic3:'الإيمان والتزكية',topic4:'الأخلاق والمجتمع',mediaOverline:'٠٣ — المكتبة الإعلامية',mediaTitle:'استمع. تعلّم. تدبّر.',mediaIntro:'مكتبة منتقاة من التسجيلات والمقابلات والمنشورات المتاحة للجمهور.',impactOverline:'٠٤ — القيادة والأثر',impactTitle:'بناء الجسور وتعزيز المجتمعات',impactText:'تمتد إسهاماته إلى التعليم والقيادة المجتمعية والحوار بين الأديان والخدمة العامة.',impactBtn:'المزيد عن مسيرته القيادية ↗',eventOverline:'٠٥ — الفعاليات',eventTitle:'تبادل العلم وتقوية الروابط',eventText:'مساحة للفعاليات القادمة وتوثيق المناسبات السابقة، مع روابط الجهات المنظمة.',archiveOverline:'٠٦ — الإرث الحي',archiveTitle:'نحفظ الماضي ونلهم المستقبل',archiveText:'الرؤية هي بناء أرشيف موثق باللغتين العربية والإنجليزية يضم المحاضرات والمقالات والصور ومحطات الحياة.',archiveNote:'يوضح هذا النموذج الاتجاه البصري ومجموعة مختارة من المصادر، أما الأرشيف الكامل وحقوق الصور ومراجعة المحتوى فهي مراحل لاحقة.',archive1:'السيرة والخط الزمني',archive2:'الدروس والمنشورات',archive3:'الصور والذكريات',closingTitle:'إرث من العلم ومستقبل من العطاء',closingText:'دعوة لاكتشاف أعمال الإمام محمد ماجد وحفظها ومشاركتها.',contactBtn:'بيانات التواصل بعد الموافقة'};Object.assign(strings,{
storyFeatureTag:'القصة وراء المسيرة',
storyFeatureTitle:'طفولة تشكّلت بالعلم والرحمة',
storyFeature1:'في مقابلة مع جامعة جورجتاون عام ٢٠٢٢، تحدث الإمام ماجد عن نشأته في قرية على النيل، وعن تقدير الناس للتعليم رغم محدودية الموارد، وعن أسرة جمعت بين تعليم الدين وخدمة المحتاجين.',
storyFeature2:'بدأت رحلته إلى أمريكا عندما سافر والده للعلاج، ثم درس علم الاجتماع وعلم النفس في جامعة ميريلاند والتحق بمركز آدامز عام ١٩٩٧.',
storyFeatureLink:'اقرأ القصة الكاملة ↗',
publicationTag:'من أعماله العلمية',
publicationTitle:'أفكار تتجاوز حدود المحاضرة',
publicationIntro:'تتناول أعماله المنشورة إعداد الأسرة وتدبر القرآن والإيمان والأخلاق والمسؤولية الاجتماعية. هذه عناوين واردة في سير مؤسسية وتحتاج تفاصيل نشرها إلى التحقق.',
publicationLink:'تصفح فهرس المنشورات ↗',
book1Desc:'دليل لإعداد المقبلين على الزواج، وارد في قوائم المنشورات المؤسسية.',
book2Desc:'عنوان وارد في السير المنشورة للإمام ماجد.',
book3Desc:'ورد في بعض المصادر المؤسسية، وتحتاج بيانات الناشر والتأليف والطبعة إلى التحقق.',
impactEvidenceTag:'محطات مختارة',
impactEvidence1:'رئاسة الجمعية الإسلامية لأمريكا الشمالية وفق سيرة مؤسسة الحبري',
impactEvidence2:'جائزة الحبري للتربية من أجل السلام',
impactEvidence3:'التعيين في لجنة الحريات الدينية الدولية الأمريكية'
});
Object.assign(strings,{scholarFeatureLabel:'استكشف المجموعة',scholarFeatureTitle:'مكتبة من الدروس والحوارات والتأملات',scholarFeatureDesc:'تعرّف على المحاضرات المسجلة والمقابلات والبودكاست والمنشورات المختارة في فهرس منظم.',scholarFeatureAction:'تصفح المكتبة ↗',topicDetail1:'فهم الوحي وتدبر معانيه',topicDetail2:'بناء علاقات صحية وحياة أسرية مستقرة',topicDetail3:'تزكية النفس وتنمية الإيمان والغاية',topicDetail4:'الخدمة والرحمة وبناء التفاهم'});
Object.assign(strings,{
journeyNoteTag:'من سيرته كما رواها',
journeyNoteTitle:'طفولة شكلها العلم وخدمة الناس',
journeyNoteText:'في حوار مع جامعة جورجتاون، روى الإمام ماجد ذكرياته عن النشأة على ضفاف النيل، وتأثير علم والده، والظروف التي جاءت بأسرته إلى أمريكا.',
journeyNoteLink:'اقرأ السيرة الكاملة ↗︎',
mediaVisualTag:'سلسلة حوارات مختارة',
mediaVisualFoot:'بودكاست · المصدر الأصلي',
mediaMoreLabel:'المزيد من المصادر',
mediaMoreText:'هل تبحث عن مقالات أو مؤلفات أو تسجيلات أخرى؟ اكتشف فهرساً متنامياً من المصادر الموثقة.',
mediaMoreAction:'تصفح المجموعة الكاملة ↗︎',
pastConference:'مؤتمر حديث · مركز آدامز'
});
const original=new Map([...document.querySelectorAll('[data-i]')].map(el=>[el,el.innerHTML]));let ar=false;document.querySelector('#lang')?.addEventListener('click',()=>{ar=!ar;document.documentElement.lang=ar?'ar':'en';document.documentElement.dir=ar?'rtl':'ltr';document.querySelector('#lang').textContent=ar?'English':'العربية';for(const [el,english] of original){el.innerHTML=ar?(strings[el.dataset.i]||english):english}});const contact=document.getElementById('contactBtn');contact?.addEventListener('click',e=>{e.preventDefault();alert(ar?'ستتاح بيانات التواصل بعد الاعتماد الرسمي.':'Contact details will be added after official authorization.')});