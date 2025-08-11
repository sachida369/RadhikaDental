import express from "express";
import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Serve static files from the root directory
app.use(express.static(path.join(__dirname, '..')));

// Handle image assets
app.use('/attached_assets', express.static(path.join(__dirname, '..', 'attached_assets')));

// Serve the main HTML file for all routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'index.html'));
});

const port = parseInt(process.env.PORT || '5000', 10);
app.listen(port, "0.0.0.0", () => {
    console.log(`[express] serving static HTML site on port ${port}`);
    console.log(`Visit: http://localhost:${port}`);
});
