//
// Simple Ratio 800/650 Pigment specific simple ratio B1 (abbrv. PSSRb1)
//
// General formula: 800nm/650nm
//
// URL https://www.indexdatabase.de/db/si-single.php?sensor_id=96&rsindex_id=283
//

let index = B08 / B04;
let min = 0.058;
let max = 17.157;

// colorBlend will return a color when the index is between min and max and white when it is less than min.
// To see black when it is more than max, uncomment the last line of colorBlend.
// The min/max values were computed automatically and may be poorly specified, feel free to change them to tweak the displayed range.

let underflow_color = [1, 1, 1];
let low_color = [208/255, 88/255, 126/255];
let high_color = [241/255, 234/255, 200/255];
let overflow_color = [0, 0, 0];

return colorBlend(index, [min, min, max],
[
	underflow_color,
	low_color,
	high_color,
	//overflow_color // uncomment to see overflows
]);