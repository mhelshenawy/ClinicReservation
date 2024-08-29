export class User {
  constructor(
    public name: string,
    public email: string,
    public password: string,
    public confirmedPassword: string,
    public role: string
  ) {}
}
