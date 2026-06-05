/* --- KOMPONENTEN-LADER --- */

function loadComponent(id, url) {
    const placeholder = document.getElementById(id);
    if (!placeholder) return;

    fetch(url)
        .then(response => {
            if (!response.ok) throw new Error("Fehler beim Laden: " + url);
            return response.text();
        })
        .then(data => {
            placeholder.innerHTML = data;
        })
        .catch(error => console.error("Fehler beim Laden:", error));
}

document.addEventListener("DOMContentLoaded", () => {
    loadComponent("header-placeholder", "components/header.html");
    loadComponent("footer-placeholder", "components/footer.html");
    loadComponent("calltoaction-placeholder", "components/call-to-action.html");
    loadComponent("datenschutz-placeholder", "components/datenschutz.html");
});

let lastFocusedElement = null;

function showDialog(modal) {
    if (!modal) return;
    lastFocusedElement = document.activeElement;
    modal.hidden = false;
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
    const focusTarget = modal.querySelector(".close-button, button, a, input, select, textarea");
    if (focusTarget) focusTarget.focus();
}

function hideDialog(modal) {
    if (!modal) return;
    modal.hidden = true;
    modal.style.display = "none";
    document.body.style.overflow = "";
    if (lastFocusedElement && document.contains(lastFocusedElement)) lastFocusedElement.focus();
}

// Seleciona o container pai e o card pelo ID único
const container = document.querySelector('.cards-grid'); // coloque a classe do seu container aqui
const relocationCard = document.getElementById('card-relocation');

if (container && relocationCard) {
    // Move o card para a última posição dentro do container
    container.appendChild(relocationCard);
}
/* Service - Dienstleistung */

function abrirModal(titulo, texto) {
  const modal = document.getElementById('modal-servicos');
  document.getElementById('modal-titulo').innerText = titulo;
  document.getElementById('modal-texto').innerHTML = texto;
  showDialog(modal);
}

function fecharModal() {
  hideDialog(document.getElementById('modal-servicos'));
}

/* Sprachkurs */

const cursoBusinessEnglish = {
  titulo: "Business & Technical English",
  conteudo: `
    <h4>Zielgruppe</h4>
    <p>Führungskräfte und Mitarbeiter kleiner, mittlerer und großer Unternehmen aller Branchen, die Ihre Englischkenntnisse für den beruflichen Gebrauch auffrischen und verbessern möchten sowie alle Personen, die sich weiterbilden und gezielt im Bereich Englisch für Wirtschaft und Technik schulen lassen möchten.</p>

    <h4>Bedarf und Trainingsziel</h4>
    <p>Verhandlungssichere Englischkenntnisse sind heute für den beruflichen Erfolg unabdingbar. In sieben von zehn Unternehmen werden inzwischen Geschäftsvorgänge in einer Fremdsprache abgewickelt.</p>
    <p>Ziel des Trainings ist daher die Vermittlung einer ausreichenden fremdsprachlichen Handlungsfähigkeit der Teilnehmer in den wichtigsten beruflichen Situationen.</p>

    <h4>Trainingsinhalte</h4>
    <p>Der Sprachkurs vermittelt in kompakter und sehr praxisnaher Form die wichtigsten Redewendungen für berufliche Schlüsselsituationen:</p>
    <ul>
      <li>Geschäftsreise & Geschäftsessen</li>
      <li>Messeauftritt & Präsentationen</li>
      <li>Telefonate & Verhandlungen</li>
      <li>Handelskorrespondenz & INCOTERMS</li>
    </ul>

    <h4>Umfang, Termine, Location, Kursgebühren</h4>
    <ul>
      <li><strong>Umfang:</strong> Module von 15-20 Terminen @ 90 min.</li>
      <li><strong>Teilnehmerzahl:</strong> max. 4 Personen</li>
      <li><strong>Ort:</strong> In den Räumen Ihres Unternehmens</li>
      <li><strong>Gebühren:</strong> Je nach Teilnehmerzahl</li>
    </ul>
  `
};


 function abrirDetalhesBusiness() {
    const modal = document.getElementById('modal-servicos');
    document.getElementById('modal-titulo').innerText = cursoBusinessEnglish.titulo;
    document.getElementById('modal-texto').innerHTML = cursoBusinessEnglish.conteudo;
    showDialog(modal);
} 


const cursoSecurityEnglish = {
    titulo: "Basic English für den Sicherheitsdienst (Einsteigerkurs)",
    conteudo: `
      <h4>Zielgruppe</h4>
      <p>Mitarbeiter kleiner, mittlerer und großer Security-Unternehmen, die Ihre Englisch-Grundkenntnisse für den beruflichen Gebrauch auffrischen und verbessern möchten, sowie alle Personen, die sich weiterbilden, umschulen, und gezielt im Bereich Englisch für Sicherheitsfachkräfte, ÖPNV-Begleiter und regionale Zugbegleiter ausbilden lassen möchten.</p>
  
      <h4>Bedarf und Trainingsziel</h4>
      <p>Englische Grundkenntnisse sind heute auch im Securitybereich unabdingbar. Ob am Empfang, im Kontrollraum oder bei Events, am Bahnhof oder im Wachdienst ist es manchmal erforderlich, schnell in Englisch zu reagieren und Informationen weiterzugeben. Ziel des Trainings ist die Vermittlung einer grundlegenden fremdsprachlichen Handlungsfähigkeit.</p>
  
      <h4>Trainingsinhalte</h4>
      <p>Der Sprachkurs für Anfänger (Level A2) vermittelt praxisnahe Redewendungen für Schlüsselsituationen:</p>
      <ul>
        <li>Auskünfte erteilen & Wegbeschreibungen</li>
        <li>Personenbeschreibungen & Hilfe herbeiholen</li>
        <li>Basis-Kommunikation am Telefon, Empfang und im Kontrollraum</li>
        <li>Sicherheitseinweisungen und -anweisungen geben</li>
        <li>Formulare und Merkzettel in Englisch verfassen</li>
        <li>Hinweise geben und auf Gefahren aufmerksam machen</li>
        <li>Durchsagen machen und allgemein für Ordnung sorgen</li>
        <li>Aufsichtspersonal informieren & Schlüssel ausgeben</li>
      </ul>
      <p>Das Training hilft, Sprachbarrieren zu überwinden und kann auch als Modul für Umschulungen (Arbeitsamt) gebucht werden.</p>
  
      <h4>Umfang, Termine, Location, Kursgebühren</h4>
      <ul>
        <li><strong>Umfang:</strong> Module von 15-20 Terminen @ 90 min. (ou nach Absprache)</li>
        <li><strong>Teilnehmerzahl:</strong> max. 4 Personen</li>
        <li><strong>Ort:</strong> In den Räumen Ihres Unternehmens</li>
        <li><strong>Gebühren:</strong> Je nach Teilnehmerzahl</li>
      </ul>
    `
  };

 function abrirDetalhesSecurity() {
    const modal = document.getElementById('modal-servicos');
    document.getElementById('modal-titulo').innerText = cursoSecurityEnglish.titulo;
    document.getElementById('modal-texto').innerHTML = cursoSecurityEnglish.conteudo;
    showDialog(modal);
} 


/* Skripte für das Datenschutz-Modal */
function openDatenschutz() {
    showDialog(document.getElementById("datenschutzModal"));
}

function closeDatenschutz() {
    hideDialog(document.getElementById("datenschutzModal"));
}

document.addEventListener("click", event => {
    const overlay = event.target.closest(".modal");
    if (overlay && event.target === overlay) {
        overlay.id === "datenschutzModal" ? closeDatenschutz() : fecharModal();
    }

    const toggleBtn = event.target.closest("#menu-toggle");
    const nav = document.getElementById("nav-menu");
    if (toggleBtn && nav) {
        const isOpen = nav.classList.toggle("active");
        toggleBtn.classList.toggle("active", isOpen);
        toggleBtn.setAttribute("aria-expanded", String(isOpen));
        toggleBtn.setAttribute("aria-label", isOpen ? "Navigationsmenü schließen" : "Navigationsmenü öffnen");
        return;
    }

    if (nav && nav.classList.contains("active")) {
        const clickedNavLink = event.target.closest("#nav-menu a");
        const clickedOutsideNav = !event.target.closest("#nav-menu");
        if (clickedNavLink || clickedOutsideNav) closeMobileMenu();
    }
});

function closeMobileMenu() {
    const nav = document.getElementById("nav-menu");
    const toggleBtn = document.getElementById("menu-toggle");
    if (!nav || !toggleBtn) return;
    nav.classList.remove("active");
    toggleBtn.classList.remove("active");
    toggleBtn.setAttribute("aria-expanded", "false");
    toggleBtn.setAttribute("aria-label", "Navigationsmenü öffnen");
}

document.addEventListener("keydown", event => {
    const serviceModal = document.getElementById("modal-servicos");
    const privacyModal = document.getElementById("datenschutzModal");
    const openModal = [serviceModal, privacyModal].find(modal => modal && !modal.hidden);

    if (event.key === "Escape") {
        if (serviceModal && !serviceModal.hidden) fecharModal();
        if (privacyModal && !privacyModal.hidden) closeDatenschutz();
        closeMobileMenu();
        return;
    }

    if (event.key !== "Tab" || !openModal) return;
    const focusable = [...openModal.querySelectorAll("button, a[href], input, select, textarea, [tabindex]:not([tabindex='-1'])")];
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
    }
});

const btn = document.getElementById('loadMoreBtn');
const hiddenCards = document.querySelectorAll('.hidden-mobile');

if (btn && hiddenCards.length > 0) {
    btn.addEventListener('click', () => {
        // 1. Alterna a classe 'show-cards' em todos os cards de uma vez
        hiddenCards.forEach(card => card.classList.toggle('show-cards'));

        // 2. Verifica se o primeiro card está ativo para mudar o texto do botão
        const isActive = hiddenCards[0].classList.contains('show-cards');
        btn.setAttribute('aria-expanded', String(isActive));
        
        // 3. Atualiza o texto e faz o scroll se necessário
        if (isActive) {
            btn.textContent = 'Weniger anzeigen';
        } else {
            btn.textContent = 'Mehr anzeigen';
            btn.scrollIntoView({ behavior: 'smooth' });
        }
    });
}



