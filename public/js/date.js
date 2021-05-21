// <!-- CALCULATION FOR AUTOMATIC AGE BY SET OF BDAY -->

    function formatDate(date){
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;

        return [year, month, day].join('-');

    }

    function getAge(dateString){
        var birthdate = new Date().getTime();
        if (typeof dateString === 'undefined' || dateString === null || (String(dateString) === 'NaN')){
            // variable is undefined or null value
            birthdate = new Date().getTime();
        }
        birthdate = new Date(dateString).getTime();
        var now = new Date().getTime();
        // now find the difference between now and the birthdate
        var n = (now - birthdate)/1000;
        if (n < 604800){ // less than a week
            var day_n = Math.floor(n/86400);
            if (typeof day_n === 'undefined' || day_n === null || (String(day_n) === 'NaN')){
                // variable is undefined or null
                return '';
            }else{
                return day_n + ' day' + (day_n > 1 ? 's' : '') + ' old';
            }
        } else if (n < 2629743){ // less than a month
            var week_n = Math.floor(n/604800);
            if (typeof week_n === 'undefined' || week_n === null || (String(week_n) === 'NaN')){
                return '';
            }else{
                return week_n + ' week' + (week_n > 1 ? 's' : '') + ' old';
            }
        } else if (n < 31562417){ // less than 24 months
            var month_n = Math.floor(n/2629743);
            if (typeof month_n === 'undefined' || month_n === null || (String(month_n) === 'NaN')){
                return '';
            }else{
                return month_n + ' month' + (month_n > 1 ? 's' : '') + ' old';
            }
        }else{
            var year_n = Math.floor(n/31556926);
            if (typeof year_n === 'undefined' || year_n === null || (String(year_n) === 'NaN')){
                return year_n = '';
            }else{
                return year_n + ' year' + (year_n > 1 ? 's' : '') + ' old';
            }
        }
    }

    function getAgeVal(pid){
        var birthdate = formatDate(document.getElementById("birthday").value);
        var count = document.getElementById("birthday").value.length;
        if (count=='10'){
            var age = getAge(birthdate);
            var str = age;
            var res = str.substring(0, 1);
            if (res =='-' || res =='0'){
                document.getElementById("birthday").value = "";
                document.getElementById("age").value = "";
                $('#birthday').focus();
                return false;
            }else{
                document.getElementById("age").value = age;
            }
        }else{
            document.getElementById("age").value = "";
            return false;
        }
    }
