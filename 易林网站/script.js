let guaData = null;

const bagua = {
    '111': '乾',
    '000': '坤',
    '010': '坎',
    '101': '离',
    '001': '震',
    '100': '艮',
    '110': '巽',
    '011': '兑'
};

const liushisigua = {
    '111111': '乾',     // 01. 乾为天 (天111 + 天111)
    '000000': '坤',     // 02. 坤为地 (地000 + 地000)
    '010001': '屯',     // 03. 水雷屯 (水010 + 雷001)
    '100010': '蒙',     // 04. 山水蒙 (山100 + 水010)
    '010111': '需',     // 05. 水天需 (水010 + 天111)
    '111010': '讼',     // 06. 天水讼 (天111 + 水010)
    '000010': '师',     // 07. 地水师 (地000 + 水010)
    '010000': '比',     // 08. 水地比 (水010 + 地000)
    '110111': '小畜',   // 09. 风天小畜 (风110 + 天111)
    '111011': '履',     // 10. 天泽履 (天111 + 泽011)
    '000111': '泰',     // 11. 地天泰 (地000 + 天111)
    '111000': '否',     // 12. 天地否 (天111 + 地000)
    '111101': '同人',   // 13. 天火同人 (天111 + 火101)
    '101111': '大有',   // 14. 火天大有 (火101 + 天111)
    '000100': '谦',     // 15. 地山谦 (地000 + 山100)
    '001000': '豫',     // 16. 雷地豫 (雷001 + 地000)
    '011001': '随',     // 17. 泽雷随 (泽011 + 雷001)
    '100110': '蛊',     // 18. 山风蛊 (山100 + 风110)
    '000011': '临',     // 19. 地泽临 (地000 + 泽011)
    '110000': '观',     // 20. 风地观 (风110 + 地000)
    '101001': '噬嗑',   // 21. 火雷噬嗑 (火101 + 雷001)
    '100101': '贲',     // 22. 山火贲 (山100 + 火101)
    '100000': '剥',     // 23. 山地剥 (山100 + 地000)
    '000001': '复',     // 24. 地雷复 (地000 + 雷001)
    '111001': '无妄',   // 25. 天雷无妄 (天111 + 雷001)
    '100111': '大畜',   // 26. 山天大畜 (山100 + 天111)
    '100001': '颐',     // 27. 山雷颐 (山100 + 雷001)
    '011110': '大过',   // 28. 泽风大过 (泽011 + 风110)
    '010010': '坎',     // 29. 坎为水 (水010 + 水010)
    '101101': '离',     // 30. 离为火 (火101 + 火101)
    '011100': '咸',     // 31. 泽山咸 (泽011 + 山100)
    '001110': '恒',     // 32. 雷风恒 (雷001 + 风110)
    '111100': '遁',     // 33. 天山遁 (天111 + 山100)
    '001111': '大壮',   // 34. 雷天大壮 (雷001 + 天111)
    '101000': '晋',     // 35. 火地晋 (火101 + 地000)
    '000101': '明夷',   // 36. 地火明夷 (地000 + 火101)
    '110101': '家人',   // 37. 风火家人 (风110 + 火101)
    '101011': '睽',     // 38. 火泽睽 (火101 + 泽011)
    '010100': '蹇',     // 39. 水山蹇 (水010 + 山100)
    '001010': '解',     // 40. 雷水解 (雷001 + 水010)
    '100011': '损',     // 41. 山泽损 (山100 + 泽011)
    '110001': '益',     // 42. 风雷益 (风110 + 雷001)
    '011111': '夬',     // 43. 泽天夬 (泽011 + 天111)
    '111110': '姤',     // 44. 天风姤 (天111 + 风110)
    '011000': '萃',     // 45. 泽地萃 (泽011 + 地000)
    '000110': '升',     // 46. 地风升 (地000 + 风110)
    '011010': '困',     // 47. 泽水困 (泽011 + 水010)
    '010110': '井',     // 48. 水风井 (水010 + 风110)
    '011101': '革',     // 49. 泽火革 (泽011 + 火101)
    '101110': '鼎',     // 50. 火风鼎 (火101 + 风110)
    '001001': '震',     // 51. 震为雷 (雷001 + 雷001)
    '100100': '艮',     // 52. 艮为山 (山100 + 山100)
    '110100': '渐',     // 53. 风山渐 (风110 + 山100)
    '001011': '归妹',   // 54. 雷泽归妹 (雷001 + 泽011) 
    '001101': '丰',     // 55. 雷火丰 (雷001 + 火101)
    '101100': '旅',     // 56. 火山旅 (火101 + 山100)
    '110110': '巽',     // 57. 巽为风 (风110 + 风110)
    '011011': '兑',     // 58. 兑为泽 (泽011 + 泽011)
    '110010': '涣',     // 59. 风水涣 (风110 + 水010)
    '010011': '节',     // 60. 水泽节 (水010 + 泽011)
    '110011': '中孚',   // 61. 风泽中孚 (风110 + 泽011)
    '001100': '小过',   // 62. 雷山小过 (雷001 + 山100)
    '010101': '既济',   // 63. 水火既济 (水010 + 火101)
    '101010': '未济'    // 64. 火水未济 (火101 + 水010)
};

async function loadData() {
    try {
        const response = await fetch('data.json');
        const data = await response.json();
        guaData = data.data;
    } catch (error) {
        console.error('加载数据失败:', error);
    }
}

function getGuaNameFromYao(yaoArray) {
    const yaoStr = yaoArray.join('');
    const combinations = [
        yaoStr,
        yaoStr.split('').reverse().join('')
    ];
    
    for (const comb of combinations) {
        if (liushisigua[comb]) {
            return liushisigua[comb];
        }
    }
    return null;
}

function calculateChangedGua(originalYao, changingYao) {
    const changedYao = originalYao.map((yao, index) => {
        if (changingYao[index]) {
            return yao === 1 ? 0 : 1;
        }
        return yao;
    });
    return changedYao;
}

function findGuaCi(originalName, changedName) {
    if (!guaData) return null;
    
    const originalGua = guaData.find(g => g.name === originalName);
    if (!originalGua) return null;
    
    const changedGua = originalGua.bian_gua.find(bg => bg.name === changedName);
    return changedGua || null;
}

function initYaoListeners() {
    const yaoItems = document.querySelectorAll('.yao-item');
    
    yaoItems.forEach((item, index) => {
        const yaoLine = item.querySelector('.yao-line');
        const yaoBtn = item.querySelector('.yao-btn');
        
        yaoLine.addEventListener('click', () => {
            const currentType = yaoLine.dataset.type;
            yaoLine.dataset.type = currentType === 'yang' ? 'yin' : 'yang';
            updateGuaDisplay();
        });
        
        yaoBtn.addEventListener('click', () => {
            yaoBtn.classList.toggle('active');
            yaoLine.classList.toggle('changing');
            yaoBtn.textContent = yaoBtn.classList.contains('active') ? '动爻' : '静爻';
            updateGuaDisplay();
        });
    });
}

function getYaoState() {
    const yaoItems = document.querySelectorAll('.yao-item');
    const yao = [];
    const changing = [];
    
    yaoItems.forEach(item => {
        const yaoLine = item.querySelector('.yao-line');
        const yaoBtn = item.querySelector('.yao-btn');
        
        yao.push(yaoLine.dataset.type === 'yang' ? 1 : 0);
        changing.push(yaoBtn.classList.contains('active'));
    });
    
    return { yao, changing };
}

function updateGuaDisplay() {
    const { yao, changing } = getYaoState();
    
    const originalName = getGuaNameFromYao(yao);
    document.getElementById('original-gua').textContent = originalName || '请输入卦象';
    
    const changedYao = calculateChangedGua(yao, changing);
    const changedName = getGuaNameFromYao(changedYao);
    document.getElementById('changed-gua').textContent = changedName || '请输入卦象';
}

function showResult(originalName, changedName, guaCi) {
    document.getElementById('result-original').textContent = originalName;
    document.getElementById('result-changed').textContent = changedName;
    document.getElementById('gua-ci').textContent = guaCi.ci;
    document.getElementById('gua-translation').textContent = guaCi.translation;
    document.getElementById('result-panel').classList.remove('hidden');
}

function initTabListeners() {
    const tabs = document.querySelectorAll('.tab');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            const tabId = tab.dataset.tab;
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });
            document.getElementById(tabId + '-tab').classList.add('active');
        });
    });
}

function divine() {
    const { yao, changing } = getYaoState();
    
    const originalName = getGuaNameFromYao(yao);
    if (!originalName) {
        alert('无法识别本卦，请检查爻位设置');
        return;
    }
    
    const changedYao = calculateChangedGua(yao, changing);
    const changedName = getGuaNameFromYao(changedYao) || originalName;
    
    const guaCi = findGuaCi(originalName, changedName);
    
    if (guaCi) {
        showResult(originalName, changedName, guaCi);
    } else {
        alert('未找到对应的卦辞');
    }
}

const guaXuOrder = [
    '乾', '坤', '屯', '蒙', '需', '讼', '师', '比',
    '小畜', '履', '泰', '否', '同人', '大有', '谦', '豫',
    '随', '蛊', '临', '观', '噬嗑', '贲', '剥', '复',
    '无妄', '大畜', '颐', '大过', '坎', '离', '咸', '恒',
    '遁', '大壮', '晋', '明夷', '家人', '睽', '蹇', '解',
    '损', '益', '夬', '姤', '萃', '升', '困', '井',
    '革', '鼎', '震', '艮', '渐', '归妹', '丰', '旅',
    '巽', '兑', '涣', '节', '中孚', '小过', '既济', '未济'
];

function divineByNumber() {
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);
    
    if (isNaN(num1) || isNaN(num2)) {
        alert('请输入两个数字');
        return;
    }
    
    const originalIndex = (num1 - 1) % 64;
    const changedIndex = (num2 - 1) % 64;
    
    const originalName = guaXuOrder[originalIndex];
    const changedName = guaXuOrder[changedIndex];
    
    const guaCi = findGuaCi(originalName, changedName);
    
    if (guaCi) {
        showResult(originalName, changedName, guaCi);
    } else {
        alert('未找到对应的卦辞');
    }
}

function init() {
    loadData();
    initYaoListeners();
    initTabListeners();
    
    document.getElementById('divine-btn').addEventListener('click', divine);
    document.getElementById('divine-number-btn').addEventListener('click', divineByNumber);
    document.getElementById('close-result').addEventListener('click', () => {
        document.getElementById('result-panel').classList.add('hidden');
    });
    
    document.getElementById('result-panel').addEventListener('click', (e) => {
        if (e.target.id === 'result-panel') {
            document.getElementById('result-panel').classList.add('hidden');
        }
    });
}

document.addEventListener('DOMContentLoaded', init);