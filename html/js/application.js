/*global FileReader, console*/
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
        try {
            reader.readAsDataURL(this.files[0]);
        } catch (e) {
        }
    });

    var holder = document.querySelector('.postcard__side_front');

    holder.ondragover = function () {
        holder.classList.add('hover');
        return false;
    };
    holder.ondragleave = function () {
        holder.classList.remove('hover');
        return false;
    };
    holder.ondragend = function () {
        holder.classList.remove('hover');
        return false;
    };
    holder.ondrop = function (e) {
        holder.classList.remove('hover');
        holder.classList.add('loaded');
        e.preventDefault();

        var file = e.dataTransfer.files[0];

        reader.readAsDataURL(file);

        return false;
    };
  
}(this));