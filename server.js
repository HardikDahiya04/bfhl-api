const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

//
app.use(cors());
app.use(express.json());

function isNumber(str) {
    return /^-?\d+$/.test(str.trim());
}

function isAlpha(char) {
    return /^[A-Za-z]$/.test(char);
}

function isSpecial(char) {
    return /^[^A-Za-z0-9]$/.test(char);
}

app.post('/bfhl', (req, res) => {
    try {
        const { data } = req.body;

        // 
        if (!data || !Array.isArray(data)) {
            return res.status(400).json({
                is_success: false,
                message: "Invalid input. 'data' should be an array."
            });
        }

        const oddNumbers = [];
        const evenNumbers = [];
        const alphabets = [];
        const specialCharacters = [];
        let sum = 0;
        let allAlphaChars = []; 

        data.forEach(item => {
            if (typeof item === 'string') {
                if (isNumber(item)) {
                    const num = parseInt(item);
                    sum += num;

                    if (num % 2 === 0) {
                        evenNumbers.push(item);
                    } else {
                        oddNumbers.push(item);
                    }
                } 
                else if (/^[A-Za-z]+$/.test(item)) {
                    alphabets.push(item.toUpperCase());

                    for (let char of item) {
                        allAlphaChars.push(char);
                    }
                }
                else if (item.length === 1 && isSpecial(item)) {
                    specialCharacters.push(item);
                }
                else {
                    let hasAlpha = false;
                    let hasSpecial = false;
                    let hasNumber = false;

                    for (let char of item) {
                        if (isAlpha(char)) {
                            hasAlpha = true;
                            allAlphaChars.push(char);
                        } else if (isSpecial(char)) {
                            hasSpecial = true;
                            if (!specialCharacters.includes(char)) {
                                specialCharacters.push(char);
                            }
                        } else if (/\d/.test(char)) {
                            hasNumber = true;
                        }
                    }

                    if (hasAlpha && !hasSpecial && !hasNumber) {
                        alphabets.push(item.toUpperCase());
                    }
                }
            }
        });

        let concatString = '';
        if (allAlphaChars.length > 0) {
            const reversedChars = allAlphaChars.reverse();

            for (let i = 0; i < reversedChars.length; i++) {
                if (i % 2 === 0) {
                    concatString += reversedChars[i].toUpperCase();
                } else {
                    concatString += reversedChars[i].toLowerCase();
                }
            }
        }

        
        const response = {
            is_success: true,
            user_id: "hardik_dahiya_25052004",  
            email: "hardik.dahiya2022@vitstudent.ac.in",
            roll_number: "22BCE1301",
            odd_numbers: oddNumbers,
            even_numbers: evenNumbers,
            alphabets: alphabets,
            special_characters: specialCharacters,
            sum: sum.toString(),
            concat_string: concatString
        };

        res.status(200).json(response);

    } catch (error) {
        console.error('Error processing request:', error);
        res.status(500).json({
            is_success: false,
            message: "Internal server error"
        });
    }
});

app.get('/bfhl', (req, res) => {
    res.status(200).json({
        operation_code: 1
    });
});

app.get('/', (req, res) => {
    res.json({
        message: "BFHL API is running",
        version: "1.0.0",
        endpoints: {
            "POST /bfhl": "Main API endpoint - processes data array",
            "GET /bfhl": "Returns operation code"
        }
    });
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        is_success: false,
        message: "Something went wrong!"
    });
});

app.use('*', (req, res) => {
    res.status(404).json({
        is_success: false,
        message: "Endpoint not found"
    });
});

app.listen(PORT, () => {
    console.log(`🚀 BFHL API Server is running on port ${PORT}`);
    console.log(`📍 Main endpoint: http://localhost:${PORT}/bfhl`);
});

module.exports = app;
