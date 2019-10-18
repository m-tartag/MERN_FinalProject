const ARR1 = [];
const ARR2 = [];
const ARR3 = [];

for (let i = 0; i < cost_per_minute.length; i++) {
  ARR1.push(cost_per_minute[i] * ride_time);
}
console.log(ARR1);
for (let i = 0; i < cost_per_mile.length; i++) {
  ARR2.push(cost_per_mile[i] * ride_distance);
}
console.log(ARR2);

for (let i = 0; i < cost_per_minute.length; i++) {
  ARR3.push(ARR1[i] + ARR2[i]);
}
return ARR3;
