var TownSuite;
(function (TownSuite) {
    var Signatures;
    (function (Signatures) {
        var Pad = (function () {
            function Pad(canvasId) {
                var canvas = document.getElementById(canvasId);
                this.id = canvasId;
                function resizeCanvas() {
                    var ratio = Math.max(window.devicePixelRatio || 1, 1);
                    canvas.width = canvas.offsetWidth * ratio;
                    canvas.height = canvas.offsetHeight * ratio;
                    canvas.getContext("2d").scale(ratio, ratio);
                }
                resizeCanvas();
                this.signaturePad = new SignaturePad(canvas);
            }
            Pad.prototype.toDataURL = function () {
                return this.signaturePad._canvas.toDataURL("image/png", 0.1);
            };
            Pad.prototype.toDataURLWithMarkup = function () {
                return '<img src="' + this.signaturePad._canvas.toDataURL("image/png", 0.1) + '" />';
            };
            Pad.prototype.isEmpty = function () {
                return this.signaturePad.isEmpty();
            };
            Pad.prototype.onEnd = function (callback) {
                this.signaturePad.onEnd = callback;
            };
            Pad.prototype.clear = function () {
                this.signaturePad.clear();
            };
            Pad.prototype.focus = function () {
                this.cursorFocus(document.getElementById(this.id));
                this.animate();
            };
            Pad.prototype.animate = function () {
                $('#' + this.id).removeClass()
                    .addClass('bounceIn animated')
                    .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                    $(this).removeClass();
                });
            };
            Pad.prototype.cursorFocus = function (elem) {
                var x = window.scrollX, y = window.scrollY;
                elem.focus();
                window.scrollTo(x, y + 100);
            };
            return Pad;
        }());
        Signatures.Pad = Pad;
    })(Signatures = TownSuite.Signatures || (TownSuite.Signatures = {}));
})(TownSuite || (TownSuite = {}));
//# sourceMappingURL=eSignature.js.map