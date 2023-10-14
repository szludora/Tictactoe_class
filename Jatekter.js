import Elem from "./Elem.js";

class Jatekter {
  constructor(szulo, mezoSzelesseg) {
    this.szulo=szulo;
    this.mezoSzelesseg = mezoSzelesseg;
    this.letrehoz(this.mezoSzelesseg);
    $(":root").css("--meret", this.mezoSzelesseg)
  }

  letrehoz(mezoSzelesseg) {
    for (let i = 0; i < mezoSzelesseg*mezoSzelesseg; i++) {
      new Elem($(".jatekter"));
    }

    let lepes = 0;
    let ertek = "";

    $(window).on("elemKivalaszt", (event) => {
      lepes++;
      if (lepes % 2 == 0) {
        ertek = "X";
      } else {
        ertek = "O";
      }
      event.detail.setErtek(ertek);
    });
  }
}

export default Jatekter;
