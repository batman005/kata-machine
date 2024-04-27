import ArrayList from "@code/ArrayList";
import { test_list } from "./ListTest";

test('ArrayList should contain three items after they are appended', () => {
    const list = new ArrayList<number>();
    list.append(1);
    list.append(2);
    list.append(3);
    expect(list.length).toBe(3);
});