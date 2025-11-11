function lerp( a, b, alpha ) {
 return a + alpha * ( b — a )
}
// Example: 
const alpha = Math.sin( performance.now() ) * 0.5 + 0.5 // cycle between 0 and 1
const positionX = lerp( 0, window.innerWidth, alpha )