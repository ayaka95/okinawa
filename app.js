(() => {
  const data = JSON.parse(JSON.stringify(window.TRIP_INITIAL_DATA));
  let selectedDay = 1;
  let activePage = "home";
  const $ = id => document.getElementById(id);
  const esc = value => String(value ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  const dateLabel = value => value ? new Date(value+"T00:00:00").toLocaleDateString("ja-JP",{year:"numeric",month:"long",day:"numeric",weekday:"short"}) : "日付未設定";
  function phoneLinks(phone){return String(phone||"").split(/[\/／]/).map(x=>x.trim()).filter(Boolean).map(x=>`<a class="btn-mini" href="tel:${esc(x.replace(/[^\d+]/g,''))}"><i class="bi bi-telephone me-1"></i>${esc(x)}</a>`).join("")}
  function mapLink(address){return address ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}` : ""}
  function switchPage(page){activePage=page;document.querySelectorAll(".page-section").forEach(x=>x.classList.toggle("active",x.id===`page-${page}`));document.querySelectorAll(".nav-item").forEach(x=>x.classList.toggle("active",x.dataset.page===page));window.scrollTo({top:0,behavior:"smooth"});renderAll()}
  function dayPills(target){$(target).innerHTML=[1,2,3,4].map(d=>`<button class="day-pill ${selectedDay===d?"active":""}" data-day="${d}">${d}日目</button>`).join("");$(target).querySelectorAll("[data-day]").forEach(b=>b.addEventListener("click",()=>{selectedDay=Number(b.dataset.day);renderAll()}))}
  function eventCard(e){
    const time=e.time?esc(e.time):"時刻未定";
    const loc=e.address||e.place||"";
    return `<article class="event-card"><div class="event-top"><div class="event-time">${time}</div><div class="flex-grow-1"><div class="d-flex justify-content-between gap-2 align-items-start"><div class="event-title">${esc(e.title||"予定")}</div><span class="category-badge">${esc(e.category||"予定")}</span></div>${e.place?`<div class="event-sub">${esc(e.place)}</div>`:""}${e.duration?`<div class="event-sub"><i class="bi bi-clock me-1"></i>${esc(e.duration)}</div>`:""}${e.cost?`<div class="event-sub"><i class="bi bi-cash-coin me-1"></i>${esc(e.cost)}</div>`:""}</div></div>${e.memo?`<div class="event-sub mt-2">${esc(e.memo)}</div>`:""}<div class="event-actions">${loc?`<a class="btn-mini" href="${mapLink(loc)}" target="_blank" rel="noopener"><i class="bi bi-map me-1"></i>地図</a>`:""}${phoneLinks(e.phone)}</div></article>`;
  }
  function transportCard(t){
    const typeName=({train:"TRAIN",flight:"FLIGHT",bus:"BUS",car:"CAR",other:"OTHER"})[t.type]||"TRANSPORT";
    const hasTimes=t.depart||t.arrive;
    return `<article class="transport-card"><div class="transport-type">${typeName} · ${dateLabel(t.date)}</div><div class="fw-bold mt-1">${esc(t.label)}</div>${hasTimes?`<div class="transport-times"><div><div class="transport-time">${esc(t.depart||"未定")}</div><div class="small text-muted">出発</div></div><i class="bi bi-arrow-right transport-arrow"></i><div><div class="transport-time">${esc(t.arrive||"未定")}</div><div class="small text-muted">到着</div></div></div>`:"<div class='small text-muted mt-2'>時刻未入力</div>"}<div class="transport-route">${esc(t.from||"")} ${t.to?"→ "+esc(t.to):""}</div>${t.route?`<div class="event-sub">${esc(t.route)}</div>`:""}${t.detail?`<div class="detail-row mt-2"><div class="label">詳細</div><div class="value">${esc(t.detail)}</div></div>`:""}${t.cost?`<div class="detail-row"><div class="label">費用</div><div class="value">${esc(t.cost)}</div></div>`:""}${t.memo?`<div class="detail-row"><div class="label">メモ</div><div class="value">${esc(t.memo)}</div></div>`:""}</article>`;
  }
  function placeCard(e){
    return `<article class="place-card"><div class="place-name">${esc(e.title)}</div>${e.address?`<div class="place-address mt-2"><i class="bi bi-geo-alt me-1"></i>${esc(e.address)}</div>`:"<div class='place-address mt-2'>住所未登録</div>"}${e.phone?`<div class="place-actions">${phoneLinks(e.phone)}</div>`:""}${e.address?`<div class="place-actions"><a class="btn-mini" href="${mapLink(e.address)}" target="_blank" rel="noopener"><i class="bi bi-map me-1"></i>地図を開く</a></div>`:""}</article>`;
  }
  function renderHome(){
    const flights=data.transport.filter(t=>t.type==="flight");
    const trains=data.transport.filter(t=>t.type==="train");
    $("quickCards").innerHTML=`
      <div class="col-6"><div class="quick-card"><i class="bi bi-airplane"></i><div class="q-label">飛行機・往路</div><div class="q-value">${esc(flights[0]?.depart||"未設定")} 発</div><div class="small text-muted">${esc(flights[0]?.from||"羽田空港")} → ${esc(flights[0]?.to||"那覇空港")}</div></div></div>
      <div class="col-6"><div class="quick-card"><i class="bi bi-train-front"></i><div class="q-label">最初の電車</div><div class="q-value">${esc(trains[0]?.depart||"未設定")} 発</div><div class="small text-muted">${esc(trains[0]?.from||"出発駅")} → ${esc(trains[0]?.to||"到着駅")}</div></div></div>
      <div class="col-6"><div class="quick-card"><i class="bi bi-house"></i><div class="q-label">宿泊先</div><div class="q-value fs-6">${esc(data.trip.hotel||"未設定")}</div></div></div>
      <div class="col-6"><div class="quick-card"><i class="bi bi-telephone"></i><div class="q-label">緊急連絡先</div><div class="q-value fs-6">${data.trip.emergencyContact?`<a class="text-decoration-none text-dark" href="tel:${esc(data.trip.emergencyContact)}">${esc(data.trip.emergencyContact)}</a>`:"未設定"}</div></div></div>`;
    dayPills("homeDayPills");
    const events=data.itinerary.filter(e=>e.day===selectedDay).sort((a,b)=>(a.time||"99:99").localeCompare(b.time||"99:99"));
    $("homeSchedule").innerHTML=events.length?events.slice(0,5).map(eventCard).join(""):`<div class="empty-state">この日の予定はまだありません。</div>`;
    $("hotelCard").innerHTML=`<div class="hotel-card"><div class="fw-bold">${esc(data.trip.hotel||"宿泊先未設定")}</div><div class="place-address mt-2">〒905-0227 沖縄県国頭郡本部町瀬底1084-4</div><div class="place-actions"><a class="btn-mini" target="_blank" rel="noopener" href="${mapLink("〒905-0227 沖縄県国頭郡本部町瀬底1084-4")}"><i class="bi bi-map me-1"></i>地図</a></div></div>`;
  }
  function renderItinerary(){dayPills("itineraryDayPills");const events=data.itinerary.filter(e=>e.day===selectedDay).sort((a,b)=>(a.time||"99:99").localeCompare(b.time||"99:99"));$("itineraryList").innerHTML=events.length?events.map(eventCard).join(""):`<div class="empty-state">この日の予定はありません。</div>`}
  function renderTransport(){$("transportList").innerHTML=data.transport.length?data.transport.slice().sort((a,b)=>(a.date+a.depart).localeCompare(b.date+b.depart)).map(transportCard).join(""):`<div class="empty-state">移動情報がありません。</div>`}
  function renderPlaces(){const q=$("placeSearch").value.trim().toLowerCase();const places=data.itinerary.filter(e=>e.address||e.phone).filter(e=>`${e.title} ${e.address} ${e.phone}`.toLowerCase().includes(q));$("placesList").innerHTML=places.length?places.map(placeCard).join(""):`<div class="empty-state">該当する施設がありません。</div>`}
  function renderManage(){
    $("budgetList").innerHTML=data.budget.map(b=>`<div class="budget-card"><strong>${esc(b.category)}：${esc(b.item)}</strong><div class="row g-2 mt-1"><div class="col-6"><div class="small text-muted">予定額</div><div>${b.planned!==""&&b.planned!=null?`${esc(b.planned)}円`:"未入力"}</div></div><div class="col-6"><div class="small text-muted">実績額</div><div>${b.actual!==""&&b.actual!=null?`${esc(b.actual)}円`:"未入力"}</div></div></div></div>`).join("");
    const done=data.packing.filter(p=>p.done).length;$("packingCount").textContent=`${done}/${data.packing.length} 準備済み`;
    $("packingList").innerHTML=data.packing.map(p=>`<div class="check-row ${p.done?"done":""}"><i class="bi ${p.done?"bi-check-circle-fill":"bi-circle"} text-teal" aria-hidden="true"></i><span>${esc(p.name)}</span></div>`).join("");
  }
  function renderAll(){if(activePage==="home")renderHome();if(activePage==="itinerary")renderItinerary();if(activePage==="transport")renderTransport();if(activePage==="places")renderPlaces();if(activePage==="manage")renderManage()}
  document.addEventListener("click",e=>{
    const nav=e.target.closest("[data-page]");if(nav){switchPage(nav.dataset.page);return}
    const go=e.target.closest("[data-go]");if(go)switchPage(go.dataset.go);
  });
  $("placeSearch").addEventListener("input",renderPlaces);
  renderAll();
})();
