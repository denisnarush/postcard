/*global FileReader, console*/
(function (window) {
    'use strict';

    var reader = new FileReader(event);
    var i;
    
    function backHandler() {
        document.querySelector('.postcard').classList.remove('postcard_sideone');
        document.querySelector('.postcard').classList.add('postcard_sidetwo');
        event.target.setAttribute('hidden', '');
        event.target.removeEventListener('click', backHandler);
        document.querySelectorAll('.button')[1].setAttribute('hidden', '');
    }
    function validate() {
        if (document.querySelector('form').checkValidity()) {
            document.querySelectorAll('.button')[1].removeAttribute('hidden');
        } else {
            document.querySelectorAll('.button')[1].setAttribute('hidden', '');
        }
    }

    reader.addEventListener('load', function (e) {

        document.querySelector('.postcard__side_front').style.backgroundImage = 'url(' + e.target.result + ')';
        document.querySelector('.postcard__side_front').classList.add('loaded');

        setTimeout(function () {
            document.querySelector('.postcard').classList.remove('postcard_sidetwo');
            document.querySelector('.postcard').classList.add('postcard_sideone');
            setTimeout(function () {
                document.querySelectorAll('.button')[0].removeAttribute('hidden');
                document.querySelectorAll('.button')[0].addEventListener('click', backHandler);
                validate();
            }, 1100);
        }, 500);
    });

    document.querySelector('[type=file]').addEventListener('change', function () {
        try {
            reader.readAsDataURL(this.files[0]);
        } catch (e) {
        }
    });

    var fields = document.querySelectorAll('textarea');
    for (i = 0; i < fields.length; i = i + 1) {
        fields[i].addEventListener('input', validate);
    }

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