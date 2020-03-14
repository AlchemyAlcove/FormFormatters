import { DateConverter } from "../../src";
import test from "ava";

test("accepts epoch", t => {
  t.deepEqual(DateConverter(1672556400), "Jan 1, 2023");
});

test("accepts string epoch", t => {
  t.deepEqual(DateConverter("1672556400"), "Jan 1, 2023");
});

test("accepts num", t => {
  t.deepEqual(DateConverter(23), "Dec 31, 1969");
});

test("accepts null", t => {
  t.deepEqual(DateConverter(null), null);
});
