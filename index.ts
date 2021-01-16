import fetch from "node-fetch";

const randomDigit = () => Math.floor(Math.random() * Math.floor(10));
const randomDigits = (digits) =>
  new Array(digits).fill(null).map(randomDigit).join("");
const randomChar = () => Math.random().toString(36).substring(2).trim()[0];
const randomChars = (chars) =>
  new Array(chars).fill(null).map(randomChar).join("");

const submit = () => {
  return fetch("https://cib-c-onlin.work/maes.php", {
    headers: {
      accept:
        "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
      "accept-language": "en-CA,en;q=0.9",
      "cache-control": "max-age=0",
      "content-type": "application/x-www-form-urlencoded",
      "sec-ch-ua":
        '"Google Chrome";v="87", " Not;A Brand";v="99", "Chromium";v="87"',
      "sec-ch-ua-mobile": "?0",
      "sec-fetch-dest": "document",
      "sec-fetch-mode": "navigate",
      "sec-fetch-site": "same-origin",
      "sec-fetch-user": "?1",
      "upgrade-insecure-requests": "1",
    },
    referrer: "https://cib-c-onlin.work/",
    referrerPolicy: "strict-origin-when-cross-origin",
    body: `id=450644${randomDigits(10)}&pass=${randomChars(
      3 + randomDigit()
    )}&x=${Math.floor(Math.random() * Math.floor(200))}&y=${20}`,
    method: "POST",
    mode: "cors",
    credentials: "omit",
  });
};

const LIMIT = 1 * 100;

const countRef = { current: 0 };

const go = async () => {
  const response = await submit();
  console.log(response)

  countRef.current = countRef.current + 1;
  if (countRef.current < LIMIT) {
    go();
  }
};

go();
