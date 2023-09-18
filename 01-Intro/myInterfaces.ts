interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  //   startTrail: () => string;
  startTrail(): string;
  getCoupon(couponnam: string, value: number): number;
}
const subash: User = {
  dbId: 123,
  email: "subash",
  userId: 123,
  startTrail() {
    return "hello";
  },
  getCoupon(couponnam: "subash", off: 3) {
    console.log(couponnam);

    return 10;
  },
};
