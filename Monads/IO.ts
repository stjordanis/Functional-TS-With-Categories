export function demo() {

    class Id<T>
    {
        private Value: T

        constructor(value: T) { this.Value = value; }

        map<T1>(f: (y: T) => T1): Id<T1> { return new Id<T1>(f(this.Value)) };
        bind<T1>(f: (y: T) => Id<T1>): Id<T1> { return f(this.Value) };

        public static of<T>(v: T) { return new Id<T>(v); }

        matchWith(alg: (y: T) => void): void { alg(this.Value) };

    }


    console.log(new Id(3))

}


