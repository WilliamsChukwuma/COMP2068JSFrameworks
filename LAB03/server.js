const connect = require('connect');
const url = require('url');

// Math logic
function calculate(req, res) {
    const queryObject = url.parse(req.url, true).query;
    const method = queryObject.method;
    const x = parseFloat(queryObject.x);
    const y = parseFloat(queryObject.y);

    let result;
    let operator;

    if (isNaN(x) || isNaN(y)) {
        res.end("Please provide valid numbers for x and y.");
        return;
    }

    switch (method) {
        case "add":
            result = x + y;
            operator = "+";
            break;
        case "subtract":
            result = x - y;
            operator = "-";
            break;
        case "multiply":
            result = x * y;
            operator = "*";
            break;
        case "divide":
            if (y === 0) {
                res.end("Cannot divide by zero.");
                return;
            }
            result = x / y;
            operator = "/";
            break;
        default:
            res.end("Invalid method. Use add, subtract, multiply, or divide.");
            return;
    }

    res.end(`${x} ${operator} ${y} = ${result}`);
}

// Create server
const app = connect();
app.use('/lab', calculate);

// Listen on port 3000
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000/lab2");
});
