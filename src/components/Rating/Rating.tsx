import React from 'react';
export function Rating() {
  console.log('Rating rendering');
  return (
    <div>
      <Star />
      <Star />
      <Star />
      <Star />
      <Star />
    </div>
  );
}
export function Star() {
  console.log('Star rendering');
  return (
    <span>star-</span>
  );
}

