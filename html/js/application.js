/*global FileReader*/
(function (window) {
    'use strict';

    var reader = new FileReader();

    reader.addEventListener('load', function (e) {

        document.querySelector('.postcard__side_front').style.backgroundImage = 'url(' + e.target.result + ')';
        document.querySelector('.postcard__side_front').classList.add('loaded');

        setTimeout(function () {
            document.querySelector('.postcard').classList.add('postcard_sideone');
        }, 500);
    });

    document.querySelector('[type=file]').addEventListener('change', function () {
        reader.readAsDataURL(this.files[0]);
    });
}(this));