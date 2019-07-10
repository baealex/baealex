### 머신러닝 핵심 라이브러리

- numpy
- pandas
- matplotlib

---

### 설치

**1. 아나콘다 가상환경 확인 및 제거**

```
(C:\ProgramData\Anaconda3) C:\Users\muser> conda info --envs
(C:\ProgramData\Anaconda3) C:\Users\muser> conda remove --name machine --all
(C:\ProgramData\Anaconda3) C:\Users\muser> conda create -n machine python=3.5 numpy scipy matplotlib spyder pandas seaborn scikit-learn h5py
```

설치하는 패키지 중에 `scikit-learn`는 GPU를 못쓰고 기본적인 머신러닝에만 사용할 수 있다.

**2. Tensorflow 설치**

- 구형 CPU의 경우 `1.3` 이하로 설치
- `Tensorflow 1.5`는 AVX 미지원 CPU
- `Tensorflow 1.6`는 AVX 지원 CPU

가상환경으로 접근

```
activate machine
```

설치했는데 만약 인식이 제대로 안되면 지우고 다시 설치

```
pip uninstall tensorflow
```

설치하고 설치됐는지 `python`에서 확인

```
import tensorflow as tf
print(tf.__version__)
```

**3. Keras 설치**

`1.3` 부터는 내장된 형태이며 `1.2` 이하만 설치하면 된다. 하지만 독립적으로 사용해도 무방하다.

```
pip install keras==2.2.2
```

설치하고 설치됐는지 `python`에서 확인

```
import keras
...
Using TensorFlow backend.
```

**4. 가상환경에서 나오기**

```
deactivate
```

**5. Jupyter Notebook 설정**

경로 생성

```
C:
CD \
MD ai_201905
MD ai_201905\ws_python
MD ai_201905\ws_python\notebook
MD ai_201905\ws_python\notebook\data
CD ai_201905\ws_python\notebook\data
```

설정파일 만들기

```
jupyter notebook --generate-config
```

이제 생성된 파일 열기

```
C:/Users/윈도우 로그인 계정/.jupyter/jupyter_notebook_config.py
```

202번 라인 수정

```
c.NotebookApp.notebook_dir = 'C:/ai_201904/ws_python/notebook'
```

**6. 커널 연동**

1.[Anaconda Prompt] 관리자 권한으로 실행

```
(C:\ProgramData\Anaconda3) C:\Windows\system32> activate machine
```
 
2.ipykernel 라이브러리 설치

```
(machine) C:\Windows\system32>pip install ipykernel 
``` 
 
3.jupyter notebook에 가상환경 kernel 추가

1) CPU 기반 커널 연동
```
(machine) C:\Windows\system32>python -m ipykernel install --user --name=machine
```

2) GPU 기반 커널 연동

```
(machine) C:\Windows\system32>python -m ipykernel install --user --name=machinegpu
```
**7. 주피터 사용법**

명령 상태(파랑)

- x : 잘래내기
- v : 붙여넣기
- a : 위로 추가
- b : 아래로 추가

편집 상태(초록)

`Shift` + `Enter`는 실행 후 다음으로

`Ctrl` + `Enter`는 실행 후 그대로



**8. 파이썬 문법**

는 [이곳을](https://github.com/baealex/ProgramingRecord/tree/master/Python/TensorFlow/Python-Basic/) 참고.