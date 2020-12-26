const head = document.getElementsByTagName("head")[0];
const link = document.createElement("link");
link.rel = "stylesheet";
link.href = "https://segnalibri.vercel.app/elexpo.css";
head.appendChild(link);

const iframe=document.querySelector("iframe");
if(iframe) {
  const link=document.createElement("link");
  link.rel="stylesheet";
  link.href="https://segnalibri.vercel.app/elexpoRisposte.css";
  iframe.head.appendChild(link);
}