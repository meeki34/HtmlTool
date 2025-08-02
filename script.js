 // Initialize CodeMirror for HTML editor
        const htmlEditor = CodeMirror.fromTextArea(document.getElementById('htmlInput'), {
            mode: 'htmlmixed',
            autoCloseTags: true,
            autoCloseBrackets: true,
            lineNumbers: true,
            indentWithTabs: true,
            tabSize: 2,
            indentUnit: 2,
            lineWrapping: true
        });

        // Initialize CodeMirror for CSS editor
        const cssEditor = CodeMirror.fromTextArea(document.getElementById('cssInput'), {
            mode: 'css',
            autoCloseBrackets: true,
            lineNumbers: true,
            indentWithTabs: true,
            tabSize: 2,
            indentUnit: 2,
            lineWrapping: true
        });

        // Function to update preview
        function updatePreview() {
            const html = htmlEditor.getValue();
            const css = cssEditor.getValue();
            const iframe = document.getElementById('preview');
            const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
            iframeDoc.open();
            iframeDoc.write(`
                <html>
                <head>
                    <style>${css}</style>
                </head>
                <body>${html}</body>
                </html>
            `);
            iframeDoc.close();
        }

        // Update preview on input
        htmlEditor.on('change', updatePreview);
        cssEditor.on('change', updatePreview);

        // Initial render
        updatePreview();