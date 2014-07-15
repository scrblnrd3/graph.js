class Equation implements Drawable {
	public f: Function;
	private _eqn : string;
	private _color: string;




	private _graphs: Array<Graph>;

	constructor(eqn: string, color: string = "red") {
		this._eqn = eqn;
		this.f = new Function("x", "return " + this._eqn);
		this._color = color;

		this._graphs = [];

	}
	draw(graph: Graph): void {
		for (var x = graph.xMin; x < graph.xMax; x += graph.xResolution) {
            var lastX = x - (graph.xResolution);
            var lastY = this.f(lastX);

            var line: Line = new Line(new Point(lastX, lastY), new Point(x, this.f(x)), this.color);
            line.draw(graph);

        }	
	}

	private updateGraphs() {
		for (var i = 0; i < this._graphs.length; i++) {
			this._graphs[i].update();
		}
	}

	equals(other: Equation): boolean {
		return this.eqn === other.eqn && this.color === other.color;
	}

	toString(): string {
		return this._eqn;	
	}

	public add(graph: Graph) {
		this._graphs.push(graph);
	}

	public remove(graph: Graph) {
		for(var i = this._graphs.length - 1; i >= 0; i--) {
    		if(this._graphs[i] === graph) {
    		   this._graphs.splice(i, 1);
    		}
		}
		
	}

	public get eqn() : string {
		return this._eqn;
	}
	public set eqn(v : string) {
		this.f = new Function("x", "return " + v);
		this.updateGraphs();
	}

	public get color() {
		return this._color;
	}

	public set color(v: string) {
		this._color = v;
		this.updateGraphs();
	}



}