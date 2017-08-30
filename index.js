var MyForm = {
	validate: function() {
		var validationInfo  = { 
			isValid: true, 
			errorFields: [] 
		};
		
		function validateName(name) {
			// only 3 words.. hm
			// but this words may be separated differently and it is still the word
			// word word word
			// word,word,word
			// name|name|name
			// O'Connor - 1 or 2 words?
			// O`Connor
			// assume that NO numbers in name
			// assume that in 1 word may be max 1 symbol ' or `
			// word may contains of any letter, not digit, not any other symbols
			// unicode may be included

			var name_ptrn = /^[a-zа-яàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð]+(?:[\'\`][a-zа-яàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð]+)*[\s\,\|\.]+[a-zа-яàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð]+(?:[\'\`][a-zа-яàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð]+)*[\s\,\|\.]+[a-zа-яàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð]+(?:[\'\`][a-zа-яàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð]+)*$/i;
			// /([ \u00c0-\u01ffa-zA-Z'\-])+/.
			// ^[^±!@£$%^&*_+§¡€#¢§¶•ªº«\\/<>?:;|=.,]{1,20}$
			// s/[\<\>\"\'\%\;\(\)\&\+]//g;
			// /^[a-zA-Z._-\s{1}\u00C6\u00D0\u018E\u018F\u0190\u0194\u0132\u014A\u0152\u1E9E\u00DE\u01F7\u021C\u00E6\u00F0\u01DD\u0259\u025B\u0263\u0133\u014B\u0153\u0138\u017F\u00DF\u00FE\u01BF\u021D\u0104\u0181\u00C7\u0110\u018A\u0118\u0126\u012E\u0198\u0141\u00D8\u01A0\u015E\u0218\u0162\u021A\u0166\u0172\u01AFY\u0328\u01B3\u0105\u0253\u00E7\u0111\u0257\u0119\u0127\u012F\u0199\u0142\u00F8\u01A1\u015F\u0219\u0163\u021B\u0167\u0173\u01B0y\u0328\u01B4\u00C1\u00C0\u00C2\u00C4\u01CD\u0102\u0100\u00C3\u00C5\u01FA\u0104\u00C6\u01FC\u01E2\u0181\u0106\u010A\u0108\u010C\u00C7\u010E\u1E0C\u0110\u018A\u00D0\u00C9\u00C8\u0116\u00CA\u00CB\u011A\u0114\u0112\u0118\u1EB8\u018E\u018F\u0190\u0120\u011C\u01E6\u011E\u0122\u0194\u00E1\u00E0\u00E2\u00E4\u01CE\u0103\u0101\u00E3\u00E5\u01FB\u0105\u00E6\u01FD\u01E3\u0253\u0107\u010B\u0109\u010D\u00E7\u010F\u1E0D\u0111\u0257\u00F0\u00E9\u00E8\u0117\u00EA\u00EB\u011B\u0115\u0113\u0119\u1EB9\u01DD\u0259\u025B\u0121\u011D\u01E7\u011F\u0123\u0263\u0124\u1E24\u0126I\u00CD\u00CC\u0130\u00CE\u00CF\u01CF\u012C\u012A\u0128\u012E\u1ECA\u0132\u0134\u0136\u0198\u0139\u013B\u0141\u013D\u013F\u02BCN\u0143N\u0308\u0147\u00D1\u0145\u014A\u00D3\u00D2\u00D4\u00D6\u01D1\u014E\u014C\u00D5\u0150\u1ECC\u00D8\u01FE\u01A0\u0152\u0125\u1E25\u0127\u0131\u00ED\u00ECi\u00EE\u00EF\u01D0\u012D\u012B\u0129\u012F\u1ECB\u0133\u0135\u0137\u0199\u0138\u013A\u013C\u0142\u013E\u0140\u0149\u0144n\u0308\u0148\u00F1\u0146\u014B\u00F3\u00F2\u00F4\u00F6\u01D2\u014F\u014D\u00F5\u0151\u1ECD\u00F8\u01FF\u01A1\u0153\u0154\u0158\u0156\u015A\u015C\u0160\u015E\u0218\u1E62\u1E9E\u0164\u0162\u1E6C\u0166\u00DE\u00DA\u00D9\u00DB\u00DC\u01D3\u016C\u016A\u0168\u0170\u016E\u0172\u1EE4\u01AF\u1E82\u1E80\u0174\u1E84\u01F7\u00DD\u1EF2\u0176\u0178\u0232\u1EF8\u01B3\u0179\u017B\u017D\u1E92\u0155\u0159\u0157\u017F\u015B\u015D\u0161\u015F\u0219\u1E63\u00DF\u0165\u0163\u1E6D\u0167\u00FE\u00FA\u00F9\u00FB\u00FC\u01D4\u016D\u016B\u0169\u0171\u016F\u0173\u1EE5\u01B0\u1E83\u1E81\u0175\u1E85\u01BF\u00FD\u1EF3\u0177\u00FF\u0233\u1EF9\u01B4\u017A\u017C\u017E\u1E93]+$/
			// ^[a-zа-яàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð]+(?:[\'\`][a-zа-яàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð]+)*[\s\,\|\.]+[a-zа-яàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð]+(?:[\'\`][a-zа-яàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð]+)*[\s\,\|\.]+[a-zа-яàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð]+(?:[\'\`][a-zа-яàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð]+)*
			if (!name_ptrn.test(name))
				return false;
			return true;
		}
		function validateEmail(email) {
			// validation the same as it required during registration in yandex services:
			// "A login can consist of alphanumeric characters, and a single hyphen or period. It should begin with a letter, end with a letter or digit, and contain no more than 30 characters.""
			var re = /^[a-z]+[a-z0-9]*(?:[\.\-][a-z0-9]+)*@(ya\.ru|yandex\.ru|yandex\.ua|yandex\.by|yandex\.kz|yandex\.com)$/i;
  			if (!re.test(email)) 
  				return false;
  			var a = email.split('@');
  			if (a[0].length > 30)
  				return false;
  			return true;
		}	
		function validatePhoneNumber(phone) {
			if (!/^\+7\([\d]{3}\)[\d]{3}\-[\d]{2}\-[\d]{2}$/.test(phone))
				return false;
			try {
				var numbers = phone.match(/\d/g);	
				var sum = 0;
				for (var i=0; i< numbers.length; i++) {
					sum += parseInt(numbers[i]);
				}
				if (sum > 30)
					return false;
			} catch(err) {
				return false;
			}
			return true;
		}
		
		if (!validateName($('[name=fio]').val())) {
			validationInfo.isValid = false;
			validationInfo.errorFields.push('fio');
		}
		if (!validateEmail($('[name=email]').val())) {
			validationInfo.isValid = false;
			validationInfo.errorFields.push('email');
		}
		if (!validatePhoneNumber($('[name=phone]').val())) {
			validationInfo.isValid = false;
			validationInfo.errorFields.push('phone');
		}
		
		return validationInfo;
	},
	getData: function() {
		var collectedData = {
			fio: $('[name=fio]').eq(0).val(),
			email: $('[name=email]').eq(0).val(),
			phone: $('[name=phone]').eq(0).val(),
		};
		return collectedData;
	},
	setData: function(data) {
		if (Object.prototype.toString.call(data) == "[object Object]") {
			if ('fio' in data) {
				$('[name=fio]').eq(0).val(data.fio);
			}
			if ('email' in data) {
				$('[name=email]').eq(0).val(data.email);
			}
			if ('phone' in data) {
				$('[name=phone]').eq(0).val(data.phone);
			}
		}
		return;
	},
	submit: function() {
		// validate data
		var validation = MyForm.validate();
		// console.log('validation result');
		// console.log(validation);
		$('#myForm input').removeClass('error');
		if (!validation.isValid) {

			// console.log('Данные плохие');
			// add error class to invalid fields
			// console.log('Сейчас я добавлю error класс плохим полям');

			for (var i=0; i < validation.errorFields.length; i++)  {
				// console.log('Надо бы изменить вот этот инпут:' + validation.errorFields[i]);
				$('[name='+validation.errorFields[i]+']').addClass('error');
			}



			return;
		}

		function enableForm() {
			$('input').attr('disabled', false);
			$('#submitButton').attr('disabled', false);
		}
		function disableForm() {
			$('input').attr('disabled', true);
			$('#submitButton').attr('disabled', true);
		}


		// proccess request
		var last_response_status = '';
		function sendData() {
			// $('#resultContainer').hide();
			disableForm();
			$.ajax({
				type: 'GET',
				contentType: "application/json; charset=utf-8",
 				dataType: "json",
				data: MyForm.getData(),
				// url: "server_responses/success.json",
				// url: "server_responses/error.json",
				// url: "server_responses/progress.json",
				url: $('#myForm').attr('action'),
				success: function(response) {
					if (!last_response_status)
						last_response_status = response.status;
					if (response.status != last_response_status) {
						$('#resultContainer')
							.removeClass('success')
							.removeClass('progress')
							.removeClass('error');
					}
					if (response.status != 'progress') {
						$('#progressBlock').hide();
					}
					if (response.status == 'success') {
						$('#resultContainer').addClass('success');
						$('#resultContainer').text('Success');
						$('#resultContainer').show();
						enableForm();
					} else if (response.status == 'error') {
						$('#resultContainer').addClass('error');
						$('#resultContainer').text(response.reason);
						$('#resultContainer').show();
						enableForm();
					} else if (response.status == 'progress') {
						var delay = parseInt(response.timeout);
						var count_down = delay;
						$('#resultContainer').addClass('progress');
						$('#resultContainer').html('Request is proceeding...');
						if (count_down > 1000) {
							$('#resultContainer').html($('#resultContainer').text() + ' Next attempt in ' + '<span id="count_down">'+ (count_down / 1000) +'</span>'+ ' sec');
						}
						$('#resultContainer').show();
						$('#progressBlock').show();

						
						var int_count_down = setInterval(function(){
							count_down -= 1000;
							$('#count_down').text(count_down / 1000);
						}, 1000);
						setTimeout(function(){
							sendData();
							$('#resultContainer').text('');
							clearInterval(int_count_down);
						}, delay);
					}
				},
				error: function() {
					// setTimeout(function() {

					// }, )
				}
				// crossDomain: true,
				// data: data,
			});
		}
		
		sendData();

	
		// $('head').append('<script  src=\'server_responses/success.json\'></script>')

		return;
	},
};

$(document).ready(function () {

	$('#submitButton').on('click', function(ev){
		ev.preventDefault();
		MyForm.submit();
	})
})


// test data to set info in form
// MyForm.setData({"fio":"Иван Ivanovićh O`Connor","email":"email123.a.dff-fad.f-f@ya.ru","phone":"+7(111)222-33-11"});