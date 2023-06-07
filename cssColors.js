export function cssColors() {
  let cell = document.querySelectorAll(".cell");
  let cssClass = "point-";

  for (let i=0; i<cell.length; i++) {
    if (cell[i].classList[2]) {
      cell[i].classList.remove(cell[i].classList[2]);
    };
    cell[i].classList.add(cssClass + cell[i].innerHTML);
  };
}