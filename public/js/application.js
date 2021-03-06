/* jshint browser: true, esversion: 6*/
(function (window) {
  'use strict';
  const container = document.querySelector('.postcard');
  const fileInput = document.querySelector('[type=file]');
  const prev = document.querySelectorAll('.button')[0];
  const next = document.querySelectorAll('.button')[1];
  const front = document.querySelector('.postcard__side_front');
  const form = document.querySelector('form');
  const fields = document.querySelectorAll('textarea');
  const SIDE_ONE = 'postcard_sideone';
  const SIDE_TWO = 'postcard_sidetwo';
  const reader = new FileReader();
  const canvas = document.querySelector('canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = 540 * 2;
  canvas.height = 372 * 2;

  function validate() {
    if (document.querySelector('form').checkValidity()) {
      next.removeAttribute('hidden');
    }
    else {
      next.setAttribute('hidden', '');
    }
  }

  function onBack() {
    container.classList.remove(SIDE_ONE);
    container.classList.add(SIDE_TWO);
    event.target.setAttribute('hidden', '');
    event.target.removeEventListener('click', onBack);
    next.setAttribute('hidden', '');
  }

  function onLoadPhoto(event) {
    const photo = new Image();
    photo.onload = function (evt) {
      const d = photo.width / photo.height;
      const wd = canvas.width - canvas.height * d;
      ctx.drawImage(photo, 0, 0, photo.width, photo.height, wd / 2, 0, canvas.height * d, canvas.height);
    };
    photo.src = event.target.result;
    setTimeout(function () {
      container.classList.remove(SIDE_TWO);
      container.classList.add(SIDE_ONE);
      setTimeout(function () {
        prev.removeAttribute('hidden');
        prev.addEventListener('click', onBack);
        validate();
      }, 1100);
    }, 500);
  }

  function onFile(event) {
    try {
      reader.readAsDataURL(event.target.files[0]);
    }
    catch (error) {}
  }

  function onSubmit(event) {
    event.preventDefault();
    var request = new XMLHttpRequest();
    var formData = new FormData(form);
    var iterator = formData.entries();
    var data = {};
    for (const pair of formData.entries()) {
      data[pair[0]] = pair[1];
    }
    request.open('POST', '/rest/card');
    request.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    request.send(JSON.stringify(data));
  }
  for (let i = 0; i < fields.length; i = i + 1) {
    fields[i].addEventListener('input', validate);
  }
  reader.addEventListener('load', onLoadPhoto);
  fileInput.addEventListener('change', onFile);
  form.addEventListener('submit', onSubmit);
  front.ondragover = function () {
    return false;
  };
  front.ondragleave = function () {
    return false;
  };
  front.ondragend = function () {
    return false;
  };
  front.ondrop = function (e) {
    e.preventDefault();
    var file = e.dataTransfer.files[0];
    reader.readAsDataURL(file);
    return false;
  };
}(this));