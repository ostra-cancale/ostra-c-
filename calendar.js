//* CRÉER LE CALENDRIER

let eventsCal = new Calendar({
    id: "#color-calendar",
    calendarSize: "large",
    theme: "glass",
    primaryColor: "#FB9721", 
    headerColor: "#fff",
    headerBackgroundColor: "#FB9721",
    border: "5px solid #FB9721",
    customWeekdayValues: [ "Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam" ],
    startWeekday: 1,

    dateChanged: (currentDate, events) => {

        const events_display = document.querySelector('.events-display');
        let events_html = '';

        if ((new Date(currentDate)).getDay() === 6 || (new Date(currentDate)).getDay() === 0) {
            events_html += `
            <div class="event">
                <div class="event-left">
                    <div class="event-title">Pas de prise de rendez-vous le week-end.</div>
                </div>
            </div>
            `
        } 

        console.log(currentDate, events);
        events.forEach(event => {
            events_html += `
            <div class="event">
                <div class="event-left">
                    <div class="event-title">Ce créneau est déjà réservé. ${event.start} </div>
                </div>
            </div>
            `
        });

        if (events_html) {
            console.log('je suis dans la boucle pour afficher les rdv')
            events_display.innerHTML = events_html;
        } else {


//* MODIFIER UN RDV *****************************************************************

            if (localStorage.getItem('Update')) {

                events_display.innerHTML =`
                <div class="no-events-text"><h3>Choisir un nouveau créneau</h3>
                <div>14h00
                <button class="btnModif">Modifier</button></div>
                </div>
                `;
                console.log("Boucle de modification de rendez-vous")
                
                const id = localStorage.getItem('Update');
                document.querySelector('.btnModif').addEventListener("click", (event) => {
                    events_display.innerHTML = `
                    <div class="no-events-text"><h3>Modification de rendez-vous</h3>
                    <p>Merci de confirmer que vous souhaitez réserver ce nouveau créneau :</p>
                    <button class="btnModif2">Réserver</button>
                    </div>
                    `

                    document.querySelector(".btnModif2").addEventListener('click', (event) => {
                        const curDate = currentDate;
                        const startDate = new Date(curDate);
                        const start = new Date(startDate.getTime() + 16*60*60*1000);

                        const myHeaders = new Headers();
                        myHeaders.append("Authorization", `Bearer ${localStorage.getItem('Authorization')}`);
                        myHeaders.append("Content-Type", "application/json");

                        const raw = JSON.stringify({ "start": start });

                        const requestOptions = {
                            method: 'PUT',
                            headers: myHeaders,
                            body: raw,
                            redirect: 'follow'
                        };

                        fetch(`http://localhost:3000/email/${id}`, requestOptions)
                        .then(response => response.text())
                        .then(result => {
                            console.log(result);
                            localStorage.removeItem('Update');
                            window.location = ('./profil.html');
                        })
                        .catch(error => console.log('error', error));
                    })
                })
            }

//* RÉSERVER UN RENDEZ-VOUS******************************************************
            else {
            events_display.innerHTML =`
            <div class="no-events-text"><h3>Créneaux disponibles</h3>
            <div>14h00
            <button class="btn">Résever</button></div>
            </div>`;
            console.log('no event')

            document.querySelector(".btn").addEventListener("click", (event) => {
                console.log('Boucle de prise de rendez-vous')
                console.log("btn clicked")
                events_display.innerHTML = `
                <div class="no-events-text"><h3>Prise de rendez-vous</h3>
                <p>Merci de confirmer que vous souhaitez réserver ce créneau :</p>
                <button class="btn2">Réserver</button>
                </div>
                `
                document.querySelector(".btn2").addEventListener("click", (event) => {
                    console.log("btn number 2 clicked ;)");
                    const curDate = currentDate;
                    const startDate = new Date(curDate);
                    const start = new Date(startDate.getTime() + 16*60*60*1000);

                    const myHeaders = new Headers();
                    myHeaders.append("Authorization", `Bearer ${localStorage.getItem('Authorization')}`);
                    myHeaders.append("Content-Type", "application/json");
                    const raw = JSON.stringify({"start": start});
                    const requestOptions = {
                        method: 'POST',
                        headers: myHeaders,
                        body: raw,
                        redirect: 'follow'
                    };

//! GERER LES ERREURS  SI ERREURS 400 / 500 !!!!!!!!!!!!!!!!!                   
                    fetch("http://localhost:3000/email", requestOptions)
                    .then(response => response.text())
                    .then(result => console.log(result))
                    .catch(error => console.log(error));

                    events_display.innerHTML = `
                        <div class="no-events-text"><h3>Confirmation</h3>
                        <p>Votre demande a bien été prise en compte, vous recevrez un e-mail de confirmation sous peu.</p>
                        <button class="btn3">Suivant</button>
                        </div>
                    `

                    document.querySelector(".btn3").addEventListener("click", (event) => {
                        console.log("btn number 3 clicked ;)");
                        //window.location.reload()
                        window.location = './profil.html';
                    })
                })
            })         } //else fermeture
        }

    }
}); 



//* RÉCUPERER LES RENDEZ-VOUS SUR LA BASE DE DONNÉES

//! GERER LES ERREURS SI ERREURS 400 / 500 !!!!!!!!!!!!!!!!!
//! ok a priori
fetch('http://localhost:3000/timeslots/')
    .then(res => res.json())
    .then(data => {
        let events = data;
        console.log(events);
        eventsCal.setEventsData(events);
        if(Object.keys(eventsCal.eventDayMap).length === 0) {
            eventsCal.updateCurrentDate(1);
        }
        eventsCal.reset();
    })





