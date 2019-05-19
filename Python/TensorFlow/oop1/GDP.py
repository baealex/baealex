
# coding: utf-8

# In[ ]:

class GDP:
    def __init__(self):
        self.count = 0
        print('객체가 메모리에 생성되었습니다.')
            
    def __del__(self):
        print('객체가 메모리에서 소멸되었습니다.')    
        
    def getNation(self, code):
        self.count = self.count + 1
        str1 = ""  # 지역 변수
        if code == "KOR":
            str1 = "한국"
        elif code == "JAP":
            str1 = "일본"
        elif code == "CHA":
            str1 = "중국"
        
        return str1
 
    def getGDP(self, code):
        self.count = self.count + 1
        gdp = 0   # 지역 변수
        if code == "KOR":
            gdp = 28738
        elif code == "JAP":
            gdp = 37539
        elif code == "CHA":
            gdp = 6747
        
        return gdp

