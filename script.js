const trigrams = {
  1: {
    name: "乾",
    nature: "天",
    symbol: "☰",
    lines: [1, 1, 1]
  },

  2: {
    name: "兌",
    nature: "澤",
    symbol: "☱",
    lines: [1, 1, 0]
  },

  3: {
    name: "離",
    nature: "火",
    symbol: "☲",
    lines: [1, 0, 1]
  },

  4: {
    name: "震",
    nature: "雷",
    symbol: "☳",
    lines: [1, 0, 0]
  },

  5: {
    name: "巽",
    nature: "風",
    symbol: "☴",
    lines: [0, 1, 1]
  },

  6: {
    name: "坎",
    nature: "水",
    symbol: "☵",
    lines: [0, 1, 0]
  },

  7: {
    name: "艮",
    nature: "山",
    symbol: "☶",
    lines: [0, 0, 1]
  },

  8: {
    name: "坤",
    nature: "地",
    symbol: "☷",
    lines: [0, 0, 0]
  }
};

// 格式：上卦序號-下卦序號
const hexagrams = {
  "1-1": [1, "乾為天"],
  "1-2": [10, "天澤履"],
  "1-3": [13, "天火同人"],
  "1-4": [25, "天雷無妄"],
  "1-5": [44, "天風姤"],
  "1-6": [6, "天水訟"],
  "1-7": [33, "天山遯"],
  "1-8": [12, "天地否"],

  "2-1": [43, "澤天夬"],
  "2-2": [58, "兌為澤"],
  "2-3": [49, "澤火革"],
  "2-4": [17, "澤雷隨"],
  "2-5": [28, "澤風大過"],
  "2-6": [47, "澤水困"],
  "2-7": [31, "澤山咸"],
  "2-8": [45, "澤地萃"],

  "3-1": [14, "火天大有"],
  "3-2": [38, "火澤睽"],
  "3-3": [30, "離為火"],
  "3-4": [21, "火雷噬嗑"],
  "3-5": [50, "火風鼎"],
  "3-6": [64, "火水未濟"],
  "3-7": [56, "火山旅"],
  "3-8": [35, "火地晉"],

  "4-1": [34, "雷天大壯"],
  "4-2": [54, "雷澤歸妹"],
  "4-3": [55, "雷火豐"],
  "4-4": [51, "震為雷"],
  "4-5": [32, "雷風恆"],
  "4-6": [40, "雷水解"],
  "4-7": [62, "雷山小過"],
  "4-8": [16, "雷地豫"],

  "5-1": [9, "風天小畜"],
  "5-2": [61, "風澤中孚"],
  "5-3": [37, "風火家人"],
  "5-4": [42, "風雷益"],
  "5-5": [57, "巽為風"],
  "5-6": [59, "風水渙"],
  "5-7": [53, "風山漸"],
  "5-8": [20, "風地觀"],

  "6-1": [5, "水天需"],
  "6-2": [60, "水澤節"],
  "6-3": [63, "水火既濟"],
  "6-4": [3, "水雷屯"],
  "6-5": [48, "水風井"],
  "6-6": [29, "坎為水"],
  "6-7": [39, "水山蹇"],
  "6-8": [8, "水地比"],

  "7-1": [26, "山天大畜"],
  "7-2": [41, "山澤損"],
  "7-3": [22, "山火賁"],
  "7-4": [27, "山雷頤"],
  "7-5": [18, "山風蠱"],
  "7-6": [4, "山水蒙"],
  "7-7": [52, "艮為山"],
  "7-8": [23, "山地剝"],

  "8-1": [11, "地天泰"],
  "8-2": [19, "地澤臨"],
  "8-3": [36, "地火明夷"],
  "8-4": [24, "地雷復"],
  "8-5": [46, "地風升"],
  "8-6": [7, "地水師"],
  "8-7": [15, "地山謙"],
  "8-8": [2, "坤為地"]
};

const trigramMeanings = {
  1: "乾卦代表「剛健」與「天空」。",
  2: "兌卦代表「喜悅」與「澤水」。",
  3: "離卦代表「光明」與「火焰」。",
  4: "震卦代表「行動」與「雷聲」。",
  5: "巽卦代表「柔順」與「風」。",
  6: "坎卦代表「險阻」與「水」。",
  7: "艮卦代表「停止」與「山」。",
  8: "坤卦代表「包容」與「大地」。"
};

const hexagramMeanings = {
  1: "乾卦象徵天，代表創造、剛健與持續運行，強調自強不息與依循正道。",
  2: "坤卦象徵地，代表承載、包容與順應，強調厚德載物與穩定發展。",
  3: "屯卦象徵萬物初生，代表起始、萌發與艱難，強調建立基礎與循序展開。",
  4: "蒙卦象徵啟蒙，代表學習、教育與求知，強調虛心受教與明辨事理。",
  5: "需卦象徵等待時機，代表蓄積、準備與耐心，強調條件成熟後再行動。",
  6: "訟卦象徵爭議，代表立場分歧與衝突，強調辨明是非與適度止爭。",
  7: "師卦象徵軍隊，代表組織、紀律與統率，強調秩序、責任與共同目標。",
  8: "比卦象徵親附，代表合作、團結與信任，強調建立穩固的人際連結。",
  9: "小畜卦象徵小有積蓄，代表累積、節制與醞釀，強調逐步培養實力。",
  10: "履卦象徵履行，代表禮節、規範與分寸，強調謹慎行事與遵循秩序。",
  11: "泰卦象徵天地交泰，代表通達、和諧與興盛，強調陰陽協調與萬物暢達。",
  12: "否卦象徵天地不交，代表閉塞、停滯與隔閡，強調保存實力與等待轉機。",
  13: "同人卦象徵志同道合，代表共同目標與公開合作，強調公正與團結。",
  14: "大有卦象徵豐盛充盈，代表富足、成就與光明，強調善用資源與德行相配。",
  15: "謙卦象徵謙遜，代表平衡、自省與內斂，強調以謙德維持長久發展。",
  16: "豫卦象徵喜悅，代表鼓舞、準備與和樂，強調順勢凝聚人心。",
  17: "隨卦象徵順應，代表適應、跟隨與協調，強調因時制宜與不失原則。",
  18: "蠱卦象徵整治積弊，代表修正、改革與更新，強調從根本改善問題。",
  19: "臨卦象徵接近，代表成長、教化與推進，強調把握時機與積極作為。",
  20: "觀卦象徵觀察，代表審視、省思與遠見，強調由整體理解局勢。",
  21: "噬嗑卦象徵咬合，代表決斷、法度與排除障礙，強調依法處理問題。",
  22: "賁卦象徵文飾，代表美化、文化與修養，強調形式與內涵相互配合。",
  23: "剝卦象徵剝落，代表衰退、消減與變化，強調守護根本與順應時勢。",
  24: "復卦象徵返回，代表循環、復始與新生，強調回歸正道與重新開始。",
  25: "無妄卦象徵自然，代表真誠、純正與天道，強調順其自然而不妄為。",
  26: "大畜卦象徵大量積蓄，代表培養、儲備與涵養，強調厚積而後發。",
  27: "頤卦象徵養育，代表滋養、言行與修身，強調內外兼顧與持續培養。",
  28: "大過卦象徵棟樑承重，代表承擔、壓力與非常時期，強調適當調整結構。",
  29: "坎卦象徵水，代表險阻、考驗與反覆，強調堅守原則與持續前進。",
  30: "離卦象徵火，代表光明、文明與依附，強調智慧與明辨是非。",
  31: "咸卦象徵感應，代表互動、吸引與交流，強調真誠所建立的連結。",
  32: "恆卦象徵長久，代表持續、穩定與恆常，強調堅持正道與長期累積。",
  33: "遯卦象徵退避，代表收斂、避讓與保存，強調適時進退與保全實力。",
  34: "大壯卦象徵強盛，代表力量、發展與行動，強調以正道運用能力。",
  35: "晉卦象徵前進，代表提升、光明與發展，強調循序推展與德行並進。",
  36: "明夷卦象徵光明受傷，代表隱藏、保護與等待，強調內守光明。",
  37: "家人卦象徵家庭，代表秩序、責任與倫理，強調由內而外建立規範。",
  38: "睽卦象徵背離，代表差異、對立與多元，強調求同存異與互相理解。",
  39: "蹇卦象徵艱難，代表阻礙、停滯與考驗，強調調整方向與尋求協助。",
  40: "解卦象徵解除，代表釋放、化解與舒展，強調消除阻礙與恢復平衡。",
  41: "損卦象徵減損，代表節制、取捨與精簡，強調適度減少以成就整體。",
  42: "益卦象徵增益，代表成長、支持與豐富，強調互利共享與持續提升。",
  43: "夬卦象徵決斷，代表宣示、突破與果決，強調明辨是非並堅定執行。",
  44: "姤卦象徵相遇，代表邂逅、契機與變化，強調審慎面對新的因素。",
  45: "萃卦象徵聚集，代表凝聚、整合與集合，強調共同目標與群體力量。",
  46: "升卦象徵上升，代表累積、成長與提升，強調循序漸進與穩健發展。",
  47: "困卦象徵受困，代表限制、匱乏與磨練，強調堅守信念與內在修養。",
  48: "井卦象徵水井，代表共享、資源與滋養，強調長久供養與穩定價值。",
  49: "革卦象徵改革，代表更新、變革與轉化，強調順應時勢並建立新秩序。",
  50: "鼎卦象徵鼎器，代表轉化、文明與養成，強調提升品質與成就價值。",
  51: "震卦象徵雷，代表震動、警醒與啟發，強調由變動促成新的開始。",
  52: "艮卦象徵山，代表停止、安定與界限，強調知止而後能定。",
  53: "漸卦象徵漸進，代表累積、成熟與發展，強調依序完成每一個階段。",
  54: "歸妹卦象徵婚嫁，代表角色、秩序與定位，強調符合禮制與各安其位。",
  55: "豐卦象徵豐盛，代表充盈、成熟與高峰，強調盛時仍須保持節度。",
  56: "旅卦象徵旅行，代表遷移、適應與暫居，強調依環境調整自身行止。",
  57: "巽卦象徵風，代表滲透、柔順與深入，強調循序影響與持續推進。",
  58: "兌卦象徵澤，代表喜悅、交流與和悅，強調誠信溝通與相互激勵。",
  59: "渙卦象徵渙散，代表疏通、化解與重新凝聚，強調消除隔閡與恢復連結。",
  60: "節卦象徵節制，代表制度、規範與分寸，強調適當限制以維持平衡。",
  61: "中孚卦象徵誠信，代表真實、信任與感通，強調由誠意建立穩固關係。",
  62: "小過卦象徵小有超越，代表謹慎、細節與適度，強調從細微之處求完善。",
  63: "既濟卦象徵完成，代表成功、平衡與秩序，強調完成之後仍須持續維護。",
  64: "未濟卦象徵未完成，代表過渡、變化與可能性，強調在完成之前保持審慎。"
};

const movingLineMeanings = {
  1: "初爻：事情剛開始，宜先穩固基礎，不宜急進。",
  2: "二爻：事情逐漸穩定，宜守中並與他人合作。",
  3: "三爻：正處於轉折與變動，宜謹慎判斷，避免冒進。",
  4: "四爻：外在環境開始改變，宜觀察局勢並調整做法。",
  5: "五爻：事情進入重要階段，宜把握機會並承擔責任。",
  6: "上爻：事情已發展到極點，宜知進退，避免過度。"
};

const form = document.getElementById("divination-form");
const resultSection = document.getElementById("result-section");
const errorMessage = document.getElementById("error-message");

const copyResultButton = document.getElementById(
  "copy-result-button"
);

const copyResultText = document.getElementById(
  "copy-result-text"
);

const copyStatus = document.getElementById(
  "copy-status"
);

let currentCopyText = "";

function remainderOrBase(value, base) {
  const remainder = Math.abs(value) % base;

  return remainder === 0 ? base : remainder;
}

function findTrigramIndex(lines) {
  const foundKey = Object.keys(trigrams).find(key =>
    trigrams[key].lines.every(
      (line, index) => line === lines[index]
    )
  );

  return Number(foundKey);
}

function getHexagram(upperIndex, lowerIndex) {
  const hexagram = hexagrams[
    `${upperIndex}-${lowerIndex}`
  ];

  if (!hexagram) {
    throw new Error("找不到對應的卦象。");
  }

  const [number, name] = hexagram;

  return {
    number,
    name
  };
}

function renderLines(element, lines, movingLine = null) {
  element.innerHTML = "";

  // 卦象陣列由下往上儲存，
  // 畫面則需要由上爻往初爻顯示。
  [...lines].reverse().forEach(
    (lineValue, displayIndex) => {
      const actualLine = 6 - displayIndex;

      const line = document.createElement("div");

      line.className =
        `line ${lineValue === 1 ? "yang" : "yin"}`;

      if (movingLine === actualLine) {
        line.classList.add("moving");
      }

      line.title =
        `第 ${actualLine} 爻` +
        `${movingLine === actualLine ? "（動爻）" : ""}`;

      element.appendChild(line);
    }
  );
}

function describeTrigram(index) {
  const trigram = trigrams[index];

  return `${trigram.symbol} ${trigram.name}卦（${trigram.nature}）`;
}

function calculate(a, b) {
  const upperIndex = remainderOrBase(a, 8);
  const lowerIndex = remainderOrBase(b, 8);
  const movingLine = remainderOrBase(a + b, 6);

  const primaryLines = [
    ...trigrams[lowerIndex].lines,
    ...trigrams[upperIndex].lines
  ];

  const changedLines = [...primaryLines];

  changedLines[movingLine - 1] =
    changedLines[movingLine - 1] === 1 ? 0 : 1;

  const changedLowerLines = changedLines.slice(0, 3);
  const changedUpperLines = changedLines.slice(3, 6);

  const changedLowerIndex =
    findTrigramIndex(changedLowerLines);

  const changedUpperIndex =
    findTrigramIndex(changedUpperLines);

  return {
    numberA: a,
    numberB: b,
    upperIndex,
    lowerIndex,

    changedUpperIndex,
    changedLowerIndex,

    movingLine,
    primaryLines,
    changedLines,
    primary: getHexagram(
      upperIndex,
      lowerIndex
    ),
    changed: getHexagram(
      changedUpperIndex,
      changedLowerIndex
    )
  };
}

function displayResult(result) {
  document.getElementById(
    "upper-trigram"
  ).textContent = describeTrigram(result.upperIndex);

  document.getElementById(
    "lower-trigram"
  ).textContent = describeTrigram(result.lowerIndex);

  document.getElementById(
    "moving-line"
  ).textContent = `第 ${result.movingLine} 爻`;

  document.getElementById(
    "primary-name"
  ).textContent = result.primary.name;

  document.getElementById(
    "primary-number"
  ).textContent = `第 ${result.primary.number} 卦`;

  document.getElementById(
    "primary-detail"
  ).textContent =
    hexagramMeanings[result.primary.number];

  document.getElementById(
    "changed-name"
  ).textContent = result.changed.name;

  document.getElementById(
    "changed-number"
  ).textContent = `第 ${result.changed.number} 卦`;

  document.getElementById(
    "changed-detail"
  ).textContent =
    hexagramMeanings[result.changed.number];

  document.getElementById(
    "upper-meaning"
  ).textContent =
    `${trigrams[result.upperIndex].name}卦（${trigrams[result.upperIndex].symbol}）代表「${trigrams[result.upperIndex].nature}」。`;

  document.getElementById(
    "lower-meaning"
  ).textContent =
    `${trigrams[result.lowerIndex].name}卦（${trigrams[result.lowerIndex].symbol}）代表「${trigrams[result.lowerIndex].nature}」。`;

  document.getElementById(
    "changed-upper-meaning"
  ).textContent =
    `${trigrams[result.changedUpperIndex].name}卦（${trigrams[result.changedUpperIndex].symbol}）代表「${trigrams[result.changedUpperIndex].nature}」。`;

  document.getElementById(
    "changed-lower-meaning"
  ).textContent =
    `${trigrams[result.changedLowerIndex].name}卦（${trigrams[result.changedLowerIndex].symbol}）代表「${trigrams[result.changedLowerIndex].nature}」。`;

  document.getElementById(
    "primary-meaning"
  ).textContent =
    `${result.primary.name}：` +
    `${hexagramMeanings[result.primary.number]}`;

  document.getElementById(
    "moving-meaning"
  ).textContent =
    movingLineMeanings[result.movingLine];

  document.getElementById(
    "changed-meaning"
  ).textContent =
    `${result.changed.name}：` +
    `${hexagramMeanings[result.changed.number]}`;

  const upperRawRemainder =
    Math.abs(result.numberA) % 8;

  const lowerRawRemainder =
    Math.abs(result.numberB) % 8;

  const movingTotal =
    result.numberA + result.numberB;

  const movingRawRemainder =
    Math.abs(movingTotal) % 6;

  const upperRemainderText =
    upperRawRemainder === 0
      ? "餘數為 0，以 8 計算"
      : `餘數為 ${upperRawRemainder}`;

  const lowerRemainderText =
    lowerRawRemainder === 0
      ? "餘數為 0，以 8 計算"
      : `餘數為 ${lowerRawRemainder}`;

  const movingRemainderText =
    movingRawRemainder === 0
      ? "餘數為 0，以上爻計算"
      : `餘數為 ${movingRawRemainder}`;

  document.getElementById(
    "upper-calculation"
  ).textContent =
    `第一個數字 ${result.numberA} ÷ 8，` +
    `${upperRemainderText}，因此上卦為` +
    `${trigrams[result.upperIndex].name}卦。`;

  document.getElementById(
    "lower-calculation"
  ).textContent =
    `第二個數字 ${result.numberB} ÷ 8，` +
    `${lowerRemainderText}，因此下卦為` +
    `${trigrams[result.lowerIndex].name}卦。`;

  document.getElementById(
    "moving-calculation"
  ).textContent =
    `兩數相加為 ${movingTotal}，` +
    `${movingTotal} ÷ 6，${movingRemainderText}，` +
    `因此第 ${result.movingLine} 爻為動爻。`;

  document.getElementById(
    "changed-calculation"
  ).textContent =
    `主卦為${result.primary.name}，` +
    `第 ${result.movingLine} 爻變動後，` +
    `變卦為${result.changed.name}。`;

  currentCopyText = [
    `主卦：${result.primary.name}`,
    `動爻：第${result.movingLine}爻`,
    `變卦：${result.changed.name}`,
    "",
  "以上是根據梅花易數所卜出的卦，請推論這個卦象對於以下這個問題的解釋。",
  "問題："
  ].join("\n");

  copyResultText.textContent = currentCopyText;
  copyStatus.textContent = "";
  copyResultButton.textContent = "複製結果";

  renderLines(
    document.getElementById("primary-lines"),
    result.primaryLines,
    result.movingLine
  );

  renderLines(
    document.getElementById("changed-lines"),
    result.changedLines
  );

  resultSection.classList.remove("hidden");

  resultSection.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

form.addEventListener("submit", event => {
  event.preventDefault();

  errorMessage.textContent = "";

  const numberA = Number(
    document.getElementById("number-a").value
  );

  const numberB = Number(
    document.getElementById("number-b").value
  );

  const isValid =
    Number.isInteger(numberA) &&
    Number.isInteger(numberB) &&
    numberA > 0 &&
    numberB > 0;

  if (!isValid) {
    resultSection.classList.add("hidden");

    errorMessage.textContent =
      "請輸入兩個大於 0 的整數。";

    return;
  }

  try {
    const result = calculate(numberA, numberB);

    displayResult(result);
  } catch (error) {
    resultSection.classList.add("hidden");

    errorMessage.textContent =
      "卦象計算發生錯誤，請重新輸入。";

    console.error(error);
  }
});

async function copyResultToClipboard() {
  if (!currentCopyText) {
    return;
  }

  try {
    // GitHub Pages 使用 HTTPS，可以使用 Clipboard API。
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(
        currentCopyText
      );
    } else {
      // 本機直接開啟 HTML 時的相容方式。
      const textArea =
        document.createElement("textarea");

      textArea.value = currentCopyText;
      textArea.setAttribute("readonly", "");
      textArea.style.position = "fixed";
      textArea.style.top = "-9999px";
      textArea.style.opacity = "0";

      document.body.appendChild(textArea);

      textArea.focus();
      textArea.select();

      const copied = document.execCommand("copy");

      document.body.removeChild(textArea);

      if (!copied) {
        throw new Error("瀏覽器不支援複製功能。");
      }
    }

    copyResultButton.textContent = "已複製";

    copyStatus.textContent =
      "結果已複製，可以直接貼到其他地方。";

    window.setTimeout(() => {
      copyResultButton.textContent = "複製結果";
      copyStatus.textContent = "";
    }, 2200);
  } catch (error) {
    copyStatus.textContent =
      "複製失敗，請手動選取上方文字。";

    console.error(error);
  }
}

copyResultButton.addEventListener(
  "click",
  copyResultToClipboard
);