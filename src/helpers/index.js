class Helders {
  static setBorderColorToPaginationEl = (currentPage) => {
    let paginationEls = document.getElementsByClassName("pagination__content__list-item");
    let arrFromPaginationEls = [...paginationEls];

    arrFromPaginationEls.forEach((el) => {
      let numberNode = parseInt(el.childNodes[0].textContent);

      if (numberNode === currentPage) {
        el.classList.add("pagination__content__list-item__active");
      } else {
        el.classList.remove("pagination__content__list-item__active");
      }
    });
  };
}

export { Helders };
