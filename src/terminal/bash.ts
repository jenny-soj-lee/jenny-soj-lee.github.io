import FileSystemBash, { FolderBash } from "./fileSystemBash";
import Applications from "./applications";

type Cmd = {
  docs: {
    name: string;
    short: string;
    long: string;
  };
  cmd: (self: Cmd, args: string[], options: string[]) => void;
};

export default function Bash(print: (s: string, md?: boolean) => void) {
  const fileSystem = FileSystemBash();
  let path = { p: fileSystem.goHome() };

  const getApp = Applications(print, path);

  function splitArgs(a: string[]) {
    const args: string[] = [];
    const options: string[] = [];

    a.forEach((v) => {
      if (v === "") return;

      if (v.charAt(0) === "-") {
        options.push(v);
        return;
      }

      args.push(v);
    });

    return [args, options];
  }

  function cmdNotFound(cmdName: string) {
    print(`\n${cmdName}:command not found`);
  }

  function prompt() {
    let out = "";
    for (let i = 0; i < path.p.length; i++) {
      out += path.p[i].name;
      if (i !== 0 && i < path.p.length - 1) out += "/";
    }
    out = out.replace(/^\/home\/user/, "~");
    if (out !== "~") out += " ";
    print(`\nuser:${out}$`);
  }

  function complete(input: string): string | null {
    const parts = input.trimStart().split(/\s+/);
    if (parts.length < 2) return null;

    const partial = parts[parts.length - 1];
    const lastSlash = partial.lastIndexOf("/");
    const dirPart = lastSlash >= 0 ? partial.slice(0, lastSlash + 1) : "";
    const prefix = lastSlash >= 0 ? partial.slice(lastSlash + 1) : partial;

    const searchPath = dirPart ? fileSystem.goto(path.p, dirPart) : [...path.p];
    if (!searchPath) return null;

    const folder = searchPath.at(-1);
    if (!folder || !("children" in folder)) return null;

    const matches = (folder as FolderBash).children.filter((c) =>
      c.name.startsWith(prefix)
    );

    if (matches.length === 0) return null;

    const prefix_ = parts.slice(0, -1).join(" ") + " " + dirPart;

    if (matches.length === 1) {
      const suffix = "children" in matches[0] ? "/" : "";
      return prefix_ + matches[0].name + suffix;
    }

    // Find longest common prefix among matches
    let common = matches[0].name;
    for (const m of matches.slice(1)) {
      let i = 0;
      while (i < common.length && i < m.name.length && common[i] === m.name[i])
        i++;
      common = common.slice(0, i);
    }

    if (common.length > prefix.length) return prefix_ + common;
    return null;
  }

  function input(cmd: string) {
    cmd = cmd.replaceAll(/\s+/g, " ");
    const cmdSplit = cmd.split(" ");
    const cmdName = cmdSplit[0];
    const cmdArgs: string[] = cmdSplit.slice(1);
    console.log("cmd", cmdName, cmdArgs);

    if (cmd) {
      const app = getApp(cmdName);
      if (app) {
        const [args, options] = splitArgs(cmdArgs);
        app(args, options);
      } else cmdNotFound(cmdName);
    }

    prompt();
  }

  return { input, complete };
}
