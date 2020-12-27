const head = document.getElementsByTagName("head")[0];
const link = document.createElement("link");
link.rel = "stylesheet";
link.href = "https://segnalibri.vercel.app/elexpo.css";
head.appendChild(link);

let iframe;
let tentativi = 0;
try {
  console.log(document);
  setTimeout(() => {
    iframe = Array.from(document.getElementById("cke_1_contents").children)[1];
    console.log("iframe");
    console.log(iframe);
    if(iframe) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "https://segnalibri.vercel.app/elexpo2.css";
      iframe.contentWindow.document.head.appendChild(link);
    }
  }, 1000);
} catch(e) {
  tentativi++;
  console.log(e);
}