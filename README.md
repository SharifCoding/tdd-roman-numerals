# Coding Kata - Roman Numerals
Creating a function that converts an integer to its Roman numeral equivalent using TDD (Test Driven Development) approach. Particularly interested in the following:
- Code quality
- Code readability
- Testing (TDD approach)

Write a class that implements the following interface (example given in Java/JavaScript):
```java
public interface RomanNumeralGenerator {
    public String generate(int number);
    }
```
```js
class RomanNumeralGenerator {
  constructor(number) {
    this.number = number;
  }
  generate() {
  }
};
```
Only support numbers between 1 and 3999 and see the following sample inputs and outputs:
```bash
1 = “I”,
5 = “V”,
10 = “X”,
20 = “XX”,
3999 = “MMMCMXCIX”.
```
#### Approach
<b>First Stage:</b> Used a [boilerplate](https://github.com/MCRcodes/react-bootstrap.git) which already has Jest test framework set up for ES6 with Babel solving any compatibility issue. Created a unit tests to check both `RomanNumeralGenerator` function and `number` property are functioning correctly. And created a simple function currently returning `I` number value.

<b>Second Stage:</b> Tidied up test units for the constructor, and also support for numbers between 1 and 5. The function itself has been expanded to support number value up to 5, resulting in all passes for the test units.

#### Further Reading
For an in-depth description of [Roman Numerals](http://en.wikipedia.org/wiki/Roman_numerals)
