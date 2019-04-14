import { IMonoid } from "../../interfaces/monoid";
import { All as AllSemigroup  } from '../semigroups/All';

export const All = (x: boolean): IMonoid<boolean> => ({
  ...AllSemigroup(x),
  empty: () => All(true),
});
