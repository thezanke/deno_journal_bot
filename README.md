# Deno Slack Journal Bot

## Requirements
Must have deno installed. Can be installed via the [install script](https://deno.land/#installation) in most cases. Alternatively, use `brew` on MacOS, `choco` on Windows, or whatever package manager you have access to on Linux.

## Run
Run the server locally using [deno](https://deno.land/#installation):
```bash
deno run -A src/serve.ts
```

### Using Docker:
```bash
docker-compose up
```

### Monitor and restart
There's a package similar to nodemon called [denon](https://deno.land/x/denon), install it via:
```bash
deno install --allow-read --allow-run --allow-write --allow-net -f --unstable https://deno.land/x/denon/denon.ts
```
and then run the app with:
```bash
denon run -A src/serve.ts
```

### Using the VSCode debugger
The .vscode directory contains the required config to use vscode debugger to run our server, hit F5 to start.
