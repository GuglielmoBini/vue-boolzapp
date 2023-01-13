const dateTime = luxon.DateTime;

// creo app
const app = Vue.createApp({
  name: "Boolzapp",
  data() {
    return {
      // current index
      currentIndex: 0,
      // nuovo messaggio
      newMessage: {
        date: this.getMoment(),
        text: "",
        status: "sent",
      },
      // nuova risposta
      newReply: {
        date: this.getMoment(),
        text: "Ok!",
        status: "received",
      },
      //user
      user: {
        name: "Guglielmo Bini",
        avatar: "_io",
      },
      // array di oggetti
      contacts: [
        {
          name: "Michele",
          avatar: "_1",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              text: "Hai portato a spasso il cane?",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              text: "Ricordati di dargli da mangiare",
              status: "sent",
            },
            {
              date: "10/01/2020 16:15:22",
              text: "Tutto fatto!",
              status: "received",
            },
          ],
        },
        {
          name: "Fabio",
          avatar: "_2",
          visible: true,
          messages: [
            {
              date: "20/03/2020 16:30:00",
              text: "Ciao come stai?",
              status: "sent",
            },
            {
              date: "20/03/2020 16:30:55",
              text: "Bene grazie! Stasera ci vediamo?",
              status: "received",
            },
            {
              date: "20/03/2020 16:35:00",
              text: "Mi piacerebbe ma devo andare a fare la spesa.",
              status: "sent",
            },
          ],
        },
        {
          name: "Samuele",
          avatar: "_3",
          visible: true,
          messages: [
            {
              date: "28/03/2020 10:10:40",
              text: "La Marianna va in campagna",
              status: "received",
            },
            {
              date: "28/03/2020 10:20:10",
              text: "Sicuro di non aver sbagliato chat?",
              status: "sent",
            },
            {
              date: "28/03/2020 16:15:22",
              text: "Ah scusa!",
              status: "received",
            },
          ],
        },
        {
          name: "Luisa",
          avatar: "_4",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              text: "Lo sai che ha aperto una nuova pizzeria?",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              text: "Si, ma preferirei andare al cinema",
              status: "received",
            },
          ],
        },
      ],
    };
  },
  computed: {
    currentContact() {
      return this.contacts[this.currentIndex];
    },
    currentChat() {
      return this.currentContact.messages;
    },
  },
  methods: {
    // funzione per settare l'index
    setCurrentIndex(index) {
      this.currentIndex = index;
    },
    // funzione per aggiungere un messaggio
    addMessage() {
      if (!this.newMessage.text) {
        return;
      } else {
        this.currentChat.push(this.newMessage);
        this.newMessage = {
          date: this.getMoment(),
          text: "",
          status: "sent",
        };
        setTimeout(() => {
          this.currentChat.push(this.newReply);
        }, 2000);
      }
    },
    getMoment() {
      return dateTime
        .now()
        .setLocale("it")
        .toLocaleString(dateTime.DATETIME_SHORT_WITH_SECONDS);
    },
    currentDate() {
      return dateTime
        .now()
        .setLocale("it")
        .toLocaleString(dateTime.DATETIME_SHORT);
    },
  },
});

// monto app
app.mount("#root");
