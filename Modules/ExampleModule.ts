module ExampleModule {
 
 	// These two functions are painfully slow ;)
 	export function colorFn(x: number): number[] {
 		return [Math.sin(x) * 0.5 + 0.5,
 				Math.sin(x + 0.333 * Math.PI) * 0.5 + 0.5,
 				Math.sin(x + 0.666 * Math.PI) * 0.5 + 0.5,
 				1.0];
 	}

	export function pixelFn(x: number, y: number, t: number, prmA: number, prmB: number): number[] {
		let r = Math.sin(t + x * 2.0) + Math.cos(t + y * 2.0);
		r += Math.sin(t + x * Math.sin(t + x * 0.02) * prmA) + Math.cos(t + y * (Math.cos(t * 0.7) * 5.0)) * prmB;
		return colorFn(r + t);
	}

	export function square(x: number): number {
		return x * x;
	}

	export class TheClass {

		private index: number;

		constructor(index: number) {
			this.index = index;
			post("TheClass.constructor was called with the number parameter " + index + "\n");
		}

		getIndex(): number {
			return this.index;
		}

		post(): void {
			post("TheClass: post!");
			post();
		}
	}
}
