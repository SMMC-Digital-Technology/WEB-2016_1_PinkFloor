var Income = 0;
var taxPayment = 0;

if (Income < 16000) {
    taxPayment = 0;
} else if (Income < 52501) {
    taxPayment = (Income - 16000) * 0.1;
} else if (Income < 13001) {
    taxPayment = (Income - 52500) * 0.16;
} else if (Income < 184500) {
    taxPayment = (Income - 113000) * 0.24;
} else {
    taxPayment = (Income - 184500) * 0.36;
}