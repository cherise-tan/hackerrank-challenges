/*
 * Complete the reverseString function -> using TRY/CATCH/FINALLY
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
  try {
    var s = s.split("").reverse().join("");
  } catch (err) {
    console.log(err.message);
  } finally {
    console.log(s);
  }
}
