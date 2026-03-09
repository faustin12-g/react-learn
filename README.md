# React Calculator Project - Learning Notes

## 1. useState Hook

```jsx
import { useState } from 'react'

// Syntax: const [value, setValue] = useState(initialValue)
const [displayNum, setDisplayNum] = useState('0')
const [result, setResult] = useState(null)
```

- **value** - the current state value
- **setValue** - function to update the state
- **initialValue** - what the state starts as

When you call `setValue()`, React **re-renders** the component with the new value.

---

## 2. Event Handling (onClick) - CRITICAL!

### The Infinite Loop Problem

```jsx
// WRONG - Calls function IMMEDIATELY during render → infinite loop
<button onClick={handleClick()}>Click</button>
<button onClick={handleNumber('7')}>7</button>

// CORRECT - Passes function reference, called only on click
<button onClick={handleClick}>Click</button>
<button onClick={() => handleNumber('7')}>7</button>
```

### Rule:
| Syntax | When it runs |
|--------|--------------|
| `onClick={handleClick}` | On click (no arguments) |
| `onClick={() => handleClick('arg')}` | On click (with arguments) |
| `onClick={handleClick()}` | **During render - causes infinite loop!** |

**If your function needs arguments, you MUST use the arrow function wrapper.**

---

## 3. String vs Number - Type Matters!

```jsx
// Passing a number - causes math addition
onClick={() => handleDisplay(7)}
// '5' + 7 = 12 (JavaScript converts string to number, then adds)

// Passing a string - causes string concatenation
onClick={() => handleDisplay('7')}
// '5' + '7' = '57' (strings concatenate)
```

**For calculator displays, always use strings until you need to calculate.**

---

## 4. Conditional State Updates

### Handling Display Input
```jsx
function handleDisplay(value) {
    if (displayNum === '0') {
        // Replace initial zero
        setDisplayNum(value)
    } else {
        // Append to existing
        setDisplayNum(displayNum + value)
    }
}
```

### Handling Delete (Backspace)
```jsx
function handleDelete() {
    if (displayNum.length === 1) {
        // If only 1 char left, reset to '0' (don't leave empty)
        setDisplayNum('0')
    } else {
        // Remove last character
        setDisplayNum(displayNum.slice(0, -1))
    }
}
```

**Key insight:** Always handle edge cases (empty strings, single characters, zero).

---

## 5. Toggle Logic Pattern

```jsx
function handleToggleSign() {
    if (displayNum === '0') return  // Don't toggle zero
    
    if (displayNum.startsWith('-')) {
        // Currently negative → make positive
        setDisplayNum(displayNum.slice(1))
    } else {
        // Currently positive → make negative
        setDisplayNum('-' + displayNum)
    }
}
```

**Pattern:** Check current state → decide which transformation to apply.

---

## 6. Calculating Results

### Why NOT to use eval()
- Security risk (can execute malicious code)
- React Compiler blocks it
- Can't be optimized

### Alternative: new Function()
```jsx
function handleEquals() {
    try {
        const calculated = new Function('return ' + displayNum)()
        setDisplayNum(String(calculated))
    } catch (error) {
        setDisplayNum('Error')
    }
}
```

### Alternative: mathjs library
```bash
npm install mathjs
```
```jsx
import { evaluate } from 'mathjs'

function handleEquals() {
    try {
        const calculated = evaluate(displayNum)
        setDisplayNum(String(calculated))
    } catch (error) {
        setDisplayNum('Error')
    }
}
```

---

## 7. Error Handling with try/catch

```jsx
try {
    // Code that might fail
    const result = riskyOperation()
    setDisplayNum(String(result))
} catch (error) {
    // Handle the error gracefully
    setDisplayNum('Error')
}
```

**Why use it:** Prevents your app from crashing when users enter invalid expressions.

---

## 8. Useful String Methods

| Method | What it does | Example |
|--------|--------------|---------|
| `slice(0, -1)` | Remove last character | `'123'.slice(0,-1)` → `'12'` |
| `slice(1)` | Remove first character | `'-5'.slice(1)` → `'5'` |
| `startsWith('-')` | Check if starts with | `'-5'.startsWith('-')` → `true` |
| `String(num)` | Convert number to string | `String(42)` → `'42'` |
| `parseFloat(str)` | Convert string to number | `parseFloat('42')` → `42` |

---

## 9. Component Structure Pattern

```jsx
import React, { useState } from 'react'

const Calculator = () => {
    // 1. STATE - at the top
    const [displayNum, setDisplayNum] = useState('0')
    
    // 2. HANDLER FUNCTIONS - in the middle
    function handleDisplay(value) { /* ... */ }
    function handleDelete() { /* ... */ }
    function handleEquals() { /* ... */ }
    function handleToggleSign() { /* ... */ }
    
    // 3. JSX RETURN - at the bottom
    return (
        <div>
            {/* Display shows state */}
            <div>{displayNum}</div>
            
            {/* Buttons call handlers */}
            <button onClick={() => handleDisplay('7')}>7</button>
            <button onClick={handleEquals}>=</button>
        </div>
    )
}

export default Calculator
```

---

## Key Takeaways

1. **useState** creates reactive variables that trigger re-renders
2. **Never call functions directly in onClick** - use arrow functions for arguments
3. **Keep state as strings** for display, convert to numbers only for math
4. **Handle edge cases** (empty, zero, single character)
5. **Use try/catch** for operations that might fail
6. **Avoid eval()** - use safer alternatives like mathjs
