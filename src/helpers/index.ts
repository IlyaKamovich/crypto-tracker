class Helpers {
  static setBorderColorToPaginationEl = (currentPage: number): void => {
    const paginationEls: HTMLCollectionOf<Element> = document.getElementsByClassName('pagination__content__list-item');
    const arrFromPaginationEls: Element[] = [...paginationEls];

    arrFromPaginationEls.forEach((el: Element) => {
      const numberNode = parseInt(el.childNodes[0].textContent || '');

      if (numberNode === currentPage) {
        el.classList.add('pagination__content__list-item__active');
      } else {
        el.classList.remove('pagination__content__list-item__active');
      }
    });
  };
}

export { Helpers };
