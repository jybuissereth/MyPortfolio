export class Tag {
  static readonly JAVASCRIPT = new Tag('JavaScript', 'darkgoldenrod');
  static readonly PYTHON = new Tag('Python', 'darkblue');
  static readonly JAVA = new Tag('Java', 'darkred');
  static readonly TYPESCRIPT = new Tag('TypeScript', 'darkcyan');
  static readonly CSHARP = new Tag('C#', 'indigo');
  static readonly CPP = new Tag('C++', 'darkgreen');
  static readonly RUBY = new Tag('Ruby', 'crimson');
  static readonly PHP = new Tag('PHP', 'darkviolet');
  static readonly SWIFT = new Tag('Swift', 'chocolate');
  static readonly KOTLIN = new Tag('Kotlin', 'saddlebrown');
  static readonly GO = new Tag('Go', 'teal');
  static readonly RUST = new Tag('Rust', 'black');
  static readonly REACT = new Tag('React', 'dodgerblue');
  static readonly NESTJS = new Tag('NestJS', 'firebrick');
  static readonly DJANGO = new Tag('Django', 'forestgreen');
  static readonly HTML = new Tag('HTML', 'darkorange');
  static readonly JSON = new Tag('JSON', 'dimgray');
  static readonly REST = new Tag('REST', 'seagreen');
  static readonly XML = new Tag('XML', 'darkmagenta');
  static readonly APEX = new Tag('Apex', 'midnightblue');
  static readonly ANGULAR = new Tag('Angular', 'darkpink');


  private constructor(
    private readonly key: string,
    public readonly color: string
  ) {}
  toString() {
    return this.key;
  }
}
