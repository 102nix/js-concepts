const allowDrop = (e) => e.preventDefault();

const dropAndAppend = (e) => {
  const el = e.dataTransfer.getData('el');
  e.target.append(document.querySelector(`.${el}`));
}

const moveEl = (e) => {
  e.dataTransfer.setData('el', e.target.className);
}

document.ondragover = allowDrop;
document.ondrop = dropAndAppend;

const el = document.querySelector('.some-text');

el.ondragstart = moveEl;



