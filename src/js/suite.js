function Suite () {
  this._side = 0;
}

Suite.prototype.validate = function () {
  return document.querySelector('form').checkValidity();
}