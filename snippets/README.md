# Snippets guide

## Developing snippets

Snippets are written in `yaml` because that's easier to structure than JSON. However, VS Code expects a JSON format. Therefore you need to run the `build:grammar` script afterwards. This will produce a JSON version of the file. Afterwards you need to restart your extension window for the changes to take effect.

Take into account multilines. All `body`s that starts with a `|` will have an extra new line at the end. On the other hand, if it starts with a `|-`, it will not have an extra new line.
