const http = require("http");

// Create an HTTP server
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("okay");
});
server.on("upgrade", (req, socket, head) => {
  socket.write(
    "HTTP/1.1 101 Web Socket Protocol Handshake\r\n" +
      "Upgrade: WebSocket\r\n" +
      "Connection: Upgrade\r\n" +
      "\r\n"
  );

  socket.pipe(socket); // echo back
  const crypto = require("crypto");
  function getSecWebSocketAccept(secWebsocketKey) {
    return crypto
      .createHash("sha1")
      .update(`${secWebsocketKey}258EAFA5-E914-47DA-95CA-C5AB0DC85B11`)
      .digest("base64");
  }

  const secWebSocketAccept = getSecWebSocketAccept(
    req.headers["sec-websocket-key"]
  );
  socket.write(
    "HTTP/1.1 101 Web Socket Protocol Handshake\r\n" +
      "Upgrade: WebSocket\r\n" +
      "Connection: Upgrade\r\n" +
      "Sec-WebSocket-Accept: " +
      secWebSocketAccept +
      "\r\n" +
      "\r\n"
  );

  socket.on("data", (data) => {
    console.log(decodeSocketFrame(data).payloadBuf.toString());
    socket.write(
      encodeSocketFrame({
        fin: 1,
        opcode: 1,
        payloadBuf: Buffer.from("你好"),
      })
    );
  });
});

function decodeSocketFrame(bufData) {
  let bufIndex = 0;
  const byte1 = bufData.readUInt8(bufIndex++).toString(2);
  const byte2 = bufData.readUInt8(bufIndex++).toString(2);
  const frame = {
    fin: parseInt(byte1.substring(0, 1), 2),
    // RSV是保留字段，暂时不计算
    opcode: parseInt(byte1.substring(4, 8), 2),
    mask: parseInt(byte2.substring(0, 1), 2),
    payloadLen: parseInt(byte2.substring(1, 8), 2),
  };
  // 如果frame.payloadLen为126或127说明这个长度不够了，要使用扩展长度了
  // 如果frame.payloadLen为126，则使用Extended payload length同时为16/8字节数
  // 如果frame.payloadLen为127，则使用Extended payload length同时为64/8字节数
  // 注意payloadLen得长度单位是字节(bytes)而不是比特(bit)
  if (frame.payloadLen == 126) {
    frame.payloadLen = bufData.readUIntBE(bufIndex, 2);
    bufIndex += 2;
  } else if (frame.payloadLen == 127) {
    // 虽然是8字节，但是前四字节目前留空，因为int型是4字节不留空int会溢出
    bufIndex += 4;
    frame.payloadLen = bufData.readUIntBE(bufIndex, 4);
    bufIndex += 4;
  }
  if (frame.mask) {
    const payloadBufList = [];
    // maskingKey为4字节数据
    frame.maskingKey = [
      bufData[bufIndex++],
      bufData[bufIndex++],
      bufData[bufIndex++],
      bufData[bufIndex++],
    ];
    for (let i = 0; i < frame.payloadLen; i++) {
      payloadBufList.push(bufData[bufIndex + i] ^ frame.maskingKey[i % 4]);
    }
    frame.payloadBuf = Buffer.from(payloadBufList);
  } else {
    frame.payloadBuf = bufData.slice(bufIndex, bufIndex + frame.payloadLen);
  }
  return frame;
}
function encodeSocketFrame(frame) {
  const frameBufList = [];
  // 对fin位移七位则为10000000加opcode为10000001
  const header = (frame.fin << 7) + frame.opcode;
  console.log(header);
  frameBufList.push(header);
  const bufBits = Buffer.byteLength(frame.payloadBuf);
  let payloadLen = bufBits;
  let extBuf;
  if (bufBits >= 126) {
    //65536是2**16即两字节数字极限
    if (bufBits >= 65536) {
      extBuf = Buffer.allocUnsafe(8);
      buf.writeUInt32BE(bufBits, 4);
      payloadLen = 127;
    } else {
      extBuf = Buffer.allocUnsafe(2);
      buf.writeUInt16BE(bufBits, 0);
      payloadLen = 126;
    }
  }
  let payloadLenBinStr = payloadLen.toString(2);
  while (payloadLenBinStr.length < 8) {
    payloadLenBinStr = "0" + payloadLenBinStr;
  }
  frameBufList.push(parseInt(payloadLenBinStr, 2));
  if (bufBits >= 126) {
    frameBufList.push(extBuf);
  }
  frameBufList.push(...frame.payloadBuf);
  return Buffer.from(frameBufList);
}
