/*Registrate*/
let telInput = $("#phone");
telInput.intlTelInput({
  nationalMode: false,
  initialCountry: "auto",
  geoIpLookup: function (callback) {
    $.get('http://ipinfo.io', function () {}, "jsonp").always(function (resp) {
      var countryCode = (resp && resp.country) ? resp.country : "";
      callback(countryCode);
    });
  },
  onlyCountries: ['pe', 'mx', 'cl'],
  placeholderNumberType: "MOBILE",
  preventInvalidDialCodes: true,
  utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/12.0.3/js/utils.js"
});
validarTelefono = () => {
  if (telInput.intlTelInput("isValidNumber")) {
    $('#siguiente').removeAttr('disabled');
  } else {
    $("#siguiente").attr('disabled', 'disabled');
  }
}
telInput.on("keyup", validarTelefono);