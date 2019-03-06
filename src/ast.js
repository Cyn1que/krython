export class AtomExpr {
  constructor(atom, trailers) {
    this.atom = atom;
    this.trailers = trailers;
  }
}

export class Atom {
  constructor(token, value) {
    this.token = token;
    this.value = value;
  }
}

export class Factor {
  constructor(op, factor) {
    this.op = op;
    this.factor = factor;
  }
}

export class Power {
  constructor(atom_expr, factor) {
    this.atom_expr = atom_expr;
    this.factor = factor;
  }
}

export class Term {
  constructor(factors) {
    this.factors = factors;
  }
}

export class Expr {
  constructor(terms) {
    this.terms = terms;
  }
}

export class Op {
  constructor(symbol) {
    this.symbol = symbol;
  }
}