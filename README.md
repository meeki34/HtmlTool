HTML & CSS Practice Tool
A simple web-based code editor for practicing HTML and CSS, featuring real-time preview, syntax highlighting, auto-closing brackets, and auto-indentation. Built with HTML, CSS, JavaScript, and CodeMirror for an enhanced coding experience.
Features

Dual Editors: Separate text areas for HTML and CSS with syntax highlighting.
Real-Time Preview: See your code rendered instantly in an iframe.
Auto-Closing Brackets/Tags: Automatically closes {} for CSS and <> for HTML.
Auto-Indentation: Code is formatted with consistent 2-space indentation.
Line Numbers: Navigate code easily with line numbers in both editors.
Responsive Design: Editors and preview adapt to different screen sizes.
Line Wrapping: Long lines wrap automatically for better readability.

Demo
Try the tool live by opening index.html in a web browser or hosting it on a server.
Setup
Prerequisites

A modern web browser (Chrome, Firefox, Edge, etc.).
Internet connection (for CodeMirror CDN dependencies).

Installation

Clone the repository:git clone https://github.com/your-username/html-css-practice-tool.git


Navigate to the project directory:cd html-css-practice-tool


Open index.html in a web browser:
Use a local server (e.g., npx http-server) for best results, as some browsers restrict local file access.
Alternatively, double-click index.html to open it directly (note: some features may be limited due to browser security policies).



Local CodeMirror Setup (Optional)
To run without internet dependency:

Download CodeMirror (v5.65.7) from CodeMirror releases.
Place the codemirror folder in your project directory.
Update the <link> and <script> tags in index.html to reference local files:<link rel="stylesheet" href="codemirror/lib/codemirror.css">
<script src="codemirror/lib/codemirror.js"></script>
<script src="codemirror/mode/htmlmixed/htmlmixed.js"></script>
<script src="codemirror/mode/css/css.js"></script>
<script src="codemirror/addon/edit/closebrackets.js"></script>
<script src="codemirror/addon/fold/brace-fold.js"></script>



Usage

Open index.html in a browser.
Enter HTML code in the left editor and CSS code in the right editor.
Watch the preview pane update in real-time as you type.
Use features like auto-closing brackets and auto-indentation to write code efficiently.

Example starting code:
<h1>Hello, World!</h1>
<p>Start editing your HTML here.</p>

body {
    background-color: #f9f9f9;
}
h1 {
    color: #333;
    text-align: center;
}
p {
    font-size: 16px;
    color: #666;
}

Contributing
Contributions are welcome! To contribute:

Fork the repository.
Create a new branch (git checkout -b feature/your-feature).
Make your changes and commit (git commit -m "Add your feature").
Push to the branch (git push origin feature/your-feature).
Open a pull request.

Please ensure your code follows the existing style and includes relevant documentation.
License
This project is licensed under the MIT License. See the LICENSE file for details.
Acknowledgments

CodeMirror for the powerful code editor library.
Inspired by online code editors like CodePen and JSFiddle.
