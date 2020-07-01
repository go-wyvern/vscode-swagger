'use strict';

import vscode = require('vscode');


export class SwaggerCompletionItemProvider implements vscode.CompletionItemProvider, vscode.Disposable {
    
    public provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {

        // get all text until the `position` and check if it reads `console.`
        // and if so then complete if `log`, `warn`, and `error`
        let linePrefix = document.lineAt(position).text.substr(0, position.character);
        if (!linePrefix.endsWith('console.')) {
            return undefined;
        }

        return [
            new vscode.CompletionItem('log', vscode.CompletionItemKind.Method),
            new vscode.CompletionItem('warn', vscode.CompletionItemKind.Method),
            new vscode.CompletionItem('error', vscode.CompletionItemKind.Method),
        ];
    }


    public dispose() {
        
    }
}