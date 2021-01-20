# \<date-card>

This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

## Installation
```bash
npm i date-card
```

## Usage
```html
<script type="module">
  import 'date-card/date-card.js';
</script>

<date-card></date-card>
```
### Recommended fields: 
 - month="" 
 - date="" 
 - day=""

### Optional fields requiring 'title' field in order to display adjacent details block: 
 - title="" 
 - startTime="" 
 - endTime="" 
 - location=""

### Optional setting: 
 - borderSpacing="" (default is 10)



## Tooling configs

For most of the tools, the configuration is in the `package.json` to reduce the amount of files in your project.

If you customize the configuration a lot, you can consider moving them to individual files.

## Local Demo with `es-dev-server`
```bash
npm start
```
To run a local development server that serves the basic demo located in `demo/index.html`


cool beans bitches
