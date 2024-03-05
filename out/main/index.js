import require$$2 from "path";
import electron$2, { app as app$1, BrowserWindow } from "electron";
import require$$1 from "fs";
import require$$0$1 from "constants";
import require$$0$2 from "stream";
import require$$4 from "util";
import require$$5 from "assert";
import require$$0$3 from "child_process";
import require$$1$1 from "os";
import require$$0$4 from "events";
import require$$0$5 from "http";
import require$$1$2 from "https";
import path$9 from "node:path";
import require$$2$1 from "querystring";
import require$$0$6 from "tty";
import require$$4$1 from "net";
import __cjs_url__ from "node:url";
import __cjs_path__ from "node:path";
import __cjs_mod__ from "node:module";
const __filename = __cjs_url__.fileURLToPath(import.meta.url);
const __dirname = __cjs_path__.dirname(__filename);
const require2 = __cjs_mod__.createRequire(import.meta.url);
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
function getAugmentedNamespace(n) {
  if (n.__esModule)
    return n;
  var f = n.default;
  if (typeof f == "function") {
    var a = function a2() {
      if (this instanceof a2) {
        return Reflect.construct(f, arguments, this.constructor);
      }
      return f.apply(this, arguments);
    };
    a.prototype = f.prototype;
  } else
    a = {};
  Object.defineProperty(a, "__esModule", { value: true });
  Object.keys(n).forEach(function(k) {
    var d = Object.getOwnPropertyDescriptor(n, k);
    Object.defineProperty(a, k, d.get ? d : {
      enumerable: true,
      get: function() {
        return n[k];
      }
    });
  });
  return a;
}
var polyfills;
var hasRequiredPolyfills;
function requirePolyfills() {
  if (hasRequiredPolyfills)
    return polyfills;
  hasRequiredPolyfills = 1;
  var constants = require$$0$1;
  var origCwd = process.cwd;
  var cwd = null;
  var platform = process.env.GRACEFUL_FS_PLATFORM || process.platform;
  process.cwd = function() {
    if (!cwd)
      cwd = origCwd.call(process);
    return cwd;
  };
  try {
    process.cwd();
  } catch (er) {
  }
  if (typeof process.chdir === "function") {
    var chdir = process.chdir;
    process.chdir = function(d) {
      cwd = null;
      chdir.call(process, d);
    };
    if (Object.setPrototypeOf)
      Object.setPrototypeOf(process.chdir, chdir);
  }
  polyfills = patch;
  function patch(fs2) {
    if (constants.hasOwnProperty("O_SYMLINK") && process.version.match(/^v0\.6\.[0-2]|^v0\.5\./)) {
      patchLchmod(fs2);
    }
    if (!fs2.lutimes) {
      patchLutimes(fs2);
    }
    fs2.chown = chownFix(fs2.chown);
    fs2.fchown = chownFix(fs2.fchown);
    fs2.lchown = chownFix(fs2.lchown);
    fs2.chmod = chmodFix(fs2.chmod);
    fs2.fchmod = chmodFix(fs2.fchmod);
    fs2.lchmod = chmodFix(fs2.lchmod);
    fs2.chownSync = chownFixSync(fs2.chownSync);
    fs2.fchownSync = chownFixSync(fs2.fchownSync);
    fs2.lchownSync = chownFixSync(fs2.lchownSync);
    fs2.chmodSync = chmodFixSync(fs2.chmodSync);
    fs2.fchmodSync = chmodFixSync(fs2.fchmodSync);
    fs2.lchmodSync = chmodFixSync(fs2.lchmodSync);
    fs2.stat = statFix(fs2.stat);
    fs2.fstat = statFix(fs2.fstat);
    fs2.lstat = statFix(fs2.lstat);
    fs2.statSync = statFixSync(fs2.statSync);
    fs2.fstatSync = statFixSync(fs2.fstatSync);
    fs2.lstatSync = statFixSync(fs2.lstatSync);
    if (fs2.chmod && !fs2.lchmod) {
      fs2.lchmod = function(path2, mode, cb) {
        if (cb)
          process.nextTick(cb);
      };
      fs2.lchmodSync = function() {
      };
    }
    if (fs2.chown && !fs2.lchown) {
      fs2.lchown = function(path2, uid, gid, cb) {
        if (cb)
          process.nextTick(cb);
      };
      fs2.lchownSync = function() {
      };
    }
    if (platform === "win32") {
      fs2.rename = typeof fs2.rename !== "function" ? fs2.rename : function(fs$rename) {
        function rename(from, to, cb) {
          var start2 = Date.now();
          var backoff = 0;
          fs$rename(from, to, function CB(er) {
            if (er && (er.code === "EACCES" || er.code === "EPERM" || er.code === "EBUSY") && Date.now() - start2 < 6e4) {
              setTimeout(function() {
                fs2.stat(to, function(stater, st) {
                  if (stater && stater.code === "ENOENT")
                    fs$rename(from, to, CB);
                  else
                    cb(er);
                });
              }, backoff);
              if (backoff < 100)
                backoff += 10;
              return;
            }
            if (cb)
              cb(er);
          });
        }
        if (Object.setPrototypeOf)
          Object.setPrototypeOf(rename, fs$rename);
        return rename;
      }(fs2.rename);
    }
    fs2.read = typeof fs2.read !== "function" ? fs2.read : function(fs$read) {
      function read(fd, buffer, offset, length, position, callback_) {
        var callback;
        if (callback_ && typeof callback_ === "function") {
          var eagCounter = 0;
          callback = function(er, _, __) {
            if (er && er.code === "EAGAIN" && eagCounter < 10) {
              eagCounter++;
              return fs$read.call(fs2, fd, buffer, offset, length, position, callback);
            }
            callback_.apply(this, arguments);
          };
        }
        return fs$read.call(fs2, fd, buffer, offset, length, position, callback);
      }
      if (Object.setPrototypeOf)
        Object.setPrototypeOf(read, fs$read);
      return read;
    }(fs2.read);
    fs2.readSync = typeof fs2.readSync !== "function" ? fs2.readSync : /* @__PURE__ */ function(fs$readSync) {
      return function(fd, buffer, offset, length, position) {
        var eagCounter = 0;
        while (true) {
          try {
            return fs$readSync.call(fs2, fd, buffer, offset, length, position);
          } catch (er) {
            if (er.code === "EAGAIN" && eagCounter < 10) {
              eagCounter++;
              continue;
            }
            throw er;
          }
        }
      };
    }(fs2.readSync);
    function patchLchmod(fs22) {
      fs22.lchmod = function(path2, mode, callback) {
        fs22.open(
          path2,
          constants.O_WRONLY | constants.O_SYMLINK,
          mode,
          function(err, fd) {
            if (err) {
              if (callback)
                callback(err);
              return;
            }
            fs22.fchmod(fd, mode, function(err2) {
              fs22.close(fd, function(err22) {
                if (callback)
                  callback(err2 || err22);
              });
            });
          }
        );
      };
      fs22.lchmodSync = function(path2, mode) {
        var fd = fs22.openSync(path2, constants.O_WRONLY | constants.O_SYMLINK, mode);
        var threw = true;
        var ret;
        try {
          ret = fs22.fchmodSync(fd, mode);
          threw = false;
        } finally {
          if (threw) {
            try {
              fs22.closeSync(fd);
            } catch (er) {
            }
          } else {
            fs22.closeSync(fd);
          }
        }
        return ret;
      };
    }
    function patchLutimes(fs22) {
      if (constants.hasOwnProperty("O_SYMLINK") && fs22.futimes) {
        fs22.lutimes = function(path2, at, mt, cb) {
          fs22.open(path2, constants.O_SYMLINK, function(er, fd) {
            if (er) {
              if (cb)
                cb(er);
              return;
            }
            fs22.futimes(fd, at, mt, function(er2) {
              fs22.close(fd, function(er22) {
                if (cb)
                  cb(er2 || er22);
              });
            });
          });
        };
        fs22.lutimesSync = function(path2, at, mt) {
          var fd = fs22.openSync(path2, constants.O_SYMLINK);
          var ret;
          var threw = true;
          try {
            ret = fs22.futimesSync(fd, at, mt);
            threw = false;
          } finally {
            if (threw) {
              try {
                fs22.closeSync(fd);
              } catch (er) {
              }
            } else {
              fs22.closeSync(fd);
            }
          }
          return ret;
        };
      } else if (fs22.futimes) {
        fs22.lutimes = function(_a, _b, _c, cb) {
          if (cb)
            process.nextTick(cb);
        };
        fs22.lutimesSync = function() {
        };
      }
    }
    function chmodFix(orig) {
      if (!orig)
        return orig;
      return function(target, mode, cb) {
        return orig.call(fs2, target, mode, function(er) {
          if (chownErOk(er))
            er = null;
          if (cb)
            cb.apply(this, arguments);
        });
      };
    }
    function chmodFixSync(orig) {
      if (!orig)
        return orig;
      return function(target, mode) {
        try {
          return orig.call(fs2, target, mode);
        } catch (er) {
          if (!chownErOk(er))
            throw er;
        }
      };
    }
    function chownFix(orig) {
      if (!orig)
        return orig;
      return function(target, uid, gid, cb) {
        return orig.call(fs2, target, uid, gid, function(er) {
          if (chownErOk(er))
            er = null;
          if (cb)
            cb.apply(this, arguments);
        });
      };
    }
    function chownFixSync(orig) {
      if (!orig)
        return orig;
      return function(target, uid, gid) {
        try {
          return orig.call(fs2, target, uid, gid);
        } catch (er) {
          if (!chownErOk(er))
            throw er;
        }
      };
    }
    function statFix(orig) {
      if (!orig)
        return orig;
      return function(target, options, cb) {
        if (typeof options === "function") {
          cb = options;
          options = null;
        }
        function callback(er, stats) {
          if (stats) {
            if (stats.uid < 0)
              stats.uid += 4294967296;
            if (stats.gid < 0)
              stats.gid += 4294967296;
          }
          if (cb)
            cb.apply(this, arguments);
        }
        return options ? orig.call(fs2, target, options, callback) : orig.call(fs2, target, callback);
      };
    }
    function statFixSync(orig) {
      if (!orig)
        return orig;
      return function(target, options) {
        var stats = options ? orig.call(fs2, target, options) : orig.call(fs2, target);
        if (stats) {
          if (stats.uid < 0)
            stats.uid += 4294967296;
          if (stats.gid < 0)
            stats.gid += 4294967296;
        }
        return stats;
      };
    }
    function chownErOk(er) {
      if (!er)
        return true;
      if (er.code === "ENOSYS")
        return true;
      var nonroot = !process.getuid || process.getuid() !== 0;
      if (nonroot) {
        if (er.code === "EINVAL" || er.code === "EPERM")
          return true;
      }
      return false;
    }
  }
  return polyfills;
}
var legacyStreams;
var hasRequiredLegacyStreams;
function requireLegacyStreams() {
  if (hasRequiredLegacyStreams)
    return legacyStreams;
  hasRequiredLegacyStreams = 1;
  var Stream = require$$0$2.Stream;
  legacyStreams = legacy;
  function legacy(fs2) {
    return {
      ReadStream,
      WriteStream
    };
    function ReadStream(path2, options) {
      if (!(this instanceof ReadStream))
        return new ReadStream(path2, options);
      Stream.call(this);
      var self2 = this;
      this.path = path2;
      this.fd = null;
      this.readable = true;
      this.paused = false;
      this.flags = "r";
      this.mode = 438;
      this.bufferSize = 64 * 1024;
      options = options || {};
      var keys = Object.keys(options);
      for (var index = 0, length = keys.length; index < length; index++) {
        var key = keys[index];
        this[key] = options[key];
      }
      if (this.encoding)
        this.setEncoding(this.encoding);
      if (this.start !== void 0) {
        if ("number" !== typeof this.start) {
          throw TypeError("start must be a Number");
        }
        if (this.end === void 0) {
          this.end = Infinity;
        } else if ("number" !== typeof this.end) {
          throw TypeError("end must be a Number");
        }
        if (this.start > this.end) {
          throw new Error("start must be <= end");
        }
        this.pos = this.start;
      }
      if (this.fd !== null) {
        process.nextTick(function() {
          self2._read();
        });
        return;
      }
      fs2.open(this.path, this.flags, this.mode, function(err, fd) {
        if (err) {
          self2.emit("error", err);
          self2.readable = false;
          return;
        }
        self2.fd = fd;
        self2.emit("open", fd);
        self2._read();
      });
    }
    function WriteStream(path2, options) {
      if (!(this instanceof WriteStream))
        return new WriteStream(path2, options);
      Stream.call(this);
      this.path = path2;
      this.fd = null;
      this.writable = true;
      this.flags = "w";
      this.encoding = "binary";
      this.mode = 438;
      this.bytesWritten = 0;
      options = options || {};
      var keys = Object.keys(options);
      for (var index = 0, length = keys.length; index < length; index++) {
        var key = keys[index];
        this[key] = options[key];
      }
      if (this.start !== void 0) {
        if ("number" !== typeof this.start) {
          throw TypeError("start must be a Number");
        }
        if (this.start < 0) {
          throw new Error("start must be >= zero");
        }
        this.pos = this.start;
      }
      this.busy = false;
      this._queue = [];
      if (this.fd === null) {
        this._open = fs2.open;
        this._queue.push([this._open, this.path, this.flags, this.mode, void 0]);
        this.flush();
      }
    }
  }
  return legacyStreams;
}
var clone_1;
var hasRequiredClone;
function requireClone() {
  if (hasRequiredClone)
    return clone_1;
  hasRequiredClone = 1;
  clone_1 = clone;
  var getPrototypeOf = Object.getPrototypeOf || function(obj) {
    return obj.__proto__;
  };
  function clone(obj) {
    if (obj === null || typeof obj !== "object")
      return obj;
    if (obj instanceof Object)
      var copy = { __proto__: getPrototypeOf(obj) };
    else
      var copy = /* @__PURE__ */ Object.create(null);
    Object.getOwnPropertyNames(obj).forEach(function(key) {
      Object.defineProperty(copy, key, Object.getOwnPropertyDescriptor(obj, key));
    });
    return copy;
  }
  return clone_1;
}
var gracefulFs;
var hasRequiredGracefulFs;
function requireGracefulFs() {
  if (hasRequiredGracefulFs)
    return gracefulFs;
  hasRequiredGracefulFs = 1;
  var fs2 = require$$1;
  var polyfills2 = requirePolyfills();
  var legacy = requireLegacyStreams();
  var clone = requireClone();
  var util = require$$4;
  var gracefulQueue;
  var previousSymbol;
  if (typeof Symbol === "function" && typeof Symbol.for === "function") {
    gracefulQueue = Symbol.for("graceful-fs.queue");
    previousSymbol = Symbol.for("graceful-fs.previous");
  } else {
    gracefulQueue = "___graceful-fs.queue";
    previousSymbol = "___graceful-fs.previous";
  }
  function noop() {
  }
  function publishQueue(context, queue2) {
    Object.defineProperty(context, gracefulQueue, {
      get: function() {
        return queue2;
      }
    });
  }
  var debug2 = noop;
  if (util.debuglog)
    debug2 = util.debuglog("gfs4");
  else if (/\bgfs4\b/i.test(process.env.NODE_DEBUG || ""))
    debug2 = function() {
      var m = util.format.apply(util, arguments);
      m = "GFS4: " + m.split(/\n/).join("\nGFS4: ");
      console.error(m);
    };
  if (!fs2[gracefulQueue]) {
    var queue = commonjsGlobal[gracefulQueue] || [];
    publishQueue(fs2, queue);
    fs2.close = function(fs$close) {
      function close(fd, cb) {
        return fs$close.call(fs2, fd, function(err) {
          if (!err) {
            resetQueue();
          }
          if (typeof cb === "function")
            cb.apply(this, arguments);
        });
      }
      Object.defineProperty(close, previousSymbol, {
        value: fs$close
      });
      return close;
    }(fs2.close);
    fs2.closeSync = function(fs$closeSync) {
      function closeSync(fd) {
        fs$closeSync.apply(fs2, arguments);
        resetQueue();
      }
      Object.defineProperty(closeSync, previousSymbol, {
        value: fs$closeSync
      });
      return closeSync;
    }(fs2.closeSync);
    if (/\bgfs4\b/i.test(process.env.NODE_DEBUG || "")) {
      process.on("exit", function() {
        debug2(fs2[gracefulQueue]);
        require$$5.equal(fs2[gracefulQueue].length, 0);
      });
    }
  }
  if (!commonjsGlobal[gracefulQueue]) {
    publishQueue(commonjsGlobal, fs2[gracefulQueue]);
  }
  gracefulFs = patch(clone(fs2));
  if (process.env.TEST_GRACEFUL_FS_GLOBAL_PATCH && !fs2.__patched) {
    gracefulFs = patch(fs2);
    fs2.__patched = true;
  }
  function patch(fs22) {
    polyfills2(fs22);
    fs22.gracefulify = patch;
    fs22.createReadStream = createReadStream;
    fs22.createWriteStream = createWriteStream;
    var fs$readFile = fs22.readFile;
    fs22.readFile = readFile2;
    function readFile2(path2, options, cb) {
      if (typeof options === "function")
        cb = options, options = null;
      return go$readFile(path2, options, cb);
      function go$readFile(path22, options2, cb2, startTime) {
        return fs$readFile(path22, options2, function(err) {
          if (err && (err.code === "EMFILE" || err.code === "ENFILE"))
            enqueue([go$readFile, [path22, options2, cb2], err, startTime || Date.now(), Date.now()]);
          else {
            if (typeof cb2 === "function")
              cb2.apply(this, arguments);
          }
        });
      }
    }
    var fs$writeFile = fs22.writeFile;
    fs22.writeFile = writeFile2;
    function writeFile2(path2, data, options, cb) {
      if (typeof options === "function")
        cb = options, options = null;
      return go$writeFile(path2, data, options, cb);
      function go$writeFile(path22, data2, options2, cb2, startTime) {
        return fs$writeFile(path22, data2, options2, function(err) {
          if (err && (err.code === "EMFILE" || err.code === "ENFILE"))
            enqueue([go$writeFile, [path22, data2, options2, cb2], err, startTime || Date.now(), Date.now()]);
          else {
            if (typeof cb2 === "function")
              cb2.apply(this, arguments);
          }
        });
      }
    }
    var fs$appendFile = fs22.appendFile;
    if (fs$appendFile)
      fs22.appendFile = appendFile;
    function appendFile(path2, data, options, cb) {
      if (typeof options === "function")
        cb = options, options = null;
      return go$appendFile(path2, data, options, cb);
      function go$appendFile(path22, data2, options2, cb2, startTime) {
        return fs$appendFile(path22, data2, options2, function(err) {
          if (err && (err.code === "EMFILE" || err.code === "ENFILE"))
            enqueue([go$appendFile, [path22, data2, options2, cb2], err, startTime || Date.now(), Date.now()]);
          else {
            if (typeof cb2 === "function")
              cb2.apply(this, arguments);
          }
        });
      }
    }
    var fs$copyFile = fs22.copyFile;
    if (fs$copyFile)
      fs22.copyFile = copyFile;
    function copyFile(src2, dest, flags, cb) {
      if (typeof flags === "function") {
        cb = flags;
        flags = 0;
      }
      return go$copyFile(src2, dest, flags, cb);
      function go$copyFile(src22, dest2, flags2, cb2, startTime) {
        return fs$copyFile(src22, dest2, flags2, function(err) {
          if (err && (err.code === "EMFILE" || err.code === "ENFILE"))
            enqueue([go$copyFile, [src22, dest2, flags2, cb2], err, startTime || Date.now(), Date.now()]);
          else {
            if (typeof cb2 === "function")
              cb2.apply(this, arguments);
          }
        });
      }
    }
    var fs$readdir = fs22.readdir;
    fs22.readdir = readdir;
    var noReaddirOptionVersions = /^v[0-5]\./;
    function readdir(path2, options, cb) {
      if (typeof options === "function")
        cb = options, options = null;
      var go$readdir = noReaddirOptionVersions.test(process.version) ? function go$readdir2(path22, options2, cb2, startTime) {
        return fs$readdir(path22, fs$readdirCallback(
          path22,
          options2,
          cb2,
          startTime
        ));
      } : function go$readdir2(path22, options2, cb2, startTime) {
        return fs$readdir(path22, options2, fs$readdirCallback(
          path22,
          options2,
          cb2,
          startTime
        ));
      };
      return go$readdir(path2, options, cb);
      function fs$readdirCallback(path22, options2, cb2, startTime) {
        return function(err, files) {
          if (err && (err.code === "EMFILE" || err.code === "ENFILE"))
            enqueue([
              go$readdir,
              [path22, options2, cb2],
              err,
              startTime || Date.now(),
              Date.now()
            ]);
          else {
            if (files && files.sort)
              files.sort();
            if (typeof cb2 === "function")
              cb2.call(this, err, files);
          }
        };
      }
    }
    if (process.version.substr(0, 4) === "v0.8") {
      var legStreams = legacy(fs22);
      ReadStream = legStreams.ReadStream;
      WriteStream = legStreams.WriteStream;
    }
    var fs$ReadStream = fs22.ReadStream;
    if (fs$ReadStream) {
      ReadStream.prototype = Object.create(fs$ReadStream.prototype);
      ReadStream.prototype.open = ReadStream$open;
    }
    var fs$WriteStream = fs22.WriteStream;
    if (fs$WriteStream) {
      WriteStream.prototype = Object.create(fs$WriteStream.prototype);
      WriteStream.prototype.open = WriteStream$open;
    }
    Object.defineProperty(fs22, "ReadStream", {
      get: function() {
        return ReadStream;
      },
      set: function(val) {
        ReadStream = val;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(fs22, "WriteStream", {
      get: function() {
        return WriteStream;
      },
      set: function(val) {
        WriteStream = val;
      },
      enumerable: true,
      configurable: true
    });
    var FileReadStream = ReadStream;
    Object.defineProperty(fs22, "FileReadStream", {
      get: function() {
        return FileReadStream;
      },
      set: function(val) {
        FileReadStream = val;
      },
      enumerable: true,
      configurable: true
    });
    var FileWriteStream = WriteStream;
    Object.defineProperty(fs22, "FileWriteStream", {
      get: function() {
        return FileWriteStream;
      },
      set: function(val) {
        FileWriteStream = val;
      },
      enumerable: true,
      configurable: true
    });
    function ReadStream(path2, options) {
      if (this instanceof ReadStream)
        return fs$ReadStream.apply(this, arguments), this;
      else
        return ReadStream.apply(Object.create(ReadStream.prototype), arguments);
    }
    function ReadStream$open() {
      var that = this;
      open(that.path, that.flags, that.mode, function(err, fd) {
        if (err) {
          if (that.autoClose)
            that.destroy();
          that.emit("error", err);
        } else {
          that.fd = fd;
          that.emit("open", fd);
          that.read();
        }
      });
    }
    function WriteStream(path2, options) {
      if (this instanceof WriteStream)
        return fs$WriteStream.apply(this, arguments), this;
      else
        return WriteStream.apply(Object.create(WriteStream.prototype), arguments);
    }
    function WriteStream$open() {
      var that = this;
      open(that.path, that.flags, that.mode, function(err, fd) {
        if (err) {
          that.destroy();
          that.emit("error", err);
        } else {
          that.fd = fd;
          that.emit("open", fd);
        }
      });
    }
    function createReadStream(path2, options) {
      return new fs22.ReadStream(path2, options);
    }
    function createWriteStream(path2, options) {
      return new fs22.WriteStream(path2, options);
    }
    var fs$open = fs22.open;
    fs22.open = open;
    function open(path2, flags, mode, cb) {
      if (typeof mode === "function")
        cb = mode, mode = null;
      return go$open(path2, flags, mode, cb);
      function go$open(path22, flags2, mode2, cb2, startTime) {
        return fs$open(path22, flags2, mode2, function(err, fd) {
          if (err && (err.code === "EMFILE" || err.code === "ENFILE"))
            enqueue([go$open, [path22, flags2, mode2, cb2], err, startTime || Date.now(), Date.now()]);
          else {
            if (typeof cb2 === "function")
              cb2.apply(this, arguments);
          }
        });
      }
    }
    return fs22;
  }
  function enqueue(elem) {
    debug2("ENQUEUE", elem[0].name, elem[1]);
    fs2[gracefulQueue].push(elem);
    retry();
  }
  var retryTimer;
  function resetQueue() {
    var now = Date.now();
    for (var i = 0; i < fs2[gracefulQueue].length; ++i) {
      if (fs2[gracefulQueue][i].length > 2) {
        fs2[gracefulQueue][i][3] = now;
        fs2[gracefulQueue][i][4] = now;
      }
    }
    retry();
  }
  function retry() {
    clearTimeout(retryTimer);
    retryTimer = void 0;
    if (fs2[gracefulQueue].length === 0)
      return;
    var elem = fs2[gracefulQueue].shift();
    var fn = elem[0];
    var args = elem[1];
    var err = elem[2];
    var startTime = elem[3];
    var lastTime = elem[4];
    if (startTime === void 0) {
      debug2("RETRY", fn.name, args);
      fn.apply(null, args);
    } else if (Date.now() - startTime >= 6e4) {
      debug2("TIMEOUT", fn.name, args);
      var cb = args.pop();
      if (typeof cb === "function")
        cb.call(null, err);
    } else {
      var sinceAttempt = Date.now() - lastTime;
      var sinceStart = Math.max(lastTime - startTime, 1);
      var desiredDelay = Math.min(sinceStart * 1.2, 100);
      if (sinceAttempt >= desiredDelay) {
        debug2("RETRY", fn.name, args);
        fn.apply(null, args.concat([startTime]));
      } else {
        fs2[gracefulQueue].push(elem);
      }
    }
    if (retryTimer === void 0) {
      retryTimer = setTimeout(retry, 0);
    }
  }
  return gracefulFs;
}
var _fs;
try {
  _fs = requireGracefulFs();
} catch (_) {
  _fs = require$$1;
}
function readFile(file2, options, callback) {
  if (callback == null) {
    callback = options;
    options = {};
  }
  if (typeof options === "string") {
    options = { encoding: options };
  }
  options = options || {};
  var fs2 = options.fs || _fs;
  var shouldThrow = true;
  if ("throws" in options) {
    shouldThrow = options.throws;
  }
  fs2.readFile(file2, options, function(err, data) {
    if (err)
      return callback(err);
    data = stripBom(data);
    var obj;
    try {
      obj = JSON.parse(data, options ? options.reviver : null);
    } catch (err2) {
      if (shouldThrow) {
        err2.message = file2 + ": " + err2.message;
        return callback(err2);
      } else {
        return callback(null, null);
      }
    }
    callback(null, obj);
  });
}
function readFileSync(file2, options) {
  options = options || {};
  if (typeof options === "string") {
    options = { encoding: options };
  }
  var fs2 = options.fs || _fs;
  var shouldThrow = true;
  if ("throws" in options) {
    shouldThrow = options.throws;
  }
  try {
    var content = fs2.readFileSync(file2, options);
    content = stripBom(content);
    return JSON.parse(content, options.reviver);
  } catch (err) {
    if (shouldThrow) {
      err.message = file2 + ": " + err.message;
      throw err;
    } else {
      return null;
    }
  }
}
function stringify(obj, options) {
  var spaces;
  var EOL = "\n";
  if (typeof options === "object" && options !== null) {
    if (options.spaces) {
      spaces = options.spaces;
    }
    if (options.EOL) {
      EOL = options.EOL;
    }
  }
  var str = JSON.stringify(obj, options ? options.replacer : null, spaces);
  return str.replace(/\n/g, EOL) + EOL;
}
function writeFile(file2, obj, options, callback) {
  if (callback == null) {
    callback = options;
    options = {};
  }
  options = options || {};
  var fs2 = options.fs || _fs;
  var str = "";
  try {
    str = stringify(obj, options);
  } catch (err) {
    if (callback)
      callback(err, null);
    return;
  }
  fs2.writeFile(file2, str, options, callback);
}
function writeFileSync(file2, obj, options) {
  options = options || {};
  var fs2 = options.fs || _fs;
  var str = stringify(obj, options);
  return fs2.writeFileSync(file2, str, options);
}
function stripBom(content) {
  if (Buffer.isBuffer(content))
    content = content.toString("utf8");
  content = content.replace(/^\uFEFF/, "");
  return content;
}
var jsonfile$1 = {
  readFile,
  readFileSync,
  writeFile,
  writeFileSync
};
var jsonfile_1 = jsonfile$1;
var path$8 = require$$2;
var fs$5 = require$$1;
var _0777 = parseInt("0777", 8);
var mkdirp$1 = mkdirP.mkdirp = mkdirP.mkdirP = mkdirP;
function mkdirP(p, opts, f, made) {
  if (typeof opts === "function") {
    f = opts;
    opts = {};
  } else if (!opts || typeof opts !== "object") {
    opts = { mode: opts };
  }
  var mode = opts.mode;
  var xfs = opts.fs || fs$5;
  if (mode === void 0) {
    mode = _0777;
  }
  if (!made)
    made = null;
  var cb = f || /* istanbul ignore next */
  function() {
  };
  p = path$8.resolve(p);
  xfs.mkdir(p, mode, function(er) {
    if (!er) {
      made = made || p;
      return cb(null, made);
    }
    switch (er.code) {
      case "ENOENT":
        if (path$8.dirname(p) === p)
          return cb(er);
        mkdirP(path$8.dirname(p), opts, function(er2, made2) {
          if (er2)
            cb(er2, made2);
          else
            mkdirP(p, opts, cb, made2);
        });
        break;
      default:
        xfs.stat(p, function(er2, stat) {
          if (er2 || !stat.isDirectory())
            cb(er, made);
          else
            cb(null, made);
        });
        break;
    }
  });
}
mkdirP.sync = function sync(p, opts, made) {
  if (!opts || typeof opts !== "object") {
    opts = { mode: opts };
  }
  var mode = opts.mode;
  var xfs = opts.fs || fs$5;
  if (mode === void 0) {
    mode = _0777;
  }
  if (!made)
    made = null;
  p = path$8.resolve(p);
  try {
    xfs.mkdirSync(p, mode);
    made = made || p;
  } catch (err0) {
    switch (err0.code) {
      case "ENOENT":
        made = sync(path$8.dirname(p), opts, made);
        sync(p, opts, made);
        break;
      default:
        var stat;
        try {
          stat = xfs.statSync(p);
        } catch (err1) {
          throw err0;
        }
        if (!stat.isDirectory())
          throw err0;
        break;
    }
  }
  return made;
};
const path$7 = require$$2;
const electron$1 = electron$2;
const jsonfile = jsonfile_1;
const mkdirp = mkdirp$1;
var electronWindowState = function(options) {
  const app2 = electron$1.app || electron$1.remote.app;
  const screen = electron$1.screen || electron$1.remote.screen;
  let state;
  let winRef;
  let stateChangeTimer;
  const eventHandlingDelay = 100;
  const config = Object.assign({
    file: "window-state.json",
    path: app2.getPath("userData"),
    maximize: true,
    fullScreen: true
  }, options);
  const fullStoreFileName = path$7.join(config.path, config.file);
  function isNormal(win) {
    return !win.isMaximized() && !win.isMinimized() && !win.isFullScreen();
  }
  function hasBounds() {
    return state && Number.isInteger(state.x) && Number.isInteger(state.y) && Number.isInteger(state.width) && state.width > 0 && Number.isInteger(state.height) && state.height > 0;
  }
  function resetStateToDefault() {
    const displayBounds = screen.getPrimaryDisplay().bounds;
    state = {
      width: config.defaultWidth || 800,
      height: config.defaultHeight || 600,
      x: 0,
      y: 0,
      displayBounds
    };
  }
  function windowWithinBounds(bounds) {
    return state.x >= bounds.x && state.y >= bounds.y && state.x + state.width <= bounds.x + bounds.width && state.y + state.height <= bounds.y + bounds.height;
  }
  function ensureWindowVisibleOnSomeDisplay() {
    const visible = screen.getAllDisplays().some((display) => {
      return windowWithinBounds(display.bounds);
    });
    if (!visible) {
      return resetStateToDefault();
    }
  }
  function validateState() {
    const isValid = state && (hasBounds() || state.isMaximized || state.isFullScreen);
    if (!isValid) {
      state = null;
      return;
    }
    if (hasBounds() && state.displayBounds) {
      ensureWindowVisibleOnSomeDisplay();
    }
  }
  function updateState(win) {
    win = win || winRef;
    if (!win) {
      return;
    }
    try {
      const winBounds = win.getBounds();
      if (isNormal(win)) {
        state.x = winBounds.x;
        state.y = winBounds.y;
        state.width = winBounds.width;
        state.height = winBounds.height;
      }
      state.isMaximized = win.isMaximized();
      state.isFullScreen = win.isFullScreen();
      state.displayBounds = screen.getDisplayMatching(winBounds).bounds;
    } catch (err) {
    }
  }
  function saveState(win) {
    if (win) {
      updateState(win);
    }
    try {
      mkdirp.sync(path$7.dirname(fullStoreFileName));
      jsonfile.writeFileSync(fullStoreFileName, state);
    } catch (err) {
    }
  }
  function stateChangeHandler() {
    clearTimeout(stateChangeTimer);
    stateChangeTimer = setTimeout(updateState, eventHandlingDelay);
  }
  function closeHandler() {
    updateState();
  }
  function closedHandler() {
    unmanage();
    saveState();
  }
  function manage(win) {
    if (config.maximize && state.isMaximized) {
      win.maximize();
    }
    if (config.fullScreen && state.isFullScreen) {
      win.setFullScreen(true);
    }
    win.on("resize", stateChangeHandler);
    win.on("move", stateChangeHandler);
    win.on("close", closeHandler);
    win.on("closed", closedHandler);
    winRef = win;
  }
  function unmanage() {
    if (winRef) {
      winRef.removeListener("resize", stateChangeHandler);
      winRef.removeListener("move", stateChangeHandler);
      clearTimeout(stateChangeTimer);
      winRef.removeListener("close", closeHandler);
      winRef.removeListener("closed", closedHandler);
      winRef = null;
    }
  }
  try {
    state = jsonfile.readFileSync(fullStoreFileName);
  } catch (err) {
  }
  validateState();
  state = Object.assign({
    width: config.defaultWidth || 800,
    height: config.defaultHeight || 600
  }, state);
  return {
    get x() {
      return state.x;
    },
    get y() {
      return state.y;
    },
    get width() {
      return state.width;
    },
    get height() {
      return state.height;
    },
    get displayBounds() {
      return state.displayBounds;
    },
    get isMaximized() {
      return state.isMaximized;
    },
    get isFullScreen() {
      return state.isFullScreen;
    },
    saveState,
    unmanage,
    manage,
    resetStateToDefault
  };
};
const windowStateManager = /* @__PURE__ */ getDefaultExportFromCjs(electronWindowState);
if (typeof electron$2 === "string") {
  throw new TypeError("Not running in an Electron environment!");
}
const { env } = process;
const isEnvSet = "ELECTRON_IS_DEV" in env;
const getFromEnv = Number.parseInt(env.ELECTRON_IS_DEV, 10) === 1;
const isDev = isEnvSet ? getFromEnv : !electron$2.app.isPackaged;
const fs$4 = require$$1;
const path$6 = require$$2;
var packageJson$1 = {
  findAndReadPackageJson,
  tryReadJsonAt
};
function findAndReadPackageJson() {
  return tryReadJsonAt(getMainModulePath()) || tryReadJsonAt(extractPathFromArgs()) || tryReadJsonAt(process.resourcesPath, "app.asar") || tryReadJsonAt(process.resourcesPath, "app") || tryReadJsonAt(process.cwd()) || { name: void 0, version: void 0 };
}
function tryReadJsonAt(...searchPaths) {
  if (!searchPaths[0]) {
    return void 0;
  }
  try {
    const searchPath = path$6.join(...searchPaths);
    const fileName = findUp("package.json", searchPath);
    if (!fileName) {
      return void 0;
    }
    const json = JSON.parse(fs$4.readFileSync(fileName, "utf8"));
    const name = json?.productName || json?.name;
    if (!name || name.toLowerCase() === "electron") {
      return void 0;
    }
    if (name) {
      return { name, version: json?.version };
    }
    return void 0;
  } catch (e) {
    return void 0;
  }
}
function findUp(fileName, cwd) {
  let currentPath = cwd;
  while (true) {
    const parsedPath = path$6.parse(currentPath);
    const root = parsedPath.root;
    const dir = parsedPath.dir;
    if (fs$4.existsSync(path$6.join(currentPath, fileName))) {
      return path$6.resolve(path$6.join(currentPath, fileName));
    }
    if (currentPath === root) {
      return null;
    }
    currentPath = dir;
  }
}
function extractPathFromArgs() {
  const matchedArgs = process.argv.filter((arg) => {
    return arg.indexOf("--user-data-dir=") === 0;
  });
  if (matchedArgs.length === 0 || typeof matchedArgs[0] !== "string") {
    return null;
  }
  const userDataDir = matchedArgs[0];
  return userDataDir.replace("--user-data-dir=", "");
}
function getMainModulePath() {
  try {
    return require2.main?.filename;
  } catch {
    return void 0;
  }
}
const childProcess = require$$0$3;
const os$3 = require$$1$1;
const path$5 = require$$2;
const packageJson = packageJson$1;
let NodeExternalApi$1 = class NodeExternalApi {
  appName = void 0;
  appPackageJson = void 0;
  platform = process.platform;
  getAppLogPath(appName = this.getAppName()) {
    if (this.platform === "darwin") {
      return path$5.join(this.getSystemPathHome(), "Library/Logs", appName);
    }
    return path$5.join(this.getAppUserDataPath(appName), "logs");
  }
  getAppName() {
    return this.appName || this.getAppPackageJson()?.name;
  }
  /**
   * @private
   * @returns {undefined}
   */
  getAppPackageJson() {
    if (typeof this.appPackageJson !== "object") {
      this.appPackageJson = packageJson.findAndReadPackageJson();
    }
    return this.appPackageJson;
  }
  getAppUserDataPath(appName = this.getAppName()) {
    return appName ? path$5.join(this.getSystemPathAppData(), appName) : void 0;
  }
  getAppVersion() {
    return this.getAppPackageJson()?.version;
  }
  getElectronLogPath() {
    return this.getAppLogPath();
  }
  getMacOsVersion() {
    const release = Number(os$3.release().split(".")[0]);
    if (release <= 19) {
      return `10.${release - 4}`;
    }
    return release - 9;
  }
  /**
   * @protected
   * @returns {string}
   */
  getOsVersion() {
    let osName = os$3.type().replace("_", " ");
    let osVersion = os$3.release();
    if (osName === "Darwin") {
      osName = "macOS";
      osVersion = this.getMacOsVersion();
    }
    return `${osName} ${osVersion}`;
  }
  /**
   * @return {PathVariables}
   */
  getPathVariables() {
    const appName = this.getAppName();
    const appVersion = this.getAppVersion();
    const self2 = this;
    return {
      appData: this.getSystemPathAppData(),
      appName,
      appVersion,
      get electronDefaultDir() {
        return self2.getElectronLogPath();
      },
      home: this.getSystemPathHome(),
      libraryDefaultDir: this.getAppLogPath(appName),
      libraryTemplate: this.getAppLogPath("{appName}"),
      temp: this.getSystemPathTemp(),
      userData: this.getAppUserDataPath(appName)
    };
  }
  getSystemPathAppData() {
    const home = this.getSystemPathHome();
    switch (this.platform) {
      case "darwin": {
        return path$5.join(home, "Library/Application Support");
      }
      case "win32": {
        return process.env.APPDATA || path$5.join(home, "AppData/Roaming");
      }
      default: {
        return process.env.XDG_CONFIG_HOME || path$5.join(home, ".config");
      }
    }
  }
  getSystemPathHome() {
    return os$3.homedir?.() || process.env.HOME;
  }
  getSystemPathTemp() {
    return os$3.tmpdir();
  }
  getVersions() {
    return {
      app: `${this.getAppName()} ${this.getAppVersion()}`,
      electron: void 0,
      os: this.getOsVersion()
    };
  }
  isDev() {
    return process.env.NODE_ENV === "development" || process.env.ELECTRON_IS_DEV === "1";
  }
  isElectron() {
    return Boolean(process.versions.electron);
  }
  onAppEvent(_eventName, _handler) {
  }
  onAppReady(handler) {
    handler();
  }
  onEveryWebContentsEvent(eventName, handler) {
  }
  /**
   * Listen to async messages sent from opposite process
   * @param {string} channel
   * @param {function} listener
   */
  onIpc(channel, listener) {
  }
  onIpcInvoke(channel, listener) {
  }
  /**
   * @param {string} url
   * @param {Function} [logFunction]
   */
  openUrl(url2, logFunction = console.error) {
    const startMap = { darwin: "open", win32: "start", linux: "xdg-open" };
    const start2 = startMap[process.platform] || "xdg-open";
    childProcess.exec(`${start2} ${url2}`, {}, (err) => {
      if (err) {
        logFunction(err);
      }
    });
  }
  setPlatform(platform) {
    this.platform = platform;
  }
  setPreloadFileForSessions({
    filePath,
    // eslint-disable-line no-unused-vars
    includeFutureSession = true,
    // eslint-disable-line no-unused-vars
    getSessions = () => []
    // eslint-disable-line no-unused-vars
  }) {
  }
  /**
   * Sent a message to opposite process
   * @param {string} channel
   * @param {any} message
   */
  sendIpc(channel, message) {
  }
  showErrorBox(title, message) {
  }
};
var NodeExternalApi_1 = NodeExternalApi$1;
const path$4 = require$$2;
const NodeExternalApi2 = NodeExternalApi_1;
let ElectronExternalApi$1 = class ElectronExternalApi extends NodeExternalApi2 {
  /**
   * @type {typeof Electron}
   */
  electron = void 0;
  /**
   * @param {object} options
   * @param {typeof Electron} [options.electron]
   */
  constructor({ electron: electron2 } = {}) {
    super();
    this.electron = electron2;
  }
  getAppName() {
    let appName;
    try {
      appName = this.electron.app?.name || this.electron.app?.getName();
    } catch {
    }
    return appName || super.getAppName();
  }
  getAppUserDataPath(appName) {
    return this.getPath("userData") || super.getAppUserDataPath(appName);
  }
  getAppVersion() {
    let appVersion;
    try {
      appVersion = this.electron.app?.getVersion();
    } catch {
    }
    return appVersion || super.getAppVersion();
  }
  getElectronLogPath() {
    return this.getPath("logs") || super.getElectronLogPath();
  }
  /**
   * @private
   * @param {any} name
   * @returns {string|undefined}
   */
  getPath(name) {
    try {
      return this.electron.app?.getPath(name);
    } catch {
      return void 0;
    }
  }
  getVersions() {
    return {
      app: `${this.getAppName()} ${this.getAppVersion()}`,
      electron: `Electron ${process.versions.electron}`,
      os: this.getOsVersion()
    };
  }
  getSystemPathAppData() {
    return this.getPath("appData") || super.getSystemPathAppData();
  }
  isDev() {
    if (this.electron.app?.isPackaged !== void 0) {
      return !this.electron.app.isPackaged;
    }
    if (typeof process.execPath === "string") {
      const execFileName = path$4.basename(process.execPath).toLowerCase();
      return execFileName.startsWith("electron");
    }
    return super.isDev();
  }
  onAppEvent(eventName, handler) {
    this.electron.app?.on(eventName, handler);
    return () => {
      this.electron.app?.off(eventName, handler);
    };
  }
  onAppReady(handler) {
    if (this.electron.app?.isReady()) {
      handler();
    } else if (this.electron.app?.once) {
      this.electron.app?.once("ready", handler);
    } else {
      handler();
    }
  }
  onEveryWebContentsEvent(eventName, handler) {
    this.electron.webContents?.getAllWebContents()?.forEach((webContents) => {
      webContents.on(eventName, handler);
    });
    this.electron.app?.on("web-contents-created", onWebContentsCreated);
    return () => {
      this.electron.webContents?.getAllWebContents().forEach((webContents) => {
        webContents.off(eventName, handler);
      });
      this.electron.app?.off("web-contents-created", onWebContentsCreated);
    };
    function onWebContentsCreated(_, webContents) {
      webContents.on(eventName, handler);
    }
  }
  /**
   * Listen to async messages sent from opposite process
   * @param {string} channel
   * @param {function} listener
   */
  onIpc(channel, listener) {
    this.electron.ipcMain?.on(channel, listener);
  }
  onIpcInvoke(channel, listener) {
    this.electron.ipcMain?.handle?.(channel, listener);
  }
  /**
   * @param {string} url
   * @param {Function} [logFunction]
   */
  openUrl(url2, logFunction = console.error) {
    this.electron.shell?.openExternal(url2).catch(logFunction);
  }
  setPreloadFileForSessions({
    filePath,
    includeFutureSession = true,
    getSessions = () => [this.electron.session?.defaultSession]
  }) {
    for (const session of getSessions().filter(Boolean)) {
      setPreload(session);
    }
    if (includeFutureSession) {
      this.onAppEvent("session-created", (session) => {
        setPreload(session);
      });
    }
    function setPreload(session) {
      session.setPreloads([...session.getPreloads(), filePath]);
    }
  }
  /**
   * Sent a message to opposite process
   * @param {string} channel
   * @param {any} message
   */
  sendIpc(channel, message) {
    this.electron.BrowserWindow?.getAllWindows()?.forEach((wnd) => {
      if (wnd.webContents?.isDestroyed() === false) {
        wnd.webContents.send(channel, message);
      }
    });
  }
  showErrorBox(title, message) {
    this.electron.dialog?.showErrorBox(title, message);
  }
};
var ElectronExternalApi_1 = ElectronExternalApi$1;
var electronLogPreload = { exports: {} };
(function(module) {
  let electron2 = {};
  try {
    electron2 = require2("electron");
  } catch (e) {
  }
  if (electron2.ipcRenderer) {
    initialize2(electron2);
  }
  {
    module.exports = initialize2;
  }
  function initialize2({ contextBridge, ipcRenderer }) {
    if (!ipcRenderer) {
      return;
    }
    ipcRenderer.on("__ELECTRON_LOG_IPC__", (_, message) => {
      window.postMessage({ cmd: "message", ...message });
    });
    ipcRenderer.invoke("__ELECTRON_LOG__", { cmd: "getOptions" }).catch((e) => console.error(new Error(
      `electron-log isn't initialized in the main process. Please call log.initialize() before. ${e.message}`
    )));
    const electronLog = {
      sendToMain(message) {
        try {
          ipcRenderer.send("__ELECTRON_LOG__", message);
        } catch (e) {
          console.error("electronLog.sendToMain ", e, "data:", message);
          ipcRenderer.send("__ELECTRON_LOG__", {
            cmd: "errorHandler",
            error: { message: e?.message, stack: e?.stack },
            errorName: "sendToMain"
          });
        }
      },
      log(...data) {
        electronLog.sendToMain({ data, level: "info" });
      }
    };
    for (const level of ["error", "warn", "info", "verbose", "debug", "silly"]) {
      electronLog[level] = (...data) => electronLog.sendToMain({
        data,
        level
      });
    }
    if (contextBridge && process.contextIsolated) {
      try {
        contextBridge.exposeInMainWorld("__electronLog", electronLog);
      } catch {
      }
    }
    if (typeof window === "object") {
      window.__electronLog = electronLog;
    } else {
      __electronLog = electronLog;
    }
  }
})(electronLogPreload);
var electronLogPreloadExports = electronLogPreload.exports;
const fs$3 = require$$1;
const os$2 = require$$1$1;
const path$3 = require$$2;
const preloadInitializeFn = electronLogPreloadExports;
var initialize$1 = {
  initialize({
    externalApi: externalApi2,
    getSessions,
    includeFutureSession,
    logger,
    preload = true,
    spyRendererConsole = false
  }) {
    externalApi2.onAppReady(() => {
      try {
        if (preload) {
          initializePreload({
            externalApi: externalApi2,
            getSessions,
            includeFutureSession,
            preloadOption: preload
          });
        }
        if (spyRendererConsole) {
          initializeSpyRendererConsole({ externalApi: externalApi2, logger });
        }
      } catch (err) {
        logger.warn(err);
      }
    });
  }
};
function initializePreload({
  externalApi: externalApi2,
  getSessions,
  includeFutureSession,
  preloadOption
}) {
  let preloadPath = typeof preloadOption === "string" ? preloadOption : void 0;
  try {
    preloadPath = path$3.resolve(
      __dirname,
      "../renderer/electron-log-preload.js"
    );
  } catch {
  }
  if (!preloadPath || !fs$3.existsSync(preloadPath)) {
    preloadPath = path$3.join(
      externalApi2.getAppUserDataPath() || os$2.tmpdir(),
      "electron-log-preload.js"
    );
    const preloadCode = `
      try {
        (${preloadInitializeFn.toString()})(require('electron'));
      } catch(e) {
        console.error(e);
      }
    `;
    fs$3.writeFileSync(preloadPath, preloadCode, "utf8");
  }
  externalApi2.setPreloadFileForSessions({
    filePath: preloadPath,
    includeFutureSession,
    getSessions
  });
}
function initializeSpyRendererConsole({ externalApi: externalApi2, logger }) {
  const levels = ["verbose", "info", "warning", "error"];
  externalApi2.onEveryWebContentsEvent(
    "console-message",
    (event, level, message) => {
      logger.processMessage({
        data: [message],
        level: levels[level],
        variables: { processType: "renderer" }
      });
    }
  );
}
var scope = scopeFactory$1;
function scopeFactory$1(logger) {
  return Object.defineProperties(scope2, {
    defaultLabel: { value: "", writable: true },
    labelPadding: { value: true, writable: true },
    maxLabelLength: { value: 0, writable: true },
    labelLength: {
      get() {
        switch (typeof scope2.labelPadding) {
          case "boolean":
            return scope2.labelPadding ? scope2.maxLabelLength : 0;
          case "number":
            return scope2.labelPadding;
          default:
            return 0;
        }
      }
    }
  });
  function scope2(label) {
    scope2.maxLabelLength = Math.max(scope2.maxLabelLength, label.length);
    const newScope = {};
    for (const level of [...logger.levels, "log"]) {
      newScope[level] = (...d) => logger.logData(d, { level, scope: label });
    }
    return newScope;
  }
}
const scopeFactory = scope;
let Logger$1 = class Logger {
  static instances = {};
  dependencies = {};
  errorHandler = null;
  eventLogger = null;
  functions = {};
  hooks = [];
  isDev = false;
  levels = null;
  logId = null;
  scope = null;
  transports = {};
  variables = {};
  constructor({
    allowUnknownLevel = false,
    dependencies = {},
    errorHandler,
    eventLogger,
    initializeFn,
    isDev: isDev2 = false,
    levels = ["error", "warn", "info", "verbose", "debug", "silly"],
    logId,
    transportFactories = {},
    variables
  } = {}) {
    this.addLevel = this.addLevel.bind(this);
    this.create = this.create.bind(this);
    this.initialize = this.initialize.bind(this);
    this.logData = this.logData.bind(this);
    this.processMessage = this.processMessage.bind(this);
    this.allowUnknownLevel = allowUnknownLevel;
    this.dependencies = dependencies;
    this.initializeFn = initializeFn;
    this.isDev = isDev2;
    this.levels = levels;
    this.logId = logId;
    this.transportFactories = transportFactories;
    this.variables = variables || {};
    this.scope = scopeFactory(this);
    this.addLevel("log", false);
    for (const name of this.levels) {
      this.addLevel(name, false);
    }
    this.errorHandler = errorHandler;
    errorHandler?.setOptions({ ...dependencies, logFn: this.error });
    this.eventLogger = eventLogger;
    eventLogger?.setOptions({ ...dependencies, logger: this });
    for (const [name, factory] of Object.entries(transportFactories)) {
      this.transports[name] = factory(this, dependencies);
    }
    Logger.instances[logId] = this;
  }
  static getInstance({ logId }) {
    return this.instances[logId] || this.instances.default;
  }
  addLevel(level, index = this.levels.length) {
    if (index !== false) {
      this.levels.splice(index, 0, level);
    }
    this[level] = (...args) => this.logData(args, { level });
    this.functions[level] = this[level];
  }
  catchErrors(options) {
    this.processMessage(
      {
        data: ["log.catchErrors is deprecated. Use log.errorHandler instead"],
        level: "warn"
      },
      { transports: ["console"] }
    );
    return this.errorHandler.startCatching(options);
  }
  create(options) {
    if (typeof options === "string") {
      options = { logId: options };
    }
    return new Logger({
      dependencies: this.dependencies,
      errorHandler: this.errorHandler,
      initializeFn: this.initializeFn,
      isDev: this.isDev,
      transportFactories: this.transportFactories,
      variables: { ...this.variables },
      ...options
    });
  }
  compareLevels(passLevel, checkLevel, levels = this.levels) {
    const pass = levels.indexOf(passLevel);
    const check2 = levels.indexOf(checkLevel);
    if (check2 === -1 || pass === -1) {
      return true;
    }
    return check2 <= pass;
  }
  initialize(options = {}) {
    this.initializeFn({ logger: this, ...this.dependencies, ...options });
  }
  logData(data, options = {}) {
    this.processMessage({ data, ...options });
  }
  processMessage(message, { transports = this.transports } = {}) {
    if (message.cmd === "errorHandler") {
      this.errorHandler.handle(message.error, {
        errorName: message.errorName,
        processType: "renderer",
        showDialog: Boolean(message.showDialog)
      });
      return;
    }
    let level = message.level;
    if (!this.allowUnknownLevel) {
      level = this.levels.includes(message.level) ? message.level : "info";
    }
    const normalizedMessage = {
      date: /* @__PURE__ */ new Date(),
      ...message,
      level,
      variables: {
        ...this.variables,
        ...message.variables
      }
    };
    for (const [transName, transFn] of this.transportEntries(transports)) {
      if (typeof transFn !== "function" || transFn.level === false) {
        continue;
      }
      if (!this.compareLevels(transFn.level, message.level)) {
        continue;
      }
      try {
        const transformedMsg = this.hooks.reduce((msg, hook) => {
          return msg ? hook(msg, transFn, transName) : msg;
        }, normalizedMessage);
        if (transformedMsg) {
          transFn({ ...transformedMsg, data: [...transformedMsg.data] });
        }
      } catch (e) {
        this.processInternalErrorFn(e);
      }
    }
  }
  processInternalErrorFn(_e) {
  }
  transportEntries(transports = this.transports) {
    const transportArray = Array.isArray(transports) ? transports : Object.entries(transports);
    return transportArray.map((item) => {
      switch (typeof item) {
        case "string":
          return this.transports[item] ? [item, this.transports[item]] : null;
        case "function":
          return [item.name, item];
        default:
          return Array.isArray(item) ? item : null;
      }
    }).filter(Boolean);
  }
};
var Logger_1 = Logger$1;
let ErrorHandler$1 = class ErrorHandler {
  externalApi = void 0;
  isActive = false;
  logFn = void 0;
  onError = void 0;
  showDialog = true;
  constructor({
    externalApi: externalApi2,
    logFn = void 0,
    onError: onError2 = void 0,
    showDialog = void 0
  } = {}) {
    this.createIssue = this.createIssue.bind(this);
    this.handleError = this.handleError.bind(this);
    this.handleRejection = this.handleRejection.bind(this);
    this.setOptions({ externalApi: externalApi2, logFn, onError: onError2, showDialog });
    this.startCatching = this.startCatching.bind(this);
    this.stopCatching = this.stopCatching.bind(this);
  }
  handle(error, {
    logFn = this.logFn,
    onError: onError2 = this.onError,
    processType = "browser",
    showDialog = this.showDialog,
    errorName = ""
  } = {}) {
    error = normalizeError(error);
    try {
      if (typeof onError2 === "function") {
        const versions = this.externalApi?.getVersions() || {};
        const createIssue = this.createIssue;
        const result = onError2({
          createIssue,
          error,
          errorName,
          processType,
          versions
        });
        if (result === false) {
          return;
        }
      }
      errorName ? logFn(errorName, error) : logFn(error);
      if (showDialog && !errorName.includes("rejection") && this.externalApi) {
        this.externalApi.showErrorBox(
          `A JavaScript error occurred in the ${processType} process`,
          error.stack
        );
      }
    } catch {
      console.error(error);
    }
  }
  setOptions({ externalApi: externalApi2, logFn, onError: onError2, showDialog }) {
    if (typeof externalApi2 === "object") {
      this.externalApi = externalApi2;
    }
    if (typeof logFn === "function") {
      this.logFn = logFn;
    }
    if (typeof onError2 === "function") {
      this.onError = onError2;
    }
    if (typeof showDialog === "boolean") {
      this.showDialog = showDialog;
    }
  }
  startCatching({ onError: onError2, showDialog } = {}) {
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    this.setOptions({ onError: onError2, showDialog });
    process.on("uncaughtException", this.handleError);
    process.on("unhandledRejection", this.handleRejection);
  }
  stopCatching() {
    this.isActive = false;
    process.removeListener("uncaughtException", this.handleError);
    process.removeListener("unhandledRejection", this.handleRejection);
  }
  createIssue(pageUrl, queryParams) {
    this.externalApi?.openUrl(
      `${pageUrl}?${new URLSearchParams(queryParams).toString()}`
    );
  }
  handleError(error) {
    this.handle(error, { errorName: "Unhandled" });
  }
  handleRejection(reason) {
    const error = reason instanceof Error ? reason : new Error(JSON.stringify(reason));
    this.handle(error, { errorName: "Unhandled rejection" });
  }
};
function normalizeError(e) {
  if (e instanceof Error) {
    return e;
  }
  if (e && typeof e === "object") {
    if (e.message) {
      return Object.assign(new Error(e.message), e);
    }
    try {
      return new Error(JSON.stringify(e));
    } catch (serErr) {
      return new Error(`Couldn't normalize error ${String(e)}: ${serErr}`);
    }
  }
  return new Error(`Can't normalize error ${String(e)}`);
}
var ErrorHandler_1 = ErrorHandler$1;
let EventLogger$1 = class EventLogger {
  disposers = [];
  format = "{eventSource}#{eventName}:";
  formatters = {
    app: {
      "certificate-error": ({ args }) => {
        return this.arrayToObject(args.slice(1, 4), [
          "url",
          "error",
          "certificate"
        ]);
      },
      "child-process-gone": ({ args }) => {
        return args.length === 1 ? args[0] : args;
      },
      "render-process-gone": ({ args: [webContents, details] }) => {
        return details && typeof details === "object" ? { ...details, ...this.getWebContentsDetails(webContents) } : [];
      }
    },
    webContents: {
      "console-message": ({ args: [level, message, line, sourceId] }) => {
        if (level < 3) {
          return void 0;
        }
        return { message, source: `${sourceId}:${line}` };
      },
      "did-fail-load": ({ args }) => {
        return this.arrayToObject(args, [
          "errorCode",
          "errorDescription",
          "validatedURL",
          "isMainFrame",
          "frameProcessId",
          "frameRoutingId"
        ]);
      },
      "did-fail-provisional-load": ({ args }) => {
        return this.arrayToObject(args, [
          "errorCode",
          "errorDescription",
          "validatedURL",
          "isMainFrame",
          "frameProcessId",
          "frameRoutingId"
        ]);
      },
      "plugin-crashed": ({ args }) => {
        return this.arrayToObject(args, ["name", "version"]);
      },
      "preload-error": ({ args }) => {
        return this.arrayToObject(args, ["preloadPath", "error"]);
      }
    }
  };
  events = {
    app: {
      "certificate-error": true,
      "child-process-gone": true,
      "render-process-gone": true
    },
    webContents: {
      // 'console-message': true,
      "did-fail-load": true,
      "did-fail-provisional-load": true,
      "plugin-crashed": true,
      "preload-error": true,
      "unresponsive": true
    }
  };
  externalApi = void 0;
  level = "error";
  scope = "";
  constructor(options = {}) {
    this.setOptions(options);
  }
  setOptions({
    events,
    externalApi: externalApi2,
    level,
    logger,
    format: format2,
    formatters,
    scope: scope2
  }) {
    if (typeof events === "object") {
      this.events = events;
    }
    if (typeof externalApi2 === "object") {
      this.externalApi = externalApi2;
    }
    if (typeof level === "string") {
      this.level = level;
    }
    if (typeof logger === "object") {
      this.logger = logger;
    }
    if (typeof format2 === "string" || typeof format2 === "function") {
      this.format = format2;
    }
    if (typeof formatters === "object") {
      this.formatters = formatters;
    }
    if (typeof scope2 === "string") {
      this.scope = scope2;
    }
  }
  startLogging(options = {}) {
    this.setOptions(options);
    this.disposeListeners();
    for (const eventName of this.getEventNames(this.events.app)) {
      this.disposers.push(
        this.externalApi.onAppEvent(eventName, (...handlerArgs) => {
          this.handleEvent({ eventSource: "app", eventName, handlerArgs });
        })
      );
    }
    for (const eventName of this.getEventNames(this.events.webContents)) {
      this.disposers.push(
        this.externalApi.onEveryWebContentsEvent(
          eventName,
          (...handlerArgs) => {
            this.handleEvent(
              { eventSource: "webContents", eventName, handlerArgs }
            );
          }
        )
      );
    }
  }
  stopLogging() {
    this.disposeListeners();
  }
  arrayToObject(array, fieldNames) {
    const obj = {};
    fieldNames.forEach((fieldName, index) => {
      obj[fieldName] = array[index];
    });
    if (array.length > fieldNames.length) {
      obj.unknownArgs = array.slice(fieldNames.length);
    }
    return obj;
  }
  disposeListeners() {
    this.disposers.forEach((disposer) => disposer());
    this.disposers = [];
  }
  formatEventLog({ eventName, eventSource, handlerArgs }) {
    const [event, ...args] = handlerArgs;
    if (typeof this.format === "function") {
      return this.format({ args, event, eventName, eventSource });
    }
    const formatter = this.formatters[eventSource]?.[eventName];
    let formattedArgs = args;
    if (typeof formatter === "function") {
      formattedArgs = formatter({ args, event, eventName, eventSource });
    }
    if (!formattedArgs) {
      return void 0;
    }
    const eventData = {};
    if (Array.isArray(formattedArgs)) {
      eventData.args = formattedArgs;
    } else if (typeof formattedArgs === "object") {
      Object.assign(eventData, formattedArgs);
    }
    if (eventSource === "webContents") {
      Object.assign(eventData, this.getWebContentsDetails(event?.sender));
    }
    const title = this.format.replace("{eventSource}", eventSource === "app" ? "App" : "WebContents").replace("{eventName}", eventName);
    return [title, eventData];
  }
  getEventNames(eventMap) {
    if (!eventMap || typeof eventMap !== "object") {
      return [];
    }
    return Object.entries(eventMap).filter(([_, listen]) => listen).map(([eventName]) => eventName);
  }
  getWebContentsDetails(webContents) {
    if (!webContents?.loadURL) {
      return {};
    }
    try {
      return {
        webContents: {
          id: webContents.id,
          url: webContents.getURL()
        }
      };
    } catch {
      return {};
    }
  }
  handleEvent({ eventName, eventSource, handlerArgs }) {
    const log2 = this.formatEventLog({ eventName, eventSource, handlerArgs });
    if (log2) {
      const logFns = this.scope ? this.logger.scope(this.scope) : this.logger;
      logFns?.[this.level]?.(...log2);
    }
  }
};
var EventLogger_1 = EventLogger$1;
var transform_1 = { transform: transform$5 };
function transform$5({
  logger,
  message,
  transport,
  initialData = message?.data || [],
  transforms = transport?.transforms
}) {
  return transforms.reduce((data, trans) => {
    if (typeof trans === "function") {
      return trans({ data, logger, message, transport });
    }
    return data;
  }, initialData);
}
const { transform: transform$4 } = transform_1;
var format$2 = {
  concatFirstStringElements: concatFirstStringElements$1,
  formatScope,
  formatText,
  formatVariables,
  timeZoneFromOffset,
  format({ message, logger, transport, data = message?.data }) {
    switch (typeof transport.format) {
      case "string": {
        return transform$4({
          message,
          logger,
          transforms: [formatVariables, formatScope, formatText],
          transport,
          initialData: [transport.format, ...data]
        });
      }
      case "function": {
        return transport.format({
          data,
          level: message?.level || "info",
          logger,
          message,
          transport
        });
      }
      default: {
        return data;
      }
    }
  }
};
function concatFirstStringElements$1({ data }) {
  if (typeof data[0] !== "string" || typeof data[1] !== "string") {
    return data;
  }
  if (data[0].match(/%[1cdfiOos]/)) {
    return data;
  }
  return [`${data[0]} ${data[1]}`, ...data.slice(2)];
}
function timeZoneFromOffset(minutesOffset) {
  const minutesPositive = Math.abs(minutesOffset);
  const sign = minutesOffset >= 0 ? "-" : "+";
  const hours = Math.floor(minutesPositive / 60).toString().padStart(2, "0");
  const minutes = (minutesPositive % 60).toString().padStart(2, "0");
  return `${sign}${hours}:${minutes}`;
}
function formatScope({ data, logger, message }) {
  const { defaultLabel, labelLength } = logger?.scope || {};
  const template = data[0];
  let label = message.scope;
  if (!label) {
    label = defaultLabel;
  }
  let scopeText;
  if (label === "") {
    scopeText = labelLength > 0 ? "".padEnd(labelLength + 3) : "";
  } else if (typeof label === "string") {
    scopeText = ` (${label})`.padEnd(labelLength + 3);
  } else {
    scopeText = "";
  }
  data[0] = template.replace("{scope}", scopeText);
  return data;
}
function formatVariables({ data, message }) {
  let template = data[0];
  if (typeof template !== "string") {
    return data;
  }
  template = template.replace("{level}]", `${message.level}]`.padEnd(6, " "));
  const date = message.date || /* @__PURE__ */ new Date();
  data[0] = template.replace(/\{(\w+)}/g, (substring, name) => {
    switch (name) {
      case "level":
        return message.level || "info";
      case "logId":
        return message.logId;
      case "y":
        return date.getFullYear().toString(10);
      case "m":
        return (date.getMonth() + 1).toString(10).padStart(2, "0");
      case "d":
        return date.getDate().toString(10).padStart(2, "0");
      case "h":
        return date.getHours().toString(10).padStart(2, "0");
      case "i":
        return date.getMinutes().toString(10).padStart(2, "0");
      case "s":
        return date.getSeconds().toString(10).padStart(2, "0");
      case "ms":
        return date.getMilliseconds().toString(10).padStart(3, "0");
      case "z":
        return timeZoneFromOffset(date.getTimezoneOffset());
      case "iso":
        return date.toISOString();
      default: {
        return message.variables?.[name] || substring;
      }
    }
  }).trim();
  return data;
}
function formatText({ data }) {
  const template = data[0];
  if (typeof template !== "string") {
    return data;
  }
  const textTplPosition = template.lastIndexOf("{text}");
  if (textTplPosition === template.length - 6) {
    data[0] = template.replace(/\s?{text}/, "");
    if (data[0] === "") {
      data.shift();
    }
    return data;
  }
  const templatePieces = template.split("{text}");
  let result = [];
  if (templatePieces[0] !== "") {
    result.push(templatePieces[0]);
  }
  result = result.concat(data.slice(1));
  if (templatePieces[1] !== "") {
    result.push(templatePieces[1]);
  }
  return result;
}
var object = { exports: {} };
(function(module) {
  const util = require$$4;
  module.exports = {
    serialize,
    maxDepth({ data, transport, depth = transport?.depth ?? 6 }) {
      if (!data) {
        return data;
      }
      if (depth < 1) {
        if (Array.isArray(data))
          return "[array]";
        if (typeof data === "object" && data)
          return "[object]";
        return data;
      }
      if (Array.isArray(data)) {
        return data.map((child) => module.exports.maxDepth({
          data: child,
          depth: depth - 1
        }));
      }
      if (typeof data !== "object") {
        return data;
      }
      if (data && typeof data.toISOString === "function") {
        return data;
      }
      if (data === null) {
        return null;
      }
      if (data instanceof Error) {
        return data;
      }
      const newJson = {};
      for (const i in data) {
        if (!Object.prototype.hasOwnProperty.call(data, i))
          continue;
        newJson[i] = module.exports.maxDepth({
          data: data[i],
          depth: depth - 1
        });
      }
      return newJson;
    },
    toJSON({ data }) {
      return JSON.parse(JSON.stringify(data, createSerializer()));
    },
    toString({ data, transport }) {
      const inspectOptions = transport?.inspectOptions || {};
      const simplifiedData = data.map((item) => {
        if (item === void 0) {
          return void 0;
        }
        try {
          const str = JSON.stringify(item, createSerializer(), "  ");
          return str === void 0 ? void 0 : JSON.parse(str);
        } catch (e) {
          return item;
        }
      });
      return util.formatWithOptions(inspectOptions, ...simplifiedData);
    }
  };
  function createSerializer(options = {}) {
    const seen = /* @__PURE__ */ new WeakSet();
    return function(key, value2) {
      if (typeof value2 === "object" && value2 !== null) {
        if (seen.has(value2)) {
          return void 0;
        }
        seen.add(value2);
      }
      return serialize(key, value2, options);
    };
  }
  function serialize(key, value2, options = {}) {
    const serializeMapAndSet = options?.serializeMapAndSet !== false;
    if (value2 instanceof Error) {
      return value2.stack;
    }
    if (!value2) {
      return value2;
    }
    if (typeof value2 === "function") {
      return `[function] ${value2.toString()}`;
    }
    if (value2 instanceof Date) {
      return value2.toISOString();
    }
    if (serializeMapAndSet && value2 instanceof Map && Object.fromEntries) {
      return Object.fromEntries(value2);
    }
    if (serializeMapAndSet && value2 instanceof Set && Array.from) {
      return Array.from(value2);
    }
    return value2;
  }
})(object);
var objectExports = object.exports;
var style = {
  transformStyles,
  applyAnsiStyles({ data }) {
    return transformStyles(data, styleToAnsi, resetAnsiStyle);
  },
  removeStyles({ data }) {
    return transformStyles(data, () => "");
  }
};
const ANSI_COLORS = {
  unset: "\x1B[0m",
  black: "\x1B[30m",
  red: "\x1B[31m",
  green: "\x1B[32m",
  yellow: "\x1B[33m",
  blue: "\x1B[34m",
  magenta: "\x1B[35m",
  cyan: "\x1B[36m",
  white: "\x1B[37m"
};
function styleToAnsi(style2) {
  const color = style2.replace(/color:\s*(\w+).*/, "$1").toLowerCase();
  return ANSI_COLORS[color] || "";
}
function resetAnsiStyle(string) {
  return string + ANSI_COLORS.unset;
}
function transformStyles(data, onStyleFound, onStyleApplied) {
  const foundStyles = {};
  return data.reduce((result, item, index, array) => {
    if (foundStyles[index]) {
      return result;
    }
    if (typeof item === "string") {
      let valueIndex = index;
      let styleApplied = false;
      item = item.replace(/%[1cdfiOos]/g, (match2) => {
        valueIndex += 1;
        if (match2 !== "%c") {
          return match2;
        }
        const style2 = array[valueIndex];
        if (typeof style2 === "string") {
          foundStyles[valueIndex] = true;
          styleApplied = true;
          return onStyleFound(style2, item);
        }
        return match2;
      });
      if (styleApplied && onStyleApplied) {
        item = onStyleApplied(item);
      }
    }
    result.push(item);
    return result;
  }, []);
}
const { concatFirstStringElements, format: format$1 } = format$2;
const { maxDepth: maxDepth$2, toJSON: toJSON$2 } = objectExports;
const { applyAnsiStyles, removeStyles: removeStyles$2 } = style;
const { transform: transform$3 } = transform_1;
const consoleMethods = {
  error: console.error,
  warn: console.warn,
  info: console.info,
  verbose: console.info,
  debug: console.debug,
  silly: console.debug,
  log: console.log
};
var console_1 = consoleTransportFactory;
const separator = process.platform === "win32" ? ">" : "›";
const DEFAULT_FORMAT = `%c{h}:{i}:{s}.{ms}{scope}%c ${separator} {text}`;
Object.assign(consoleTransportFactory, {
  DEFAULT_FORMAT
});
function consoleTransportFactory(logger) {
  return Object.assign(transport, {
    format: DEFAULT_FORMAT,
    level: "silly",
    transforms: [
      addTemplateColors,
      format$1,
      formatStyles,
      concatFirstStringElements,
      maxDepth$2,
      toJSON$2
    ],
    useStyles: process.env.FORCE_STYLES,
    writeFn({ message }) {
      const consoleLogFn = consoleMethods[message.level] || consoleMethods.info;
      consoleLogFn(...message.data);
    }
  });
  function transport(message) {
    const data = transform$3({ logger, message, transport });
    transport.writeFn({
      message: { ...message, data }
    });
  }
}
function addTemplateColors({ data, message, transport }) {
  if (transport.format !== DEFAULT_FORMAT) {
    return data;
  }
  return [`color:${levelToStyle(message.level)}`, "color:unset", ...data];
}
function canUseStyles(useStyleValue, level) {
  if (typeof useStyleValue === "boolean") {
    return useStyleValue;
  }
  const useStderr = level === "error" || level === "warn";
  const stream = useStderr ? process.stderr : process.stdout;
  return stream && stream.isTTY;
}
function formatStyles(args) {
  const { message, transport } = args;
  const useStyles = canUseStyles(transport.useStyles, message.level);
  const nextTransform = useStyles ? applyAnsiStyles : removeStyles$2;
  return nextTransform(args);
}
function levelToStyle(level) {
  const map = { error: "red", warn: "yellow", info: "cyan", default: "unset" };
  return map[level] || map.default;
}
const EventEmitter$1 = require$$0$4;
const fs$2 = require$$1;
const os$1 = require$$1$1;
let File$2 = class File extends EventEmitter$1 {
  asyncWriteQueue = [];
  bytesWritten = 0;
  hasActiveAsyncWriting = false;
  path = null;
  initialSize = void 0;
  writeOptions = null;
  writeAsync = false;
  constructor({
    path: path2,
    writeOptions = { encoding: "utf8", flag: "a", mode: 438 },
    writeAsync = false
  }) {
    super();
    this.path = path2;
    this.writeOptions = writeOptions;
    this.writeAsync = writeAsync;
  }
  get size() {
    return this.getSize();
  }
  clear() {
    try {
      fs$2.writeFileSync(this.path, "", {
        mode: this.writeOptions.mode,
        flag: "w"
      });
      this.reset();
      return true;
    } catch (e) {
      if (e.code === "ENOENT") {
        return true;
      }
      this.emit("error", e, this);
      return false;
    }
  }
  crop(bytesAfter) {
    try {
      const content = readFileSyncFromEnd(this.path, bytesAfter || 4096);
      this.clear();
      this.writeLine(`[log cropped]${os$1.EOL}${content}`);
    } catch (e) {
      this.emit(
        "error",
        new Error(`Couldn't crop file ${this.path}. ${e.message}`),
        this
      );
    }
  }
  getSize() {
    if (this.initialSize === void 0) {
      try {
        const stats = fs$2.statSync(this.path);
        this.initialSize = stats.size;
      } catch (e) {
        this.initialSize = 0;
      }
    }
    return this.initialSize + this.bytesWritten;
  }
  increaseBytesWrittenCounter(text) {
    this.bytesWritten += Buffer.byteLength(text, this.writeOptions.encoding);
  }
  isNull() {
    return false;
  }
  nextAsyncWrite() {
    const file2 = this;
    if (this.hasActiveAsyncWriting || this.asyncWriteQueue.length === 0) {
      return;
    }
    const text = this.asyncWriteQueue.join("");
    this.asyncWriteQueue = [];
    this.hasActiveAsyncWriting = true;
    fs$2.writeFile(this.path, text, this.writeOptions, (e) => {
      file2.hasActiveAsyncWriting = false;
      if (e) {
        file2.emit(
          "error",
          new Error(`Couldn't write to ${file2.path}. ${e.message}`),
          this
        );
      } else {
        file2.increaseBytesWrittenCounter(text);
      }
      file2.nextAsyncWrite();
    });
  }
  reset() {
    this.initialSize = void 0;
    this.bytesWritten = 0;
  }
  toString() {
    return this.path;
  }
  writeLine(text) {
    text += os$1.EOL;
    if (this.writeAsync) {
      this.asyncWriteQueue.push(text);
      this.nextAsyncWrite();
      return;
    }
    try {
      fs$2.writeFileSync(this.path, text, this.writeOptions);
      this.increaseBytesWrittenCounter(text);
    } catch (e) {
      this.emit(
        "error",
        new Error(`Couldn't write to ${this.path}. ${e.message}`),
        this
      );
    }
  }
};
var File_1 = File$2;
function readFileSyncFromEnd(filePath, bytesCount) {
  const buffer = Buffer.alloc(bytesCount);
  const stats = fs$2.statSync(filePath);
  const readLength = Math.min(stats.size, bytesCount);
  const offset = Math.max(0, stats.size - bytesCount);
  const fd = fs$2.openSync(filePath, "r");
  const totalBytes = fs$2.readSync(fd, buffer, 0, readLength, offset);
  fs$2.closeSync(fd);
  return buffer.toString("utf8", 0, totalBytes);
}
const File$1 = File_1;
let NullFile$1 = class NullFile extends File$1 {
  clear() {
  }
  crop() {
  }
  getSize() {
    return 0;
  }
  isNull() {
    return true;
  }
  writeLine() {
  }
};
var NullFile_1 = NullFile$1;
const EventEmitter = require$$0$4;
const fs$1 = require$$1;
const path$2 = require$$2;
const File2 = File_1;
const NullFile2 = NullFile_1;
let FileRegistry$1 = class FileRegistry extends EventEmitter {
  store = {};
  constructor() {
    super();
    this.emitError = this.emitError.bind(this);
  }
  /**
   * Provide a File object corresponding to the filePath
   * @param {string} filePath
   * @param {WriteOptions} [writeOptions]
   * @param {boolean} [writeAsync]
   * @return {File}
   */
  provide({ filePath, writeOptions, writeAsync = false }) {
    let file2;
    try {
      filePath = path$2.resolve(filePath);
      if (this.store[filePath]) {
        return this.store[filePath];
      }
      file2 = this.createFile({ filePath, writeOptions, writeAsync });
    } catch (e) {
      file2 = new NullFile2({ path: filePath });
      this.emitError(e, file2);
    }
    file2.on("error", this.emitError);
    this.store[filePath] = file2;
    return file2;
  }
  /**
   * @param {string} filePath
   * @param {WriteOptions} writeOptions
   * @param {boolean} async
   * @return {File}
   * @private
   */
  createFile({ filePath, writeOptions, writeAsync }) {
    this.testFileWriting(filePath);
    return new File2({ path: filePath, writeOptions, writeAsync });
  }
  /**
   * @param {Error} error
   * @param {File} file
   * @private
   */
  emitError(error, file2) {
    this.emit("error", error, file2);
  }
  /**
   * @param {string} filePath
   * @private
   */
  testFileWriting(filePath) {
    fs$1.mkdirSync(path$2.dirname(filePath), { recursive: true });
    fs$1.writeFileSync(filePath, "", { flag: "a" });
  }
};
var FileRegistry_1 = FileRegistry$1;
const fs = require$$1;
const os = require$$1$1;
const path$1 = require$$2;
const FileRegistry2 = FileRegistry_1;
const { transform: transform$2 } = transform_1;
const { removeStyles: removeStyles$1 } = style;
const { format } = format$2;
const { toString } = objectExports;
var file = fileTransportFactory;
const globalRegistry = new FileRegistry2();
function fileTransportFactory(logger, { registry = globalRegistry, externalApi: externalApi2 } = {}) {
  let pathVariables;
  if (registry.listenerCount("error") < 1) {
    registry.on("error", (e, file2) => {
      logConsole(`Can't write to ${file2}`, e);
    });
  }
  return Object.assign(transport, {
    fileName: getDefaultFileName(logger.variables.processType),
    format: "[{y}-{m}-{d} {h}:{i}:{s}.{ms}] [{level}]{scope} {text}",
    getFile,
    inspectOptions: { depth: 5 },
    level: "silly",
    maxSize: 1024 ** 2,
    readAllLogs,
    sync: true,
    transforms: [removeStyles$1, format, toString],
    writeOptions: { flag: "a", mode: 438, encoding: "utf8" },
    archiveLogFn(file2) {
      const oldPath = file2.toString();
      const inf = path$1.parse(oldPath);
      try {
        fs.renameSync(oldPath, path$1.join(inf.dir, `${inf.name}.old${inf.ext}`));
      } catch (e) {
        logConsole("Could not rotate log", e);
        const quarterOfMaxSize = Math.round(transport.maxSize / 4);
        file2.crop(Math.min(quarterOfMaxSize, 256 * 1024));
      }
    },
    resolvePathFn(vars) {
      return path$1.join(vars.libraryDefaultDir, vars.fileName);
    }
  });
  function transport(message) {
    const file2 = getFile(message);
    const needLogRotation = transport.maxSize > 0 && file2.size > transport.maxSize;
    if (needLogRotation) {
      transport.archiveLogFn(file2);
      file2.reset();
    }
    const content = transform$2({ logger, message, transport });
    file2.writeLine(content);
  }
  function initializeOnFirstAccess() {
    if (pathVariables) {
      return;
    }
    pathVariables = Object.create(
      Object.prototype,
      {
        ...Object.getOwnPropertyDescriptors(
          externalApi2.getPathVariables()
        ),
        fileName: {
          get() {
            return transport.fileName;
          },
          enumerable: true
        }
      }
    );
    if (typeof transport.archiveLog === "function") {
      transport.archiveLogFn = transport.archiveLog;
      logConsole("archiveLog is deprecated. Use archiveLogFn instead");
    }
    if (typeof transport.resolvePath === "function") {
      transport.resolvePathFn = transport.resolvePath;
      logConsole("resolvePath is deprecated. Use resolvePathFn instead");
    }
  }
  function logConsole(message, error = null, level = "error") {
    const data = [`electron-log.transports.file: ${message}`];
    if (error) {
      data.push(error);
    }
    logger.transports.console({ data, date: /* @__PURE__ */ new Date(), level });
  }
  function getFile(msg) {
    initializeOnFirstAccess();
    const filePath = transport.resolvePathFn(pathVariables, msg);
    return registry.provide({
      filePath,
      writeAsync: !transport.sync,
      writeOptions: transport.writeOptions
    });
  }
  function readAllLogs({ fileFilter = (f) => f.endsWith(".log") } = {}) {
    const logsPath = path$1.dirname(transport.resolvePathFn(pathVariables));
    return fs.readdirSync(logsPath).map((fileName) => path$1.join(logsPath, fileName)).filter(fileFilter).map((logPath) => {
      try {
        return {
          path: logPath,
          lines: fs.readFileSync(logPath, "utf8").split(os.EOL)
        };
      } catch {
        return null;
      }
    }).filter(Boolean);
  }
}
function getDefaultFileName(processType = process.type) {
  switch (processType) {
    case "renderer":
      return "renderer.log";
    case "worker":
      return "worker.log";
    default:
      return "main.log";
  }
}
const { maxDepth: maxDepth$1, toJSON: toJSON$1 } = objectExports;
const { transform: transform$1 } = transform_1;
var ipc = ipcTransportFactory;
function ipcTransportFactory(logger, { externalApi: externalApi2 }) {
  Object.assign(transport, {
    depth: 3,
    eventId: "__ELECTRON_LOG_IPC__",
    level: logger.isDev ? "silly" : false,
    transforms: [toJSON$1, maxDepth$1]
  });
  return externalApi2?.isElectron() ? transport : void 0;
  function transport(message) {
    externalApi2?.sendIpc(transport.eventId, {
      ...message,
      data: transform$1({ logger, message, transport })
    });
  }
}
const http$1 = require$$0$5;
const https = require$$1$2;
const { transform } = transform_1;
const { removeStyles } = style;
const { toJSON, maxDepth } = objectExports;
var remote = remoteTransportFactory;
function remoteTransportFactory(logger) {
  return Object.assign(transport, {
    client: { name: "electron-application" },
    depth: 6,
    level: false,
    requestOptions: {},
    transforms: [removeStyles, toJSON, maxDepth],
    makeBodyFn({ message }) {
      return JSON.stringify({
        client: transport.client,
        data: message.data,
        date: message.date.getTime(),
        level: message.level,
        scope: message.scope,
        variables: message.variables
      });
    },
    processErrorFn({ error }) {
      logger.processMessage(
        {
          data: [`electron-log: can't POST ${transport.url}`, error],
          level: "warn"
        },
        { transports: ["console", "file"] }
      );
    },
    sendRequestFn({ serverUrl, requestOptions, body }) {
      const httpTransport = serverUrl.startsWith("https:") ? https : http$1;
      const request = httpTransport.request(serverUrl, {
        method: "POST",
        ...requestOptions,
        headers: {
          "Content-Type": "application/json",
          "Content-Length": body.length,
          ...requestOptions.headers
        }
      });
      request.write(body);
      request.end();
      return request;
    }
  });
  function transport(message) {
    if (!transport.url) {
      return;
    }
    const body = transport.makeBodyFn({
      logger,
      message: { ...message, data: transform({ logger, message, transport }) },
      transport
    });
    const request = transport.sendRequestFn({
      serverUrl: transport.url,
      requestOptions: transport.requestOptions,
      body: Buffer.from(body, "utf8")
    });
    request.on("error", (error) => transport.processErrorFn({
      error,
      logger,
      message,
      request,
      transport
    }));
  }
}
const Logger2 = Logger_1;
const ErrorHandler2 = ErrorHandler_1;
const EventLogger2 = EventLogger_1;
const transportConsole = console_1;
const transportFile = file;
const transportIpc = ipc;
const transportRemote = remote;
var createDefaultLogger_1 = createDefaultLogger$1;
function createDefaultLogger$1({ dependencies, initializeFn }) {
  const defaultLogger2 = new Logger2({
    dependencies,
    errorHandler: new ErrorHandler2(),
    eventLogger: new EventLogger2(),
    initializeFn,
    isDev: dependencies.externalApi?.isDev(),
    logId: "default",
    transportFactories: {
      console: transportConsole,
      file: transportFile,
      ipc: transportIpc,
      remote: transportRemote
    },
    variables: {
      processType: "main"
    }
  });
  defaultLogger2.default = defaultLogger2;
  defaultLogger2.Logger = Logger2;
  defaultLogger2.processInternalErrorFn = (e) => {
    defaultLogger2.transports.console.writeFn({
      message: {
        data: ["Unhandled electron-log error", e],
        level: "error"
      }
    });
  };
  return defaultLogger2;
}
const electron = electron$2;
const ElectronExternalApi2 = ElectronExternalApi_1;
const { initialize } = initialize$1;
const createDefaultLogger = createDefaultLogger_1;
const externalApi = new ElectronExternalApi2({ electron });
const defaultLogger = createDefaultLogger({
  dependencies: { externalApi },
  initializeFn: initialize
});
var main$1 = defaultLogger;
externalApi.onIpc("__ELECTRON_LOG__", (_, message) => {
  if (message.scope) {
    defaultLogger.Logger.getInstance(message).scope(message.scope);
  }
  const date = new Date(message.date);
  processMessage({
    ...message,
    date: date.getTime() ? date : /* @__PURE__ */ new Date()
  });
});
externalApi.onIpcInvoke("__ELECTRON_LOG__", (_, { cmd = "", logId }) => {
  switch (cmd) {
    case "getOptions": {
      const logger = defaultLogger.Logger.getInstance({ logId });
      return {
        levels: logger.levels,
        logId
      };
    }
    default: {
      processMessage({ data: [`Unknown cmd '${cmd}'`], level: "error" });
      return {};
    }
  }
});
function processMessage(message) {
  defaultLogger.Logger.getInstance(message)?.processMessage(message);
}
const main = main$1;
var main_1 = main;
const log = /* @__PURE__ */ getDefaultExportFromCjs(main_1);
function every(arr, cb) {
  var i = 0, len = arr.length;
  for (; i < len; i++) {
    if (!cb(arr[i], i, arr)) {
      return false;
    }
  }
  return true;
}
const SEP = "/";
const STYPE = 0, PTYPE = 1, ATYPE = 2, OTYPE = 3;
const SLASH = 47, COLON = 58, ASTER = 42, QMARK = 63;
function strip(str) {
  if (str === SEP)
    return str;
  str.charCodeAt(0) === SLASH && (str = str.substring(1));
  var len = str.length - 1;
  return str.charCodeAt(len) === SLASH ? str.substring(0, len) : str;
}
function split(str) {
  return (str = strip(str)) === SEP ? [SEP] : str.split(SEP);
}
function isMatch(arr, obj, idx) {
  idx = arr[idx];
  return obj.val === idx && obj.type === STYPE || (idx === SEP ? obj.type > PTYPE : obj.type !== STYPE && (idx || "").endsWith(obj.end));
}
function match$1(str, all) {
  var i = 0, tmp, segs = split(str), len = segs.length, l;
  var fn = isMatch.bind(isMatch, segs);
  for (; i < all.length; i++) {
    tmp = all[i];
    if ((l = tmp.length) === len || l < len && tmp[l - 1].type === ATYPE || l > len && tmp[l - 1].type === OTYPE) {
      if (every(tmp, fn))
        return tmp;
    }
  }
  return [];
}
function parse$2(str) {
  if (str === SEP) {
    return [{ old: str, type: STYPE, val: str, end: "" }];
  }
  var c, x, t, sfx, nxt = strip(str), i = -1, j = 0, len = nxt.length, out = [];
  while (++i < len) {
    c = nxt.charCodeAt(i);
    if (c === COLON) {
      j = i + 1;
      t = PTYPE;
      x = 0;
      sfx = "";
      while (i < len && nxt.charCodeAt(i) !== SLASH) {
        c = nxt.charCodeAt(i);
        if (c === QMARK) {
          x = i;
          t = OTYPE;
        } else if (c === 46 && sfx.length === 0) {
          sfx = nxt.substring(x = i);
        }
        i++;
      }
      out.push({
        old: str,
        type: t,
        val: nxt.substring(j, x || i),
        end: sfx
      });
      nxt = nxt.substring(i);
      len -= i;
      i = 0;
      continue;
    } else if (c === ASTER) {
      out.push({
        old: str,
        type: ATYPE,
        val: nxt.substring(i),
        end: ""
      });
      continue;
    } else {
      j = i;
      while (i < len && nxt.charCodeAt(i) !== SLASH) {
        ++i;
      }
      out.push({
        old: str,
        type: STYPE,
        val: nxt.substring(j, i),
        end: ""
      });
      nxt = nxt.substring(i);
      len -= i;
      i = j = 0;
    }
  }
  return out;
}
function exec$1(str, arr) {
  var i = 0, x, y, segs = split(str), out = {};
  for (; i < arr.length; i++) {
    x = segs[i];
    y = arr[i];
    if (x === SEP)
      continue;
    if (x !== void 0 && y.type | 2 === OTYPE) {
      out[y.val] = x.replace(y.end, "");
    }
  }
  return out;
}
const matchit = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  exec: exec$1,
  match: match$1,
  parse: parse$2
}, Symbol.toStringTag, { value: "Module" }));
const require$$0 = /* @__PURE__ */ getAugmentedNamespace(matchit);
const { exec, match, parse: parse$1 } = require$$0;
class Trouter {
  constructor(opts) {
    this.opts = opts || {};
    this.routes = {};
    this.handlers = {};
    this.all = this.add.bind(this, "*");
    this.get = this.add.bind(this, "GET");
    this.head = this.add.bind(this, "HEAD");
    this.patch = this.add.bind(this, "PATCH");
    this.options = this.add.bind(this, "OPTIONS");
    this.connect = this.add.bind(this, "CONNECT");
    this.delete = this.add.bind(this, "DELETE");
    this.trace = this.add.bind(this, "TRACE");
    this.post = this.add.bind(this, "POST");
    this.put = this.add.bind(this, "PUT");
  }
  add(method, pattern, ...fns) {
    if (this.routes[method] === void 0)
      this.routes[method] = [];
    this.routes[method].push(parse$1(pattern));
    if (this.handlers[method] === void 0)
      this.handlers[method] = {};
    this.handlers[method][pattern] = fns;
    return this;
  }
  find(method, url2) {
    let arr = match(url2, this.routes[method] || []);
    if (arr.length === 0) {
      arr = match(url2, this.routes[method = "*"] || []);
      if (!arr.length)
        return false;
    }
    return {
      params: exec(url2, arr),
      handlers: this.handlers[method][arr[0].old]
    };
  }
}
var trouter = Trouter;
var url = function(req) {
  let url2 = req.url;
  if (url2 === void 0)
    return url2;
  let obj = req._parsedUrl;
  if (obj && obj._raw === url2)
    return obj;
  obj = {};
  obj.query = obj.search = null;
  obj.href = obj.path = obj.pathname = url2;
  let idx = url2.indexOf("?", 1);
  if (idx !== -1) {
    obj.search = url2.substring(idx);
    obj.query = obj.search.substring(1);
    obj.pathname = url2.substring(0, idx);
  }
  obj._raw = url2;
  return req._parsedUrl = obj;
};
const http = require$$0$5;
const Router = trouter;
const { parse } = require$$2$1;
const parser = url;
function lead(x) {
  return x.charCodeAt(0) === 47 ? x : "/" + x;
}
function value(x) {
  let y = x.indexOf("/", 1);
  return y > 1 ? x.substring(0, y) : x;
}
function mutate(str, req) {
  req.url = req.url.substring(str.length) || "/";
  req.path = req.path.substring(str.length) || "/";
}
function onError(err, req, res, next) {
  let code = res.statusCode = err.code || err.status || 500;
  res.end(err.length && err || err.message || http.STATUS_CODES[code]);
}
class Polka extends Router {
  constructor(opts = {}) {
    super(opts);
    this.apps = {};
    this.wares = [];
    this.bwares = {};
    this.parse = parser;
    this.server = opts.server;
    this.handler = this.handler.bind(this);
    this.onError = opts.onError || onError;
    this.onNoMatch = opts.onNoMatch || this.onError.bind(null, { code: 404 });
  }
  add(method, pattern, ...fns) {
    let base = lead(value(pattern));
    if (this.apps[base] !== void 0)
      throw new Error(`Cannot mount ".${method.toLowerCase()}('${lead(pattern)}')" because a Polka application at ".use('${base}')" already exists! You should move this handler into your Polka application instead.`);
    return super.add(method, pattern, ...fns);
  }
  use(base, ...fns) {
    if (typeof base === "function") {
      this.wares = this.wares.concat(base, fns);
    } else if (base === "/") {
      this.wares = this.wares.concat(fns);
    } else {
      base = lead(base);
      fns.forEach((fn) => {
        if (fn instanceof Polka) {
          this.apps[base] = fn;
        } else {
          let arr = this.bwares[base] || [];
          arr.length > 0 || arr.push((r, _, nxt) => (mutate(base, r), nxt()));
          this.bwares[base] = arr.concat(fn);
        }
      });
    }
    return this;
  }
  listen() {
    (this.server = this.server || http.createServer()).on("request", this.handler);
    this.server.listen.apply(this.server, arguments);
    return this;
  }
  handler(req, res, info) {
    info = info || this.parse(req);
    let fns = [], arr = this.wares, obj = this.find(req.method, info.pathname);
    req.originalUrl = req.originalUrl || req.url;
    let base = value(req.path = info.pathname);
    if (this.bwares[base] !== void 0) {
      arr = arr.concat(this.bwares[base]);
    }
    if (obj) {
      fns = obj.handlers;
      req.params = obj.params;
    } else if (this.apps[base] !== void 0) {
      mutate(base, req);
      info.pathname = req.path;
      fns.push(this.apps[base].handler.bind(null, req, res, info));
    } else if (fns.length === 0) {
      fns.push(this.onNoMatch);
    }
    req.search = info.search;
    req.query = parse(info.query);
    let i = 0, len = arr.length, num = fns.length;
    if (len === i && num === 1)
      return fns[0](req, res);
    let next = (err) => err ? this.onError(err, req, res, next) : loop();
    let loop = (_) => res.finished || i < len && arr[i++](req, res, next);
    arr = arr.concat(fns);
    len += num;
    loop();
  }
}
var polka = (opts) => new Polka(opts);
const polka$1 = /* @__PURE__ */ getDefaultExportFromCjs(polka);
const start = async () => {
  if (isDev)
    return void 0;
  const { env: env2 } = await await import(`file://${path$9.join(__dirname, "../renderer/env.js")}`);
  const port2 = env2("PORT", "3000");
  log.info(`Configured Port is: ${port2}`);
  log.info(`Setting origin to http://127.0.0.1:${port2}`);
  process.env["ORIGIN"] = `http://127.0.0.1:${port2}`;
  log.info("Importing Polka handler");
  const { handler } = await import(`file://${path$9.join(__dirname, "../renderer/handler.js")}`);
  const server = polka$1().use(handler);
  Object.assign(console, log.functions);
  log.info("Starting server...");
  server.listen({ path: false, host: "127.0.0.1", port: port2 }, () => {
    log.info(`Server Listening on http://127.0.0.1:${port2}`);
  });
  return port2;
};
const load = (mainWindow, port2) => {
  if (isDev && process.env["ELECTRON_RENDERER_URL"]) {
    log.info(`Loading url: ${process.env["ELECTRON_RENDERER_URL"]}`);
    mainWindow.loadURL(process.env["ELECTRON_RENDERER_URL"]);
  } else {
    log.info(`Loading url: http://127.0.0.1:${port2}`);
    mainWindow.loadURL(`http://127.0.0.1:${port2}`);
  }
};
var src = { exports: {} };
var browser = { exports: {} };
var debug$1 = { exports: {} };
var ms;
var hasRequiredMs;
function requireMs() {
  if (hasRequiredMs)
    return ms;
  hasRequiredMs = 1;
  var s = 1e3;
  var m = s * 60;
  var h = m * 60;
  var d = h * 24;
  var y = d * 365.25;
  ms = function(val, options) {
    options = options || {};
    var type = typeof val;
    if (type === "string" && val.length > 0) {
      return parse2(val);
    } else if (type === "number" && isNaN(val) === false) {
      return options.long ? fmtLong(val) : fmtShort(val);
    }
    throw new Error(
      "val is not a non-empty string or a valid number. val=" + JSON.stringify(val)
    );
  };
  function parse2(str) {
    str = String(str);
    if (str.length > 100) {
      return;
    }
    var match2 = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
      str
    );
    if (!match2) {
      return;
    }
    var n = parseFloat(match2[1]);
    var type = (match2[2] || "ms").toLowerCase();
    switch (type) {
      case "years":
      case "year":
      case "yrs":
      case "yr":
      case "y":
        return n * y;
      case "days":
      case "day":
      case "d":
        return n * d;
      case "hours":
      case "hour":
      case "hrs":
      case "hr":
      case "h":
        return n * h;
      case "minutes":
      case "minute":
      case "mins":
      case "min":
      case "m":
        return n * m;
      case "seconds":
      case "second":
      case "secs":
      case "sec":
      case "s":
        return n * s;
      case "milliseconds":
      case "millisecond":
      case "msecs":
      case "msec":
      case "ms":
        return n;
      default:
        return void 0;
    }
  }
  function fmtShort(ms2) {
    if (ms2 >= d) {
      return Math.round(ms2 / d) + "d";
    }
    if (ms2 >= h) {
      return Math.round(ms2 / h) + "h";
    }
    if (ms2 >= m) {
      return Math.round(ms2 / m) + "m";
    }
    if (ms2 >= s) {
      return Math.round(ms2 / s) + "s";
    }
    return ms2 + "ms";
  }
  function fmtLong(ms2) {
    return plural(ms2, d, "day") || plural(ms2, h, "hour") || plural(ms2, m, "minute") || plural(ms2, s, "second") || ms2 + " ms";
  }
  function plural(ms2, n, name) {
    if (ms2 < n) {
      return;
    }
    if (ms2 < n * 1.5) {
      return Math.floor(ms2 / n) + " " + name;
    }
    return Math.ceil(ms2 / n) + " " + name + "s";
  }
  return ms;
}
var hasRequiredDebug;
function requireDebug() {
  if (hasRequiredDebug)
    return debug$1.exports;
  hasRequiredDebug = 1;
  (function(module, exports) {
    exports = module.exports = createDebug.debug = createDebug["default"] = createDebug;
    exports.coerce = coerce;
    exports.disable = disable;
    exports.enable = enable;
    exports.enabled = enabled;
    exports.humanize = requireMs();
    exports.names = [];
    exports.skips = [];
    exports.formatters = {};
    var prevTime;
    function selectColor(namespace) {
      var hash = 0, i;
      for (i in namespace) {
        hash = (hash << 5) - hash + namespace.charCodeAt(i);
        hash |= 0;
      }
      return exports.colors[Math.abs(hash) % exports.colors.length];
    }
    function createDebug(namespace) {
      function debug2() {
        if (!debug2.enabled)
          return;
        var self2 = debug2;
        var curr = +/* @__PURE__ */ new Date();
        var ms2 = curr - (prevTime || curr);
        self2.diff = ms2;
        self2.prev = prevTime;
        self2.curr = curr;
        prevTime = curr;
        var args = new Array(arguments.length);
        for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i];
        }
        args[0] = exports.coerce(args[0]);
        if ("string" !== typeof args[0]) {
          args.unshift("%O");
        }
        var index = 0;
        args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match2, format2) {
          if (match2 === "%%")
            return match2;
          index++;
          var formatter = exports.formatters[format2];
          if ("function" === typeof formatter) {
            var val = args[index];
            match2 = formatter.call(self2, val);
            args.splice(index, 1);
            index--;
          }
          return match2;
        });
        exports.formatArgs.call(self2, args);
        var logFn = debug2.log || exports.log || console.log.bind(console);
        logFn.apply(self2, args);
      }
      debug2.namespace = namespace;
      debug2.enabled = exports.enabled(namespace);
      debug2.useColors = exports.useColors();
      debug2.color = selectColor(namespace);
      if ("function" === typeof exports.init) {
        exports.init(debug2);
      }
      return debug2;
    }
    function enable(namespaces) {
      exports.save(namespaces);
      exports.names = [];
      exports.skips = [];
      var split2 = (typeof namespaces === "string" ? namespaces : "").split(/[\s,]+/);
      var len = split2.length;
      for (var i = 0; i < len; i++) {
        if (!split2[i])
          continue;
        namespaces = split2[i].replace(/\*/g, ".*?");
        if (namespaces[0] === "-") {
          exports.skips.push(new RegExp("^" + namespaces.substr(1) + "$"));
        } else {
          exports.names.push(new RegExp("^" + namespaces + "$"));
        }
      }
    }
    function disable() {
      exports.enable("");
    }
    function enabled(name) {
      var i, len;
      for (i = 0, len = exports.skips.length; i < len; i++) {
        if (exports.skips[i].test(name)) {
          return false;
        }
      }
      for (i = 0, len = exports.names.length; i < len; i++) {
        if (exports.names[i].test(name)) {
          return true;
        }
      }
      return false;
    }
    function coerce(val) {
      if (val instanceof Error)
        return val.stack || val.message;
      return val;
    }
  })(debug$1, debug$1.exports);
  return debug$1.exports;
}
var hasRequiredBrowser;
function requireBrowser() {
  if (hasRequiredBrowser)
    return browser.exports;
  hasRequiredBrowser = 1;
  (function(module, exports) {
    exports = module.exports = requireDebug();
    exports.log = log2;
    exports.formatArgs = formatArgs;
    exports.save = save;
    exports.load = load2;
    exports.useColors = useColors;
    exports.storage = "undefined" != typeof chrome && "undefined" != typeof chrome.storage ? chrome.storage.local : localstorage();
    exports.colors = [
      "lightseagreen",
      "forestgreen",
      "goldenrod",
      "dodgerblue",
      "darkorchid",
      "crimson"
    ];
    function useColors() {
      if (typeof window !== "undefined" && window.process && window.process.type === "renderer") {
        return true;
      }
      return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // is firebug? http://stackoverflow.com/a/398120/376773
      typeof window !== "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // is firefox >= v31?
      // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
      typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // double check webkit in userAgent just in case we are in a worker
      typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }
    exports.formatters.j = function(v) {
      try {
        return JSON.stringify(v);
      } catch (err) {
        return "[UnexpectedJSONParseError]: " + err.message;
      }
    };
    function formatArgs(args) {
      var useColors2 = this.useColors;
      args[0] = (useColors2 ? "%c" : "") + this.namespace + (useColors2 ? " %c" : " ") + args[0] + (useColors2 ? "%c " : " ") + "+" + exports.humanize(this.diff);
      if (!useColors2)
        return;
      var c = "color: " + this.color;
      args.splice(1, 0, c, "color: inherit");
      var index = 0;
      var lastC = 0;
      args[0].replace(/%[a-zA-Z%]/g, function(match2) {
        if ("%%" === match2)
          return;
        index++;
        if ("%c" === match2) {
          lastC = index;
        }
      });
      args.splice(lastC, 0, c);
    }
    function log2() {
      return "object" === typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments);
    }
    function save(namespaces) {
      try {
        if (null == namespaces) {
          exports.storage.removeItem("debug");
        } else {
          exports.storage.debug = namespaces;
        }
      } catch (e) {
      }
    }
    function load2() {
      var r;
      try {
        r = exports.storage.debug;
      } catch (e) {
      }
      if (!r && typeof process !== "undefined" && "env" in process) {
        r = process.env.DEBUG;
      }
      return r;
    }
    exports.enable(load2());
    function localstorage() {
      try {
        return window.localStorage;
      } catch (e) {
      }
    }
  })(browser, browser.exports);
  return browser.exports;
}
var node = { exports: {} };
var hasRequiredNode;
function requireNode() {
  if (hasRequiredNode)
    return node.exports;
  hasRequiredNode = 1;
  (function(module, exports) {
    var tty = require$$0$6;
    var util = require$$4;
    exports = module.exports = requireDebug();
    exports.init = init;
    exports.log = log2;
    exports.formatArgs = formatArgs;
    exports.save = save;
    exports.load = load2;
    exports.useColors = useColors;
    exports.colors = [6, 2, 3, 4, 5, 1];
    exports.inspectOpts = Object.keys(process.env).filter(function(key) {
      return /^debug_/i.test(key);
    }).reduce(function(obj, key) {
      var prop = key.substring(6).toLowerCase().replace(/_([a-z])/g, function(_, k) {
        return k.toUpperCase();
      });
      var val = process.env[key];
      if (/^(yes|on|true|enabled)$/i.test(val))
        val = true;
      else if (/^(no|off|false|disabled)$/i.test(val))
        val = false;
      else if (val === "null")
        val = null;
      else
        val = Number(val);
      obj[prop] = val;
      return obj;
    }, {});
    var fd = parseInt(process.env.DEBUG_FD, 10) || 2;
    if (1 !== fd && 2 !== fd) {
      util.deprecate(function() {
      }, "except for stderr(2) and stdout(1), any other usage of DEBUG_FD is deprecated. Override debug.log if you want to use a different log function (https://git.io/debug_fd)")();
    }
    var stream = 1 === fd ? process.stdout : 2 === fd ? process.stderr : createWritableStdioStream(fd);
    function useColors() {
      return "colors" in exports.inspectOpts ? Boolean(exports.inspectOpts.colors) : tty.isatty(fd);
    }
    exports.formatters.o = function(v) {
      this.inspectOpts.colors = this.useColors;
      return util.inspect(v, this.inspectOpts).split("\n").map(function(str) {
        return str.trim();
      }).join(" ");
    };
    exports.formatters.O = function(v) {
      this.inspectOpts.colors = this.useColors;
      return util.inspect(v, this.inspectOpts);
    };
    function formatArgs(args) {
      var name = this.namespace;
      var useColors2 = this.useColors;
      if (useColors2) {
        var c = this.color;
        var prefix = "  \x1B[3" + c + ";1m" + name + " \x1B[0m";
        args[0] = prefix + args[0].split("\n").join("\n" + prefix);
        args.push("\x1B[3" + c + "m+" + exports.humanize(this.diff) + "\x1B[0m");
      } else {
        args[0] = (/* @__PURE__ */ new Date()).toUTCString() + " " + name + " " + args[0];
      }
    }
    function log2() {
      return stream.write(util.format.apply(util, arguments) + "\n");
    }
    function save(namespaces) {
      if (null == namespaces) {
        delete process.env.DEBUG;
      } else {
        process.env.DEBUG = namespaces;
      }
    }
    function load2() {
      return process.env.DEBUG;
    }
    function createWritableStdioStream(fd2) {
      var stream2;
      var tty_wrap = process.binding("tty_wrap");
      switch (tty_wrap.guessHandleType(fd2)) {
        case "TTY":
          stream2 = new tty.WriteStream(fd2);
          stream2._type = "tty";
          if (stream2._handle && stream2._handle.unref) {
            stream2._handle.unref();
          }
          break;
        case "FILE":
          var fs2 = require$$1;
          stream2 = new fs2.SyncWriteStream(fd2, { autoClose: false });
          stream2._type = "fs";
          break;
        case "PIPE":
        case "TCP":
          var net = require$$4$1;
          stream2 = new net.Socket({
            fd: fd2,
            readable: false,
            writable: true
          });
          stream2.readable = false;
          stream2.read = null;
          stream2._type = "pipe";
          if (stream2._handle && stream2._handle.unref) {
            stream2._handle.unref();
          }
          break;
        default:
          throw new Error("Implement me. Unknown stream file type!");
      }
      stream2.fd = fd2;
      stream2._isStdio = true;
      return stream2;
    }
    function init(debug2) {
      debug2.inspectOpts = {};
      var keys = Object.keys(exports.inspectOpts);
      for (var i = 0; i < keys.length; i++) {
        debug2.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
      }
    }
    exports.enable(load2());
  })(node, node.exports);
  return node.exports;
}
if (typeof process !== "undefined" && process.type === "renderer") {
  src.exports = requireBrowser();
} else {
  src.exports = requireNode();
}
var srcExports = src.exports;
var path = require$$2;
var spawn = require$$0$3.spawn;
var debug = srcExports("electron-squirrel-startup");
var app = electron$2.app;
var run = function(args, done) {
  var updateExe = path.resolve(path.dirname(process.execPath), "..", "Update.exe");
  debug("Spawning `%s` with args `%s`", updateExe, args);
  spawn(updateExe, args, {
    detached: true
  }).on("close", done);
};
var check = function() {
  if (process.platform === "win32") {
    var cmd = process.argv[1];
    debug("processing squirrel command `%s`", cmd);
    var target = path.basename(process.execPath);
    if (cmd === "--squirrel-install" || cmd === "--squirrel-updated") {
      run(["--createShortcut=" + target], app.quit);
      return true;
    }
    if (cmd === "--squirrel-uninstall") {
      run(["--removeShortcut=" + target], app.quit);
      return true;
    }
    if (cmd === "--squirrel-obsolete") {
      app.quit();
      return true;
    }
  }
  return false;
};
var electronSquirrelStartup = check();
const ess = /* @__PURE__ */ getDefaultExportFromCjs(electronSquirrelStartup);
Object.assign(console, log.functions);
log.info("Hello, log!");
const port = await start();
if (ess) {
  app$1.quit();
}
const createWindow = () => {
  console.log("Creating window...");
  try {
    const windowState = windowStateManager({
      defaultWidth: 1920,
      defaultHeight: 1080
    });
    const mainWindow = new BrowserWindow({
      show: false,
      backgroundColor: "whitesmoke",
      titleBarStyle: "default",
      autoHideMenuBar: false,
      trafficLightPosition: {
        x: 17,
        y: 32
      },
      minHeight: 800,
      minWidth: 800,
      webPreferences: {
        contextIsolation: true,
        nodeIntegration: true,
        spellcheck: false,
        devTools: true,
        preload: path$9.join(__dirname, "../preload/index.mjs")
      },
      x: windowState.x,
      y: windowState.y,
      width: windowState.width,
      height: windowState.height
    });
    load(mainWindow, port);
    if (isDev)
      mainWindow.webContents.openDevTools();
    mainWindow.once("ready-to-show", () => {
      mainWindow.show();
      mainWindow.focus();
    });
    mainWindow.on("close", () => {
      windowState.saveState(mainWindow);
    });
  } catch (e) {
    console.log("Error creating window");
    console.log(e);
  }
};
app$1.on("ready", createWindow);
app$1.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app$1.quit();
  }
});
app$1.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
