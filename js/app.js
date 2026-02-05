document.addEventListener("DOMContentLoaded", () => {

  // ACORDEÓN PRINCIPAL
  const accordions = document.querySelectorAll(".accordion");
  accordions.forEach(acc => {
    acc.addEventListener("click", () => {
      acc.classList.toggle("active");
      const panel = acc.nextElementSibling;
      panel.classList.toggle("open");
    });
  });

  // SUB-ACORDEÓN: Solo mostrar la spec de la clase pulsada
  const claseBtns = document.querySelectorAll(".clase");
  claseBtns.forEach(btn => {
    btn.addEventListener("click", () => {

      // Ocultar todas las spec-lists
      document.querySelectorAll(".spec-list").forEach(list => {
        list.style.display = "none";
      });

      // Mostrar solo la spec-list de la clase pulsada
      let clase = btn.classList[1]; // toma el segundo class: guerrero, paladin, etc.
      let specList = document.getElementById(`${clase}-spec`);
      if(specList) {
        specList.style.display = "block";
      }

      // Opcional: scroll al sub-acordeón
      specList.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

});