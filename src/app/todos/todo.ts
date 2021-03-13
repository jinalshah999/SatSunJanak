export class Todo {
  public constructor(
    public Id: string,
    public Title: string,
    public Status: string
  ) {}
}

export class todoResolve {
  public constructor(todo: Todo[], error: any) {}
}
