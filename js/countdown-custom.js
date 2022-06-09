jQuery(document).ready(function () {
  $(function () {
    $("#defaultCountdown").countdown({ until: new Date(2022, 06, 15, 6) }); // year, month, date, hour
  });
});
