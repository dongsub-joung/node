for (let i = 0; i < 15; i++) {
    if (i % 3 === 0 && i !== 0) continue;
    if (i > 12) break;
    if (i % 2 === 0 || i === 5) console.log(i * 2);
}