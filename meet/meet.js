const indirizzo=location.href;
const regex=/https:\/\/meet.google.com\/(\w{3}-\w{4}-\w{3})(\?.*)?/;
const ris=regex.exec(indirizzo);
if(ris[2]!="?authuser=1")
  location.href="https://meet.google.com/"+ris[1]+"?authuser=1";