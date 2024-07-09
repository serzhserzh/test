(function (min, sec) {
    var date = new Date(),
        count = 0;
    date.setMinutes(10);
    date.setSeconds(0);
    min[0].textContent = zero(date.getMinutes());
    sec[0].textContent = zero(date.getSeconds());

    var interval = setInterval(counter, 1000);

    function counter() {
        count++;
        var liveDate = new Date();
        liveDate.setMinutes(date.getMinutes());
        liveDate.setSeconds(date.getSeconds() - count);

        min[0].textContent = zero(liveDate.getMinutes());
        sec[0].textContent = zero(liveDate.getSeconds());
        if (min[0].textContent === '00' && sec[0].textContent === '00') {
            clearInterval(interval);
        }
    }

    function zero(num) {
        return num.toString().length === 1 ? '0' + num : num;
    }
})(
    document.getElementsByClassName('all-form__min'),
    document.getElementsByClassName('all-form__sec')
);