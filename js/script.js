/* --- KOMPONENTEN-LADER MIT AUTOMATISIERUNG --- */

function loadComponent(id, url, callback) {
    fetch(url)
        .then(response => {
            if (!response.ok) throw new Error("Fehler beim Laden: " + url);
            return response.text();
        })
        .then(data => {
            document.getElementById(id).innerHTML = data;
            // Wenn ein Callback existiert (z.B. die Modal-Prüfung), führe ihn jetzt aus
            if (callback) callback();
        })
        .catch(error => console.error("Fehler beim Laden:", error));
}

document.addEventListener("DOMContentLoaded", () => {
    // Standard-Komponenten laden
    loadComponent("header-placeholder", "components/header.html");
    loadComponent("footer-placeholder", "components/footer.html");
    loadComponent("calltoaction-placeholder", "components/call-to-action.html");

    // Datenschutz laden UND prüfen, ob es geöffnet werden soll
    loadComponent("datenschutz-placeholder", "components/datenschutz.html", () => {
        /* LOGIK FÜR DEN ERSTEN BESUCH (Sitzungsprüfung) */
        if (!sessionStorage.getItem('modalSeen')) {
            openDatenschutz(); // Diese Funktion muss in deinem Skript definiert sein
            sessionStorage.setItem('modalSeen', 'true');
        }
    });
});

// Seleciona o container pai e o card pelo ID único
const container = document.querySelector('.cards-grid'); // coloque a classe do seu container aqui
const relocationCard = document.getElementById('card-relocation');

if (container && relocationCard) {
    // Move o card para a última posição dentro do container
    container.appendChild(relocationCard);
}
/* Service - Dienstleistung */

function abrirModal(titulo, texto) {
  document.getElementById('modal-titulo').innerText = titulo;
  document.getElementById('modal-texto').innerHTML = texto;
  document.getElementById('modal-servicos').style.display = "block";
}

function fecharModal() {
  document.getElementById('modal-servicos').style.display = "none";
}

// Fechar se clicar fora da caixa branca
window.onclick = function(event) {
  let modal = document.getElementById('modal-servicos');
  if (event.target == modal) {
    fecharModal();
  }
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
    modal.style.display = 'block';
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
    modal.style.display = 'block';
} 


/* Skripte für das Datenschutz-Modal */

// Funktion zum Öffnen des Modals
function openDatenschutz() {
    const modal = document.getElementById("datenschutzModal");
    if (modal) {
        modal.style.display = "block";
        document.body.style.overflow = "hidden"; // Deaktiviert Scrollen im Hintergrund
    }
}

// Funktion zum Schließen des Modals
function closeDatenschutz() {
    const modal = document.getElementById("datenschutzModal");
    if (modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto"; // Aktiviert Scrollen wieder
    }
}

// Schließen, wenn der Benutzer außerhalb des Modals klickt
window.onclick = function(event) {
    const modal = document.getElementById("datenschutzModal");
    if (event.target == modal) {
        closeDatenschutz();
    }
};

/* MEDIA QUERIES INDEX */
/*
const btn = document.getElementById('loadMoreBtn');
const hiddenCards = document.querySelectorAll('.hidden-mobile');

btn.addEventListener('click', function() {
    // Prüfen, ob die erste versteckte Karte die Klasse 'show-cards' hat
    const isExpanded = hiddenCards[0].classList.contains('show-cards');

    if (!isExpanded) {
        // --- ÖFFNEN (Mehr anzeigen) ---
        hiddenCards.forEach(card => {
            card.classList.add('show-cards');
        });
        btn.textContent = 'Weniger anzeigen'; // Text zu "Weniger" ändern
    } else {
        // --- SCHLIESSEN (Weniger anzeigen) ---
        hiddenCards.forEach(card => {
            card.classList.remove('show-cards');
        });
        btn.textContent = 'Mehr anzeigen'; // Text zurück zu "Mehr" ändern
        
        // Optional: Scrollt den Nutzer sanft zurück zum Anfang der Sektion
        btn.scrollIntoView({ behavior: 'smooth' });
    }
});


/* MEDIA QUERIES HEADER */


 document.addEventListener('click', (event) => {
    // Busca o botão de toggle (ou seus filhos, como as spans)

  
    const toggleBtn = event.target.closest('#menu-toggle');
    const nav = document.getElementById('nav-menu');

    if (toggleBtn && nav) {
        // Removemos ouvintes antigos para não acumular (evita cliques duplos)
        toggleBtn.replaceWith(toggleBtn.cloneNode(true));
        
   
        
        toggleBtn.addEventListener('click', () => {
            nav.classList.toggle('active');
            toggleBtn.classList.toggle('active');
            console.log("Menu inicializado/reiniciado!");
        });

        // Fechar ao clicar nos links
        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
                toggleBtn.classList.remove('active');
            });
        });
    }

    // Se clicou no botão de abrir/fechar
    if (toggleBtn) {
        if (nav) {
            nav.classList.toggle('active');
            toggleBtn.classList.toggle('active');
            
        }
        return; // Para a execução aqui
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
        
        // 3. Atualiza o texto e faz o scroll se necessário
        if (isActive) {
            btn.textContent = 'Weniger anzeigen';
        } else {
            btn.textContent = 'Mehr anzeigen';
            btn.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

