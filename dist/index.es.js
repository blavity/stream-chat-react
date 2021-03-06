import _regeneratorRuntime from '@babel/runtime/regenerator';
import _asyncToGenerator from '@babel/runtime/helpers/asyncToGenerator';
import _classCallCheck from '@babel/runtime/helpers/classCallCheck';
import _createClass from '@babel/runtime/helpers/createClass';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import i18n from 'i18next';
import Dayjs from 'dayjs';
import calendar from 'dayjs/plugin/calendar';
import updateLocale from 'dayjs/plugin/updateLocale';
import LocalizedFormat from 'dayjs/plugin/localizedFormat';
import localeData from 'dayjs/plugin/localeData';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/nl';
import 'dayjs/locale/ru';
import 'dayjs/locale/tr';
import 'dayjs/locale/fr';
import 'dayjs/locale/hi';
import 'dayjs/locale/it';
import 'dayjs/locale/en';
import _extends from '@babel/runtime/helpers/extends';
import _assertThisInitialized from '@babel/runtime/helpers/assertThisInitialized';
import _inherits from '@babel/runtime/helpers/inherits';
import _possibleConstructorReturn from '@babel/runtime/helpers/possibleConstructorReturn';
import _getPrototypeOf from '@babel/runtime/helpers/getPrototypeOf';
import React__default, { createRef, createElement, Component, PureComponent, Fragment } from 'react';
import ReactPlayer from 'react-player';
import PropTypes from 'prop-types';
import { sanitizeUrl } from '@braintree/sanitize-url';
import Carousel, { ModalGateway, Modal as Modal$1 } from 'react-images';
import { FileIcon, ImagePreviewer, FilePreviewer, ImageDropzone, FileUploadButton, dataTransferItemsToFiles, dataTransferItemsHaveFiles, LoadingIndicator as LoadingIndicator$1 } from 'react-file-utils';
import prettybytes from 'pretty-bytes';
import _toConsumableArray from '@babel/runtime/helpers/toConsumableArray';
import uuidv4 from 'uuid/v4';
import Immutable from 'seamless-immutable';
import Visibility from 'visibilityjs';
import { logChatPromiseExecution } from 'stream-chat';
import anchorme from 'anchorme';
import emojiRegex from 'emoji-regex';
import ReactMarkdown from 'react-markdown/with-html';
import truncate from 'lodash/truncate';
import data from 'emoji-mart/data/all.json';
import { NimbleEmoji, emojiIndex, Picker } from 'emoji-mart';
import _typeof from '@babel/runtime/helpers/typeof';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import getCaretCoordinates from 'textarea-caret';
import CustomEvent from 'custom-event';
import Textarea from 'react-textarea-autosize';
import uniq from 'lodash/uniq';
import debounce from 'lodash/debounce';
import throttle from 'lodash/throttle';
import moment from 'moment';
import uniqBy from 'lodash.uniqby';
import deepequal from 'deep-equal';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';

var Cancel = "Cancel";
var Delete = "Delete";
var Delivered = "Delivered";
var Flag = "Flag";
var Mute = "Mute";
var Send = "Send";
var Thread = "Thread";
var live = "live";
var enTranslations = {
	"1 reply": "1 reply",
	Cancel: Cancel,
	"Channel Missing": "Channel Missing",
	"Connection failure, reconnecting now...": "Connection failure, reconnecting now...",
	Delete: Delete,
	Delivered: Delivered,
	"Edit Message": "Edit Message",
	"Empty message...": "Empty message...",
	"Error adding flag: Either the flag already exist or there is issue with network connection ...": "Error adding flag: Either the flag already exist or there is issue with network connection ...",
	"Error connecting to chat, refresh the page to try again.": "Error connecting to chat, refresh the page to try again.",
	"Error muting a user ...": "Error muting a user ...",
	"Error · Unsent": "Error · Unsent",
	"Error: {{ errorMessage }}": "Error: {{ errorMessage }}",
	Flag: Flag,
	"Message Failed · Click to try again": "Message Failed · Click to try again",
	"Message deleted": "Message deleted",
	"Message failed. Click to try again.": "Message failed. Click to try again.",
	"Message has been successfully flagged": "Message has been successfully flagged",
	Mute: Mute,
	"New Messages!": "New Messages!",
	"Nothing yet...": "Nothing yet...",
	"Only visible to you": "Only visible to you",
	"Pick your emoji": "Pick your emoji",
	Send: Send,
	"Sending...": "Sending...",
	"Start of a new thread": "Start of a new thread",
	"This message was deleted...": "This message was deleted...",
	Thread: Thread,
	"Type your message": "Type your message",
	live: live,
	"this content could not be displayed": "this content could not be displayed",
	"{{ commaSeparatedUsers }} and {{ lastUser }} are typing...": "{{ commaSeparatedUsers }} and {{ lastUser }} are typing...",
	"{{ commaSeparatedUsers }} and {{ moreCount }} more": "{{ commaSeparatedUsers }} and {{ moreCount }} more",
	"{{ commaSeparatedUsers }}, and {{ lastUser }}": "{{ commaSeparatedUsers }}, and {{ lastUser }}",
	"{{ firstUser }} and {{ secondUser }}": "{{ firstUser }} and {{ secondUser }}",
	"{{ firstUser }} and {{ secondUser }} are typing...": "{{ firstUser }} and {{ secondUser }} are typing...",
	"{{ imageCount }} more": "{{ imageCount }} more",
	"{{ memberCount }} members": "{{ memberCount }} members",
	"{{ replyCount }} replies": "{{ replyCount }} replies",
	"{{ user }} has been muted": "{{ user }} has been muted",
	"{{ user }} is typing...": "{{ user }} is typing...",
	"{{ watcherCount }} online": "{{ watcherCount }} online",
	"🏙 Attachment...": "🏙 Attachment..."
};

var Cancel$1 = "Annuleer";
var Delete$1 = "Verwijder";
var Delivered$1 = "Afgeleverd";
var Flag$1 = "Markeer";
var Mute$1 = "Dempen";
var Send$1 = "Verstuur";
var Thread$1 = "Draadje";
var live$1 = "live";
var nlTranslations = {
	"1 reply": "1 antwoord",
	Cancel: Cancel$1,
	"Channel Missing": "Kanaal niet gevonden",
	"Connection failure, reconnecting now...": "Probleem met de verbinding, opnieuw verbinding maken...",
	Delete: Delete$1,
	Delivered: Delivered$1,
	"Edit Message": "Pas bericht aan",
	"Empty message...": "Leeg bericht...",
	"Error adding flag: Either the flag already exist or there is issue with network connection ...": "Fout bij het markeren: of het bericht is al gemarkeerd of er is een probleem met de netwerk verbinding",
	"Error connecting to chat, refresh the page to try again.": "Fout bij het verbinden, ververs de pagina om nogmaals te proberen",
	"Error muting a user ...": "Fout bij het dempen van de gebruiker",
	"Error · Unsent": "Error: · niet verzonden",
	"Error: {{ errorMessage }}": "Error: {{ errorMessage }}",
	Flag: Flag$1,
	"Message Failed · Click to try again": "Bericht mislukt, klik om het nogmaals te proberen",
	"Message deleted": "Bericht verwijderd",
	"Message failed. Click to try again.": "Bericht mislukt, klik om het nogmaals te proberen",
	"Message has been successfully flagged": "Bericht is succesvol gemarkeerd",
	Mute: Mute$1,
	"New Messages!": "Nieuwe Berichten!",
	"Nothing yet...": "Nog niets ...",
	"Only visible to you": "Alleen zichtbaar voor jou",
	"Pick your emoji": "Kies je emoji",
	Send: Send$1,
	"Sending...": "Aan het verzenden...",
	"Start of a new thread": "Begin van een nieuwe draadje",
	"This message was deleted...": "Dit bericht was verwijderd",
	Thread: Thread$1,
	"Type your message": "Type je bericht",
	live: live$1,
	"this content could not be displayed": "Deze inhoud kan niet weergegeven worden",
	"{{ commaSeparatedUsers }} and {{ lastUser }} are typing...": "{{ commaSeparatedUsers }} en {{ lastUser }} zijn aan het typen ...",
	"{{ commaSeparatedUsers }} and {{ moreCount }} more": "{{ commaSeparatedUsers }} en {{ moreCount }} meer",
	"{{ commaSeparatedUsers }}, and {{ lastUser }}": "{{ commaSeparatedUsers }} en {{ lastUser }}",
	"{{ firstUser }} and {{ secondUser }}": "{{ firstUser }} en {{ secondUser }}",
	"{{ firstUser }} and {{ secondUser }} are typing...": "{{ firstUser }} en {{ secondUser }} zijn aan het typen ...",
	"{{ imageCount }} more": "+{{ imageCount }}",
	"{{ memberCount }} members": "{{ memberCount }} deelnemers",
	"{{ replyCount }} replies": "{{ replyCount }} antwoorden",
	"{{ user }} has been muted": "{{ user }} is gedempt",
	"{{ user }} is typing...": "{{ user }} is aan het typen...",
	"{{ watcherCount }} online": "{{ watcherCount }} online",
	"🏙 Attachment...": "🏙 Bijlage..."
};

var Cancel$2 = "Отмена";
var Delete$2 = "Удалить";
var Delivered$2 = "Отправлено";
var Flag$2 = "Пожаловаться";
var Mute$2 = "Отключить уведомления";
var Send$2 = "Отправить";
var Thread$2 = "Ветка";
var live$2 = "В прямом эфире";
var ruTranslations = {
	"1 reply": "1 ответ",
	Cancel: Cancel$2,
	"Channel Missing": "Канал не найден",
	"Connection failure, reconnecting now...": "Ошибка соединения, переподключение...",
	Delete: Delete$2,
	Delivered: Delivered$2,
	"Edit Message": "Редактировать сообщение",
	"Empty message...": "Пустое сообщение...",
	"Error adding flag: Either the flag already exist or there is issue with network connection ...": "Ошибка добавления флага: флаг уже существует или ошибка подключения к сети...",
	"Error connecting to chat, refresh the page to try again.": "Ошибка подключения к чату, обновите страницу чтобы попробовать снова.",
	"Error muting a user ...": "Ошибка отключения уведомлений от пользователя...",
	"Error · Unsent": "Ошибка · Не отправлено",
	"Error: {{ errorMessage }}": "Ошибка: {{ errorMessage }}",
	Flag: Flag$2,
	"Message Failed · Click to try again": "Ошибка отправки сообщения · Нажмите чтобы повторить",
	"Message deleted": "Сообщение удалено",
	"Message failed. Click to try again.": "Ошибка отправки сообщения · Нажмите чтобы повторить",
	"Message has been successfully flagged": "Жалоба на сообщение была принята",
	Mute: Mute$2,
	"New Messages!": "Новые сообщения!",
	"Nothing yet...": "Пока ничего нет...",
	"Only visible to you": "Только видно для вас",
	"Pick your emoji": "Выберите свой emoji",
	Send: Send$2,
	"Sending...": "Отправка...",
	"Start of a new thread": "Начало новой ветки",
	"This message was deleted...": "Сообщение было удалено...",
	Thread: Thread$2,
	"Type your message": "Ваше сообщение",
	live: live$2,
	"this content could not be displayed": "Этот контент не может быть отображен в данный момент",
	"{{ commaSeparatedUsers }} and {{ lastUser }} are typing...": "{{ commaSeparatedUsers }} и {{ lastUser }} пишут...",
	"{{ commaSeparatedUsers }} and {{ moreCount }} more": "{{ commaSeparatedUsers }} и {{ moreCount }} еще",
	"{{ commaSeparatedUsers }}, and {{ lastUser }}": "{{ commaSeparatedUsers }} и {{ lastUser }}",
	"{{ firstUser }} and {{ secondUser }}": "{{ firstUser }} и {{ secondUser }}",
	"{{ firstUser }} and {{ secondUser }} are typing...": "{{ firstUser }} и {{ secondUser }} пишут...",
	"{{ imageCount }} more": "Ещё {{ imageCount }}",
	"{{ memberCount }} members": "{{ memberCount }} члены",
	"{{ replyCount }} replies": "{{ replyCount }} ответов",
	"{{ user }} has been muted": "{{ user }} has been muted",
	"{{ user }} is typing...": "{{ user }} пишет...",
	"{{ watcherCount }} online": "{{ watcherCount }} в сети",
	"🏙 Attachment...": "🏙 Вложение..."
};

var Cancel$3 = "İptal";
var Delete$3 = "Sil";
var Delivered$3 = "İletildi";
var Flag$3 = "Bayrak";
var Mute$3 = "Sessiz";
var Send$3 = "Gönder";
var Thread$3 = "Konu";
var live$3 = "canlı";
var trTranslations = {
	"1 reply": "1 cevap",
	Cancel: Cancel$3,
	"Channel Missing": "Kanal bulunamıyor",
	"Connection failure, reconnecting now...": "Bağlantı hatası, tekrar bağlanılıyor...",
	Delete: Delete$3,
	Delivered: Delivered$3,
	"Edit Message": "Mesajı Düzenle",
	"Empty message...": "Boş mesaj...",
	"Error adding flag: Either the flag already exist or there is issue with network connection ...": "Bayraklama hatası: Bayrak zaten var veya bağlantı sorunlu",
	"Error connecting to chat, refresh the page to try again.": "Bağlantı hatası, sayfayı yenileyip tekrar deneyin.",
	"Error muting a user ...": "Kullanıcıyı sessize alırken hata oluştu ...",
	"Error · Unsent": "Hata · Gönderilemedi",
	"Error: {{ errorMessage }}": "Hata: {{ errorMessage }}",
	Flag: Flag$3,
	"Message Failed · Click to try again": "Mesaj Başarısız · Tekrar denemek için tıklayın",
	"Message deleted": "Mesaj silindi",
	"Message failed. Click to try again.": "Mesaj başarısız oldu. Tekrar denemek için tıklayın",
	"Message has been successfully flagged": "Mesaj başarıyla bayraklandı",
	Mute: Mute$3,
	"New Messages!": "Yeni Mesajlar!",
	"Nothing yet...": "Şimdilik hiçbir şey...",
	"Only visible to you": "Sadece size görünür",
	"Pick your emoji": "Emoji seçin",
	Send: Send$3,
	"Sending...": "Gönderiliyor...",
	"Start of a new thread": "Yeni konunun başı",
	"This message was deleted...": "Bu mesaj silindi",
	Thread: Thread$3,
	"Type your message": "Mesajınızı yazın",
	live: live$3,
	"this content could not be displayed": "bu içerik gösterilemiyor",
	"{{ commaSeparatedUsers }} and {{ lastUser }} are typing...": "{{ commaSeparatedUsers }} ve {{ lastUser }} yazıyor...",
	"{{ commaSeparatedUsers }} and {{ moreCount }} more": "{{ commaSeparatedUsers }} ve {{ moreCount }} daha",
	"{{ commaSeparatedUsers }}, and {{ lastUser }}": "{{ commaSeparatedUsers }}, ve {{ lastUser }}",
	"{{ firstUser }} and {{ secondUser }}": "{{ firstUser }} ve {{ secondUser }}",
	"{{ firstUser }} and {{ secondUser }} are typing...": "{{ firstUser }} ve {{ secondUser }} yazıyor...",
	"{{ imageCount }} more": "{{ imageCount }} adet daha",
	"{{ memberCount }} members": "{{ memberCount }} üyeler",
	"{{ replyCount }} replies": "{{ replyCount }} cevaplar",
	"{{ user }} has been muted": "{{ user }} sessize alındı",
	"{{ user }} is typing...": "{{ user }} yazıyor...",
	"{{ watcherCount }} online": "{{ watcherCount }} çevrimiçi",
	"🏙 Attachment...": "🏙 Ek..."
};

var Cancel$4 = "Annuler";
var Delete$4 = "Supprimer";
var Delivered$4 = "Publié";
var Flag$4 = "Signaler";
var Mute$4 = "Muet";
var Send$4 = "Envoyer";
var Thread$4 = "Fil de discussion";
var live$4 = "en direct";
var frTranslations = {
	"1 reply": "1 réponse",
	Cancel: Cancel$4,
	"Channel Missing": "Canal Manquant",
	"Connection failure, reconnecting now...": "Échec de la connexion, reconnexion en cours...",
	Delete: Delete$4,
	Delivered: Delivered$4,
	"Edit Message": "Éditer un message",
	"Empty message...": "Message vide...",
	"Error adding flag: Either the flag already exist or there is issue with network connection ...": "Erreur d'ajout du flag : le flag existe déjà ou vous rencontrez un problème de connexion au réseau ...",
	"Error connecting to chat, refresh the page to try again.": "Erreur de connexion au chat, rafraîchissez la page pour réessayer.",
	"Error muting a user ...": "Erreur de mise en sourdine d'un utilisateur ...",
	"Error · Unsent": "Erreur - Non envoyé",
	"Error: {{ errorMessage }}": "Erreur : {{ errorMessage }}",
	Flag: Flag$4,
	"Message Failed · Click to try again": "Échec de l'envoi du message - Cliquez pour réessayer",
	"Message deleted": "Message supprimé",
	"Message failed. Click to try again.": "Échec de l'envoi du message - Cliquez pour réessayer",
	"Message has been successfully flagged": "Le message a été signalé avec succès",
	Mute: Mute$4,
	"New Messages!": "Nouveaux Messages!",
	"Nothing yet...": "Aucun message...",
	"Only visible to you": "Visible uniquement pour vous",
	"Pick your emoji": "Choisissez votre emoji",
	Send: Send$4,
	"Sending...": "Envoi en cours...",
	"Start of a new thread": "Début d'un nouveau fil de discussion",
	"This message was deleted...": "Ce message a été supprimé...",
	Thread: Thread$4,
	"Type your message": "Saisissez votre message",
	live: live$4,
	"this content could not be displayed": "ce contenu n'a pu être affiché",
	"{{ commaSeparatedUsers }} and {{ lastUser }} are typing...": "{{ commaSeparatedUsers }} et {{ lastUser }} sont en train d'écrire...",
	"{{ commaSeparatedUsers }} and {{ moreCount }} more": "{{ commaSeparatedUsers }} et {{ moreCount }} autres",
	"{{ commaSeparatedUsers }}, and {{ lastUser }}": "{{ commaSeparatedUsers }} et {{ lastUser }}",
	"{{ firstUser }} and {{ secondUser }}": "{{ firstUser }} et {{ secondUser }}",
	"{{ firstUser }} and {{ secondUser }} are typing...": "{{ firstUser }} et {{ secondUser }} sont en train d'écrire...",
	"{{ imageCount }} more": "{{ imageCount }} supplémentaires",
	"{{ memberCount }} members": "{{ memberCount }} membres",
	"{{ replyCount }} replies": "{{ replyCount }} réponses",
	"{{ user }} has been muted": "{{ user }} a été mis en sourdine",
	"{{ user }} is typing...": "{{ user }} est en train d'écrire...",
	"{{ watcherCount }} online": "{{ watcherCount }} en ligne",
	"🏙 Attachment...": "🏙 Pièce jointe..."
};

var Cancel$5 = "रद्द करें";
var Delete$5 = "डिलीट";
var Delivered$5 = "पहुंच गया";
var Flag$5 = "फ्लैग करे";
var Mute$5 = "म्यूट करे";
var Send$5 = "भेजे";
var Thread$5 = "रिप्लाई थ्रेड";
var live$5 = "लाइव";
var hiTranslations = {
	"1 reply": "1 रिप्लाई",
	Cancel: Cancel$5,
	"Channel Missing": "चैनल उपलब्ध नहीं है",
	"Connection failure, reconnecting now...": "कनेक्शन विफल रहा, अब पुनः कनेक्ट हो रहा है ...",
	Delete: Delete$5,
	Delivered: Delivered$5,
	"Edit Message": "मैसेज में बदलाव करे",
	"Empty message...": "खाली संदेश ...",
	"Error adding flag: Either the flag already exist or there is issue with network connection ...": "फ़ैल: या तो यह मैसेज के ऊपर पहले से फ्लैग है या तो आपके इंटरनेट कनेक्शन में कुछ परेशानी है",
	"Error connecting to chat, refresh the page to try again.": "चैट से कनेक्ट करने में त्रुटि, पेज को रिफ्रेश करें",
	"Error muting a user ...": "यूजर को म्यूट करने का प्रयास फेल हुआ",
	"Error · Unsent": "फेल",
	"Error: {{ errorMessage }}": "फेल: {{ errorMessage }}",
	Flag: Flag$5,
	"Message Failed · Click to try again": "मैसेज फ़ैल - पुनः कोशिश करें",
	"Message deleted": "मैसेज हटा दिया गया",
	"Message failed. Click to try again.": "मैसेज फ़ैल - पुनः कोशिश करें",
	"Message has been successfully flagged": "मैसेज को फ्लैग कर दिया गया है",
	Mute: Mute$5,
	"New Messages!": "नए मैसेज!",
	"Nothing yet...": "कोई मैसेज नहीं है",
	"Only visible to you": "सिर्फ आपको दिखाई दे रहा है",
	"Pick your emoji": "इमोजी चूस करे",
	Send: Send$5,
	"Sending...": "भेजा जा रहा है",
	"Start of a new thread": "एक नए थ्रेड की शुरुआत",
	"This message was deleted...": "मैसेज हटा दिया गया",
	Thread: Thread$5,
	"Type your message": "अपना मैसेज लिखे",
	live: live$5,
	"this content could not be displayed": "यह कॉन्टेंट लोड नहीं हो पाया",
	"{{ commaSeparatedUsers }} and {{ lastUser }} are typing...": "{{ commaSeparatedUsers }} और {{ lastUser }} टाइप कर रहे हैं...",
	"{{ commaSeparatedUsers }} and {{ moreCount }} more": "{{ commaSeparatedUsers }} और {{ moreCount }} और",
	"{{ commaSeparatedUsers }}, and {{ lastUser }}": "{{ commaSeparatedUsers }} और {{ lastUser }}",
	"{{ firstUser }} and {{ secondUser }}": "{{ firstUser }} और {{ secondUser }}",
	"{{ firstUser }} and {{ secondUser }} are typing...": "{{ firstUser }} और {{ secondUser }} टाइप कर रहे हैं...",
	"{{ imageCount }} more": "{{ imageCount }} और",
	"{{ memberCount }} members": "{{ memberCount }} मेंबर्स",
	"{{ replyCount }} replies": "{{ replyCount }} रिप्लाई",
	"{{ user }} has been muted": "{{ user }} को म्यूट कर दिया गया है",
	"{{ user }} is typing...": "{{ user }} टाइप कर रहा है...",
	"{{ watcherCount }} online": "{{ watcherCount }} online",
	"🏙 Attachment...": "🏙 अटैचमेंट"
};

var Cancel$6 = "Annulla";
var Delete$6 = "Cancella";
var Delivered$6 = "Consegnato";
var Flag$6 = "Segnala";
var Mute$6 = "Silenzia";
var Send$6 = "Invia";
var Thread$6 = "Thread";
var live$6 = "live";
var itTranslations = {
	"1 reply": "Una risposta",
	Cancel: Cancel$6,
	"Channel Missing": "Il canale non esiste",
	"Connection failure, reconnecting now...": "Connessione fallitta, riconnessione in corso...",
	Delete: Delete$6,
	Delivered: Delivered$6,
	"Edit Message": "Modifica messaggio",
	"Empty message...": "Message vuoto...",
	"Error adding flag: Either the flag already exist or there is issue with network connection ...": "Errore durante la segnalazione: la segnalazione esiste giá o c'é un problema di connessione ...",
	"Error connecting to chat, refresh the page to try again.": "Errore di connessione alla chat, aggiorna la pagina per riprovare",
	"Error muting a user ...": "Errore silenziando un utente ...",
	"Error · Unsent": "Errore · Non inviato",
	"Error: {{ errorMessage }}": "Errore: {{ errorMessage }}",
	Flag: Flag$6,
	"Message Failed · Click to try again": "Invio messaggio fallito · Clicca per riprovare",
	"Message deleted": "Messaggio cancellato",
	"Message failed. Click to try again.": "Invio messaggio fallito. Clicca per riprovare.",
	"Message has been successfully flagged": "Il messaggio é stato segnalato con successo",
	Mute: Mute$6,
	"New Messages!": "Nuovo messaggio!",
	"Nothing yet...": "Ancora niente...",
	"Only visible to you": "Visibile soltanto da te",
	"Pick your emoji": "Scegli la tua emoji",
	Send: Send$6,
	"Sending...": "Invio in corso...",
	"Start of a new thread": "Inizia un nuovo thread",
	"This message was deleted...": "Questo messaggio é stato cancellato",
	Thread: Thread$6,
	"Type your message": "Scrivi il tuo messaggio",
	live: live$6,
	"this content could not be displayed": "questo contenuto non puó essere mostrato",
	"{{ commaSeparatedUsers }} and {{ lastUser }} are typing...": "{{ commaSeparatedUsers }} e {{ lastUser }} stanno scrivendo...",
	"{{ commaSeparatedUsers }} and {{ moreCount }} more": "{{ commaSeparatedUsers }} e altri {{ moreCount }}",
	"{{ commaSeparatedUsers }}, and {{ lastUser }}": "{{ commaSeparatedUsers }} e {{ lastUser }}",
	"{{ firstUser }} and {{ secondUser }}": "{{ firstUser }} e {{ secondUser }}",
	"{{ firstUser }} and {{ secondUser }} are typing...": "{{ firstUser }} e {{ secondUser }} stanno scrivendo...",
	"{{ imageCount }} more": "+ {{ imageCount }}",
	"{{ memberCount }} members": "{{ memberCount }} membri",
	"{{ replyCount }} replies": "{{ replyCount }} risposte",
	"{{ user }} has been muted": "{{ user }} é stato silenziato",
	"{{ user }} is typing...": "{{ user }} sta scrivendo...",
	"{{ watcherCount }} online": "{{ watcherCount }} online",
	"🏙 Attachment...": "🏙 Allegato..."
};

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var defaultNS = 'translation';
var defaultLng = 'en';
Dayjs.extend(updateLocale);
Dayjs.updateLocale('nl', {
  calendar: {
    sameDay: '[vandaag om] LT',
    nextDay: '[morgen om] LT',
    nextWeek: 'dddd [om] LT',
    lastDay: '[gisteren om] LT',
    lastWeek: '[afgelopen] dddd [om] LT',
    sameElse: 'L'
  }
});
Dayjs.updateLocale('it', {
  calendar: {
    sameDay: '[Oggi alle] LT',
    nextDay: '[Domani alle] LT',
    nextWeek: 'dddd [alle] LT',
    lastDay: '[Ieri alle] LT',
    lastWeek: '[lo scorso] dddd [alle] LT',
    sameElse: 'L'
  }
});
Dayjs.updateLocale('hi', {
  calendar: {
    sameDay: '[आज] LT',
    nextDay: '[कल] LT',
    nextWeek: 'dddd, LT',
    lastDay: '[कल] LT',
    lastWeek: '[पिछले] dddd, LT',
    sameElse: 'L'
  },
  // Hindi notation for meridiems are quite fuzzy in practice. While there exists
  // a rigid notion of a 'Pahar' it is not used as rigidly in modern Hindi.
  meridiemParse: /रात|सुबह|दोपहर|शाम/,
  meridiemHour: function meridiemHour(hour, meridiem) {
    if (hour === 12) {
      hour = 0;
    }

    if (meridiem === 'रात') {
      return hour < 4 ? hour : hour + 12;
    } else if (meridiem === 'सुबह') {
      return hour;
    } else if (meridiem === 'दोपहर') {
      return hour >= 10 ? hour : hour + 12;
    } else if (meridiem === 'शाम') {
      return hour + 12;
    }
  },
  meridiem: function meridiem(hour) {
    if (hour < 4) {
      return 'रात';
    } else if (hour < 10) {
      return 'सुबह';
    } else if (hour < 17) {
      return 'दोपहर';
    } else if (hour < 20) {
      return 'शाम';
    } else {
      return 'रात';
    }
  }
});
Dayjs.updateLocale('fr', {
  calendar: {
    sameDay: '[Aujourd’hui à] LT',
    nextDay: '[Demain à] LT',
    nextWeek: 'dddd [à] LT',
    lastDay: '[Hier à] LT',
    lastWeek: 'dddd [dernier à] LT',
    sameElse: 'L'
  }
});
Dayjs.updateLocale('tr', {
  calendar: {
    sameDay: '[bugün saat] LT',
    nextDay: '[yarın saat] LT',
    nextWeek: '[gelecek] dddd [saat] LT',
    lastDay: '[dün] LT',
    lastWeek: '[geçen] dddd [saat] LT',
    sameElse: 'L'
  }
});
Dayjs.updateLocale('ru', {
  calendar: {
    sameDay: '[Сегодня, в] LT',
    nextDay: '[Завтра, в] LT',
    lastDay: '[Вчера, в] LT'
  }
});
var en_locale = {
  weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
  months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_')
};
/**
 * Wrapper around [i18next](https://www.i18next.com/) class for Stream related translations.
 * Instance of this class should be provided to Chat component to handle translations.
 * Stream provides following list of in-built translations:
 * 1. English (en)
 * 2. Dutch (nl)
 * 3. Russian (ru)
 * 4. Turkish (tr)
 * 5. French (fr)
 * 6. Italian (it)
 * 7. Hindi (hi)
 *
 * Simplest way to start using chat components in one of the in-built languages would be following:
 *
 * ```
 * const i18n = new Streami18n({ language 'nl' });
 * <Chat client={chatClient} i18nInstance={i18n}>
 *  ...
 * </Chat>
 * ```
 *
 * If you would like to override certain keys in in-built translation.
 * UI will be automatically updated in this case.
 *
 * ```
 * const i18n = new Streami18n({
 *  language: 'nl',
 *  translationsForLanguage: {
 *    'Nothing yet...': 'Nog Niet ...',
 *    '{{ firstUser }} and {{ secondUser }} are typing...': '{{ firstUser }} en {{ secondUser }} zijn aan het typen...',
 *  }
 * });
 *
 * If you would like to register additional languages, use registerTranslation. You can add as many languages as you want:
 *
 * i18n.registerTranslation('zh', {
 *  'Nothing yet...': 'Nog Niet ...',
 *  '{{ firstUser }} and {{ secondUser }} are typing...': '{{ firstUser }} en {{ secondUser }} zijn aan het typen...',
 * });
 *
 * <Chat client={chatClient} i18nInstance={i18n}>
 *  ...
 * </Chat>
 * ```
 *
 * You can use the same function to add whole new language as well.
 *
 * ```
 * const i18n = new Streami18n();
 *
 * i18n.registerTranslation('mr', {
 *  'Nothing yet...': 'काहीही नाही  ...',
 *  '{{ firstUser }} and {{ secondUser }} are typing...': '{{ firstUser }} आणि {{ secondUser }} टीपी करत आहेत ',
 * });
 *
 * // Make sure to call setLanguage to reflect new language in UI.
 * i18n.setLanguage('it');
 * <Chat client={chatClient} i18nInstance={i18n}>
 *  ...
 * </Chat>
 * ```
 *
 * ## Datetime translations
 *
 * Stream react chat components uses [dayjs](https://day.js.org/en/) internally by default to format datetime stamp.
 * e.g., in ChannelPreview, MessageContent components.
 * Dayjs has locale support as well - https://day.js.org/docs/en/i18n/i18n
 * Dayjs is a lightweight alternative to Momentjs with the same modern API.
 *
 * Dayjs provides locale config for plenty of languages, you can check the whole list of locale configs at following url
 * https://github.com/iamkun/dayjs/tree/dev/src/locale
 *
 * You can either provide the dayjs locale config while registering
 * language with Streami18n (either via constructor or registerTranslation()) or you can provide your own Dayjs or Moment instance
 * to Streami18n constructor, which will be then used internally (using the language locale) in components.
 *
 * 1. Via language registration
 *
 * e.g.,
 * ```
 * const i18n = new Streami18n({
 *  language: 'nl',
 *  dayjsLocaleConfigForLanguage: {
 *    months: [...],
 *    monthsShort: [...],
 *    calendar: {
 *      sameDay: ...'
 *    }
 *  }
 * });
 * ```
 *
 * Similarly, you can add locale config for moment while registering translation via `registerTranslation` function.
 *
 * e.g.,
 * ```
 * const i18n = new Streami18n();
 *
 * i18n.registerTranslation(
 *  'mr',
 *  {
 *    'Nothing yet...': 'काहीही नाही  ...',
 *    '{{ firstUser }} and {{ secondUser }} are typing...': '{{ firstUser }} आणि {{ secondUser }} टीपी करत आहेत ',
 *  },
 *  {
 *    months: [...],
 *    monthsShort: [...],
 *    calendar: {
 *      sameDay: ...'
 *    }
 *  }
 * );
 *```
 * 2. Provide your own Moment object
 *
 * ```js
 * import 'moment/locale/nl';
 * import 'moment/locale/it';
 * // or if you want to include all locales
 * import 'moment/min/locales';
 *
 * import Moment from moment
 *
 * const i18n = new Streami18n({
 *  language: 'nl',
 *  DateTimeParser: Moment
 * })
 * ```
 *
 * 3. Provide your own Dayjs object
 *
 * ```js
 * import Dayjs from 'dayjs'
 *
 * import 'dayjs/locale/nl';
 * import 'dayjs/locale/it';
 * // or if you want to include all locales
 * import 'dayjs/min/locales';
 *
 * const i18n = new Streami18n({
 *  language: 'nl',
 *  DateTimeParser: Dayjs
 * })
 * ```
 * If you would like to stick with english language for datetimes in Stream compoments, you can set `disableDateTimeTranslations` to true.
 *
 */

var defaultStreami18nOptions = {
  language: 'en',
  disableDateTimeTranslations: false,
  debug: false,
  logger: function logger(msg) {
    return console.warn(msg);
  },
  dayjsLocaleConfigForLanguage: null,
  DateTimeParser: Dayjs
};
var Streami18n = /*#__PURE__*/function () {
  /**
   * dayjs.defineLanguage('nl') also changes the global locale. We don't want to do that
   * when user calls registerTranslation() function. So intead we will store the locale configs
   * given to registerTranslation() function in `dayjsLocales` object, and register the required locale
   * with moment, when setLanguage is called.
   * */

  /**
   * Contructor accepts following options:
   *  - language (String) default: 'en'
   *    Language code e.g., en, tr
   *
   *  - translationsForLanguage (object)
   *    Translations object. Please check src/i18n/en.json for example.
   *
   *  - disableDateTimeTranslations (boolean) default: false
   *    Disable translations for datetimes
   *
   *  - debug (boolean) default: false
   *    Enable debug mode in internal i18n class
   *
   *  - logger (function) default: () => {}
   *    Logger function to log warnings/errors from this class
   *
   *  - dayjsLocaleConfigForLanguage (object) default: 'enConfig'
   *    [Config object](https://momentjs.com/docs/#/i18n/changing-locale/) for internal moment object,
   *    corresponding to language (param)
   *
   *  - DateTimeParser (function) Moment or Dayjs instance/function.
   *    Make sure to load all the required locales in this Moment or Dayjs instance that you will be provide to Streami18n
   *
   * @param {*} options
   */
  function Streami18n() {
    var _this = this;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Streami18n);

    _defineProperty(this, "i18nInstance", i18n.createInstance());

    _defineProperty(this, "Dayjs", null);

    _defineProperty(this, "setLanguageCallback", function () {
      return null;
    });

    _defineProperty(this, "initialized", false);

    _defineProperty(this, "t", null);

    _defineProperty(this, "tDateTimeParser", null);

    _defineProperty(this, "translations", {
      en: _defineProperty({}, defaultNS, enTranslations),
      nl: _defineProperty({}, defaultNS, nlTranslations),
      ru: _defineProperty({}, defaultNS, ruTranslations),
      tr: _defineProperty({}, defaultNS, trTranslations),
      fr: _defineProperty({}, defaultNS, frTranslations),
      hi: _defineProperty({}, defaultNS, hiTranslations),
      it: _defineProperty({}, defaultNS, itTranslations)
    });

    _defineProperty(this, "dayjsLocales", {});

    _defineProperty(this, "localeExists", function (language) {
      if (_this.isCustomDateTimeParser) return true;
      return Object.keys(Dayjs.Ls).indexOf(language) > -1;
    });

    _defineProperty(this, "validateCurrentLanguage", function () {
      var availableLanguages = Object.keys(_this.translations);

      if (availableLanguages.indexOf(_this.currentLanguage) === -1) {
        _this.logger("Streami18n: '".concat(_this.currentLanguage, "' language is not registered.") + " Please make sure to call streami18n.registerTranslation('".concat(_this.currentLanguage, "', {...}) or ") + "use one the built-in supported languages - ".concat(_this.getAvailableLanguages()));

        _this.currentLanguage = defaultLng;
      }
    });

    _defineProperty(this, "geti18Instance", function () {
      return _this.i18nInstance;
    });

    _defineProperty(this, "getAvailableLanguages", function () {
      return Object.keys(_this.translations);
    });

    _defineProperty(this, "getTranslations", function () {
      return _this.translations;
    });

    var finalOptions = _objectSpread(_objectSpread({}, defaultStreami18nOptions), options); // Prepare the i18next configuration.


    this.logger = finalOptions.logger;
    this.currentLanguage = finalOptions.language;
    this.DateTimeParser = finalOptions.DateTimeParser;

    try {
      // This is a shallow check to see if given parser is instance of Dayjs.
      // For some reason Dayjs.isDayjs(this.DateTimeParser()) doesn't work.
      if (this.DateTimeParser && this.DateTimeParser.extend) {
        this.DateTimeParser.extend(LocalizedFormat);
        this.DateTimeParser.extend(calendar);
        this.DateTimeParser.extend(localeData);
        this.DateTimeParser.extend(relativeTime);
      }
    } catch (error) {
      throw Error("Streami18n: Looks like you wanted to provide Dayjs instance, but something went wrong while adding plugins", error);
    }

    this.isCustomDateTimeParser = !!options.DateTimeParser;
    var translationsForLanguage = finalOptions.translationsForLanguage;

    if (translationsForLanguage) {
      this.translations[this.currentLanguage] = _defineProperty({}, defaultNS, translationsForLanguage);
    } // If translations don't exist for given language, then set it as empty object.


    if (!this.translations[this.currentLanguage]) {
      this.translations[this.currentLanguage] = _defineProperty({}, defaultNS, {});
    }

    this.i18nextConfig = {
      nsSeparator: false,
      keySeparator: false,
      fallbackLng: false,
      debug: finalOptions.debug,
      lng: this.currentLanguage,
      interpolation: {
        escapeValue: false
      },
      parseMissingKeyHandler: function parseMissingKeyHandler(key) {
        _this.logger("Streami18n: Missing translation for key: ".concat(key));

        return key;
      }
    };
    this.validateCurrentLanguage(this.currentLanguage);
    var dayjsLocaleConfigForLanguage = finalOptions.dayjsLocaleConfigForLanguage;

    if (dayjsLocaleConfigForLanguage) {
      this.addOrUpdateLocale(this.currentLanguage, _objectSpread({}, dayjsLocaleConfigForLanguage));
    } else if (!this.localeExists(this.currentLanguage)) {
      this.logger("Streami18n: Streami18n(...) - Locale config for ".concat(this.currentLanguage, " does not exist in momentjs.") + "Please import the locale file using \"import 'moment/locale/".concat(this.currentLanguage, "';\" in your app or ") + "register the locale config with Streami18n using registerTranslation(language, translation, customDayjsLocale)");
    }

    this.tDateTimeParser = function (timestamp) {
      if (finalOptions.disableDateTimeTranslations || !_this.localeExists(_this.currentLanguage)) {
        return _this.DateTimeParser(timestamp).locale(defaultLng);
      }

      return _this.DateTimeParser(timestamp).locale(_this.currentLanguage);
    };
  }
  /**
   * Initializes the i18next instance with configuration (which enables natural language as default keys)
   */


  _createClass(Streami18n, [{
    key: "init",
    value: function () {
      var _init = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.validateCurrentLanguage();
                _context.prev = 1;
                _context.next = 4;
                return this.i18nInstance.init(_objectSpread(_objectSpread({}, this.i18nextConfig), {}, {
                  resources: this.translations,
                  lng: this.currentLanguage
                }));

              case 4:
                this.t = _context.sent;
                this.initialized = true;
                return _context.abrupt("return", {
                  t: this.t,
                  tDateTimeParser: this.tDateTimeParser
                });

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](1);
                this.logger("Something went wrong with init:", _context.t0);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 9]]);
      }));

      function init() {
        return _init.apply(this, arguments);
      }

      return init;
    }()
  }, {
    key: "getTranslators",

    /**
     * Returns current version translator function.
     */
    value: function () {
      var _getTranslators = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2() {
        return _regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (this.initialized) {
                  _context2.next = 7;
                  break;
                }

                if (this.dayjsLocales[this.currentLanguage]) {
                  this.addOrUpdateLocale(this.currentLanguage, this.dayjsLocales[this.currentLanguage]);
                }

                _context2.next = 4;
                return this.init();

              case 4:
                return _context2.abrupt("return", _context2.sent);

              case 7:
                return _context2.abrupt("return", {
                  t: this.t,
                  tDateTimeParser: this.tDateTimeParser
                });

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getTranslators() {
        return _getTranslators.apply(this, arguments);
      }

      return getTranslators;
    }()
    /**
     * Register translation
     *
     * @param {*} language
     * @param {*} translation
     * @param {*} customDayjsLocale
     */

  }, {
    key: "registerTranslation",
    value: function registerTranslation(language, translation, customDayjsLocale) {
      if (!translation) {
        this.logger("Streami18n: registerTranslation(language, translation, customDayjsLocale) called without translation");
        return;
      }

      if (!this.translations[language]) {
        this.translations[language] = _defineProperty({}, defaultNS, translation);
      } else {
        this.translations[language][defaultNS] = translation;
      }

      if (customDayjsLocale) {
        this.dayjsLocales[language] = _objectSpread({}, customDayjsLocale);
      } else if (!this.localeExists(language)) {
        this.logger("Streami18n: registerTranslation(language, translation, customDayjsLocale) - " + "Locale config for ".concat(language, " does not exist in Dayjs.") + "Please import the locale file using \"import 'dayjs/locale/".concat(language, "';\" in your app or ") + "register the locale config with Streami18n using registerTranslation(language, translation, customDayjsLocale)");
      }

      if (this.initialized) {
        this.i18nInstance.addResources(language, defaultNS, translation);
      }
    }
  }, {
    key: "addOrUpdateLocale",
    value: function addOrUpdateLocale(key, config) {
      if (this.localeExists(key)) {
        Dayjs.updateLocale(key, _objectSpread({}, config));
      } else {
        // Merging the custom locale config with en config, so missing keys can default to english.
        Dayjs.locale(_objectSpread({
          name: key
        }, _objectSpread(_objectSpread({}, en_locale), config)), null, true);
      }
    }
    /**
     * Changes the language.
     * @param {*} language
     */

  }, {
    key: "setLanguage",
    value: function () {
      var _setLanguage = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3(language) {
        var t;
        return _regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.currentLanguage = language;

                if (this.initialized) {
                  _context3.next = 3;
                  break;
                }

                return _context3.abrupt("return");

              case 3:
                _context3.prev = 3;
                _context3.next = 6;
                return this.i18nInstance.changeLanguage(language);

              case 6:
                t = _context3.sent;

                if (this.dayjsLocales[language]) {
                  this.addOrUpdateLocale(this.currentLanguage, this.dayjsLocales[this.currentLanguage]);
                }

                this.setLanguageCallback(t);
                return _context3.abrupt("return", t);

              case 12:
                _context3.prev = 12;
                _context3.t0 = _context3["catch"](3);
                this.logger("Failed to set language:", _context3.t0);

              case 15:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[3, 12]]);
      }));

      function setLanguage(_x) {
        return _setLanguage.apply(this, arguments);
      }

      return setLanguage;
    }()
    /**
     *
     * @param {*} callback
     */

  }, {
    key: "registerSetLanguageCallback",
    value: function registerSetLanguageCallback(callback) {
      this.setLanguageCallback = callback;
    }
  }]);

  return Streami18n;
}();

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
/**
 * SafeAnchor - In all ways similar to a regular anchor tag.
 * The difference is that it sanitizes the href value and prevents XSS
 * @augments {React.PureComponent<React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>>}
 */

var SafeAnchor = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(SafeAnchor, _React$PureComponent);

  var _super = _createSuper(SafeAnchor);

  function SafeAnchor() {
    _classCallCheck(this, SafeAnchor);

    return _super.apply(this, arguments);
  }

  _createClass(SafeAnchor, [{
    key: "render",
    value: function render() {
      if (!this.props.href) return;
      var href = sanitizeUrl(this.props.href);
      return /*#__PURE__*/React__default.createElement("a", _extends({}, this.props, {
        href: href
      }), this.props.children);
    }
  }]);

  return SafeAnchor;
}(React__default.PureComponent);

var giphyLogo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAAkCAYAAAB/up84AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABVhJREFUeNrsW6GS20AMdToGBgEGAQYBBgEBBQYFgQcP5hMO9jP6CYWFBwsPBgYUGBQEFAQUGAQYBBgYGHjmutt5O6NupbXXcZJrx5rJXGyv11o96Ukr52avr6/BJG9HZmMBMpvNYnxt1JzNZNoRAYFxM2Z8rT6FuueMcaH6s1KfhBn3U42r1Jg1rrfq+Bt5xgf1Z64+uQFQndNzLc1Ydfwg6F2p6wd1PVXfU+b6Gc9vHGuh8+jrsXVN61Sq64XggNw95tlH9XmP6y3W2OI+qvN3db6mN7/zBFAb8L2aNMJxRsDQC6jIuEyN039LnAvV8QJKRRijZUHmT8iiLpEFDHKJaB1TGN732WuAokEIDQCwhwGjsMEIMNgp6qY9JlsTgyXquCFG1d54IsbOsKAVPLDBcQJjUxB0RJwAltGntNQ46GhzqPnb0y0954RG/1iLQ7SRCkR+guiPtW6GFRg5gAlCrFvbJEZ0ngDAUn0/Y77fDCJFXuiB/AmGDC3PLg0YWLRW5CcJWWPglNxDKS6C59AcZBs/sYxbOQBqHHkuZYCsGCds4SQJDDx3RK3RjUb9EfMUcLQ57BHS64MAIYtYkvEt+d4wCzqr++ipkoTtkihOI2chREfA5KiC0GOAaMig05zoWJPjgMk39jxcPphDR0mSDrtq438g51iq8omQlEnYJfHoiAFxYQGko6bCPSmZ5wS+TRx0Zc5R4CtmHbEVJT+0p1uOYdNE1SMfOKNO0zXWEmItptApsfYa1LV0UZUPIHSCmlRYJhfokNWhX5IcsmIWbEAMCQWerWirhZK57MghNQyzgke3QuQWPUv4EAac9wCuJjmkNmvUNEwiobX+DgdEWoQGgNDPGtTWWhRRWONX5JlnePCZhP1JUCOzPN1O0C2MohP7xuiko8Qy9INUDBg2YPJMlzP8pRv0qYeUdu+Cy+RAKIYmtVqojM5kkS0DwkXlLuY0ICzgAEOlAd8fPe+rYJdppz61TiZ5G4AgcScWz05RcUtAkOwyJMtI4FzNt3suCWKfwLUhdqRC0yA/enB1CZ4vBZ2fhIptJ4x/5PYVavyzQ39N0V8ddnsQ+m3sfX02hjo3bIVJ7d5PhqojZxYdC3NEdv9oQMQWFFjHHqpLEsc9BZyF23c9cG0ZOJjUIN15V1mY8OOAhW0E77yWaP2eoO9VBFG/d6yX6/xuHT2z3AsQ5ImnjrZBF6XcUiKAEl0RlJzZ7ZtnbxmqSgRqfxmyD9k6wNDGzuExecB3Z1/ukBOjQH73MZbspChFp9nQ/EYY9+LaaIYOqlo7JjwISX+LcBwbjAOz2ZKS7BpOcq0o0R2HvZAbHpHPJGc+dm00paQuedmOA4O0WD5fyQ4V08Ip4ATxhYl8CCh76/0QLVyehlBVFyCpYJTcKmPjHoY8XNE2VQ8dbIkdr4Z95npBwcNVahKzNEMBSYSyz46iLm8sLunreG5O+xYTsaMUHYu6bMn79sRCT2+8l6SMV2cCT5e3UspBXbbd9n3nDIN/Q1KP3JDfWLcd8kZwCVX12hjeOlmOIMe+L6FGjJLC4QS5rz6hg/tThjZiU0Pr/g7D65/uCUafKgaUJu0lHjvox/XsjXA+GAOQUogIXV8/v7GoKOGJfYuHxvHjt7t3rEMHD2+E5PoR+5GCLCS+8g6Z2xgGt6anuwGC99MSKAl6RrfUs/ofje+b1PcjlJBlMMk4gKBUe77AqKVP/T1Jj30IQPmCTdkm6NeKb5BkJzCGdCA8XuFGZIOWCBEh/mwGiZ/rFZXk3xHEdkjHb6MknVOhypJe+Sac03XlL4fe3r81mH518q9GyCS3kV8CDADlsrVaJhTLAgAAAABJRU5ErkJggg==";

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var ChatContext = React__default.createContext({
  client: null
});
function withChatContext(OriginalComponent) {
  var ContextAwareComponent = function ContextComponent(props) {
    return /*#__PURE__*/React__default.createElement(ChatContext.Consumer, null, function (context) {
      var mergedProps = _objectSpread$1(_objectSpread$1({}, context), props);

      return /*#__PURE__*/React__default.createElement(OriginalComponent, mergedProps);
    });
  };

  ContextAwareComponent.displayName = OriginalComponent.displayName || OriginalComponent.name || 'Component';
  ContextAwareComponent.displayName = ContextAwareComponent.displayName.replace('Base', '');
  return ContextAwareComponent;
}
var ChannelContext = React__default.createContext({});
function withChannelContext(OriginalComponent) {
  var ContextAwareComponent = function ContextComponent(props) {
    return /*#__PURE__*/React__default.createElement(ChannelContext.Consumer, null, function (channelContext) {
      return /*#__PURE__*/React__default.createElement(OriginalComponent, _extends({}, channelContext, props));
    });
  };

  ContextAwareComponent.displayName = OriginalComponent.displayName || OriginalComponent.name || 'Component';
  ContextAwareComponent.displayName = ContextAwareComponent.displayName.replace('Base', '');
  return ContextAwareComponent;
}
var TranslationContext = React__default.createContext({
  t: function t(msg) {
    return msg;
  },
  tDateTimeParser: function tDateTimeParser(input) {
    return Dayjs(input);
  }
});
function withTranslationContext(OriginalComponent) {
  var ContextAwareComponent = function ContextComponent(props) {
    return /*#__PURE__*/React__default.createElement(TranslationContext.Consumer, null, function (translationContext) {
      return /*#__PURE__*/React__default.createElement(OriginalComponent, _extends({}, translationContext, props));
    });
  };

  ContextAwareComponent.displayName = OriginalComponent.displayName || OriginalComponent.name || 'Component';
  ContextAwareComponent.displayName = ContextAwareComponent.displayName.replace('Base', '');
  return ContextAwareComponent;
}

function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
/**
 * Card - Simple Card Layout
 *
 * @example ./docs/Card.md
 * @type Card { import("../../types/index.d.ts").CardProps }
 */

var Card = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Card, _React$PureComponent);

  var _super = _createSuper$1(Card);

  function Card() {
    var _this;

    _classCallCheck(this, Card);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "trimUrl", function (url) {
      var trimmedUrl;

      if (url !== undefined && url !== null) {
        trimmedUrl = url.replace(/^(?:https?:\/\/)?(?:www\.)?/i, '').split('/')[0];
      }

      return trimmedUrl;
    });

    return _this;
  }

  _createClass(Card, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          title_link = _this$props.title_link,
          text = _this$props.text,
          type = _this$props.type,
          image_url = _this$props.image_url,
          thumb_url = _this$props.thumb_url,
          og_scrape_url = _this$props.og_scrape_url,
          t = _this$props.t;
      var image = thumb_url || image_url;

      if (!title && !title_link && !image) {
        return /*#__PURE__*/React__default.createElement("div", {
          className: "str-chat__message-attachment-card str-chat__message-attachment-card--".concat(type)
        }, /*#__PURE__*/React__default.createElement("div", {
          className: "str-chat__message-attachment-card--content"
        }, /*#__PURE__*/React__default.createElement("div", {
          className: "str-chat__message-attachment-card--text"
        }, t('this content could not be displayed'))));
      }

      if (!title_link && !og_scrape_url) {
        return null;
      }

      return /*#__PURE__*/React__default.createElement("div", {
        className: "str-chat__message-attachment-card str-chat__message-attachment-card--".concat(type)
      }, image && /*#__PURE__*/React__default.createElement("div", {
        className: "str-chat__message-attachment-card--header"
      }, /*#__PURE__*/React__default.createElement("img", {
        src: image,
        alt: image
      })), /*#__PURE__*/React__default.createElement("div", {
        className: "str-chat__message-attachment-card--content"
      }, /*#__PURE__*/React__default.createElement("div", {
        className: "str-chat__message-attachment-card--flex"
      }, title && /*#__PURE__*/React__default.createElement("div", {
        className: "str-chat__message-attachment-card--title"
      }, title), text && /*#__PURE__*/React__default.createElement("div", {
        className: "str-chat__message-attachment-card--text"
      }, text), (title_link || og_scrape_url) && /*#__PURE__*/React__default.createElement(SafeAnchor, {
        href: title_link || og_scrape_url,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "str-chat__message-attachment-card--url"
      }, this.trimUrl(title_link || og_scrape_url))), type === 'giphy' && /*#__PURE__*/React__default.createElement("img", {
        className: "str-chat__message-attachment-card__giphy-logo",
        src: giphyLogo,
        alt: "giphy logo"
      })));
    }
  }]);

  return Card;
}(React__default.PureComponent);

_defineProperty(Card, "propTypes", {
  /** Title returned by the OG scraper */
  title: PropTypes.string,

  /** Link returned by the OG scraper */
  title_link: PropTypes.string,

  /** The scraped url, used as a fallback if the OG-data doesn't include a link */
  og_scrape_url: PropTypes.string,

  /** The url of the full sized image */
  image_url: PropTypes.string,

  /** The url for thumbnail sized image*/
  thumb_url: PropTypes.string,

  /** Description returned by the OG scraper */
  text: PropTypes.string
});

var Card$1 = withTranslationContext(Card);

function _createSuper$2(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$2(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$2() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
/**
 * Image - Small wrapper around an image tag, supports thumbnails
 *
 * @example ./docs/Image.md
 * @extends PureComponent
 */

var Image = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Image, _React$PureComponent);

  var _super = _createSuper$2(Image);

  function Image() {
    var _this;

    _classCallCheck(this, Image);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      modalIsOpen: false,
      currentIndex: 0
    });

    _defineProperty(_assertThisInitialized(_this), "toggleModal", function () {
      _this.setState(function (state) {
        return {
          modalIsOpen: !state.modalIsOpen
        };
      });
    });

    return _this;
  }

  _createClass(Image, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          image_url = _this$props.image_url,
          thumb_url = _this$props.thumb_url,
          fallback = _this$props.fallback;
      var formattedArray = [{
        src: image_url || thumb_url
      }];
      return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("img", {
        className: "str-chat__message-attachment--img",
        onClick: this.toggleModal,
        src: thumb_url || image_url,
        alt: fallback
      }), /*#__PURE__*/React__default.createElement(ModalGateway, null, this.state.modalIsOpen ? /*#__PURE__*/React__default.createElement(Modal$1, {
        onClose: this.toggleModal
      }, /*#__PURE__*/React__default.createElement(Carousel, {
        views: formattedArray
      })) : null));
    }
  }]);

  return Image;
}(React__default.PureComponent);

_defineProperty(Image, "propTypes", {
  /** The full size image url */
  image_url: PropTypes.string,

  /** The thumb url */
  thumb_url: PropTypes.string,

  /** The text fallback for the image */
  fallback: PropTypes.string
});

function _createSuper$3(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$3(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$3() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
/**
 * AttachmentActions - The actions you can take on an attachment
 *
 * @example ./docs/AttachmentActions.md
 * @extends PureComponent
 */

var AttachmentActions = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(AttachmentActions, _React$PureComponent);

  var _super = _createSuper$3(AttachmentActions);

  function AttachmentActions() {
    _classCallCheck(this, AttachmentActions);

    return _super.apply(this, arguments);
  }

  _createClass(AttachmentActions, [{
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          text = _this$props.text,
          id = _this$props.id,
          actions = _this$props.actions,
          actionHandler = _this$props.actionHandler;
      return /*#__PURE__*/React__default.createElement("div", {
        className: "str-chat__message-attachment-actions"
      }, /*#__PURE__*/React__default.createElement("form", {
        className: "str-chat__message-attachment-actions-form"
      }, /*#__PURE__*/React__default.createElement("span", {
        key: 0
      }, text), actions.map(function (action) {
        return /*#__PURE__*/React__default.createElement("button", {
          className: "str-chat__message-attachment-actions-button str-chat__message-attachment-actions-button--".concat(action.style),
          key: "".concat(id, "-").concat(action.value),
          "data-value": action.value,
          onClick: actionHandler.bind(_this, action.name, action.value)
        }, action.text);
      })));
    }
  }]);

  return AttachmentActions;
}(React__default.PureComponent);

_defineProperty(AttachmentActions, "propTypes", {
  /** Unique id for action button key. Key is generated by concatenating this id with action value - {`${id}-${action.value}`} */
  id: PropTypes.string.isRequired,

  /** The text for the form input */
  text: PropTypes.string,

  /** A list of actions */
  actions: PropTypes.array.isRequired,

  /**
   *
   * Handler for actions. Actions in combination with attachments can be used to build [commands](https://getstream.io/chat/docs/#channel_commands).
   *
   * @param name {string} Name of action
   * @param value {string} Value of action
   * @param event Dom event that triggered this handler
   */
  actionHandler: PropTypes.func.isRequired
});

function _createSuper$4(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$4(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$4() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var Audio = /*#__PURE__*/function (_React$Component) {
  _inherits(Audio, _React$Component);

  var _super = _createSuper$4(Audio);

  function Audio(props) {
    var _this;

    _classCallCheck(this, Audio);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "playAudio", function () {
      if (_this.audioRef.current !== null) {
        _this.audioRef.current.pause();

        _this.updateProgress();

        _this.setState({
          playing: true,
          updateProgress: setInterval(_this.updateProgress, 500)
        }); //$FlowFixMe


        _this.audioRef.current.play();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "pauseAudio", function () {
      if (_this.audioRef.current !== null) {
        _this.audioRef.current.pause();
      }

      _this.setState({
        playing: false
      });

      window.clearInterval(_this.state.updateProgress);
    });

    _defineProperty(_assertThisInitialized(_this), "updateProgress", function () {
      if (_this.audioRef.current !== null) {
        var position = _this.audioRef.current.currentTime;
        var duration = _this.audioRef.current.duration;
        var progress = 100 / duration * position;

        _this.setState({
          progress: progress
        });

        if (position === duration) {
          _this.pauseAudio();
        }
      }
    });

    _this.state = {
      open: false,
      playing: false,
      progress: 0,
      updateProgress: null
    };
    _this.audioRef = createRef();
    return _this;
  }

  _createClass(Audio, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.clearInterval(this.state.updateProgress);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var og = this.props.og;
      var url = og.asset_url;
      var image = og.image_url;
      return /*#__PURE__*/createElement("div", {
        className: "str-chat__audio"
      }, /*#__PURE__*/createElement("div", {
        className: "str-chat__audio__wrapper"
      }, /*#__PURE__*/createElement("audio", {
        ref: this.audioRef
      }, /*#__PURE__*/createElement("source", {
        src: url,
        type: "audio/mp3"
      })), /*#__PURE__*/createElement("div", {
        className: "str-chat__audio__image"
      }, /*#__PURE__*/createElement("div", {
        className: "str-chat__audio__image--overlay"
      }, !this.state.playing ? /*#__PURE__*/createElement("div", {
        onClick: function onClick() {
          return _this2.playAudio();
        },
        className: "str-chat__audio__image--button"
      }, /*#__PURE__*/createElement("svg", {
        width: "40",
        height: "40",
        viewBox: "0 0 64 64",
        xmlns: "http://www.w3.org/2000/svg"
      }, /*#__PURE__*/createElement("path", {
        d: "M32 58c14.36 0 26-11.64 26-26S46.36 6 32 6 6 17.64 6 32s11.64 26 26 26zm0 6C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32zm13.237-28.412L26.135 45.625a3.27 3.27 0 0 1-4.426-1.4 3.319 3.319 0 0 1-.372-1.47L21 23.36c-.032-1.823 1.41-3.327 3.222-3.358a3.263 3.263 0 0 1 1.473.322l19.438 9.36a3.311 3.311 0 0 1 .103 5.905z",
        fillRule: "nonzero"
      }))) : /*#__PURE__*/createElement("div", {
        onClick: function onClick() {
          return _this2.pauseAudio();
        },
        className: "str-chat__audio__image--button"
      }, /*#__PURE__*/createElement("svg", {
        width: "40",
        height: "40",
        viewBox: "0 0 64 64",
        xmlns: "http://www.w3.org/2000/svg"
      }, /*#__PURE__*/createElement("path", {
        d: "M32 58.215c14.478 0 26.215-11.737 26.215-26.215S46.478 5.785 32 5.785 5.785 17.522 5.785 32 17.522 58.215 32 58.215zM32 64C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32zm-7.412-45.56h2.892a2.17 2.17 0 0 1 2.17 2.17v23.865a2.17 2.17 0 0 1-2.17 2.17h-2.892a2.17 2.17 0 0 1-2.17-2.17V20.61a2.17 2.17 0 0 1 2.17-2.17zm12.293 0h2.893a2.17 2.17 0 0 1 2.17 2.17v23.865a2.17 2.17 0 0 1-2.17 2.17h-2.893a2.17 2.17 0 0 1-2.17-2.17V20.61a2.17 2.17 0 0 1 2.17-2.17z",
        fillRule: "nonzero"
      })))), /*#__PURE__*/createElement("img", {
        src: image,
        alt: "".concat(og.description)
      })), /*#__PURE__*/createElement("div", {
        className: "str-chat__audio__content"
      }, /*#__PURE__*/createElement("span", {
        className: "str-chat__audio__content--title"
      }, /*#__PURE__*/createElement("strong", null, og.title)), /*#__PURE__*/createElement("span", {
        className: "str-chat__audio__content--subtitle"
      }, og.text), /*#__PURE__*/createElement("div", {
        className: "str-chat__audio__content--progress"
      }, /*#__PURE__*/createElement("div", {
        style: {
          width: "".concat(this.state.progress, "%")
        }
      })))));
    }
  }]);

  return Audio;
}(Component);

_defineProperty(Audio, "propTypes", {
  /** Attachment object of audio type */
  og: PropTypes.object
});

function _createSuper$5(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$5(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$5() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
/**
 * Attachment - The message attachment
 *
 * @example ./docs/Attachment.md
 * @extends PureComponent
 */

var Attachment = /*#__PURE__*/function (_PureComponent) {
  _inherits(Attachment, _PureComponent);

  var _super = _createSuper$5(Attachment);

  function Attachment() {
    var _this;

    _classCallCheck(this, Attachment);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "attachmentRef", React__default.createRef());

    _defineProperty(_assertThisInitialized(_this), "renderAttachmentActions", function (a) {
      return /*#__PURE__*/React__default.createElement(AttachmentActions, _extends({
        key: 'key-actions-' + a.id
      }, a, {
        actionHandler: _this.props.actionHandler
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "renderAttachment", function (a) {
      return /*#__PURE__*/React__default.createElement("div", {
        className: "str-chat__attachment",
        key: "key-image-".concat(a.id)
      }, /*#__PURE__*/React__default.createElement(Card$1, _extends({}, a, {
        key: "key-card-".concat(a.id)
      })), _this.renderAttachmentActions(a));
    });

    return _this;
  }

  _createClass(Attachment, [{
    key: "attachmentType",
    value: function attachmentType(a) {
      var type, extra;

      if (a.actions && a.actions.length > 0) {
        extra = 'actions';
      }

      if (a.type === 'giphy' || a.type === 'imgur') {
        type = 'card';
      } else if (a.type === 'image' && (a.title_link || a.og_scrape_url)) {
        type = 'card';
      } else if (a.type === 'image') {
        type = 'image';
      } else if (a.type === 'file') {
        type = 'file';
      } else if (a.type === 'audio') {
        type = 'audio';
      } else if (a.type === 'video') {
        type = 'media';
      } else {
        type = 'card';
        extra = 'no-image';
      }

      return {
        type: type,
        extra: extra
      };
    }
  }, {
    key: "render",
    value: function render() {
      var a = this.props.attachment;

      if (!a) {
        return null;
      }

      var _this$attachmentType = this.attachmentType(a),
          type = _this$attachmentType.type,
          extra = _this$attachmentType.extra;

      if (type === 'card' && !a.title_link && !a.og_scrape_url) {
        return null;
      }

      var results = [];

      if (type === 'image') {
        if (a.actions && a.actions.length) {
          results.push( /*#__PURE__*/React__default.createElement("div", {
            className: "str-chat__attachment",
            key: "key-image-".concat(a.id)
          }, /*#__PURE__*/React__default.createElement(Image, a), this.renderAttachmentActions(a)));
        } else {
          results.push( /*#__PURE__*/React__default.createElement(Image, _extends({}, a, {
            key: "key-image-".concat(a.id)
          })));
        }
      } else if (type === 'file') {
        a.asset_url && results.push( /*#__PURE__*/React__default.createElement("div", {
          className: "str-chat__message-attachment-file--item",
          key: "key-file-".concat(a.id)
        }, /*#__PURE__*/React__default.createElement(FileIcon, {
          mimeType: a.mime_type,
          filename: a.title,
          big: true,
          size: 30
        }), /*#__PURE__*/React__default.createElement("div", {
          className: "str-chat__message-attachment-file--item-text"
        }, /*#__PURE__*/React__default.createElement(SafeAnchor, {
          href: a.asset_url,
          target: "_blank",
          download: true
        }, a.title), a.file_size && /*#__PURE__*/React__default.createElement("span", null, prettybytes(a.file_size)))));
      } else if (type === 'audio') {
        results.push( /*#__PURE__*/React__default.createElement("div", {
          className: "str-chat__attachment",
          key: "key-video-".concat(a.id)
        }, /*#__PURE__*/React__default.createElement(Audio, {
          og: a
        })));
      } else if (type === 'media') {
        if (a.actions && a.actions.length) {
          results.push( /*#__PURE__*/React__default.createElement("div", {
            className: "str-chat__attachment",
            key: "key-video-".concat(a.id)
          }, /*#__PURE__*/React__default.createElement("div", {
            className: "str-chat__player-wrapper"
          }, /*#__PURE__*/React__default.createElement(ReactPlayer, {
            className: "react-player",
            url: a.asset_url,
            width: "100%",
            height: "100%",
            controls: true
          })), this.renderAttachmentActions(a)));
        } else {
          results.push( /*#__PURE__*/React__default.createElement("div", {
            className: "str-chat__player-wrapper",
            key: "key-video-".concat(a.id)
          }, /*#__PURE__*/React__default.createElement(ReactPlayer, {
            className: "react-player",
            url: a.asset_url,
            width: "100%",
            height: "100%",
            controls: true
          })));
        }
      } else {
        if (a.actions && a.actions.length) {
          results.push(this.renderAttachment(a));
        } else {
          results.push( /*#__PURE__*/React__default.createElement(Card$1, _extends({}, a, {
            key: "key-card-".concat(a.id)
          })));
        }
      }

      if (results.length === 0) return null;
      return /*#__PURE__*/React__default.createElement("div", {
        className: "str-chat__message-attachment str-chat__message-attachment--".concat(type, " str-chat__message-attachment--").concat(a.type, " str-chat__message-attachment--").concat(type, "--").concat(extra),
        ref: this.attachmentRef
      }, results);
    }
  }]);

  return Attachment;
}(PureComponent);

_defineProperty(Attachment, "propTypes", {
  /**
   * The attachment to render
   * @see See [Attachment structure](https://getstream.io/chat/docs/#message_format)
   *
   *  */
  attachment: PropTypes.object.isRequired,

  /**
   *
   * Handler for actions. Actions in combination with attachments can be used to build [commands](https://getstream.io/chat/docs/#channel_commands).
   *
   * @param name {string} Name of action
   * @param value {string} Value of action
   * @param event Dom event that triggered this handler
   */
  actionHandler: PropTypes.func.isRequired
});

Attachment.propTypes = {};

function _createSuper$6(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$6(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$6() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
/**
 * Avatar - A round avatar image with fallback to username's first letter
 *
 * @example ./docs/Avatar.md
 * @extends PureComponent
 */

var Avatar = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Avatar, _React$PureComponent);

  var _super = _createSuper$6(Avatar);

  function Avatar() {
    var _this;

    _classCallCheck(this, Avatar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      errored: false,
      loaded: false
    });

    _defineProperty(_assertThisInitialized(_this), "getInitials", function (name) {
      return name ? name.split(' ').slice(0, 1).map(function (name) {
        return name.charAt(0);
      }) : null;
    });

    _defineProperty(_assertThisInitialized(_this), "onLoad", function () {
      _this.setState({
        loaded: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onError", function () {
      _this.setState({
        errored: true
      });
    });

    return _this;
  }

  _createClass(Avatar, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.image !== this.props.image) {
        this.setState({
          loaded: false,
          errored: false
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          size = _this$props.size,
          name = _this$props.name,
          shape = _this$props.shape,
          image = _this$props.image;
      var initials = this.getInitials(name);
      return /*#__PURE__*/React__default.createElement("div", {
        className: "str-chat__avatar str-chat__avatar--".concat(shape),
        title: name,
        style: {
          width: size,
          height: size,
          flexBasis: size,
          lineHeight: size + 'px',
          fontSize: size / 2
        }
      }, image && !this.state.errored ? /*#__PURE__*/React__default.createElement("img", {
        src: image,
        alt: initials,
        className: 'str-chat__avatar-image' + (this.state.loaded ? ' str-chat__avatar-image--loaded' : ''),
        style: {
          width: size,
          height: size,
          flexBasis: size,
          objectFit: 'cover'
        },
        onLoad: this.onLoad,
        onError: this.onError
      }) : /*#__PURE__*/React__default.createElement("div", {
        className: "str-chat__avatar-fallback"
      }, initials));
    }
  }]);

  return Avatar;
}(React__default.PureComponent);

_defineProperty(Avatar, "propTypes", {
  /** image url */
  image: PropTypes.string,

  /** name of the picture, used for title tag fallback */
  name: PropTypes.string,

  /** shape of the avatar, circle, rounded or square */
  shape: PropTypes.oneOf(['circle', 'rounded', 'square']),

  /** size in pixels */
  size: PropTypes.number
});

_defineProperty(Avatar, "defaultProps", {
  size: 32,
  shape: 'circle'
});

function _createSuper$7(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$7(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$7() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
/**
 * LoadingIndicator - Just a simple loading spinner..
 *
 * @example ./docs/LoadingIndicator.md
 * @extends PureComponent
 */

var LoadingIndicator = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(LoadingIndicator, _React$PureComponent);

  var _super = _createSuper$7(LoadingIndicator);

  function LoadingIndicator() {
    var _this;

    _classCallCheck(this, LoadingIndicator);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "stopRef", React__default.createRef());

    return _this;
  }

  _createClass(LoadingIndicator, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          size = _this$props.size,
          color = _this$props.color;
      return /*#__PURE__*/React__default.createElement("div", {
        className: 'str-chat__loading-indicator ' + color,
        style: {
          width: size,
          height: size
        }
      }, /*#__PURE__*/React__default.createElement("svg", {
        width: size,
        height: size,
        viewBox: "0 0 30 30",
        xmlns: "http://www.w3.org/2000/svg"
      }, /*#__PURE__*/React__default.createElement("defs", null, /*#__PURE__*/React__default.createElement("linearGradient", {
        x1: "50%",
        y1: "0%",
        x2: "50%",
        y2: "100%",
        id: "a"
      }, /*#__PURE__*/React__default.createElement("stop", {
        stopColor: "#FFF",
        stopOpacity: "0",
        offset: "0%"
      }), /*#__PURE__*/React__default.createElement("stop", {
        ref: this.stopRef,
        offset: "100%",
        stopColor: color,
        stopOpacity: "1",
        style: {
          stopColor: color
        }
      }))), /*#__PURE__*/React__default.createElement("path", {
        d: "M2.518 23.321l1.664-1.11A12.988 12.988 0 0 0 15 28c7.18 0 13-5.82 13-13S22.18 2 15 2V0c8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15-5.206 0-9.792-2.652-12.482-6.679z",
        fill: "url(#a)",
        fillRule: "evenodd"
      })));
    }
  }]);

  return LoadingIndicator;
}(React__default.PureComponent);

_defineProperty(LoadingIndicator, "propTypes", {
  /** The size of the loading icon */
  size: PropTypes.number,

  /** Set the color of the LoadingIndicator */
  color: PropTypes.string
});

_defineProperty(LoadingIndicator, "defaultProps", {
  size: 15,
  color: '#006CFF'
});

function _createSuper$8(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$8(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$8() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
/**
 * LoadingErrorIndicator - UI component for error indicator in Channel.
 *
 * @example ./docs/LoadingErrorIndicator.md
 * @extends PureComponent
 */

var LoadingErrorIndicator = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(LoadingErrorIndicator, _React$PureComponent);

  var _super = _createSuper$8(LoadingErrorIndicator);

  function LoadingErrorIndicator() {
    _classCallCheck(this, LoadingErrorIndicator);

    return _super.apply(this, arguments);
  }

  _createClass(LoadingErrorIndicator, [{
    key: "render",
    value: function render() {
      if (!this.props.error) return null;
      var t = this.props.t;
      return /*#__PURE__*/React__default.createElement("div", null, t('Error: {{ errorMessage }}', {
        errorMessage: this.props.error.message
      }));
    }
  }]);

  return LoadingErrorIndicator;
}(React__default.PureComponent);

_defineProperty(LoadingErrorIndicator, "propTypes", {
  /** Error object */
  error: PropTypes.oneOfType([PropTypes.shape({
    message: PropTypes.string
  }), PropTypes.bool])
});

_defineProperty(LoadingErrorIndicator, "defaultProps", {
  error: false
});

LoadingErrorIndicator = withTranslationContext(LoadingErrorIndicator);

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$2(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$2(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var emojiSetDef = {
  spriteUrl: 'https://getstream.imgix.net/images/emoji-sprite.png',
  size: 20,
  sheetColumns: 2,
  sheetRows: 3,
  sheetSize: 64
};
var commonEmoji = {
  emoticons: [],
  short_names: [],
  custom: true
};
var defaultMinimalEmojis = [_objectSpread$2(_objectSpread$2({
  id: 'like',
  name: 'like',
  colons: ':+1:',
  sheet_x: 0,
  sheet_y: 0
}, commonEmoji), emojiSetDef), _objectSpread$2(_objectSpread$2({
  id: 'love',
  name: 'love',
  colons: ':heart:',
  sheet_x: 1,
  sheet_y: 2
}, commonEmoji), emojiSetDef), _objectSpread$2(_objectSpread$2({
  id: 'haha',
  name: 'haha',
  colons: ':joy:',
  sheet_x: 1,
  sheet_y: 0
}, commonEmoji), emojiSetDef), _objectSpread$2(_objectSpread$2({
  id: 'wow',
  name: 'wow',
  colons: ':astonished:',
  sheet_x: 0,
  sheet_y: 2
}, commonEmoji), emojiSetDef), _objectSpread$2(_objectSpread$2({
  id: 'sad',
  name: 'sad',
  colons: ':pensive:',
  sheet_x: 0,
  sheet_y: 1
}, commonEmoji), emojiSetDef), _objectSpread$2(_objectSpread$2({
  id: 'angry',
  name: 'angry',
  colons: ':angry:',
  sheet_x: 1,
  sheet_y: 1
}, commonEmoji), emojiSetDef)];
var d = Object.assign({}, data);
d.emojis = {}; // use this only for small lists like in ReactionSelector

var emojiData = d;
var isOnlyEmojis = function isOnlyEmojis(text) {
  if (!text) return false;
  var noEmojis = text.replace(emojiRegex(), '');
  var noSpace = noEmojis.replace(/[\s\n]/gm, '');
  return !noSpace;
};
var isPromise = function isPromise(thing) {
  return thing && typeof thing.then === 'function';
};
var byDate = function byDate(a, b) {
  return a.created_at - b.created_at;
}; // https://stackoverflow.com/a/29234240/7625485

/**
 * @deprecated This function is deprecated and will be removed in future major release.
 * @param {*} dict
 * @param {*} currentUserId
 */

var formatArray = function formatArray(dict, currentUserId) {
  var arr2 = Object.keys(dict);
  var arr3 = [];
  arr2.forEach(function (item, i) {
    if (currentUserId === dict[arr2[i]].user.id) {
      return;
    }

    arr3.push(dict[arr2[i]].user.name || dict[arr2[i]].user.id);
  });
  var outStr = '';

  if (arr3.length === 1) {
    outStr = arr3[0] + ' is typing...';
  } else if (arr3.length === 2) {
    //joins all with "and" but =no commas
    //example: "bob and sam"
    outStr = arr3.join(' and ') + ' are typing...';
  } else if (arr3.length > 2) {
    //joins all with commas, but last one gets ", and" (oxford comma!)
    //example: "bob, joe, and sam"
    outStr = arr3.slice(0, -1).join(', ') + ', and ' + arr3.slice(-1) + ' are typing...';
  }

  return outStr;
};
var renderText = function renderText(message) {
  // take the @ mentions and turn them into markdown?
  // translate links
  var text = message.text;
  var mentioned_users = message.mentioned_users;

  if (!text) {
    return;
  }

  var allowed = ['html', 'root', 'text', 'break', 'paragraph', 'emphasis', 'strong', 'link', 'list', 'listItem', 'code', 'inlineCode', 'blockquote', 'delete'];
  var urls = anchorme(text, {
    list: true
  });

  var _iterator = _createForOfIteratorHelper(urls),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var urlInfo = _step.value;
      var displayLink = truncate(urlInfo.encoded.replace(/^(www\.)/, ''), {
        length: 20,
        omission: '...'
      });

      var _mkdown = "[".concat(displayLink, "](").concat(urlInfo.protocol).concat(urlInfo.encoded, ")");

      text = text.replace(urlInfo.raw, _mkdown);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  var newText = text;

  if (mentioned_users && mentioned_users.length) {
    for (var i = 0; i < mentioned_users.length; i++) {
      var username = mentioned_users[i].name || mentioned_users[i].id;
      var mkdown = "**@".concat(username, "**");
      var re = new RegExp("@".concat(username), 'g');
      newText = newText.replace(re, mkdown);
    }
  }

  return /*#__PURE__*/React__default.createElement(ReactMarkdown, {
    allowedTypes: allowed,
    source: newText,
    linkTarget: "_blank",
    plugins: [],
    escapeHtml: true,
    skipHtml: false,
    unwrapDisallowed: true
  });
}; // https://stackoverflow.com/a/6860916/2570866

function generateRandomId() {
  // prettier-ignore
  return S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4();
}

function S4() {
  return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
}

var smartRender = function smartRender(ElementOrComponentOrLiteral, props, fallback) {
  if (ElementOrComponentOrLiteral === undefined) {
    ElementOrComponentOrLiteral = fallback;
  }

  if (React__default.isValidElement(ElementOrComponentOrLiteral)) {
    // Flow cast through any, to make flow believe it's a React.Element
    var element = ElementOrComponentOrLiteral; // eslint-disable-line

    return element;
  } // Flow cast through any to remove React.Element after previous check


  var ComponentOrLiteral = ElementOrComponentOrLiteral;

  if (typeof ComponentOrLiteral === 'string' || typeof ComponentOrLiteral === 'number' || typeof ComponentOrLiteral === 'boolean' || ComponentOrLiteral == null) {
    return ComponentOrLiteral;
  }

  return /*#__PURE__*/React__default.createElement(ComponentOrLiteral, props);
};
var MESSAGE_ACTIONS = {
  edit: 'edit',
  delete: 'delete',
  flag: 'flag',
  mute: 'mute'
};
var filterEmoji = function filterEmoji(emoji) {
  if (emoji.name === 'White Smiling Face' || emoji.name === 'White Frowning Face') {
    return false;
  }

  return true;
};
var getReadByTooltipText = function getReadByTooltipText(users, t, client) {
  var outStr = ''; // first filter out client user, so restLength won't count it

  var otherUsers = users.filter(function (item) {
    return item.id !== client.user.id;
  }).map(function (item) {
    return item.name || item.id;
  });
  var slicedArr = otherUsers.slice(0, 5);
  var restLength = otherUsers.length - slicedArr.length;

  if (slicedArr.length === 1) {
    outStr = slicedArr[0] + ' ';
  } else if (slicedArr.length === 2) {
    //joins all with "and" but =no commas
    //example: "bob and sam"
    outStr = t('{{ firstUser }} and {{ secondUser }}', {
      firstUser: slicedArr[0],
      secondUser: slicedArr[1]
    });
  } else if (slicedArr.length > 2) {
    //joins all with commas, but last one gets ", and" (oxford comma!)
    //example: "bob, joe, sam and 4 more"
    if (restLength === 0) {
      // mutate slicedArr to remove last user to display it separately
      var lastUser = slicedArr.splice(slicedArr.length - 2, 1);
      outStr = t('{{ commaSeparatedUsers }}, and {{ lastUser }}', {
        commaSeparatedUsers: slicedArr.join(', '),
        lastUser: lastUser
      });
    } else {
      outStr = t('{{ commaSeparatedUsers }} and {{ moreCount }} more', {
        commaSeparatedUsers: slicedArr.join(', '),
        moreCount: restLength
      });
    }
  }

  return outStr;
};

function _createSuper$9(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$9(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$9() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
/**
 * MessageActionsBox - A component for taking action on a message
 *
 * @example ./docs/MessageActionsBox.md
 * @extends PureComponent
 */

var MessageActionsBox = /*#__PURE__*/function (_React$Component) {
  _inherits(MessageActionsBox, _React$Component);

  var _super = _createSuper$9(MessageActionsBox);

  function MessageActionsBox() {
    var _this;

    _classCallCheck(this, MessageActionsBox);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "actionsBoxRef", React__default.createRef());

    _defineProperty(_assertThisInitialized(_this), "state", {
      reverse: false,
      rect: null
    });

    return _this;
  }

  _createClass(MessageActionsBox, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "componentDidUpdate",
    value: function () {
      var _componentDidUpdate = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(prevProps) {
        var ml;
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(!prevProps.open && this.props.open)) {
                  _context.next = 6;
                  break;
                }

                if (!(this.state.rect === null)) {
                  _context.next = 4;
                  break;
                }

                _context.next = 4;
                return this.setState({
                  rect: this.actionsBoxRef.current.getBoundingClientRect()
                });

              case 4:
                ml = this.props.messageListRect;

                if (this.props.mine) {
                  this.setState({
                    reverse: this.state.rect.left < ml.left ? true : false
                  });
                } else if (!this.props.mine) {
                  this.setState({
                    reverse: this.state.rect.right + 5 > ml.right ? true : false
                  });
                }

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidUpdate(_x) {
        return _componentDidUpdate.apply(this, arguments);
      }

      return componentDidUpdate;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          handleFlag = _this$props.handleFlag,
          handleMute = _this$props.handleMute,
          handleEdit = _this$props.handleEdit,
          handleDelete = _this$props.handleDelete,
          getMessageActions = _this$props.getMessageActions,
          t = _this$props.t;
      var messageActions = getMessageActions();
      return /*#__PURE__*/React__default.createElement("div", {
        className: "str-chat__message-actions-box\n          ".concat(this.props.open ? 'str-chat__message-actions-box--open' : '', "\n          ").concat(this.props.mine ? 'str-chat__message-actions-box--mine' : '', "\n          ").concat(this.state.reverse ? 'str-chat__message-actions-box--reverse' : '', "\n        "),
        ref: this.actionsBoxRef
      }, /*#__PURE__*/React__default.createElement("ul", {
        className: "str-chat__message-actions-list"
      }, messageActions.indexOf(MESSAGE_ACTIONS.flag) > -1 && /*#__PURE__*/React__default.createElement("button", {
        onClick: handleFlag
      }, /*#__PURE__*/React__default.createElement("li", {
        className: "str-chat__message-actions-list-item"
      }, t('Flag'))), messageActions.indexOf(MESSAGE_ACTIONS.mute) > -1 && /*#__PURE__*/React__default.createElement("button", {
        onClick: handleMute
      }, /*#__PURE__*/React__default.createElement("li", {
        className: "str-chat__message-actions-list-item"
      }, t('Mute'))), messageActions.indexOf(MESSAGE_ACTIONS.edit) > -1 && /*#__PURE__*/React__default.createElement("button", {
        onClick: handleEdit
      }, /*#__PURE__*/React__default.createElement("li", {
        className: "str-chat__message-actions-list-item"
      }, t('Edit Message'))), messageActions.indexOf(MESSAGE_ACTIONS.delete) > -1 && /*#__PURE__*/React__default.createElement("button", {
        onClick: handleDelete
      }, /*#__PURE__*/React__default.createElement("li", {
        className: "str-chat__message-actions-list-item"
      }, t('Delete')))));
    }
  }]);

  return MessageActionsBox;
}(React__default.Component);

_defineProperty(MessageActionsBox, "propTypes", {
  /** If the message actions box should be open or not */
  open: PropTypes.bool.isRequired,

  /**
   * @deprecated
   *
   *  The message component, most logic is delegated to this component and MessageActionsBox uses the following functions explicitly:
   *  `handleFlag`, `handleMute`, `handleEdit`, `handleDelete`, `canDeleteMessage`, `canEditMessage`, `isMyMessage`, `isAdmin`
   */
  Message: PropTypes.oneOfType([PropTypes.node, PropTypes.func, PropTypes.object]).isRequired,

  /** If message belongs to current user. */
  mine: PropTypes.bool,

  /** DOMRect object for parent MessageList component */
  messageListRect: PropTypes.object,

  /**
   * Handler for flaging a current message
   *
   * @param event React's MouseEventHandler event
   * @returns void
   * */
  handleFlag: PropTypes.func,

  /**
   * Handler for muting a current message
   *
   * @param event React's MouseEventHandler event
   * @returns void
   * */
  handleMute: PropTypes.func,

  /**
   * Handler for editing a current message
   *
   * @param event React's MouseEventHandler event
   * @returns void
   * */
  handleEdit: PropTypes.func,

  /**
   * Handler for deleting a current message
   *
   * @param event React's MouseEventHandler event
   * @returns void
   * */
  handleDelete: PropTypes.func,

  /**
   * Returns array of avalable message actions for current message.
   * Please check [Message](https://github.com/GetStream/stream-chat-react/blob/master/src/components/Message.js) component for default implementation.
   */
  getMessageActions: PropTypes.func
});

_defineProperty(MessageActionsBox, "defaultProps", {
  open: false
});

MessageActionsBox = withTranslationContext(MessageActionsBox);

function ownKeys$3(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$3(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$3(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper$a(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$a(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$a() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var ReactionsList = /*#__PURE__*/function (_React$Component) {
  _inherits(ReactionsList, _React$Component);

  var _super = _createSuper$a(ReactionsList);

  function ReactionsList(props) {
    var _this;

    _classCallCheck(this, ReactionsList);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "_renderReactions", function (reactions) {
      var reactionsByType = {};
      reactions.map(function (item) {
        if (reactions[item.type] === undefined) {
          return reactionsByType[item.type] = [item];
        } else {
          return reactionsByType[item.type] = [].concat(_toConsumableArray(reactionsByType[item.type]), [item]);
        }
      });

      var reactionsEmojis = _this.props.reactionOptions.reduce(function (acc, cur) {
        return _objectSpread$3(_objectSpread$3({}, acc), {}, _defineProperty({}, cur.id, cur));
      }, {});

      return Object.keys(reactionsByType).map(function (type) {
        return reactionsEmojis[type] ? /*#__PURE__*/React__default.createElement("li", {
          key: reactionsEmojis[type].id
        }, /*#__PURE__*/React__default.createElement(NimbleEmoji, _extends({
          emoji: reactionsEmojis[type]
        }, emojiSetDef, {
          size: 16,
          data: emojiData
        })), ' ', "\xA0") : null;
      });
    });

    _defineProperty(_assertThisInitialized(_this), "_getReactionCount", function () {
      var reaction_counts = _this.props.reaction_counts;
      var count = null;

      if (reaction_counts !== null && reaction_counts !== undefined && Object.keys(reaction_counts).length > 0) {
        count = 0;
        Object.keys(reaction_counts).map(function (key) {
          return count += reaction_counts[key];
        });
      }

      return count;
    });

    return _this;
  }

  _createClass(ReactionsList, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React__default.createElement("div", {
        className: "str-chat__reaction-list ".concat(this.props.reverse ? 'str-chat__reaction-list--reverse' : ''),
        onClick: this.props.onClick,
        ref: this.reactionList
      }, /*#__PURE__*/React__default.createElement("ul", null, this._renderReactions(this.props.reactions), /*#__PURE__*/React__default.createElement("li", null, /*#__PURE__*/React__default.createElement("span", {
        className: "str-chat__reaction-list--counter"
      }, this._getReactionCount()))));
    }
  }]);

  return ReactionsList;
}(React__default.Component);

_defineProperty(ReactionsList, "propTypes", {
  /** List of reactions */
  reactions: PropTypes.array,

  /** Provide a list of reaction options [{name: 'angry', emoji: 'angry'}] */
  reactionOptions: PropTypes.array,

  /** If true, reaction list will be shown at trailing end of message bubble. */
  reverse: PropTypes.bool,

  /** Object/map of reaction id/type (e.g. 'like' | 'love' | 'haha' | 'wow' | 'sad' | 'angry') vs count */
  reaction_counts: PropTypes.object
});

_defineProperty(ReactionsList, "defaultProps", {
  reactionOptions: defaultMinimalEmojis,
  emojiSetDef: emojiSetDef,
  reverse: false
});

function _createSuper$b(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$b(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$b() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var Tooltip = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Tooltip, _React$PureComponent);

  var _super = _createSuper$b(Tooltip);

  function Tooltip() {
    _classCallCheck(this, Tooltip);

    return _super.apply(this, arguments);
  }

  _createClass(Tooltip, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React__default.createElement("div", {
        className: "str-chat__tooltip"
      }, this.props.children);
    }
  }]);

  return Tooltip;
}(React__default.PureComponent);

function _createSuper$c(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$c(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$c() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
/**
 * Gallery - displays up to 6 images in a simple responsive grid with a lightbox to view the images.
 * @example ./docs/Gallery.md
 * @extends PureComponent
 */

var Gallery = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Gallery, _React$PureComponent);

  var _super = _createSuper$c(Gallery);

  function Gallery() {
    var _this;

    _classCallCheck(this, Gallery);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      modalIsOpen: false,
      currentIndex: 0
    });

    _defineProperty(_assertThisInitialized(_this), "toggleModal", function (index) {
      _this.setState(function (state) {
        return {
          modalIsOpen: !state.modalIsOpen,
          currentIndex: index
        };
      });
    });

    return _this;
  }

  _createClass(Gallery, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          images = _this$props.images,
          t = _this$props.t;
      var formattedArray = images.map(function (image) {
        return {
          src: image.image_url || image.thumb_url
        };
      });
      return /*#__PURE__*/React__default.createElement("div", {
        className: "str-chat__gallery"
      }, images.slice(0, 3).map(function (image, i) {
        return /*#__PURE__*/React__default.createElement("div", {
          className: "str-chat__gallery-image",
          key: "gallery-image-".concat(i),
          onClick: function onClick() {
            return _this2.toggleModal(i);
          }
        }, /*#__PURE__*/React__default.createElement("img", {
          src: image.image_url || image.thumb_url
        }));
      }), images.length > 3 && /*#__PURE__*/React__default.createElement("div", {
        className: "str-chat__gallery-placeholder",
        style: {
          backgroundImage: "url(".concat(images[3].image_url, ")")
        },
        onClick: function onClick() {
          return _this2.toggleModal(3);
        }
      }, /*#__PURE__*/React__default.createElement("p", null, t('{{ imageCount }} more', {
        imageCount: images.length - 3
      }))), /*#__PURE__*/React__default.createElement(ModalGateway, null, this.state.modalIsOpen ? /*#__PURE__*/React__default.createElement(Modal$1, {
        onClose: this.toggleModal,
        closeOnBackdropClick: true
      }, /*#__PURE__*/React__default.createElement(Carousel, {
        views: formattedArray,
        currentIndex: this.state.currentIndex
      })) : null));
    }
  }]);

  return Gallery;
}(React__default.PureComponent);

_defineProperty(Gallery, "propTypes", {
  images: PropTypes.arrayOf(PropTypes.shape({
    /** Url of the image */
    image_url: PropTypes.string,

    /** Url of thumbnail of image */
    thumb_url: PropTypes.string
  }))
});

Gallery = withTranslationContext(Gallery);

function _createSuper$d(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$d(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$d() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
/**
 * ReactionSelector - A component for selecting a reaction. Examples are love, wow, like etc.
 *
 * @example ./docs/ReactionSelector.md
 * @extends PureComponent
 */

var ReactionSelector = /*#__PURE__*/function (_PureComponent) {
  _inherits(ReactionSelector, _PureComponent);

  var _super = _createSuper$d(ReactionSelector);

  function ReactionSelector(props) {
    var _this;

    _classCallCheck(this, ReactionSelector);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "showTooltip", /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(e, users) {
        var target;
        return _regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                target = e.target.getBoundingClientRect();
                _context2.next = 3;
                return _this.setState(function () {
                  return {
                    showTooltip: true,
                    users: users
                  };
                }, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
                  return _regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _context.next = 2;
                          return _this.setTooltipPosition(target);

                        case 2:
                          _context.next = 4;
                          return _this.setArrowPosition(target);

                        case 4:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                })));

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "hideTooltip", function () {
      _this.setState(function () {
        return {
          showTooltip: false,
          users: [],
          arrowPosition: 0,
          position: 0,
          positionCaculated: false
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getUsersPerReaction", function (reactions, type) {
      return reactions && reactions.filter(function (item) {
        return item.type === type;
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getLatestUser", function (reactions, type) {
      var filtered = _this.getUsersPerReaction(reactions, type);

      if (filtered && filtered[0] && filtered[0].user) {
        return filtered[0].user;
      } else {
        return 'NotFound';
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getUserNames", function (reactions, type) {
      var filtered = _this.getUsersPerReaction(reactions, type);

      return filtered && filtered.map(function (item) {
        return item.user || 'NotFound';
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getContainerDimensions", function () {
      return _this.reactionSelector.current.getBoundingClientRect();
    });

    _defineProperty(_assertThisInitialized(_this), "getToolTipDimensions", function () {
      return _this.reactionSelectorTooltip.current.getBoundingClientRect();
    });

    _defineProperty(_assertThisInitialized(_this), "setTooltipPosition", /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3(target) {
        var container, tooltip, position;
        return _regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _this.getContainerDimensions();

              case 2:
                container = _context3.sent;
                _context3.next = 5;
                return _this.getToolTipDimensions();

              case 5:
                tooltip = _context3.sent;

                if (tooltip.width === container.width || tooltip.x < container.x) {
                  position = 0;
                } else {
                  position = target.left + target.width / 2 - container.left - tooltip.width / 2;
                }

                _context3.next = 9;
                return _this.setState(function () {
                  return {
                    position: position
                  };
                });

              case 9:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x3) {
        return _ref3.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "setArrowPosition", /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee4(target) {
        var tooltip, position;
        return _regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                tooltip = _this.reactionSelectorTooltip.current.getBoundingClientRect();
                position = target.x - tooltip.x + target.width / 2;
                _context4.next = 4;
                return _this.setState(function () {
                  return {
                    arrowPosition: position,
                    positionCaculated: true
                  };
                });

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      return function (_x4) {
        return _ref4.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "renderReactionItems", function () {
      var _this$props = _this.props,
          reaction_counts = _this$props.reaction_counts,
          latest_reactions = _this$props.latest_reactions;
      return _this.props.reactionOptions.map(function (reaction) {
        var users = _this.getUserNames(latest_reactions, reaction.id);

        var latestUser = _this.getLatestUser(latest_reactions, reaction.id);

        var count = reaction_counts && reaction_counts[reaction.id];
        return /*#__PURE__*/React__default.createElement("li", {
          key: "item-".concat(reaction.id),
          className: "str-chat__message-reactions-list-item",
          "data-text": reaction.id,
          onClick: _this.props.handleReaction.bind(_assertThisInitialized(_this), reaction.id)
        }, Boolean(count) && _this.props.detailedView && /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("div", {
          className: "latest-user",
          onMouseEnter: function onMouseEnter(e) {
            return _this.showTooltip(e, users);
          },
          onMouseLeave: _this.hideTooltip
        }, latestUser !== 'NotFound' ? /*#__PURE__*/React__default.createElement(Avatar, {
          image: latestUser.image,
          alt: latestUser.id,
          size: 20,
          name: latestUser.id
        }) : /*#__PURE__*/React__default.createElement("div", {
          className: "latest-user-not-found"
        }))), /*#__PURE__*/React__default.createElement(NimbleEmoji, _extends({
          emoji: reaction
        }, emojiSetDef, {
          data: emojiData
        })), Boolean(count) && _this.props.detailedView && /*#__PURE__*/React__default.createElement("span", {
          className: "str-chat__message-reactions-list-item__count"
        }, count || ''));
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderUsers", function (users) {
      return users.map(function (user, i) {
        var text = user.name || user.id;

        if (i + 1 < users.length) {
          text += ', ';
        }

        return /*#__PURE__*/React__default.createElement("span", {
          className: "latest-user-username",
          key: "key-".concat(i, "-").concat(user)
        }, text);
      });
    });

    _this.state = {
      showTooltip: false,
      users: [],
      position: 0,
      arrowPosition: 0,
      positionCalculated: false
    };
    _this.reactionSelector = React__default.createRef();
    _this.reactionSelectorInner = React__default.createRef();
    _this.reactionSelectorTooltip = React__default.createRef();
    return _this;
  }

  _createClass(ReactionSelector, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React__default.createElement("div", {
        className: "str-chat__reaction-selector ".concat(this.props.reverse ? 'str-chat__reaction-selector--reverse' : ''),
        ref: this.reactionSelector
      }, this.props.detailedView && /*#__PURE__*/React__default.createElement("div", {
        className: "str-chat__reaction-selector-tooltip",
        ref: this.reactionSelectorTooltip,
        style: {
          visibility: this.state.showTooltip ? 'visible' : 'hidden',
          left: this.state.position,
          opacity: this.state.showTooltip && this.state.positionCaculated ? 1 : 0.01
        }
      }, /*#__PURE__*/React__default.createElement("div", {
        className: "arrow",
        style: {
          left: this.state.arrowPosition
        }
      }), this.renderUsers(this.state.users)), /*#__PURE__*/React__default.createElement("ul", {
        className: "str-chat__message-reactions-list"
      }, this.renderReactionItems()));
    }
  }]);

  return ReactionSelector;
}(PureComponent);

_defineProperty(ReactionSelector, "propTypes", {
  /**
   * Array of latest reactions.
   * Reaction object has following structure:
   *
   * ```json
   * {
   *  "type": "love",
   *  "user_id": "demo_user_id",
   *  "user": {
   *    ...userObject
   *  },
   *  "created_at": "datetime";
   * }
   * ```
   * */
  latest_reactions: PropTypes.array,

  /** Object/map of reaction id/type (e.g. 'like' | 'love' | 'haha' | 'wow' | 'sad' | 'angry') vs count */
  reaction_counts: PropTypes.object,

  /**
   * Handler to set/unset reaction on message.
   *
   * @param type e.g. 'like' | 'love' | 'haha' | 'wow' | 'sad' | 'angry'
   * */
  handleReaction: PropTypes.func.isRequired,

  /** Enable the avatar display */
  detailedView: PropTypes.bool,

  /** Provide a list of reaction options [{name: 'angry', emoji: 'angry'}] */
  reactionOptions: PropTypes.array,

  /** If true, reaction list will be shown at trailing end of message bubble. */
  reverse: PropTypes.bool
});

_defineProperty(ReactionSelector, "defaultProps", {
  detailedView: true,
  reactionOptions: defaultMinimalEmojis,
  reverse: false,
  emojiSetDef: emojiSetDef
});

function _createSuper$e(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$e(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$e() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var MessageRepliesCountButton = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(MessageRepliesCountButton, _React$PureComponent);

  var _super = _createSuper$e(MessageRepliesCountButton);

  function MessageRepliesCountButton() {
    _classCallCheck(this, MessageRepliesCountButton);

    return _super.apply(this, arguments);
  }

  _createClass(MessageRepliesCountButton, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          reply_count = _this$props.reply_count,
          labelSingle = _this$props.labelSingle,
          labelPlural = _this$props.labelPlural,
          t = _this$props.t;
      var singleReplyText;
      var pluralReplyText;

      if (reply_count === 1) {
        if (labelSingle) {
          singleReplyText = "1 ".concat(labelSingle);
        } else {
          singleReplyText = t('1 reply');
        }
      }

      if (reply_count > 1) {
        if (labelPlural) {
          pluralReplyText = "".concat(reply_count, " ").concat(labelPlural);
        } else {
          pluralReplyText = t('{{ replyCount }} replies', {
            replyCount: reply_count
          });
        }
      }

      if (reply_count && reply_count !== 0) {
        return /*#__PURE__*/React__default.createElement("button", {
          className: "str-chat__message-replies-count-button",
          onClick: this.props.onClick
        }, /*#__PURE__*/React__default.createElement("svg", {
          width: "18",
          height: "15",
          xmlns: "http://www.w3.org/2000/svg"
        }, /*#__PURE__*/React__default.createElement("path", {
          d: "M.56 10.946H.06l-.002-.498L.025.92a.5.5 0 1 1 1-.004l.032 9.029H9.06v-4l9 4.5-9 4.5v-4H.56z",
          fillRule: "nonzero"
        })), reply_count === 1 ? singleReplyText : pluralReplyText);
      }

      return null;
    }
  }]);

  return MessageRepliesCountButton;
}(React__default.PureComponent);

_defineProperty(MessageRepliesCountButton, "propTypes", {
  /** Label for number of replies, when count is 1 */
  labelSingle: PropTypes.string,

  /** Label for number of replies, when count is more than 1 */
  labelPlural: PropTypes.string,

  /** Number of replies */
  reply_count: PropTypes.number,

  /**
   * click handler for button
   * @param event React's MouseEventHandler event
   * @returns void
   * */
  onClick: PropTypes.func
});

_defineProperty(MessageRepliesCountButton, "defaultProps", {
  reply_count: 0
});

MessageRepliesCountButton = withTranslationContext(MessageRepliesCountButton);

function _createSuper$f(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$f(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$f() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var Modal = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Modal, _React$PureComponent);

  var _super = _createSuper$f(Modal);

  function Modal() {
    var _this;

    _classCallCheck(this, Modal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "innerRef", React__default.createRef());

    _defineProperty(_assertThisInitialized(_this), "handleClick", function (e) {
      if (!_this.innerRef.current.contains(e.target)) {
        _this.props.onClose();

        document.removeEventListener('keyPress', _this.handleEscKey, false);
      }
    });

    return _this;
  }

  _createClass(Modal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener('keyPress', this.handleEscKey, false);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('keyPress', this.handleEscKey, false);
    }
  }, {
    key: "handleEscKey",
    value: function handleEscKey(e) {
      if (e.keyCode === 27) {
        this.props.onClose();
        document.removeEventListener('keyPress', this.handleEscKey, false);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var openClasses = this.props.open ? 'str-chat__modal--open' : 'str-chat__modal--closed';
      return /*#__PURE__*/React__default.createElement("div", {
        className: "str-chat__modal ".concat(openClasses),
        onClick: this.handleClick
      }, /*#__PURE__*/React__default.createElement("div", {
        className: "str-chat__modal__close-button"
      }, "Close", /*#__PURE__*/React__default.createElement("svg", {
        width: "10",
        height: "10",
        xmlns: "http://www.w3.org/2000/svg"
      }, /*#__PURE__*/React__default.createElement("path", {
        d: "M9.916 1.027L8.973.084 5 4.058 1.027.084l-.943.943L4.058 5 .084 8.973l.943.943L5 5.942l3.973 3.974.943-.943L5.942 5z",
        fillRule: "evenodd"
      }))), /*#__PURE__*/React__default.createElement("div", {
        className: "str-chat__modal__inner",
        ref: this.innerRef
      }, this.props.children));
    }
  }]);

  return Modal;
}(React__default.PureComponent);

_defineProperty(Modal, "propTypes", {
  /** Callback handler for closing of modal. */
  onClose: PropTypes.func,

  /** If true, modal is opened or visible. */
  open: PropTypes.bool
});

var KEY_CODES = {
  ESC: 27,
  UP: 38,
  DOWN: 40,
  ENTER: 13,
  TAB: 9,
  SPACE: 32
}; // This is self-made key shortcuts manager, used for caching key strokes

var Listener = function Listener() {
  var _this = this;

  _classCallCheck(this, Listener);

  _defineProperty(this, "startListen", function () {
    if (!_this.refCount) {
      // prevent multiple listeners in case of multiple TextareaAutocomplete components on page
      document.addEventListener('keydown', _this.f);
    }

    _this.refCount++;
  });

  _defineProperty(this, "stopListen", function () {
    _this.refCount--;

    if (!_this.refCount) {
      // prevent disable listening in case of multiple TextareaAutocomplete components on page
      document.removeEventListener('keydown', _this.f);
    }
  });

  _defineProperty(this, "add", function (keyCodes, fn) {
    var keyCode = keyCodes;
    if (_typeof(keyCode) !== 'object') keyCode = [keyCode];
    _this.listeners[_this.index] = {
      keyCode: keyCode,
      fn: fn
    };
    _this.index += 1;
    return _this.index;
  });

  _defineProperty(this, "remove", function (id) {
    delete _this.listeners[id];
  });

  _defineProperty(this, "removeAll", function () {
    _this.listeners = {};
    _this.index = 0;
  });

  this.index = 0;
  this.listeners = {};
  this.refCount = 0;

  this.f = function (e) {
    var code = e.keyCode || e.which;
    Object.values(_this.listeners).forEach(function (_ref) {
      var keyCode = _ref.keyCode,
          fn = _ref.fn;
      if (keyCode.includes(code)) fn(e);
    });
  };
};

var Listeners = new Listener();

function _createSuper$g(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$g(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$g() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var Item = /*#__PURE__*/function (_React$Component) {
  _inherits(Item, _React$Component);

  var _super = _createSuper$g(Item);

  function Item() {
    var _this;

    _classCallCheck(this, Item);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "selectItem", function () {
      var _this$props = _this.props,
          item = _this$props.item,
          onSelectHandler = _this$props.onSelectHandler;
      onSelectHandler(item);
    });

    return _this;
  }

  _createClass(Item, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          Component = _this$props2.component,
          style = _this$props2.style,
          onClickHandler = _this$props2.onClickHandler,
          item = _this$props2.item,
          selected = _this$props2.selected,
          className = _this$props2.className,
          innerRef = _this$props2.innerRef;
      return /*#__PURE__*/React__default.createElement("li", {
        className: "rta__item ".concat(className || ''),
        style: style
      }, /*#__PURE__*/React__default.createElement("div", {
        className: "rta__entity ".concat(selected === true ? 'rta__entity--selected' : ''),
        role: "button",
        tabIndex: 0,
        onClick: onClickHandler,
        onFocus: this.selectItem,
        onMouseEnter: this.selectItem
        /* $FlowFixMe */
        ,
        ref: innerRef
      }, /*#__PURE__*/React__default.createElement(Component, {
        selected: selected,
        entity: item
      })));
    }
  }]);

  return Item;
}(React__default.Component);

function _createSuper$h(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$h(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$h() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var List = /*#__PURE__*/function (_React$Component) {
  _inherits(List, _React$Component);

  var _super = _createSuper$h(List);

  function List() {
    var _this;

    _classCallCheck(this, List);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      selectedItem: null
    });

    _defineProperty(_assertThisInitialized(_this), "cachedValues", null);

    _defineProperty(_assertThisInitialized(_this), "onPressEnter", function (e) {
      if (e && e.preventDefault) {
        e.preventDefault();
      }

      var values = _this.props.values;

      _this.modifyText(values[_this.getPositionInList()]);
    });

    _defineProperty(_assertThisInitialized(_this), "getPositionInList", function () {
      var values = _this.props.values;
      var selectedItem = _this.state.selectedItem;
      if (!selectedItem) return 0;
      return values.findIndex(function (a) {
        return _this.getId(a) === _this.getId(selectedItem);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getId", function (item) {
      var textToReplace = _this.props.getTextToReplace(item);

      if (textToReplace.key) {
        return textToReplace.key;
      }

      if (typeof item === 'string' || !item.key) {
        return textToReplace.text;
      }

      return item.key;
    });

    _defineProperty(_assertThisInitialized(_this), "listeners", []);

    _defineProperty(_assertThisInitialized(_this), "itemsRef", {});

    _defineProperty(_assertThisInitialized(_this), "modifyText", function (value) {
      if (!value) return;
      var _this$props = _this.props,
          onSelect = _this$props.onSelect,
          getTextToReplace = _this$props.getTextToReplace,
          getSelectedItem = _this$props.getSelectedItem;
      onSelect(getTextToReplace(value));

      if (getSelectedItem) {
        getSelectedItem(value);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "selectItem", function (item) {
      var keyboard = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      _this.setState({
        selectedItem: item
      }, function () {
        if (keyboard) {
          _this.props.dropdownScroll(_this.itemsRef[_this.getId(item)]);
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "scroll", function (e) {
      if (e && e.preventDefault) {
        e.preventDefault();
      }

      var values = _this.props.values;
      var code = e.keyCode || e.which;

      var oldPosition = _this.getPositionInList();

      var newPosition;

      switch (code) {
        case KEY_CODES.DOWN:
          newPosition = oldPosition + 1;
          break;

        case KEY_CODES.UP:
          newPosition = oldPosition - 1;
          break;

        default:
          newPosition = oldPosition;
          break;
      }

      newPosition = (newPosition % values.length + values.length) % values.length; // eslint-disable-line

      _this.selectItem(values[newPosition], [KEY_CODES.DOWN, KEY_CODES.UP].includes(code));
    });

    _defineProperty(_assertThisInitialized(_this), "isSelected", function (item) {
      var selectedItem = _this.state.selectedItem;
      if (!selectedItem) return false;
      return _this.getId(selectedItem) === _this.getId(item);
    });

    _defineProperty(_assertThisInitialized(_this), "renderHeader", function (value) {
      if (value[0] === '/') {
        return "Commands matching <strong>".concat(value.replace('/', ''), "</strong>");
      }

      if (value[0] === ':') {
        return "Emoji matching <strong>".concat(value.replace(':', ''), "</strong>");
      }

      if (value[0] === '@') {
        return "Searching for people";
      }
    });

    return _this;
  }

  _createClass(List, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.listeners.push(Listeners.add([KEY_CODES.DOWN, KEY_CODES.UP], this.scroll), Listeners.add([KEY_CODES.ENTER, KEY_CODES.TAB], this.onPressEnter));
      var values = this.props.values;
      if (values && values[0]) this.selectItem(values[0]);
    }
  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(_ref) {
      var _this2 = this;

      var values = _ref.values;
      var newValues = values.map(function (val) {
        return _this2.getId(val);
      }).join('');

      if (this.cachedValues !== newValues && values && values[0]) {
        this.selectItem(values[0]);
        this.cachedValues = newValues;
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var listener;

      while (this.listeners.length) {
        listener = this.listeners.pop();
        Listeners.remove(listener);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props2 = this.props,
          values = _this$props2.values,
          component = _this$props2.component,
          style = _this$props2.style,
          itemClassName = _this$props2.itemClassName,
          className = _this$props2.className,
          itemStyle = _this$props2.itemStyle;
      return /*#__PURE__*/React__default.createElement("ul", {
        className: "rta__list ".concat(className || ''),
        style: style
      }, /*#__PURE__*/React__default.createElement("li", {
        className: "rta__list-header",
        dangerouslySetInnerHTML: {
          __html: this.renderHeader(this.props.value)
        }
      }), values.map(function (item) {
        return /*#__PURE__*/React__default.createElement(Item, {
          key: _this3.getId(item),
          innerRef: function innerRef(ref) {
            _this3.itemsRef[_this3.getId(item)] = ref;
          },
          selected: _this3.isSelected(item),
          item: item,
          className: itemClassName,
          style: itemStyle,
          onClickHandler: _this3.onPressEnter,
          onSelectHandler: _this3.selectItem,
          component: component
        });
      }));
    }
  }]);

  return List;
}(React__default.Component);

//
function defaultScrollToItem(container, item) {
  var itemHeight = parseInt(getComputedStyle(item).getPropertyValue('height'), 10);
  var containerHight = parseInt(getComputedStyle(container).getPropertyValue('height'), 10) - itemHeight;
  var itemOffsetTop = item.offsetTop;
  var actualScrollTop = container.scrollTop;

  if (itemOffsetTop < actualScrollTop + containerHight && actualScrollTop < itemOffsetTop) {
    return;
  } // eslint-disable-next-line


  container.scrollTop = itemOffsetTop;
}

function ownKeys$4(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$4(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$4(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$4(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper$i(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$i(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$i() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var DEFAULT_CARET_POSITION = 'next';

var errorMessage = function errorMessage(message) {
  return console.error("RTA: dataProvider fails: ".concat(message, "\n    \nCheck the documentation or create issue if you think it's bug. https://github.com/webscopeio/react-textarea-autocomplete/issues"));
};

var ReactTextareaAutocomplete = /*#__PURE__*/function (_React$Component) {
  _inherits(ReactTextareaAutocomplete, _React$Component);

  var _super = _createSuper$i(ReactTextareaAutocomplete);

  function ReactTextareaAutocomplete(_props) {
    var _this;

    _classCallCheck(this, ReactTextareaAutocomplete);

    _this = _super.call(this, _props);

    _defineProperty(_assertThisInitialized(_this), "getSelectionPosition", function () {
      if (!_this.textareaRef) return null;
      return {
        selectionStart: _this.textareaRef.selectionStart,
        selectionEnd: _this.textareaRef.selectionEnd
      };
    });

    _defineProperty(_assertThisInitialized(_this), "getSelectedText", function () {
      if (!_this.textareaRef) return null;
      var _this$textareaRef = _this.textareaRef,
          selectionStart = _this$textareaRef.selectionStart,
          selectionEnd = _this$textareaRef.selectionEnd;
      if (selectionStart === selectionEnd) return null;
      return _this.state.value.substr(selectionStart, selectionEnd - selectionStart);
    });

    _defineProperty(_assertThisInitialized(_this), "setCaretPosition", function () {
      var position = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      if (!_this.textareaRef) return;

      _this.textareaRef.focus();

      _this.textareaRef.setSelectionRange(position, position);
    });

    _defineProperty(_assertThisInitialized(_this), "getCaretPosition", function () {
      if (!_this.textareaRef) {
        return 0;
      }

      return _this.textareaRef.selectionEnd;
    });

    _defineProperty(_assertThisInitialized(_this), "_onEnter", function (event) {
      var trigger = _this.state.currentTrigger;

      if (!_this.textareaRef) {
        return;
      }

      var hasFocus = _this.textareaRef.matches(':focus'); // don't submit if the element has focus or the shift key is pressed


      if (!hasFocus || event.shiftKey === true) {
        return;
      }

      if (!trigger) {
        // trigger a submit
        _this._replaceWord();

        if (_this.textareaRef) {
          _this.textareaRef.selectionEnd = 0;
        }

        _this.props.handleSubmit(event);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "_onSpace", function () {
      if (!_this.props.replaceWord) {
        return;
      }

      if (!_this.textareaRef) {
        return;
      }

      var hasFocus = _this.textareaRef.matches(':focus'); // don't change characters if the element doesn't have focus


      if (!hasFocus) {
        return;
      }

      _this._replaceWord();
    });

    _defineProperty(_assertThisInitialized(_this), "_replaceWord", function () {
      var lastWordRegex = /([^\s]+)(\s*)$/;
      var value = _this.state.value;
      var match = lastWordRegex.exec(value.slice(0, _this.getCaretPosition()));
      var lastWord = match && match[1];

      if (!lastWord) {
        return;
      }

      var spaces = match[2];

      var newWord = _this.props.replaceWord(lastWord);

      if (newWord == null) {
        return;
      }

      var textBeforeWord = value.slice(0, _this.getCaretPosition() - match[0].length);
      var textAfterCaret = value.slice(_this.getCaretPosition(), -1);
      var newText = textBeforeWord + newWord + spaces + textAfterCaret;

      _this.setState({
        value: newText
      }, function () {
        // fire onChange event after successful selection
        var e = new CustomEvent('change', {
          bubbles: true
        });

        _this.textareaRef.dispatchEvent(e);

        if (_this.props.onChange) _this.props.onChange(e);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "_onSelect", function (newToken) {
      var _this$state = _this.state,
          selectionEnd = _this$state.selectionEnd,
          currentTrigger = _this$state.currentTrigger,
          textareaValue = _this$state.value;
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          trigger = _this$props.trigger;
      if (!currentTrigger) return;

      var computeCaretPosition = function computeCaretPosition(position, token, startToken) {
        switch (position) {
          case 'start':
            return startToken;

          case 'next':
          case 'end':
            return startToken + token.length;

          default:
            if (!Number.isInteger(position)) {
              throw new Error('RTA: caretPosition should be "start", "next", "end" or number.');
            }

            return position;
        }
      };

      var textToModify = textareaValue.slice(0, selectionEnd);
      var startOfTokenPosition = textToModify.search(
      /**
       * It's important to escape the currentTrigger char for chars like [, (,...
       */
      new RegExp("\\".concat(currentTrigger, "[^\\".concat(currentTrigger).concat(trigger[currentTrigger].allowWhitespace ? '' : '\\s', "]"), "*$"))); // we add space after emoji is selected if a caret position is next

      var newTokenString = newToken.caretPosition === 'next' ? "".concat(newToken.text, " ") : newToken.text;
      var newCaretPosition = computeCaretPosition(newToken.caretPosition, newTokenString, startOfTokenPosition);
      var modifiedText = textToModify.substring(0, startOfTokenPosition) + newTokenString; // set the new textarea value and after that set the caret back to its position

      _this.setState({
        value: textareaValue.replace(textToModify, modifiedText),
        dataLoading: false
      }, function () {
        // fire onChange event after successful selection
        var e = new CustomEvent('change', {
          bubbles: true
        });

        _this.textareaRef.dispatchEvent(e);

        if (onChange) onChange(e);

        _this.setCaretPosition(newCaretPosition);
      });

      _this._closeAutocomplete();
    });

    _defineProperty(_assertThisInitialized(_this), "_getItemOnSelect", function () {
      var currentTrigger = _this.state.currentTrigger;

      var triggerSettings = _this._getCurrentTriggerSettings();

      if (!currentTrigger || !triggerSettings) return null;
      var callback = triggerSettings.callback;
      if (!callback) return null;
      return function (item) {
        if (typeof callback !== 'function') {
          throw new Error('Output functor is not defined! You have to define "output" function. https://github.com/webscopeio/react-textarea-autocomplete#trigger-type');
        }

        if (callback) {
          return callback(item, currentTrigger);
        }

        return null;
      };
    });

    _defineProperty(_assertThisInitialized(_this), "_getTextToReplace", function () {
      var _this$state2 = _this.state,
          currentTrigger = _this$state2.currentTrigger,
          actualToken = _this$state2.actualToken;

      var triggerSettings = _this._getCurrentTriggerSettings();

      if (!currentTrigger || !triggerSettings) return null;
      var output = triggerSettings.output;
      return function (item) {
        if (_typeof(item) === 'object' && (!output || typeof output !== 'function')) {
          throw new Error('Output functor is not defined! If you are using items as object you have to define "output" function. https://github.com/webscopeio/react-textarea-autocomplete#trigger-type');
        }

        if (output) {
          var textToReplace = output(item, currentTrigger);

          if (!textToReplace || typeof textToReplace === 'number') {
            throw new Error("Output functor should return string or object in shape {text: string, caretPosition: string | number}.\nGot \"".concat(String(textToReplace), "\". Check the implementation for trigger \"").concat(currentTrigger, "\" and its token \"").concat(actualToken, "\"\n\nSee https://github.com/webscopeio/react-textarea-autocomplete#trigger-type for more informations.\n"));
          }

          if (typeof textToReplace === 'string') {
            return {
              text: textToReplace,
              caretPosition: DEFAULT_CARET_POSITION
            };
          }

          if (!textToReplace.text) {
            throw new Error("Output \"text\" is not defined! Object should has shape {text: string, caretPosition: string | number}. Check the implementation for trigger \"".concat(currentTrigger, "\" and its token \"").concat(actualToken, "\"\n"));
          }

          if (!textToReplace.caretPosition) {
            throw new Error("Output \"caretPosition\" is not defined! Object should has shape {text: string, caretPosition: string | number}. Check the implementation for trigger \"".concat(currentTrigger, "\" and its token \"").concat(actualToken, "\"\n"));
          }

          return textToReplace;
        }

        if (typeof item !== 'string') {
          throw new Error('Output item should be string\n');
        }

        return {
          text: "".concat(currentTrigger).concat(item).concat(currentTrigger),
          caretPosition: DEFAULT_CARET_POSITION
        };
      };
    });

    _defineProperty(_assertThisInitialized(_this), "_getCurrentTriggerSettings", function () {
      var currentTrigger = _this.state.currentTrigger;
      if (!currentTrigger) return null;
      return _this.props.trigger[currentTrigger];
    });

    _defineProperty(_assertThisInitialized(_this), "_getValuesFromProvider", function () {
      var _this$state3 = _this.state,
          currentTrigger = _this$state3.currentTrigger,
          actualToken = _this$state3.actualToken;

      var triggerSettings = _this._getCurrentTriggerSettings();

      if (!currentTrigger || !triggerSettings) {
        return;
      }

      var dataProvider = triggerSettings.dataProvider,
          component = triggerSettings.component;

      if (typeof dataProvider !== 'function') {
        throw new Error('Trigger provider has to be a function!');
      }

      _this.setState({
        dataLoading: true
      }); // Modified: send the full text to support / style commands


      var providedData = dataProvider(actualToken, _this.state.value);

      if (!(providedData instanceof Promise)) {
        providedData = Promise.resolve(providedData);
      }

      providedData.then(function (data) {
        if (!Array.isArray(data)) {
          throw new Error('Trigger provider has to provide an array!');
        }

        if (typeof component !== 'function') {
          throw new Error('Component should be defined!');
        } // throw away if we resolved old trigger


        if (currentTrigger !== _this.state.currentTrigger) return; // if we haven't resolved any data let's close the autocomplete

        if (!data.length) {
          _this._closeAutocomplete();

          return;
        }

        _this.setState({
          dataLoading: false,
          data: data,
          component: component
        });
      }).catch(function (e) {
        return errorMessage(e.message);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "_getSuggestions", function () {
      var _this$state4 = _this.state,
          currentTrigger = _this$state4.currentTrigger,
          data = _this$state4.data;
      if (!currentTrigger || !data || data && !data.length) return null;
      return data;
    });

    _defineProperty(_assertThisInitialized(_this), "_createRegExp", function () {
      var trigger = _this.props.trigger; // negative lookahead to match only the trigger + the actual token = "bladhwd:adawd:word test" => ":word"
      // https://stackoverflow.com/a/8057827/2719917

      _this.tokenRegExp = new RegExp("([".concat(Object.keys(trigger).join(''), "])(?:(?!\\1)[^\\s])*$"));
    });

    _defineProperty(_assertThisInitialized(_this), "_closeAutocomplete", function () {
      _this.setState({
        data: null,
        dataLoading: false,
        currentTrigger: null,
        top: null,
        left: null
      });
    });

    _defineProperty(_assertThisInitialized(_this), "_cleanUpProps", function () {
      var props = _objectSpread$4({}, _this.props);

      var notSafe = ['loadingComponent', 'containerStyle', 'minChar', 'scrollToItem', 'ref', 'innerRef', 'onChange', 'onCaretPositionChange', 'className', 'value', 'trigger', 'listStyle', 'itemStyle', 'containerStyle', 'loaderStyle', 'className', 'containerClassName', 'listClassName', 'itemClassName', 'loaderClassName', 'closeOnClickOutside', 'dropdownStyle', 'dropdownClassName', 'movePopupAsYouType', 'handleSubmit', 'replaceWord', 'grow', 'additionalTextareaProps']; // eslint-disable-next-line

      for (var prop in props) {
        if (notSafe.includes(prop)) delete props[prop];
      }

      return props;
    });

    _defineProperty(_assertThisInitialized(_this), "_changeHandler", function (e) {
      var _this$props2 = _this.props,
          trigger = _this$props2.trigger,
          onChange = _this$props2.onChange,
          minChar = _this$props2.minChar,
          onCaretPositionChange = _this$props2.onCaretPositionChange,
          movePopupAsYouType = _this$props2.movePopupAsYouType;
      var _this$state5 = _this.state,
          top = _this$state5.top,
          left = _this$state5.left;
      var textarea = e.target;
      var selectionEnd = textarea.selectionEnd,
          selectionStart = textarea.selectionStart;
      var value = textarea.value;

      if (onChange) {
        e.persist();
        onChange(e);
      }

      if (onCaretPositionChange) {
        var caretPosition = _this.getCaretPosition();

        onCaretPositionChange(caretPosition);
      }

      _this.setState({
        value: value
      });

      var tokenMatch = _this.tokenRegExp.exec(value.slice(0, selectionEnd));

      var lastToken = tokenMatch && tokenMatch[0];
      var currentTrigger = lastToken && Object.keys(trigger).find(function (a) {
        return a === lastToken[0];
      }) || null;
      /*
       if we lost the trigger token or there is no following character we want to close
       the autocomplete
      */

      if ((!lastToken || lastToken.length <= minChar) && ( // check if our current trigger disallows whitespace
      _this.state.currentTrigger && !trigger[_this.state.currentTrigger].allowWhitespace || !_this.state.currentTrigger)) {
        _this._closeAutocomplete();

        return;
      }
      /**
       * This code has to be sync that is the reason why we obtain the currentTrigger
       * from currentTrigger not this.state.currentTrigger
       *
       * Check if the currently typed token has to be afterWhitespace, or not.
       */


      if (currentTrigger && value[tokenMatch.index - 1] && trigger[currentTrigger].afterWhitespace && !value[tokenMatch.index - 1].match(/\s/)) {
        _this._closeAutocomplete();

        return;
      }
      /**
        If our current trigger allows whitespace
        get the correct token for DataProvider, so we need to construct new RegExp
       */


      if (_this.state.currentTrigger && trigger[_this.state.currentTrigger].allowWhitespace) {
        tokenMatch = new RegExp("\\".concat(_this.state.currentTrigger, "[^").concat(_this.state.currentTrigger, "]*$")).exec(value.slice(0, selectionEnd));
        lastToken = tokenMatch && tokenMatch[0];

        if (!lastToken) {
          _this._closeAutocomplete();

          return;
        }

        currentTrigger = Object.keys(trigger).find(function (a) {
          return a === lastToken[0];
        }) || null;
      }

      var actualToken = lastToken.slice(1); // if trigger is not configured step out from the function, otherwise proceed

      if (!currentTrigger) {
        return;
      }

      if (movePopupAsYouType || top === null && left === null || // if we have single char - trigger it means we want to re-position the autocomplete
      lastToken.length === 1) {
        var _getCaretCoordinates = getCaretCoordinates(textarea, selectionEnd),
            newTop = _getCaretCoordinates.top,
            newLeft = _getCaretCoordinates.left;

        _this.setState({
          // make position relative to textarea
          top: newTop - _this.textareaRef.scrollTop || 0,
          left: newLeft
        });
      }

      _this.setState({
        selectionEnd: selectionEnd,
        selectionStart: selectionStart,
        currentTrigger: currentTrigger,
        actualToken: actualToken
      }, function () {
        try {
          _this._getValuesFromProvider();
        } catch (err) {
          errorMessage(err.message);
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "_selectHandler", function (e) {
      var _this$props3 = _this.props,
          onCaretPositionChange = _this$props3.onCaretPositionChange,
          onSelect = _this$props3.onSelect;

      if (onCaretPositionChange) {
        var caretPosition = _this.getCaretPosition();

        onCaretPositionChange(caretPosition);
      }

      if (onSelect) {
        e.persist();
        onSelect(e);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "_onClickAndBlurHandler", function (e) {
      var _this$props4 = _this.props,
          closeOnClickOutside = _this$props4.closeOnClickOutside,
          onBlur = _this$props4.onBlur; // If this is a click: e.target is the textarea, and e.relatedTarget is the thing
      // that was actually clicked. If we clicked inside the autoselect dropdown, then
      // that's not a blur, from the autoselect's point of view, so then do nothing.

      var el = e.relatedTarget;

      if (_this.dropdownRef && el instanceof Node && _this.dropdownRef.contains(el)) {
        return;
      }

      if (closeOnClickOutside) {
        _this._closeAutocomplete();
      }

      if (onBlur) {
        e.persist();
        onBlur(e);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "_onScrollHandler", function () {
      _this._closeAutocomplete();
    });

    _defineProperty(_assertThisInitialized(_this), "_dropdownScroll", function (item) {
      var scrollToItem = _this.props.scrollToItem;
      if (!scrollToItem) return;

      if (scrollToItem === true) {
        defaultScrollToItem(_this.dropdownRef, item);
        return;
      }

      if (typeof scrollToItem !== 'function' || scrollToItem.length !== 2) {
        throw new Error('`scrollToItem` has to be boolean (true for default implementation) or function with two parameters: container, item.');
      }

      scrollToItem(_this.dropdownRef, item);
    });

    var _this$props5 = _this.props,
        loadingComponent = _this$props5.loadingComponent,
        _trigger = _this$props5.trigger,
        _value = _this$props5.value; // TODO: it would be better to have the parent control state...
    // if (value) this.state.value = value;

    _this._createRegExp();

    if (!loadingComponent) {
      throw new Error('RTA: loadingComponent is not defined');
    }

    if (!_trigger) {
      throw new Error('RTA: trigger is not defined');
    }

    _this.state = {
      top: null,
      left: null,
      currentTrigger: null,
      actualToken: '',
      data: null,
      value: _value || '',
      dataLoading: false,
      selectionEnd: 0,
      selectionStart: 0,
      component: null,
      listenerIndex: 0
    };
    return _this;
  }

  _createClass(ReactTextareaAutocomplete, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      Listeners.add(KEY_CODES.ESC, function () {
        return _this2._closeAutocomplete();
      });
      Listeners.add(KEY_CODES.SPACE, function () {
        return _this2._onSpace();
      });
      var listenerIndex = Listeners.add(KEY_CODES.ENTER, function (e) {
        return _this2._onEnter(e);
      });
      this.setState({
        listenerIndex: listenerIndex
      });
      Listeners.startListen();
    }
  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      this._update(nextProps);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      Listeners.stopListen();
      Listeners.remove(this.state.listenerIndex);
    }
  }, {
    key: "_update",
    // TODO: This is an anti pattern in react, should come up with a better way
    value: function _update(_ref) {
      var value = _ref.value,
          trigger = _ref.trigger;
      var oldValue = this.state.value;
      var oldTrigger = this.props.trigger;
      if (value !== oldValue || !oldValue) this.setState({
        value: value
      });
      /**
       * check if trigger chars are changed, if so, change the regexp accordingly
       */

      if (Object.keys(trigger).join('') !== Object.keys(oldTrigger).join('')) {
        this._createRegExp();
      }
    }
    /**
     * Close autocomplete, also clean up trigger (to avoid slow promises)
     */

  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props6 = this.props,
          Loader = _this$props6.loadingComponent,
          style = _this$props6.style,
          className = _this$props6.className,
          itemStyle = _this$props6.itemStyle,
          listClassName = _this$props6.listClassName,
          itemClassName = _this$props6.itemClassName,
          dropdownClassName = _this$props6.dropdownClassName,
          dropdownStyle = _this$props6.dropdownStyle,
          containerStyle = _this$props6.containerStyle,
          containerClassName = _this$props6.containerClassName,
          loaderStyle = _this$props6.loaderStyle,
          loaderClassName = _this$props6.loaderClassName;
      var _this$state6 = this.state,
          dataLoading = _this$state6.dataLoading,
          currentTrigger = _this$state6.currentTrigger,
          component = _this$state6.component,
          value = _this$state6.value;

      var suggestionData = this._getSuggestions();

      var textToReplace = this._getTextToReplace();

      var selectedItem = this._getItemOnSelect();

      var maxRows = this.props.maxRows;

      if (!this.props.grow) {
        maxRows = 1;
      }

      return /*#__PURE__*/React__default.createElement("div", {
        className: "rta ".concat(dataLoading === true ? 'rta--loading' : '', " ").concat(containerClassName || ''),
        style: containerStyle
      }, (dataLoading || suggestionData) && currentTrigger && /*#__PURE__*/React__default.createElement("div", {
        ref: function ref(_ref2) {
          // $FlowFixMe
          _this3.dropdownRef = _ref2;
        },
        style: _objectSpread$4({}, dropdownStyle),
        className: "rta__autocomplete ".concat(dropdownClassName || '')
      }, suggestionData && component && textToReplace && /*#__PURE__*/React__default.createElement(List, {
        value: value,
        values: suggestionData,
        component: component,
        className: listClassName,
        itemClassName: itemClassName,
        itemStyle: itemStyle,
        getTextToReplace: textToReplace,
        getSelectedItem: selectedItem,
        onSelect: this._onSelect,
        dropdownScroll: this._dropdownScroll
      }), dataLoading && /*#__PURE__*/React__default.createElement("div", {
        className: "rta__loader ".concat(suggestionData !== null ? 'rta__loader--suggestion-data' : 'rta__loader--empty-suggestion-data', " ").concat(loaderClassName || ''),
        style: loaderStyle
      }, /*#__PURE__*/React__default.createElement(Loader, {
        data: suggestionData
      }))), /*#__PURE__*/React__default.createElement(Textarea, _extends({}, this._cleanUpProps(), {
        inputRef: function inputRef(ref) {
          _this3.props.innerRef && _this3.props.innerRef(ref);
          _this3.textareaRef = ref;
        },
        maxRows: maxRows,
        className: "rta__textarea ".concat(className || ''),
        onChange: this._changeHandler,
        onSelect: this._selectHandler,
        onScroll: this._onScrollHandler,
        onClick: // The textarea itself is outside the autoselect dropdown.
        this._onClickAndBlurHandler,
        onBlur: this._onClickAndBlurHandler,
        onFocus: this.props.onFocus,
        value: value,
        style: style
      }, this.props.additionalTextareaProps)));
    }
  }]);

  return ReactTextareaAutocomplete;
}(React__default.Component);

_defineProperty(ReactTextareaAutocomplete, "defaultProps", {
  closeOnClickOutside: true,
  movePopupAsYouType: false,
  value: '',
  minChar: 1,
  scrollToItem: true,
  maxRows: 10
});

var triggerPropsCheck = function triggerPropsCheck(_ref3) {
  var trigger = _ref3.trigger;
  if (!trigger) return Error('Invalid prop trigger. Prop missing.');
  var triggers = Object.entries(trigger);

  for (var i = 0; i < triggers.length; i += 1) {
    var _triggers$i = _slicedToArray(triggers[i], 2),
        triggerChar = _triggers$i[0],
        settings = _triggers$i[1];

    if (typeof triggerChar !== 'string' || triggerChar.length !== 1) {
      return Error('Invalid prop trigger. Keys of the object has to be string / one character.');
    } // $FlowFixMe


    var triggerSetting = settings;
    var component = triggerSetting.component,
        dataProvider = triggerSetting.dataProvider,
        output = triggerSetting.output,
        callback = triggerSetting.callback,
        afterWhitespace = triggerSetting.afterWhitespace,
        allowWhitespace = triggerSetting.allowWhitespace;

    if (!component || typeof component !== 'function') {
      return Error('Invalid prop trigger: component should be defined.');
    }

    if (!dataProvider || typeof dataProvider !== 'function') {
      return Error('Invalid prop trigger: dataProvider should be defined.');
    }

    if (output && typeof output !== 'function') {
      return Error('Invalid prop trigger: output should be a function.');
    }

    if (callback && typeof callback !== 'function') {
      return Error('Invalid prop trigger: callback should be a function.');
    }

    if (afterWhitespace && allowWhitespace) {
      return Error('Invalid prop trigger: afterWhitespace and allowWhitespace can be used together');
    }
  }

  return null;
};

ReactTextareaAutocomplete.propTypes = {
  loadingComponent: PropTypes.func.isRequired,
  minChar: PropTypes.number,
  onChange: PropTypes.func,
  onSelect: PropTypes.func,
  onBlur: PropTypes.func,
  onCaretPositionChange: PropTypes.func,
  className: PropTypes.string,
  containerStyle: PropTypes.object,
  containerClassName: PropTypes.string,
  closeOnClickOutside: PropTypes.bool,
  style: PropTypes.object,
  listStyle: PropTypes.object,
  itemStyle: PropTypes.object,
  loaderStyle: PropTypes.object,
  dropdownStyle: PropTypes.object,
  listClassName: PropTypes.string,
  itemClassName: PropTypes.string,
  loaderClassName: PropTypes.string,
  dropdownClassName: PropTypes.string,
  value: PropTypes.string,
  trigger: triggerPropsCheck //eslint-disable-line

};

function _createSuper$j(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$j(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$j() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var EmoticonItem = /*#__PURE__*/function (_PureComponent) {
  _inherits(EmoticonItem, _PureComponent);

  var _super = _createSuper$j(EmoticonItem);

  function EmoticonItem() {
    _classCallCheck(this, EmoticonItem);

    return _super.apply(this, arguments);
  }

  _createClass(EmoticonItem, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React__default.createElement("div", {
        className: "str-chat__emoji-item"
      }, /*#__PURE__*/React__default.createElement("span", {
        className: "str-chat__emoji-item--entity"
      }, this.props.entity.native), /*#__PURE__*/React__default.createElement("span", {
        className: "str-chat__emoji-item--name"
      }, this.props.entity.name), /*#__PURE__*/React__default.createElement("span", {
        className: "str-chat__emoji-item--char"
      }, this.props.entity.char));
    }
  }]);

  return EmoticonItem;
}(PureComponent);

_defineProperty(EmoticonItem, "propTypes", {
  entity: PropTypes.shape({
    /** Name for emoticon */
    name: PropTypes.string,

    /** Native value or actual emoticon */
    native: PropTypes.string,

    /** Representative character for emoticon */
    char: PropTypes.string
  })
});

function _createSuper$k(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$k(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$k() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var UserItem = /*#__PURE__*/function (_PureComponent) {
  _inherits(UserItem, _PureComponent);

  var _super = _createSuper$k(UserItem);

  function UserItem() {
    _classCallCheck(this, UserItem);

    return _super.apply(this, arguments);
  }

  _createClass(UserItem, [{
    key: "render",
    value: function render() {
      var u = this.props.entity;
      return /*#__PURE__*/React__default.createElement("div", {
        className: "str-chat__user-item"
      }, /*#__PURE__*/React__default.createElement(Avatar, {
        size: 20,
        image: u.image
      }), /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement("strong", null, u.name), " ", !u.name ? u.id : ''));
    }
  }]);

  return UserItem;
}(PureComponent);

_defineProperty(UserItem, "propTypes", {
  entity: PropTypes.shape({
    /** Name of the user */
    name: PropTypes.string,

    /** Id of the user */
    id: PropTypes.string,

    /** Image of the user */
    image: PropTypes.string
  })
});

function _createSuper$l(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$l(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$l() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var CommandItem = /*#__PURE__*/function (_PureComponent) {
  _inherits(CommandItem, _PureComponent);

  var _super = _createSuper$l(CommandItem);

  function CommandItem() {
    _classCallCheck(this, CommandItem);

    return _super.apply(this, arguments);
  }

  _createClass(CommandItem, [{
    key: "render",
    value: function render() {
      var c = this.props.entity;
      return /*#__PURE__*/React__default.createElement("div", {
        className: "str-chat__slash-command"
      }, /*#__PURE__*/React__default.createElement("span", {
        className: "str-chat__slash-command-header"
      }, /*#__PURE__*/React__default.createElement("strong", null, c.name), " ", c.args), /*#__PURE__*/React__default.createElement("br", null), /*#__PURE__*/React__default.createElement("span", {
        className: "str-chat__slash-command-description"
      }, c.description));
    }
  }]);

  return CommandItem;
}(PureComponent);

_defineProperty(CommandItem, "propTypes", {
  entity: PropTypes.shape({
    /** Name of the command */
    name: PropTypes.string,

    /** Arguments of command */
    args: PropTypes.string,

    /** Description of command */
    description: PropTypes.string
  })
});

function _createForOfIteratorHelper$1(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray$1(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray$1(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$1(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen); }

function _arrayLikeToArray$1(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper$m(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$m(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$m() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
/**
 * Textarea component with included autocomplete options. You can set your own commands and
 * @example ./docs/ChatAutoComplete.md
 */

var ChatAutoComplete = /*#__PURE__*/function (_PureComponent) {
  _inherits(ChatAutoComplete, _PureComponent);

  var _super = _createSuper$m(ChatAutoComplete);

  function ChatAutoComplete() {
    _classCallCheck(this, ChatAutoComplete);

    return _super.apply(this, arguments);
  }

  _createClass(ChatAutoComplete, [{
    key: "getTriggers",
    value: function getTriggers() {
      var _this = this;

      return {
        ':': {
          dataProvider: function dataProvider(q) {
            if (q.length === 0 || q.charAt(0).match(/[^a-zA-Z0-9+-]/)) {
              return [];
            }

            var emojis = emojiIndex.search(q) || [];
            return emojis.slice(0, 10);
          },
          component: EmoticonItem,
          output: function output(entity) {
            return {
              key: entity.id,
              text: "".concat(entity.native),
              caretPosition: 'next'
            };
          }
        },
        '@': {
          dataProvider: function dataProvider(q) {
            var matchingUsers = _this.props.users.filter(function (user) {
              if (user.name !== undefined && user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1) {
                return true;
              } else if (user.id.toLowerCase().indexOf(q.toLowerCase()) !== -1) {
                return true;
              } else {
                return false;
              }
            });

            return matchingUsers.slice(0, 10);
          },
          component: UserItem,
          output: function output(entity) {
            return {
              key: entity.id,
              text: "@".concat(entity.name || entity.id),
              caretPosition: 'next'
            };
          },
          callback: function callback(item) {
            return _this.props.onSelectItem(item);
          }
        },
        '/': {
          dataProvider: function dataProvider(q, text) {
            if (text.indexOf('/') !== 0) {
              return [];
            }

            var selectedCommands = _this.props.commands.filter(function (c) {
              return c.name.indexOf(q) !== -1;
            }); // sort alphabetically unless the you're matching the first char


            selectedCommands.sort(function (a, b) {
              var nameA = a.name.toLowerCase();
              var nameB = b.name.toLowerCase();

              if (nameA.indexOf(q) === 0) {
                nameA = "0".concat(nameA);
              }

              if (nameB.indexOf(q) === 0) {
                nameB = "0".concat(nameB);
              }

              if (nameA < nameB) {
                return -1;
              }

              if (nameA > nameB) {
                return 1;
              }

              return 0;
            });
            return selectedCommands.slice(0, 10);
          },
          component: CommandItem,
          output: function output(entity) {
            return {
              key: entity.id,
              text: "/".concat(entity.name),
              caretPosition: 'next'
            };
          }
        }
      };
    }
  }, {
    key: "emojiReplace",
    value: function emojiReplace(word) {
      var found = emojiIndex.search(word) || [];

      var _iterator = _createForOfIteratorHelper$1(found.slice(0, 10)),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var emoji = _step.value;

          if (emoji.emoticons.includes(word)) {
            return emoji.native;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var innerRef = this.props.innerRef;
      return /*#__PURE__*/React__default.createElement(ReactTextareaAutocomplete, {
        loadingComponent: LoadingIndicator,
        trigger: this.getTriggers(),
        replaceWord: this.emojiReplace,
        minChar: 0,
        maxRows: this.props.maxRows,
        innerRef: innerRef && function (ref) {
          innerRef.current = ref;
        },
        onFocus: this.props.onFocus,
        rows: this.props.rows,
        className: "str-chat__textarea__textarea",
        containerClassName: "str-chat__textarea",
        dropdownClassName: "str-chat__emojisearch",
        listClassName: "str-chat__emojisearch__list",
        itemClassName: "str-chat__emojisearch__item",
        placeholder: this.props.placeholder,
        onChange: this.props.onChange,
        handleSubmit: this.props.handleSubmit,
        onPaste: this.props.onPaste,
        value: this.props.value,
        grow: this.props.grow,
        disabled: this.props.disabled,
        additionalTextareaProps: this.props.additionalTextareaProps
      });
    }
  }]);

  return ChatAutoComplete;
}(PureComponent);

_defineProperty(ChatAutoComplete, "propTypes", {
  /** The number of rows you want the textarea to have */
  rows: PropTypes.number,

  /** Grow the number of rows of the textarea while you're typing */
  grow: PropTypes.bool,

  /** Maximum number of rows */
  maxRows: PropTypes.number,

  /** Make the textarea disabled */
  disabled: PropTypes.bool,

  /** The value of the textarea */
  value: PropTypes.string,

  /** Function to run on pasting within the textarea */
  onPaste: PropTypes.func,

  /** Function that runs on submit */
  handleSubmit: PropTypes.func,

  /** Function that runs on change */
  onChange: PropTypes.func,

  /** Placeholder for the textare */
  placeholder: PropTypes.string,

  /** What loading component to use for the auto complete when loading results. */
  LoadingIndicator: PropTypes.node,

  /** Minimum number of Character */
  minChar: PropTypes.number,

  /** Array of [user object](https://getstream.io/chat/docs/#chat-doc-set-user). Used for mentions suggestions */
  users: PropTypes.array,

  /**
   * Handler for selecting item from suggestions list
   *
   * @param item Selected item object.
   *  */
  onSelectItem: PropTypes.func,

  /** Array of [commands](https://getstream.io/chat/docs/#channel_commands) */
  commands: PropTypes.array,

  /** Listener for onfocus event on textarea */
  onFocus: PropTypes.object,

  /**
   * Any additional attrubutes that you may want to add for underlying HTML textarea element.
   */
  additionalTextareaProps: PropTypes.object
});

_defineProperty(ChatAutoComplete, "defaultProps", {
  rows: 3
});

function _createSuper$n(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$n(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$n() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
/**
 * MessageInputLarge - Large Message Input to be used for the MessageInput.
 * @example ./docs/MessageInputLarge.md
 */

var MessageInputLarge = /*#__PURE__*/function (_PureComponent) {
  _inherits(MessageInputLarge, _PureComponent);

  var _super = _createSuper$n(MessageInputLarge);

  function MessageInputLarge() {
    var _this;

    _classCallCheck(this, MessageInputLarge);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "renderUploads", function () {
      return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, _this.props.imageOrder.length > 0 && /*#__PURE__*/React__default.createElement(ImagePreviewer, {
        imageUploads: _this.props.imageOrder.map(function (id) {
          return _this.props.imageUploads[id];
        }),
        handleRemove: _this.props.removeImage,
        handleRetry: _this.props.uploadImage,
        handleFiles: _this.props.uploadNewFiles,
        multiple: _this.props.multipleUploads,
        disabled: _this.props.numberOfUploads >= _this.props.maxNumberOfFiles ? true : false
      }), _this.props.fileOrder.length > 0 && /*#__PURE__*/React__default.createElement(FilePreviewer, {
        uploads: _this.props.fileOrder.map(function (id) {
          return _this.props.fileUploads[id];
        }),
        handleRemove: _this.props.removeFile,
        handleRetry: _this.props.uploadFile,
        handleFiles: _this.props.uploadNewFiles
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "renderEmojiPicker", function () {
      if (_this.props.emojiPickerIsOpen) {
        return /*#__PURE__*/React__default.createElement("div", {
          className: "str-chat__input--emojipicker",
          ref: _this.props.emojiPickerRef
        }, /*#__PURE__*/React__default.createElement(Picker, {
          native: true,
          emoji: "point_up",
          title: "Pick your emoji\u2026",
          onSelect: _this.props.onSelectEmoji,
          color: "#006CFF",
          showPreview: false,
          useButton: true,
          emojisToShowFilter: filterEmoji
        }));
      }
    });

    _defineProperty(_assertThisInitialized(_this), "constructTypingString", function (dict) {
      var t = _this.props.t;
      var arr2 = Object.keys(dict);
      var arr3 = [];
      arr2.forEach(function (item, i) {
        if (_this.props.client.user.id === dict[arr2[i]].user.id) {
          return;
        }

        arr3.push(dict[arr2[i]].user.name || dict[arr2[i]].user.id);
      });
      var outStr = '';

      if (arr3.length === 1) {
        outStr = t('{{ user }} is typing...', {
          user: arr3[0]
        });
      } else if (arr3.length === 2) {
        //joins all with "and" but =no commas
        //example: "bob and sam"
        outStr = t('{{ firstUser }} and {{ secondUser }} are typing...', {
          firstUser: arr3[0],
          secondUser: arr3[1]
        });
      } else if (arr3.length > 2) {
        //joins all with commas, but last one gets ", and" (oxford comma!)
        //example: "bob, joe, and sam"
        outStr = t('{{ commaSeparatedUsers }} and {{ lastUser }} are typing...', {
          commaSeparatedUsers: arr3.slice(0, -1).join(', '),
          lastUser: arr3.slice(-1)
        });
      }

      return outStr;
    });

    return _this;
  }

  _createClass(MessageInputLarge, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var t = this.props.t;
      var SendButton = this.props.SendButton;
      return /*#__PURE__*/React__default.createElement("div", {
        className: "str-chat__input-large"
      }, /*#__PURE__*/React__default.createElement(ImageDropzone, {
        accept: this.props.acceptedFiles,
        multiple: this.props.multipleUploads,
        disabled: this.props.numberOfUploads >= this.props.maxNumberOfFiles ? true : false,
        handleFiles: this.props.uploadNewFiles
      }, /*#__PURE__*/React__default.createElement("div", {
        className: "str-chat__input"
      }, this.renderUploads(), this.renderEmojiPicker(), /*#__PURE__*/React__default.createElement("div", {
        className: "str-chat__input--textarea-wrapper"
      }, /*#__PURE__*/React__default.createElement(ChatAutoComplete, {
        users: this.props.getUsers(),
        commands: this.props.getCommands(),
        innerRef: this.props.textareaRef,
        handleSubmit: function handleSubmit(e) {
          return _this2.props.handleSubmit(e);
        },
        onChange: this.props.handleChange,
        onSelectItem: this.props.onSelectItem,
        value: this.props.text,
        rows: 1,
        maxRows: this.props.maxRows,
        placeholder: t('Type your message'),
        onPaste: this.props.onPaste,
        grow: this.props.grow,
        disabled: this.props.disabled,
        additionalTextareaProps: this.props.additionalTextareaProps
      }), /*#__PURE__*/React__default.createElement("span", {
        className: "str-chat__input-emojiselect",
        onClick: this.props.openEmojiPicker
      }, /*#__PURE__*/React__default.createElement("svg", {
        width: "14",
        height: "14",
        xmlns: "http://www.w3.org/2000/svg"
      }, /*#__PURE__*/React__default.createElement("path", {
        d: "M11.108 8.05a.496.496 0 0 1 .212.667C10.581 10.147 8.886 11 7 11c-1.933 0-3.673-.882-4.33-2.302a.497.497 0 0 1 .9-.417C4.068 9.357 5.446 10 7 10c1.519 0 2.869-.633 3.44-1.738a.495.495 0 0 1 .668-.212zm.792-1.826a.477.477 0 0 1-.119.692.541.541 0 0 1-.31.084.534.534 0 0 1-.428-.194c-.106-.138-.238-.306-.539-.306-.298 0-.431.168-.54.307A.534.534 0 0 1 9.538 7a.544.544 0 0 1-.31-.084.463.463 0 0 1-.117-.694c.33-.423.742-.722 1.394-.722.653 0 1.068.3 1.396.724zm-7 0a.477.477 0 0 1-.119.692.541.541 0 0 1-.31.084.534.534 0 0 1-.428-.194c-.106-.138-.238-.306-.539-.306-.299 0-.432.168-.54.307A.533.533 0 0 1 2.538 7a.544.544 0 0 1-.31-.084.463.463 0 0 1-.117-.694c.33-.423.742-.722 1.394-.722.653 0 1.068.3 1.396.724zM7 0a7 7 0 1 1 0 14A7 7 0 0 1 7 0zm4.243 11.243A5.96 5.96 0 0 0 13 7a5.96 5.96 0 0 0-1.757-4.243A5.96 5.96 0 0 0 7 1a5.96 5.96 0 0 0-4.243 1.757A5.96 5.96 0 0 0 1 7a5.96 5.96 0 0 0 1.757 4.243A5.96 5.96 0 0 0 7 13a5.96 5.96 0 0 0 4.243-1.757z",
        fillRule: "evenodd"
      }))), /*#__PURE__*/React__default.createElement(FileUploadButton, {
        multiple: this.props.multipleUploads,
        disabled: this.props.numberOfUploads >= this.props.maxNumberOfFiles ? true : false,
        accepts: this.props.acceptedFiles,
        handleFiles: this.props.uploadNewFiles
      }, /*#__PURE__*/React__default.createElement("span", {
        className: "str-chat__input-fileupload"
      }, /*#__PURE__*/React__default.createElement("svg", {
        width: "14",
        height: "14",
        xmlns: "http://www.w3.org/2000/svg"
      }, /*#__PURE__*/React__default.createElement("path", {
        d: "M7 .5c3.59 0 6.5 2.91 6.5 6.5s-2.91 6.5-6.5 6.5S.5 10.59.5 7 3.41.5 7 .5zm0 12c3.031 0 5.5-2.469 5.5-5.5S10.031 1.5 7 1.5A5.506 5.506 0 0 0 1.5 7c0 3.034 2.469 5.5 5.5 5.5zM7.506 3v3.494H11v1.05H7.506V11h-1.05V7.544H3v-1.05h3.456V3h1.05z",
        fillRule: "nonzero"
      })))), SendButton && /*#__PURE__*/React__default.createElement(SendButton, {
        sendMessage: this.props.handleSubmit
      }))), /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement("div", {
        className: "str-chat__input-footer"
      }, /*#__PURE__*/React__default.createElement("span", {
        className: "str-chat__input-footer--count ".concat(!this.props.watcher_count ? 'str-chat__input-footer--count--hidden' : '')
      }, t('{{ watcherCount }} online', {
        watcherCount: this.props.watcher_count
      })), /*#__PURE__*/React__default.createElement("span", {
        className: "str-chat__input-footer--typing"
      }, this.constructTypingString(this.props.typing))))));
    }
  }]);

  return MessageInputLarge;
}(PureComponent);

_defineProperty(MessageInputLarge, "propTypes", {
  /** Set focus to the text input if this is enabled */
  focus: PropTypes.bool.isRequired,

  /** Grow the textarea while you're typing */
  grow: PropTypes.bool.isRequired,

  /** Specify the max amount of rows the textarea is able to grow */
  maxRows: PropTypes.number.isRequired,

  /** Make the textarea disabled */
  disabled: PropTypes.bool,

  /** @see See [MessageInput](https://getstream.github.io/stream-chat-react/#messageinput) for doc */
  imageOrder: PropTypes.array,

  /** @see See [MessageInput](https://getstream.github.io/stream-chat-react/#messageinput) for doc */
  imageUploads: PropTypes.object,

  /** @see See [MessageInput](https://getstream.github.io/stream-chat-react/#messageinput) for doc */
  removeImage: PropTypes.func,

  /** @see See [MessageInput](https://getstream.github.io/stream-chat-react/#messageinput) for doc */
  uploadImage: PropTypes.func,

  /** @see See [MessageInput](https://getstream.github.io/stream-chat-react/#messageinput) for doc */
  uploadNewFiles: PropTypes.func,

  /** @see See [MessageInput](https://getstream.github.io/stream-chat-react/#messageinput) for doc */
  numberOfUploads: PropTypes.number,

  /** @see See [MessageInput](https://getstream.github.io/stream-chat-react/#messageinput) for doc */
  fileOrder: PropTypes.array,

  /** @see See [MessageInput](https://getstream.github.io/stream-chat-react/#messageinput) for doc */
  fileUploads: PropTypes.object,

  /** @see See [MessageInput](https://getstream.github.io/stream-chat-react/#messageinput) for doc */
  removeFile: PropTypes.func,

  /** @see See [MessageInput](https://getstream.github.io/stream-chat-react/#messageinput) for doc */
  uploadFile: PropTypes.func,

  /** @see See [MessageInput](https://getstream.github.io/stream-chat-react/#messageinput) for doc */
  emojiPickerIsOpen: PropTypes.bool,

  /** @see See [MessageInput](https://getstream.github.io/stream-chat-react/#messageinput) for doc */
  emojiPickerRef: PropTypes.object,

  /** @see See [MessageInput](https://getstream.github.io/stream-chat-react/#messageinput) for doc */
  onSelectEmoji: PropTypes.func,

  /** @see See [MessageInput](https://getstream.github.io/stream-chat-react/#messageinput) for doc */
  getUsers: PropTypes.func,

  /** @see See [MessageInput](https://getstream.github.io/stream-chat-react/#messageinput) for doc */
  getCommands: PropTypes.func,

  /** @see See [MessageInput](https://getstream.github.io/stream-chat-react/#messageinput) for doc */
  textareaRef: PropTypes.object,

  /** @see See [MessageInput](https://getstream.github.io/stream-chat-react/#messageinput) for doc */
  handleSubmit: PropTypes.func,

  /** @see See [MessageInput](https://getstream.github.io/stream-chat-react/#messageinput) for doc */
  handleChange: PropTypes.func,

  /** @see See [MessageInput](https://getstream.github.io/stream-chat-react/#messageinput) for doc */
  onSelectItem: PropTypes.func,

  /** @see See [MessageInput](https://getstream.github.io/stream-chat-react/#messageinput) for doc */
  text: PropTypes.string,

  /** @see See [MessageInput](https://getstream.github.io/stream-chat-react/#messageinput) for doc */
  onPaste: PropTypes.func,

  /** @see See [MessageInput](https://getstream.github.io/stream-chat-react/#messageinput) for doc */
  openEmojiPicker: PropTypes.func,

  /** @see See [channel context](https://getstream.github.io/stream-chat-react/#channel) doc */
  watcher_count: PropTypes.number,

  /** @see See [channel context](https://getstream.github.io/stream-chat-react/#channel) doc */
  typing: PropTypes.object,

  /** @see See [channel context](https://getstream.github.io/stream-chat-react/#channel) doc */
  multipleUploads: PropTypes.object,

  /** @see See [channel context](https://getstream.github.io/stream-chat-react/#channel) doc */
  maxNumberOfFiles: PropTypes.number,

  /** @see See [channel context](https://getstream.github.io/stream-chat-react/#channel) doc */
  acceptedFiles: PropTypes.object,

  /**
   * Custom UI component for send button.
   *
   * Defaults to and accepts same props as: [SendButton](https://getstream.github.io/stream-chat-react/#sendbutton)
   * */
  SendButton: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),

  /**
   * Any additional attrubutes that you may want to add for underlying HTML textarea element.
   */
  additionalTextareaProps: PropTypes.object
});

var MessageInputLargeWithContext = withTranslationContext(MessageInputLarge);

var SendButton = function SendButton(_ref) {
  var sendMessage = _ref.sendMessage;
  return /*#__PURE__*/React__default.createElement("button", {
    className: "str-chat__send-button",
    onClick: sendMessage
  }, /*#__PURE__*/React__default.createElement("svg", {
    width: "18",
    height: "17",
    viewBox: "0 0 18 17",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React__default.createElement("path", {
    d: "M0 17.015l17.333-8.508L0 0v6.617l12.417 1.89L0 10.397z",
    fillRule: "evenodd",
    fill: "#006cff"
  })));
};

function _createForOfIteratorHelper$2(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray$2(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray$2(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$2(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$2(o, minLen); }

function _arrayLikeToArray$2(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper$o(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$o(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$o() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

if (!Element.prototype.matches) {
  Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
}
/**
 * MessageInput - Input a new message, support for all the rich features such as image uploads, @mentions, emoticons etc.
 * @example ./docs/MessageInput.md
 * @extends PureComponent
 */


var MessageInput = /*#__PURE__*/function (_PureComponent) {
  _inherits(MessageInput, _PureComponent);

  var _super = _createSuper$o(MessageInput);

  function MessageInput(props) {
    var _this;

    _classCallCheck(this, MessageInput);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "openEmojiPicker", function () {
      if (!_this.state.showEmojiPicker) {
        _this.setState(function () {
          return {
            emojiPickerIsOpen: true
          };
        }, function () {
          document.addEventListener('click', _this.closeEmojiPicker, false);
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "closeEmojiPicker", function (e) {
      if (_this.emojiPickerRef.current && !_this.emojiPickerRef.current.contains(e.target)) {
        _this.setState({
          emojiPickerIsOpen: false
        }, function () {
          document.removeEventListener('click', _this.closeEmojiPicker, false);
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onSelectEmoji", function (emoji) {
      return _this.insertText(emoji.native);
    });

    _defineProperty(_assertThisInitialized(_this), "insertText", /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(textToInsert) {
        var newCursorPosition, textareaElement;
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.setState(function (prevState) {
                  var prevText = prevState.text;
                  var textareaElement = _this.textareaRef.current;

                  if (!textareaElement) {
                    return {
                      text: prevText + textToInsert
                    };
                  } // Insert emoji at previous cursor position


                  var selectionStart = textareaElement.selectionStart,
                      selectionEnd = textareaElement.selectionEnd;
                  newCursorPosition = selectionStart + textToInsert.length;
                  return {
                    text: prevText.slice(0, selectionStart) + textToInsert + prevText.slice(selectionEnd)
                  };
                });

              case 2:
                textareaElement = _this.textareaRef.current;

                if (!(!textareaElement || newCursorPosition == null)) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt("return");

              case 5:
                // Update cursorPosition
                textareaElement.selectionStart = newCursorPosition;
                textareaElement.selectionEnd = newCursorPosition;

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "getCommands", function () {
      return _this.props.channel.getConfig().commands;
    });

    _defineProperty(_assertThisInitialized(_this), "getUsers", function () {
      var users = [];
      var members = _this.props.channel.state.members;
      var watchers = _this.props.channel.state.watchers;

      if (members && Object.values(members).length) {
        Object.values(members).forEach(function (member) {
          return users.push(member.user);
        });
      }

      if (watchers && Object.values(watchers).length) {
        users.push.apply(users, _toConsumableArray(Object.values(watchers)));
      } // make sure we don't list users twice


      var userMap = {};

      for (var _i = 0, _users = users; _i < _users.length; _i++) {
        var user = _users[_i];

        if (user !== undefined && !userMap[user.id]) {
          userMap[user.id] = user;
        }
      }

      return Object.values(userMap);
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (event) {
      event.preventDefault();

      if (!event || !event.target) {
        return '';
      }

      var text = event.target.value;

      _this.setState({
        text: text
      });

      if (text) {
        logChatPromiseExecution(_this.props.channel.keystroke(), 'start typing event');
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleSubmit", function (event) {
      event.preventDefault();
      var editing = !!_this.props.message;

      var trimmedMessage = _this.state.text.trim();

      var isEmptyMessage = trimmedMessage === '' || trimmedMessage === '>' || trimmedMessage === '``````' || trimmedMessage === '``' || trimmedMessage === '**' || trimmedMessage === '____' || trimmedMessage === '__' || trimmedMessage === '****';
      var hasFiles = _this.state.imageOrder.length > 0 || _this.state.fileOrder.length > 0;

      if (isEmptyMessage && !hasFiles) {
        return;
      }

      var text = _this.state.text; // the channel component handles the actual sending of the message

      var attachments = _toConsumableArray(_this.state.attachments);

      var _iterator = _createForOfIteratorHelper$2(_this.state.imageOrder),
          _step;

      try {
        var _loop = function _loop() {
          var id = _step.value;
          var image = _this.state.imageUploads[id];

          if (!image || image.state === 'failed') {
            return "continue";
          }

          if (image.state === 'uploading') {
            // TODO: show error to user that they should wait until image is uploaded
            return {
              v: void 0
            };
          }

          var dupe = attachments.filter(function (attach) {
            return image.url === attach.image_url;
          });
          if (dupe.length >= 1) return "continue";
          attachments.push({
            type: 'image',
            image_url: image.url,
            fallback: image.file.name
          });
        };

        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _ret = _loop();

          switch (_ret) {
            case "continue":
              continue;

            default:
              if (_typeof(_ret) === "object") return _ret.v;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      var _iterator2 = _createForOfIteratorHelper$2(_this.state.fileOrder),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _id2 = _step2.value;
          var upload = _this.state.fileUploads[_id2];

          if (!upload || upload.state === 'failed') {
            continue;
          }

          if (upload.state === 'uploading') {
            // TODO: show error to user that they should wait until image is uploaded
            return;
          }

          attachments.push({
            type: 'file',
            asset_url: upload.url,
            title: upload.file.name,
            mime_type: upload.file.type,
            file_size: upload.file.size
          });
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      if (editing) {
        var id = _this.props.message.id;
        var updatedMessage = {
          id: id
        };
        updatedMessage.text = text;
        updatedMessage.attachments = attachments;
        updatedMessage.mentioned_users = _this.state.mentioned_users; // TODO: Remove this line and show an error when submit fails

        _this.props.clearEditingState();

        var updateMessagePromise = _this.props.editMessage(updatedMessage).then(_this.props.clearEditingState);

        logChatPromiseExecution(updateMessagePromise, 'update message');
      } else if (_this.props.overrideSubmitHandler && typeof _this.props.overrideSubmitHandler === 'function') {
        _this.props.overrideSubmitHandler({
          text: text,
          attachments: attachments,
          mentioned_users: uniq(_this.state.mentioned_users),
          parent: _this.props.parent
        }, _this.props.channel.cid);

        _this.setState({
          text: '',
          mentioned_users: [],
          imageUploads: Immutable({}),
          imageOrder: [],
          fileUploads: Immutable({}),
          fileOrder: []
        });
      } else {
        var sendMessagePromise = _this.props.sendMessage({
          text: text,
          attachments: attachments,
          mentioned_users: uniq(_this.state.mentioned_users),
          parent: _this.props.parent
        });

        logChatPromiseExecution(sendMessagePromise, 'send message');

        _this.setState({
          text: '',
          mentioned_users: [],
          imageUploads: Immutable({}),
          imageOrder: [],
          fileUploads: Immutable({}),
          fileOrder: []
        });
      }

      logChatPromiseExecution(_this.props.channel.stopTyping(), 'stop typing');
    });

    _defineProperty(_assertThisInitialized(_this), "_uploadNewFiles", function (files) {
      var _iterator3 = _createForOfIteratorHelper$2(files),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var file = _step3.value;

          if (file.type.startsWith('image/')) {
            _this._uploadNewImage(file);
          } else if (file instanceof File && !_this.props.noFiles) {
            _this._uploadNewFile(file);
          } else {
            return;
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "_uploadNewImage", /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(file) {
        var id, reader;
        return _regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                id = generateRandomId();
                _context2.next = 3;
                return _this.setState(function (prevState) {
                  return {
                    numberOfUploads: prevState.numberOfUploads + 1,
                    imageOrder: prevState.imageOrder.concat(id),
                    imageUploads: prevState.imageUploads.setIn([id], {
                      id: id,
                      file: file,
                      state: 'uploading'
                    })
                  };
                });

              case 3:
                if (FileReader) {
                  // TODO: Possibly use URL.createObjectURL instead. However, then we need
                  // to release the previews when not used anymore though.
                  reader = new FileReader();

                  reader.onload = function (event) {
                    _this.setState(function (prevState) {
                      return {
                        imageUploads: prevState.imageUploads.setIn([id, 'previewUri'], event.target.result)
                      };
                    });
                  };

                  reader.readAsDataURL(file);
                }

                return _context2.abrupt("return", _this._uploadImage(id));

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "_uploadNewFile", /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3(file) {
        var id;
        return _regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                id = generateRandomId();
                _context3.next = 3;
                return _this.setState(function (prevState) {
                  return {
                    numberOfUploads: prevState.numberOfUploads + 1,
                    fileOrder: prevState.fileOrder.concat(id),
                    fileUploads: prevState.fileUploads.setIn([id], {
                      id: id,
                      file: file,
                      state: 'uploading'
                    })
                  };
                });

              case 3:
                return _context3.abrupt("return", _this._uploadFile(id));

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x3) {
        return _ref3.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "_uploadImage", /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee4(id) {
        var img, file, response, alreadyRemoved;
        return _regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                img = _this.state.imageUploads[id];

                if (img) {
                  _context4.next = 3;
                  break;
                }

                return _context4.abrupt("return");

              case 3:
                file = img.file;
                _context4.next = 6;
                return _this.setState(function (prevState) {
                  return {
                    imageUploads: prevState.imageUploads.setIn([id, 'state'], 'uploading')
                  };
                });

              case 6:
                response = {};
                response = {};
                _context4.prev = 8;

                if (!_this.props.doImageUploadRequest) {
                  _context4.next = 15;
                  break;
                }

                _context4.next = 12;
                return _this.props.doImageUploadRequest(file, _this.props.channel);

              case 12:
                response = _context4.sent;
                _context4.next = 18;
                break;

              case 15:
                _context4.next = 17;
                return _this.props.channel.sendImage(file);

              case 17:
                response = _context4.sent;

              case 18:
                _context4.next = 28;
                break;

              case 20:
                _context4.prev = 20;
                _context4.t0 = _context4["catch"](8);
                console.warn(_context4.t0);
                alreadyRemoved = false;
                _context4.next = 26;
                return _this.setState(function (prevState) {
                  var image = prevState.imageUploads[id];

                  if (!image) {
                    alreadyRemoved = true;
                    return {
                      numberOfUploads: prevState.numberOfUploads - 1
                    };
                  }

                  return {
                    imageUploads: prevState.imageUploads.setIn([id, 'state'], 'failed'),
                    numberOfUploads: prevState.numberOfUploads - 1
                  };
                });

              case 26:
                if (!alreadyRemoved) {
                  _this.props.errorHandler(_context4.t0, 'upload-image', {
                    feedGroup: _this.props.feedGroup,
                    userId: _this.props.userId
                  });
                }

                return _context4.abrupt("return");

              case 28:
                _this.setState(function (prevState) {
                  return {
                    imageUploads: prevState.imageUploads.setIn([id, 'state'], 'finished').setIn([id, 'url'], response.file)
                  };
                });

              case 29:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[8, 20]]);
      }));

      return function (_x4) {
        return _ref4.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "_uploadFile", /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee5(id) {
        var upload, file, response, alreadyRemoved;
        return _regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                upload = _this.state.fileUploads[id];

                if (upload) {
                  _context5.next = 3;
                  break;
                }

                return _context5.abrupt("return");

              case 3:
                file = upload.file;
                _context5.next = 6;
                return _this.setState(function (prevState) {
                  return {
                    imageUploads: prevState.imageUploads.setIn([id, 'state'], 'uploading')
                  };
                });

              case 6:
                response = {};
                response = {};
                _context5.prev = 8;

                if (!_this.props.doFileUploadRequest) {
                  _context5.next = 15;
                  break;
                }

                _context5.next = 12;
                return _this.props.doFileUploadRequest(file, _this.props.channel);

              case 12:
                response = _context5.sent;
                _context5.next = 18;
                break;

              case 15:
                _context5.next = 17;
                return _this.props.channel.sendFile(file);

              case 17:
                response = _context5.sent;

              case 18:
                _context5.next = 27;
                break;

              case 20:
                _context5.prev = 20;
                _context5.t0 = _context5["catch"](8);
                console.warn(_context5.t0);
                alreadyRemoved = false;
                _context5.next = 26;
                return _this.setState(function (prevState) {
                  var image = prevState.imageUploads[id];

                  if (!image) {
                    alreadyRemoved = true;
                    return {
                      numberOfUploads: prevState.numberOfUploads - 1
                    };
                  }

                  return {
                    numberOfUploads: prevState.numberOfUploads - 1,
                    fileUploads: prevState.fileUploads.setIn([id, 'state'], 'failed')
                  };
                });

              case 26:
                if (!alreadyRemoved) {
                  _this.props.errorHandler(_context5.t0, 'upload-file', {
                    feedGroup: _this.props.feedGroup,
                    userId: _this.props.userId
                  });
                }

              case 27:
                _this.setState(function (prevState) {
                  return {
                    fileUploads: prevState.fileUploads.setIn([id, 'state'], 'finished').setIn([id, 'url'], response.file)
                  };
                });

              case 28:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[8, 20]]);
      }));

      return function (_x5) {
        return _ref5.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "_removeImage", function (id) {
      // TODO: cancel upload if still uploading
      _this.setState(function (prevState) {
        var img = prevState.imageUploads[id];

        if (!img) {
          return {};
        }

        return {
          numberOfUploads: prevState.numberOfUploads - 1,
          imageUploads: prevState.imageUploads.set(id, undefined),
          // remove
          imageOrder: prevState.imageOrder.filter(function (_id) {
            return id !== _id;
          })
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "_removeFile", function (id) {
      // TODO: cancel upload if still uploading
      _this.setState(function (prevState) {
        var upload = prevState.fileUploads[id];

        if (!upload) {
          return {};
        }

        return {
          numberOfUploads: prevState.numberOfUploads - 1,
          fileUploads: prevState.fileUploads.set(id, undefined),
          // remove
          fileOrder: prevState.fileOrder.filter(function (_id) {
            return id !== _id;
          })
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "_onPaste", /*#__PURE__*/function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee6(event) {
        var items, plainTextPromise, _iterator4, _step4, _loop2, _ret2, fileLikes, s;

        return _regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                // TODO: Move this handler to package with ImageDropzone
                items = event.clipboardData.items;

                if (dataTransferItemsHaveFiles(items)) {
                  _context6.next = 3;
                  break;
                }

                return _context6.abrupt("return");

              case 3:
                event.preventDefault(); // Get a promise for the plain text in case no files are
                // found. This needs to be done here because chrome cleans
                // up the DataTransferItems after resolving of a promise.

                _iterator4 = _createForOfIteratorHelper$2(items);
                _context6.prev = 5;

                _loop2 = function _loop2() {
                  var item = _step4.value;

                  if (item.kind === 'string' && item.type === 'text/plain') {
                    plainTextPromise = new Promise(function (resolve) {
                      item.getAsString(function (s) {
                        resolve(s);
                      });
                    });
                    return "break";
                  }
                };

                _iterator4.s();

              case 8:
                if ((_step4 = _iterator4.n()).done) {
                  _context6.next = 14;
                  break;
                }

                _ret2 = _loop2();

                if (!(_ret2 === "break")) {
                  _context6.next = 12;
                  break;
                }

                return _context6.abrupt("break", 14);

              case 12:
                _context6.next = 8;
                break;

              case 14:
                _context6.next = 19;
                break;

              case 16:
                _context6.prev = 16;
                _context6.t0 = _context6["catch"](5);

                _iterator4.e(_context6.t0);

              case 19:
                _context6.prev = 19;

                _iterator4.f();

                return _context6.finish(19);

              case 22:
                _context6.next = 24;
                return dataTransferItemsToFiles(items);

              case 24:
                fileLikes = _context6.sent;

                if (!fileLikes.length) {
                  _context6.next = 28;
                  break;
                }

                _this._uploadNewFiles(fileLikes);

                return _context6.abrupt("return");

              case 28:
                if (!plainTextPromise) {
                  _context6.next = 33;
                  break;
                }

                _context6.next = 31;
                return plainTextPromise;

              case 31:
                s = _context6.sent;

                _this.insertText(s);

              case 33:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, null, [[5, 16, 19, 22]]);
      }));

      return function (_x6) {
        return _ref6.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "_onSelectItem", function (item) {
      _this.setState(function (prevState) {
        return {
          mentioned_users: [].concat(_toConsumableArray(prevState.mentioned_users), [item.id])
        };
      });
    });

    var imageOrder = [];
    var imageUploads = {};
    var fileOrder = [];
    var fileUploads = {};
    var _attachments = [];
    var mentioned_users = [];
    var _text = '';

    if (props.message) {
      _text = props.message.text;

      var _iterator5 = _createForOfIteratorHelper$2(props.message.attachments),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var attach = _step5.value;

          if (attach.type === 'image') {
            var id = generateRandomId();
            imageOrder.push(id);
            imageUploads[id] = {
              id: id,
              url: attach.image_url,
              state: 'finished',
              file: {
                name: attach.fallback
              }
            };
          } else if (attach.type === 'file') {
            var _id3 = generateRandomId();

            fileOrder.push(_id3);
            fileUploads[_id3] = {
              id: _id3,
              url: attach.asset_url,
              state: 'finished',
              file: {
                name: attach.title,
                type: attach.mime_type,
                size: attach.file_size
              }
            };
          } else {
            _attachments.push(attach);
          }
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }

      var _iterator6 = _createForOfIteratorHelper$2(props.message.mentioned_users),
          _step6;

      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var mention = _step6.value;
          mentioned_users.push(mention.id);
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
    }

    _this.state = {
      text: _text,
      attachments: _attachments,
      imageOrder: imageOrder,
      imageUploads: Immutable(imageUploads),
      fileOrder: fileOrder,
      fileUploads: Immutable(fileUploads),
      emojiPickerIsOpen: false,
      filePanelIsOpen: false,
      mentioned_users: mentioned_users,
      numberOfUploads: 0
    };
    _this.textareaRef = React__default.createRef();
    _this.emojiPickerRef = React__default.createRef();
    _this.panelRef = React__default.createRef();
    return _this;
  }

  _createClass(MessageInput, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.focus) {
        this.textareaRef.current.focus();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('click', this.closeEmojiPicker, false);
      document.removeEventListener('click', this.hideFilePanel, false);
    }
  }, {
    key: "render",
    value: function render() {
      var Input = this.props.Input;
      var handlers = {
        uploadNewFiles: this._uploadNewFiles,
        removeImage: this._removeImage,
        uploadImage: this._uploadImage,
        removeFile: this._removeFile,
        uploadFile: this._uploadFile,
        emojiPickerRef: this.emojiPickerRef,
        panelRef: this.panelRef,
        textareaRef: this.textareaRef,
        onSelectEmoji: this.onSelectEmoji,
        getUsers: this.getUsers,
        getCommands: this.getCommands,
        handleSubmit: this.handleSubmit,
        handleChange: this.handleChange,
        onPaste: this._onPaste,
        onSelectItem: this._onSelectItem,
        openEmojiPicker: this.openEmojiPicker
      };
      return /*#__PURE__*/React__default.createElement(Input, _extends({}, this.props, this.state, handlers));
    }
  }]);

  return MessageInput;
}(PureComponent);

_defineProperty(MessageInput, "propTypes", {
  /** Set focus to the text input if this is enabled */
  focus: PropTypes.bool.isRequired,

  /** Disable input */
  disabled: PropTypes.bool.isRequired,

  /** Grow the textarea while you're typing */
  grow: PropTypes.bool.isRequired,

  /** Set the maximum number of rows */
  maxRows: PropTypes.number.isRequired,

  /** Via Context: the channel that we're sending the message to */
  channel: PropTypes.object.isRequired,

  /** Via Context: the users currently typing, passed from the Channel component */
  typing: PropTypes.object.isRequired,
  // /** Set textarea to be disabled */
  // disabled: PropTypes.bool,

  /** The parent message object when replying on a thread */
  parent: PropTypes.object,

  /**
   * The component handling how the input is rendered
   *
   * Available built-in components (also accepts the same props as):
   *
   * 1. [MessageInputSmall](https://github.com/GetStream/stream-chat-react/blob/master/src/components/MessageInputSmall.js)
   * 2. [MessageInputLarge](https://github.com/GetStream/stream-chat-react/blob/master/src/components/MessageInputLarge.js) (default)
   * 3. [MessageInputFlat](https://github.com/GetStream/stream-chat-react/blob/master/src/components/MessageInputFlat.js)
   *
   * */
  Input: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),

  /** Override image upload request */
  doImageUploadRequest: PropTypes.func,

  /** Override file upload request */
  doFileUploadRequest: PropTypes.func,

  /**
   * Custom UI component for send button.
   *
   * Defaults to and accepts same props as: [SendButton](https://getstream.github.io/stream-chat-react/#sendbutton)
   * */
  SendButton: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),

  /**
   * Any additional attrubutes that you may want to add for underlying HTML textarea element.
   * e.g.
   * <MessageInput
   *  additionalTextareaProps={{
   *    maxLength: 10,
   *  }}
   * />
   */
  additionalTextareaProps: PropTypes.object
});

_defineProperty(MessageInput, "defaultProps", {
  focus: false,
  disabled: false,
  grow: true,
  maxRows: 10,
  Input: MessageInputLargeWithContext,
  SendButton: SendButton,
  additionalTextareaProps: {}
});

MessageInput = withChannelContext(MessageInput);

function _createSuper$p(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$p(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$p() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
/**
 * @example ./docs/EditMessageForm.md
 */

var EditMessageForm = /*#__PURE__*/function (_React$Component) {
  _inherits(EditMessageForm, _React$Component);

  var _super = _createSuper$p(EditMessageForm);

  function EditMessageForm() {
    var _this;

    _classCallCheck(this, EditMessageForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "renderUploads", function () {
      return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, _this.props.imageOrder.length > 0 && /*#__PURE__*/React__default.createElement(ImagePreviewer, {
        imageUploads: _this.props.imageOrder.map(function (id) {
          return _this.props.imageUploads[id];
        }),
        handleRemove: _this.props.removeImage,
        handleRetry: _this.props.uploadImage,
        handleFiles: _this.props.uploadNewFiles,
        multiple: _this.props.multipleUploads,
        disabled: _this.props.numberOfUploads >= _this.props.maxNumberOfFiles ? true : false
      }), _this.props.fileOrder.length > 0 && /*#__PURE__*/React__default.createElement(FilePreviewer, {
        uploads: _this.props.fileOrder.map(function (id) {
          return _this.props.fileUploads[id];
        }),
        handleRemove: _this.props.removeFile,
        handleRetry: _this.props.uploadFile,
        handleFiles: _this.props.uploadNewFiles
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "renderEmojiPicker", function () {
      var t = _this.props.t;

      if (_this.props.emojiPickerIsOpen) {
        return /*#__PURE__*/React__default.createElement("div", {
          className: "str-chat__small-message-input-emojipicker",
          ref: _this.props.emojiPickerRef
        }, /*#__PURE__*/React__default.createElement(Picker, {
          native: true,
          emoji: "point_up",
          title: t('Pick your emoji'),
          onSelect: _this.props.onSelectEmoji,
          color: "#006CFF",
          showPreview: false,
          emojisToShowFilter: filterEmoji
        }));
      }
    });

    return _this;
  }

  _createClass(EditMessageForm, [{
    key: "render",
    value: function render() {
      var t = this.props.t;
      return /*#__PURE__*/React__default.createElement("div", {
        className: "str-chat__edit-message-form"
      }, /*#__PURE__*/React__default.createElement(ImageDropzone, {
        accept: this.props.acceptedFiles,
        multiple: this.props.multipleUploads,
        disabled: this.props.numberOfUploads >= this.props.maxNumberOfFiles ? true : false,
        handleFiles: this.props.uploadNewFiles
      }, /*#__PURE__*/React__default.createElement("form", {
        onSubmit: this.props.handleSubmit
      }, this.renderEmojiPicker(), this.renderUploads(), this.props.emojiPickerIsOpen && /*#__PURE__*/React__default.createElement("div", {
        className: "str-chat__input--emojipicker",
        ref: this.props.emojiPickerRef
      }, /*#__PURE__*/React__default.createElement(Picker, {
        native: true,
        emoji: "point_up",
        title: t('Pick your emoji'),
        onSelect: this.props.onSelectEmoji,
        color: "#006CFF",
        emojisToShowFilter: filterEmoji
      })), /*#__PURE__*/React__default.createElement(ChatAutoComplete, {
        users: this.props.getUsers(),
        commands: this.props.getCommands(),
        innerRef: this.props.textareaRef,
        handleSubmit: this.props.handleSubmit,
        onChange: this.props.handleChange,
        onSelectItem: this.props.onSelectItem,
        value: this.props.text,
        rows: 1,
        maxRows: this.props.maxRows,
        onPaste: this.props.onPaste,
        grow: this.props.grow,
        additionalTextareaProps: this.props.additionalTextareaProps
      }), /*#__PURE__*/React__default.createElement("div", {
        className: "str-chat__message-team-form-footer"
      }, /*#__PURE__*/React__default.createElement("div", {
        className: "str-chat__edit-message-form-options"
      }, /*#__PURE__*/React__default.createElement("span", {
        className: "str-chat__input-emojiselect",
        onClick: this.props.openEmojiPicker
      }, /*#__PURE__*/React__default.createElement("svg", {
        width: "14",
        height: "14",
        xmlns: "http://www.w3.org/2000/svg"
      }, /*#__PURE__*/React__default.createElement("path", {
        d: "M11.108 8.05a.496.496 0 0 1 .212.667C10.581 10.147 8.886 11 7 11c-1.933 0-3.673-.882-4.33-2.302a.497.497 0 0 1 .9-.417C4.068 9.357 5.446 10 7 10c1.519 0 2.869-.633 3.44-1.738a.495.495 0 0 1 .668-.212zm.792-1.826a.477.477 0 0 1-.119.692.541.541 0 0 1-.31.084.534.534 0 0 1-.428-.194c-.106-.138-.238-.306-.539-.306-.298 0-.431.168-.54.307A.534.534 0 0 1 9.538 7a.544.544 0 0 1-.31-.084.463.463 0 0 1-.117-.694c.33-.423.742-.722 1.394-.722.653 0 1.068.3 1.396.724zm-7 0a.477.477 0 0 1-.119.692.541.541 0 0 1-.31.084.534.534 0 0 1-.428-.194c-.106-.138-.238-.306-.539-.306-.299 0-.432.168-.54.307A.533.533 0 0 1 2.538 7a.544.544 0 0 1-.31-.084.463.463 0 0 1-.117-.694c.33-.423.742-.722 1.394-.722.653 0 1.068.3 1.396.724zM7 0a7 7 0 1 1 0 14A7 7 0 0 1 7 0zm4.243 11.243A5.96 5.96 0 0 0 13 7a5.96 5.96 0 0 0-1.757-4.243A5.96 5.96 0 0 0 7 1a5.96 5.96 0 0 0-4.243 1.757A5.96 5.96 0 0 0 1 7a5.96 5.96 0 0 0 1.757 4.243A5.96 5.96 0 0 0 7 13a5.96 5.96 0 0 0 4.243-1.757z",
        fillRule: "evenodd"
      }))), /*#__PURE__*/React__default.createElement(FileUploadButton, {
        multiple: this.props.multipleUploads,
        disabled: this.props.numberOfUploads >= this.props.maxNumberOfFiles ? true : false,
        accepts: this.props.acceptedFiles,
        handleFiles: this.props.uploadNewFiles
      }, /*#__PURE__*/React__default.createElement("span", {
        className: "str-chat__input-fileupload"
      }, /*#__PURE__*/React__default.createElement("svg", {
        width: "14",
        height: "14",
        xmlns: "http://www.w3.org/2000/svg"
      }, /*#__PURE__*/React__default.createElement("path", {
        d: "M7 .5c3.59 0 6.5 2.91 6.5 6.5s-2.91 6.5-6.5 6.5S.5 10.59.5 7 3.41.5 7 .5zm0 12c3.031 0 5.5-2.469 5.5-5.5S10.031 1.5 7 1.5A5.506 5.506 0 0 0 1.5 7c0 3.034 2.469 5.5 5.5 5.5zM7.506 3v3.494H11v1.05H7.506V11h-1.05V7.544H3v-1.05h3.456V3h1.05z",
        fillRule: "nonzero"
      }))))), /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement("button", {
        onClick: this.props.clearEditingState
      }, t('Cancel')), /*#__PURE__*/React__default.createElement("button", {
        type: "submit"
      }, t('Send')))))));
    }
  }]);

  return EditMessageForm;
}(React__default.Component);

_defineProperty(EditMessageForm, "propTypes", {
  /** Set focus to the text input if this is enabled */
  focus: PropTypes.bool,

  /** Grow the textarea while you're typing */
  grow: PropTypes.bool,

  /** Specify the max amount of rows the textarea is able to grow */
  maxRows: PropTypes.number.isRequired,

  /** Disable the textarea */
  disabled: PropTypes.bool,

  /** @see See [MessageInput](https://getstream.github.io/stream-chat-react/#messageinput) for doc */
  imageOrder: PropTypes.array,

  /** @see See [MessageInput](https://getstream.github.io/stream-chat-react/#messageinput) for doc */
  imageUploads: PropTypes.object,

  /** @see See [MessageInput](https://getstream.github.io/stream-chat-react/#messageinput) for doc */
  removeImage: PropTypes.func,

  /** @see See [MessageInput](https://getstream.github.io/stream-chat-react/#messageinput) for doc */
  uploadImage: PropTypes.func,

  /** @see See [MessageInput](https://getstream.github.io/stream-chat-react/#messageinput) for doc */
  uploadNewFiles: PropTypes.func,

  /** @see See [MessageInput](https://getstream.github.io/stream-chat-react/#messageinput) for doc */
  numberOfUploads: PropTypes.number,

  /** @see See [MessageInput](https://getstream.github.io/stream-chat-react/#messageinput) for doc */
  fileOrder: PropTypes.array,

  /** @see See [MessageInput](https://getstream.github.io/stream-chat-react/#messageinput) for doc */
  fileUploads: PropTypes.object,

  /** @see See [MessageInput](https://getstream.github.io/stream-chat-react/#messageinput) for doc */
  removeFile: PropTypes.func,

  /** @see See [MessageInput](https://getstream.github.io/stream-chat-react/#messageinput) for doc */
  uploadFile: PropTypes.func,

  /** @see See [MessageInput](https://getstream.github.io/stream-chat-react/#messageinput) for doc */
  emojiPickerIsOpen: PropTypes.bool,

  /** @see See [MessageInput](https://getstream.github.io/stream-chat-react/#messageinput) for doc */
  emojiPickerRef: PropTypes.object,

  /** @see See [MessageInput](https://getstream.github.io/stream-chat-react/#messageinput) for doc */
  onSelectEmoji: PropTypes.func,

  /** @see See [MessageInput](https://getstream.github.io/stream-chat-react/#messageinput) for doc */
  getUsers: PropTypes.func,

  /** @see See [MessageInput](https://getstream.github.io/stream-chat-react/#messageinput) for doc */
  getCommands: PropTypes.func,

  /** @see See [MessageInput](https://getstream.github.io/stream-chat-react/#messageinput) for doc */
  textareaRef: PropTypes.object,

  /** @see See [MessageInput](https://getstream.github.io/stream-chat-react/#messageinput) for doc */
  handleSubmit: PropTypes.func,

  /** @see See [MessageInput](https://getstream.github.io/stream-chat-react/#messageinput) for doc */
  handleChange: PropTypes.func,

  /** @see See [MessageInput](https://getstream.github.io/stream-chat-react/#messageinput) for doc */
  onSelectItem: PropTypes.func,

  /** @see See [MessageInput](https://getstream.github.io/stream-chat-react/#messageinput) for doc */
  text: PropTypes.string,

  /** @see See [MessageInput](https://getstream.github.io/stream-chat-react/#messageinput) for doc */
  onPaste: PropTypes.func,

  /** @see See [MessageInput](https://getstream.github.io/stream-chat-react/#messageinput) for doc */
  openEmojiPicker: PropTypes.func,

  /** @see See [channel context](https://getstream.github.io/stream-chat-react/#channel) doc */
  watcher_count: PropTypes.number,

  /** @see See [channel context](https://getstream.github.io/stream-chat-react/#channel) doc */
  typing: PropTypes.object,

  /** @see See [channel context](https://getstream.github.io/stream-chat-react/#channel) doc */
  multipleUploads: PropTypes.object,

  /** @see See [channel context](https://getstream.github.io/stream-chat-react/#channel) doc */
  maxNumberOfFiles: PropTypes.number,

  /** @see See [channel context](https://getstream.github.io/stream-chat-react/#channel) doc */
  acceptedFiles: PropTypes.object,

  /**
   * Any additional attrubutes that you may want to add for underlying HTML textarea element.
   */
  additionalTextareaProps: PropTypes.object
});

_defineProperty(EditMessageForm, "defaultProps", {
  grow: true,
  focus: false,
  disabled: false
});

EditMessageForm = withTranslationContext(EditMessageForm);

function _createSuper$q(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$q(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$q() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
/**
 * MessageSimple - Render component, should be used together with the Message component
 *
 * @example ./docs/MessageSimple.md
 * @extends PureComponent
 */

var MessageSimple = /*#__PURE__*/function (_PureComponent) {
  _inherits(MessageSimple, _PureComponent);

  var _super = _createSuper$q(MessageSimple);

  function MessageSimple() {
    var _this;

    _classCallCheck(this, MessageSimple);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isFocused: false,
      actionsBoxOpen: false,
      showDetailedReactions: false
    });

    _defineProperty(_assertThisInitialized(_this), "messageActionsRef", React__default.createRef());

    _defineProperty(_assertThisInitialized(_this), "reactionSelectorRef", React__default.createRef());

    _defineProperty(_assertThisInitialized(_this), "_onClickOptionsAction", function () {
      _this.setState({
        actionsBoxOpen: true
      }, function () {
        return document.addEventListener('click', _this.hideOptions, false);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "_hideOptions", function () {
      _this.setState({
        actionsBoxOpen: false
      });

      document.removeEventListener('click', _this.hideOptions, false);
    });

    _defineProperty(_assertThisInitialized(_this), "_clickReactionList", function () {
      _this.setState(function () {
        return {
          showDetailedReactions: true
        };
      }, function () {
        document.addEventListener('click', _this._closeDetailedReactions);
        document.addEventListener('touchend', _this._closeDetailedReactions);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "_closeDetailedReactions", function (e) {
      if (!_this.reactionSelectorRef.current.reactionSelector.current.contains(e.target)) {
        _this.setState(function () {
          return {
            showDetailedReactions: false
          };
        }, function () {
          document.removeEventListener('click', _this._closeDetailedReactions);
          document.removeEventListener('touchend', _this._closeDetailedReactions);
        });
      } else {
        return {};
      }
    });

    _defineProperty(_assertThisInitialized(_this), "renderStatus", function () {
      var _this$props = _this.props,
          readBy = _this$props.readBy,
          client = _this$props.client,
          message = _this$props.message,
          threadList = _this$props.threadList,
          lastReceivedId = _this$props.lastReceivedId,
          Avatar = _this$props.Avatar,
          t = _this$props.t;

      if (!_this.isMine() || message.type === 'error') {
        return null;
      }

      var justReadByMe = readBy.length === 1 && readBy[0] && readBy[0].id === client.user.id;

      if (message.status === 'sending') {
        return /*#__PURE__*/React__default.createElement("span", {
          className: "str-chat__message-simple-status"
        }, /*#__PURE__*/React__default.createElement(Tooltip, null, t('Sending...')), /*#__PURE__*/React__default.createElement(LoadingIndicator, null));
      } else if (readBy.length !== 0 && !threadList && !justReadByMe) {
        var lastReadUser = readBy.filter(function (item) {
          return item.id !== client.user.id;
        })[0];
        return /*#__PURE__*/React__default.createElement("span", {
          className: "str-chat__message-simple-status"
        }, /*#__PURE__*/React__default.createElement(Tooltip, null, getReadByTooltipText(readBy, _this.props.t, _this.props.client)), /*#__PURE__*/React__default.createElement(Avatar, {
          name: lastReadUser.name || lastReadUser.id,
          image: lastReadUser.image,
          size: 15
        }), readBy.length > 2 && /*#__PURE__*/React__default.createElement("span", {
          className: "str-chat__message-simple-status-number"
        }, readBy.length - 1));
      } else if (message.status === 'received' && message.id === lastReceivedId && !threadList) {
        return /*#__PURE__*/React__default.createElement("span", {
          className: "str-chat__message-simple-status"
        }, /*#__PURE__*/React__default.createElement(Tooltip, null, t('Delivered')), /*#__PURE__*/React__default.createElement("svg", {
          width: "16",
          height: "16",
          xmlns: "http://www.w3.org/2000/svg"
        }, /*#__PURE__*/React__default.createElement("path", {
          d: "M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zm3.72 6.633a.955.955 0 1 0-1.352-1.352L6.986 8.663 5.633 7.31A.956.956 0 1 0 4.28 8.663l2.029 2.028a.956.956 0 0 0 1.353 0l4.058-4.058z",
          fill: "#006CFF",
          fillRule: "evenodd"
        })));
      } else {
        return null;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "renderMessageActions", function () {
      var _this$props2 = _this.props,
          Message = _this$props2.Message,
          getMessageActions = _this$props2.getMessageActions,
          messageListRect = _this$props2.messageListRect,
          handleFlag = _this$props2.handleFlag,
          handleMute = _this$props2.handleMute,
          handleEdit = _this$props2.handleEdit,
          handleDelete = _this$props2.handleDelete;
      var messageActions = getMessageActions();

      if (messageActions.length === 0) {
        return;
      }

      return /*#__PURE__*/React__default.createElement("div", {
        onClick: _this._onClickOptionsAction,
        className: "str-chat__message-simple__actions__action str-chat__message-simple__actions__action--options"
      }, /*#__PURE__*/React__default.createElement(MessageActionsBox, {
        Message: Message,
        getMessageActions: getMessageActions,
        open: _this.state.actionsBoxOpen,
        messageListRect: messageListRect,
        handleFlag: handleFlag,
        handleMute: handleMute,
        handleEdit: handleEdit,
        handleDelete: handleDelete,
        mine: _this.isMine()
      }), /*#__PURE__*/React__default.createElement("svg", {
        width: "11",
        height: "4",
        viewBox: "0 0 11 4",
        xmlns: "http://www.w3.org/2000/svg"
      }, /*#__PURE__*/React__default.createElement("path", {
        d: "M1.5 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm4 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm4 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z",
        fillRule: "nonzero"
      })));
    });

    return _this;
  }

  _createClass(MessageSimple, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (!this.props.message.deleted_at) {
        document.removeEventListener('click', this._closeDetailedReactions);
        document.removeEventListener('touchend', this._closeDetailedReactions);
      }
    }
  }, {
    key: "isMine",
    value: function isMine() {
      return this.props.isMyMessage(this.props.message);
    }
  }, {
    key: "renderOptions",
    value: function renderOptions() {
      var _this$props3 = this.props,
          message = _this$props3.message,
          initialMessage = _this$props3.initialMessage,
          channelConfig = _this$props3.channelConfig,
          threadList = _this$props3.threadList,
          handleOpenThread = _this$props3.handleOpenThread;

      if (message.type === 'error' || message.type === 'system' || message.type === 'ephemeral' || message.status === 'failed' || message.status === 'sending' || initialMessage) {
        return;
      }

      if (this.isMine()) {
        return /*#__PURE__*/React__default.createElement("div", {
          className: "str-chat__message-simple__actions"
        }, this.renderMessageActions(), !threadList && channelConfig && channelConfig.replies && /*#__PURE__*/React__default.createElement("div", {
          onClick: handleOpenThread,
          className: "str-chat__message-simple__actions__action str-chat__message-simple__actions__action--thread"
        }, /*#__PURE__*/React__default.createElement("svg", {
          width: "14",
          height: "10",
          xmlns: "http://www.w3.org/2000/svg"
        }, /*#__PURE__*/React__default.createElement("path", {
          d: "M8.516 3c4.78 0 4.972 6.5 4.972 6.5-1.6-2.906-2.847-3.184-4.972-3.184v2.872L3.772 4.994 8.516.5V3zM.484 5l4.5-4.237v1.78L2.416 5l2.568 2.125v1.828L.484 5z",
          fillRule: "evenodd"
        }))), channelConfig && channelConfig.reactions && /*#__PURE__*/React__default.createElement("div", {
          className: "str-chat__message-simple__actions__action str-chat__message-simple__actions__action--reactions",
          onClick: this._clickReactionList
        }, /*#__PURE__*/React__default.createElement("svg", {
          width: "16",
          height: "14",
          viewBox: "0 0 16 14",
          xmlns: "http://www.w3.org/2000/svg"
        }, /*#__PURE__*/React__default.createElement("path", {
          d: "M11.108 8.05a.496.496 0 0 1 .212.667C10.581 10.147 8.886 11 7 11c-1.933 0-3.673-.882-4.33-2.302a.497.497 0 0 1 .9-.417C4.068 9.357 5.446 10 7 10c1.519 0 2.869-.633 3.44-1.738a.495.495 0 0 1 .668-.212zm.792-1.826a.477.477 0 0 1-.119.692.541.541 0 0 1-.31.084.534.534 0 0 1-.428-.194c-.106-.138-.238-.306-.539-.306-.298 0-.431.168-.54.307A.534.534 0 0 1 9.538 7a.544.544 0 0 1-.31-.084.463.463 0 0 1-.117-.694c.33-.423.742-.722 1.394-.722.653 0 1.068.3 1.396.724zm-7 0a.477.477 0 0 1-.119.692.541.541 0 0 1-.31.084.534.534 0 0 1-.428-.194c-.106-.138-.238-.306-.539-.306-.299 0-.432.168-.54.307A.533.533 0 0 1 2.538 7a.544.544 0 0 1-.31-.084.463.463 0 0 1-.117-.694c.33-.423.742-.722 1.394-.722.653 0 1.068.3 1.396.724zM7 0a7 7 0 1 1 0 14A7 7 0 0 1 7 0zm4.243 11.243A5.96 5.96 0 0 0 13 7a5.96 5.96 0 0 0-1.757-4.243A5.96 5.96 0 0 0 7 1a5.96 5.96 0 0 0-4.243 1.757A5.96 5.96 0 0 0 1 7a5.96 5.96 0 0 0 1.757 4.243A5.96 5.96 0 0 0 7 13a5.96 5.96 0 0 0 4.243-1.757z",
          fillRule: "evenodd"
        }))));
      } else {
        return /*#__PURE__*/React__default.createElement("div", {
          className: "str-chat__message-simple__actions"
        }, channelConfig && channelConfig.reactions && /*#__PURE__*/React__default.createElement("div", {
          className: "str-chat__message-simple__actions__action str-chat__message-simple__actions__action--reactions",
          onClick: this._clickReactionList
        }, /*#__PURE__*/React__default.createElement("svg", {
          width: "14",
          height: "14",
          xmlns: "http://www.w3.org/2000/svg"
        }, /*#__PURE__*/React__default.createElement("path", {
          d: "M11.108 8.05a.496.496 0 0 1 .212.667C10.581 10.147 8.886 11 7 11c-1.933 0-3.673-.882-4.33-2.302a.497.497 0 0 1 .9-.417C4.068 9.357 5.446 10 7 10c1.519 0 2.869-.633 3.44-1.738a.495.495 0 0 1 .668-.212zm.792-1.826a.477.477 0 0 1-.119.692.541.541 0 0 1-.31.084.534.534 0 0 1-.428-.194c-.106-.138-.238-.306-.539-.306-.298 0-.431.168-.54.307A.534.534 0 0 1 9.538 7a.544.544 0 0 1-.31-.084.463.463 0 0 1-.117-.694c.33-.423.742-.722 1.394-.722.653 0 1.068.3 1.396.724zm-7 0a.477.477 0 0 1-.119.692.541.541 0 0 1-.31.084.534.534 0 0 1-.428-.194c-.106-.138-.238-.306-.539-.306-.299 0-.432.168-.54.307A.533.533 0 0 1 2.538 7a.544.544 0 0 1-.31-.084.463.463 0 0 1-.117-.694c.33-.423.742-.722 1.394-.722.653 0 1.068.3 1.396.724zM7 0a7 7 0 1 1 0 14A7 7 0 0 1 7 0zm4.243 11.243A5.96 5.96 0 0 0 13 7a5.96 5.96 0 0 0-1.757-4.243A5.96 5.96 0 0 0 7 1a5.96 5.96 0 0 0-4.243 1.757A5.96 5.96 0 0 0 1 7a5.96 5.96 0 0 0 1.757 4.243A5.96 5.96 0 0 0 7 13a5.96 5.96 0 0 0 4.243-1.757z",
          fillRule: "evenodd"
        }))), !threadList && channelConfig && channelConfig.replies && /*#__PURE__*/React__default.createElement("div", {
          onClick: handleOpenThread,
          className: "str-chat__message-simple__actions__action str-chat__message-simple__actions__action--thread"
        }, /*#__PURE__*/React__default.createElement("svg", {
          width: "14",
          height: "10",
          xmlns: "http://www.w3.org/2000/svg"
        }, /*#__PURE__*/React__default.createElement("path", {
          d: "M8.516 3c4.78 0 4.972 6.5 4.972 6.5-1.6-2.906-2.847-3.184-4.972-3.184v2.872L3.772 4.994 8.516.5V3zM.484 5l4.5-4.237v1.78L2.416 5l2.568 2.125v1.828L.484 5z",
          fillRule: "evenodd"
        }))), this.renderMessageActions());
      }
    } // eslint-disable-next-line

  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          message = _this$props4.message,
          Attachment = _this$props4.Attachment,
          Avatar = _this$props4.Avatar,
          editing = _this$props4.editing,
          clearEditingState = _this$props4.clearEditingState,
          handleRetry = _this$props4.handleRetry,
          updateMessage = _this$props4.updateMessage,
          handleReaction = _this$props4.handleReaction,
          actionsEnabled = _this$props4.actionsEnabled,
          messageListRect = _this$props4.messageListRect,
          handleAction = _this$props4.handleAction,
          onMentionsHoverMessage = _this$props4.onMentionsHoverMessage,
          onMentionsClickMessage = _this$props4.onMentionsClickMessage,
          unsafeHTML = _this$props4.unsafeHTML,
          threadList = _this$props4.threadList,
          handleOpenThread = _this$props4.handleOpenThread,
          t = _this$props4.t,
          tDateTimeParser = _this$props4.tDateTimeParser;
      var when = tDateTimeParser(message.created_at).calendar();
      var messageClasses = this.isMine() ? 'str-chat__message str-chat__message--me str-chat__message-simple str-chat__message-simple--me' : 'str-chat__message str-chat__message-simple';
      var hasAttachment = Boolean(message && message.attachments && message.attachments.length);
      var images = hasAttachment && message.attachments.filter(function (item) {
        return item.type === 'image';
      });
      var hasReactions = Boolean(message.latest_reactions && message.latest_reactions.length);

      if (message.type === 'message.read' || message.type === 'message.date') {
        return null;
      }

      if (message.deleted_at) {
        return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("div", {
          key: message.id,
          className: "".concat(messageClasses, " str-chat__message--deleted ").concat(message.type, " ")
        }, /*#__PURE__*/React__default.createElement("div", {
          className: "str-chat__message--deleted-inner"
        }, t('This message was deleted...'))));
      }

      return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, editing && /*#__PURE__*/React__default.createElement(Modal, {
        open: editing,
        onClose: clearEditingState
      }, /*#__PURE__*/React__default.createElement(MessageInput, _extends({
        Input: EditMessageForm,
        message: message,
        clearEditingState: clearEditingState,
        updateMessage: updateMessage
      }, this.props.additionalMessageInputProps))), /*#__PURE__*/React__default.createElement("div", {
        key: message.id,
        className: "\n\t\t\t\t\t\t".concat(messageClasses, "\n\t\t\t\t\t\tstr-chat__message--").concat(message.type, "\n\t\t\t\t\t\tstr-chat__message--").concat(message.status, "\n\t\t\t\t\t\t").concat(message.text ? 'str-chat__message--has-text' : 'has-no-text', "\n\t\t\t\t\t\t").concat(hasAttachment ? 'str-chat__message--has-attachment' : '', "\n\t\t\t\t\t\t").concat(hasReactions ? 'str-chat__message--with-reactions' : '', "\n\t\t\t\t\t").trim(),
        onMouseLeave: this._hideOptions,
        ref: this.messageRef
      }, this.renderStatus(), /*#__PURE__*/React__default.createElement(Avatar, {
        image: message.user.image,
        name: message.user.name || message.user.id
      }), /*#__PURE__*/React__default.createElement("div", {
        className: "str-chat__message-inner",
        onClick: message.status === 'failed' ? handleRetry.bind(this, message) : null
      }, !message.text && /*#__PURE__*/React__default.createElement(React__default.Fragment, null, this.renderOptions(), hasReactions && !this.state.showDetailedReactions && /*#__PURE__*/React__default.createElement(ReactionsList, {
        reactions: message.latest_reactions,
        reaction_counts: message.reaction_counts,
        onClick: this._clickReactionList,
        reverse: true
      }), this.state.showDetailedReactions && /*#__PURE__*/React__default.createElement(ReactionSelector, {
        handleReaction: handleReaction,
        detailedView: true,
        reaction_counts: message.reaction_counts,
        latest_reactions: message.latest_reactions,
        messageList: messageListRect,
        ref: this.reactionSelectorRef
      })), /*#__PURE__*/React__default.createElement("div", {
        className: "str-chat__message-attachment-container"
      }, hasAttachment && message.attachments.map(function (attachment, index) {
        if (attachment.type === 'image' && images.length > 1) return null;
        return /*#__PURE__*/React__default.createElement(Attachment, {
          key: "".concat(message.id, "-").concat(index),
          attachment: attachment,
          actionHandler: handleAction
        });
      })), images.length > 1 && /*#__PURE__*/React__default.createElement(Gallery, {
        images: images
      }), message.text && /*#__PURE__*/React__default.createElement("div", {
        className: "str-chat__message-text"
      }, /*#__PURE__*/React__default.createElement("div", {
        className: "\n\t\t\t\t\t\t\t\t\tstr-chat__message-text-inner str-chat__message-simple-text-inner\n\t\t\t\t\t\t\t\t\t".concat(this.state.isFocused ? 'str-chat__message-text-inner--focused' : '', "\n\t\t\t\t\t\t\t\t\t").concat(hasAttachment ? 'str-chat__message-text-inner--has-attachment' : '', "\n\t\t\t\t\t\t\t\t\t").concat(isOnlyEmojis(message.text) ? 'str-chat__message-simple-text-inner--is-emoji' : '', "\n                ").trim(),
        onMouseOver: onMentionsHoverMessage,
        onClick: onMentionsClickMessage
      }, message.type === 'error' && /*#__PURE__*/React__default.createElement("div", {
        className: "str-chat__simple-message--error-message"
      }, t('Error · Unsent')), message.status === 'failed' && /*#__PURE__*/React__default.createElement("div", {
        className: "str-chat__simple-message--error-message"
      }, t('Message Failed · Click to try again')), unsafeHTML ? /*#__PURE__*/React__default.createElement("div", {
        dangerouslySetInnerHTML: {
          __html: message.html
        }
      }) : renderText(message), hasReactions && !this.state.showDetailedReactions && /*#__PURE__*/React__default.createElement(ReactionsList, {
        reactions: message.latest_reactions,
        reaction_counts: message.reaction_counts,
        onClick: this._clickReactionList,
        reverse: true
      }), this.state.showDetailedReactions && /*#__PURE__*/React__default.createElement(ReactionSelector, {
        mine: this.isMine(),
        handleReaction: handleReaction,
        actionsEnabled: actionsEnabled,
        detailedView: true,
        reaction_counts: message.reaction_counts,
        latest_reactions: message.latest_reactions,
        messageList: messageListRect,
        ref: this.reactionSelectorRef
      })), message.text && this.renderOptions()), !threadList && message.reply_count !== 0 && /*#__PURE__*/React__default.createElement("div", {
        className: "str-chat__message-simple-reply-button"
      }, /*#__PURE__*/React__default.createElement(MessageRepliesCountButton, {
        onClick: handleOpenThread,
        reply_count: message.reply_count
      })), /*#__PURE__*/React__default.createElement("div", {
        className: "str-chat__message-data str-chat__message-simple-data"
      }, !this.isMine() ? /*#__PURE__*/React__default.createElement("span", {
        className: "str-chat__message-simple-name"
      }, message.user.name || message.user.id) : null, /*#__PURE__*/React__default.createElement("span", {
        className: "str-chat__message-simple-timestamp"
      }, when)))));
    }
  }]);

  return MessageSimple;
}(PureComponent);

_defineProperty(MessageSimple, "propTypes", {
  /** The [message object](https://getstream.io/chat/docs/#message_format) */
  message: PropTypes.object,

  /**
   * The attachment UI component.
   * Default: [Attachment](https://github.com/GetStream/stream-chat-react/blob/master/src/components/Attachment.js)
   * */
  Attachment: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),

  /** Avatar */
  Avatar: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),

  /**
   * @deprecated Its not recommended to use this anymore. All the methods in this HOC are provided explicitly.
   *
   * The higher order message component, most logic is delegated to this component
   * @see See [Message HOC](https://getstream.github.io/stream-chat-react/#message) for example
   *
   * */
  Message: PropTypes.oneOfType([PropTypes.node, PropTypes.func, PropTypes.object]).isRequired,

  /** render HTML instead of markdown. Posting HTML is only allowed server-side */
  unsafeHTML: PropTypes.bool,

  /** Client object */
  client: PropTypes.object,

  /** If its parent message in thread. */
  initialMessage: PropTypes.bool,

  /** Channel config object */
  channelConfig: PropTypes.object,

  /** If component is in thread list */
  threadList: PropTypes.bool,

  /** Function to open thread on current messxage */
  handleOpenThread: PropTypes.func,

  /** If the message is in edit state */
  editing: PropTypes.bool,

  /** Function to exit edit state */
  clearEditingState: PropTypes.func,

  /** Returns true if message belongs to current user */
  isMyMessage: PropTypes.func,

  /**
   * Returns all allowed actions on message by current user e.g., [edit, delete, flag, mute]
   * Please check [Message](https://github.com/GetStream/stream-chat-react/blob/master/src/components/Message.js) component for default implementation.
   * */
  getMessageActions: PropTypes.func,

  /**
   * Function to publish updates on message to channel
   *
   * @param message Updated [message object](https://getstream.io/chat/docs/#message_format)
   * */
  updateMessage: PropTypes.func,

  /**
   * Reattempt sending a message
   * @param message A [message object](https://getstream.io/chat/docs/#message_format) to resent.
   */
  handleRetry: PropTypes.func,

  /**
   * Add or remove reaction on message
   *
   * @param type Type of reaction - 'like' | 'love' | 'haha' | 'wow' | 'sad' | 'angry'
   * @param event Dom event which triggered this function
   */
  handleReaction: PropTypes.func,

  /** If actions such as edit, delete, flag, mute are enabled on message */
  actionsEnabled: PropTypes.bool,

  /** DOMRect object for parent MessageList component */
  messageListRect: PropTypes.object,

  /**
   * Handler for actions. Actions in combination with attachments can be used to build [commands](https://getstream.io/chat/docs/#channel_commands).
   *
   * @param name {string} Name of action
   * @param value {string} Value of action
   * @param event Dom event that triggered this handler
   */
  handleAction: PropTypes.func,

  /**
   * The handler for hover event on @mention in message
   *
   * @param event Dom hover event which triggered handler.
   * @param user Target user object
   */
  onMentionsHoverMessage: PropTypes.func,

  /**
   * The handler for click event on @mention in message
   *
   * @param event Dom click event which triggered handler.
   * @param user Target user object
   */
  onMentionsClickMessage: PropTypes.func,

  /**
   * Additional props for underlying MessageInput component.
   * Available props - https://getstream.github.io/stream-chat-react/#messageinput
   * */
  additionalMessageInputProps: PropTypes.object
});

_defineProperty(MessageSimple, "defaultProps", {
  Attachment: Attachment,
  Avatar: Avatar
});

MessageSimple = withTranslationContext(MessageSimple);

function ownKeys$5(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$5(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$5(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$5(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper$r(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$r(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$r() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
/**
 * Channel - Wrapper component for a channel. It needs to be place inside of the Chat component.
 * ChannelHeader, MessageList, Thread and MessageInput should be used as children of the Channel component.
 *
 * @example ./docs/Channel.md
 * @extends PureComponent
 */

var Channel = /*#__PURE__*/function (_PureComponent) {
  _inherits(Channel, _PureComponent);

  var _super = _createSuper$r(Channel);

  function Channel(props) {
    var _this;

    _classCallCheck(this, Channel);

    _this = _super.call(this, props);
    _this.state = {
      error: false
    };
    return _this;
  }

  _createClass(Channel, [{
    key: "render",
    value: function render() {
      if (!this.props.channel || !this.props.channel.cid) {
        return this.props.EmptyPlaceholder;
      } // We use a wrapper to make sure the key variable is set.
      // this ensures that if you switch channel the component is recreated


      return /*#__PURE__*/React__default.createElement(ChannelInner, _extends({}, this.props, {
        key: this.props.channel.cid
      }));
    }
  }]);

  return Channel;
}(PureComponent);

_defineProperty(Channel, "propTypes", {
  /** Which channel to connect to, will initialize the channel if it's not initialized yet */
  channel: PropTypes.shape({
    watch: PropTypes.func
  }),

  /** Client is passed automatically via the Chat Context */
  client: PropTypes.object.isRequired,

  /**
   * Empty channel UI component. This will be shown on the screen if there is no active channel.
   *
   * Defaults to null which skips rendering the Channel
   *
   * */
  EmptyPlaceholder: PropTypes.node,

  /**
   * Error indicator UI component. This will be shown on the screen if channel query fails.
   *
   * Defaults to and accepts same props as: [LoadingErrorIndicator](https://getstream.github.io/stream-chat-react/#loadingerrorindicator)
   *
   * */
  LoadingErrorIndicator: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),

  /**
   * Loading indicator UI component. This will be shown on the screen until the messages are
   * being queried from channelœ. Once the messages are loaded, loading indicator is removed from the screen
   * and replaced with children of the Channel component.
   *
   * Defaults to and accepts same props as: [LoadingIndicator](https://github.com/GetStream/stream-chat-react/blob/master/src/components/LoadingIndicator.js)
   */
  LoadingIndicator: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),

  /**
   * Message UI component to display a message in message list.
   *
   * Available built-in components (also accepts the same props as):
   *
   * 1. [MessageSimple](https://github.com/GetStream/stream-chat-react/blob/master/src/components/MessageSimple.js) (default)
   * 2. [MessageTeam](https://github.com/GetStream/stream-chat-react/blob/master/src/components/MessageTeam.js)
   * 3. [MessageLivestream](https://github.com/GetStream/stream-chat-react/blob/master/src/components/MessageLivestream.js)
   * 3. [MessageCommerce](https://github.com/GetStream/stream-chat-react/blob/master/src/components/MessageCommerce.js)
   *
   * */
  Message: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),

  /**
   * Attachment UI component to display attachment in individual message.
   *
   * Defaults to and accepts same props as: [Attachment](https://github.com/GetStream/stream-chat-react/blob/master/src/components/Attachment.js)
   * */
  Attachment: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),

  /**
   * Handle for click on @mention in message
   *
   * @param {Event} event DOM Click event
   * @param {User} user   Target [user object](https://getstream.io/chat/docs/#chat-doc-set-user) which is clicked
   */
  onMentionsClick: PropTypes.func,

  /**
   * Handle for hover on @mention in message
   *
   * @param {Event} event DOM hover event
   * @param {User} user   Target [user object](https://getstream.io/chat/docs/#chat-doc-set-user) which is hovered
   */
  onMentionsHover: PropTypes.func,

  /** Weather to allow multiple attachment uploads */
  multipleUploads: PropTypes.bool,

  /** List of accepted file types */
  acceptedFiles: PropTypes.array,

  /** Maximum number of attachments allowed per message */
  maxNumberOfFiles: PropTypes.number,

  /** Override send message request (Advanced usage only)
   *
   * @param {String} channelId full channel ID in format of `type:id`
   * @param {Object} message
   */
  doSendMessageRequest: PropTypes.func,

  /** Override update(edit) message request (Advanced usage only)
   *
   * @param {String} channelId full channel ID in format of `type:id`
   * @param {Object} updatedMessage
   */
  doUpdateMessageRequest: PropTypes.func
});

_defineProperty(Channel, "defaultProps", {
  EmptyPlaceholder: null,
  LoadingIndicator: LoadingIndicator,
  LoadingErrorIndicator: LoadingErrorIndicator,
  Message: MessageSimple,
  Attachment: Attachment
});

var ChannelInner = /*#__PURE__*/function (_PureComponent2) {
  _inherits(ChannelInner, _PureComponent2);

  var _super2 = _createSuper$r(ChannelInner);

  function ChannelInner(props) {
    var _this2;

    _classCallCheck(this, ChannelInner);

    _this2 = _super2.call(this, props);

    _defineProperty(_assertThisInitialized(_this2), "openThread", function (message, e) {
      if (e && e.preventDefault) {
        e.preventDefault();
      }

      var channel = _this2.props.channel;
      var threadMessages = channel.state.threads[message.id] || [];

      _this2.setState({
        thread: message,
        threadMessages: threadMessages
      });
    });

    _defineProperty(_assertThisInitialized(_this2), "loadMoreThread", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
      var channel, parentID, oldMessages, oldestMessageID, limit, queryResponse, hasMore, threadMessages;
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!_this2.state.threadLoadingMore) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return");

            case 2:
              _this2.setState({
                threadLoadingMore: true
              });

              channel = _this2.props.channel;
              parentID = _this2.state.thread.id;
              oldMessages = channel.state.threads[parentID] || [];
              oldestMessageID = oldMessages[0] ? oldMessages[0].id : null;
              limit = 50;
              _context.next = 10;
              return channel.getReplies(parentID, {
                limit: limit,
                id_lt: oldestMessageID
              });

            case 10:
              queryResponse = _context.sent;
              hasMore = queryResponse.messages.length === limit;
              threadMessages = channel.state.threads[parentID] || []; // next set loadingMore to false so we can start asking for more data...

              _this2._loadMoreThreadFinishedDebounced(hasMore, threadMessages);

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    _defineProperty(_assertThisInitialized(_this2), "loadMoreThreadFinished", function (threadHasMore, threadMessages) {
      _this2.setState({
        threadLoadingMore: false,
        threadHasMore: threadHasMore,
        threadMessages: threadMessages
      });
    });

    _defineProperty(_assertThisInitialized(_this2), "closeThread", function (e) {
      if (e && e.preventDefault) {
        e.preventDefault();
      }

      _this2.setState({
        thread: null,
        threadMessages: []
      });
    });

    _defineProperty(_assertThisInitialized(_this2), "updateMessage", function (updatedMessage, extraState) {
      var channel = _this2.props.channel;
      extraState = extraState || {}; // adds the message to the local channel state..
      // this adds to both the main channel state as well as any reply threads

      channel.state.addMessageSorted(updatedMessage); // update the Channel component state

      if (_this2.state.thread && updatedMessage.parent_id) {
        extraState.threadMessages = channel.state.threads[updatedMessage.parent_id] || [];
      }

      _this2.setState(_objectSpread$5({
        messages: channel.state.messages
      }, extraState));
    });

    _defineProperty(_assertThisInitialized(_this2), "removeMessage", function (message) {
      var channel = _this2.props.channel;
      channel.state.removeMessage(message);
      var threadMessages = channel.state.threads[message.parent_id] || [];

      _this2.setState({
        messages: channel.state.messages,
        threads: channel.state.threads,
        threadMessages: threadMessages
      });
    });

    _defineProperty(_assertThisInitialized(_this2), "createMessagePreview", function (text, attachments, parent, mentioned_users) {
      // create a preview of the message
      var clientSideID = "".concat(_this2.props.client.userID, "-") + uuidv4();
      var message = {
        text: text,
        html: text,
        __html: text,
        //id: tmpID,
        id: clientSideID,
        type: 'regular',
        status: 'sending',
        user: _objectSpread$5({
          id: _this2.props.client.userID
        }, _this2.props.client.user),
        created_at: new Date(),
        attachments: attachments,
        mentioned_users: mentioned_users,
        reactions: []
      };

      if (parent && parent.id) {
        message.parent_id = parent.id;
      }

      return message;
    });

    _defineProperty(_assertThisInitialized(_this2), "editMessage", function (updatedMessage) {
      if (_this2.props.doUpdateMessageRequest) {
        return Promise.resolve(_this2.props.doUpdateMessageRequest(_this2.props.channel.cid, updatedMessage));
      }

      return _this2.props.client.updateMessage(updatedMessage);
    });

    _defineProperty(_assertThisInitialized(_this2), "_sendMessage", /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(message) {
        var text, attachments, id, parent_id, mentioned_users, messageData, messageResponse;
        return _regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                text = message.text, attachments = message.attachments, id = message.id, parent_id = message.parent_id, mentioned_users = message.mentioned_users;
                messageData = {
                  text: text,
                  attachments: attachments,
                  mentioned_users: mentioned_users,
                  id: id,
                  parent_id: parent_id
                };
                _context2.prev = 2;

                if (!_this2.props.doSendMessageRequest) {
                  _context2.next = 9;
                  break;
                }

                _context2.next = 6;
                return _this2.props.doSendMessageRequest(_this2.props.channel.cid, messageData);

              case 6:
                messageResponse = _context2.sent;
                _context2.next = 12;
                break;

              case 9:
                _context2.next = 11;
                return _this2.props.channel.sendMessage(messageData);

              case 11:
                messageResponse = _context2.sent;

              case 12:
                // replace it after send is completed
                if (messageResponse.message) {
                  messageResponse.message.status = 'received';

                  _this2.updateMessage(messageResponse.message);
                }

                _context2.next = 19;
                break;

              case 15:
                _context2.prev = 15;
                _context2.t0 = _context2["catch"](2);
                // set the message to failed..
                message.status = 'failed';

                _this2.updateMessage(message);

              case 19:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[2, 15]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this2), "sendMessage", /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3(_ref3) {
        var text, _ref3$attachments, attachments, _ref3$mentioned_users, mentioned_users, parent, messagePreview;

        return _regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                text = _ref3.text, _ref3$attachments = _ref3.attachments, attachments = _ref3$attachments === void 0 ? [] : _ref3$attachments, _ref3$mentioned_users = _ref3.mentioned_users, mentioned_users = _ref3$mentioned_users === void 0 ? [] : _ref3$mentioned_users, parent = _ref3.parent;

                // remove error messages upon submit
                _this2.props.channel.state.filterErrorMessages(); // create a local preview message to show in the UI


                messagePreview = _this2.createMessagePreview(text, attachments, parent, mentioned_users); // first we add the message to the UI

                _this2.updateMessage(messagePreview, {
                  messageInput: '',
                  commands: [],
                  userAutocomplete: []
                });

                _context3.next = 6;
                return _this2._sendMessage(messagePreview);

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x2) {
        return _ref4.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this2), "retrySendMessage", /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee4(message) {
        return _regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                // set the message status to sending
                message = message.asMutable();
                message.status = 'sending';

                _this2.updateMessage(message); // actually try to send the message...


                _context4.next = 5;
                return _this2._sendMessage(message);

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      return function (_x3) {
        return _ref5.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this2), "handleEvent", function (e) {
      var channel = _this2.props.channel;
      var threadMessages = [];
      var threadState = {};

      if (_this2.state.thread) {
        threadMessages = channel.state.threads[_this2.state.thread.id] || [];
        threadState['threadMessages'] = threadMessages;
      }

      if (_this2.state.thread && e.message && e.message.id === _this2.state.thread.id) {
        threadState['thread'] = channel.state.messageToImmutable(e.message);
      }

      if (Object.keys(threadState).length > 0) {
        // TODO: in theory we should do 1 setState call not 2,
        // However the setStateThrottled doesn't support this
        _this2.setState(threadState);
      }

      if (e.type === 'message.new') {
        var mainChannelUpdated = true;

        if (e.message.parent_id && !e.message.show_in_channel) {
          mainChannelUpdated = false;
        }

        if (mainChannelUpdated && e.message.user.id !== _this2.props.client.userID) {
          if (Visibility.state() === 'visible') {
            _this2._markReadThrottled(channel);
          } else {
            var unread = channel.countUnread(_this2.lastRead);
            document.title = "(".concat(unread, ") ").concat(_this2.originalTitle);
          }
        }
      }

      if (e.type === 'member.added') {
        _this2.addToEventHistory(e);
      }

      if (e.type === 'member.removed') {
        _this2.addToEventHistory(e);
      }

      _this2._setStateThrottled({
        messages: channel.state.messages,
        watchers: channel.state.watchers,
        read: channel.state.read,
        typing: channel.state.typing,
        watcher_count: channel.state.watcher_count
      });
    });

    _defineProperty(_assertThisInitialized(_this2), "addToEventHistory", function (e) {
      _this2.setState(function (prevState) {
        if (!prevState.message || !prevState.message.length) {
          return;
        }

        var lastMessageId = prevState.messages[prevState.messages.length - 1].id;
        if (!prevState.eventHistory[lastMessageId]) return _objectSpread$5(_objectSpread$5({}, prevState), {}, {
          eventHistory: _objectSpread$5(_objectSpread$5({}, prevState.eventHistory), {}, _defineProperty({}, lastMessageId, [e]))
        });
        return _objectSpread$5(_objectSpread$5({}, prevState), {}, {
          eventHistory: _objectSpread$5(_objectSpread$5({}, prevState.eventHistory), {}, _defineProperty({}, lastMessageId, [].concat(_toConsumableArray(prevState.eventHistory[lastMessageId]), [e])))
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this2), "markRead", function (channel) {
      if (_this2.props.channel.disconnected || !channel.getConfig().read_events) {
        return;
      }

      _this2.lastRead = new Date();
      logChatPromiseExecution(channel.markRead(), 'mark read');

      if (_this2.originalTitle) {
        document.title = _this2.originalTitle;
      }
    });

    _defineProperty(_assertThisInitialized(_this2), "loadMore", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee5() {
      var limit,
          oldestMessage,
          oldestID,
          perPage,
          queryResponse,
          hasMore,
          _args5 = arguments;
      return _regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              limit = _args5.length > 0 && _args5[0] !== undefined ? _args5[0] : 100;

              if (!_this2.state.loadingMore) {
                _context5.next = 3;
                break;
              }

              return _context5.abrupt("return");

            case 3:
              _this2.setState({
                loadingMore: true
              });

              oldestMessage = _this2.state.messages[0];

              if (!(oldestMessage && oldestMessage.status !== 'received')) {
                _context5.next = 8;
                break;
              }

              _this2.setState({
                loadingMore: false
              });

              return _context5.abrupt("return");

            case 8:
              oldestID = oldestMessage ? oldestMessage.id : null;
              perPage = limit;
              _context5.prev = 10;
              _context5.next = 13;
              return _this2.props.channel.query({
                messages: {
                  limit: perPage,
                  id_lt: oldestID
                }
              });

            case 13:
              queryResponse = _context5.sent;
              _context5.next = 21;
              break;

            case 16:
              _context5.prev = 16;
              _context5.t0 = _context5["catch"](10);
              console.warn('message pagination request failed with error', _context5.t0);

              _this2.setState({
                loadingMore: false
              });

              return _context5.abrupt("return");

            case 21:
              hasMore = queryResponse.messages.length === perPage;

              _this2._loadMoreFinishedDebounced(hasMore, _this2.props.channel.state.messages);

            case 23:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[10, 16]]);
    })));

    _defineProperty(_assertThisInitialized(_this2), "_onMentionsHoverOrClick", function (e, mentioned_users) {
      if (!_this2.props.onMentionsHover && !_this2.props.onMentionsClick) return;
      var tagName = e.target.tagName.toLowerCase();
      var textContent = e.target.innerHTML.replace('*', '');

      if (tagName === 'strong' && textContent[0] === '@') {
        var userName = textContent.replace('@', '');
        var user = mentioned_users.find(function (user) {
          return user.name === userName || user.id === userName;
        });

        if (_this2.props.onMentionsHover && typeof _this2.props.onMentionsHover === 'function' && e.type === 'mouseover') {
          _this2.props.onMentionsHover(e, user);
        }

        if (_this2.props.onMentionsClick && e.type === 'click' && typeof _this2.props.onMentionsClick === 'function') {
          _this2.props.onMentionsClick(e, user);
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this2), "loadMoreFinished", function (hasMore, messages) {
      _this2.setState({
        loadingMore: false,
        hasMore: hasMore,
        messages: messages
      });
    });

    _defineProperty(_assertThisInitialized(_this2), "getContext", function () {
      return _objectSpread$5(_objectSpread$5({}, _this2.state), {}, {
        client: _this2.props.client,
        channel: _this2.props.channel,
        Message: _this2.props.Message,
        Attachment: _this2.props.Attachment,
        multipleUploads: _this2.props.multipleUploads,
        acceptedFiles: _this2.props.acceptedFiles,
        maxNumberOfFiles: _this2.props.maxNumberOfFiles,
        updateMessage: _this2.updateMessage,
        removeMessage: _this2.removeMessage,
        sendMessage: _this2.sendMessage,
        editMessage: _this2.editMessage,
        retrySendMessage: _this2.retrySendMessage,
        loadMore: _this2.loadMore,
        // thread related
        openThread: _this2.openThread,
        closeThread: _this2.closeThread,
        loadMoreThread: _this2.loadMoreThread,
        onMentionsClick: _this2._onMentionsHoverOrClick,
        onMentionsHover: _this2._onMentionsHoverOrClick
      });
    });

    _defineProperty(_assertThisInitialized(_this2), "renderComponent", function () {
      return _this2.props.children;
    });

    _this2.state = {
      error: false,
      // Loading the initial content of the channel
      loading: true,
      // Loading more messages
      loadingMore: false,
      hasMore: true,
      messages: Immutable([]),
      online: true,
      typing: Immutable({}),
      watchers: Immutable({}),
      members: Immutable({}),
      read: Immutable({}),
      eventHistory: {},
      thread: false,
      threadMessages: [],
      threadLoadingMore: false,
      threadHasMore: true
    }; // hard limit to prevent you from scrolling faster than 1 page per 2 seconds

    _this2._loadMoreFinishedDebounced = debounce(_this2.loadMoreFinished, 2000, {
      leading: true,
      trailing: true
    }); // hard limit to prevent you from scrolling faster than 1 page per 2 seconds

    _this2._loadMoreThreadFinishedDebounced = debounce(_this2.loadMoreThreadFinished, 2000, {
      leading: true,
      trailing: true
    });
    _this2._markReadThrottled = throttle(_this2.markRead, 500, {
      leading: true,
      trailing: true
    });
    _this2._setStateThrottled = throttle(_this2.setState, 500, {
      leading: true,
      trailing: true
    });
    return _this2;
  }

  _createClass(ChannelInner, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee6() {
        var channel, errored;
        return _regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                channel = this.props.channel;
                errored = false;

                if (channel.initialized) {
                  _context6.next = 12;
                  break;
                }

                _context6.prev = 3;
                _context6.next = 6;
                return channel.watch();

              case 6:
                _context6.next = 12;
                break;

              case 8:
                _context6.prev = 8;
                _context6.t0 = _context6["catch"](3);
                this.setState({
                  error: _context6.t0
                });
                errored = true;

              case 12:
                this.originalTitle = document.title;
                this.lastRead = new Date();

                if (!errored) {
                  this.copyChannelState();
                  this.listenToChanges();
                }

              case 15:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this, [[3, 8]]);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      // If there is an active thread, then in that case we should sync
      // it with updated state of channel.
      if (this.state.thread) {
        for (var i = this.state.messages.length - 1; i >= 0; i--) {
          if (this.state.messages[i].id === this.state.thread.id) {
            this.setState({
              thread: this.state.messages[i]
            });
            break;
          }
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.props.client.off('connection.recovered', this.handleEvent);
      this.props.channel.off(this.handleEvent);

      this._loadMoreFinishedDebounced.cancel();

      this._loadMoreThreadFinishedDebounced.cancel();

      if (this.visibilityListener || this.visibilityListener === 0) {
        Visibility.unbind(this.visibilityListener);
      }
    }
  }, {
    key: "copyChannelState",
    value: function copyChannelState() {
      var channel = this.props.channel;
      this.setState({
        messages: channel.state.messages,
        read: channel.state.read,
        watchers: channel.state.watchers,
        members: channel.state.members,
        watcher_count: channel.state.watcher_count,
        loading: false,
        typing: Immutable({})
      });
      if (channel.countUnread() > 0) channel.markRead();
    }
  }, {
    key: "removeEphemeralMessages",
    value: function removeEphemeralMessages() {
      var c = this.props.channel;
      c.state.selectRegularMessages();
      this.setState({
        messages: c.state.messages
      });
    }
  }, {
    key: "listenToChanges",
    value: function listenToChanges() {
      var _this3 = this;

      // The more complex sync logic is done in chat.js
      // listen to client.connection.recovered and all channel events
      this.props.client.on('connection.recovered', this.handleEvent);
      var channel = this.props.channel;
      channel.on(this.handleEvent);
      this.boundMarkRead = this.markRead.bind(this, channel);
      this.visibilityListener = Visibility.change(function (e, state) {
        if (state === 'visible') {
          _this3.boundMarkRead();
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var t = this.props.t;
      var core;
      var LoadingIndicator = this.props.LoadingIndicator;
      var LoadingErrorIndicator = this.props.LoadingErrorIndicator;

      if (this.state.error) {
        core = /*#__PURE__*/React__default.createElement(LoadingErrorIndicator, {
          error: this.state.error
        });
      } else if (this.state.loading) {
        core = /*#__PURE__*/React__default.createElement(LoadingIndicator, {
          size: 25,
          isLoading: true
        });
      } else if (!this.props.channel || !this.props.channel.watch) {
        core = /*#__PURE__*/React__default.createElement("div", null, t('Channel Missing'));
      } else {
        core = /*#__PURE__*/React__default.createElement(ChannelContext.Provider, {
          value: this.getContext()
        }, /*#__PURE__*/React__default.createElement("div", {
          className: "str-chat__container"
        }, this.renderComponent()));
      }

      return /*#__PURE__*/React__default.createElement("div", {
        className: "str-chat str-chat-channel ".concat(this.props.theme)
      }, core);
    }
  }]);

  return ChannelInner;
}(PureComponent);

_defineProperty(ChannelInner, "propTypes", {
  /** Which channel to connect to */
  channel: PropTypes.shape({
    watch: PropTypes.func
  }).isRequired,

  /** Client is passed via the Chat Context */
  client: PropTypes.object.isRequired,

  /** The loading indicator to use */
  LoadingIndicator: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  LoadingErrorIndicator: PropTypes.oneOfType([PropTypes.node, PropTypes.func])
});

Channel = withChatContext(withTranslationContext(Channel));

function _createSuper$s(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$s(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$s() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
/**
 * ChannelHeader - Render some basic information about this channel
 *
 * @example ./docs/ChannelHeader.md
 * @extends PureComponent
 */

var ChannelHeader = /*#__PURE__*/function (_PureComponent) {
  _inherits(ChannelHeader, _PureComponent);

  var _super = _createSuper$s(ChannelHeader);

  function ChannelHeader() {
    _classCallCheck(this, ChannelHeader);

    return _super.apply(this, arguments);
  }

  _createClass(ChannelHeader, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          t = _this$props.t,
          channel = _this$props.channel,
          title = _this$props.title,
          live = _this$props.live,
          watcher_count = _this$props.watcher_count,
          _this$props$MemberLis = _this$props.MemberList,
          MemberList = _this$props$MemberLis === void 0 ? function (_ref) {
        var children = _ref.children;
        return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, children);
      } : _this$props$MemberLis;
      return /*#__PURE__*/React__default.createElement("div", {
        className: "str-chat__header-livestream"
      }, /*#__PURE__*/React__default.createElement("div", {
        className: "str-chat__header-hamburger",
        onClick: this.props.openMobileNav
      }, /*#__PURE__*/React__default.createElement("span", {
        className: "str-chat__header-hamburger--line"
      }), /*#__PURE__*/React__default.createElement("span", {
        className: "str-chat__header-hamburger--line"
      }), /*#__PURE__*/React__default.createElement("span", {
        className: "str-chat__header-hamburger--line"
      })), channel.data.image && /*#__PURE__*/React__default.createElement(Avatar, {
        image: channel.data.image,
        shape: "rounded",
        size: channel.type === 'commerce' ? 60 : 40
      }), /*#__PURE__*/React__default.createElement("div", {
        className: "str-chat__header-livestream-left"
      }, /*#__PURE__*/React__default.createElement("p", {
        className: "str-chat__header-livestream-left--title"
      }, title || channel.data.name, ' ', live && /*#__PURE__*/React__default.createElement("span", {
        className: "str-chat__header-livestream-left--livelabel"
      }, t('live'))), channel.data.subtitle && /*#__PURE__*/React__default.createElement("p", {
        className: "str-chat__header-livestream-left--subtitle"
      }, channel.data.subtitle), /*#__PURE__*/React__default.createElement("p", {
        className: "str-chat__header-livestream-left--members"
      }, /*#__PURE__*/React__default.createElement(MemberList, null, !live && channel.data.member_count > 0 && /*#__PURE__*/React__default.createElement(React__default.Fragment, null, t('{{ memberCount }} members', {
        memberCount: channel.data.member_count
      }), ",", ' '), t('{{ watcherCount }} online', {
        watcherCount: watcher_count
      })))));
    }
  }]);

  return ChannelHeader;
}(PureComponent);

_defineProperty(ChannelHeader, "propTypes", {
  /** Set title manually */
  title: PropTypes.string,

  /** Show a little indicator that the channel is live right now */
  live: PropTypes.bool,

  /** **Available from [channel context](https://getstream.github.io/stream-chat-react/#chat)** */
  channel: PropTypes.object.isRequired,

  /** **Available from [channel context](https://getstream.github.io/stream-chat-react/#chat)** */
  watcher_count: PropTypes.number
});

ChannelHeader = withChatContext(ChannelHeader);
ChannelHeader = withChannelContext(withTranslationContext(ChannelHeader));

function _createSuper$t(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$t(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$t() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
/**
 * Used as preview component for channel item in [ChannelList](#channellist) component.
 *
 * @example ./docs/ChannelPreviewLastMessage.md
 * @extends PureComponent
 */

var ChannelPreviewLastMessage = /*#__PURE__*/function (_PureComponent) {
  _inherits(ChannelPreviewLastMessage, _PureComponent);

  var _super = _createSuper$t(ChannelPreviewLastMessage);

  function ChannelPreviewLastMessage() {
    var _this;

    _classCallCheck(this, ChannelPreviewLastMessage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "channelPreviewButton", React__default.createRef());

    _defineProperty(_assertThisInitialized(_this), "onSelectChannel", function () {
      _this.props.setActiveChannel(_this.props.channel, _this.props.watchers);

      _this.channelPreviewButton.current.blur();
    });

    return _this;
  }

  _createClass(ChannelPreviewLastMessage, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          t = _this$props.t,
          displayTitle = _this$props.displayTitle,
          displayImage = _this$props.displayImage,
          channel = _this$props.channel;
      var unreadClass = this.props.unread >= 1 ? 'str-chat__channel-preview--unread' : '';
      var activeClass = this.props.active ? 'str-chat__channel-preview--active' : '';
      var isDm = channel.data.member_count === 2;
      var lastUpdatedAt = moment(channel.data.last_message_at);
      return /*#__PURE__*/React__default.createElement("div", {
        className: "str-chat__channel-preview ".concat(unreadClass, " ").concat(activeClass, " ").concat(isDm ? 'str-chat__channel-preview--dm' : 'str-chat__channel-preview--group')
      }, /*#__PURE__*/React__default.createElement("button", {
        onClick: this.onSelectChannel,
        ref: this.channelPreviewButton
      }, this.props.unread >= 1 && /*#__PURE__*/React__default.createElement("div", {
        className: "str-chat__channel-preview--dot"
      }), /*#__PURE__*/React__default.createElement("div", {
        className: "str-chat--channel-summary"
      }, isDm && /*#__PURE__*/React__default.createElement(Avatar, {
        image: displayImage
      }), /*#__PURE__*/React__default.createElement("div", {
        className: "str-chat__channel-preview-info"
      }, /*#__PURE__*/React__default.createElement("span", {
        className: "str-chat__channel-preview-title"
      }, displayTitle), /*#__PURE__*/React__default.createElement("span", {
        className: "str-chat__channel-preview-last-message"
      }, !this.props.channel.state.messages[0] ? t('Nothing yet...') : truncate(this.props.latestMessage, {
        length: this.props.latestMessageLength
      })), this.props.unread >= 1 && /*#__PURE__*/React__default.createElement("span", {
        className: "str-chat__channel-preview-unread-count"
      }, this.props.unread))), !isDm && /*#__PURE__*/React__default.createElement("div", {
        className: "str-chat--channel-status"
      }, /*#__PURE__*/React__default.createElement("span", null, channel.data.member_count, " members")), /*#__PURE__*/React__default.createElement("div", {
        className: "str-chat--channel-last-update"
      }, moment().diff(lastUpdatedAt, 'days') > 0 ? lastUpdatedAt.format('M/D/YY') : lastUpdatedAt.fromNow())));
    }
  }]);

  return ChannelPreviewLastMessage;
}(PureComponent);

_defineProperty(ChannelPreviewLastMessage, "propTypes", {
  /** **Available from [chat context](https://getstream.github.io/stream-chat-react/#chat)** */
  channel: PropTypes.object.isRequired,

  /** Current selected channel object */
  activeChannel: PropTypes.object,

  /** Setter for selected channel */
  setActiveChannel: PropTypes.func.isRequired,

  /**
   * Object containing watcher parameters
   * @see See [Pagination documentation](https://getstream.io/chat/docs/#channel_pagination) for a list of available fields for sort.
   * */
  watchers: PropTypes.object,

  /** Number of unread messages */
  unread: PropTypes.number,

  /** If channel of component is active (selected) channel */
  active: PropTypes.bool,

  /** Latest message's text. */
  latestMessage: PropTypes.string,

  /** Length of latest message to truncate at */
  latestMessageLength: PropTypes.number,

  /** Title of channel to display */
  displayTitle: PropTypes.string,

  /** Image of channel to display */
  displayImage: PropTypes.string
});

_defineProperty(ChannelPreviewLastMessage, "defaultProps", {
  latestMessageLength: 20
});

ChannelPreviewLastMessage = withTranslationContext(ChannelPreviewLastMessage);

function _createSuper$u(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$u(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$u() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var ChannelPreviewCountOnly = /*#__PURE__*/function (_PureComponent) {
  _inherits(ChannelPreviewCountOnly, _PureComponent);

  var _super = _createSuper$u(ChannelPreviewCountOnly);

  function ChannelPreviewCountOnly() {
    _classCallCheck(this, ChannelPreviewCountOnly);

    return _super.apply(this, arguments);
  }

  _createClass(ChannelPreviewCountOnly, [{
    key: "render",
    value: function render() {
      var displayTitle = this.props.displayTitle;
      var unreadClass = this.props.unread >= 1 ? 'unread' : '';
      return /*#__PURE__*/React__default.createElement("div", {
        className: unreadClass
      }, /*#__PURE__*/React__default.createElement("button", {
        onClick: this.props.setActiveChannel.bind(this, this.props.channel)
      }, ' ', displayTitle, " ", /*#__PURE__*/React__default.createElement("span", null, this.props.unread)));
    }
  }]);

  return ChannelPreviewCountOnly;
}(PureComponent);

_defineProperty(ChannelPreviewCountOnly, "propTypes", {
  /** **Available from [chat context](https://getstream.github.io/stream-chat-react/#chat)** */
  channel: PropTypes.object.isRequired,

  /** Current selected channel object */
  activeChannel: PropTypes.object,

  /** @see See [chat context](https://getstream.github.io/stream-chat-react/#chat) for doc */
  setActiveChannel: PropTypes.func.isRequired,

  /**
   * Object containing watcher parameters
   * @see See [Pagination documentation](https://getstream.io/chat/docs/#channel_pagination) for a list of available fields for sort.
   * */
  watchers: PropTypes.object,

  /** Number of unread messages */
  unread: PropTypes.number,

  /** Title of channel to display */
  displayTitle: PropTypes.string,

  /** Image of channel to display */
  displayImage: PropTypes.string
});

function ownKeys$6(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$6(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$6(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$6(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper$v(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$v(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$v() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var ChannelPreview = /*#__PURE__*/function (_PureComponent) {
  _inherits(ChannelPreview, _PureComponent);

  var _super = _createSuper$v(ChannelPreview);

  function ChannelPreview(props) {
    var _this;

    _classCallCheck(this, ChannelPreview);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleEvent", function (event) {
      var channel = _this.props.channel;
      var isActive = _this.props.activeChannel && _this.props.activeChannel.cid === channel.cid;

      if (!isActive) {
        var unread = channel.countUnread(_this.state.lastRead);

        _this.setState({
          lastMessage: event.message,
          unread: unread
        });
      } else {
        _this.setState({
          lastMessage: event.message,
          unread: 0
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getLatestMessage", function () {
      var _this$props = _this.props,
          channel = _this$props.channel,
          t = _this$props.t;
      var latestMessage = channel.state.messages[channel.state.messages.length - 1];

      if (!latestMessage) {
        return t('Nothing yet...');
      }

      if (latestMessage.deleted_at) {
        return t('Message deleted');
      }

      if (latestMessage.text) {
        return latestMessage.text;
      } else {
        if (latestMessage.command) {
          return '/' + latestMessage.command;
        }

        if (latestMessage.attachments.length) {
          return t('🏙 Attachment...');
        }

        return t('Empty message...');
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getDisplayTitle", function () {
      var _this$props2 = _this.props,
          channel = _this$props2.channel,
          client = _this$props2.client;
      var title = channel.data.name;
      var members = Object.values(channel.state.members);

      if (!title && members.length === 2) {
        var otherMember = members.find(function (m) {
          return m.user.id !== client.user.id;
        });
        title = otherMember.user.name;
      }

      return title;
    });

    _defineProperty(_assertThisInitialized(_this), "getDisplayImage", function () {
      var _this$props3 = _this.props,
          channel = _this$props3.channel,
          client = _this$props3.client;
      var image = channel.data.image;
      var members = Object.values(channel.state.members);

      if (!image && members.length === 2) {
        var otherMember = members.find(function (m) {
          return m.user.id !== client.user.id;
        });
        image = otherMember.user.image;
      }

      return image;
    });

    _this.state = {
      lastMessage: {},
      unread: 0,
      lastRead: new Date()
    };
    return _this;
  }

  _createClass(ChannelPreview, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // listen to change...
      var channel = this.props.channel;
      var unread = channel.countUnread();
      this.setState({
        unread: unread
      });
      channel.on('message.new', this.handleEvent);
      channel.on('message.updated', this.handleEvent);
      channel.on('message.deleted', this.handleEvent);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var channel = this.props.channel;
      channel.off('message.new', this.handleEvent);
      channel.off('message.updated', this.handleEvent);
      channel.off('message.deleted', this.handleEvent);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.activeChannel && prevProps.activeChannel && this.props.activeChannel.cid !== prevProps.activeChannel.cid) {
        var isActive = this.props.activeChannel.cid === this.props.channel.cid;

        if (isActive) {
          this.setState({
            unread: 0,
            lastRead: new Date()
          });
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var props = _objectSpread$6(_objectSpread$6({}, this.state), this.props);

      var Preview = this.props.Preview;
      return /*#__PURE__*/React__default.createElement(Preview, _extends({}, props, {
        latestMessage: this.getLatestMessage(),
        displayTitle: this.getDisplayTitle(),
        displayImage: this.getDisplayImage(),
        active: this.props.activeChannel && this.props.activeChannel.cid === this.props.channel.cid
      }));
    }
  }]);

  return ChannelPreview;
}(PureComponent);

_defineProperty(ChannelPreview, "propTypes", {
  /** **Available from [chat context](https://getstream.github.io/stream-chat-react/#chat)** */
  channel: PropTypes.object.isRequired,

  /** Current selected channel object */
  activeChannel: PropTypes.object,

  /** Setter for selected channel */
  setActiveChannel: PropTypes.func.isRequired,

  /**
   * Available built-in options (also accepts the same props as):
   *
   * 1. [ChannelPreviewCompact](https://getstream.github.io/stream-chat-react/#ChannelPreviewCompact) (default)
   * 2. [ChannelPreviewLastMessage](https://getstream.github.io/stream-chat-react/#ChannelPreviewLastMessage)
   * 3. [ChannelPreviewMessanger](https://getstream.github.io/stream-chat-react/#ChannelPreviewMessanger)
   *
   * The Preview to use, defaults to ChannelPreviewLastMessage
   * */
  Preview: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),

  /**
   * Object containing watcher parameters
   * @see See [Pagination documentation](https://getstream.io/chat/docs/#channel_pagination) for a list of available fields for sort.
   * */
  watchers: PropTypes.object
});

_defineProperty(ChannelPreview, "defaultProps", {
  Preview: ChannelPreviewCountOnly
});

ChannelPreview = withTranslationContext(withChatContext(ChannelPreview));

var EmptyStateIndicator = withTranslationContext(function (_ref) {
  var listType = _ref.listType;
  var Indicator;

  switch (listType) {
    case 'channel':
      // Indicator = <p>{t('You have no channels currently')}</p>;
      Indicator = null;
      break;

    case 'message':
      Indicator = null;
      break;

    default:
      Indicator = /*#__PURE__*/React__default.createElement("p", null, "No items exist");
      break;
  }

  return Indicator;
});
EmptyStateIndicator.propTypes = {
  /** channel | message */
  listType: PropTypes.string
};

/**
 * LoadingChannels - Fancy loading indicator for the channel list
 *
 * @example ./docs/LoadingChannels.md
 */

var LoadingChannels = function LoadingChannels() {
  return /*#__PURE__*/React__default.createElement("div", {
    className: "str-chat__loading-channels"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "str-chat__loading-channels-item"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "str-chat__loading-channels-avatar"
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "str-chat__loading-channels-meta"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "str-chat__loading-channels-username"
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "str-chat__loading-channels-status"
  }))), /*#__PURE__*/React__default.createElement("div", {
    className: "str-chat__loading-channels-item"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "str-chat__loading-channels-avatar"
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "str-chat__loading-channels-meta"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "str-chat__loading-channels-username"
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "str-chat__loading-channels-status"
  }))), /*#__PURE__*/React__default.createElement("div", {
    className: "str-chat__loading-channels-item"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "str-chat__loading-channels-avatar"
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "str-chat__loading-channels-meta"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "str-chat__loading-channels-username"
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "str-chat__loading-channels-status"
  }))));
};

function _createSuper$w(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$w(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$w() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var LoadMoreButton = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(LoadMoreButton, _React$PureComponent);

  var _super = _createSuper$w(LoadMoreButton);

  function LoadMoreButton() {
    _classCallCheck(this, LoadMoreButton);

    return _super.apply(this, arguments);
  }

  _createClass(LoadMoreButton, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React__default.createElement("div", {
        className: "str-chat__load-more-button"
      }, /*#__PURE__*/React__default.createElement("button", {
        className: "str-chat__load-more-button__button",
        onClick: this.props.onClick,
        disabled: this.props.refreshing
      }, this.props.refreshing ? /*#__PURE__*/React__default.createElement(LoadingIndicator$1, null) : this.props.children));
    }
  }]);

  return LoadMoreButton;
}(React__default.PureComponent);

_defineProperty(LoadMoreButton, "propTypes", {
  /** onClick handler load more button. Pagination logic should be executed in this handler. */
  onClick: PropTypes.func,

  /** If true, LoadingIndicator is displayed instead of button */
  refreshing: PropTypes.bool
});

_defineProperty(LoadMoreButton, "defaultProps", {
  children: 'Load more'
});

function _createSuper$x(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$x(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$x() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var LoadMorePaginator = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(LoadMorePaginator, _React$PureComponent);

  var _super = _createSuper$x(LoadMorePaginator);

  function LoadMorePaginator() {
    _classCallCheck(this, LoadMorePaginator);

    return _super.apply(this, arguments);
  }

  _createClass(LoadMorePaginator, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/createElement(Fragment, null, !this.props.reverse && this.props.children, this.props.hasNextPage ? smartRender(this.props.LoadMoreButton, {
        refreshing: this.props.refreshing,
        onClick: this.props.loadNextPage
      }) : null, this.props.reverse && this.props.children);
    }
  }]);

  return LoadMorePaginator;
}(PureComponent);

_defineProperty(LoadMorePaginator, "propTypes", {
  LoadMoreButton: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),

  /** callback to load the next page */
  loadNextPage: PropTypes.func,

  /** indicates if there is a next page to load */
  hasNextPage: PropTypes.bool,

  /** display the items in opposite order */
  reverse: PropTypes.bool
});

_defineProperty(LoadMorePaginator, "defaultProps", {
  LoadMoreButton: LoadMoreButton
});

var placeholder = "data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3Csvg%20width%3D%2278px%22%20height%3D%2278px%22%20viewBox%3D%220%200%2078%2078%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%20%20%20%20%20%20%20%20%3Ctitle%3ECombined%20Shape%3C%2Ftitle%3E%20%20%20%20%3Cdesc%3ECreated%20with%20Sketch.%3C%2Fdesc%3E%20%20%20%20%3Cg%20id%3D%22Interactions%22%20stroke%3D%22none%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%20%20%20%20%20%20%20%20%3Cg%20id%3D%22Connection-Error-_-Connectivity%22%20transform%3D%22translate%28-270.000000%2C%20-30.000000%29%22%20fill%3D%22%23CF1F25%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20id%3D%22109-network-connection%22%20transform%3D%22translate%28270.000000%2C%2030.000000%29%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M66.4609744%2C11.414231%20C81.6225232%2C26.5757798%2081.6225232%2C51.157545%2066.4609744%2C66.3188467%20C51.2994256%2C81.4803954%2026.7176604%2C81.4803954%2011.5563587%2C66.3188467%20C-3.60519004%2C51.1572979%20-3.60519004%2C26.5755327%2011.5563587%2C11.414231%20C26.7179075%2C-3.74731776%2051.2996727%2C-3.74731776%2066.4609744%2C11.414231%20Z%20M54.7853215%2C45.8823776%20L54.7853215%2C40.5882574%20C54.7853215%2C39.613638%2053.9952341%2C38.8235506%2053.0206147%2C38.8235506%20L44.9576695%2C38.8235506%20L41.428256%2C42.3529641%20L51.255555%2C42.3529641%20L51.255555%2C45.8823776%20L54.7853215%2C45.8823776%20Z%20M40.6659027%2C43.1153174%20L37.8988425%2C45.8823776%20L40.6659027%2C45.8823776%20L40.6659027%2C43.1153174%20Z%20M51.1764962%2C56.4702653%20L58.2353232%2C56.4702653%20C59.2099355%2C56.4702653%2060.00003%2C55.6801708%2060.00003%2C54.7055585%20L60.00003%2C51.176145%20C60.00003%2C50.2015327%2059.2099355%2C49.4114382%2058.2353232%2C49.4114382%20L51.1764962%2C49.4114382%20C50.2018839%2C49.4114382%2049.4117894%2C50.2015327%2049.4117894%2C51.176145%20L49.4117894%2C54.7055585%20C49.4117894%2C55.6801708%2050.2018839%2C56.4702653%2051.1764962%2C56.4702653%20Z%20M35.2941353%2C56.4702653%20L42.3529624%2C56.4702653%20C43.3275746%2C56.4702653%2044.1176691%2C55.6801708%2044.1176691%2C54.7055585%20L44.1176691%2C51.176145%20C44.1176691%2C50.2015327%2043.3275746%2C49.4114382%2042.3529624%2C49.4114382%20L35.2941353%2C49.4114382%20C34.319523%2C49.4114382%2033.5294285%2C50.2015327%2033.5294285%2C51.176145%20L33.5294285%2C54.7055585%20C33.5294285%2C55.6801708%2034.319523%2C56.4702653%2035.2941353%2C56.4702653%20Z%20M56.6964989%2C19.0874231%20C56.007381%2C18.3985134%2054.8903216%2C18.3985134%2054.2012036%2C19.087423%20L45.882376%2C27.4062507%20L45.882376%2C19.4117761%20C45.882376%2C18.4371568%2045.0922885%2C17.6470693%2044.1176692%2C17.6470693%20L33.5294286%2C17.6470693%20C32.5548092%2C17.6470694%2031.7647218%2C18.4371568%2031.7647218%2C19.4117761%20L31.7647218%2C30.0000167%20C31.7647219%2C30.9746363%2032.5548092%2C31.7647237%2033.5294285%2C31.7647237%20L41.5239031%2C31.7647237%20L34.4650761%2C38.8235508%20L24.7058947%2C38.8235508%20C23.7312753%2C38.8235508%2022.9411879%2C39.6136382%2022.9411879%2C40.5882575%20L22.9411879%2C45.8823778%20L26.4706014%2C45.8823778%20L26.4706014%2C42.3529643%20L30.9356624%2C42.3529643%20L23.8768354%2C49.4117914%20L19.4117743%2C49.4117914%20C18.4371549%2C49.4117914%2017.6470675%2C50.2018788%2017.6470675%2C51.1764981%20L17.6470675%2C54.7059117%20C17.6504049%2C54.9674302%2017.7129076%2C55.2248042%2017.8298886%2C55.4587302%20L16.4456526%2C56.8429662%20C15.7446193%2C57.5200453%2015.7252005%2C58.6372282%2016.4022825%2C59.3382615%20C17.0793616%2C60.0392948%2018.1965445%2C60.0587136%2018.8975778%2C59.3816316%20C18.9122847%2C59.3674273%2018.9267436%2C59.3529684%2018.940948%2C59.3382615%20L56.6964963%2C21.5830662%20C57.3856425%2C20.8939094%2057.3856425%2C19.7765747%2056.6964963%2C19.0874179%20Z%22%20id%3D%22Combined-Shape%22%3E%3C%2Fpath%3E%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%3C%2Fg%3E%3C%2Fsvg%3E";

function _createSuper$y(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$y(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$y() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
/**
 * ChatDown - Indicator that chat is down or your network isn't working
 *
 * @example ./docs/ChatDown.md
 * @extends PureComponent
 */

var ChatDown = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(ChatDown, _React$PureComponent);

  var _super = _createSuper$y(ChatDown);

  function ChatDown() {
    _classCallCheck(this, ChatDown);

    return _super.apply(this, arguments);
  }

  _createClass(ChatDown, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          image = _this$props.image,
          type = _this$props.type,
          text = _this$props.text,
          t = _this$props.t;
      return /*#__PURE__*/React__default.createElement("div", {
        className: "str-chat__down"
      }, /*#__PURE__*/React__default.createElement(LoadingChannels, null), /*#__PURE__*/React__default.createElement("div", {
        className: "str-chat__down-main"
      }, /*#__PURE__*/React__default.createElement("img", {
        src: image
      }), /*#__PURE__*/React__default.createElement("h1", null, type), /*#__PURE__*/React__default.createElement("h3", null, text || t('Error connecting to chat, refresh the page to try again.'))));
    }
  }]);

  return ChatDown;
}(React__default.PureComponent);

_defineProperty(ChatDown, "propTypes", {
  /** The image url for this error */
  image: PropTypes.string,

  /** The type of error */
  type: PropTypes.string,

  /** The error message to show */
  text: PropTypes.string
});

_defineProperty(ChatDown, "defaultProps", {
  image: placeholder,
  type: 'Error'
});

ChatDown = withTranslationContext(ChatDown);

var chevrondown = "data:image/svg+xml,%3Csvg%20width%3D%228%22%20height%3D%225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%3Cdefs%3E%3Cpath%20id%3D%22b%22%20d%3D%22M.667.667L4%204%207.333.667z%22%2F%3E%3Cfilter%20x%3D%22-7.5%25%22%20y%3D%22-15%25%22%20width%3D%22115%25%22%20height%3D%22160%25%22%20filterUnits%3D%22objectBoundingBox%22%20id%3D%22a%22%3E%3CfeOffset%20dy%3D%221%22%20in%3D%22SourceAlpha%22%20result%3D%22shadowOffsetOuter1%22%2F%3E%3CfeComposite%20in%3D%22shadowOffsetOuter1%22%20in2%3D%22SourceAlpha%22%20operator%3D%22out%22%20result%3D%22shadowOffsetOuter1%22%2F%3E%3CfeColorMatrix%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.685858243%200%22%20in%3D%22shadowOffsetOuter1%22%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cuse%20fill%3D%22%23000%22%20filter%3D%22url%28%23a%29%22%20xlink%3Ahref%3D%22%23b%22%2F%3E%3Cuse%20fill-opacity%3D%22.7%22%20fill%3D%22%23FFF%22%20xlink%3Ahref%3D%22%23b%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E";

function _createSuper$z(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$z(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$z() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
/**
 * ChannelList - A preview list of channels, allowing you to select the channel you want to open
 * @example ./examples/ChannelList.md
 */

var ChannelListTeam = /*#__PURE__*/function (_PureComponent) {
  _inherits(ChannelListTeam, _PureComponent);

  var _super = _createSuper$z(ChannelListTeam);

  function ChannelListTeam() {
    _classCallCheck(this, ChannelListTeam);

    return _super.apply(this, arguments);
  }

  _createClass(ChannelListTeam, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          showSidebar = _this$props.showSidebar,
          LoadingErrorIndicator = _this$props.LoadingErrorIndicator,
          LoadingIndicator = _this$props.LoadingIndicator;

      if (this.props.error) {
        return /*#__PURE__*/React__default.createElement(LoadingErrorIndicator, {
          type: "Connection Error"
        });
      } else if (this.props.loading) {
        return /*#__PURE__*/React__default.createElement(LoadingIndicator, null);
      } else {
        return /*#__PURE__*/React__default.createElement("div", {
          className: "str-chat__channel-list-team"
        }, showSidebar && /*#__PURE__*/React__default.createElement("div", {
          className: "str-chat__channel-list-team__sidebar"
        }, /*#__PURE__*/React__default.createElement("div", {
          className: "str-chat__channel-list-team__sidebar--top"
        }, /*#__PURE__*/React__default.createElement(Avatar, {
          image: this.props.sidebarImage,
          size: 50
        }))), /*#__PURE__*/React__default.createElement("div", {
          className: "str-chat__channel-list-team__main"
        }, /*#__PURE__*/React__default.createElement("div", {
          className: "str-chat__channel-list-team__header"
        }, /*#__PURE__*/React__default.createElement("div", {
          className: "str-chat__channel-list-team__header--left"
        }, /*#__PURE__*/React__default.createElement(Avatar, {
          source: this.props.client.user.image,
          name: this.props.client.user.name || this.props.client.user.id,
          size: 40
        })), /*#__PURE__*/React__default.createElement("div", {
          className: "str-chat__channel-list-team__header--middle"
        }, /*#__PURE__*/React__default.createElement("div", {
          className: "str-chat__channel-list-team__header--title"
        }, this.props.client.user.name || this.props.client.user.id), /*#__PURE__*/React__default.createElement("div", {
          className: "str-chat__channel-list-team__header--status ".concat(this.props.client.user.status)
        }, this.props.client.user.status)), /*#__PURE__*/React__default.createElement("div", {
          className: "str-chat__channel-list-team__header--right"
        }, /*#__PURE__*/React__default.createElement("button", {
          className: "str-chat__channel-list-team__header--button"
        }, /*#__PURE__*/React__default.createElement("img", {
          src: chevrondown
        })))), this.props.children));
      }
    }
  }]);

  return ChannelListTeam;
}(PureComponent);

_defineProperty(ChannelListTeam, "propTypes", {
  /** When true, loading indicator is shown - [LoadingChannels](https://github.com/GetStream/stream-chat-react/blob/master/src/components/LoadingChannels.js) */
  loading: PropTypes.bool,

  /** When true, error indicator is shown - [ChatDown](https://github.com/GetStream/stream-chat-react/blob/master/src/components/ChatDown.js) */
  error: PropTypes.bool,

  /** Stream chat client object */
  client: PropTypes.object,

  /** When true, sidebar containing logo of the team is visible */
  showSidebar: PropTypes.bool,

  /** Url for sidebar logo image. */
  sidebarImage: PropTypes.string,

  /**
   * Loading indicator UI Component. It will be displayed if `loading` prop is true.
   *
   * Defaults to and accepts same props as:
   * [LoadingChannels](https://github.com/GetStream/stream-chat-react/blob/master/src/components/LoadingChannels.js)
   *
   */
  LoadingIndicator: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),

  /**
   * Error indicator UI Component. It will be displayed if `error` prop is true
   *
   * Defaults to and accepts same props as:
   * [ChatDown](https://github.com/GetStream/stream-chat-react/blob/master/src/components/ChatDown.js)
   *
   */
  LoadingErrorIndicator: PropTypes.oneOfType([PropTypes.node, PropTypes.func])
});

_defineProperty(ChannelListTeam, "defaultProps", {
  error: false,
  LoadingIndicator: LoadingChannels,
  LoadingErrorIndicator: ChatDown
});

ChannelListTeam = withChatContext(ChannelListTeam);

function ownKeys$7(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$7(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$7(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$7(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper$A(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$A(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$A() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
/**
 * ChannelList - A preview list of channels, allowing you to select the channel you want to open
 * @extends PureComponent
 * @example ./docs/ChannelList.md
 */

var ChannelList = /*#__PURE__*/function (_PureComponent) {
  _inherits(ChannelList, _PureComponent);

  var _super = _createSuper$A(ChannelList);

  function ChannelList(_props) {
    var _this;

    _classCallCheck(this, ChannelList);

    _this = _super.call(this, _props);

    _defineProperty(_assertThisInitialized(_this), "queryChannels", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
      var _this$props, options, filters, sort, setActiveChannelOnMount, offset, newOptions, channelPromise, channelQueryResponse, customActiveChannel;

      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this$props = _this.props, options = _this$props.options, filters = _this$props.filters, sort = _this$props.sort, setActiveChannelOnMount = _this$props.setActiveChannelOnMount;
              offset = _this.state.offset;

              _this.setState({
                refreshing: true
              });

              newOptions = _objectSpread$7({}, options);
              if (!options.limit) newOptions.limit = 50;
              channelPromise = _this.props.client.queryChannels(filters, sort, _objectSpread$7(_objectSpread$7({}, newOptions), {}, {
                offset: offset
              }));
              _context.prev = 6;
              channelQueryResponse = channelPromise;

              if (!isPromise(channelQueryResponse)) {
                _context.next = 12;
                break;
              }

              _context.next = 11;
              return channelPromise;

            case 11:
              channelQueryResponse = _context.sent;

            case 12:
              _this.setState(function (prevState) {
                var channels = [].concat(_toConsumableArray(prevState.channels), _toConsumableArray(channelQueryResponse));
                return {
                  channels: channels,
                  // not unique somehow needs more checking
                  loadingChannels: false,
                  offset: channels.length,
                  hasNextPage: channelQueryResponse.length >= newOptions.limit ? true : false,
                  refreshing: false
                };
              }); // Set a channel as active and move it to the top of the list.


              if (_this.props.customActiveChannel) {
                customActiveChannel = channelQueryResponse.filter(function (channel) {
                  return channel.id === _this.props.customActiveChannel;
                })[0];

                if (customActiveChannel) {
                  _this.props.setActiveChannel(customActiveChannel, _this.props.watchers);

                  _this.moveChannelUp(customActiveChannel.cid);
                }
              } else if (setActiveChannelOnMount && offset === 0 && _this.state.channels.length) {
                _this.props.setActiveChannel(_this.state.channels[0], _this.props.watchers);
              }

              _context.next = 20;
              break;

            case 16:
              _context.prev = 16;
              _context.t0 = _context["catch"](6);
              console.warn(_context.t0);

              _this.setState({
                error: true,
                refreshing: false
              });

            case 20:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[6, 16]]);
    })));

    _defineProperty(_assertThisInitialized(_this), "handleEvent", /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(e) {
        var newChannels, channel, _channel, channels, channelIndex, _channels, _channelIndex;

        return _regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (e.type === 'user.presence.changed') {
                  newChannels = _this.state.channels;
                  newChannels = newChannels.map(function (channel) {
                    if (!channel.state.members[e.user.id]) return channel;
                    channel.state.members.setIn([e.user.id, 'user'], e.user);
                    return channel;
                  });

                  _this.setState({
                    channels: _toConsumableArray(newChannels)
                  });
                }

                if (e.type === 'message.new') {
                  !_this.props.lockChannelOrder && _this.moveChannelUp(e.cid);
                } // make sure to re-render the channel list after connection is recovered


                if (e.type === 'connection.recovered') {
                  _this.setState(function (prevState) {
                    return {
                      connectionRecoveredCount: prevState.connectionRecoveredCount + 1
                    };
                  });
                } // move channel to start


                if (!(e.type === 'notification.message_new')) {
                  _context2.next = 12;
                  break;
                }

                if (!(_this.props.onMessageNew && typeof _this.props.onMessageNew === 'function')) {
                  _context2.next = 8;
                  break;
                }

                _this.props.onMessageNew(_assertThisInitialized(_this), e);

                _context2.next = 12;
                break;

              case 8:
                _context2.next = 10;
                return _this.getChannel(e.channel.type, e.channel.id);

              case 10:
                channel = _context2.sent;

                // move channel to starting position
                _this.setState(function (prevState) {
                  return {
                    channels: uniqBy([channel].concat(_toConsumableArray(prevState.channels)), 'cid')
                  };
                });

              case 12:
                if (!(e.type === 'notification.added_to_channel')) {
                  _context2.next = 21;
                  break;
                }

                if (!(_this.props.onAddedToChannel && typeof _this.props.onAddedToChannel === 'function')) {
                  _context2.next = 17;
                  break;
                }

                _this.props.onAddedToChannel(_assertThisInitialized(_this), e);

                _context2.next = 21;
                break;

              case 17:
                _context2.next = 19;
                return _this.getChannel(e.channel.type, e.channel.id);

              case 19:
                _channel = _context2.sent;

                _this.setState(function (prevState) {
                  return {
                    channels: uniqBy([_channel].concat(_toConsumableArray(prevState.channels)), 'cid')
                  };
                });

              case 21:
                // remove from channel
                if (e.type === 'notification.removed_from_channel') {
                  if (_this.props.onRemovedFromChannel && typeof _this.props.onRemovedFromChannel === 'function') {
                    _this.props.onRemovedFromChannel(_assertThisInitialized(_this), e);
                  } else {
                    _this.setState(function (prevState) {
                      var channels = prevState.channels.filter(function (channel) {
                        return channel.cid !== e.channel.cid;
                      });
                      return {
                        channels: channels
                      };
                    });
                  }
                } // Update the channel with data


                if (e.type === 'channel.updated') {
                  channels = _this.state.channels;
                  channelIndex = channels.findIndex(function (channel) {
                    return channel.cid === e.channel.cid;
                  });

                  if (channelIndex > -1) {
                    channels[channelIndex].data = Immutable(e.channel);

                    _this.setState({
                      channels: _toConsumableArray(channels),
                      channelUpdateCount: _this.state.channelUpdateCount + 1
                    });
                  }

                  if (_this.props.onChannelUpdated && typeof _this.props.onChannelUpdated === 'function') {
                    _this.props.onChannelUpdated(_assertThisInitialized(_this), e);
                  }
                } // Channel is deleted


                if (!(e.type === 'channel.deleted')) {
                  _context2.next = 34;
                  break;
                }

                if (!(_this.props.onChannelDeleted && typeof _this.props.onChannelDeleted === 'function')) {
                  _context2.next = 28;
                  break;
                }

                _this.props.onChannelDeleted(_assertThisInitialized(_this), e);

                _context2.next = 34;
                break;

              case 28:
                _channels = _this.state.channels;
                _channelIndex = _channels.findIndex(function (channel) {
                  return channel.cid === e.channel.cid;
                });

                if (!(_channelIndex < 0)) {
                  _context2.next = 32;
                  break;
                }

                return _context2.abrupt("return");

              case 32:
                // Remove the deleted channel from the list.s
                _channels.splice(_channelIndex, 1);

                _this.setState({
                  channels: _toConsumableArray(_channels),
                  channelUpdateCount: _this.state.channelUpdateCount + 1
                });

              case 34:
                if (e.type === 'channel.truncated') {
                  _this.setState(function (prevState) {
                    return {
                      channels: _toConsumableArray(prevState.channels),
                      channelUpdateCount: prevState.channelUpdateCount + 1
                    };
                  });

                  if (_this.props.onChannelTruncated && typeof _this.props.onChannelTruncated === 'function') _this.props.onChannelTruncated(_assertThisInitialized(_this), e);
                }

                return _context2.abrupt("return", null);

              case 36:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "getChannel", /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3(type, id) {
        var channel;
        return _regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                channel = _this.props.client.channel(type, id);
                _context3.next = 3;
                return channel.watch();

              case 3:
                return _context3.abrupt("return", channel);

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x2, _x3) {
        return _ref3.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "moveChannelUp", function (cid) {
      var channels = _this.state.channels; // get channel index

      var channelIndex = _this.state.channels.findIndex(function (channel) {
        return channel.cid === cid;
      });

      console.log({
        channelIndex: channelIndex,
        channel: channels[channelIndex]
      });
      if (channelIndex <= 0) return; // get channel from channels

      var channel = channels[channelIndex]; //remove channel from current position

      channels.splice(channelIndex, 1); //add channel at the start

      channels.unshift(channel); // set new channel state

      _this.setState({
        channels: _toConsumableArray(channels)
      });
    });

    _defineProperty(_assertThisInitialized(_this), "loadNextPage", function () {
      _this.queryChannels();
    });

    _defineProperty(_assertThisInitialized(_this), "_renderChannel", function (item) {
      var _this$props2 = _this.props,
          Preview = _this$props2.Preview,
          setActiveChannel = _this$props2.setActiveChannel,
          channel = _this$props2.channel,
          watchers = _this$props2.watchers;
      if (!item) return;
      var props = {
        channel: item,
        activeChannel: channel,
        Preview: Preview,
        setActiveChannel: setActiveChannel,
        watchers: watchers,
        key: item.id,
        // To force the update of preview component upon channel update.
        channelUpdateCount: _this.state.channelUpdateCount,
        connectionRecoveredCount: _this.state.connectionRecoveredCount
      };
      return smartRender(ChannelPreview, _objectSpread$7({}, props));
    });

    _defineProperty(_assertThisInitialized(_this), "_handleClickOutside", function (e) {
      if (_this.channelListRef && !_this.channelListRef.contains(e.target) && _this.props.navOpen) {
        _this.props.closeMobileNav();
      }
    });

    _this.state = {
      channelSearchResults: Immutable([]),
      // list of channels
      channels: Immutable([]),
      // loading channels
      loadingChannels: true,
      // error loading channels
      refreshing: false,
      hasNextPage: false,
      offset: 0,
      error: false,
      connectionRecoveredCount: 0,
      channelUpdateCount: 0
    };
    _this.menuButton = React__default.createRef();
    return _this;
  }

  _createClass(ChannelList, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error, info) {
      console.warn(error, info);
    }
  }, {
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee4() {
        return _regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.queryChannels();

              case 2:
                document.addEventListener('click', this._handleClickOutside);
                this.listenToChanges();

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "componentDidUpdate",
    value: function () {
      var _componentDidUpdate = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee5(prevProps) {
        var messageSearchResults, channelSearchResults;
        return _regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (deepequal(prevProps.filters, this.props.filters)) {
                  _context5.next = 5;
                  break;
                }

                _context5.next = 3;
                return this.setState({
                  offset: 0,
                  channels: Immutable([]),
                  loadingChannels: true,
                  refreshing: false
                });

              case 3:
                _context5.next = 5;
                return this.queryChannels();

              case 5:
                if (!(prevProps.search !== this.props.search)) {
                  _context5.next = 21;
                  break;
                }

                if (!(this.props.search.length > 0)) {
                  _context5.next = 17;
                  break;
                }

                _context5.next = 9;
                return this.props.client.search(this.props.filters, this.props.search);

              case 9:
                messageSearchResults = _context5.sent;
                _context5.next = 12;
                return this.props.client.queryChannels(_objectSpread$7(_objectSpread$7({}, this.props.filters), {}, {
                  name: {
                    $eq: this.props.search
                  }
                }), {}, {});

              case 12:
                channelSearchResults = _context5.sent;
                _context5.next = 15;
                return this.setState({
                  channelSearchResults: Immutable([].concat(_toConsumableArray(messageSearchResults.results.map(function (_ref4) {
                    var message = _ref4.message;
                    return message.channel.cid;
                  })), _toConsumableArray(channelSearchResults.map(function (channel) {
                    return channel.data.cid;
                  }))))
                });

              case 15:
                _context5.next = 19;
                break;

              case 17:
                _context5.next = 19;
                return this.setState({
                  searchResults: Immutable([])
                });

              case 19:
                _context5.next = 21;
                return this.queryChannels();

              case 21:
                if (this.props.customActiveChannel && prevProps.customActiveChannel !== this.props.customActiveChannel) {
                  this.moveChannelUp(this.props.customActiveChannel);
                }

              case 22:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function componentDidUpdate(_x4) {
        return _componentDidUpdate.apply(this, arguments);
      }

      return componentDidUpdate;
    }()
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('click', this._handleClickOutside);
      this.props.client.off(this.handleEvent);
    }
  }, {
    key: "listenToChanges",
    value: function listenToChanges() {
      this.props.client.on(this.handleEvent);
    } // eslint-disable-next-line sonarjs/cognitive-complexity

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props3 = this.props,
          List = _this$props3.List,
          Paginator = _this$props3.Paginator,
          EmptyStateIndicator = _this$props3.EmptyStateIndicator,
          Header = _this$props3.Header;
      var _this$state = this.state,
          loadingChannels = _this$state.loadingChannels,
          refreshing = _this$state.refreshing,
          hasNextPage = _this$state.hasNextPage;
      var channels = this.state.channels.filter(function (channel) {
        if (_this2.props.view === 'dm') return channel.data.member_count === 2;
        if (_this2.props.view === 'group') return channel.data.member_count > 2;
        return true;
      }).filter(function (channel) {
        return _this2.props.search.length > 0 ? _this2.state.channelSearchResults.includes(channel.cid) : true;
      });
      return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("div", {
        className: "str-chat str-chat-channel-list ".concat(this.props.theme, " ").concat(this.props.navOpen ? 'str-chat-channel-list--open' : ''),
        ref: function ref(_ref5) {
          return _this2.channelListRef = _ref5;
        }
      }, Header && /*#__PURE__*/React__default.createElement(Header, null), /*#__PURE__*/React__default.createElement(List, {
        loading: loadingChannels,
        error: this.state.error,
        channels: channels,
        setActiveChannel: this.props.setActiveChannel,
        activeChannel: this.props.channel,
        showSidebar: this.props.showSidebar,
        LoadingIndicator: this.props.LoadingIndicator,
        LoadingErrorIndicator: this.props.LoadingErrorIndicator
      }, !channels.length ? /*#__PURE__*/React__default.createElement(EmptyStateIndicator, {
        listType: "channel"
      }) : smartRender(Paginator, {
        loadNextPage: this.loadNextPage,
        hasNextPage: hasNextPage,
        refreshing: refreshing,
        children: channels.map(function (item) {
          return _this2._renderChannel(item);
        })
      }))));
    }
  }], [{
    key: "getDerivedStateFromError",
    value: function getDerivedStateFromError() {
      return {
        error: true
      };
    }
  }]);

  return ChannelList;
}(PureComponent);

_defineProperty(ChannelList, "propTypes", {
  view: PropTypes.oneOf(['all', 'dm', 'group']),
  search: PropTypes.string,
  Header: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),

  /**
   *
   *
   * Indicator for Empty State
   * */
  EmptyStateIndicator: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),

  /**
   * Available built-in options (also accepts the same props as):
   *
   * 1. [ChannelPreviewCompact](https://getstream.github.io/stream-chat-react/#ChannelPreviewCompact) (default)
   * 2. [ChannelPreviewLastMessage](https://getstream.github.io/stream-chat-react/#ChannelPreviewLastMessage)
   * 3. [ChannelPreviewMessanger](https://getstream.github.io/stream-chat-react/#ChannelPreviewMessanger)
   *
   * The Preview to use, defaults to ChannelPreviewLastMessage
   * */
  Preview: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),

  /**
   * Loading indicator UI Component. It will be displayed until the channels are
   * being queried from API. Once the channels are loaded/queried, loading indicator is removed
   * and replaced with children of the Channel component.
   *
   * Defaults to and accepts same props as:
   * [LoadingChannels](https://github.com/GetStream/stream-chat-react/blob/master/src/components/LoadingChannels.js)
   *
   */
  LoadingIndicator: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),

  /**
   * Error indicator UI Component. It will be displayed if there is any error if loading the channels.
   * This error could be related to network or failing API.
   *
   * Defaults to and accepts same props as:
   * [ChatDown](https://github.com/GetStream/stream-chat-react/blob/master/src/components/ChatDown.js)
   *
   */
  LoadingErrorIndicator: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),

  /**
   * Custom UI Component for container of list of channels. Note that, list (UI component) of channels is passed
   * to this component as children. This component is for the purpose of adding header to channel list or styling container
   * for list of channels.
   *
   * Available built-in options (also accepts the same props as):
   *
   * 1. [ChannelListTeam](https://github.com/GetStream/stream-chat-react/blob/master/src/components/ChannelListTeam.js) (default)
   * 2. [ChannelListMessenger](https://github.com/GetStream/stream-chat-react/blob/master/src/components/ChannelListMessenger.js)
   *
   * It has access to some additional props:
   *
   * - `setActiveChannel` {function} Check [chat context](https://getstream.github.io/stream-chat-react/#chat)
   * - `activeChannel` Currently active channel object
   * - `channels` {array} List of channels in channel list
   */
  List: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),

  /**
   * Paginator component for channels. It contains all the pagination logic such as
   * - fetching next page of results when needed e.g., when scroll reaches the end of list
   * - UI to display loading indicator when next page is being loaded
   * - call to action button to trigger loading of next page.
   *
   * Available built-in options (also accepts the same props as):
   *
   * 1. [LoadMorePaginator](https://github.com/GetStream/stream-chat-react/blob/master/src/components/LoadMorePaginator.js)
   * 2. [InfiniteScrollPaginator](https://github.com/GetStream/stream-chat-react/blob/master/src/components/InfiniteScrollPaginator.js)
   */
  Paginator: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),

  /**
   * Function that overrides default behaviour when new message is received on channel that is not being watched
   *
   * @param {Component} thisArg Reference to ChannelList component
   * @param {Event} event       [Event object](https://getstream.io/chat/docs/#event_object) corresponding to `notification.message_new` event
   * */
  onMessageNew: PropTypes.func,

  /**
   * Function that overrides default behaviour when users gets added to a channel
   *
   * @param {Component} thisArg Reference to ChannelList component
   * @param {Event} event       [Event object](https://getstream.io/chat/docs/#event_object) corresponding to `notification.added_to_channel` event
   * */
  onAddedToChannel: PropTypes.func,

  /**
   * Function that overrides default behaviour when users gets removed from a channel
   *
   * @param {Component} thisArg Reference to ChannelList component
   * @param {Event} event       [Event object](https://getstream.io/chat/docs/#event_object) corresponding to `notification.removed_from_channel` event
   * */
  onRemovedFromChannel: PropTypes.func,

  /**
   * Function that overrides default behaviour when channel gets updated
   *
   * @param {Component} thisArg Reference to ChannelList component
   * @param {Event} event       [Event object](https://getstream.io/chat/docs/#event_object) corresponding to `notification.channel_updated` event
   * */
  onChannelUpdated: PropTypes.func,

  /**
   * Function to customize behaviour when channel gets truncated
   *
   * @param {Component} thisArg Reference to ChannelList component
   * @param {Event} event       [Event object](https://getstream.io/chat/docs/#event_object) corresponding to `channel.truncated` event
   * */
  onChannelTruncated: PropTypes.func,

  /**
   * Function that overrides default behaviour when channel gets deleted. In absence of this prop, channel will be removed from the list.
   *
   * @param {Component} thisArg Reference to ChannelList component
   * @param {Event} event       [Event object](https://getstream.io/chat/docs/#event_object) corresponding to `channel.deleted` event
   * */
  onChannelDeleted: PropTypes.func,

  /**
   * Object containing query filters
   * @see See [Channel query documentation](https://getstream.io/chat/docs/#query_channels) for a list of available fields for filter.
   * */
  filters: PropTypes.object,

  /**
   * Object containing query options
   * @see See [Channel query documentation](https://getstream.io/chat/docs/#query_channels) for a list of available fields for options.
   * */
  options: PropTypes.object,

  /**
   * Object containing sort parameters
   * @see See [Channel query documentation](https://getstream.io/chat/docs/#query_channels) for a list of available fields for sort.
   * */
  sort: PropTypes.object,

  /**
   * Object containing watcher parameters
   * @see See [Pagination documentation](https://getstream.io/chat/docs/#channel_pagination) for a list of available fields for sort.
   * */
  watchers: PropTypes.object,

  /**
   * Set a Channel to be active and move it to the top of the list of channels by ID.
   * */
  customActiveChannel: PropTypes.string,

  /**
   * Last channel will be set as active channel if true, defaults to true
   */
  setActiveChannelOnMount: PropTypes.bool,

  /**
   * If true, channels won't be dynamically sorted by most recent message.
   */
  lockChannelOrder: PropTypes.bool
});

_defineProperty(ChannelList, "defaultProps", {
  view: 'all',
  search: '',
  Preview: ChannelPreviewLastMessage,
  LoadingIndicator: LoadingChannels,
  LoadingErrorIndicator: ChatDown,
  List: ChannelListTeam,
  Paginator: LoadMorePaginator,
  EmptyStateIndicator: EmptyStateIndicator,
  setActiveChannelOnMount: true,
  filters: {},
  options: {},
  sort: {},
  watchers: {}
});

ChannelList = withChatContext(ChannelList);

function _createSuper$B(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$B(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$B() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
/**
 * ChannelList - A preview list of channels, allowing you to select the channel you want to open
 * @example ./examples/ChannelList.md
 */

var ChannelListMessenger = /*#__PURE__*/function (_PureComponent) {
  _inherits(ChannelListMessenger, _PureComponent);

  var _super = _createSuper$B(ChannelListMessenger);

  function ChannelListMessenger() {
    _classCallCheck(this, ChannelListMessenger);

    return _super.apply(this, arguments);
  }

  _createClass(ChannelListMessenger, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          error = _this$props.error,
          loading = _this$props.loading,
          LoadingErrorIndicator = _this$props.LoadingErrorIndicator,
          LoadingIndicator = _this$props.LoadingIndicator;

      if (error) {
        return /*#__PURE__*/React__default.createElement(LoadingErrorIndicator, {
          type: "Connection Error"
        });
      } else if (loading) {
        return /*#__PURE__*/React__default.createElement(LoadingIndicator, null);
      } else {
        return /*#__PURE__*/React__default.createElement("div", {
          className: "str-chat__channel-list-messenger"
        }, /*#__PURE__*/React__default.createElement("div", {
          className: "str-chat__channel-list-messenger__main"
        }, this.props.children));
      }
    }
  }]);

  return ChannelListMessenger;
}(PureComponent);

_defineProperty(ChannelListMessenger, "propTypes", {
  /** When true, loading indicator is shown - [LoadingChannels](https://github.com/GetStream/stream-chat-react/blob/master/src/components/LoadingChannels.js) */
  loading: PropTypes.bool,

  /** When true, error indicator is shown - [ChatDown](https://github.com/GetStream/stream-chat-react/blob/master/src/components/ChatDown.js) */
  error: PropTypes.bool,

  /**
   * Loading indicator UI Component. It will be displayed if `loading` prop is true.
   *
   * Defaults to and accepts same props as:
   * [LoadingChannels](https://github.com/GetStream/stream-chat-react/blob/master/src/components/LoadingChannels.js)
   *
   */
  LoadingIndicator: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),

  /**
   * Error indicator UI Component. It will be displayed if `error` prop is true
   *
   * Defaults to and accepts same props as:
   * [ChatDown](https://github.com/GetStream/stream-chat-react/blob/master/src/components/ChatDown.js)
   *
   */
  LoadingErrorIndicator: PropTypes.oneOfType([PropTypes.node, PropTypes.func])
});

_defineProperty(ChannelListMessenger, "defaultProps", {
  error: false,
  LoadingIndicator: LoadingChannels,
  LoadingErrorIndicator: ChatDown
});

ChannelListMessenger = withChatContext(ChannelListMessenger);

function _createSuper$C(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$C(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$C() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
/**
 *
 * @example ./docs/ChannelPreviewCompact.md
 * @extends PureComponent
 *
 */

var ChannelPreviewCompact = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(ChannelPreviewCompact, _React$PureComponent);

  var _super = _createSuper$C(ChannelPreviewCompact);

  function ChannelPreviewCompact() {
    var _this;

    _classCallCheck(this, ChannelPreviewCompact);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "channelPreviewButton", React__default.createRef());

    _defineProperty(_assertThisInitialized(_this), "onSelectChannel", function () {
      _this.props.setActiveChannel(_this.props.channel, _this.props.watchers);

      _this.channelPreviewButton.current.blur();
    });

    return _this;
  }

  _createClass(ChannelPreviewCompact, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          displayTitle = _this$props.displayTitle,
          displayImage = _this$props.displayImage;
      var unreadClass = this.props.unread_count >= 1 ? 'str-chat__channel-preview-compact--unread' : '';
      var activeClass = this.props.active ? 'str-chat__channel-preview-compact--active' : '';
      return /*#__PURE__*/React__default.createElement("button", {
        onClick: this.onSelectChannel,
        ref: this.channelPreviewButton,
        className: "str-chat__channel-preview-compact ".concat(unreadClass, " ").concat(activeClass)
      }, /*#__PURE__*/React__default.createElement("div", {
        className: "str-chat__channel-preview-compact--left"
      }, /*#__PURE__*/React__default.createElement(Avatar, {
        image: displayImage,
        size: 20
      })), /*#__PURE__*/React__default.createElement("div", {
        className: "str-chat__channel-preview-compact--right"
      }, displayTitle));
    }
  }]);

  return ChannelPreviewCompact;
}(React__default.PureComponent);

_defineProperty(ChannelPreviewCompact, "propTypes", {
  /** **Available from [chat context](https://getstream.github.io/stream-chat-react/#chat)** */
  channel: PropTypes.object.isRequired,

  /** Current selected channel object */
  activeChannel: PropTypes.object,

  /** Setter for selected channel */
  setActiveChannel: PropTypes.func.isRequired,

  /**
   * Object containing watcher parameters
   * @see See [Pagination documentation](https://getstream.io/chat/docs/#channel_pagination) for a list of available fields for sort.
   * */
  watchers: PropTypes.object,

  /** Number of unread messages */
  unread: PropTypes.number,

  /** If channel of component is active (selected) channel */
  active: PropTypes.bool,

  /** Latest message's text. */
  latestMessage: PropTypes.string,

  /** Title of channel to display */
  displayTitle: PropTypes.string,

  /** Image of channel to display */
  displayImage: PropTypes.string
});

function _createSuper$D(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$D(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$D() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
/**
 * Used as preview component for channel item in [ChannelList](#channellist) component.
 * Its best suited for messenger type chat.
 *
 * @example ./docs/ChannelPreviewMessenger.md
 * @extends PureComponent
 */

var ChannelPreviewMessenger = /*#__PURE__*/function (_PureComponent) {
  _inherits(ChannelPreviewMessenger, _PureComponent);

  var _super = _createSuper$D(ChannelPreviewMessenger);

  function ChannelPreviewMessenger() {
    var _this;

    _classCallCheck(this, ChannelPreviewMessenger);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "channelPreviewButton", React__default.createRef());

    _defineProperty(_assertThisInitialized(_this), "onSelectChannel", function () {
      _this.props.setActiveChannel(_this.props.channel, _this.props.watchers);

      _this.channelPreviewButton.current.blur();
    });

    return _this;
  }

  _createClass(ChannelPreviewMessenger, [{
    key: "render",
    value: function render() {
      var unreadClass = this.props.unread >= 1 ? 'str-chat__channel-preview-messenger--unread' : '';
      var activeClass = this.props.active ? 'str-chat__channel-preview-messenger--active' : '';
      var _this$props = this.props,
          channel = _this$props.channel,
          displayTitle = _this$props.displayTitle,
          displayImage = _this$props.displayImage,
          t = _this$props.t;
      return /*#__PURE__*/React__default.createElement("button", {
        onClick: this.onSelectChannel,
        ref: this.channelPreviewButton,
        className: "str-chat__channel-preview-messenger ".concat(unreadClass, " ").concat(activeClass)
      }, /*#__PURE__*/React__default.createElement("div", {
        className: "str-chat__channel-preview-messenger--left"
      }, /*#__PURE__*/React__default.createElement(Avatar, {
        image: displayImage,
        size: 40
      })), /*#__PURE__*/React__default.createElement("div", {
        className: "str-chat__channel-preview-messenger--right"
      }, /*#__PURE__*/React__default.createElement("div", {
        className: "str-chat__channel-preview-messenger--name"
      }, /*#__PURE__*/React__default.createElement("span", null, displayTitle)), /*#__PURE__*/React__default.createElement("div", {
        className: "str-chat__channel-preview-messenger--last-message"
      }, !channel.state.messages[0] ? t('Nothing yet...') : truncate(this.props.latestMessage, {
        length: this.props.latestMessageLength
      }))));
    }
  }]);

  return ChannelPreviewMessenger;
}(PureComponent);

_defineProperty(ChannelPreviewMessenger, "propTypes", {
  /** **Available from [chat context](https://getstream.github.io/stream-chat-react/#chat)** */
  channel: PropTypes.object.isRequired,

  /** Current selected channel object */
  activeChannel: PropTypes.object,

  /** Setter for selected channel */
  setActiveChannel: PropTypes.func.isRequired,

  /**
   * Object containing watcher parameters
   * @see See [Pagination documentation](https://getstream.io/chat/docs/#channel_pagination) for a list of available fields for sort.
   * */
  watchers: PropTypes.object,

  /** Number of unread messages */
  unread: PropTypes.number,

  /** If channel of component is active (selected) channel */
  active: PropTypes.bool,

  /** Latest message's text. */
  latestMessage: PropTypes.string,

  /** Length of latest message to truncate at */
  latestMessageLength: PropTypes.number,

  /** Title of channel to display */
  displayTitle: PropTypes.string,

  /** Image of channel to display */
  displayImage: PropTypes.string
});

_defineProperty(ChannelPreviewMessenger, "defaultProps", {
  latestMessageLength: 14
});

ChannelPreviewMessenger = withTranslationContext(ChannelPreviewMessenger);

function _createSuper$E(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$E(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$E() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var ChannelSearch = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(ChannelSearch, _React$PureComponent);

  var _super = _createSuper$E(ChannelSearch);

  function ChannelSearch() {
    _classCallCheck(this, ChannelSearch);

    return _super.apply(this, arguments);
  }

  _createClass(ChannelSearch, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React__default.createElement("div", {
        className: "str-chat__channel-search"
      }, /*#__PURE__*/React__default.createElement("input", {
        type: "text",
        placeholder: "Search"
      }), /*#__PURE__*/React__default.createElement("button", {
        type: "submit"
      }, /*#__PURE__*/React__default.createElement("svg", {
        width: "18",
        height: "17",
        viewBox: "0 0 18 17",
        xmlns: "http://www.w3.org/2000/svg"
      }, /*#__PURE__*/React__default.createElement("path", {
        d: "M0 17.015l17.333-8.508L0 0v6.617l12.417 1.89L0 10.397z",
        fillRule: "evenodd"
      }))));
    }
  }]);

  return ChannelSearch;
}(React__default.PureComponent);

function _createSuper$F(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$F(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$F() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
/**
 * Chat - Wrapper component for Chat. The needs to be placed around any other chat components.
 * This Chat component provides the ChatContext to all other components.
 *
 * The ChatContext provides the following props:
 *
 * - client (the client connection)
 * - channels (the list of channels)
 * - setActiveChannel (a function to set the currently active channel)
 * - channel (the currently active channel)
 *
 * It also exposes the withChatContext HOC which you can use to consume the ChatContext
 *
 * @example ./docs/Chat.md
 * @extends PureComponent
 */

var Chat = /*#__PURE__*/function (_PureComponent) {
  _inherits(Chat, _PureComponent);

  var _super = _createSuper$F(Chat);

  function Chat(props) {
    var _this;

    _classCallCheck(this, Chat);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "setActiveChannel", /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(channel) {
        var watchers,
            e,
            _args = arguments;
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                watchers = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
                e = _args.length > 2 ? _args[2] : undefined;

                if (e !== undefined && e.preventDefault) {
                  e.preventDefault();
                }

                if (!Object.keys(watchers).length) {
                  _context.next = 6;
                  break;
                }

                _context.next = 6;
                return channel.query({
                  watch: true,
                  watchers: watchers
                });

              case 6:
                _this.setState(function () {
                  return {
                    channel: channel
                  };
                });

                if (_this.state.navOpen) {
                  _this.closeMobileNav();
                }

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "openMobileNav", function () {
      setTimeout(function () {
        _this.setState({
          navOpen: true
        });
      }, 100);
    });

    _defineProperty(_assertThisInitialized(_this), "closeMobileNav", function () {
      _this.setState({
        navOpen: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getContext", function () {
      return {
        client: _this.props.client,
        channel: _this.state.channel,
        setActiveChannel: _this.setActiveChannel,
        openMobileNav: _this.openMobileNav,
        closeMobileNav: _this.closeMobileNav,
        navOpen: _this.state.navOpen,
        theme: _this.props.theme
      };
    });

    _this.state = {
      // currently active channel
      channel: {},
      navOpen: true,
      error: false
    };
    return _this;
  }

  _createClass(Chat, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2() {
        var _this2 = this;

        var i18nInstance, streami18n, _yield$streami18n$get, t, tDateTimeParser;

        return _regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                i18nInstance = this.props.i18nInstance;

                if (i18nInstance && i18nInstance instanceof Streami18n) {
                  streami18n = i18nInstance;
                } else {
                  streami18n = new Streami18n({
                    language: 'en'
                  });
                }

                streami18n.registerSetLanguageCallback(function (t) {
                  _this2.setState({
                    t: t
                  });
                });
                _context2.next = 5;
                return streami18n.getTranslators();

              case 5:
                _yield$streami18n$get = _context2.sent;
                t = _yield$streami18n$get.t;
                tDateTimeParser = _yield$streami18n$get.tDateTimeParser;
                this.setState({
                  t: t,
                  tDateTimeParser: tDateTimeParser
                });

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "render",
    value: function render() {
      if (!this.state.t) return null;
      return /*#__PURE__*/React__default.createElement(ChatContext.Provider, {
        value: this.getContext()
      }, /*#__PURE__*/React__default.createElement(TranslationContext.Provider, {
        value: {
          t: this.state.t,
          tDateTimeParser: this.state.tDateTimeParser
        }
      }, this.props.children));
    }
  }]);

  return Chat;
}(PureComponent);

_defineProperty(Chat, "propTypes", {
  /** The StreamChat client object */
  client: PropTypes.object.isRequired,

  /**
   *
   * Theme could be used for custom styling of the components.
   *
   * You can override the classes used in our components under parent theme class.
   *
   * e.g. If you want to build a theme where background of message is black
   *
   * ```
   *  <Chat client={client} theme={demo}>
   *    <Channel>
   *      <MessageList />
   *    </Channel>
   *  </Chat>
   * ```
   *
   * ```scss
   *  .demo.str-chat {
   *    .str-chat__message-simple {
   *      &-text-inner {
   *        background-color: black;
   *      }
   *    }
   *  }
   * ```
   *
   * Built in available themes:
   *
   *  - `messaging light`
   *  - `messaging dark`
   *  - `team light`
   *  - `team dark`
   *  - `commerce light`
   *  - `commerce dark`
   *  - `livestream light`
   *  - `livestream dark`
   */
  theme: PropTypes.string
});

_defineProperty(Chat, "defaultProps", {
  theme: 'messaging light'
});

function _createSuper$G(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$G(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$G() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
/**
 * DateSeparator - A simple date separator
 *
 * @example ./docs/DateSeparator.md
 * @extends PureComponent
 */

var DateSeparator = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(DateSeparator, _React$PureComponent);

  var _super = _createSuper$G(DateSeparator);

  function DateSeparator() {
    _classCallCheck(this, DateSeparator);

    return _super.apply(this, arguments);
  }

  _createClass(DateSeparator, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          position = _this$props.position,
          tDateTimeParser = _this$props.tDateTimeParser;

      if (!Date.parse(this.props.date)) {
        return null;
      }

      return /*#__PURE__*/React__default.createElement("div", {
        className: "str-chat__date-separator"
      }, (position === 'right' || position === 'center') && /*#__PURE__*/React__default.createElement("hr", {
        className: "str-chat__date-separator-line"
      }), /*#__PURE__*/React__default.createElement("div", {
        className: "str-chat__date-separator-date"
      }, this.props.formatDate ? this.props.formatDate(this.props.date) : tDateTimeParser(this.props.date.toISOString()).calendar()), (position === 'left' || position === 'center') && /*#__PURE__*/React__default.createElement("hr", {
        className: "str-chat__date-separator-line"
      }));
    }
  }]);

  return DateSeparator;
}(React__default.PureComponent);

_defineProperty(DateSeparator, "propTypes", {
  /** The date to format */
  date: PropTypes.instanceOf(Date),

  /** Set the position of the date in the separator */
  position: PropTypes.oneOf(['left', 'center', 'right']),

  /** Override the default formatting of the date. This is a function that has access to the original date object. Returns a string or Node  */
  formatDate: PropTypes.func
});

_defineProperty(DateSeparator, "defaultProps", {
  position: 'right'
});

DateSeparator = withTranslationContext(DateSeparator);

function _createSuper$H(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$H(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$H() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var EventComponent = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(EventComponent, _React$PureComponent);

  var _super = _createSuper$H(EventComponent);

  function EventComponent() {
    _classCallCheck(this, EventComponent);

    return _super.apply(this, arguments);
  }

  _createClass(EventComponent, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          message = _this$props.message,
          tDateTimeParser = _this$props.tDateTimeParser;

      if (message.type === 'system') {
        return /*#__PURE__*/React__default.createElement("div", {
          className: "str-chat__message--system"
        }, /*#__PURE__*/React__default.createElement("div", {
          className: "str-chat__message--system__text"
        }, /*#__PURE__*/React__default.createElement("div", {
          className: "str-chat__message--system__line"
        }), /*#__PURE__*/React__default.createElement("p", null, message.text), /*#__PURE__*/React__default.createElement("div", {
          className: "str-chat__message--system__line"
        })), /*#__PURE__*/React__default.createElement("div", {
          className: "str-chat__message--system__date"
        }, /*#__PURE__*/React__default.createElement("strong", null, tDateTimeParser(message.created_at).format('dddd'), ' '), "at ", tDateTimeParser(message.created_at).format('hh:mm A')));
      }

      if (message.type === 'channel.event' && (message.event.type === 'member.removed' || message.event.type === 'member.added')) {
        var sentence;

        switch (message.event.type) {
          case 'member.removed':
            sentence = "".concat(message.event.user.name || message.event.user.id, " was removed from the chat");
            break;

          case 'member.added':
            sentence = "".concat(message.event.user.name || message.event.user.id, " has joined the chat");
            break;
        }

        return /*#__PURE__*/React__default.createElement("div", {
          className: "str-chat__event-component__channel-event"
        }, /*#__PURE__*/React__default.createElement(Avatar, {
          image: message.event.user.image,
          name: message.event.user.name || message.event.user.id
        }), /*#__PURE__*/React__default.createElement("div", {
          className: "str-chat__event-component__channel-event__content"
        }, /*#__PURE__*/React__default.createElement("em", {
          className: "str-chat__event-component__channel-event__sentence"
        }, sentence), /*#__PURE__*/React__default.createElement("div", {
          className: "str-chat__event-component__channel-event__date"
        }, tDateTimeParser(message.created_at).format('LT'))));
      }

      return null;
    }
  }]);

  return EventComponent;
}(React__default.PureComponent);

_defineProperty(EventComponent, "propTypes", {
  /** Message object */
  message: PropTypes.object
});

EventComponent = withTranslationContext(EventComponent);

function _createSuper$I(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$I(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$I() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var InfiniteScroll = /*#__PURE__*/function (_Component) {
  _inherits(InfiniteScroll, _Component);

  var _super = _createSuper$I(InfiniteScroll);

  function InfiniteScroll(props) {
    var _this;

    _classCallCheck(this, InfiniteScroll);

    _this = _super.call(this, props);
    _this.scrollListener = _this.scrollListener.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(InfiniteScroll, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.attachScrollListener();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.attachScrollListener();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.detachScrollListener();
      this.detachMousewheelListener();
    } // Set a defaut loader for all your `InfiniteScroll` components

  }, {
    key: "setDefaultLoader",
    value: function setDefaultLoader(loader) {
      this.defaultLoader = loader;
    }
  }, {
    key: "detachMousewheelListener",
    value: function detachMousewheelListener() {
      var scrollEl = window;

      if (this.props.useWindow === false) {
        scrollEl = this.scrollComponent.parentNode;
      }

      scrollEl.removeEventListener('mousewheel', this.mousewheelListener, this.props.useCapture);
    }
  }, {
    key: "detachScrollListener",
    value: function detachScrollListener() {
      var scrollEl = window;

      if (this.props.useWindow === false) {
        scrollEl = this.getParentElement(this.scrollComponent);
      }

      scrollEl.removeEventListener('scroll', this.scrollListener, this.props.useCapture);
      scrollEl.removeEventListener('resize', this.scrollListener, this.props.useCapture);
    }
  }, {
    key: "getParentElement",
    value: function getParentElement(el) {
      return el && el.parentNode;
    }
  }, {
    key: "filterProps",
    value: function filterProps(props) {
      return props;
    }
  }, {
    key: "attachScrollListener",
    value: function attachScrollListener() {
      if (!this.props.hasMore || this.props.isLoading || !this.getParentElement(this.scrollComponent)) {
        return;
      }

      var scrollEl = window;

      if (this.props.useWindow === false) {
        scrollEl = this.getParentElement(this.scrollComponent);
      }

      scrollEl.addEventListener('mousewheel', this.mousewheelListener, this.props.useCapture);
      scrollEl.addEventListener('scroll', this.scrollListener, this.props.useCapture);
      scrollEl.addEventListener('resize', this.scrollListener, this.props.useCapture);

      if (this.props.initialLoad) {
        this.scrollListener();
      }
    }
  }, {
    key: "mousewheelListener",
    value: function mousewheelListener(e) {
      // Prevents Chrome hangups
      // See: https://stackoverflow.com/questions/47524205/random-high-content-download-time-in-chrome/47684257#47684257
      if (e.deltaY === 1) {
        e.preventDefault();
      }
    }
  }, {
    key: "scrollListener",
    value: function scrollListener() {
      var el = this.scrollComponent;
      var scrollEl = window;
      var parentNode = this.getParentElement(el);
      var offset;

      if (this.props.useWindow) {
        var doc = document.documentElement || document.body.parentNode || document.body;
        var scrollTop = scrollEl.pageYOffset !== undefined ? scrollEl.pageYOffset : doc.scrollTop;

        if (this.props.isReverse) {
          offset = scrollTop;
        } else {
          offset = this.calculateOffset(el, scrollTop);
        }
      } else if (this.props.isReverse) {
        offset = parentNode.scrollTop;
      } else {
        offset = el.scrollHeight - parentNode.scrollTop - parentNode.clientHeight;
      } // Here we make sure the element is visible as well as checking the offset


      if (offset < Number(this.props.threshold) && el && el.offsetParent !== null) {
        this.detachScrollListener(); // Call loadMore after detachScrollListener to allow for non-async loadMore functions

        if (typeof this.props.loadMore === 'function') {
          this.props.loadMore();
        }
      }
    }
  }, {
    key: "calculateOffset",
    value: function calculateOffset(el, scrollTop) {
      if (!el) {
        return 0;
      }

      return this.calculateTopPosition(el) + (el.offsetHeight - scrollTop - window.innerHeight);
    }
  }, {
    key: "calculateTopPosition",
    value: function calculateTopPosition(el) {
      if (!el) {
        return 0;
      }

      return el.offsetTop + this.calculateTopPosition(el.offsetParent);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var renderProps = this.filterProps(this.props);

      var children = renderProps.children,
          element = renderProps.element,
          hasMore = renderProps.hasMore,
          initialLoad = renderProps.initialLoad,
          isReverse = renderProps.isReverse,
          loader = renderProps.loader,
          loadMore = renderProps.loadMore,
          pageStart = renderProps.pageStart,
          threshold = renderProps.threshold,
          useCapture = renderProps.useCapture,
          useWindow = renderProps.useWindow,
          isLoading = renderProps.isLoading,
          props = _objectWithoutProperties(renderProps, ["children", "element", "hasMore", "initialLoad", "isReverse", "loader", "loadMore", "pageStart", "threshold", "useCapture", "useWindow", "isLoading"]);

      props.ref = function (node) {
        _this2.scrollComponent = node;
      };

      var childrenArray = [children];

      if (isLoading) {
        if (loader) {
          isReverse ? childrenArray.unshift(loader) : childrenArray.push(loader);
        } else if (this.defaultLoader) {
          isReverse ? childrenArray.unshift(this.defaultLoader) : childrenArray.push(this.defaultLoader);
        }
      }

      return React__default.createElement(element, props, childrenArray);
    }
  }]);

  return InfiniteScroll;
}(Component);

_defineProperty(InfiniteScroll, "propTypes", {
  element: PropTypes.node,
  hasMore: PropTypes.bool,
  initialLoad: PropTypes.bool,
  isReverse: PropTypes.bool,
  loader: PropTypes.node,
  loadMore: PropTypes.func.isRequired,
  pageStart: PropTypes.number,
  isLoading: PropTypes.bool,
  threshold: PropTypes.number,
  useCapture: PropTypes.bool,
  useWindow: PropTypes.bool
});

_defineProperty(InfiniteScroll, "defaultProps", {
  element: 'div',
  hasMore: false,
  initialLoad: true,
  isLoading: false,
  pageStart: 0,
  ref: null,
  threshold: 250,
  useWindow: true,
  isReverse: false,
  useCapture: false,
  loader: null
});

function _createSuper$J(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$J(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$J() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var InfiniteScrollPaginator = /*#__PURE__*/function (_React$Component) {
  _inherits(InfiniteScrollPaginator, _React$Component);

  var _super = _createSuper$J(InfiniteScrollPaginator);

  function InfiniteScrollPaginator() {
    _classCallCheck(this, InfiniteScrollPaginator);

    return _super.apply(this, arguments);
  }

  _createClass(InfiniteScrollPaginator, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          LoadingIndicator = _this$props.LoadingIndicator,
          loadNextPage = _this$props.loadNextPage,
          hasNextPage = _this$props.hasNextPage,
          refreshing = _this$props.refreshing,
          reverse = _this$props.reverse,
          threshold = _this$props.threshold;
      return /*#__PURE__*/React__default.createElement(InfiniteScroll, {
        loadMore: loadNextPage,
        hasMore: hasNextPage,
        isLoading: refreshing,
        isReverse: reverse,
        threshold: threshold,
        useWindow: false,
        loader: /*#__PURE__*/React__default.createElement("div", {
          className: "str-chat__infinite-scroll-paginator",
          key: "loadingindicator"
        }, /*#__PURE__*/React__default.createElement(LoadingIndicator, null))
      }, this.props.children);
    }
  }]);

  return InfiniteScrollPaginator;
}(React__default.Component);

_defineProperty(InfiniteScrollPaginator, "propTypes", {
  /** callback to load the next page */
  loadNextPage: PropTypes.func,

  /** indicates if there is a next page to load */
  hasNextPage: PropTypes.bool,

  /** indicates if there there's currently any refreshing taking place */
  refreshing: PropTypes.bool,

  /** display the items in opposite order */
  reverse: PropTypes.bool,

  /** Offset from when to start the loadNextPage call */
  threshold: PropTypes.number,

  /** The loading indicator to use */
  LoadingIndicator: PropTypes.oneOfType([PropTypes.node, PropTypes.func])
});

_defineProperty(InfiniteScrollPaginator, "defaultProps", {
  LoadingIndicator: LoadingIndicator$1
});

function _createForOfIteratorHelper$3(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray$3(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray$3(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$3(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$3(o, minLen); }

function _arrayLikeToArray$3(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper$K(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$K(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$K() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
/**
 * Message - A high level component which implements all the logic required for a message.
 * The actual rendering of the message is delegated via the "Message" property
 *
 * @example ./docs/Message.md
 * @extends Component
 */

var Message = /*#__PURE__*/function (_Component) {
  _inherits(Message, _Component);

  var _super = _createSuper$K(Message);

  function Message(props) {
    var _this;

    _classCallCheck(this, Message);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "isMyMessage", function (message) {
      return _this.props.client.user.id === message.user.id;
    });

    _defineProperty(_assertThisInitialized(_this), "isAdmin", function () {
      return _this.props.client.user.role === 'admin' || _this.props.channel.state && _this.props.channel.state.membership && _this.props.channel.state.membership.role === 'admin';
    });

    _defineProperty(_assertThisInitialized(_this), "isOwner", function () {
      return _this.props.channel.state && _this.props.channel.state.membership && _this.props.channel.state.membership.role === 'owner';
    });

    _defineProperty(_assertThisInitialized(_this), "isModerator", function () {
      return _this.props.channel.state && _this.props.channel.state.membership && (_this.props.channel.state.membership.role === 'channel_moderator' || _this.props.channel.state.membership.role === 'moderator');
    });

    _defineProperty(_assertThisInitialized(_this), "canEditMessage", function (message) {
      return _this.isMyMessage(message) || _this.isModerator() || _this.isOwner() || _this.isAdmin();
    });

    _defineProperty(_assertThisInitialized(_this), "canDeleteMessage", function (message) {
      return _this.canEditMessage(message);
    });

    _defineProperty(_assertThisInitialized(_this), "validateAndGetNotificationMessage", function (func, args) {
      if (!func || typeof func !== 'function') return false;
      var returnValue = func.apply(null, args);
      if (typeof returnValue !== 'string') return false;
      return returnValue;
    });

    _defineProperty(_assertThisInitialized(_this), "handleFlag", /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(event) {
        var _this$props, getFlagMessageSuccessNotification, getFlagMessageErrorNotification, message, client, addNotification, t, successMessage, errorMessage;

        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                _this$props = _this.props, getFlagMessageSuccessNotification = _this$props.getFlagMessageSuccessNotification, getFlagMessageErrorNotification = _this$props.getFlagMessageErrorNotification, message = _this$props.message, client = _this$props.client, addNotification = _this$props.addNotification, t = _this$props.t;
                _context.prev = 2;
                _context.next = 5;
                return client.flagMessage(message.id);

              case 5:
                successMessage = _this.validateAndGetNotificationMessage(getFlagMessageSuccessNotification, [message]);
                addNotification(successMessage ? successMessage : t('Message has been successfully flagged'), 'success');
                _context.next = 13;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](2);
                errorMessage = _this.validateAndGetNotificationMessage(getFlagMessageErrorNotification, [message]);
                addNotification(errorMessage ? errorMessage : t('Error adding flag: Either the flag already exist or there is issue with network connection ...'), 'error');

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 9]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "handleMute", /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(event) {
        var _this$props2, getMuteUserSuccessNotification, getMuteUserErrorNotification, message, client, addNotification, t, successMessage, errorMessage;

        return _regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                event.preventDefault();
                _this$props2 = _this.props, getMuteUserSuccessNotification = _this$props2.getMuteUserSuccessNotification, getMuteUserErrorNotification = _this$props2.getMuteUserErrorNotification, message = _this$props2.message, client = _this$props2.client, addNotification = _this$props2.addNotification, t = _this$props2.t;
                _context2.prev = 2;
                _context2.next = 5;
                return client.muteUser(message.user.id);

              case 5:
                successMessage = _this.validateAndGetNotificationMessage(getMuteUserSuccessNotification, [message.user]);
                addNotification(successMessage ? successMessage : t("{{ user }} has been muted", {
                  user: message.user.name || message.user.id
                }), 'success');
                _context2.next = 13;
                break;

              case 9:
                _context2.prev = 9;
                _context2.t0 = _context2["catch"](2);
                errorMessage = _this.validateAndGetNotificationMessage(getMuteUserErrorNotification, [message.user]);
                addNotification(errorMessage ? errorMessage : t('Error muting a user ...'), 'error');

              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[2, 9]]);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "handleEdit", function (event) {
      var _this$props3 = _this.props,
          setEditingState = _this$props3.setEditingState,
          message = _this$props3.message;

      if (event !== undefined && event.preventDefault) {
        event.preventDefault();
      }

      setEditingState(message);
    });

    _defineProperty(_assertThisInitialized(_this), "handleDelete", /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3(event) {
        var _this$props4, message, client, updateMessage, data;

        return _regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                event.preventDefault();
                _this$props4 = _this.props, message = _this$props4.message, client = _this$props4.client, updateMessage = _this$props4.updateMessage;
                _context3.next = 4;
                return client.deleteMessage(message.id);

              case 4:
                data = _context3.sent;
                updateMessage(data.message);

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x3) {
        return _ref3.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "handleReaction", /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee4(reactionType, event) {
        var userExistingReaction, currentUser, _iterator, _step, _reaction, originalMessage, reactionChangePromise, messageID, reaction;

        return _regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (event !== undefined && event.preventDefault) {
                  event.preventDefault();
                }

                userExistingReaction = null;
                currentUser = _this.props.client.userID;
                _iterator = _createForOfIteratorHelper$3(_this.props.message.own_reactions);

                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    _reaction = _step.value;

                    // own user should only ever contain the current user id
                    // just in case we check to prevent bugs with message updates from breaking reactions
                    if (currentUser === _reaction.user.id && _reaction.type === reactionType) {
                      userExistingReaction = _reaction;
                    } else if (currentUser !== _reaction.user.id) {
                      console.warn("message.own_reactions contained reactions from a different user, this indicates a bug");
                    }
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }

                originalMessage = _this.props.message;

                /*
                - Add the reaction to the local state
                - Make the API call in the background
                - If it fails, revert to the old message...
                 */
                if (userExistingReaction) {
                  // this.props.channel.state.removeReaction(userExistingReaction);
                  reactionChangePromise = _this.props.channel.deleteReaction(_this.props.message.id, userExistingReaction.type);
                } else {
                  // add the reaction
                  messageID = _this.props.message.id;
                  reaction = {
                    type: reactionType
                  }; // this.props.channel.state.addReaction(tmpReaction, this.props.message);

                  reactionChangePromise = _this.props.channel.sendReaction(messageID, reaction);
                }

                _context4.prev = 7;
                _context4.next = 10;
                return reactionChangePromise;

              case 10:
                _context4.next = 15;
                break;

              case 12:
                _context4.prev = 12;
                _context4.t0 = _context4["catch"](7);

                // revert to the original message if the API call fails
                _this.props.updateMessage(originalMessage);

              case 15:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[7, 12]]);
      }));

      return function (_x4, _x5) {
        return _ref4.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "handleAction", /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee5(name, value, event) {
        var messageID, formData, data;
        return _regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                event.preventDefault();
                messageID = _this.props.message.id;
                formData = {};
                formData[name] = value;
                _context5.next = 6;
                return _this.props.channel.sendAction(messageID, formData);

              case 6:
                data = _context5.sent;

                if (data && data.message) {
                  _this.props.updateMessage(data.message);
                } else {
                  _this.props.removeMessage(_this.props.message);
                }

              case 8:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      return function (_x6, _x7, _x8) {
        return _ref5.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "handleRetry", /*#__PURE__*/function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee6(message) {
        return _regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return _this.props.retrySendMessage(message);

              case 2:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      return function (_x9) {
        return _ref6.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "onMentionsClick", function (e) {
      if (typeof _this.props.onMentionsClick !== 'function') {
        return;
      }

      _this.props.onMentionsClick(e, _this.props.message.mentioned_users);
    });

    _defineProperty(_assertThisInitialized(_this), "onMentionsHover", function (e) {
      var _this$props5 = _this.props,
          onMentionsHover = _this$props5.onMentionsHover,
          message = _this$props5.message;

      if (typeof onMentionsHover !== 'function') {
        return;
      }

      onMentionsHover(e, message.mentioned_users);
    });

    _defineProperty(_assertThisInitialized(_this), "getMessageActions", function () {
      var _this$props6 = _this.props,
          message = _this$props6.message,
          messageActionsProps = _this$props6.messageActions;

      var _this$props$channel$g = _this.props.channel.getConfig(),
          mutes = _this$props$channel$g.mutes;

      var messageActionsAfterPermission = [];
      var messageActions = [];

      if (messageActionsProps && typeof messageActionsProps === 'boolean') {
        // If value of messageActionsProps is true, then populate all the possible values
        messageActions = Object.keys(MESSAGE_ACTIONS);
      } else if (messageActionsProps && messageActionsProps.length > 0) {
        messageActions = _toConsumableArray(messageActionsProps);
      } else {
        return [];
      }

      if (_this.canEditMessage(message) && messageActions.indexOf(MESSAGE_ACTIONS.edit) > -1) {
        messageActionsAfterPermission.push(MESSAGE_ACTIONS.edit);
      }

      if (_this.canDeleteMessage(message) && messageActions.indexOf(MESSAGE_ACTIONS.delete) > -1) {
        messageActionsAfterPermission.push(MESSAGE_ACTIONS.delete);
      }

      if (!_this.isMyMessage(message) && messageActions.indexOf(MESSAGE_ACTIONS.flag) > -1) {
        messageActionsAfterPermission.push(MESSAGE_ACTIONS.flag);
      }

      if (!_this.isMyMessage(message) && messageActions.indexOf(MESSAGE_ACTIONS.mute) > -1 && mutes) {
        messageActionsAfterPermission.push(MESSAGE_ACTIONS.mute);
      }

      return messageActionsAfterPermission;
    });

    _this.state = {
      loading: false
    };
    return _this;
  }

  _createClass(Message, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      // since there are many messages its important to only rerender messages when needed.
      var shouldUpdate = nextProps.message !== this.props.message;


      if (!shouldUpdate && !deepequal(nextProps.readBy, this.props.readBy)) {
        shouldUpdate = true;
      } // group style often changes for the last 3 messages...


      if (!shouldUpdate && !deepequal(nextProps.groupStyles, this.props.groupStyles)) {
        shouldUpdate = true;
      } // if lastreceivedId changesm, message should update.


      if (!shouldUpdate && !deepequal(nextProps.lastReceivedId, this.props.lastReceivedId)) {
        shouldUpdate = true;
      } // editing is the last one which can trigger a change..


      if (!shouldUpdate && nextProps.editing !== this.props.editing) {
        shouldUpdate = true;
      } // editing is the last one which can trigger a change..


      if (!shouldUpdate && nextProps.messageListRect !== this.props.messageListRect) {
        shouldUpdate = true;
      }

      return shouldUpdate;
    }
  }, {
    key: "render",
    value: function render() {
      var config = this.props.channel.getConfig();
      var message = this.props.message;
      var actionsEnabled = message.type === 'regular' && message.status === 'received';
      var Component = this.props.Message;
      return /*#__PURE__*/React__default.createElement(Component, _extends({}, this.props, {
        actionsEnabled: actionsEnabled,
        Message: this,
        Avatar: Avatar,
        handleReaction: this.handleReaction,
        getMessageActions: this.getMessageActions,
        handleFlag: this.handleFlag,
        handleMute: this.handleMute,
        handleAction: this.handleAction,
        handleDelete: this.handleDelete,
        handleEdit: this.handleEdit,
        handleRetry: this.handleRetry,
        handleOpenThread: this.props.openThread && this.props.openThread.bind(this, message),
        isMyMessage: this.isMyMessage,
        channelConfig: config,
        onMentionsClickMessage: this.onMentionsClick,
        onMentionsHoverMessage: this.onMentionsHover
      }));
    }
  }]);

  return Message;
}(Component);

_defineProperty(Message, "propTypes", {
  /** The message object */
  message: PropTypes.object.isRequired,

  /** The client connection object for connecting to Stream */
  client: PropTypes.object.isRequired,

  /** The current channel this message is displayed in */
  channel: PropTypes.object.isRequired,

  /** A list of users that have read this message **/
  readBy: PropTypes.array,

  /** groupStyles, a list of styles to apply to this message. ie. top, bottom, single etc */
  groupStyles: PropTypes.array,

  /** Editing, if the message is currently being edited */
  editing: PropTypes.bool,

  /**
   * Message UI component to display a message in message list.
   * Available from [channel context](https://getstream.github.io/stream-chat-react/#channelcontext)
   * */
  Message: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),

  /**
   * Attachment UI component to display attachment in individual message.
   * Available from [channel context](https://getstream.github.io/stream-chat-react/#channelcontext)
   * */
  Attachment: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),

  /** Avatar */
  Avatar: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),

  /** render HTML instead of markdown. Posting HTML is only allowed server-side */
  unsafeHTML: PropTypes.bool,

  /**
   * Array of allowed actions on message. e.g. ['edit', 'delete', 'mute', 'flag']
   * If all the actions need to be disabled, empty array or false should be provided as value of prop.
   * */
  messageActions: PropTypes.oneOfType([PropTypes.bool, PropTypes.array]),

  /**
   * Function that returns message/text as string to be shown as notification, when request for flagging a message is successful
   *
   * This function should accept following params:
   *
   * @param message A [message object](https://getstream.io/chat/docs/#message_format) which is flagged.
   *
   * */
  getFlagMessageSuccessNotification: PropTypes.func,

  /**
   * Function that returns message/text as string to be shown as notification, when request for flagging a message runs into error
   *
   * This function should accept following params:
   *
   * @param message A [message object](https://getstream.io/chat/docs/#message_format) which is flagged.
   *
   * */
  getFlagMessageErrorNotification: PropTypes.func,

  /**
   * Function that returns message/text as string to be shown as notification, when request for muting a user is successful
   *
   * This function should accept following params:
   *
   * @param user A user object which is being muted
   *
   * */
  getMuteUserSuccessNotification: PropTypes.func,

  /**
   * Function that returns message/text as string to be shown as notification, when request for muting a user runs into error
   *
   * This function should accept following params:
   *
   * @param user A user object which is being muted
   *
   * */
  getMuteUserErrorNotification: PropTypes.func,

  /** Latest message id on current channel */
  lastReceivedId: PropTypes.string,

  /** DOMRect object for parent MessageList component */
  messageListRect: PropTypes.object,

  /** @see See [Channel Context](https://getstream.github.io/stream-chat-react/#channelcontext) */
  members: PropTypes.object,

  /**
   * Function to add custom notification on messagelist
   *
   * @param text Notification text to display
   * @param type Type of notification. 'success' | 'error'
   * */
  addNotification: PropTypes.func,

  /** Sets the editing state */
  setEditingState: PropTypes.func,

  /** @see See [Channel Context](https://getstream.github.io/stream-chat-react/#channelcontext) */
  updateMessage: PropTypes.func,

  /** @see See [Channel Context](https://getstream.github.io/stream-chat-react/#channelcontext) */
  removeMessage: PropTypes.func,

  /** @see See [Channel Context](https://getstream.github.io/stream-chat-react/#channelcontext) */
  retrySendMessage: PropTypes.func,

  /** @see See [Channel Context](https://getstream.github.io/stream-chat-react/#channelcontext) */
  onMentionsClick: PropTypes.func,

  /** @see See [Channel Context](https://getstream.github.io/stream-chat-react/#channelcontext) */
  onMentionsHover: PropTypes.func,

  /** @see See [Channel Context](https://getstream.github.io/stream-chat-react/#channelcontext) */
  openThread: PropTypes.func,

  /** Handler to clear the edit state of message. It is defined in [MessageList](https://getstream.github.io/stream-chat-react/#messagelist) component */
  clearEditingState: PropTypes.func,

  /**
   * Additional props for underlying MessageInput component.
   * Available props - https://getstream.github.io/stream-chat-react/#messageinput
   * */
  additionalMessageInputProps: PropTypes.object
});

_defineProperty(Message, "defaultProps", {
  Message: MessageSimple,
  readBy: [],
  groupStyles: [],
  Attachment: Attachment,
  Avatar: Avatar,
  editing: false,
  messageActions: Object.keys(MESSAGE_ACTIONS)
});

Message = withTranslationContext(Message);

function _createSuper$L(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$L(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$L() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var MessageActions = /*#__PURE__*/function (_PureComponent) {
  _inherits(MessageActions, _PureComponent);

  var _super = _createSuper$L(MessageActions);

  function MessageActions(props) {
    var _this;

    _classCallCheck(this, MessageActions);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "_openActionBox", function () {
      _this.setState({
        actionBox: true
      }, function () {
        document.addEventListener('click', _this._closeActionBox);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "_closeActionBox", function () {
      _this.setState({
        actionBox: false
      }, function () {
        document.removeEventListener('click', _this._closeActionBox);
      });
    });

    _this.state = {
      actionBox: false,
      reactionBox: false
    };
    _this.reactionsBox = React__default.createRef();
    _this.actionsRef = React__default.createRef();
    return _this;
  }

  _createClass(MessageActions, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('click', this._closeActionBox);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/React__default.createElement("div", {
        ref: this.actionsRef,
        className: "str-chat__message-actions"
      }, /*#__PURE__*/React__default.createElement("div", {
        className: "str-chat__message-actions-reactions",
        onClick: this.props.onClickReact
      }, /*#__PURE__*/React__default.createElement("svg", {
        width: "20",
        height: "18",
        viewBox: "0 0 20 18",
        xmlns: "http://www.w3.org/2000/svg"
      }, /*#__PURE__*/React__default.createElement("path", {
        d: "M16.5 4.5H15a.5.5 0 1 1 0-1h1.5V2a.5.5 0 1 1 1 0v1.5H19a.5.5 0 1 1 0 1h-1.5V6a.5.5 0 1 1-1 0V4.5zM9 13c-1.773 0-3.297-.82-4-2h8c-.703 1.18-2.227 2-4 2zm4.057-11.468a.5.5 0 1 1-.479.878A7.45 7.45 0 0 0 9 1.5C4.865 1.5 1.5 4.865 1.5 9s3.365 7.5 7.5 7.5 7.5-3.365 7.5-7.5c0-.315-.02-.628-.058-.937a.5.5 0 1 1 .992-.124c.044.35.066.704.066 1.06 0 4.688-3.813 8.501-8.5 8.501C4.313 17.5.5 13.687.5 9 .5 4.312 4.313.5 9 .5a8.45 8.45 0 0 1 4.057 1.032zM7.561 5.44a1.5 1.5 0 1 1-2.123 2.122 1.5 1.5 0 0 1 2.123-2.122zm5 0a1.5 1.5 0 1 1-2.122 2.122 1.5 1.5 0 0 1 2.122-2.122z",
        fillRule: "evenodd"
      }))), /*#__PURE__*/React__default.createElement("div", {
        className: "str-chat__message-actions-options",
        onClick: function onClick() {
          return _this2._openActionBox();
        }
      }, /*#__PURE__*/React__default.createElement("svg", {
        width: "11",
        height: "3",
        viewBox: "0 0 11 3",
        xmlns: "http://www.w3.org/2000/svg"
      }, /*#__PURE__*/React__default.createElement("path", {
        d: "M1.5 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm4 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm4 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z",
        fillRule: "nonzero"
      }))), /*#__PURE__*/React__default.createElement(MessageActionsBox, _extends({}, this.props, {
        open: this.state.actionBox
      })));
    }
  }]);

  return MessageActions;
}(PureComponent);

_defineProperty(MessageActions, "propTypes", {
  onClickReact: PropTypes.func,

  /** If the message actions box should be open or not */
  open: PropTypes.bool.isRequired,

  /**
   * @deprecated
   *
   *  The message component, most logic is delegated to this component and MessageActionsBox uses the following functions explicitly:
   *  `handleFlag`, `handleMute`, `handleEdit`, `handleDelete`, `canDeleteMessage`, `canEditMessage`, `isMyMessage`, `isAdmin`
   */
  Message: PropTypes.oneOfType([PropTypes.node, PropTypes.func, PropTypes.object]).isRequired,

  /** If message belongs to current user. */
  mine: PropTypes.bool,

  /** DOMRect object for parent MessageList component */
  messageListRect: PropTypes.object,

  /**
   * Handler for flaging a current message
   *
   * @param event React's MouseEventHandler event
   * @returns void
   * */
  handleFlag: PropTypes.func,

  /**
   * Handler for muting a current message
   *
   * @param event React's MouseEventHandler event
   * @returns void
   * */
  handleMute: PropTypes.func,

  /**
   * Handler for editing a current message
   *
   * @param event React's MouseEventHandler event
   * @returns void
   * */
  handleEdit: PropTypes.func,

  /**
   * Handler for deleting a current message
   *
   * @param event React's MouseEventHandler event
   * @returns void
   * */
  handleDelete: PropTypes.func,

  /**
   * Returns array of avalable message actions for current message.
   * Please check [Message](https://github.com/GetStream/stream-chat-react/blob/master/src/components/Message.js) component for default implementation.
   */
  getMessageActions: PropTypes.func
});

MessageActions.propTypes = {
  Message: PropTypes.object.isRequired
};

function _createSuper$M(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$M(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$M() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
/**
 * MessageCommerce - Render component, should be used together with the Message component
 *
 * @example ./docs/MessageSimple.md
 * @extends PureComponent
 */

var MessageCommerce = /*#__PURE__*/function (_PureComponent) {
  _inherits(MessageCommerce, _PureComponent);

  var _super = _createSuper$M(MessageCommerce);

  function MessageCommerce() {
    var _this;

    _classCallCheck(this, MessageCommerce);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isFocused: false,
      actionsBoxOpen: false,
      showDetailedReactions: false
    });

    _defineProperty(_assertThisInitialized(_this), "messageActionsRef", React__default.createRef());

    _defineProperty(_assertThisInitialized(_this), "reactionSelectorRef", React__default.createRef());

    _defineProperty(_assertThisInitialized(_this), "_onClickOptionsAction", function () {
      _this.setState({
        actionsBoxOpen: true
      }, function () {
        return document.addEventListener('click', _this.hideOptions, false);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "_hideOptions", function () {
      _this.setState({
        actionsBoxOpen: false
      });

      document.removeEventListener('click', _this.hideOptions, false);
    });

    _defineProperty(_assertThisInitialized(_this), "_clickReactionList", function () {
      _this.setState(function () {
        return {
          showDetailedReactions: true
        };
      }, function () {
        document.addEventListener('click', _this._closeDetailedReactions);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "_closeDetailedReactions", function (e) {
      if (!_this.reactionSelectorRef.current.reactionSelector.current.contains(e.target)) {
        _this.setState(function () {
          return {
            showDetailedReactions: false
          };
        }, function () {
          document.removeEventListener('click', _this._closeDetailedReactions);
        });
      } else {
        return {};
      }
    });

    return _this;
  }

  _createClass(MessageCommerce, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (!this.props.message.deleted_at) {
        document.removeEventListener('click', this._closeDetailedReactions);
      }
    }
  }, {
    key: "isMine",
    value: function isMine() {
      return !this.props.isMyMessage(this.props.message);
    }
  }, {
    key: "renderOptions",
    value: function renderOptions() {
      if (this.props.message.type === 'error' || this.props.message.type === 'system' || this.props.message.type === 'ephemeral' || this.props.message.status === 'sending' || this.props.message.status === 'failed' || !this.props.channelConfig.reactions || this.props.initialMessage) {
        return;
      }

      return /*#__PURE__*/React__default.createElement("div", {
        className: "str-chat__message-commerce__actions"
      }, /*#__PURE__*/React__default.createElement("div", {
        className: "str-chat__message-commerce__actions__action str-chat__message-commerce__actions__action--reactions",
        onClick: this._clickReactionList
      }, /*#__PURE__*/React__default.createElement("svg", {
        width: "14",
        height: "14",
        xmlns: "http://www.w3.org/2000/svg"
      }, /*#__PURE__*/React__default.createElement("path", {
        d: "M11.108 8.05a.496.496 0 0 1 .212.667C10.581 10.147 8.886 11 7 11c-1.933 0-3.673-.882-4.33-2.302a.497.497 0 0 1 .9-.417C4.068 9.357 5.446 10 7 10c1.519 0 2.869-.633 3.44-1.738a.495.495 0 0 1 .668-.212zm.792-1.826a.477.477 0 0 1-.119.692.541.541 0 0 1-.31.084.534.534 0 0 1-.428-.194c-.106-.138-.238-.306-.539-.306-.298 0-.431.168-.54.307A.534.534 0 0 1 9.538 7a.544.544 0 0 1-.31-.084.463.463 0 0 1-.117-.694c.33-.423.742-.722 1.394-.722.653 0 1.068.3 1.396.724zm-7 0a.477.477 0 0 1-.119.692.541.541 0 0 1-.31.084.534.534 0 0 1-.428-.194c-.106-.138-.238-.306-.539-.306-.299 0-.432.168-.54.307A.533.533 0 0 1 2.538 7a.544.544 0 0 1-.31-.084.463.463 0 0 1-.117-.694c.33-.423.742-.722 1.394-.722.653 0 1.068.3 1.396.724zM7 0a7 7 0 1 1 0 14A7 7 0 0 1 7 0zm4.243 11.243A5.96 5.96 0 0 0 13 7a5.96 5.96 0 0 0-1.757-4.243A5.96 5.96 0 0 0 7 1a5.96 5.96 0 0 0-4.243 1.757A5.96 5.96 0 0 0 1 7a5.96 5.96 0 0 0 1.757 4.243A5.96 5.96 0 0 0 7 13a5.96 5.96 0 0 0 4.243-1.757z",
        fillRule: "evenodd"
      }))));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          message = _this$props.message,
          groupStyles = _this$props.groupStyles,
          Attachment = _this$props.Attachment,
          handleReaction = _this$props.handleReaction,
          handleAction = _this$props.handleAction,
          actionsEnabled = _this$props.actionsEnabled,
          onMentionsHoverMessage = _this$props.onMentionsHoverMessage,
          onMentionsClickMessage = _this$props.onMentionsClickMessage,
          unsafeHTML = _this$props.unsafeHTML,
          threadList = _this$props.threadList,
          handleOpenThread = _this$props.handleOpenThread,
          t = _this$props.t,
          tDateTimeParser = _this$props.tDateTimeParser;
      var when = tDateTimeParser(message.created_at).format('LT');
      var messageClasses = this.isMine() ? 'str-chat__message-commerce str-chat__message-commerce--left' : 'str-chat__message-commerce str-chat__message-commerce--right';
      var hasAttachment = Boolean(message.attachments && message.attachments.length);
      var images = hasAttachment && message.attachments.filter(function (item) {
        return item.type === 'image';
      });
      var hasReactions = Boolean(message.latest_reactions && message.latest_reactions.length);

      if (message.type === 'message.read' || message.deleted_at || message.type === 'message.date') {
        return null;
      }

      if (message.deleted_at) {
        return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("span", {
          key: message.id,
          className: "".concat(messageClasses, " str-chat__message--deleted")
        }, t('This message was deleted...')), /*#__PURE__*/React__default.createElement("div", {
          className: "clearfix"
        }));
      }

      return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("div", {
        key: message.id,
        className: "\n\t\t\t\t\t\t".concat(messageClasses, "\n\t\t\t\t\t\tstr-chat__message-commerce--").concat(message.type, "\n\t\t\t\t\t\t").concat(message.text ? 'str-chat__message-commerce--has-text' : 'str-chat__message-commerce--has-no-text', "\n\t\t\t\t\t\t").concat(hasAttachment ? 'str-chat__message-commerce--has-attachment' : '', "\n\t\t\t\t\t\t").concat(hasReactions ? 'str-chat__message-commerce--with-reactions' : '', "\n\t\t\t\t\t\t", "str-chat__message-commerce--".concat(groupStyles[0]), "\n\t\t\t\t\t").trim(),
        onMouseLeave: this._hideOptions,
        ref: this.messageRef
      }, (groupStyles[0] === 'bottom' || groupStyles[0] === 'single') && /*#__PURE__*/React__default.createElement(Avatar, {
        image: message.user.image,
        size: 32,
        name: message.user.name || message.user.id
      }), /*#__PURE__*/React__default.createElement("div", {
        className: "str-chat__message-commerce-inner"
      }, !message.text && /*#__PURE__*/React__default.createElement(React__default.Fragment, null, this.renderOptions(), hasReactions && !this.state.showDetailedReactions && /*#__PURE__*/React__default.createElement(ReactionsList, {
        reactions: message.latest_reactions,
        reaction_counts: message.reaction_counts,
        onClick: this._clickReactionList
      }), this.state.showDetailedReactions && /*#__PURE__*/React__default.createElement(ReactionSelector, {
        reverse: false,
        handleReaction: handleReaction,
        actionsEnabled: actionsEnabled,
        detailedView: true,
        reaction_counts: message.reaction_counts,
        latest_reactions: message.latest_reactions,
        ref: this.reactionSelectorRef
      })), hasAttachment && images.length <= 1 && message.attachments.map(function (attachment, index) {
        return /*#__PURE__*/React__default.createElement(Attachment, {
          key: "".concat(message.id, "-").concat(index),
          attachment: attachment,
          actionHandler: handleAction
        });
      }), images.length > 1 && /*#__PURE__*/React__default.createElement(Gallery, {
        images: images
      }), message.text && /*#__PURE__*/React__default.createElement("div", {
        className: "str-chat__message-commerce-text"
      }, /*#__PURE__*/React__default.createElement("div", {
        className: "str-chat__message-commerce-text-inner\n\t\t\t\t\t\t\t\t\t".concat(hasAttachment ? 'str-chat__message-commerce-text-inner--has-attachment' : '', "\n\t\t\t\t\t\t\t\t\t").concat(isOnlyEmojis(message.text) ? 'str-chat__message-commerce-text-inner--is-emoji' : '', "\n                ").trim(),
        onMouseOver: onMentionsHoverMessage,
        onClick: onMentionsClickMessage
      }, message.type === 'error' && /*#__PURE__*/React__default.createElement("div", {
        className: "str-chat__commerce-message--error-message"
      }, t('Error · Unsent')), unsafeHTML ? /*#__PURE__*/React__default.createElement("div", {
        dangerouslySetInnerHTML: {
          __html: message.html
        }
      }) : renderText(message), hasReactions && !this.state.showDetailedReactions && /*#__PURE__*/React__default.createElement(ReactionsList, {
        reverse: true,
        reactions: message.latest_reactions,
        reaction_counts: message.reaction_counts,
        onClick: this._clickReactionList
      }), this.state.showDetailedReactions && /*#__PURE__*/React__default.createElement(ReactionSelector, {
        reverse: false,
        handleReaction: handleReaction,
        actionsEnabled: actionsEnabled,
        detailedView: true,
        reaction_counts: message.reaction_counts,
        latest_reactions: message.latest_reactions,
        ref: this.reactionSelectorRef
      })), message.text && this.renderOptions()), !threadList && /*#__PURE__*/React__default.createElement("div", {
        className: "str-chat__message-commerce-reply-button"
      }, /*#__PURE__*/React__default.createElement(MessageRepliesCountButton, {
        onClick: handleOpenThread,
        reply_count: message.reply_count
      })), /*#__PURE__*/React__default.createElement("div", {
        className: "str-chat__message-commerce-data"
      }, this.isMine() ? /*#__PURE__*/React__default.createElement("span", {
        className: "str-chat__message-commerce-name"
      }, message.user.name || message.user.id) : null, /*#__PURE__*/React__default.createElement("span", {
        className: "str-chat__message-commerce-timestamp"
      }, when)))));
    }
  }]);

  return MessageCommerce;
}(PureComponent);

_defineProperty(MessageCommerce, "propTypes", {
  /** The [message object](https://getstream.io/chat/docs/#message_format) */
  message: PropTypes.object,

  /**
   * The attachment UI component.
   * Default: [Attachment](https://github.com/GetStream/stream-chat-react/blob/master/src/components/Attachment.js)
   * */
  Attachment: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),

  /**
   *
   * @deprecated Its not recommended to use this anymore. All the methods in this HOC are provided explicitly.
   *
   * The higher order message component, most logic is delegated to this component
   * @see See [Message HOC](https://getstream.github.io/stream-chat-react/#message) for example
   *
   * */
  Message: PropTypes.oneOfType([PropTypes.node, PropTypes.func, PropTypes.object]).isRequired,

  /** render HTML instead of markdown. Posting HTML is only allowed server-side */
  unsafeHTML: PropTypes.bool,

  /** If its parent message in thread. */
  initialMessage: PropTypes.bool,

  /** Channel config object */
  channelConfig: PropTypes.object,

  /** If component is in thread list */
  threadList: PropTypes.bool,

  /** Function to open thread on current messxage */
  handleOpenThread: PropTypes.func,

  /** Returns true if message belongs to current user */
  isMyMessage: PropTypes.func,

  /** Returns all allowed actions on message by current user e.g., [edit, delete, flag, mute] */
  getMessageActions: PropTypes.func,

  /**
   * Add or remove reaction on message
   *
   * @param type Type of reaction - 'like' | 'love' | 'haha' | 'wow' | 'sad' | 'angry'
   * @param event Dom event which triggered this function
   */
  handleReaction: PropTypes.func,

  /** If actions such as edit, delete, flag, mute are enabled on message */
  actionsEnabled: PropTypes.bool,

  /**
   * Handler for actions. Actions in combination with attachments can be used to build [commands](https://getstream.io/chat/docs/#channel_commands).
   *
   * @param name {string} Name of action
   * @param value {string} Value of action
   * @param event Dom event that triggered this handler
   */
  handleAction: PropTypes.func,

  /**
   * The handler for hover event on @mention in message
   *
   * @param event Dom hover event which triggered handler.
   * @param user Target user object
   */
  onMentionsHoverMessage: PropTypes.func,

  /**
   * The handler for click event on @mention in message
   *
   * @param event Dom click event which triggered handler.
   * @param user Target user object
   */
  onMentionsClickMessage: PropTypes.func,

  /** Position of message in group. Possible values: top, bottom, middle, single */
  groupStyles: PropTypes.array
});

_defineProperty(MessageCommerce, "defaultProps", {
  Attachment: Attachment
});

MessageCommerce = withTranslationContext(MessageCommerce);

function _createSuper$N(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$N(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$N() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
/**
 * MessageInputFlat - Large Message Input to be used for the MessageInput.
 * @example ./docs/MessageInputFlat.md
 */

var MessageInputFlat = /*#__PURE__*/function (_PureComponent) {
  _inherits(MessageInputFlat, _PureComponent);

  var _super = _createSuper$N(MessageInputFlat);

  function MessageInputFlat() {
    var _this;

    _classCallCheck(this, MessageInputFlat);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "renderUploads", function () {
      return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, _this.props.imageOrder.length > 0 && /*#__PURE__*/React__default.createElement(ImagePreviewer, {
        imageUploads: _this.props.imageOrder.map(function (id) {
          return _this.props.imageUploads[id];
        }),
        handleRemove: _this.props.removeImage,
        handleRetry: _this.props.uploadImage,
        handleFiles: _this.props.uploadNewFiles,
        multiple: _this.props.multipleUploads,
        disabled: _this.props.numberOfUploads >= _this.props.maxNumberOfFiles
      }), _this.props.fileOrder.length > 0 && /*#__PURE__*/React__default.createElement("div", {
        className: "str-chat__file-uploads"
      }, /*#__PURE__*/React__default.createElement(FilePreviewer, {
        uploads: _this.props.fileOrder.map(function (id) {
          return _this.props.fileUploads[id];
        }),
        handleRemove: _this.props.removeFile,
        handleRetry: _this.props.uploadFile,
        handleFiles: _this.props.uploadNewFiles
      })));
    });

    _defineProperty(_assertThisInitialized(_this), "renderEmojiPicker", function () {
      if (_this.props.emojiPickerIsOpen) {
        return /*#__PURE__*/React__default.createElement("div", {
          className: "str-chat__input-flat--emojipicker",
          ref: _this.props.emojiPickerRef
        }, /*#__PURE__*/React__default.createElement(Picker, {
          native: true,
          emoji: "point_up",
          title: "Pick your emoji\u2026",
          onSelect: _this.props.onSelectEmoji,
          color: "#006CFF",
          showPreview: false,
          emojisToShowFilter: filterEmoji
        }));
      }
    });

    return _this;
  }

  _createClass(MessageInputFlat, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var t = this.props.t;
      var SendButton = this.props.SendButton;
      return /*#__PURE__*/React__default.createElement("div", {
        className: "str-chat__input-flat ".concat(SendButton ? 'str-chat__input-flat--send-button-active' : null)
      }, /*#__PURE__*/React__default.createElement(ImageDropzone, {
        accept: this.props.acceptedFiles,
        multiple: this.props.multipleUploads,
        disabled: this.props.numberOfUploads >= this.props.maxNumberOfFiles,
        handleFiles: this.props.uploadNewFiles
      }, /*#__PURE__*/React__default.createElement("div", {
        className: "str-chat__input-flat-wrapper"
      }, this.renderUploads(), this.renderEmojiPicker(), /*#__PURE__*/React__default.createElement("div", {
        className: "str-chat__input-flat--textarea-wrapper"
      }, /*#__PURE__*/React__default.createElement(ChatAutoComplete, {
        users: this.props.getUsers(),
        commands: this.props.getCommands(),
        innerRef: this.props.textareaRef,
        handleSubmit: function handleSubmit(e) {
          return _this2.props.handleSubmit(e);
        },
        onSelectItem: this.props.onSelectItem,
        onChange: this.props.handleChange,
        value: this.props.text,
        rows: 1,
        maxRows: this.props.maxRows,
        placeholder: t('Type your message'),
        onPaste: this.props.onPaste,
        grow: this.props.grow,
        onFocus: this.props.onFocus,
        disabled: this.props.disabled,
        additionalTextareaProps: this.props.additionalTextareaProps
      }), /*#__PURE__*/React__default.createElement("span", {
        className: "str-chat__input-flat-emojiselect",
        onClick: this.props.openEmojiPicker
      }, /*#__PURE__*/React__default.createElement("svg", {
        width: "28",
        height: "28",
        xmlns: "http://www.w3.org/2000/svg"
      }, /*#__PURE__*/React__default.createElement("path", {
        d: "M22.217 16.1c.483.25.674.849.423 1.334C21.163 20.294 17.771 22 14 22c-3.867 0-7.347-1.765-8.66-4.605a.994.994 0 0 1 .9-1.407c.385 0 .739.225.9.575C8.135 18.715 10.892 20 14 20c3.038 0 5.738-1.267 6.879-3.476a.99.99 0 0 1 1.338-.424zm1.583-3.652c.341.443.235 1.064-.237 1.384a1.082 1.082 0 0 1-.62.168c-.338 0-.659-.132-.858-.389-.212-.276-.476-.611-1.076-.611-.598 0-.864.337-1.08.614-.197.254-.517.386-.854.386-.224 0-.438-.045-.62-.167-.517-.349-.578-.947-.235-1.388.66-.847 1.483-1.445 2.789-1.445 1.305 0 2.136.6 2.79 1.448zm-14 0c.341.443.235 1.064-.237 1.384a1.082 1.082 0 0 1-.62.168c-.339 0-.659-.132-.858-.389C7.873 13.335 7.61 13 7.01 13c-.598 0-.864.337-1.08.614-.197.254-.517.386-.854.386-.224 0-.438-.045-.62-.167-.518-.349-.579-.947-.235-1.388C4.88 11.598 5.703 11 7.01 11c1.305 0 2.136.6 2.79 1.448zM14 0c7.732 0 14 6.268 14 14s-6.268 14-14 14S0 21.732 0 14 6.268 0 14 0zm8.485 22.485A11.922 11.922 0 0 0 26 14c0-3.205-1.248-6.219-3.515-8.485A11.922 11.922 0 0 0 14 2a11.922 11.922 0 0 0-8.485 3.515A11.922 11.922 0 0 0 2 14c0 3.205 1.248 6.219 3.515 8.485A11.922 11.922 0 0 0 14 26c3.205 0 6.219-1.248 8.485-3.515z",
        fillRule: "evenodd"
      }))), /*#__PURE__*/React__default.createElement(FileUploadButton, {
        multiple: this.props.multipleUploads,
        disabled: this.props.numberOfUploads >= this.props.maxNumberOfFiles,
        accepts: this.props.acceptedFiles,
        handleFiles: this.props.uploadNewFiles
      }, /*#__PURE__*/React__default.createElement("span", {
        className: "str-chat__input-flat-fileupload"
      }, /*#__PURE__*/React__default.createElement("svg", {
        width: "14",
        height: "14",
        xmlns: "http://www.w3.org/2000/svg"
      }, /*#__PURE__*/React__default.createElement("path", {
        d: "M1.667.333h10.666c.737 0 1.334.597 1.334 1.334v10.666c0 .737-.597 1.334-1.334 1.334H1.667a1.333 1.333 0 0 1-1.334-1.334V1.667C.333.93.93.333 1.667.333zm2 1.334a1.667 1.667 0 1 0 0 3.333 1.667 1.667 0 0 0 0-3.333zm-2 9.333v1.333h10.666v-4l-2-2-4 4-2-2L1.667 11z",
        fillRule: "nonzero"
      })))), SendButton && /*#__PURE__*/React__default.createElement(SendButton, {
        sendMessage: this.props.handleSubmit
      })))));
    }
  }]);

  return MessageInputFlat;
}(PureComponent);

_defineProperty(MessageInputFlat, "propTypes", {
  /** Set focus to the text input if this is enabled */
  focus: PropTypes.bool,

  /** Grow the textarea while you're typing */
  grow: PropTypes.bool,

  /** Disable the textarea */
  disabled: PropTypes.bool,

  /** @see See [MessageInput](https://getstream.github.io/stream-chat-react/#messageinput) for doc */
  imageOrder: PropTypes.array,

  /** @see See [MessageInput](https://getstream.github.io/stream-chat-react/#messageinput) for doc */
  imageUploads: PropTypes.object,

  /** @see See [MessageInput](https://getstream.github.io/stream-chat-react/#messageinput) for doc */
  removeImage: PropTypes.func,

  /** @see See [MessageInput](https://getstream.github.io/stream-chat-react/#messageinput) for doc */
  uploadImage: PropTypes.func,

  /** @see See [MessageInput](https://getstream.github.io/stream-chat-react/#messageinput) for doc */
  uploadNewFiles: PropTypes.func,

  /** @see See [MessageInput](https://getstream.github.io/stream-chat-react/#messageinput) for doc */
  numberOfUploads: PropTypes.number,

  /** @see See [MessageInput](https://getstream.github.io/stream-chat-react/#messageinput) for doc */
  fileOrder: PropTypes.array,

  /** @see See [MessageInput](https://getstream.github.io/stream-chat-react/#messageinput) for doc */
  fileUploads: PropTypes.object,

  /** @see See [MessageInput](https://getstream.github.io/stream-chat-react/#messageinput) for doc */
  removeFile: PropTypes.func,

  /** @see See [MessageInput](https://getstream.github.io/stream-chat-react/#messageinput) for doc */
  uploadFile: PropTypes.func,

  /** @see See [MessageInput](https://getstream.github.io/stream-chat-react/#messageinput) for doc */
  emojiPickerIsOpen: PropTypes.bool,

  /** @see See [MessageInput](https://getstream.github.io/stream-chat-react/#messageinput) for doc */
  emojiPickerRef: PropTypes.object,

  /** @see See [MessageInput](https://getstream.github.io/stream-chat-react/#messageinput) for doc */
  onSelectEmoji: PropTypes.func,

  /** @see See [MessageInput](https://getstream.github.io/stream-chat-react/#messageinput) for doc */
  getUsers: PropTypes.func,

  /** @see See [MessageInput](https://getstream.github.io/stream-chat-react/#messageinput) for doc */
  getCommands: PropTypes.func,

  /** @see See [MessageInput](https://getstream.github.io/stream-chat-react/#messageinput) for doc */
  textareaRef: PropTypes.object,

  /** @see See [MessageInput](https://getstream.github.io/stream-chat-react/#messageinput) for doc */
  handleSubmit: PropTypes.func,

  /** @see See [MessageInput](https://getstream.github.io/stream-chat-react/#messageinput) for doc */
  handleChange: PropTypes.func,

  /** @see See [MessageInput](https://getstream.github.io/stream-chat-react/#messageinput) for doc */
  onSelectItem: PropTypes.func,

  /** @see See [MessageInput](https://getstream.github.io/stream-chat-react/#messageinput) for doc */
  text: PropTypes.string,

  /** @see See [MessageInput](https://getstream.github.io/stream-chat-react/#messageinput) for doc */
  onPaste: PropTypes.func,

  /** @see See [MessageInput](https://getstream.github.io/stream-chat-react/#messageinput) for doc */
  openEmojiPicker: PropTypes.func,

  /** @see See [channel context](https://getstream.github.io/stream-chat-react/#channel) doc */
  watcher_count: PropTypes.number,

  /** @see See [channel context](https://getstream.github.io/stream-chat-react/#channel) doc */
  typing: PropTypes.object,

  /** @see See [channel context](https://getstream.github.io/stream-chat-react/#channel) doc */
  multipleUploads: PropTypes.object,

  /** @see See [channel context](https://getstream.github.io/stream-chat-react/#channel) doc */
  maxNumberOfFiles: PropTypes.number,

  /** @see See [channel context](https://getstream.github.io/stream-chat-react/#channel) doc */
  acceptedFiles: PropTypes.object,

  /**
   * Custom UI component for send button.
   *
   * Defaults to and accepts same props as: [SendButton](https://getstream.github.io/stream-chat-react/#sendbutton)
   * */
  SendButton: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),

  /**
   * Any additional attrubutes that you may want to add for underlying HTML textarea element.
   */
  additionalTextareaProps: PropTypes.object
});

_defineProperty(MessageInputFlat, "defaultProps", {
  grow: true,
  disabled: false
});

var MessageInputFlatWithContext = withTranslationContext(MessageInputFlat);

function _createSuper$O(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$O(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$O() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
/**
 * MessageInputSmall - compact design to be used for the MessageInput. It has all the features of MessageInput minus the typing indicator.
 * @example ./docs/MessageInputSmall.md
 */

var MessageInputSmall = /*#__PURE__*/function (_PureComponent) {
  _inherits(MessageInputSmall, _PureComponent);

  var _super = _createSuper$O(MessageInputSmall);

  function MessageInputSmall() {
    var _this;

    _classCallCheck(this, MessageInputSmall);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "renderUploads", function () {
      return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, _this.props.imageOrder.length > 0 && /*#__PURE__*/React__default.createElement(ImagePreviewer, {
        imageUploads: _this.props.imageOrder.map(function (id) {
          return _this.props.imageUploads[id];
        }),
        handleRemove: _this.props.removeImage,
        handleRetry: _this.props.uploadImage,
        handleFiles: _this.props.uploadNewFiles,
        multiple: _this.props.multipleUploads,
        disabled: _this.props.numberOfUploads >= _this.props.maxNumberOfFiles ? true : false
      }), _this.props.fileOrder.length > 0 && /*#__PURE__*/React__default.createElement(FilePreviewer, {
        uploads: _this.props.fileOrder.map(function (id) {
          return _this.props.fileUploads[id];
        }),
        handleRemove: _this.props.removeFile,
        handleRetry: _this.props.uploadFile,
        handleFiles: _this.props.uploadNewFiles
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "renderEmojiPicker", function () {
      if (_this.props.emojiPickerIsOpen) {
        return /*#__PURE__*/React__default.createElement("div", {
          className: "str-chat__small-message-input-emojipicker",
          ref: _this.props.emojiPickerRef
        }, /*#__PURE__*/React__default.createElement(Picker, {
          native: true,
          emoji: "point_up",
          title: "Pick your emoji\u2026",
          onSelect: _this.props.onSelectEmoji,
          color: "#006CFF",
          showPreview: false,
          emojisToShowFilter: filterEmoji
        }));
      }
    });

    return _this;
  }

  _createClass(MessageInputSmall, [{
    key: "render",
    value: function render() {
      var t = this.props.t;
      var SendButton = this.props.SendButton;
      return /*#__PURE__*/React__default.createElement("div", {
        className: "str-chat__small-message-input__wrapper"
      }, /*#__PURE__*/React__default.createElement(ImageDropzone, {
        accept: this.props.acceptedFiles,
        multiple: this.props.multipleUploads,
        disabled: this.props.numberOfUploads >= this.props.maxNumberOfFiles ? true : false,
        handleFiles: this.props.uploadNewFiles
      }, /*#__PURE__*/React__default.createElement("div", {
        className: "str-chat__small-message-input ".concat(SendButton ? 'str-chat__small-message-input--send-button-active' : null)
      }, this.renderUploads(), this.renderEmojiPicker(), /*#__PURE__*/React__default.createElement("div", {
        className: "str-chat__small-message-input--textarea-wrapper"
      }, /*#__PURE__*/React__default.createElement(ChatAutoComplete, {
        users: this.props.getUsers(),
        commands: this.props.getCommands(),
        innerRef: this.props.textareaRef,
        handleSubmit: this.props.handleSubmit,
        onChange: this.props.handleChange,
        value: this.props.text,
        rows: 1,
        maxRows: this.props.maxRows,
        onSelectItem: this.props.onSelectItem,
        placeholder: t('Type your message'),
        onPaste: this.props.onPaste,
        grow: this.props.grow,
        disabled: this.props.disabled,
        additionalTextareaProps: this.props.additionalTextareaProps
      }), /*#__PURE__*/React__default.createElement("span", {
        className: "str-chat__small-message-input-emojiselect",
        onClick: this.props.openEmojiPicker
      }, /*#__PURE__*/React__default.createElement("svg", {
        width: "14",
        height: "14",
        xmlns: "http://www.w3.org/2000/svg"
      }, /*#__PURE__*/React__default.createElement("path", {
        d: "M11.108 8.05a.496.496 0 0 1 .212.667C10.581 10.147 8.886 11 7 11c-1.933 0-3.673-.882-4.33-2.302a.497.497 0 0 1 .9-.417C4.068 9.357 5.446 10 7 10c1.519 0 2.869-.633 3.44-1.738a.495.495 0 0 1 .668-.212zm.792-1.826a.477.477 0 0 1-.119.692.541.541 0 0 1-.31.084.534.534 0 0 1-.428-.194c-.106-.138-.238-.306-.539-.306-.298 0-.431.168-.54.307A.534.534 0 0 1 9.538 7a.544.544 0 0 1-.31-.084.463.463 0 0 1-.117-.694c.33-.423.742-.722 1.394-.722.653 0 1.068.3 1.396.724zm-7 0a.477.477 0 0 1-.119.692.541.541 0 0 1-.31.084.534.534 0 0 1-.428-.194c-.106-.138-.238-.306-.539-.306-.299 0-.432.168-.54.307A.533.533 0 0 1 2.538 7a.544.544 0 0 1-.31-.084.463.463 0 0 1-.117-.694c.33-.423.742-.722 1.394-.722.653 0 1.068.3 1.396.724zM7 0a7 7 0 1 1 0 14A7 7 0 0 1 7 0zm4.243 11.243A5.96 5.96 0 0 0 13 7a5.96 5.96 0 0 0-1.757-4.243A5.96 5.96 0 0 0 7 1a5.96 5.96 0 0 0-4.243 1.757A5.96 5.96 0 0 0 1 7a5.96 5.96 0 0 0 1.757 4.243A5.96 5.96 0 0 0 7 13a5.96 5.96 0 0 0 4.243-1.757z",
        fillRule: "evenodd"
      }))), /*#__PURE__*/React__default.createElement(FileUploadButton, {
        multiple: this.props.multipleUploads,
        disabled: this.props.numberOfUploads >= this.props.maxNumberOfFiles ? true : false,
        accepts: this.props.acceptedFiles,
        handleFiles: this.props.uploadNewFiles
      }, /*#__PURE__*/React__default.createElement("span", {
        className: "str-chat__small-message-input-fileupload",
        onClick: this.props.openFilePanel
      }, /*#__PURE__*/React__default.createElement("svg", {
        width: "14",
        height: "14",
        xmlns: "http://www.w3.org/2000/svg"
      }, /*#__PURE__*/React__default.createElement("path", {
        d: "M7 .5c3.59 0 6.5 2.91 6.5 6.5s-2.91 6.5-6.5 6.5S.5 10.59.5 7 3.41.5 7 .5zm0 12c3.031 0 5.5-2.469 5.5-5.5S10.031 1.5 7 1.5A5.506 5.506 0 0 0 1.5 7c0 3.034 2.469 5.5 5.5 5.5zM7.506 3v3.494H11v1.05H7.506V11h-1.05V7.544H3v-1.05h3.456V3h1.05z",
        fillRule: "nonzero"
      })))), SendButton && /*#__PURE__*/React__default.createElement(SendButton, {
        sendMessage: this.props.handleSubmit
      })))));
    }
  }]);

  return MessageInputSmall;
}(PureComponent);

_defineProperty(MessageInputSmall, "propTypes", {
  /** Set focus to the text input if this is enabled */
  focus: PropTypes.bool.isRequired,

  /** Grow the textarea while you're typing */
  grow: PropTypes.bool.isRequired,

  /** Specify the max amount of rows the textarea is able to grow */
  maxRows: PropTypes.number.isRequired,

  /** Make the textarea disabled */
  disabled: PropTypes.bool,

  /** @see See [MessageInput](https://getstream.github.io/stream-chat-react/#messageinput) for doc */
  imageOrder: PropTypes.array,

  /** @see See [MessageInput](https://getstream.github.io/stream-chat-react/#messageinput) for doc */
  imageUploads: PropTypes.object,

  /** @see See [MessageInput](https://getstream.github.io/stream-chat-react/#messageinput) for doc */
  removeImage: PropTypes.func,

  /** @see See [MessageInput](https://getstream.github.io/stream-chat-react/#messageinput) for doc */
  uploadImage: PropTypes.func,

  /** @see See [MessageInput](https://getstream.github.io/stream-chat-react/#messageinput) for doc */
  uploadNewFiles: PropTypes.func,

  /** @see See [MessageInput](https://getstream.github.io/stream-chat-react/#messageinput) for doc */
  numberOfUploads: PropTypes.number,

  /** @see See [MessageInput](https://getstream.github.io/stream-chat-react/#messageinput) for doc */
  fileOrder: PropTypes.array,

  /** @see See [MessageInput](https://getstream.github.io/stream-chat-react/#messageinput) for doc */
  fileUploads: PropTypes.object,

  /** @see See [MessageInput](https://getstream.github.io/stream-chat-react/#messageinput) for doc */
  removeFile: PropTypes.func,

  /** @see See [MessageInput](https://getstream.github.io/stream-chat-react/#messageinput) for doc */
  uploadFile: PropTypes.func,

  /** @see See [MessageInput](https://getstream.github.io/stream-chat-react/#messageinput) for doc */
  emojiPickerIsOpen: PropTypes.bool,

  /** @see See [MessageInput](https://getstream.github.io/stream-chat-react/#messageinput) for doc */
  emojiPickerRef: PropTypes.object,

  /** @see See [MessageInput](https://getstream.github.io/stream-chat-react/#messageinput) for doc */
  onSelectEmoji: PropTypes.func,

  /** @see See [MessageInput](https://getstream.github.io/stream-chat-react/#messageinput) for doc */
  getUsers: PropTypes.func,

  /** @see See [MessageInput](https://getstream.github.io/stream-chat-react/#messageinput) for doc */
  getCommands: PropTypes.func,

  /** @see See [MessageInput](https://getstream.github.io/stream-chat-react/#messageinput) for doc */
  textareaRef: PropTypes.object,

  /** @see See [MessageInput](https://getstream.github.io/stream-chat-react/#messageinput) for doc */
  handleSubmit: PropTypes.func,

  /** @see See [MessageInput](https://getstream.github.io/stream-chat-react/#messageinput) for doc */
  handleChange: PropTypes.func,

  /** @see See [MessageInput](https://getstream.github.io/stream-chat-react/#messageinput) for doc */
  onSelectItem: PropTypes.func,

  /** @see See [MessageInput](https://getstream.github.io/stream-chat-react/#messageinput) for doc */
  text: PropTypes.string,

  /** @see See [MessageInput](https://getstream.github.io/stream-chat-react/#messageinput) for doc */
  onPaste: PropTypes.func,

  /** @see See [MessageInput](https://getstream.github.io/stream-chat-react/#messageinput) for doc */
  openEmojiPicker: PropTypes.func,

  /** @see See [channel context](https://getstream.github.io/stream-chat-react/#channel) doc */
  watcher_count: PropTypes.number,

  /** @see See [channel context](https://getstream.github.io/stream-chat-react/#channel) doc */
  typing: PropTypes.object,

  /** @see See [channel context](https://getstream.github.io/stream-chat-react/#channel) doc */
  multipleUploads: PropTypes.object,

  /** @see See [channel context](https://getstream.github.io/stream-chat-react/#channel) doc */
  maxNumberOfFiles: PropTypes.number,

  /** @see See [channel context](https://getstream.github.io/stream-chat-react/#channel) doc */
  acceptedFiles: PropTypes.object,

  /**
   * Custom UI component for send button.
   *
   * Defaults to and accepts same props as: [SendButton](https://getstream.github.io/stream-chat-react/#sendbutton)
   * */
  SendButton: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),

  /**
   * Any additional attrubutes that you may want to add for underlying HTML textarea element.
   */
  additionalTextareaProps: PropTypes.object
});

var MessageInputSmallWithContext = withTranslationContext(MessageInputSmall);

function _createSuper$P(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$P(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$P() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var ReverseInfiniteScroll = /*#__PURE__*/function (_Component) {
  _inherits(ReverseInfiniteScroll, _Component);

  var _super = _createSuper$P(ReverseInfiniteScroll);

  function ReverseInfiniteScroll(props) {
    var _this;

    _classCallCheck(this, ReverseInfiniteScroll);

    _this = _super.call(this, props);
    _this.scrollListener = _this.scrollListener.bind(_assertThisInitialized(_this));
    _this.scrollEventCount = 0;
    return _this;
  }

  _createClass(ReverseInfiniteScroll, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.attachScrollListener();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.detachScrollListener();
      this.detachMousewheelListener();
    } // Set a defaut loader for all your `InfiniteScroll` components

  }, {
    key: "setDefaultLoader",
    value: function setDefaultLoader(loader) {
      this.defaultLoader = loader;
    }
  }, {
    key: "detachMousewheelListener",
    value: function detachMousewheelListener() {
      var scrollEl = window;

      if (this.props.useWindow === false) {
        scrollEl = this.scrollComponent.parentNode;
      }

      scrollEl.removeEventListener('mousewheel', this.mousewheelListener, this.props.useCapture);
    }
  }, {
    key: "detachScrollListener",
    value: function detachScrollListener() {
      var scrollEl = window;

      if (this.props.useWindow === false) {
        scrollEl = this.getParentElement(this.scrollComponent);
      }

      scrollEl.removeEventListener('scroll', this.scrollListener, this.props.useCapture);
      scrollEl.removeEventListener('resize', this.scrollListener, this.props.useCapture);
    }
  }, {
    key: "getParentElement",
    value: function getParentElement(el) {
      return el && el.parentNode;
    }
  }, {
    key: "filterProps",
    value: function filterProps(props) {
      return props;
    }
  }, {
    key: "attachScrollListener",
    value: function attachScrollListener() {
      if (!this.props.hasMore || this.props.isLoading || !this.getParentElement(this.scrollComponent)) {
        return;
      }

      var scrollEl = window;

      if (this.props.useWindow === false) {
        scrollEl = this.getParentElement(this.scrollComponent);
      }

      scrollEl.addEventListener('mousewheel', this.mousewheelListener, this.props.useCapture);
      scrollEl.addEventListener('scroll', this.scrollListener, this.props.useCapture);
      scrollEl.addEventListener('resize', this.scrollListener, this.props.useCapture);

      if (this.props.initialLoad) {
        this.scrollListener();
      }
    }
  }, {
    key: "mousewheelListener",
    value: function mousewheelListener(e) {
      // Prevents Chrome hangups
      // See: https://stackoverflow.com/questions/47524205/random-high-content-download-time-in-chrome/47684257#47684257
      if (e.deltaY === 1) {
        e.preventDefault();
      }
    }
  }, {
    key: "scrollListener",
    value: function scrollListener() {
      var el = this.scrollComponent;
      var parentNode = this.getParentElement(el);
      this.scrollEventCount += 1;
      var offset;
      var reverseOffset = parentNode.scrollTop;
      var standardOffset = el.scrollHeight - parentNode.scrollTop - parentNode.clientHeight;

      if (this.props.isReverse) {
        offset = reverseOffset;
      } else {
        offset = standardOffset;
      }

      if (this.props.listenToScroll) {
        this.props.listenToScroll(standardOffset, reverseOffset);
      } // a reverse infinite scroll element always starts out at position 0
      // this counter prevent you from loading content before the user even scrolled


      if (this.scrollEventCount < 2) {
        return;
      } // prevent crazy repeat requests in case you don't have more


      if (!this.props.hasMore || this.props.isLoading) {
        return;
      } // Here we make sure the element is visible as well as checking the offset


      if (offset < Number(this.props.threshold) && el && el.offsetParent !== null) {
        //this.detachScrollListener();
        // Call loadMore after detachScrollListener to allow for non-async loadMore functions
        if (typeof this.props.loadMore === 'function') {
          this.props.loadMore();
        }
      }
    }
  }, {
    key: "calculateOffset",
    value: function calculateOffset(el, scrollTop) {
      if (!el) {
        return 0;
      }

      return this.calculateTopPosition(el) + (el.offsetHeight - scrollTop - window.innerHeight);
    }
  }, {
    key: "calculateTopPosition",
    value: function calculateTopPosition(el) {
      if (!el) {
        return 0;
      }

      return el.offsetTop + this.calculateTopPosition(el.offsetParent);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var renderProps = this.filterProps(this.props);

      var children = renderProps.children,
          element = renderProps.element,
          hasMore = renderProps.hasMore,
          initialLoad = renderProps.initialLoad,
          isReverse = renderProps.isReverse,
          loader = renderProps.loader,
          loadMore = renderProps.loadMore,
          pageStart = renderProps.pageStart,
          ref = renderProps.ref,
          threshold = renderProps.threshold,
          useCapture = renderProps.useCapture,
          useWindow = renderProps.useWindow,
          listenToScroll = renderProps.listenToScroll,
          isLoading = renderProps.isLoading,
          props = _objectWithoutProperties(renderProps, ["children", "element", "hasMore", "initialLoad", "isReverse", "loader", "loadMore", "pageStart", "ref", "threshold", "useCapture", "useWindow", "listenToScroll", "isLoading"]);

      props.ref = function (node) {
        _this2.scrollComponent = node;
      };

      var childrenArray = [children];

      if (isLoading) {
        if (loader) {
          isReverse ? childrenArray.unshift(loader) : childrenArray.push(loader);
        } else if (this.defaultLoader) {
          isReverse ? childrenArray.unshift(this.defaultLoader) : childrenArray.push(this.defaultLoader);
        }
      }

      return React__default.createElement(element, props, childrenArray);
    }
  }]);

  return ReverseInfiniteScroll;
}(Component);

_defineProperty(ReverseInfiniteScroll, "propTypes", {
  children: PropTypes.node.isRequired,
  element: PropTypes.node,

  /** Weather there are more elements to be loaded or not */
  hasMore: PropTypes.bool,
  initialLoad: PropTypes.bool,
  isReverse: PropTypes.bool,
  loader: PropTypes.node,
  loadMore: PropTypes.func.isRequired,
  pageStart: PropTypes.number,
  threshold: PropTypes.number,
  useCapture: PropTypes.bool,
  useWindow: PropTypes.bool,
  className: PropTypes.string,

  /** The function is called when the list scrolls */
  listenToScroll: PropTypes.func
});

_defineProperty(ReverseInfiniteScroll, "defaultProps", {
  element: 'div',
  hasMore: false,
  initialLoad: true,
  pageStart: 0,
  ref: null,
  threshold: 250,
  useWindow: true,
  isReverse: true,
  useCapture: false,
  loader: null,
  className: 'str-chat__reverse-infinite-scroll'
});

function _createSuper$Q(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$Q(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$Q() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var MessageNotification = /*#__PURE__*/function (_PureComponent) {
  _inherits(MessageNotification, _PureComponent);

  var _super = _createSuper$Q(MessageNotification);

  function MessageNotification() {
    _classCallCheck(this, MessageNotification);

    return _super.apply(this, arguments);
  }

  _createClass(MessageNotification, [{
    key: "render",
    value: function render() {
      if (!this.props.showNotification) {
        return null;
      } else {
        return /*#__PURE__*/React__default.createElement("button", {
          className: "str-chat__message-notification",
          onClick: this.props.onClick
        }, this.props.children);
      }
    }
  }]);

  return MessageNotification;
}(PureComponent);

_defineProperty(MessageNotification, "propTypes", {
  /** If we should show the notification or not */
  showNotification: PropTypes.bool,

  /** Onclick handler */
  onClick: PropTypes.func.isRequired
});

_defineProperty(MessageNotification, "defaultProps", {
  showNotification: true
});

function _createForOfIteratorHelper$4(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray$4(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray$4(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$4(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$4(o, minLen); }

function _arrayLikeToArray$4(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper$R(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$R(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$R() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
/* eslint sonarjs/no-duplicate-string: 0 */

/**
 * MessageList - The message list components renders a list of messages. Its a consumer of [Channel Context](https://getstream.github.io/stream-chat-react/#channel)
 *
 * @example ./docs/MessageList.md
 * @extends PureComponent
 */

var MessageList = /*#__PURE__*/function (_PureComponent) {
  _inherits(MessageList, _PureComponent);

  var _super = _createSuper$R(MessageList);

  function MessageList(props) {
    var _this;

    _classCallCheck(this, MessageList);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "connectionChanged", function (event) {
      if (_this.state.online !== event.online) {
        _this.setState({
          online: event.online
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "keypress", function (event) {
      if (event.keyCode === KEY_CODES.ESC && _this.state.editing) {
        _this.clearEditingState();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "scrollToBottom", function () {
      _this._scrollToRef(_this.bottomRef, _this.messageList);
    });

    _defineProperty(_assertThisInitialized(_this), "_scrollToRef", function (el, parent) {
      function scrollDown() {
        if (el && el.current && parent && parent.current) {
          this.scrollToTarget(el.current, parent.current);
        }
      }

      scrollDown.call(_assertThisInitialized(_this)); // scroll down after images load again

      setTimeout(scrollDown.bind(_assertThisInitialized(_this)), 200);
    });

    _defineProperty(_assertThisInitialized(_this), "scrollToTarget", function (target, containerEl) {
      // Moved up here for readability:
      var isElement = target && target.nodeType === 1,
          isNumber = Object.prototype.toString.call(target) === '[object Number]';

      if (isElement) {
        containerEl.scrollTop = target.offsetTop;
      } else if (isNumber) {
        containerEl.scrollTop = target;
      } else if (target === 'bottom') {
        containerEl.scrollTop = containerEl.scrollHeight - containerEl.offsetHeight;
      } else if (target === 'top') {
        containerEl.scrollTop = 0;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "setEditingState", function (message) {
      _this.setState({
        editing: message.id
      });
    });

    _defineProperty(_assertThisInitialized(_this), "clearEditingState", function (e) {
      if (e && e.preventDefault) {
        e.preventDefault();
      }

      _this.setState({
        editing: ''
      });
    });

    _defineProperty(_assertThisInitialized(_this), "insertDates", function (messages) {
      var newMessages = [];

      var _iterator = _createForOfIteratorHelper$4(messages.entries()),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _step$value = _slicedToArray(_step.value, 2),
              i = _step$value[0],
              message = _step$value[1];

          if (message.type === 'message.read') {
            newMessages.push(message);
            continue;
          }

          var messageDate = message.created_at.toDateString();
          var prevMessageDate = messageDate;

          if (i > 0) {
            prevMessageDate = messages[i - 1].created_at.toDateString();
          }

          if (i === 0 || messageDate !== prevMessageDate) {
            newMessages.push({
              type: 'message.date',
              date: message.created_at
            }, message);
          } else {
            newMessages.push(message);
          }

          var eventsNextToMessage = _this.props.eventHistory[message.id || 'first'];

          if (eventsNextToMessage && eventsNextToMessage.length > 0) {
            eventsNextToMessage.forEach(function (e) {
              newMessages.push({
                type: 'channel.event',
                event: e
              });
            });
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return newMessages;
    });

    _defineProperty(_assertThisInitialized(_this), "insertIntro", function (messages) {
      var newMessages = messages || []; // if no headerPosition is set, HeaderComponent will go at the top

      if (!_this.props.headerPosition) {
        newMessages.unshift({
          type: 'channel.intro' // created_at: new Date(0),

        });
        return newMessages;
      } // if no messages, intro get's inserted


      if (!newMessages.length) {
        newMessages.unshift({
          type: 'channel.intro'
        });
        return newMessages;
      } // else loop over the messages


      var _iterator2 = _createForOfIteratorHelper$4(messages.entries()),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _step2$value = _slicedToArray(_step2.value, 2),
              i = _step2$value[0],
              message = _step2$value[1];

          var messageTime = message.created_at ? message.created_at.getTime() : null;
          var nextMessageTime = messages[i + 1] && messages[i + 1].created_at ? messages[i + 1].created_at.getTime() : null;
          var headerPosition = _this.props.headerPosition; // headerposition is smaller than message time so comes after;

          if (messageTime < headerPosition) {
            // if header position is also smaller than message time continue;
            if (nextMessageTime < headerPosition) {
              if (messages[i + 1] && messages[i + 1].type === 'message.date') continue;

              if (!nextMessageTime) {
                newMessages.push({
                  type: 'channel.intro'
                });
                return newMessages;
              }

              continue;
            } else {
              newMessages.splice(i + 1, 0, {
                type: 'channel.intro'
              });
              return newMessages;
            }
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      return newMessages;
    });

    _defineProperty(_assertThisInitialized(_this), "goToNewMessages", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this.scrollToBottom();

            case 2:
              _this.setState({
                newMessagesNotification: false
              });

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    _defineProperty(_assertThisInitialized(_this), "getReadStates", function (messages) {
      // create object with empty array for each message id
      var readData = {};

      var _iterator3 = _createForOfIteratorHelper$4(messages),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var message = _step3.value;

          if (!message || !message.id) {
            continue;
          }

          readData[message.id] = [];
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      for (var _i = 0, _Object$values = Object.values(_this.props.read); _i < _Object$values.length; _i++) {
        var readState = _Object$values[_i];

        if (readState.last_read == null) {
          break;
        }

        var userLastReadMsgId = void 0;

        var _iterator4 = _createForOfIteratorHelper$4(messages),
            _step4;

        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var msg = _step4.value;

            if (msg.updated_at < readState.last_read) {
              userLastReadMsgId = msg.id;
            }
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }

        if (userLastReadMsgId) {
          readData[userLastReadMsgId] = [].concat(_toConsumableArray(readData[userLastReadMsgId]), [readState.user]);
        }
      }

      return readData;
    });

    _defineProperty(_assertThisInitialized(_this), "userScrolledUp", function () {
      return _this.scrollOffset > 310;
    });

    _defineProperty(_assertThisInitialized(_this), "listenToScroll", function (offset) {
      _this.scrollOffset = offset;

      if (_this.state.newMessagesNotification && !_this.userScrolledUp()) {
        _this.setState({
          newMessagesNotification: false
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getLastReceived", function (messages) {
      var l = messages.length;
      var lastReceivedId = null;

      for (var i = l; i > 0; i--) {
        if (messages[i] !== undefined && messages[i].status !== undefined && messages[i].status === 'received') {
          lastReceivedId = messages[i].id;
          break;
        }
      }

      return lastReceivedId;
    });

    _defineProperty(_assertThisInitialized(_this), "getGroupStyles", function (m) {
      var l = m.length;
      var messageGroupStyles = {};

      var messages = _toConsumableArray(m);

      for (var i = 0; i < l; i++) {
        var previousMessage = messages[i - 1];
        var message = messages[i];
        var nextMessage = messages[i + 1];
        var groupStyles = [];

        if (message.type === 'message.date') {
          continue;
        }

        if (message.type === 'channel.event') {
          continue;
        }

        if (message.type === 'channel.intro') {
          continue;
        }

        var userId = message.user.id;
        var isTopMessage = !previousMessage || previousMessage.type === 'channel.intro' || previousMessage.type === 'message.date' || previousMessage.type === 'system' || previousMessage.type === 'channel.event' || previousMessage.attachments.length !== 0 || userId !== previousMessage.user.id || previousMessage.type === 'error' || previousMessage.deleted_at;
        var isBottomMessage = !nextMessage || nextMessage.type === 'message.date' || nextMessage.type === 'system' || nextMessage.type === 'channel.event' || nextMessage.type === 'channel.intro' || nextMessage.attachments.length !== 0 || userId !== nextMessage.user.id || nextMessage.type === 'error' || nextMessage.deleted_at;

        if (isTopMessage) {
          groupStyles.push('top');
        }

        if (isBottomMessage) {
          if (isTopMessage || message.deleted_at || message.type === 'error') {
            groupStyles.splice(0, groupStyles.length);
            groupStyles.push('single');
          } else {
            groupStyles.push('bottom');
          }
        }

        if (!isTopMessage && !isBottomMessage) {
          if (message.deleted_at || message.type === 'error') {
            groupStyles.splice(0, groupStyles.length);
            groupStyles.push('single');
          } else {
            groupStyles.splice(0, groupStyles.length);
            groupStyles.push('middle');
          }
        }

        if (message.attachments.length !== 0) {
          groupStyles.splice(0, groupStyles.length);
          groupStyles.push('single');
        }

        if (_this.props.noGroupByUser) {
          groupStyles.splice(0, groupStyles.length);
          groupStyles.push('single');
        }

        messageGroupStyles[message.id] = groupStyles;
      }

      return messageGroupStyles;
    });

    _defineProperty(_assertThisInitialized(_this), "_onMentionsHoverOrClick", function (e, mentioned_users) {
      if (!_this.props.onMentionsHover || !_this.props.onMentionsClick) return;
      var tagName = e.target.tagName.toLowerCase();
      var textContent = e.target.innerHTML.replace('*', '');

      if (tagName === 'strong' && textContent[0] === '@') {
        var userName = textContent.replace('@', '');
        var user = mentioned_users.find(function (user) {
          return user.name === userName || user.id === userName;
        });

        if (_this.props.onMentionsHover && e.type === 'mouseover') {
          _this.props.onMentionsHover(e, user);
        }

        if (_this.props.onMentionsClick && e.type === 'click') {
          _this.props.onMentionsHover(e, user);
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "addNotification", function (notificationText, type) {
      if (typeof notificationText !== 'string') return;
      if (type !== 'success' && type !== 'error') return;
      var nextIndex = new Date();

      var newNotifications = _toConsumableArray(_this.state.notifications);

      newNotifications.push({
        id: nextIndex,
        text: notificationText,
        type: type
      });

      _this.setState({
        notifications: newNotifications
      }); // remove the notification after 5000 ms


      var ct = setTimeout(function () {
        var index = _this.state.notifications.findIndex(function (notification) {
          if (notification.id === nextIndex) return true;
          return false;
        });

        var newNotifications = _toConsumableArray(_this.state.notifications);

        newNotifications.splice(index, 1);

        _this.setState({
          notifications: newNotifications
        });
      }, 5000);

      _this.notificationTimeouts.push(ct);
    });

    _defineProperty(_assertThisInitialized(_this), "_loadMore", function () {
      return _this.props.messageLimit ? _this.props.loadMore(_this.props.messageLimit) : _this.props.loadMore();
    });

    _this.state = {
      newMessagesNotification: false,
      editing: '',
      online: true,
      notifications: []
    };
    _this.bottomRef = React__default.createRef();
    _this.messageList = React__default.createRef();
    _this.messageRefs = {};
    _this.notificationTimeouts = [];
    return _this;
  }

  _createClass(MessageList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // start at the bottom
      this.scrollToBottom();
      var messageListRect = this.messageList.current.getBoundingClientRect();
      this.setState({
        messageListRect: messageListRect
      });
      this.props.client.on('connection.changed', this.connectionChanged);
      document.addEventListener('keydown', this.keypress);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.props.client.off('connection.changed', this.connectionChanged);
      document.removeEventListener('keydown', this.keypress);
      this.notificationTimeouts.forEach(function (ct) {
        clearTimeout(ct);
      });
    }
  }, {
    key: "getSnapshotBeforeUpdate",
    value: function getSnapshotBeforeUpdate(prevProps) {
      if (this.props.threadList) {
        return null;
      } // Are we adding new items to the list?
      // Capture the scroll position so we can adjust scroll later.


      if (prevProps.messages.length < this.props.messages.length || !deepequal(this.props.eventHistory, prevProps.eventHistory)) {
        var list = this.messageList.current;
        return {
          offsetTop: list.scrollTop,
          offsetBottom: list.scrollHeight - list.scrollTop
        };
      }

      return null;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      // If we have a snapshot value, we've just added new items.
      // Adjust scroll so these new items don't push the old ones out of view.
      // (snapshot here is the value returned from getSnapshotBeforeUpdate)
      var userScrolledUp = this.userScrolledUp();
      var currentLastMessage = this.props.messages[this.props.messages.length - 1];
      var previousLastMessage = prevProps.messages[prevProps.messages.length - 1];

      if (!previousLastMessage || !currentLastMessage) {
        return;
      }

      var hasNewMessage = currentLastMessage.id !== previousLastMessage.id;
      var isOwner = currentLastMessage.user.id === this.props.client.userID;
      var list = this.messageList.current; // always scroll down when it's your own message that you added...

      var scrollToBottom = hasNewMessage && (isOwner || !userScrolledUp);

      if (scrollToBottom) {
        this.scrollToBottom(); // Scroll further once attachments are laoded.

        setTimeout(this.scrollToBottom, 100); // remove the scroll notification if we already scrolled down...

        this.state.newMessagesNotification && this.setState({
          newMessagesNotification: false
        });
        return;
      }

      if (snapshot !== null) {
        // Maintain the offsetTop of scroll so that content in viewport doesn't move.
        // This is for the case where user has scroll up significantly and a new message arrives from someone.
        if (hasNewMessage) {
          this.scrollToTarget(snapshot.offsetTop, this.messageList.current);
        } else {
          // Maintain the bottomOffset of scroll.
          // This is for the case of pagination, when more messages get loaded.
          this.scrollToTarget(list.scrollHeight - snapshot.offsetBottom, this.messageList.current);
        }
      } // Check the scroll position... if you're scrolled up show a little notification


      if (hasNewMessage && !this.state.newMessagesNotification) {
        this.setState({
          newMessagesNotification: true
        });
      }
    }
  }, {
    key: "render",
    // eslint-disable-next-line
    value: function render() {
      var _this2 = this;

      var allMessages = _toConsumableArray(this.props.messages);

      var MessageSystem = this.props.MessageSystem;
      allMessages = this.insertDates(allMessages);

      if (this.props.HeaderComponent) {
        allMessages = this.insertIntro(allMessages);
      }

      var messageGroupStyles = this.getGroupStyles(allMessages);
      var _this$props = this.props,
          TypingIndicator = _this$props.TypingIndicator,
          DateSeparator = _this$props.dateSeparator,
          HeaderComponent = _this$props.HeaderComponent,
          EmptyStateIndicator = _this$props.EmptyStateIndicator,
          t = _this$props.t; // sort by date

      allMessages.sort(function (a, b) {
        return a.created_at - b.created_at;
      }); // get the readData, but only for messages submitted by the user themselves

      var readData = this.getReadStates(allMessages.filter(function (_ref2) {
        var user = _ref2.user;
        return user && user.id === _this2.props.client.userID;
      }));
      var lastReceivedId = this.getLastReceived(allMessages);
      var elements = []; // loop over the messages

      var _iterator5 = _createForOfIteratorHelper$4(allMessages),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var message = _step5.value;

          if (message.id) {
            this.messageRefs[message.id] = React__default.createRef();
          }

          if (message.type === 'message.date') {
            if (this.props.threadList) {
              continue;
            }

            elements.push( /*#__PURE__*/React__default.createElement("li", {
              key: message.date.toISOString() + '-i'
            }, /*#__PURE__*/React__default.createElement(DateSeparator, {
              date: message.date
            })));
          } else if (message.type === 'channel.intro') {
            elements.push( /*#__PURE__*/React__default.createElement("li", {
              key: "intro"
            }, /*#__PURE__*/React__default.createElement(HeaderComponent, null)));
          } else if (message.type === 'channel.event' || message.type === 'system') {
            MessageSystem && elements.push( /*#__PURE__*/React__default.createElement("li", {
              key: message.type === 'system' ? message.created_at : message.type === 'channel.event' ? message.event.created_at : ''
            }, /*#__PURE__*/React__default.createElement(MessageSystem, {
              message: message
            })));
          } else if (message.type !== 'message.read') {
            var groupStyles = messageGroupStyles[message.id];

            if (!groupStyles) {
              groupStyles = [];
            }

            var readBy = readData[message.id] || [];
            elements.push( /*#__PURE__*/React__default.createElement("li", {
              className: "str-chat__li str-chat__li--".concat(groupStyles),
              key: message.id || message.created_at,
              ref: this.messageRefs[message.id]
            }, /*#__PURE__*/React__default.createElement(Message, {
              client: this.props.client,
              openThread: this.props.openThread,
              members: this.props.members,
              watchers: this.props.watchers,
              message: message,
              groupStyles: groupStyles,
              readBy: readBy,
              lastReceivedId: lastReceivedId === message.id ? lastReceivedId : null,
              editing: !!(this.state.editing && this.state.editing === message.id),
              clearEditingState: this.clearEditingState,
              setEditingState: this.setEditingState,
              messageListRect: this.state.messageListRect,
              channel: this.props.channel,
              threadList: this.props.threadList,
              retrySendMessage: this.props.retrySendMessage,
              addNotification: this.addNotification,
              updateMessage: this.props.updateMessage,
              removeMessage: this.props.removeMessage,
              Message: this.props.Message,
              unsafeHTML: this.props.unsafeHTML,
              Attachment: this.props.Attachment,
              onMentionsClick: this.props.onMentionsClick,
              onMentionsHover: this.props.onMentionsHover,
              messageActions: this.props.messageActions,
              additionalMessageInputProps: this.props.additionalMessageInputProps,
              getFlagMessageSuccessNotification: this.props.getFlagMessageSuccessNotification,
              getFlagMessageErrorNotification: this.props.getFlagMessageErrorNotification,
              getMuteUserSuccessNotification: this.props.getMuteUserSuccessNotification,
              getMuteUserErrorNotification: this.props.getMuteUserErrorNotification
            })));
          }
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }

      return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("div", {
        className: "str-chat__list ".concat(this.props.threadList ? 'str-chat__list--thread' : ''),
        ref: this.messageList
      }, !elements.length ? /*#__PURE__*/React__default.createElement(EmptyStateIndicator, {
        listType: "message"
      }) : /*#__PURE__*/React__default.createElement(ReverseInfiniteScroll, {
        loadMore: this._loadMore,
        hasMore: this.props.hasMore,
        isLoading: this.props.loadingMore,
        listenToScroll: this.listenToScroll,
        useWindow: false,
        loader: /*#__PURE__*/React__default.createElement(Center, {
          key: "loadingindicator"
        }, /*#__PURE__*/React__default.createElement(LoadingIndicator, {
          size: 20
        }))
      }, /*#__PURE__*/React__default.createElement("ul", {
        className: "str-chat__ul"
      }, elements), this.props.TypingIndicator && /*#__PURE__*/React__default.createElement(TypingIndicator, {
        typing: this.props.typing,
        client: this.props.client
      }), /*#__PURE__*/React__default.createElement("div", {
        key: "bottom",
        ref: this.bottomRef
      }))), /*#__PURE__*/React__default.createElement("div", {
        className: "str-chat__list-notifications"
      }, this.state.notifications.map(function (notification) {
        return /*#__PURE__*/React__default.createElement(Notification, {
          active: true,
          key: notification.id,
          type: notification.type
        }, notification.text);
      }), /*#__PURE__*/React__default.createElement(Notification, {
        active: !this.state.online,
        type: "error"
      }, t('Connection failure, reconnecting now...')), /*#__PURE__*/React__default.createElement(MessageNotification, {
        showNotification: this.state.newMessagesNotification,
        onClick: function onClick() {
          return _this2.goToNewMessages();
        }
      }, t('New Messages!'))));
    }
  }]);

  return MessageList;
}(PureComponent);

_defineProperty(MessageList, "propTypes", {
  /**
   * Typing indicator UI component to render
   *
   * Defaults to and accepts same props as: [TypingIndicator](https://github.com/GetStream/stream-chat-react/blob/master/src/components/TypingIndicator.js)
   * */
  TypingIndicator: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),

  /**
   * Date separator UI component to render
   *
   * Defaults to and accepts same props as: [DateSeparator](https://github.com/GetStream/stream-chat-react/blob/master/src/components/DateSeparator.js)
   * */
  dateSeparator: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),

  /** Turn off grouping of messages by user */
  noGroupByUser: PropTypes.bool,

  /** render HTML instead of markdown. Posting HTML is only allowed server-side */
  unsafeHTML: PropTypes.bool,

  /** Set the limit to use when paginating messages */
  messageLimit: PropTypes.number,

  /**
   * Array of allowed actions on message. e.g. ['edit', 'delete', 'mute', 'flag']
   * If all the actions need to be disabled, empty array or false should be provided as value of prop.
   * */
  messageActions: PropTypes.oneOfType([PropTypes.bool, PropTypes.array]),

  /**
   * Boolean weather current message list is a thread.
   */
  threadList: PropTypes.bool,

  /**
   * Function that returns message/text as string to be shown as notification, when request for flagging a message is successful
   *
   * This function should accept following params:
   *
   * @param message A [message object](https://getstream.io/chat/docs/#message_format) which is flagged.
   *
   * */
  getFlagMessageSuccessNotification: PropTypes.func,

  /**
   * Function that returns message/text as string to be shown as notification, when request for flagging a message runs into error
   *
   * This function should accept following params:
   *
   * @param message A [message object](https://getstream.io/chat/docs/#message_format) which is flagged.
   *
   * */
  getFlagMessageErrorNotification: PropTypes.func,

  /**
   * Function that returns message/text as string to be shown as notification, when request for muting a user is successful
   *
   * This function should accept following params:
   *
   * @param user A user object which is being muted
   *
   * */
  getMuteUserSuccessNotification: PropTypes.func,

  /**
   * Function that returns message/text as string to be shown as notification, when request for muting a user runs into error
   *
   * This function should accept following params:
   *
   * @param user A user object which is being muted
   *
   * */
  getMuteUserErrorNotification: PropTypes.func,

  /** **Available from [chat context](https://getstream.github.io/stream-chat-react/#chat)** */
  client: PropTypes.object,

  /** **Available from [channel context](https://getstream.github.io/stream-chat-react/#channel)** */
  Attachment: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),

  /** **Available from [channel context](https://getstream.github.io/stream-chat-react/#channel)** */
  Message: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),

  /**
   * Custom UI component to display system messages.
   *
   * Defaults to and accepts same props as: [EventComponent](https://github.com/GetStream/stream-chat-react/blob/master/src/components/EventComponent.js)
   */
  MessageSystem: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),

  /**
   * The UI Indicator to use when MessagerList or ChannelList is empty
   * */
  EmptyStateIndicator: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),

  /**
   * Component to render at the top of the MessageList
   * */
  HeaderComponent: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),

  /** **Available from [channel context](https://getstream.github.io/stream-chat-react/#channel)** */
  messages: PropTypes.array.isRequired,

  /** **Available from [channel context](https://getstream.github.io/stream-chat-react/#channel)** */
  channel: PropTypes.object.isRequired,

  /** **Available from [channel context](https://getstream.github.io/stream-chat-react/#channel)** */
  updateMessage: PropTypes.func.isRequired,

  /** **Available from [channel context](https://getstream.github.io/stream-chat-react/#channel)** */
  retrySendMessage: PropTypes.func,

  /** **Available from [channel context](https://getstream.github.io/stream-chat-react/#channel)** */
  removeMessage: PropTypes.func,

  /** **Available from [channel context](https://getstream.github.io/stream-chat-react/#channel)** */
  onMentionsClick: PropTypes.func,

  /** **Available from [channel context](https://getstream.github.io/stream-chat-react/#channel)** */
  onMentionsHover: PropTypes.func,

  /** **Available from [channel context](https://getstream.github.io/stream-chat-react/#channel)** */
  openThread: PropTypes.func,

  /** **Available from [channel context](https://getstream.github.io/stream-chat-react/#channel)** */
  members: PropTypes.object,

  /** **Available from [channel context](https://getstream.github.io/stream-chat-react/#channel)** */
  watchers: PropTypes.object,

  /** **Available from [channel context](https://getstream.github.io/stream-chat-react/#channel)** */
  read: PropTypes.object,

  /** **Available from [channel context](https://getstream.github.io/stream-chat-react/#channel)** */
  typing: PropTypes.object,

  /**
   * Additional props for underlying MessageInput component. We have instance of MessageInput
   * component in MessageSimple component, for handling edit state.
   * Available props - https://getstream.github.io/stream-chat-react/#messageinput
   * */
  additionalMessageInputProps: PropTypes.object
});

_defineProperty(MessageList, "defaultProps", {
  Message: MessageSimple,
  MessageSystem: EventComponent,
  threadList: false,
  Attachment: Attachment,
  dateSeparator: DateSeparator,
  EmptyStateIndicator: EmptyStateIndicator,
  unsafeHTML: false,
  noGroupByUser: false,
  messageActions: Object.keys(MESSAGE_ACTIONS)
});

MessageList = withChannelContext(withTranslationContext(MessageList));

var Center = function Center(_ref3) {
  var children = _ref3.children;
  return /*#__PURE__*/React__default.createElement("div", {
    className: "str-chat__list__center"
  }, children);
};

var Notification = function Notification(_ref4) {
  var children = _ref4.children,
      active = _ref4.active,
      type = _ref4.type;

  if (active) {
    return /*#__PURE__*/React__default.createElement("div", {
      className: "str-chat__custom-notification notification-".concat(type)
    }, children);
  }

  return null;
};

function ownKeys$8(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$8(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$8(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$8(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper$S(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$S(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$S() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var SimpleReactionsList = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(SimpleReactionsList, _React$PureComponent);

  var _super = _createSuper$S(SimpleReactionsList);

  function SimpleReactionsList() {
    var _this;

    _classCallCheck(this, SimpleReactionsList);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      showTooltip: false,
      users: []
    });

    _defineProperty(_assertThisInitialized(_this), "showTooltip", function () {
      _this.setState({
        showTooltip: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "hideTooltip", function () {
      _this.setState({
        showTooltip: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleReaction", function (e, type) {
      if (e !== undefined && e.preventDefault) {
        e.preventDefault();
      }

      _this.props.handleReaction(type);

      _this.setUsernames(type);
    });

    _defineProperty(_assertThisInitialized(_this), "getReactionCount", function () {
      var reaction_counts = _this.props.reaction_counts;
      var count = null;

      if (reaction_counts !== null && reaction_counts !== undefined && Object.keys(reaction_counts).length > 0) {
        count = 0;
        Object.keys(reaction_counts).map(function (key) {
          return count += reaction_counts[key];
        });
      }

      return count;
    });

    _defineProperty(_assertThisInitialized(_this), "renderUsers", function (users) {
      return users.map(function (user, i) {
        var text = user;

        if (i + 1 < users.length) {
          text += ', ';
        }

        return /*#__PURE__*/React__default.createElement("span", {
          className: "latest-user-username",
          key: "key-".concat(i, "-").concat(user)
        }, text);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getReactionsByType", function (reactions) {
      var reactionsByType = {};
      reactions.map(function (item) {
        if (reactionsByType[item.type] === undefined) {
          return reactionsByType[item.type] = [item];
        } else {
          return reactionsByType[item.type] = [].concat(_toConsumableArray(reactionsByType[item.type]), [item]);
        }
      });
      return reactionsByType;
    });

    _defineProperty(_assertThisInitialized(_this), "renderReactions", function (reactions) {
      var reactionsByType = _this.getReactionsByType(reactions);

      var reactionsEmojis = _this.props.reactionOptions.reduce(function (acc, cur) {
        return _objectSpread$8(_objectSpread$8({}, acc), {}, _defineProperty({}, cur.id, cur));
      }, {});

      return Object.keys(reactionsByType).map(function (type, i) {
        return /*#__PURE__*/React__default.createElement("li", {
          className: "str-chat__simple-reactions-list-item",
          key: "".concat(reactionsByType[type][0].id, "-").concat(i),
          onClick: function onClick(e) {
            return _this.handleReaction(e, type);
          }
        }, /*#__PURE__*/React__default.createElement("span", {
          onMouseEnter: function onMouseEnter() {
            return _this.setUsernames(type);
          }
        }, /*#__PURE__*/React__default.createElement(NimbleEmoji, _extends({
          emoji: reactionsEmojis[type]
        }, emojiSetDef, {
          size: 13,
          data: emojiData
        })), "\xA0"));
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getUsernames", function (reactions) {
      return reactions.map(function (item) {
        return item.user !== null ? item.user.name || item.user.id : 'null';
      });
    });

    _defineProperty(_assertThisInitialized(_this), "setUsernames", function (type) {
      var reactionsByType = _this.getReactionsByType(_this.props.reactions);

      var reactions = reactionsByType[type];

      var users = _this.getUsernames(reactions);

      _this.setState({
        users: users
      }, function () {
        return _this.showTooltip();
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderUsernames", function (users) {
      return users.join(', ');
    });

    return _this;
  }

  _createClass(SimpleReactionsList, [{
    key: "render",
    value: function render() {
      var reactions = this.props.reactions;

      if (!reactions || reactions.length === 0) {
        return null;
      }

      return /*#__PURE__*/React__default.createElement("ul", {
        className: "str-chat__simple-reactions-list",
        onMouseLeave: this.hideTooltip
      }, this.state.showTooltip && /*#__PURE__*/React__default.createElement("div", {
        className: "str-chat__simple-reactions-list-tooltip",
        ref: this.reactionSelectorTooltip
      }, /*#__PURE__*/React__default.createElement("div", {
        className: "arrow"
      }), this.renderUsernames(this.state.users)), this.renderReactions(reactions), reactions.length !== 0 && /*#__PURE__*/React__default.createElement("li", {
        className: "str-chat__simple-reactions-list-item--last-number"
      }, this.getReactionCount()));
    }
  }]);

  return SimpleReactionsList;
}(React__default.PureComponent);

_defineProperty(SimpleReactionsList, "propTypes", {
  reactions: PropTypes.array,

  /** Object/map of reaction id/type (e.g. 'like' | 'love' | 'haha' | 'wow' | 'sad' | 'angry') vs count */
  reaction_counts: PropTypes.object,
  showTooltip: PropTypes.bool,

  /** Provide a list of reaction options [{name: 'angry', emoji: 'angry'}] */
  reactionOptions: PropTypes.array,

  /**
   * Handler to set/unset reaction on message.
   *
   * @param type e.g. 'like' | 'love' | 'haha' | 'wow' | 'sad' | 'angry'
   * */
  handleReaction: PropTypes.func
});

_defineProperty(SimpleReactionsList, "defaultProps", {
  showTooltip: true,
  reactionOptions: defaultMinimalEmojis,
  emojiSetDef: emojiSetDef
});

function _createSuper$T(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$T(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$T() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var reactionSvg = '<svg width="14" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M11.108 8.05a.496.496 0 0 1 .212.667C10.581 10.147 8.886 11 7 11c-1.933 0-3.673-.882-4.33-2.302a.497.497 0 0 1 .9-.417C4.068 9.357 5.446 10 7 10c1.519 0 2.869-.633 3.44-1.738a.495.495 0 0 1 .668-.212zm.792-1.826a.477.477 0 0 1-.119.692.541.541 0 0 1-.31.084.534.534 0 0 1-.428-.194c-.106-.138-.238-.306-.539-.306-.298 0-.431.168-.54.307A.534.534 0 0 1 9.538 7a.544.544 0 0 1-.31-.084.463.463 0 0 1-.117-.694c.33-.423.742-.722 1.394-.722.653 0 1.068.3 1.396.724zm-7 0a.477.477 0 0 1-.119.692.541.541 0 0 1-.31.084.534.534 0 0 1-.428-.194c-.106-.138-.238-.306-.539-.306-.299 0-.432.168-.54.307A.533.533 0 0 1 2.538 7a.544.544 0 0 1-.31-.084.463.463 0 0 1-.117-.694c.33-.423.742-.722 1.394-.722.653 0 1.068.3 1.396.724zM7 0a7 7 0 1 1 0 14A7 7 0 0 1 7 0zm4.243 11.243A5.96 5.96 0 0 0 13 7a5.96 5.96 0 0 0-1.757-4.243A5.96 5.96 0 0 0 7 1a5.96 5.96 0 0 0-4.243 1.757A5.96 5.96 0 0 0 1 7a5.96 5.96 0 0 0 1.757 4.243A5.96 5.96 0 0 0 7 13a5.96 5.96 0 0 0 4.243-1.757z" fillRule="evenodd"/></svg>';
var threadSvg = '<svg width="14" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M8.516 3c4.78 0 4.972 6.5 4.972 6.5-1.6-2.906-2.847-3.184-4.972-3.184v2.872L3.772 4.994 8.516.5V3zM.484 5l4.5-4.237v1.78L2.416 5l2.568 2.125v1.828L.484 5z" fillRule="evenodd" /></svg>';
var optionsSvg = '<svg width="11" height="3" viewBox="0 0 11 3" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm4 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm4 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" fillRule="nonzero" /></svg>';
/**
 * MessageLivestream - Render component, should be used together with the Message component
 * Implements the look and feel for a livestream use case.
 *
 * @example ./docs/MessageLivestream.md
 * @extends PureComponent
 */

var MessageLivestream = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(MessageLivestream, _React$PureComponent);

  var _super = _createSuper$T(MessageLivestream);

  function MessageLivestream() {
    var _this;

    _classCallCheck(this, MessageLivestream);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      actionsBoxOpen: false,
      reactionSelectorOpen: false
    });

    _defineProperty(_assertThisInitialized(_this), "reactionSelectorRef", React__default.createRef());

    _defineProperty(_assertThisInitialized(_this), "editMessageFormRef", React__default.createRef());

    _defineProperty(_assertThisInitialized(_this), "onClickReactionsAction", function () {
      _this.setState({
        reactionSelectorOpen: true
      }, function () {
        return document.addEventListener('click', _this.hideReactions, false);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onClickOptionsAction", function () {
      _this.setState({
        actionsBoxOpen: true
      }, function () {
        return document.addEventListener('click', _this.hideOptions, false);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "hideOptions", function () {
      _this.setState({
        actionsBoxOpen: false
      });

      document.removeEventListener('click', _this.hideOptions, false);
    });

    _defineProperty(_assertThisInitialized(_this), "hideReactions", function (e) {
      if (!_this.reactionSelectorRef.current.reactionSelector.current.contains(e.target)) {
        _this.setState({
          reactionSelectorOpen: false
        });

        document.removeEventListener('click', _this.hideReactions, false);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseLeaveMessage", function () {
      _this.hideOptions();

      _this.setState({
        reactionSelectorOpen: false
      }, function () {
        return document.removeEventListener('click', _this.hideReactions, false);
      });
    });

    return _this;
  }

  _createClass(MessageLivestream, [{
    key: "isMine",
    value: function isMine() {
      return this.props.isMyMessage(this.props.message);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('click', this.hideOptions, false);
      document.removeEventListener('click', this.hideReactions, false);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Attachment = _this$props.Attachment,
          message = _this$props.message,
          groupStyles = _this$props.groupStyles,
          editing = _this$props.editing,
          clearEditingState = _this$props.clearEditingState,
          updateMessage = _this$props.updateMessage,
          initialMessage = _this$props.initialMessage,
          handleReaction = _this$props.handleReaction,
          actionsEnabled = _this$props.actionsEnabled,
          messageListRect = _this$props.messageListRect,
          channelConfig = _this$props.channelConfig,
          threadList = _this$props.threadList,
          handleOpenThread = _this$props.handleOpenThread,
          Message = _this$props.Message,
          onMentionsHoverMessage = _this$props.onMentionsHoverMessage,
          onMentionsClickMessage = _this$props.onMentionsClickMessage,
          unsafeHTML = _this$props.unsafeHTML,
          handleRetry = _this$props.handleRetry,
          handleAction = _this$props.handleAction,
          getMessageActions = _this$props.getMessageActions,
          isMyMessage = _this$props.isMyMessage,
          handleFlag = _this$props.handleFlag,
          handleMute = _this$props.handleMute,
          handleEdit = _this$props.handleEdit,
          handleDelete = _this$props.handleDelete,
          t = _this$props.t,
          tDateTimeParser = _this$props.tDateTimeParser;
      var hasAttachment = Boolean(message.attachments && message.attachments.length);
      var galleryImages = message.attachments.filter(function (item) {
        return item.type === 'image';
      });
      var attachments = message.attachments;

      if (galleryImages.length > 1) {
        attachments = message.attachments.filter(function (item) {
          return item.type !== 'image';
        });
      } else {
        galleryImages = [];
      }

      if (message.type === 'message.read') {
        return null;
      }

      if (message.type === 'message.date') {
        return null;
      }

      if (message.deleted_at) {
        return null;
      }

      if (editing) {
        return /*#__PURE__*/React__default.createElement("div", {
          className: "str-chat__message-team str-chat__message-team--".concat(groupStyles[0], " str-chat__message-team--editing"),
          onMouseLeave: this.onMouseLeaveMessage
        }, (groupStyles[0] === 'top' || groupStyles[0] === 'single') && /*#__PURE__*/React__default.createElement("div", {
          className: "str-chat__message-team-meta"
        }, /*#__PURE__*/React__default.createElement(Avatar, {
          image: message.user.image,
          name: message.user.name || message.user.id,
          size: 40
        })), /*#__PURE__*/React__default.createElement(MessageInput, {
          Input: EditMessageForm,
          message: message,
          clearEditingState: clearEditingState,
          updateMessage: updateMessage
        }));
      }

      return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("div", {
        className: "str-chat__message-livestream str-chat__message-livestream--".concat(groupStyles[0], " str-chat__message-livestream--").concat(message.type, " str-chat__message-livestream--").concat(message.status, " ").concat(initialMessage ? 'str-chat__message-livestream--initial-message' : ''),
        onMouseLeave: this.onMouseLeaveMessage
      }, this.state.reactionSelectorOpen && /*#__PURE__*/React__default.createElement(ReactionSelector, {
        reverse: false,
        handleReaction: handleReaction,
        actionsEnabled: actionsEnabled,
        detailedView: true,
        latest_reactions: message.latest_reactions,
        reaction_counts: message.reaction_counts,
        messageList: messageListRect,
        ref: this.reactionSelectorRef
      }), !initialMessage && message.type !== 'error' && message.type !== 'system' && message.type !== 'ephemeral' && message.status !== 'failed' && message.status !== 'sending' && /*#__PURE__*/React__default.createElement("div", {
        className: "str-chat__message-livestream-actions"
      }, /*#__PURE__*/React__default.createElement("span", {
        className: "str-chat__message-livestream-time"
      }, tDateTimeParser(message.created_at).format('h:mmA')), channelConfig && channelConfig.reactions && /*#__PURE__*/React__default.createElement("span", {
        onClick: this.onClickReactionsAction
      }, /*#__PURE__*/React__default.createElement("span", {
        dangerouslySetInnerHTML: {
          __html: reactionSvg
        }
      })), !threadList && channelConfig && channelConfig.replies && /*#__PURE__*/React__default.createElement("span", {
        dangerouslySetInnerHTML: {
          __html: threadSvg
        },
        onClick: function onClick(e) {
          return handleOpenThread(e, message);
        }
      }), getMessageActions().length > 0 && /*#__PURE__*/React__default.createElement("span", {
        onClick: this.onClickOptionsAction
      }, /*#__PURE__*/React__default.createElement("span", {
        dangerouslySetInnerHTML: {
          __html: optionsSvg
        }
      }), /*#__PURE__*/React__default.createElement(MessageActionsBox, {
        getMessageActions: getMessageActions,
        open: this.state.actionsBoxOpen,
        Message: Message,
        message: message,
        messageListRect: messageListRect,
        mine: isMyMessage(message),
        handleFlag: handleFlag,
        handleMute: handleMute,
        handleEdit: handleEdit,
        handleDelete: handleDelete
      }))), /*#__PURE__*/React__default.createElement("div", {
        className: "str-chat__message-livestream-left"
      }, /*#__PURE__*/React__default.createElement(Avatar, {
        image: message.user.image,
        name: message.user.name || message.user.id,
        size: 30
      })), /*#__PURE__*/React__default.createElement("div", {
        className: "str-chat__message-livestream-right"
      }, /*#__PURE__*/React__default.createElement("div", {
        className: "str-chat__message-livestream-content"
      }, /*#__PURE__*/React__default.createElement("div", {
        className: "str-chat__message-livestream-author"
      }, /*#__PURE__*/React__default.createElement("strong", null, message.user.name || message.user.id), message.type === 'error' && /*#__PURE__*/React__default.createElement("div", {
        className: "str-chat__message-team-error-header"
      }, t('Only visible to you'))), /*#__PURE__*/React__default.createElement("div", {
        className: isOnlyEmojis(message.text) ? 'str-chat__message-livestream-text--is-emoji' : '',
        onMouseOver: onMentionsHoverMessage,
        onClick: onMentionsClickMessage
      }, message.type !== 'error' && message.status !== 'failed' && !unsafeHTML && renderText(message), message.type !== 'error' && message.status !== 'failed' && unsafeHTML && /*#__PURE__*/React__default.createElement("div", {
        dangerouslySetInnerHTML: {
          __html: message.html
        }
      }), message.type === 'error' && !message.command && /*#__PURE__*/React__default.createElement("p", null, /*#__PURE__*/React__default.createElement("svg", {
        width: "14",
        height: "14",
        xmlns: "http://www.w3.org/2000/svg"
      }, /*#__PURE__*/React__default.createElement("path", {
        d: "M7 0a7 7 0 1 0 0 14A7 7 0 0 0 7 0zm.875 10.938a.438.438 0 0 1-.438.437h-.875a.438.438 0 0 1-.437-.438v-.874c0-.242.196-.438.438-.438h.875c.241 0 .437.196.437.438v.874zm0-2.626a.438.438 0 0 1-.438.438h-.875a.438.438 0 0 1-.437-.438v-5.25c0-.241.196-.437.438-.437h.875c.241 0 .437.196.437.438v5.25z",
        fill: "#EA152F",
        fillRule: "evenodd"
      })), message.text), message.type === 'error' && message.command && /*#__PURE__*/React__default.createElement("p", null, /*#__PURE__*/React__default.createElement("svg", {
        width: "14",
        height: "14",
        xmlns: "http://www.w3.org/2000/svg"
      }, /*#__PURE__*/React__default.createElement("path", {
        d: "M7 0a7 7 0 1 0 0 14A7 7 0 0 0 7 0zm.875 10.938a.438.438 0 0 1-.438.437h-.875a.438.438 0 0 1-.437-.438v-.874c0-.242.196-.438.438-.438h.875c.241 0 .437.196.437.438v.874zm0-2.626a.438.438 0 0 1-.438.438h-.875a.438.438 0 0 1-.437-.438v-5.25c0-.241.196-.437.438-.437h.875c.241 0 .437.196.437.438v5.25z",
        fill: "#EA152F",
        fillRule: "evenodd"
      })), /*#__PURE__*/React__default.createElement("strong", null, "/", message.command), " is not a valid command"), message.status === 'failed' && /*#__PURE__*/React__default.createElement("p", {
        onClick: handleRetry.bind(this, message)
      }, /*#__PURE__*/React__default.createElement("svg", {
        width: "14",
        height: "14",
        xmlns: "http://www.w3.org/2000/svg"
      }, /*#__PURE__*/React__default.createElement("path", {
        d: "M7 0a7 7 0 1 0 0 14A7 7 0 0 0 7 0zm.875 10.938a.438.438 0 0 1-.438.437h-.875a.438.438 0 0 1-.437-.438v-.874c0-.242.196-.438.438-.438h.875c.241 0 .437.196.437.438v.874zm0-2.626a.438.438 0 0 1-.438.438h-.875a.438.438 0 0 1-.437-.438v-5.25c0-.241.196-.437.438-.437h.875c.241 0 .437.196.437.438v5.25z",
        fill: "#EA152F",
        fillRule: "evenodd"
      })), t('Message failed. Click to try again.'))), hasAttachment && attachments.map(function (attachment, index) {
        return /*#__PURE__*/React__default.createElement(Attachment, {
          key: "".concat(message.id, "-").concat(index),
          attachment: attachment,
          actionHandler: handleAction
        });
      }), galleryImages.length !== 0 && /*#__PURE__*/React__default.createElement(Gallery, {
        images: galleryImages
      }), /*#__PURE__*/React__default.createElement(SimpleReactionsList, {
        reaction_counts: message.reaction_counts,
        reactions: message.latest_reactions,
        handleReaction: handleReaction
      }), !initialMessage && /*#__PURE__*/React__default.createElement(MessageRepliesCountButton, {
        onClick: handleOpenThread,
        reply_count: message.reply_count
      })))));
    }
  }]);

  return MessageLivestream;
}(React__default.PureComponent);

_defineProperty(MessageLivestream, "propTypes", {
  /** The [message object](https://getstream.io/chat/docs/#message_format) */
  message: PropTypes.object,

  /**
   * The attachment UI component.
   * Default: [Attachment](https://github.com/GetStream/stream-chat-react/blob/master/src/components/Attachment.js)
   * */
  Attachment: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),

  /**
   *
   * @deprecated Its not recommended to use this anymore. All the methods in this HOC are provided explicitly.
   *
   * The higher order message component, most logic is delegated to this component
   * @see See [Message HOC](https://getstream.github.io/stream-chat-react/#message) for example
   *
   * */
  Message: PropTypes.oneOfType([PropTypes.node, PropTypes.func, PropTypes.object]).isRequired,

  /** render HTML instead of markdown. Posting HTML is only allowed server-side */
  unsafeHTML: PropTypes.bool,

  /** If its parent message in thread. */
  initialMessage: PropTypes.bool,

  /** Channel config object */
  channelConfig: PropTypes.object,

  /** If component is in thread list */
  threadList: PropTypes.bool,

  /** Function to open thread on current messxage */
  handleOpenThread: PropTypes.func,

  /** If the message is in edit state */
  editing: PropTypes.bool,

  /** Function to exit edit state */
  clearEditingState: PropTypes.func,

  /** Returns true if message belongs to current user */
  isMyMessage: PropTypes.func,

  /**
   * Returns all allowed actions on message by current user e.g., [edit, delete, flag, mute]
   * Please check [Message](https://github.com/GetStream/stream-chat-react/blob/master/src/components/Message.js) component for default implementation.
   * */
  getMessageActions: PropTypes.func,

  /**
   * Function to publish updates on message to channel
   *
   * @param message Updated [message object](https://getstream.io/chat/docs/#message_format)
   * */
  updateMessage: PropTypes.func,

  /**
   * Reattempt sending a message
   * @param message A [message object](https://getstream.io/chat/docs/#message_format) to resent.
   */
  handleRetry: PropTypes.func,

  /**
   * Add or remove reaction on message
   *
   * @param type Type of reaction - 'like' | 'love' | 'haha' | 'wow' | 'sad' | 'angry'
   * @param event Dom event which triggered this function
   */
  handleReaction: PropTypes.func,

  /** If actions such as edit, delete, flag, mute are enabled on message */
  actionsEnabled: PropTypes.bool,

  /** DOMRect object for parent MessageList component */
  messageListRect: PropTypes.object,

  /**
   * Handler for actions. Actions in combination with attachments can be used to build [commands](https://getstream.io/chat/docs/#channel_commands).
   *
   * @param name {string} Name of action
   * @param value {string} Value of action
   * @param event Dom event that triggered this handler
   */
  handleAction: PropTypes.func,

  /**
   * The handler for hover event on @mention in message
   *
   * @param event Dom hover event which triggered handler.
   * @param user Target user object
   */
  onMentionsHoverMessage: PropTypes.func,

  /**
   * The handler for click event on @mention in message
   *
   * @param event Dom click event which triggered handler.
   * @param user Target user object
   */
  onMentionsClickMessage: PropTypes.func
});

_defineProperty(MessageLivestream, "defaultProps", {
  Attachment: Attachment
});

MessageLivestream = withTranslationContext(MessageLivestream);

function _createSuper$U(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$U(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$U() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var reactionSvg$1 = '<svg width="14" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M11.108 8.05a.496.496 0 0 1 .212.667C10.581 10.147 8.886 11 7 11c-1.933 0-3.673-.882-4.33-2.302a.497.497 0 0 1 .9-.417C4.068 9.357 5.446 10 7 10c1.519 0 2.869-.633 3.44-1.738a.495.495 0 0 1 .668-.212zm.792-1.826a.477.477 0 0 1-.119.692.541.541 0 0 1-.31.084.534.534 0 0 1-.428-.194c-.106-.138-.238-.306-.539-.306-.298 0-.431.168-.54.307A.534.534 0 0 1 9.538 7a.544.544 0 0 1-.31-.084.463.463 0 0 1-.117-.694c.33-.423.742-.722 1.394-.722.653 0 1.068.3 1.396.724zm-7 0a.477.477 0 0 1-.119.692.541.541 0 0 1-.31.084.534.534 0 0 1-.428-.194c-.106-.138-.238-.306-.539-.306-.299 0-.432.168-.54.307A.533.533 0 0 1 2.538 7a.544.544 0 0 1-.31-.084.463.463 0 0 1-.117-.694c.33-.423.742-.722 1.394-.722.653 0 1.068.3 1.396.724zM7 0a7 7 0 1 1 0 14A7 7 0 0 1 7 0zm4.243 11.243A5.96 5.96 0 0 0 13 7a5.96 5.96 0 0 0-1.757-4.243A5.96 5.96 0 0 0 7 1a5.96 5.96 0 0 0-4.243 1.757A5.96 5.96 0 0 0 1 7a5.96 5.96 0 0 0 1.757 4.243A5.96 5.96 0 0 0 7 13a5.96 5.96 0 0 0 4.243-1.757z" fillRule="evenodd"/></svg>';
var threadSvg$1 = '<svg width="14" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M8.516 3c4.78 0 4.972 6.5 4.972 6.5-1.6-2.906-2.847-3.184-4.972-3.184v2.872L3.772 4.994 8.516.5V3zM.484 5l4.5-4.237v1.78L2.416 5l2.568 2.125v1.828L.484 5z" fillRule="evenodd" /></svg>';
var optionsSvg$1 = '<svg width="11" height="3" viewBox="0 0 11 3" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm4 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm4 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" fillRule="nonzero" /></svg>';
/**
 * MessageTeam - Render component, should be used together with the Message component
 * Implements the look and feel for a team style collaboration environment
 *
 * @example ./docs/MessageTeam.md
 * @extends PureComponent
 */

var MessageTeam = /*#__PURE__*/function (_PureComponent) {
  _inherits(MessageTeam, _PureComponent);

  var _super = _createSuper$U(MessageTeam);

  function MessageTeam() {
    var _this;

    _classCallCheck(this, MessageTeam);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      actionsBoxOpen: false,
      reactionSelectorOpen: false
    });

    _defineProperty(_assertThisInitialized(_this), "reactionSelectorRef", React__default.createRef());

    _defineProperty(_assertThisInitialized(_this), "editMessageFormRef", React__default.createRef());

    _defineProperty(_assertThisInitialized(_this), "onClickReactionsAction", function () {
      _this.setState({
        reactionSelectorOpen: true
      }, function () {
        return document.addEventListener('click', _this.hideReactions, false);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onClickOptionsAction", function () {
      _this.setState({
        actionsBoxOpen: true
      }, function () {
        return document.addEventListener('click', _this.hideOptions, false);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "hideOptions", function () {
      _this.setState({
        actionsBoxOpen: false
      });

      document.removeEventListener('click', _this.hideOptions, false);
    });

    _defineProperty(_assertThisInitialized(_this), "hideReactions", function (e) {
      if (!_this.reactionSelectorRef.current.reactionSelector.current.contains(e.target)) {
        _this.setState({
          reactionSelectorOpen: false
        });

        document.removeEventListener('click', _this.hideReactions, false);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseLeaveMessage", function () {
      _this.hideOptions();

      _this.setState({
        reactionSelectorOpen: false
      }, function () {
        return document.removeEventListener('click', _this.hideReactions, false);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderStatus", function () {
      var _this$props = _this.props,
          readBy = _this$props.readBy,
          message = _this$props.message,
          threadList = _this$props.threadList,
          client = _this$props.client,
          lastReceivedId = _this$props.lastReceivedId,
          t = _this$props.t;

      if (!_this.isMine() || message.type === 'error') {
        return null;
      }

      var justReadByMe = readBy.length === 1 && readBy[0] && readBy[0].id === client.user.id;

      if (message.status === 'sending') {
        return /*#__PURE__*/React__default.createElement("span", {
          className: "str-chat__message-team-status"
        }, /*#__PURE__*/React__default.createElement(Tooltip, null, t('Sending...')), /*#__PURE__*/React__default.createElement(LoadingIndicator, {
          isLoading: true
        }));
      } else if (readBy.length !== 0 && !threadList && !justReadByMe) {
        var lastReadUser = readBy.filter(function (item) {
          return item.id !== client.user.id;
        })[0];
        return /*#__PURE__*/React__default.createElement("span", {
          className: "str-chat__message-team-status"
        }, /*#__PURE__*/React__default.createElement(Tooltip, null, getReadByTooltipText(readBy, _this.props.t, _this.props.client)), /*#__PURE__*/React__default.createElement(Avatar, {
          name: lastReadUser.name || lastReadUser.id,
          image: lastReadUser.image,
          size: 15
        }), readBy.length - 1 > 1 && /*#__PURE__*/React__default.createElement("span", {
          className: "str-chat__message-team-status-number"
        }, readBy.length - 1));
      } else if (message.status === 'received' && message.id === lastReceivedId && !threadList) {
        return /*#__PURE__*/React__default.createElement("span", {
          className: "str-chat__message-team-status"
        }, /*#__PURE__*/React__default.createElement(Tooltip, null, t('Delivered')), /*#__PURE__*/React__default.createElement("svg", {
          width: "16",
          height: "16",
          xmlns: "http://www.w3.org/2000/svg"
        }, /*#__PURE__*/React__default.createElement("path", {
          d: "M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zm3.72 6.633a.955.955 0 1 0-1.352-1.352L6.986 8.663 5.633 7.31A.956.956 0 1 0 4.28 8.663l2.029 2.028a.956.956 0 0 0 1.353 0l4.058-4.058z",
          fill: "#006CFF",
          fillRule: "evenodd"
        })));
      } else {
        return null;
      }
    });

    return _this;
  }

  _createClass(MessageTeam, [{
    key: "isMine",
    value: function isMine() {
      return this.props.isMyMessage(this.props.message);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('click', this.hideOptions, false);
      document.removeEventListener('click', this.hideReactions, false);
    }
  }, {
    key: "renderAttachments",
    value: function renderAttachments(attachments) {
      var _this$props2 = this.props,
          Attachment = _this$props2.Attachment,
          message = _this$props2.message,
          handleAction = _this$props2.handleAction;
      return attachments.map(function (attachment, index) {
        return /*#__PURE__*/React__default.createElement(Attachment, {
          key: "".concat(message.id, "-").concat(index),
          attachment: attachment,
          actionHandler: handleAction
        });
      });
    } // eslint-disable-next-line

  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          message = _this$props3.message,
          groupStyles = _this$props3.groupStyles,
          editing = _this$props3.editing,
          clearEditingState = _this$props3.clearEditingState,
          updateMessage = _this$props3.updateMessage,
          threadList = _this$props3.threadList,
          initialMessage = _this$props3.initialMessage,
          handleReaction = _this$props3.handleReaction,
          channelConfig = _this$props3.channelConfig,
          handleOpenThread = _this$props3.handleOpenThread,
          Message = _this$props3.Message,
          messageListRect = _this$props3.messageListRect,
          onMentionsHoverMessage = _this$props3.onMentionsHoverMessage,
          onMentionsClickMessage = _this$props3.onMentionsClickMessage,
          unsafeHTML = _this$props3.unsafeHTML,
          handleRetry = _this$props3.handleRetry,
          getMessageActions = _this$props3.getMessageActions,
          isMyMessage = _this$props3.isMyMessage,
          handleFlag = _this$props3.handleFlag,
          handleMute = _this$props3.handleMute,
          handleEdit = _this$props3.handleEdit,
          handleDelete = _this$props3.handleDelete,
          t = _this$props3.t,
          tDateTimeParser = _this$props3.tDateTimeParser;

      if (message.type === 'message.read') {
        return null;
      }

      var hasAttachment = Boolean(message.attachments && message.attachments.length);

      if (message.deleted_at) {
        return null;
      }

      var galleryImages = message.attachments && message.attachments.filter(function (item) {
        return item.type === 'image';
      });
      var attachments = message.attachments;

      if (galleryImages && galleryImages.length > 1) {
        attachments = message.attachments.filter(function (item) {
          return item.type !== 'image';
        });
      } else {
        galleryImages = [];
      } // determine reaction selector alignment


      var reactionDirection = 'left';

      if (editing) {
        return /*#__PURE__*/React__default.createElement("div", {
          className: "str-chat__message-team str-chat__message-team--".concat(groupStyles[0], " str-chat__message-team--editing"),
          onMouseLeave: this.onMouseLeaveMessage
        }, (groupStyles[0] === 'top' || groupStyles[0] === 'single') && /*#__PURE__*/React__default.createElement("div", {
          className: "str-chat__message-team-meta"
        }, /*#__PURE__*/React__default.createElement(Avatar, {
          image: message.user.image,
          name: message.user.name || message.user.id,
          size: 40
        })), /*#__PURE__*/React__default.createElement(MessageInput, {
          Input: EditMessageForm,
          message: message,
          clearEditingState: clearEditingState,
          updateMessage: updateMessage
        }));
      }

      return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("div", {
        className: "str-chat__message-team str-chat__message-team--".concat(groupStyles[0], " str-chat__message-team--").concat(message.type, " ").concat(threadList ? 'thread-list' : '', " str-chat__message-team--").concat(message.status),
        onMouseLeave: this.onMouseLeaveMessage
      }, /*#__PURE__*/React__default.createElement("div", {
        className: "str-chat__message-team-meta"
      }, groupStyles[0] === 'top' || groupStyles[0] === 'single' || initialMessage ? /*#__PURE__*/React__default.createElement(Avatar, {
        image: message.user.image,
        name: message.user.name || message.user.id,
        size: 40
      }) : /*#__PURE__*/React__default.createElement("div", {
        style: {
          width: 40,
          marginRight: 0
        }
      }), /*#__PURE__*/React__default.createElement("time", {
        dateTime: message.created_at,
        title: message.created_at
      }, Boolean(Date.parse(message.created_at)) && tDateTimeParser(message.created_at).format('h:mmA'))), /*#__PURE__*/React__default.createElement("div", {
        className: "str-chat__message-team-group"
      }, (groupStyles[0] === 'top' || groupStyles[0] === 'single' || initialMessage) && /*#__PURE__*/React__default.createElement("div", {
        className: "str-chat__message-team-author"
      }, /*#__PURE__*/React__default.createElement("strong", null, message.user.name || message.user.id), message.type === 'error' && /*#__PURE__*/React__default.createElement("div", {
        className: "str-chat__message-team-error-header"
      }, t('Only visible to you'))), /*#__PURE__*/React__default.createElement("div", {
        className: "str-chat__message-team-content str-chat__message-team-content--".concat(groupStyles[0], " str-chat__message-team-content--").concat(message.text === '' ? 'image' : 'text')
      }, !initialMessage && message.status !== 'sending' && message.status !== 'failed' && message.type !== 'system' && message.type !== 'ephemeral' && message.type !== 'error' && /*#__PURE__*/React__default.createElement("div", {
        className: "str-chat__message-team-actions"
      }, this.state.reactionSelectorOpen && /*#__PURE__*/React__default.createElement(ReactionSelector, {
        handleReaction: handleReaction,
        latest_reactions: message.latest_reactions,
        reaction_counts: message.reaction_counts,
        detailedView: true,
        direction: reactionDirection,
        ref: this.reactionSelectorRef
      }), channelConfig && channelConfig.reactions && /*#__PURE__*/React__default.createElement("span", {
        title: "Reactions",
        dangerouslySetInnerHTML: {
          __html: reactionSvg$1
        },
        onClick: this.onClickReactionsAction
      }), !threadList && channelConfig && channelConfig.replies && /*#__PURE__*/React__default.createElement("span", {
        title: "Start a thread",
        dangerouslySetInnerHTML: {
          __html: threadSvg$1
        },
        onClick: function onClick(e) {
          return handleOpenThread(e, message);
        }
      }), getMessageActions().length > 0 && /*#__PURE__*/React__default.createElement("span", {
        onClick: this.onClickOptionsAction
      }, /*#__PURE__*/React__default.createElement("span", {
        title: "Message actions",
        dangerouslySetInnerHTML: {
          __html: optionsSvg$1
        }
      }), /*#__PURE__*/React__default.createElement(MessageActionsBox, {
        getMessageActions: getMessageActions,
        Message: Message,
        open: this.state.actionsBoxOpen,
        message: message,
        messageListRect: messageListRect,
        mine: isMyMessage(message),
        handleFlag: handleFlag,
        handleMute: handleMute,
        handleEdit: handleEdit,
        handleDelete: handleDelete
      }))), /*#__PURE__*/React__default.createElement("span", {
        className: isOnlyEmojis(message.text) ? 'str-chat__message-team-text--is-emoji' : '',
        onMouseOver: onMentionsHoverMessage,
        onClick: onMentionsClickMessage
      }, unsafeHTML ? /*#__PURE__*/React__default.createElement("div", {
        dangerouslySetInnerHTML: {
          __html: message.html
        }
      }) : renderText(message)), galleryImages.length !== 0 && /*#__PURE__*/React__default.createElement(Gallery, {
        images: galleryImages
      }), message.text === '' && this.renderAttachments(attachments), message.latest_reactions && message.latest_reactions.length !== 0 && message.text !== '' && /*#__PURE__*/React__default.createElement(SimpleReactionsList, {
        reaction_counts: message.reaction_counts,
        handleReaction: handleReaction,
        reactions: message.latest_reactions
      }), message.status === 'failed' && /*#__PURE__*/React__default.createElement("button", {
        className: "str-chat__message-team-failed",
        onClick: handleRetry.bind(this, message)
      }, /*#__PURE__*/React__default.createElement("svg", {
        width: "14",
        height: "14",
        xmlns: "http://www.w3.org/2000/svg"
      }, /*#__PURE__*/React__default.createElement("path", {
        d: "M7 0a7 7 0 1 0 0 14A7 7 0 0 0 7 0zm.875 10.938a.438.438 0 0 1-.438.437h-.875a.438.438 0 0 1-.437-.438v-.874c0-.242.196-.438.438-.438h.875c.241 0 .437.196.437.438v.874zm0-2.626a.438.438 0 0 1-.438.438h-.875a.438.438 0 0 1-.437-.438v-5.25c0-.241.196-.437.438-.437h.875c.241 0 .437.196.437.438v5.25z",
        fill: "#EA152F",
        fillRule: "evenodd"
      })), t('Message failed. Click to try again.'))), this.renderStatus(), message.text !== '' && hasAttachment && this.renderAttachments(attachments), message.latest_reactions && message.latest_reactions.length !== 0 && message.text === '' && /*#__PURE__*/React__default.createElement(SimpleReactionsList, {
        reaction_counts: message.reaction_counts,
        handleReaction: handleReaction,
        reactions: message.latest_reactions
      }), !threadList && /*#__PURE__*/React__default.createElement(MessageRepliesCountButton, {
        onClick: handleOpenThread,
        reply_count: message.reply_count
      }))));
    }
  }]);

  return MessageTeam;
}(PureComponent);

_defineProperty(MessageTeam, "propTypes", {
  /** The [message object](https://getstream.io/chat/docs/#message_format) */
  message: PropTypes.object,

  /**
   * The attachment UI component.
   * Default: [Attachment](https://github.com/GetStream/stream-chat-react/blob/master/src/components/Attachment.js)
   * */
  Attachment: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),

  /**
   *
   * @deprecated Its not recommended to use this anymore. All the methods in this HOC are provided explicitly.
   *
   * The higher order message component, most logic is delegated to this component
   * @see See [Message HOC](https://getstream.github.io/stream-chat-react/#message) for example
   * */
  Message: PropTypes.oneOfType([PropTypes.node, PropTypes.func, PropTypes.object]).isRequired,

  /** render HTML instead of markdown. Posting HTML is only allowed server-side */
  unsafeHTML: PropTypes.bool,

  /** Client object */
  client: PropTypes.object,

  /** If its parent message in thread. */
  initialMessage: PropTypes.bool,

  /** Channel config object */
  channelConfig: PropTypes.object,

  /** If component is in thread list */
  threadList: PropTypes.bool,

  /** Function to open thread on current messxage */
  handleOpenThread: PropTypes.func,

  /** If the message is in edit state */
  editing: PropTypes.bool,

  /** Function to exit edit state */
  clearEditingState: PropTypes.func,

  /** Returns true if message belongs to current user */
  isMyMessage: PropTypes.func,

  /**
   * Returns all allowed actions on message by current user e.g., [edit, delete, flag, mute]
   * Please check [Message](https://github.com/GetStream/stream-chat-react/blob/master/src/components/Message.js) component for default implementation.
   * */
  getMessageActions: PropTypes.func,

  /**
   * Function to publish updates on message to channel
   *
   * @param message Updated [message object](https://getstream.io/chat/docs/#message_format)
   * */
  updateMessage: PropTypes.func,

  /**
   * Reattempt sending a message
   * @param message A [message object](https://getstream.io/chat/docs/#message_format) to resent.
   */
  handleRetry: PropTypes.func,

  /**
   * Add or remove reaction on message
   *
   * @param type Type of reaction - 'like' | 'love' | 'haha' | 'wow' | 'sad' | 'angry'
   * @param event Dom event which triggered this function
   */
  handleReaction: PropTypes.func,

  /** DOMRect object for parent MessageList component */
  messageListRect: PropTypes.object,

  /**
   * Handler for actions. Actions in combination with attachments can be used to build [commands](https://getstream.io/chat/docs/#channel_commands).
   *
   * @param name {string} Name of action
   * @param value {string} Value of action
   * @param event Dom event that triggered this handler
   */
  handleAction: PropTypes.func,

  /**
   * The handler for hover event on @mention in message
   *
   * @param event Dom hover event which triggered handler.
   * @param user Target user object
   */
  onMentionsHoverMessage: PropTypes.func,

  /**
   * The handler for click event on @mention in message
   *
   * @param event Dom click event which triggered handler.
   * @param user Target user object
   */
  onMentionsClickMessage: PropTypes.func,

  /** Position of message in group. Possible values: top, bottom, middle, single */
  groupStyles: PropTypes.array
});

_defineProperty(MessageTeam, "defaultProps", {
  Attachment: Attachment,
  groupStyles: ['single']
});

MessageTeam = withTranslationContext(MessageTeam);

function ownKeys$9(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$9(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$9(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$9(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper$V(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$V(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$V() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
/**
 * Thread - The Thread renders a parent message with a list of replies. Use the standard message list of the main channel's messages.
 * The thread is only used for the list of replies to a message.
 * Underlying MessageList, MessageInput and Message components can be customized using props:
 * - additionalParentMessageProps
 * - additionalMessageListProps
 * - additionalMessageInputProps
 *
 * @example ./docs/Thread.md
 * @extends Component
 */

var Thread$7 = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Thread, _React$PureComponent);

  var _super = _createSuper$V(Thread);

  function Thread() {
    _classCallCheck(this, Thread);

    return _super.apply(this, arguments);
  }

  _createClass(Thread, [{
    key: "render",
    value: function render() {
      if (!this.props.thread) {
        return null;
      }

      var parentID = this.props.thread.id;
      var cid = this.props.channel.cid;
      var key = "thread-".concat(parentID, "-").concat(cid); // We use a wrapper to make sure the key variable is set.
      // this ensures that if you switch thread the component is recreated

      return /*#__PURE__*/React__default.createElement(ThreadInner, _extends({}, this.props, {
        key: key
      }));
    }
  }]);

  return Thread;
}(React__default.PureComponent);

_defineProperty(Thread$7, "propTypes", {
  /** Display the thread on 100% width of it's container. Useful for mobile style view */
  fullWidth: PropTypes.bool,

  /** Make input focus on mounting thread */
  autoFocus: PropTypes.bool,

  /** **Available from [channel context](https://getstream.github.io/stream-chat-react/#channel)** */
  channel: PropTypes.object.isRequired,

  /** **Available from [channel context](https://getstream.github.io/stream-chat-react/#channel)** */
  Message: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),

  /**
   * **Available from [channel context](https://getstream.github.io/stream-chat-react/#channel)**
   * The thread (the parent [message object](https://getstream.io/chat/docs/#message_format)) */
  thread: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),

  /**
   * **Available from [channel context](https://getstream.github.io/stream-chat-react/#channel)**
   * The array of immutable messages to render. By default they are provided by parent Channel component */
  threadMessages: PropTypes.array.isRequired,

  /**
   * **Available from [channel context](https://getstream.github.io/stream-chat-react/#channel)**
   *
   * Function which provides next page of thread messages.
   * loadMoreThread is called when infinite scroll wants to load more messages
   * */
  loadMoreThread: PropTypes.func.isRequired,

  /**
   * **Available from [channel context](https://getstream.github.io/stream-chat-react/#channel)**
   * If there are more messages available, set to false when the end of pagination is reached.
   * */
  threadHasMore: PropTypes.bool,

  /**
   * **Available from [channel context](https://getstream.github.io/stream-chat-react/#channel)**
   * If the thread is currently loading more messages. This is helpful to display a loading indicator on threadlist */
  threadLoadingMore: PropTypes.bool,

  /**
   * Additional props for underlying Message component of parent message at the top.
   * Available props - https://getstream.github.io/stream-chat-react/#message
   * */
  additionalParentMessageProps: PropTypes.object,

  /**
   * Additional props for underlying MessageList component.
   * Available props - https://getstream.github.io/stream-chat-react/#messagelist
   * */
  additionalMessageListProps: PropTypes.object,

  /**
   * Additional props for underlying MessageInput component.
   * Available props - https://getstream.github.io/stream-chat-react/#messageinput
   * */
  additionalMessageInputProps: PropTypes.object,

  /** Customized MessageInput component to used within Thread instead of default MessageInput 
      Useable as follows:
      ```
      <Thread MessageInput={(props) => <MessageInput parent={props.parent} Input={MessageInputSmall} /> }/>
      ```
  */
  MessageInput: PropTypes.oneOfType([PropTypes.node, PropTypes.func])
});

_defineProperty(Thread$7, "defaultProps", {
  threadHasMore: true,
  threadLoadingMore: true,
  fullWidth: false,
  autoFocus: true,
  MessageInput: MessageInput
});

var ThreadInner = /*#__PURE__*/function (_React$PureComponent2) {
  _inherits(ThreadInner, _React$PureComponent2);

  var _super2 = _createSuper$V(ThreadInner);

  function ThreadInner(props) {
    var _this;

    _classCallCheck(this, ThreadInner);

    _this = _super2.call(this, props);
    _this.messageList = React__default.createRef();
    return _this;
  }

  _createClass(ThreadInner, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
        var parentID;
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                parentID = this.props.thread.id;

                if (!(parentID && this.props.thread.reply_count)) {
                  _context.next = 4;
                  break;
                }

                _context.next = 4;
                return this.props.loadMoreThread();

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "getSnapshotBeforeUpdate",
    value: function getSnapshotBeforeUpdate(prevProps) {
      // Are we adding new items to the list?
      // Capture the scroll position so we can adjust scroll later.
      if (prevProps.threadMessages.length < this.props.threadMessages.length) {
        var list = this.messageList.current;
        return list.scrollHeight - list.scrollTop;
      }

      return null;
    }
  }, {
    key: "componentDidUpdate",
    value: function () {
      var _componentDidUpdate = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(prevProps, prevState, snapshot) {
        var parentID, list, scrollDown;
        return _regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                parentID = this.props.thread.id;

                if (!(parentID && this.props.thread.reply_count > 0 && this.props.threadMessages.length === 0)) {
                  _context2.next = 4;
                  break;
                }

                _context2.next = 4;
                return this.props.loadMoreThread();

              case 4:
                // If we have a snapshot value, we've just added new items.
                // Adjust scroll so these new items don't push the old ones out of view.
                // (snapshot here is the value returned from getSnapshotBeforeUpdate)
                if (snapshot !== null) {
                  list = this.messageList.current;

                  scrollDown = function scrollDown() {
                    list.scrollTop = list.scrollHeight - snapshot;
                  };

                  scrollDown(); // scroll down after images load again

                  setTimeout(scrollDown, 100);
                }

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function componentDidUpdate(_x, _x2, _x3) {
        return _componentDidUpdate.apply(this, arguments);
      }

      return componentDidUpdate;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      if (!this.props.thread) {
        return null;
      }

      var t = this.props.t;
      var read = {};
      return /*#__PURE__*/React__default.createElement("div", {
        className: "str-chat__thread ".concat(this.props.fullWidth ? 'str-chat__thread--full' : '')
      }, /*#__PURE__*/React__default.createElement("div", {
        className: "str-chat__thread-header"
      }, /*#__PURE__*/React__default.createElement("div", {
        className: "str-chat__thread-header-details"
      }, /*#__PURE__*/React__default.createElement("strong", null, t('Thread')), /*#__PURE__*/React__default.createElement("small", null, ' ', t('{{ replyCount }} replies', {
        replyCount: this.props.thread.reply_count
      }))), /*#__PURE__*/React__default.createElement("button", {
        onClick: function onClick(e) {
          return _this2.props.closeThread(e);
        },
        className: "str-chat__square-button"
      }, /*#__PURE__*/React__default.createElement("svg", {
        width: "10",
        height: "10",
        xmlns: "http://www.w3.org/2000/svg"
      }, /*#__PURE__*/React__default.createElement("path", {
        d: "M9.916 1.027L8.973.084 5 4.058 1.027.084l-.943.943L4.058 5 .084 8.973l.943.943L5 5.942l3.973 3.974.943-.943L5.942 5z",
        fillRule: "evenodd"
      })))), /*#__PURE__*/React__default.createElement("div", {
        className: "str-chat__thread-list",
        ref: this.messageList
      }, /*#__PURE__*/React__default.createElement(Message, _extends({
        message: this.props.thread,
        initialMessage: true,
        threadList: true,
        Message: this.props.Message // TODO: remove the following line in next release, since we already have additionalParentMessageProps now.

      }, this.props, this.props.additionalParentMessageProps)), /*#__PURE__*/React__default.createElement("div", {
        className: "str-chat__thread-start"
      }, t('Start of a new thread')), /*#__PURE__*/React__default.createElement(MessageList, _extends({
        messages: this.props.threadMessages,
        read: read,
        threadList: true,
        loadMore: this.props.loadMoreThread,
        hasMore: this.props.threadHasMore,
        loadingMore: this.props.threadLoadingMore,
        Message: this.props.Message
      }, this.props.additionalMessageListProps)), smartRender(this.props.MessageInput, _objectSpread$9({
        MessageInputSmall: MessageInputSmallWithContext,
        parent: this.props.thread,
        focus: this.props.autoFocus
      }, this.props.additionalMessageInputProps))));
    }
  }]);

  return ThreadInner;
}(React__default.PureComponent);

_defineProperty(ThreadInner, "propTypes", {
  /** Channel is passed via the Channel Context */
  channel: PropTypes.object.isRequired,

  /** the thread (just a message) that we're rendering */
  thread: PropTypes.object.isRequired
});

Thread$7 = withChannelContext(withTranslationContext(Thread$7));

function _createSuper$W(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$W(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$W() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var TypingIndicator = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(TypingIndicator, _React$PureComponent);

  var _super = _createSuper$W(TypingIndicator);

  function TypingIndicator() {
    _classCallCheck(this, TypingIndicator);

    return _super.apply(this, arguments);
  }

  _createClass(TypingIndicator, [{
    key: "render",
    value: function render() {
      var _this = this;

      // if (Object.keys(this.props.typing).length <= 0) {
      //   return null;
      // }
      var typing = Object.values(this.props.typing);
      var show;

      if (typing.length === 0 || typing.length === 1 && typing[0].user.id === this.props.client.user.id) {
        show = false;
      } else {
        show = true;
      }

      return /*#__PURE__*/React__default.createElement("div", {
        className: "str-chat__typing-indicator ".concat(show ? 'str-chat__typing-indicator--typing' : '')
      }, /*#__PURE__*/React__default.createElement("div", {
        className: "str-chat__typing-indicator__avatars"
      }, typing.filter(function (_ref) {
        var user = _ref.user;
        return user.id !== _this.props.client.user.id;
      }).map(function (_ref2) {
        var user = _ref2.user;
        return /*#__PURE__*/React__default.createElement(Avatar, {
          image: user.image,
          size: 32,
          name: user.name || user.id,
          key: user.id
        });
      })), /*#__PURE__*/React__default.createElement("div", {
        className: "str-chat__typing-indicator__dots"
      }, /*#__PURE__*/React__default.createElement("span", {
        className: "str-chat__typing-indicator__dot"
      }), /*#__PURE__*/React__default.createElement("span", {
        className: "str-chat__typing-indicator__dot"
      }), /*#__PURE__*/React__default.createElement("span", {
        className: "str-chat__typing-indicator__dot"
      })));
    }
  }]);

  return TypingIndicator;
}(React__default.PureComponent);

_defineProperty(TypingIndicator, "propTypes", {
  /** @see See [chat context](https://getstream.github.io/stream-chat-react/#chatcontext) doc */
  client: PropTypes.object,

  /** @see See [channel context](https://getstream.github.io/stream-chat-react/#channelcontext) doc */
  typing: PropTypes.object
});

function _createSuper$X(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$X(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$X() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
/**
 * Window - A UI component for conditionally displaying thread or channel.
 *
 * @example ./docs/Window.md
 * @extends PureComponent
 */

var Window = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Window, _React$PureComponent);

  var _super = _createSuper$X(Window);

  function Window() {
    _classCallCheck(this, Window);

    return _super.apply(this, arguments);
  }

  _createClass(Window, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          thread = _this$props.thread,
          hideOnThread = _this$props.hideOnThread,
          children = _this$props.children; // If thread is active and window should hide on thread. Return null

      if (thread && hideOnThread) {
        return null;
      }

      return /*#__PURE__*/React__default.createElement("div", {
        className: "str-chat__main-panel"
      }, children);
    }
  }]);

  return Window;
}(React__default.PureComponent);

_defineProperty(Window, "propTypes", {
  /** show or hide the window when a thread is active */
  hideOnThread: PropTypes.bool,

  /** Flag if thread is open or not */
  thread: PropTypes.oneOfType([PropTypes.bool, PropTypes.object])
});

_defineProperty(Window, "defaultProps", {
  hideOnThread: false
});

Window = withChannelContext(Window);

export { Attachment, AttachmentActions, Audio, Avatar, Card$1 as Card, Channel, ChannelContext, ChannelHeader, ChannelList, ChannelListMessenger, ChannelListTeam, ChannelPreview, ChannelPreviewCompact, ChannelPreviewCountOnly, ChannelPreviewLastMessage, ChannelPreviewMessenger, ChannelSearch, Chat, ChatAutoComplete, ChatContext, ChatDown, CommandItem, DateSeparator, EditMessageForm, EmoticonItem, EmptyStateIndicator, EventComponent, Gallery, Image, InfiniteScroll, InfiniteScrollPaginator, Item, KEY_CODES, List, LoadMoreButton, LoadMorePaginator, LoadingChannels, LoadingErrorIndicator, LoadingIndicator, MESSAGE_ACTIONS, Message, MessageActions, MessageActionsBox, MessageCommerce, MessageInput, MessageInputFlatWithContext as MessageInputFlat, MessageInputLargeWithContext as MessageInputLarge, MessageInputSmallWithContext as MessageInputSmall, MessageList, MessageLivestream, MessageNotification, MessageRepliesCountButton, MessageSimple, MessageTeam, Modal, ReactionSelector, ReactionsList, ReverseInfiniteScroll, SafeAnchor, SendButton, SimpleReactionsList, Streami18n, Thread$7 as Thread, Tooltip, TranslationContext, TypingIndicator, UserItem, Window, byDate, commonEmoji, defaultMinimalEmojis, defaultScrollToItem, emojiData, emojiSetDef, enTranslations, filterEmoji, formatArray, frTranslations, generateRandomId, getReadByTooltipText, hiTranslations, isOnlyEmojis, isPromise, itTranslations, Listeners as listener, nlTranslations, renderText, ruTranslations, smartRender, trTranslations, withChannelContext, withChatContext, withTranslationContext };
//# sourceMappingURL=index.es.js.map
