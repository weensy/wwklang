function Wwklang(size = 32768) {
  this.memory = new Array(size).fill(0);
  this.code = [];
  this.ptr = 0;
  this.pc = 0;
  this.jumpTo = {};
  this.result = "";
}

Wwklang.prototype.load = function (code) {
  this.code = [];
  const rawCode = code
    .split("내가싼똥")[1]
    .split("침바~")[0]
    .split("");
  let read = 0;

  while (read < rawCode.length) {
    if (rawCode[read] === "우") {
      this.code.push(">");
      read += 1;
    } else if (rawCode[read] === "왁") {
      this.code.push("<");
      read += 1;
    } else if (rawCode[read] === "끼") {
      this.code.push("+");
      read += 1;
    } else if (rawCode[read] === "는") {
      this.code.push("-");
      read += 1;
    } else if (rawCode[read] === "살") {
      this.code.push(".");
      read += 1;
    } else if (rawCode[read] === "아") {
      this.code.push(",");
      read += 1;
    } else if (rawCode[read] === "있") {
      this.code.push("[");
      read += 1;
    } else if (rawCode[read] === "다") {
      this.code.push("]");
      read += 1;
    } else {
      read += 1;
    }
  }
};

Wwklang.prototype.preprocess = function () {
  const stack = [];
  for (let i = 0; i < this.code.length; i += 1) {
    const command = this.code[i];
    if (command === "[") {
      stack.push(i);
    } else if (command === "]") {
      if (stack.length === 0) throw new Error("Syntax error");

      this.jumpTo[i] = stack.pop();
      this.jumpTo[this.jumpTo[i]] = i;
    }
  }

  if (stack.length > 0) throw new Error("Syntax error");
};

Wwklang.prototype.increasePtr = function () {
  if (this.ptr >= this.memory.length - 1) throw new Error("Out of memory");
  this.ptr += 1;
};

Wwklang.prototype.decreasePtr = function () {
  if (this.ptr <= 0) throw new Error("Out of memory");
  this.ptr -= 1;
};

Wwklang.prototype.increaseValue = function () {
  this.memory[this.ptr] += 1;
};

Wwklang.prototype.decreaseValue = function () {
  this.memory[this.ptr] -= 1;
};

Wwklang.prototype.printValue = function () {
  this.result += String.fromCharCode(this.memory[this.ptr]);
};

Wwklang.prototype.storingValue = function () {
  this.memory[this.ptr] = prompt(
    "아스키 코드 한 글자를 입력해주세요"
  ).charCodeAt(0);
};

Wwklang.prototype.jump = function (command) {
  if (command === "[" && this.memory[this.ptr] === 0) {
    this.pc = this.jumpTo[this.pc];
  } else if (command === "]" && this.memory[this.ptr] !== 0) {
    this.pc = this.jumpTo[this.pc];
  }
};

Wwklang.prototype.run = function () {
  this.memory = new Array(this.memory.length).fill(0);
  this.ptr = 0;
  this.pc = 0;
  this.jumpTo = {};
  this.result = "";
  this.preprocess();

  while (this.pc < this.code.length) {
    const command = this.code[this.pc];

    if (command === ">") this.increasePtr();
    else if (command === "<") this.decreasePtr();
    else if (command === "+") this.increaseValue();
    else if (command === "-") this.decreaseValue();
    else if (command === ".") this.printValue();
    else if (command === ",") this.storingValue();
    else if (command === "[" || command === "]") this.jump(command);

    this.pc += 1;
  }
};

window.wwk = new Wwklang();
