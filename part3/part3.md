1. The bug was that we were trying to add the numbers as strings, but the intended use was to find the integer sum. As shown in the watch expressions screenshot, `num1`, `num2`, and `result` are all strings, but we intended `result` to be Number.
2. One possible fix is to go to `calculateSum` and changing line 9 `let result = num1 + num2` to `let result = Number(num1) + Number(num2)` , then `result` will be the sum of the number representaion of `num` and `num2`.
3. citylots.json
4. part2.js
5. 11.7 MB
6. 2.04 s
7. Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.85 Safari/537.36
8. Apache
9. Tue, 26 Jan 2021 22:14:13 GMT
10. application/json
11. fetchData