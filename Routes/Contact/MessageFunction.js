function messageBody(msg, from) {
  return `
    <html>
        <body>
            <h2>This message is from ${from}</h2>
            <br />
            <p>${msg}</p>
        </body>
    </html>
    `;
}

module.exports = messageBody;
