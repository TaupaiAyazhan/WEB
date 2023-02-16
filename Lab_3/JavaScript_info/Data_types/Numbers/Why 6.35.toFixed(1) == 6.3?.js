// For instance:
alert( 1.35.toFixed(1) ); // 1.4


// In the similar example below, why is 6.35 rounded to 6.3, not 6.4?
alert( 6.35.toFixed(1) ); // 6.3


// Let’s see:
alert( 6.35.toFixed(20) ); // 6.34999999999999964473


// And what’s for 1.35?
 alert( 1.35.toFixed(20) ); // 1.35000000000000008882


//  How can we fix the problem with 6.35 if we want it to be rounded the right way?
// We should bring it closer to an integer prior to rounding:
alert( (6.35 * 10).toFixed(20) ); // 63.50000000000000000000


// Note that 63.5 has no precision loss at all. That’s because the decimal part 0.5 is actually 1/2. 
// Fractions divided by powers of 2 are exactly represented in the binary system, now we can round it:
alert( Math.round(6.35 * 10) / 10 ); // 6.35 -> 63.5 -> 64(rounded) -> 6.4