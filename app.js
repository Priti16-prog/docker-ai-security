const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send(`
    <html>
    <head>
        <title>AI-Powered Docker Security Analyzer</title>
        <style>
            body{
                background:#0f172a;
                color:white;
                font-family:Arial;
                padding:40px;
            }

            .card{
                width:700px;
                margin:auto;
                background:#1e293b;
                padding:30px;
                border-radius:10px;
                box-shadow:0 0 10px black;
            }

            h1{
                color:#38bdf8;
            }

            h2{
                color:#22c55e;
            }

            li{
                margin:10px;
                font-size:18px;
            }

            .footer{
                margin-top:30px;
                color:#94a3b8;
            }
        </style>
    </head>

    <body>

        <div class="card">

            <h1>AI-Powered Docker Security Analyzer</h1>

            <h2>Application Status : ✅ Running</h2>

            <h3>Container Security</h3>

            <ul>
                <li>✅ Docker Container Running</li>
                <li>✅ Non-root User Enabled</li>
                <li>✅ Trivy Vulnerability Scan Completed</li>
                <li>✅ AI Security Analysis Available</li>
            </ul>

            <h3>Technology Stack</h3>

            <ul>
                <li>Docker</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>Trivy</li>
                <li>AI (ChatGPT)</li>
            </ul>

            <div class="footer">
                Version 1.0.0
            </div>

        </div>

    </body>
    </html>
    `);
});

app.listen(3000, () => {
    console.log("Server started on port 3000");
});
