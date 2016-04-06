# Settings for `roc-package-web-app-react`

## Runtime

| Name                    | Description                                                                                                                                                    | Path                                | CLI option                    | Default                                                                                                       | Type                    | Required |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- | ----------------------------- | ------------------------------------------------------------------------------------------------------------- | ----------------------- | -------- |
| applicationName         | Application name to use for &lt;title&gt;.                                                                                                                     | runtime.applicationName             | --applicationName             | `null`                                                                                                        | `String`                | Yes      |
| clientBlocking          | If &quot;prefetch&quot; should block a route transition on the client.                                                                                         | runtime.clientBlocking              | --clientBlocking              | `false`                                                                                                       | `Boolean`               | No       |
| configWhitelistProperty | A single property to expose to the client from node-config. Make sure that this property does NOT contain any secrets that should not be exposed to the world. | runtime.configWhitelistProperty     | --configWhitelistProperty     | `"DANGEROUSLY_EXPOSE_TO_CLIENT"`                                                                              | `String`                | No       |
| favicon                 | Path to the favicon file, specially handled on the server.                                                                                                     | runtime.favicon                     | --favicon                     | `null`                                                                                                        | `String`                | No       |
| link                    | Link tags to be used in &lt;head&gt;, should be formatted as objects, See https://github.com/nfl/react-helmet.                                                 | runtime.link                        | --link                        | `[{"rel":"icon","href":"favicon.png"}]`                                                                       | `[{String}]`            | No       |
| meta                    | Meta tags to be used in &lt;head&gt;, should be formatted as objects, see https://github.com/nfl/react-helmet.                                                 | runtime.meta                        | --meta                        | `[{"name":"viewport","content":"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"}]` | `[{String}]`            | No       |
| path                    | The basepath for the application.                                                                                                                              | runtime.path                        | --path                        | `"/"`                                                                                                         | `Filepath`              | No       |
| port                    | Port for the server to use.                                                                                                                                    | runtime.port                        | --port                        | `3000`                                                                                                        | `Integer`               | No       |
| script                  | Script tags to be used in &lt;head&gt;, should be formatted as objects, See https://github.com/nfl/react-helmet.                                               | runtime.script                      | --script                      | `null`                                                                                                        | `[{String}]`            | No       |
| serve                   | What folder the server should expose.                                                                                                                          | runtime.serve                       | --serve                       | `["build/client"]`                                                                                            | `Filepath / [Filepath]` | No       |
| ssr                     | If server side rendering should be enabled.                                                                                                                    | runtime.ssr                         | --ssr                         | `true`                                                                                                        | `Boolean`               | No       |
| startBundle             | Relative path to a bundle to start when calling &quot;start&quot;.                                                                                             | runtime.startBundle                 | --startBundle                 | `"build/server/app.js"`                                                                                       | `Filepath`              | No       |
| stats                   | Path to client stats file from build.                                                                                                                          | runtime.stats                       | --stats                       | `"build/client/webpack-stats.json"`                                                                           | `Filepath`              | No       |

### Base
Base tag to be used in <head>, see https://github.com/nfl/react-helmet.

| Name                    | Description                                                                                                                                                    | Path                                | CLI option                    | Default                                                                                                       | Type                    | Required |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- | ----------------------------- | ------------------------------------------------------------------------------------------------------------- | ----------------------- | -------- |
| href                    | The document base address from which relative links are made.                                                                                                  | runtime.base.href                   | --base-href                   | `"ROC_PATH"`                                                                                                  | `String`                | No       |
| target                  | The browsing context in which the links should open.                                                                                                           | runtime.base.target                 | --base-target                 | `null`                                                                                                        | `String`                | No       |

### Debug

| Name                    | Description                                                                                                                                                    | Path                                | CLI option                    | Default                                                                                                       | Type                    | Required |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- | ----------------------------- | ------------------------------------------------------------------------------------------------------------- | ----------------------- | -------- |
| client                  | Filter for debug messages that should be shown for the client, see https://npmjs.com/package/debug.                                                            | runtime.debug.client                | --debug-client                | `"roc:*"`                                                                                                     | `String`                | No       |
| server                  | Filter for debug messages that should be shown for the server, see https://npmjs.com/package/debug.                                                            | runtime.debug.server                | --debug-server                | `"roc:*"`                                                                                                     | `String`                | No       |

### Https

| Name                    | Description                                                                                                                                                    | Path                                | CLI option                    | Default                                                                                                       | Type                    | Required |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- | ----------------------------- | ------------------------------------------------------------------------------------------------------------- | ----------------------- | -------- |
| cert                    | The certificate file to use when using HTTPS. If none is provided and if running in dev a file will be provided automatically.                                 | runtime.https.cert                  | --https-cert                  | `null`                                                                                                        | `Unknown`               | No       |
| key                     | The key file to use when using HTTPS. If none is provided and if running in dev a file will be provided automatically.                                         | runtime.https.key                   | --https-key                   | `null`                                                                                                        | `Unknown`               | No       |
| port                    | Port for the server to use for HTTPS. If none is defined it will not launch in HTTPS.                                                                          | runtime.https.port                  | --https-port                  | `null`                                                                                                        | `Unknown`               | No       |

### Koa
Settings for how Koa should handle paths.

#### Lowercase

| Name                    | Description                                                                                                                                                    | Path                                | CLI option                    | Default                                                                                                       | Type                    | Required |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- | ----------------------------- | ------------------------------------------------------------------------------------------------------------- | ----------------------- | -------- |
| defer                   | If this should be performed after looking for a file on disk.                                                                                                  | runtime.koa.lowercase.defer         | --koa-lowercase-defer         | `true`                                                                                                        | `Boolean`               | No       |
| enabled                 | If paths should be transformed to lowercase.                                                                                                                   | runtime.koa.lowercase.enabled       | --koa-lowercase-enabled       | `true`                                                                                                        | `Boolean`               | No       |

#### Normalize

| Name                    | Description                                                                                                                                                    | Path                                | CLI option                    | Default                                                                                                       | Type                    | Required |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- | ----------------------------- | ------------------------------------------------------------------------------------------------------------- | ----------------------- | -------- |
| defer                   | If this should be performed after looking for a file on disk.                                                                                                  | runtime.koa.normalize.defer         | --koa-normalize-defer         | `false`                                                                                                       | `Boolean`               | No       |
| enabled                 | If paths should be normalized, that is remove extra slashes.                                                                                                   | runtime.koa.normalize.enabled       | --koa-normalize-enabled       | `true`                                                                                                        | `Boolean`               | No       |

#### TrailingSlashes

| Name                    | Description                                                                                                                                                    | Path                                | CLI option                    | Default                                                                                                       | Type                    | Required |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- | ----------------------------- | ------------------------------------------------------------------------------------------------------------- | ----------------------- | -------- |
| defer                   | If this should be performed after looking for a file on disk.                                                                                                  | runtime.koa.trailingSlashes.defer   | --koa-trailingSlashes-defer   | `true`                                                                                                        | `Boolean`               | No       |
| enabled                 | Set to true to enforce trailing slashes, false to remove them and null for no rule.                                                                            | runtime.koa.trailingSlashes.enabled | --koa-trailingSlashes-enabled | `true`                                                                                                        | `Boolean`               | No       |

### Template

| Name                    | Description                                                                                                                                                    | Path                                | CLI option                    | Default                                                                                                       | Type                    | Required |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- | ----------------------------- | ------------------------------------------------------------------------------------------------------------- | ----------------------- | -------- |
| name                    | Name of the template file that will be used. Uses Nunjucks, please see documentation for more info.                                                            | runtime.template.name               | --template-name               | `"main.html"`                                                                                                 | `String`                | No       |
| path                    | A directory where the template for the application can be found. Will default to internal path.                                                                | runtime.template.path               | --template-path               | `null`                                                                                                        | `Filepath`              | No       |