/*Registrate*/
$("#phone").intlTelInput({
      // allowDropdown: false,
      //autoHideDialCode: false,
      //autoPlaceholder: "off",
      // dropdownContainer: "body",
      // excludeCountries: ["us"],
      // formatOnDisplay: false,
      // geoIpLookup: function(callback) {
      //   $.get("http://ipinfo.io", function() {}, "jsonp").always(function(resp) {
      //     var countryCode = (resp && resp.country) ? resp.country : "";
      //     callback(countryCode);
      //   });
      // },
      // hiddenInput: "full_number",
      initialCountry: "auto",
      geoIpLookup: function(callback) {
            $.get('http://ipinfo.io', function() {}, "jsonp").always(function(resp) {
              var countryCode = (resp && resp.country) ? resp.country : "";
              callback(countryCode);
            });
          },
      nationalMode: false,
      onlyCountries: ['pe', 'mx', 'cl'],
      placeholderNumberType: "MOBILE",
      // preferredCountries: ['cn', 'jp'],
       //separateDialCode: true,
       preventInvalidDialCodes: true,
      utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/12.0.3/js/utils.js"
    });

$("#probar").click(() => {
	console.log($("#phone").intlTelInput("_getDialCode"));
	}
	);