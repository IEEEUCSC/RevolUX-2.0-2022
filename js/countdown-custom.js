jQuery(document).ready(function () {
  $(function () {
    $("#defaultCountdown").countdown({ until: new Date(2022, 05, 22, 0) }); // year, month, date, hour
  });
});
