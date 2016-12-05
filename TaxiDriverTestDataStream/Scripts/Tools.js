var Tools =
    {


        //je to parne ? 
        isOdd: function (n) {

            return Tools.isNumber(n) && (Math.abs(n) % 2 == 1);
        },

        isOddCSS: function (n) {

            var ret = "even";
            var iso = Tools.isNumber(n) && (Math.abs(n) % 2 == 1);
            if (iso == 1) ret = "odd";
            return ret;
        },

        //je cialo ? 
        isNumber: function (n) {

            return n == parseFloat(n);
        },


        addSpace: function (origString, fulllength) {
            var newString = origString;
            if (origString && origString.length < fulllength) {
                for (var i = origString.length, l = fulllength; i < l; i++) {
                    newString = newString + " ";
                }
            }

            return newString;
        },


        sortSelect: function (selElem) {
            var tmpAry = new Array();
            for (var i = 0; i < selElem.options.length; i++) {
                tmpAry[i] = new Array();
                tmpAry[i][0] = selElem.options[i].text;
                tmpAry[i][1] = selElem.options[i].value;
            }
            tmpAry.sort();
            while (selElem.options.length > 0) {
                selElem.options[0] = null;
            }
            for (var i = 0; i < tmpAry.length; i++) {
                var op = new Option(tmpAry[i][0], tmpAry[i][1]);
                selElem.options[i] = op;
            }
            return;
        }

    }




