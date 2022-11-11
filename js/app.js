const modal = document.querySelector(".modal");
const btnOpen = document.querySelector("button.open");
const btnClose = document.querySelector(".modal button.close");

// la phase de capture se produit en premier et va du parent vers l'enfant
// la phase de bubbling se produit ensuite et va de l'enfant vers le parent
// pour le visualiser on peut ajouter un eventListener sur chaque élément en passant un objet en 3éme paramètre avec la propriété capture à true

// exemple sur document
// document.addEventListener(
//   "click",
//   (e) => {
//     console.log("Clic event captured on document");
//   },
//   { capture: true }
// );

document.addEventListener("click", (e) => {
  console.log("Document clicked");
  modal.classList.toggle("show");
  btnOpen.classList.toggle("hide");
});

// on stoppe la propagation de l'event et donc le bubbling au niveau du btnOpen
// quand on clique l'event ne remonte donc pas vers le parent (document)
btnOpen.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("Open button clicked");
  modal.classList.toggle("show");
  btnOpen.classList.toggle("hide");
});

btnClose.addEventListener("click", (e) => {
  modal.classList.toggle("show");
  btnOpen.classList.toggle("hide");
});

// on stopppe la propagation de l'event et donc le bubbling au niveau de la modal
modal.addEventListener("click", (e) => {
  e.stopPropagation();
});
