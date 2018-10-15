import requests
import math
import json
import sys

def get_schedule(schedule_url):
    res = requests.get(schedule_url)

    if res.status_code == 200:

        res.encoding = "utf-8"
        json_str = res.text.split('\r')[0]
        자료 = json.loads(json_str)

        학년 = 1
        반 = 7

        n요일 = [None] * 5
        for 요일 in range(1, 6):
            n교시 = [None] * 7
            for 교시 in range(1, 8):
                일일자료 = 자료["자료14"][학년][반][요일][교시]

                선생님_num = math.floor(일일자료 / 100)
                과목_num = 일일자료 - 선생님_num * 100

                선생님 = 자료["자료46"][선생님_num]
                과목 = 자료["자료92"][과목_num]

                n교시[교시 - 1] = [과목, 선생님]
                n요일[요일 - 1] = n교시

        return n요일
    return None

this_week = "http://comci.kr:4081/98372?MzQ3MzlfMTU1MDlfMF8x"
next_week = "http://comci.kr:4081/98372?MzQ3MzlfMTU1MDlfMF8y"

comci = [get_schedule(this_week), get_schedule(next_week)]

file = open("/mnt/server/schedule/comci.json", "wt")
json.dump(comci, file, ensure_ascii=False)
