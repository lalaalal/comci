function 자료94(자료, 학년, 반) {
    var p, k, th, sb, 속성 = '', 원자료, 일일자료;
    p = "<TABLE  style='width:340px; margin:3px 0px;'>";
    p += "<TR><td class='내용2' style='border:0px; text-align:left;'><input type='button' onClick='ba_NextDisp(-1);' value='◀'></td><TD style='border:0px;' colspan='5' class='내용2'>제 " + 학년 + " 학년 " + 반 + " 반 시간표 </TD><td class='내용2'style='border:0px; text-align:right;'><input type='button' onClick='ba_NextDisp(1);' value='▶'></td></TR>";
    p += 요일출력하기(자료.시작일);
    var 시작일 = new Date(자료.시작일);
    var 제한일 = new Date(자료.열람제한일);
    for (var 교시 = 1; 교시 <= 8; 교시++) {
        p += "<tr><td class='교시'>" + 자료.일과시간[교시 - 1] + "</td>";
        var dt = new Date(자료.시작일);
        dt.setDate(dt.getDate() - 1);
        for (var 요일 = 1; 요일 < 7; 요일++) {
            dt.setDate(dt.getDate() + 1);
            if (dt < 제한일 || 제한일.getFullYear() < 2014 || isNaN(제한일)) {
                원자료 = 자료.자료81[학년][반][요일][교시];
                일일자료 = 자료.자료14[학년][반][요일][교시];
                th = Math.floor(일일자료 / 100);
                sb = 일일자료 - th * 100;
                if (원자료 == 일일자료) {
                    속성 = '내용';
                } else {
                    속성 = '변경';
                }
                if (일일자료 > 100) {
                    var 성명 = "";
                    if (th < 자료.자료46.length) {
                        성명 = 자료.자료46[th].substr(0, 2);
                    }
                    p += "<td class='" + 속성 + "'>" + 자료.자료92[sb] + "<br>" + 성명 + "</td>";
                } else {
                    p += "<td class='" + 속성 + "'></td>";
                }
            } else {
                p += "<td class='내용'></td>";
            }
        }
        p += "</tr>";
    }
    p += "</table>";
    return p;
}
